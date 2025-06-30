import styles from "./List.module.css";
import { PropsWithChildren } from "react";

export const List = ({children}: PropsWithChildren) => <div className={styles.list}>{children}</div>
