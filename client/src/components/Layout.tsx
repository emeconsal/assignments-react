import styles from "./Layout.module.css";

type LayoutProps = {
    children: React.ReactNode;
};

export const Layout = (props: LayoutProps) => {
    const { children } = props;
    return <main className={styles.layout}>{children}</main>;
};
