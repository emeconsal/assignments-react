import { Meta, StoryObj } from "@storybook/react";

import { ListItem } from "../list/ListItem";

const meta = {
    title: "List Item",
    component: ListItem,
    argTypes: {
        onItemDelete: { action: "removed" },
        onItemLabelEdit: { action: "edited" },
        onItemDoneToggle: { action: "toggled" },
    },
    parameters: {
        docs: {
            description: {
                component:
                    "A list item component with hover effects that reveal edit and delete buttons. Hover over the item to see the interactive buttons appear.",
            },
        },
    },
} as Meta<typeof ListItem>;

export default meta;
type Story = StoryObj<typeof ListItem>;

export const ToDo: Story = {
    args: {
        label: "Lorem ipsum dolor",
        isDone: false,
    },
};

export const Done: Story = {
    args: {
        label: "Completed task example",
        isDone: true,
    },
};

export const ToDoWithHover: Story = {
    args: {
        label: "Hover over this item to see buttons",
        isDone: false,
    },
    parameters: {
        docs: {
            description: {
                story: "This story shows the normal behavior. Hover over the item to see the edit and delete buttons appear with a smooth transition.",
            },
        },
    },
};
ToDoWithHover.parameters = {
    pseudo: {
        hover: true,
    },
};

export const DoneWithHover: Story = {
    args: {
        label: "Completed item with hover interaction",
        isDone: true,
    },
    parameters: {
        docs: {
            description: {
                story: "Shows a completed item with the same hover interaction. The checkmark indicates it's done, but you can still edit or delete it.",
            },
        },
    },
};
DoneWithHover.parameters = {
    pseudo: {
        hover: true,
    },
};
