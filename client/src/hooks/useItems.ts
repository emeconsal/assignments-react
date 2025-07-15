import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { deleteItem, toggleItemDone } from "../services/ItemServices";
import { prepareItems } from "../utils/prepareItems";

export interface Item {
    id: number;
    label: string;
    isDone: boolean;
    createdAt: number;
}

export const useItems = () => {
    const [items, setItems] = useState<Item[]>([]);
    const { data, isLoading, error } = useQuery({
        queryKey: ["items"],
        queryFn: () => fetch("http://localhost:3000/items").then((res) => res.json()),
    });
    useEffect(() => {
        if (data) {
            setItems(prepareItems(data));
        }
    }, [data]);

    const onItemDelete = (id: number) => {
        deleteItem(id).then(() => {
            setItems(items.filter((item) => item.id !== id));
        });
    };
    const onItemDoneToggle = async (id: number) => {
        console.log("onItemDoneToggle", id);
    };
    const onItemLabelEdit = (id: number, label: string) => {
        setItems(items.map((item) => (item.id === id ? { ...item, label } : item)));
    };
    return { items, isLoading, error, onItemDelete, onItemDoneToggle, onItemLabelEdit };
};
