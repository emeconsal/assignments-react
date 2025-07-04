import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import React from "react";
import styles from "./ListItem.module.css";

import { Checkbox } from "./Checkbox";

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;

    return (
        <div className={styles.item}>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <label className={styles.label}>{label}</label>
            <button>
                <TrashIcon />
            </button>
            <button onClick={() => onItemDelete()}>
                <Pencil1Icon />
            </button>
        </div>
    );
};
