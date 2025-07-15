import React from "react";
import styles from "./Footer.module.css";

type FooterProps = {
    todoItems?: number;
    doneItems?: number;
};

export const Footer = (props: FooterProps) => {
    const { todoItems, doneItems } = props;

    return (
        <footer className={styles.footer}>
            Todo: {todoItems ?? 0}
            Done: {doneItems ?? 0}
        </footer>
    );
};
