import styles from "./List.module.css";

type ListProps = {
    children: React.ReactNode;
};

export const List = (props: ListProps) => {
    const { children } = props;
    return <div className={styles.list}>{children}</div>;
};
