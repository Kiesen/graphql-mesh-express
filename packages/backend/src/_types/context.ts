import { Request, Response } from 'express';

export type UserRightSet = Set<string>;

export type ResponseWithRights = Response & {
  locals: {
    rights: UserRightSet;
  };
};

export type MeshContext = {
  res: ResponseWithRights;
};
