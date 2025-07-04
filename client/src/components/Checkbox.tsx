import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckboxProps } from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./Checkbox.module.css";

export const Checkbox = (props: CheckboxProps) => (
    <CheckboxPrimitive.Root className={styles.checkbox} {...props}>
        <CheckboxPrimitive.Indicator className={styles.checkboxIndicator}>
            <CheckIcon />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
);
