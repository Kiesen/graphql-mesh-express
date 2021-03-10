import { MeshContext } from '@internalTypes/context';
import {
  MutationResolvers,
  Changes,
} from '@src/mesh/types/generated';

/**
 * We are just returning the input so that eventually the post-action extension,
 * which registered in the `graphqlHTTP` package, will act upon that data
 */
export const logDBResolver: MutationResolvers<
  any,
  MeshContext
>['logDB'] = (parent, args, context): Changes => args.input;
