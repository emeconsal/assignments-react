import styles from "./Button.module.css";

type ButtonProps = {
    children: React.ReactNode;
    onClick: () => void;
    variant?: "primary" | "plus";
};

export const Button = ({ children, onClick, variant = "primary" }: ButtonProps) => {
    return (
        <button className={`${styles.button} ${styles[variant]}`} type="button" onClick={onClick}>
            {children}
        </button>
    );
};
