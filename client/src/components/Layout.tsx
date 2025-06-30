import styles from "./Layout.module.css";
import { PropsWithChildren } from "react";

export const Layout = ({ children }: PropsWithChildren) => <main className={styles.layout}>{children}</main>;
