import {
    FacebookIcon,
    LinkedinIcon,
    TwitterIcon,
    YoutubeIcon,
    InstagramIcon,
    SmartphoneIcon as Android,
    ArrowUp,
    AppleIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export default function MainFooter() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-white text-white px-10 pt-10 relative">
            <div className="bg-black p-10 rounded-t-xl">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <Link
                                to="/about-us"
                                className="block hover:text-primary hover-scale"
                            >
                                About Us
                            </Link>
                            <Link
                                to="/feedback"
                                className="block hover:text-primary hover-scale"
                            >
                                Feedback
                            </Link>
                            <Link
                                to="/community"
                                className="block hover:text-primary hover-scale"
                            >
                                Community
                            </Link>
                        </div>

                        {/* Column 2 */}
                        <div className="space-y-4">
                            <Link
                                to="/trust-safety-security"
                                className="block hover:text-primary hover-scale"
                            >
                                Trust, Safety & Security
                            </Link>
                            <Link
                                to="/help-support"
                                className="block hover:text-primary hover-scale"
                            >
                                Help & Support
                            </Link>
                            <Link
                                to="/foundation"
                                className="block hover:text-primary hover-scale underline"
                            >
                                Reconsha Foundation
                            </Link>
                        </div>

                        {/* Column 3 */}
                        <div className="space-y-4">
                            <Link
                                to="/terms"
                                className="block hover:text-primary hover-scale"
                            >
                                Terms of Service
                            </Link>
                            <Link
                                to="/privacy"
                                className="block hover:text-primary hover-scale"
                            >
                                Privacy Policy
                            </Link>
                            <Link
                                to="/ca-notice"
                                className="block hover:text-primary hover-scale"
                            >
                                CA Notice at Collection
                            </Link>
                            <Link
                                to="/cookie-settings"
                                className="block hover:text-primary hover-scale"
                            >
                                Cookie Settings
                            </Link>
                        </div>

                        {/* Column 4 */}
                        <div className="space-y-4">
                            <Link
                                to="/accessibility"
                                className="block hover:text-primary hover-scale"
                            >
                                Accessibility
                            </Link>
                            <Link
                                to="/desktop-app"
                                className="block hover:text-primary hover-scale"
                            >
                                Desktop App
                            </Link>
                            <Link
                                to="/cookie-policy"
                                className="block hover:text-primary hover-scale"
                            >
                                Cookie Policy
                            </Link>
                            <Link
                                to="/enterprise"
                                className="block hover:text-primary hover-scale"
                            >
                                Enterprise Solutions
                            </Link>
                        </div>
                    </div>

                    {/* Social Media and Mobile Apps Section */}
                    <div className="mt-12 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                        <div className="flex items-center space-x-2">
                            <span className="mr-4">Follow Us</span>
                            <Link
                                to="#"
                                className="p-2 rounded-full border border-white/20 hover:bg-white/10"
                            >
                                <FacebookIcon className="h-5 w-5" />
                            </Link>
                            <Link
                                to="#"
                                className="p-2 rounded-full border border-white/20 hover:bg-white/10"
                            >
                                <LinkedinIcon className="h-5 w-5" />
                            </Link>
                            <Link
                                to="#"
                                className="p-2 rounded-full border border-white/20 hover:bg-white/10"
                            >
                                <TwitterIcon className="h-5 w-5" />
                            </Link>
                            <Link
                                to="#"
                                className="p-2 rounded-full border border-white/20 hover:bg-white/10"
                            >
                                <YoutubeIcon className="h-5 w-5" />
                            </Link>
                            <Link
                                to="#"
                                className="p-2 rounded-full border border-white/20 hover:bg-white/10"
                            >
                                <InstagramIcon className="h-5 w-5" />
                            </Link>
                        </div>

                        <div className="flex items-center space-x-4">
                            <span>Mobile app</span>
                            <Link
                                to="#"
                                className="p-2 rounded-full border border-white/20 hover:bg-white/10"
                            >
                                <AppleIcon className="h-5 w-5" />
                            </Link>
                            <Link
                                to="#"
                                className="p-2 rounded-full border border-white/20 hover:bg-white/10"
                            >
                                <Android className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="mt-12 text-center text-sm text-gray-400">
                        © 2025 - {new Date().getFullYear()} Reconsha® Global
                        Inc.
                    </div>

                    <Button
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 p-2 bg-primary hover:bg-primary/90 text-white rounded-full shadow-lg"
                        size="icon"
                    >
                        <ArrowUp className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </footer>
    );
}
