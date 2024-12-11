import { Outlet, Route, Routes } from 'react-router';
import AuthRoutes from './routes/AuthRoutes';
import ResourceRoutes from './routes/ResourceRoutes';
import Navbar from '@/components/common/nav/Navbar';
import MainFooter from './components/common/footer/MainFooter';
import BillingsPage from './pages/billings/BillingAndSpendingPage';
import TransactionHistoryPage from './pages/trasaction-history/TrasactionHistory';
import ProfilePage from './pages/profile/ProfilePage';
import BuyTagsPage from './pages/buy-tags/BuyTagsPage';
import MembershipPlanPage from './pages/membership-plan/MembershipPlanPage';
import NotificationsPage from './pages/notification/NotificationPage';
import MessagesPage from './pages/messages/MessagesPage';
import SettingsRoutes from './routes/SettingsRoutes';
import ProviderRoutes from './routes/ProviderRoutes';

function MainLayout() {
    return (
        <div>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <MainFooter />
        </div>
    );
}

function App() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<AuthRoutes />} />
                <Route path="provider/*" element={<ProviderRoutes />} />
                <Route element={<MainLayout />}>
                    <Route
                        path="/"
                        element={
                            <div className="min-h-[60vh] text-center flex items-center justify-center">
                                Dashboard
                            </div>
                        }
                    />
                    <Route path="resource/*" element={<ResourceRoutes />} />
                    <Route path="settings/*" element={<SettingsRoutes />} />
                    <Route
                        path="finances/billings"
                        element={<BillingsPage />}
                    />
                    <Route
                        path="finances/transactions"
                        element={<TransactionHistoryPage />}
                    />
                    <Route path="profile" element={<ProfilePage />} />

                    <Route path="tags/buy" element={<BuyTagsPage />} />
                    <Route
                        path="membership/plan"
                        element={<MembershipPlanPage />}
                    />

                    <Route
                        path="notifications"
                        element={<NotificationsPage />}
                    />
                    <Route path="message" element={<MessagesPage />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
