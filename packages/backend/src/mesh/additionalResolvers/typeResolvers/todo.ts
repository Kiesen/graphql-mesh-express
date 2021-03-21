import { Live_TodoResolvers } from '@internalTypes/schema';

export const todoResolver: Live_TodoResolvers = {
  comments: () => ['Just a comment', 'Another comment'],
};
