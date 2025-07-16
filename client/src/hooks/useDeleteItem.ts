import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CONSTANTS } from "../constants";

export const useDeleteItem = () => {
    const queryClient = useQueryClient();

    const { mutate: deleteItem, isPending: isDeleting } = useMutation({
        mutationFn: async (id: number) => {
            const response = await fetch(`${CONSTANTS.BASE_URL}/items/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete item");
            }
            return "Deleted item";
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["items"] });
        },
    });
    return { deleteItem, isDeleting };
};
