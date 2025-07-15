import { Container } from "./components/Container";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { ListItem } from "./components/ListItem";
import "./global.css";
import { Item, useItems } from "./hooks/useItems";
export const App = () => {
    const { data, isLoading, error } = useItems();
    return (
        <Container>
            <Layout>
                <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                <List>
                    {data?.map((item: Item) => (
                        <ListItem
                            key={item.id}
                            label={item.label}
                            isDone={item.isDone}
                            onItemLabelEdit={() => console.warn("unimplemented")}
                            onItemDoneToggle={() => console.warn("unimplemented")}
                            onItemDelete={() => console.warn("unimplemented")}
                        />
                    ))}
                </List>
                <Footer todoItems={data?.length} doneItems={data?.filter((item: Item) => item.isDone).length} />
            </Layout>
        </Container>
    );
};
