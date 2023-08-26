'use client';

import { clsx } from 'clsx';
import { useSession } from '@repo/auth/react';
import { ThumbsUp } from '@repo/ui/icons';

interface ThumbUpvoteButtonProps {
    votes: number;
    hasVoted: boolean;
    onClick: (shouldIncrement: boolean) => void;
}

export function ThumbUpvoteButton({ votes, hasVoted, onClick }: ThumbUpvoteButtonProps) {
    const session = useSession();

    return (
        <button
            className="group flex h-6 items-center gap-1 rounded-full bg-zinc-200 pl-[0.675rem] pr-2 text-sm disabled:cursor-not-allowed disabled:bg-zinc-100 dark:bg-zinc-700 disabled:dark:bg-zinc-700/50"
            disabled={!session.data?.user.id}
            onClick={() => onClick(!hasVoted)}
        >
            <ThumbsUp
                className={clsx(
                    {
                        'fill-emerald-600 stroke-emerald-600 group-hover:stroke-emerald-600 dark:fill-emerald-400 dark:stroke-emerald-400 group-hover:dark:stroke-emerald-400':
                            hasVoted,
                        'stroke-zinc-500 group-hover:stroke-zinc-600 group-disabled:stroke-zinc-300 dark:stroke-zinc-300 group-hover:dark:stroke-zinc-100 group-disabled:dark:stroke-zinc-500/50':
                            !hasVoted,
                    },
                    'h-4 w-4 duration-200',
                )}
            />
            <span
                className={clsx(
                    {
                        'text-emerald-600 dark:text-emerald-400': hasVoted,
                        'text-zinc-500 group-hover:text-zinc-600 group-disabled:text-zinc-300 dark:text-zinc-300 group-hover:dark:text-zinc-100 group-disabled:dark:text-zinc-500/50':
                            !hasVoted,
                    },
                    'my-auto self-end duration-300',
                )}
            >
                {votes}
            </span>
        </button>
    )
}