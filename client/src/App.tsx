import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import "./global.css";
import { Item, useItems } from "./hooks/useItems";
export const App = () => {
    const { items, isLoading, error, onItemDelete, onItemDoneToggle, onItemLabelEdit } = useItems();
    return (
        <Container>
            <Layout>
                <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                <List>
                    {isLoading && <div>Loading...</div>}
                    {error && <div>Error: {error.message}</div>}
                    {items?.map((item: Item) => (
                        <ListItem
                            key={item.id}
                            label={item.label}
                            isDone={item.isDone}
                            onItemLabelEdit={(label: string) => onItemLabelEdit(item.id, label)}
                            onItemDoneToggle={() => onItemDoneToggle(item.id)}
                            onItemDelete={() => onItemDelete(item.id)}
                        />
                    ))}
                </List>
                <Footer todoItems={items?.length} doneItems={items?.filter((item: Item) => item.isDone).length} />
            </Layout>
        </Container>
    );
};
