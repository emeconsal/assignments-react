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
