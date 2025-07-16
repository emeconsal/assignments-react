import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import "./global.css";
import { useCreateItem } from "./hooks/useCreateItem";
import { useDeleteItem } from "./hooks/useDeleteItem";
import { Item, useItems } from "./hooks/useItems";
import { useUpdateItem } from "./hooks/useUpdateItem";
export const App = () => {
    const { items, isLoading, error } = useItems();
    const { updateItemDone, updateItem } = useUpdateItem();
    const { deleteItem } = useDeleteItem();
    const { createItem } = useCreateItem();

    return (
        <Container>
            <Layout>
                <Header onItemAdd={createItem}>To Do app</Header>
                <List>
                    {isLoading && <div>Loading...</div>}
                    {error && <div>Error: {error.message}</div>}
                    {items?.map(({ id, label, isDone }: Item) => (
                        <ListItem
                            key={id}
                            label={label}
                            isDone={isDone}
                            onItemLabelEdit={(label: string) => updateItem({ id, updatedFields: { label } })}
                            onItemDoneToggle={() => updateItemDone(id)}
                            onItemDelete={() => deleteItem(id)}
                        />
                    ))}
                </List>
                <Footer todoItems={items?.length} doneItems={items?.filter((item: Item) => item.isDone).length} />
            </Layout>
        </Container>
    );
};
