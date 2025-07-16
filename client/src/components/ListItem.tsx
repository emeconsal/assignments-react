import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import styles from "./ListItem.module.css";

import { Checkbox } from "./Checkbox";
import { Form } from "./form";

export type LiteeItemProp = {
    label: string;
    isDone: boolean;
    onItemLabelEdit: (label: string) => void;
    onItemDoneToggle: (isDone: boolean) => void;
    onItemDelete: () => void;
};

export const ListItem = (props: LiteeItemProp) => {
    const { label, isDone, onItemLabelEdit, onItemDoneToggle, onItemDelete } = props;
    const [isEditing, setIsEditing] = useState(false);

    if (isEditing) {
        return (
            <Form
                initialValue={label}
                onSubmit={(label) => {
                    onItemLabelEdit(label);
                    setIsEditing(false);
                }}
                onCancel={() => setIsEditing(false)}
            />
        );
    }

    return (
        <div className={styles.item}>
            <Checkbox checked={isDone} onCheckedChange={onItemDoneToggle} />
            <label className={styles.label}>{label}</label>
            <div className={styles.buttons}>
                <button onClick={onItemDelete}>
                    <TrashIcon />
                </button>
                <button onClick={() => setIsEditing(true)}>
                    <Pencil1Icon />
                </button>
            </div>
        </div>
    );
};
