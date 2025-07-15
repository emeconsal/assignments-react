import { Item } from "../hooks/useItems";
//Sort items by isDone and after that, the remaining items should be sorted by createdAt

export const prepareItems = (items: Item[]) => {
    return items.toSorted((a, b) => {
        if (a.isDone !== b.isDone) {
            return a.isDone ? 1 : -1; // not done first, done last
        }
        return b.createdAt - a.createdAt; // within group, sort by createdAt
    });
};
