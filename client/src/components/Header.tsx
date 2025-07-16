import { PlusIcon } from "@radix-ui/react-icons";
import React, { useState } from "react";
import { Button } from "./button/Button";
import { Form } from "./form";
import styles from "./Header.module.css";

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
                <Button onClick={() => setIsFormOpen(true)} variant="plus">
                    <PlusIcon />
                </Button>
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
