import { GraphQLFieldResolver } from 'graphql';
import { MeshContext } from './context';

export type ResolverComposer = (
  next: GraphQLFieldResolver<any, MeshContext>
) => GraphQLFieldResolver<any, MeshContext>;
