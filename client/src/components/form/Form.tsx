import { CheckIcon, Cross1Icon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styles from "./Form.module.css";

import { Button } from "../button/Button";
import { Input } from "./Input";

type FormProps = {
    initialValue: string;
    onSubmit: (value: string) => void;
    onCancel: () => void;
};

export const Form = (props: FormProps) => {
    const { initialValue, onSubmit, onCancel } = props;

    const [inputValue, setInputValue] = useState(initialValue);

    return (
        <form
            className={styles.form}
            onSubmit={(e) => {
                e.preventDefault();
                onSubmit(inputValue);
            }}
            onReset={() => {
                onCancel();
            }}
        >
            <Input value={inputValue} onValueChange={(value) => setInputValue(value)} />
            <div className={styles.buttonsContainer}>
                <Button onClick={() => onSubmit(inputValue)} variant="primary">
                    <CheckIcon />
                </Button>
                <Button onClick={() => onCancel()} variant="primary">
                    <Cross1Icon />
                </Button>
            </div>
        </form>
    );
};
