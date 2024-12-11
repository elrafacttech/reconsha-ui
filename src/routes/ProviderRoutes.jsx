import MainFooter from '@/components/common/footer/MainFooter';
import ProviderNavbar from '@/components/common/nav/ProviderNavbar';
import ProviderHomePage from '@/pages/provider/home/ProviderHomePage';
import { Outlet, Route, Routes } from 'react-router';

function MainLayout() {
    return (
        <div>
            <ProviderNavbar />
            <main>
                <Outlet />
            </main>
            <MainFooter />
        </div>
    );
}

function ProviderRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<ProviderHomePage />} />
            </Route>
        </Routes>
    );
}

export default ProviderRoutes;
