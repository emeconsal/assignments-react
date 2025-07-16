import { Pencil1Icon, TrashIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import styles from "./ListItem.module.css";

import { Button } from "./Button/Button";
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
                <Button onClick={onItemDelete} variant="primary">
                    <TrashIcon />
                </Button>
                <Button onClick={() => setIsEditing(true)} variant="primary">
                    <Pencil1Icon />
                </Button>
            </div>
        </div>
    );
};
