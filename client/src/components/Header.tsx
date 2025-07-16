import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import styles from "./Header.module.css";
import { Form } from "./form";

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children, onItemAdd } = props;
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <header className={styles.header}>
            <h1>{children}</h1>
            {!isFormOpen && (
                <button className={styles.button} onClick={() => setIsFormOpen(true)}>
                    <PlusIcon />
                </button>
            )}
            {isFormOpen && (
                <Form
                    initialValue=""
                    onSubmit={(label) => {
                        onItemAdd(label);
                    }}
                    onCancel={() => setIsFormOpen(false)}
                />
            )}
        </header>
    );
};
