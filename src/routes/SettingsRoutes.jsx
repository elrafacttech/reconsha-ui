import SettingsLayout from '@/pages/settings/SettingsLayout';
import BillingSettingsPage from '@/pages/settings/billing/BillingSettingsPage';
import ContactInfoSettingsPage from '@/pages/settings/contact-info/ContactInfoSettingsPage';
import MembershipAndTagsSettingsPage from '@/pages/settings/membership-tags/MembershipAndTagsPage';
import NotificationSettingsPage from '@/pages/settings/notification/NotificationSettingsPage';
import PasswordAndSecuritySettingsPage from '@/pages/settings/password-security/PasswordAndSecuitySettingsPage';
import VerificationSettingsPage from '@/pages/settings/verification/VerificationSettingsPage';
import { Route, Routes } from 'react-router';
function SettingsRoutes() {
    return (
        <SettingsLayout>
            <Routes>
                <Route path="billing" element={<BillingSettingsPage />} />
                <Route
                    path="membership"
                    element={<MembershipAndTagsSettingsPage />}
                />
                <Route
                    path="security"
                    element={<PasswordAndSecuritySettingsPage />}
                />
                <Route
                    path="verification"
                    element={<VerificationSettingsPage />}
                />
                <Route
                    path="notifications"
                    element={<NotificationSettingsPage />}
                />
                <Route path="contact" element={<ContactInfoSettingsPage />} />
            </Routes>
        </SettingsLayout>
    );
}

export default SettingsRoutes;
