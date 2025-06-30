type InputProps = {
    value: string;
    onValueChange: (value: string) => void;
};
import styles from './Input.module.css'

export const Input = (props: InputProps) => {
    const { value, onValueChange } = props;

    return (
        <input
            className={styles.input}
            value={value}
            onChange={(e) => {
                const value = e.currentTarget.value;
                onValueChange(value);
            }}
        />
    );
};
