import styles from "./Container.module.css";

type ContainerProps = {
    children: React.ReactNode;
};

export const Container = (props: ContainerProps) => {
    const { children } = props;
    return <div className={styles.container}>{children}</div>;
};
