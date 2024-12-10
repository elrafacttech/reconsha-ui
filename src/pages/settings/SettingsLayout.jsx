import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router';

const navigation = [
    {
        title: 'Billing',
        links: [{ href: '/settings/billing', label: 'Billing & Payments' }],
    },
    {
        title: 'User Settings',
        links: [
            { href: '/settings/membership', label: 'Membership & Tags' },
            { href: '/settings/contact', label: 'Contact Info' },
            { href: '/settings/profile', label: 'My Profile' },
            { href: '/settings/security', label: 'Password & Security' },
            { href: '/settings/verification', label: 'Identity Verification' },
            { href: '/settings/notifications', label: 'Notification Settings' },
        ],
    },
];

export default function SettingsLayout({ children }) {
    const pathname = useLocation();

    return (
        <div className="container max-w-7xl mx-auto px-4 py-8">
            <h1 className="text-4xl font-medium mb-8">Settings</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <aside className="w-full md:w-64 flex-shrink-0">
                    <nav className="space-y-8">
                        {navigation.map((section) => (
                            <div key={section.title}>
                                <h2 className="text-xl font-medium mb-4">
                                    {section.title}
                                </h2>
                                <ul className="space-y-0">
                                    {section.links.map((link) => (
                                        <li key={link.href}>
                                            <Link
                                                to={link.href}
                                                className={cn(
                                                    'block px-3 border-l-2 py-2 text-sm font-medium transition-colors',
                                                    location.pathname ===
                                                        link.href
                                                        ? 'text-primary border-primary'
                                                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </nav>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}
