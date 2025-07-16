import { Meta, StoryObj } from "@storybook/react";

import { Footer } from "../Footer";
import { Header } from "../Header";
import { Layout } from "../Layout";
import { List } from "../List";
import { ListItem } from "../ListItem";

const meta = {
    title: "Layout",
    component: Layout,
    parameters: {
        docs: {
            description: {
                component:
                    "A main layout container component that provides consistent styling and structure for page content.",
            },
        },
    },
} as Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof Layout>;

const mockItems = [
    { id: 1, label: "Item 1", isDone: false },
    { id: 2, label: "Item 2", isDone: false },
    { id: 3, label: "Item 3", isDone: true },
];

export const Default: Story = {
    args: {
        children: (
            <>
                <Header onItemAdd={() => {}}>To Do app</Header>
                <List>
                    {mockItems.map((item) => (
                        <ListItem
                            key={item.id}
                            label={item.label}
                            isDone={item.isDone}
                            onItemLabelEdit={() => {}}
                            onItemDoneToggle={() => {}}
                            onItemDelete={() => {}}
                        />
                    ))}
                </List>
                <Footer todoItems={mockItems.length} doneItems={mockItems.filter((item) => item.isDone).length} />
            </>
        ),
    },
};

export const Empty: Story = {
    args: {
        children: null,
    },
};
