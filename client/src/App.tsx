import { Container } from "./components/Container";
import { Layout } from "./components/Layout";
import { List } from "./components/List";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import './global.css';

export const App = () => (
        <Container>
            <Layout>
                <Header onItemAdd={() => console.warn("unimplemented")}>To Do app</Header>
                <List />
                <Footer />
            </Layout>
        </Container>
);
