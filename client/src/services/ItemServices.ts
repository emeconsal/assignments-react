const BASE_URL = "http://localhost:3000";
export const deleteItem = async (id: number) => {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Failed to delete item");
    }
    return response.json();
};
export const toggleItemDone = async (id: number) => {
    const response = await fetch(`${BASE_URL}/items/${id}/done`, {
        method: "PATCH",
    });

    if (!response.ok) {
        throw new Error("Failed to toggle item done");
    }
    return response;
};
