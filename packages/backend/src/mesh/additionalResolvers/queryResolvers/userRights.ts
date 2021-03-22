import { MeshContext } from '@internalTypes/context';
import { QueryResolvers } from '@internalTypes/schema';
import { UserRight } from '@src/rights/config';

export const userRightsResolver: QueryResolvers<
  any,
  MeshContext
>['userRights'] = () => Object.values(UserRight);
