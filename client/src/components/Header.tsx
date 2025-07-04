import { PlusIcon } from "@radix-ui/react-icons";
import React from "react";
import styles from "./Header.module.css";

type HeaderProps = {
    children: React.ReactNode;
    onItemAdd: (label: string) => void;
};

export const Header = (props: HeaderProps) => {
    const { children } = props;

    return (
        <header className={styles.header}>
            <h1>{children}</h1>
            <button className={styles.button}>
                <PlusIcon />
            </button>
        </header>
    );
};
