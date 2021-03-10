import { MeshContext } from '@internalTypes/context';
import { QueryResolvers } from '@src/mesh/types/generated';
import { UserRight } from '@src/rights/config';

export const userRightsResolver: QueryResolvers<
  any,
  MeshContext
>['userRights'] = () => Object.values(UserRight);
