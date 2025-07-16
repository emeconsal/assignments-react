import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CONSTANTS } from "../constants";
import { Item } from "./useItems";

export const useUpdateItem = () => {
    const queryClient = useQueryClient();

    const { mutate: updateItem, isPending: isUpdating } = useMutation({
        mutationFn: async ({ id, updatedFields }: { id: number; updatedFields: Partial<Item> }) => {
            const response = await fetch(`${CONSTANTS.BASE_URL}/items/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedFields),
            });
            if (!response.ok) {
                throw new Error("Failed to toggle item done");
            }
            return "Updated item status";
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["items"] });
        },
    });

    const { mutate: updateItemDone, isPending } = useMutation({
        mutationFn: async (id: number) => {
            const response = await fetch(`${CONSTANTS.BASE_URL}/items/${id}/done`, {
                method: "PATCH",
            });

            if (!response.ok) {
                throw new Error("Failed to toggle item done");
            }
            return "Updated item status";
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["items"] });
        },
    });

    return { updateItemDone, updateItem, isUpdating, isPending };
};
