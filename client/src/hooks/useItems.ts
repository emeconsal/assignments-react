import { useQuery } from "@tanstack/react-query";

export interface Item {
    id: number;
    label: string;
    isDone: boolean;
}

export const useItems = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["items"],
        queryFn: () => fetch("http://localhost:3000/items").then((res) => res.json()),
    });
    return { data, isLoading, error };
};
