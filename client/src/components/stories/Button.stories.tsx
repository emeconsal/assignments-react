import { Meta, StoryObj } from "@storybook/react";

import { CheckIcon, PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { Button } from "../Button/Button";

const meta = {
    title: "Button",
    component: Button,
    parameters: {
        docs: {
            description: {
                component: "A versatile button component with primary and plus variants for different use cases.",
            },
        },
    },
    argTypes: {
        onClick: { action: "clicked" },
        variant: {
            control: { type: "select" },
            options: ["primary", "plus"],
        },
    },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: <CheckIcon />,
        variant: "primary",
    },
};

export const Delete: Story = {
    args: {
        children: <TrashIcon />,
        variant: "primary",
    },
};

export const Plus: Story = {
    args: {
        children: <PlusIcon />,
        variant: "plus",
    },
};
