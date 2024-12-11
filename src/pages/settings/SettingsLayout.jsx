import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
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
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    return (
        <div className="container max-w-7xl mx-auto px-4 py-8">
            <h1 className="hidden md:block text-3xl sm:text-4xl font-medium mb-6 sm:mb-8">
                Settings
            </h1>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8">
                <aside className="w-full md:w-64 flex-shrink-0">
                    <Collapsible
                        open={isOpen}
                        onOpenChange={setIsOpen}
                        className="md:hidden mb-6"
                    >
                        <CollapsibleTrigger asChild>
                            <h1 className="text-3xl sm:text-4xl font-medium mb-6 sm:mb-8 flex justify-between items-center">
                                Settings
                                <Button size="icon" variant="ghost">
                                    <ChevronDown
                                        className={cn(
                                            'h-4 w-4 transition-transform duration-200',
                                            isOpen ? 'rotate-180' : ''
                                        )}
                                    />
                                </Button>
                            </h1>
                        </CollapsibleTrigger>
                        <CollapsibleContent className="mt-2">
                            <NavigationContent pathname={location.pathname} />
                        </CollapsibleContent>
                    </Collapsible>
                    <div className="hidden md:block">
                        <NavigationContent pathname={location.pathname} />
                    </div>
                </aside>
                <main className="flex-1">{children}</main>
            </div>
        </div>
    );
}

function NavigationContent({ pathname }) {
    return (
        <nav className="space-y-6 sm:space-y-8">
            {navigation.map((section) => (
                <div key={section.title}>
                    <h2 className="text-lg sm:text-xl font-medium mb-2 sm:mb-4">
                        {section.title}
                    </h2>
                    <ul className="space-y-1">
                        {section.links.map((link) => (
                            <li key={link.href}>
                                <Link
                                    to={link.href}
                                    className={cn(
                                        'block px-3 border-l-2 py-2 text-sm font-medium transition-colors',
                                        pathname === link.href
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
    );
}
