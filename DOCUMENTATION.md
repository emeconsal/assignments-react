# ⌚ Time Estimation

I estimated around 3-4 hours for completing the whole task, I ended ups spending around 4-5h in total, I had some fights with my package manager to install the storybook addon, and [spend 30 mins](https://github.com/emeconsal/assignments-react/commit/77a3c1d958970754cd5acbe8d408289a2f0bd8d1) trying to implement a cleaner approach for hooks using only TanStack Query (without useStates or useEffects)

I started on Tuesday 16/07, at 6 PM, finished around 8 PM and then continued on Wednesday 16/07 at 4 PM approx until 6 PM.
(First commits were fast because I started coding on the main repo (rookie mistake 😅))

The styling part was very short, around 1 hour maximum if I count all different tasks that I kept doing intermitently.

The biggest challenges were implementing the hooks for fetching, updating and removing data and surprisingly debug my pnpm to install the storybook addon.

# 🧠 Reasoning behind technologies and architecture

### Tanstack Query

In general it's a great tool to work with APIs as it already contains built-in, caching, revalidation and it can be highly configurable if needed (I used a basic setup with useQuery and useMutation for simplicity).

Whenever any mutation is done (delete, update, create item), the cache is revalidated (only [onSuccess](client/src/hooks/useCreateItem.ts#23))

### Storybook Addon: storybook-addon-pseudo-states

It's the [recommended library and approach to use](https://storybook.js.org/addons/storybook-addon-pseudo-states) when forcing pseudo states according to the official documentation, I imagine there are ways to do it natively, but I don't have much experience with StoryBook.

# 🛠️ Tools used

-   Cursor
-   pnpm
-   Claude-4-sonnet (built-in Cursor)
