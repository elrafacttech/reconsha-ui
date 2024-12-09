import SignupPage from '@/pages/signup/SignupPage';
import { Route, Routes } from 'react-router';
import LoginPage from '@/pages/login/LoginPage';
import ForgotPasswordPage from '@/pages/forgot-password/ForgotPasswordPage';
import OnboardingPage from '@/pages/onboarding/OnboardingPage';
function AuthRoutes() {
    return (
        <Routes>
            <Route path="onboarding" element={<OnboardingPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
    );
}

export default AuthRoutes;
