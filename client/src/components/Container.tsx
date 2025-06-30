import styles from "./Container.module.css";
import { PropsWithChildren } from "react";

export const Container  = ({children}: PropsWithChildren) =>  <div className={styles.container}>{children}</div>