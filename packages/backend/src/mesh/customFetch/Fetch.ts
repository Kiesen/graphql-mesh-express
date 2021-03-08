// TODO: Turn into a class if needed

export const customFetch = async (
  endpoint: string,
  requestInitObj: RequestInit
): Promise<Response> =>
  fetch(endpoint, {
    ...requestInitObj,
    headers: {
      ...(requestInitObj || {}).headers,
      // for example, adding headers for authorization
      Authorization: `Bearer ${process.env.SOME_SECRET}`,
    },
  }).then(async (res) => {
    if (res.status === 200) {
      // return the response to GraphQL Mesh
      return res;
    } else if (res.status === 401) {
      // if the authorization bearer token is dynamic and it has expired
      // we could update it and execute the same fetch again
      // It is just an example
      process.env.SOME_SECRET = 'newSecret';

      return await fetch(endpoint, {
        ...requestInitObj,
        headers: {
          ...(requestInitObj || {}).headers,
          // updated token
          Authorization: `Bearer ${process.env.SOME_SECRET}`,
        },
      });
    } else {
      // will be included by GraphQL Mesh in the errors array
      throw new Error('Unknown error');
    }
  });
