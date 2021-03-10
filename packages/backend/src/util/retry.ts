type RetryConfig = {
  maxRetries?: number; // Maximum number of times to execute `retryFunction()`
  delayMilliseconds?: number; // Initial number of milliseconds to wait between retries.
  backOffMultiplier?: number; // Factor to increase `delayMilliseconds` by after each retry.
  maxDelayMilliseconds?: number; // Maximal number of milliseconds to wait between retries.
  retryOnReject?: boolean; // Set to true if a rejection of the Promise returned by `retryFunction()` also should trigger a retry.
  retryCounter?: number; // Keeps track of the number of retries. Not to be used by the initial caller of `retry()`
};

const defaultConfig: Required<RetryConfig> = {
  maxRetries: 3,
  delayMilliseconds: 2000,
  backOffMultiplier: 2,
  maxDelayMilliseconds: 16000,
  retryOnReject: false,
  retryCounter: 1,
};

/*
 * @param retryFunction Function to be potentially executed several times.
 * @param checkFunction Function checking the result of `retryFunction()`. Return false if you want `retryFunction()` to be executed again.
 * @param retryCallback Function that is called whenever `checkFunction()` returns false and a retry is scheduled.
 * @param config See RetryConfig.
 */
export const retry = <T>(
  retryFunction: () => Promise<T>,
  checkFunction: (result: T) => Promise<boolean>,
  retryCallback: (
    delay: number,
    retryCounter: number,
    error?: any
  ) => void,
  config: RetryConfig
): Promise<T> =>
  new Promise<T>((resolve, reject) => {
    const completeConfig: Required<RetryConfig> = {
      ...defaultConfig,
      ...config,
    };

    const {
      maxRetries,
      delayMilliseconds,
      backOffMultiplier,
      maxDelayMilliseconds,
      retryOnReject,
      retryCounter,
    } = completeConfig;

    const scheduleRetry = (errorToReport?: any): void => {
      const updatedDelayMilliseconds = Math.min(
        delayMilliseconds * backOffMultiplier,
        maxDelayMilliseconds
      );
      const configForTimeoutCallback = {
        ...completeConfig,
        delayMilliseconds: updatedDelayMilliseconds,
        maxRetries: maxRetries - 1,
        retryCounter: completeConfig.retryCounter + 1,
      };
      setTimeout(() => {
        // recursively call retry() again with updated parameters
        retry(
          retryFunction,
          checkFunction,
          retryCallback,
          configForTimeoutCallback
        )
          .then((result) => {
            return resolve(result);
          })
          .catch((error) => {
            return reject(error);
          });
      }, delayMilliseconds);
      retryCallback(delayMilliseconds, retryCounter, errorToReport);
    };

    if (maxRetries === 0) {
      reject(new Error('Maximum number of retries.'));
    } else {
      retryFunction()
        .then(async (result) => {
          if (await checkFunction(result)) {
            return resolve(result);
          } else {
            return scheduleRetry('Check failed.');
          }
        })
        .catch((error) => {
          if (retryOnReject) {
            return scheduleRetry(error);
          } else {
            return reject(error);
          }
        });
    }
  });
