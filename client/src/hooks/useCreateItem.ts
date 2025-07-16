import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CONSTANTS } from "../constants";
import { Item } from "./useItems";

export const useCreateItem = () => {
    const queryClient = useQueryClient();

    const { mutate: createItem, isPending } = useMutation({
        mutationFn: async (label: string) => {
            const item = { label, isDone: false, createdAt: Date.now() };
            const response = await fetch(`${CONSTANTS.BASE_URL}/items`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(item),
            });
            if (!response.ok) {
                throw new Error("Failed to create item");
            }
            return (await response.json()) as Item;
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["items"] });
        },
    });

    return { createItem, isPending };
};
