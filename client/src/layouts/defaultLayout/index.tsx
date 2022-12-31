import { Header } from "../../components/Header";
import { LayoutContainer, MainContent } from "./styles";
import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            <MainContent>
                <Outlet />
            </MainContent>
        </LayoutContainer>
    )
}