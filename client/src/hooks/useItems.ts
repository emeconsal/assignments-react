import { useQuery } from "@tanstack/react-query";
import { CONSTANTS } from "../constants";
import { prepareItems } from "../utils/prepareItems";

export interface Item {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
}

export const useItems = () => {
    const response = useQuery({
        queryKey: ["items"],
        queryFn: async () => {
            const response = await fetch(`${CONSTANTS.BASE_URL}/items`);
            if (!response.ok) {
                throw new Error("Failed to fetch items");
            }
            return (await response.json()) as Item[];
        },
    });
    const { data } = response;
    const items = prepareItems(data ?? []);

    return { items, ...response };
};
