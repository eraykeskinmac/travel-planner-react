import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Page } from '../utils/styles';

export const AppPage = () => {
    return (
        <Page>
            <Sidebar/>
            <Outlet/>   
        </Page>
    )
}