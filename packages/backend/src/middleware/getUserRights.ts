import { Request, Response, NextFunction } from 'express';

import { ResponseWithRights } from '@_types/context';
import { UserRight } from '@src/rights/config';

/**
 * Use this middleware to define the set of rights that the user has
 */
export const getUserRights = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<ResponseWithRights | void> => {
  // Giving all the rights
  (res as ResponseWithRights).locals.rights = new Set(
    Object.values(UserRight)
  );
};
