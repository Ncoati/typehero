import { type Prisma } from '@prisma/client';

export function VoteMock(userId: string, commentId: number): Prisma.VoteCreateManyInput {
  return {
    userId,
    commentId,
  };
}
