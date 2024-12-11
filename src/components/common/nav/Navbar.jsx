import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Bell,
    ChevronDown,
    CircleDollarSign,
    CircleHelp,
    CircleUser,
    CircleUserRound,
    ExternalLink,
    LayoutDashboard,
    LogOut,
    Menu,
    Moon,
    Search,
    Settings,
    Tags,
    TrendingUp,
} from 'lucide-react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Link } from 'react-router';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Logo from '../logo/Logo';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            label: 'Find Resources',
            link: '/resource',
            subLink: [
                { label: 'Find Resources ✔️', link: '/find' },
                { label: 'Saved Resources', link: '/saved' },
                { label: 'Proposals and offers ✔️', link: '/proposals' },
            ],
        },
        {
            label: 'Resource Details',
            link: '/resource',
            subLink: [
                { label: 'Your active resources ✔️', link: '' },
                { label: 'Resource history', link: '' },
            ],
        },
        {
            label: 'Manage finances',
            link: '/finances',
            subLink: [
                { label: 'Financial overview', link: '/overview' },
                { label: 'Your reports', link: '/reports' },
                { label: 'Billings and earnings ✔️', link: '/billings' },
                {
                    label: 'Transactions and invoices ✔️',
                    link: '/transactions',
                },
                {
                    label: 'Certificate of earnings',
                    link: '/certificate',
                    icon: ExternalLink,
                },
                { label: 'Payments', link: null },
                { label: 'Withdraw earnings', link: '/withdraw' },
                { label: 'Taxes', link: null },
                { label: 'Tax forms', link: '/tax-forms' },
                { label: 'Tax information', link: '/tax/information' },
            ],
        },
        {
            label: 'Messages ✔️',
            link: '/message',
            subLink: [],
        },
    ];

    return (
        <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6 xl:px-0 2xl:px-0 z-20">
            <div className="flex items-center gap-4">
                <Logo />
                <nav className="hidden xl:flex flex-col gap-6 text-lg font-medium lg:flex-row lg:items-center lg:gap-5 lg:text-sm">
                    {navLinks.map((link) => (
                        <NavigationMenu key={link.link}>
                            <NavigationMenuList>
                                {link.subLink.length !== 0 ? (
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger className="data-[state=open]:text-primary">
                                            {link.label}
                                        </NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <ul className="p-4 w-max flex flex-col gap-2">
                                                {link.subLink.map((subLink) => (
                                                    <React.Fragment
                                                        key={subLink.link}
                                                    >
                                                        {subLink.link ===
                                                        null ? (
                                                            <span className="text-muted-foreground border-t-2 pt-2 px-3">
                                                                {subLink.label}
                                                            </span>
                                                        ) : (
                                                            <ListItem
                                                                title={
                                                                    <span className="flex items-center gap-2">
                                                                        {
                                                                            subLink.label
                                                                        }{' '}
                                                                        {subLink.icon && (
                                                                            <subLink.icon className="size-4 text-black" />
                                                                        )}
                                                                    </span>
                                                                }
                                                                to={
                                                                    link.link +
                                                                    subLink.link
                                                                }
                                                            />
                                                        )}
                                                    </React.Fragment>
                                                ))}
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                ) : (
                                    <Link to={link.link}>
                                        <NavigationMenuLink
                                            className={navigationMenuTriggerStyle()}
                                        >
                                            {link.label}
                                        </NavigationMenuLink>
                                    </Link>
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    ))}
                </nav>
            </div>
            <div className="flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="hidden md:block ml-auto flex-1 sm:flex-initial">
                    <div className="relative rounded-full border-none bg-muted overflow-hidden">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search"
                            className="pl-8 w-max border-none outline-none"
                        />
                    </div>
                </form>

                <CircleHelp className="hidden sm:block size-7 text-black font-thin cursor-pointer stroke-1" />

                <Link to="/notifications" className="hidden sm:block">
                    <Bell className="size-7 text-black font-thin cursor-pointer stroke-1" />
                </Link>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="secondary"
                            size="icon"
                            className="rounded-full"
                        >
                            <CircleUser className="h-5 w-5" />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="p-4">
                        <UserDropdownContent />
                    </DropdownMenuContent>
                </DropdownMenu>

                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="shrink-0 xl:hidden"
                        >
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">
                                Toggle navigation menu
                            </span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        side="left"
                        className="w-[300px] sm:w-[400px] py-10"
                    >
                        <nav className="flex flex-col gap-4">
                            <div className="relative rounded-full border-none bg-muted overflow-hidden">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search"
                                    className="pl-8 w-[300px] lg:w-[400px] border-none outline-none"
                                />
                            </div>
                            <ScrollArea className="h-[calc(100vh-16rem)]">
                                {navLinks.map((link) => (
                                    <div key={link.link} className="mb-2">
                                        {link.subLink.length !== 0 ? (
                                            <Collapsible>
                                                <CollapsibleTrigger className="flex w-full items-center justify-between py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md px-2 transition-colors">
                                                    {link.label}
                                                    <ChevronDown className="h-4 w-4 transition-transform duration-200" />
                                                </CollapsibleTrigger>
                                                <CollapsibleContent className="pl-4 pb-2">
                                                    <ul className="space-y-1">
                                                        {link.subLink.map(
                                                            (subLink) => (
                                                                <li
                                                                    key={
                                                                        subLink.link
                                                                    }
                                                                >
                                                                    {subLink.link ===
                                                                    null ? (
                                                                        <span className="block py-1 px-2 text-sm text-muted-foreground">
                                                                            {
                                                                                subLink.label
                                                                            }
                                                                        </span>
                                                                    ) : (
                                                                        <Link
                                                                            to={
                                                                                link.link +
                                                                                subLink.link
                                                                            }
                                                                            className="block py-1 px-2 text-sm hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                                                                            onClick={() =>
                                                                                setIsOpen(
                                                                                    false
                                                                                )
                                                                            }
                                                                        >
                                                                            {
                                                                                subLink.label
                                                                            }
                                                                        </Link>
                                                                    )}
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </CollapsibleContent>
                                            </Collapsible>
                                        ) : (
                                            <Link
                                                to={link.link}
                                                className="block py-2 px-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {link.label}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                                <ScrollBar />
                            </ScrollArea>
                            <div className="mt-4 space-y-2">
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                    asChild
                                >
                                    <Link to="/notifications">
                                        <Bell className="mr-2 h-4 w-4" />
                                        Notifications
                                    </Link>
                                </Button>
                                <Button
                                    variant="outline"
                                    className="w-full justify-start"
                                    asChild
                                >
                                    <Link to="/help">
                                        <CircleHelp className="mr-2 h-4 w-4" />
                                        Help
                                    </Link>
                                </Button>
                            </div>
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef(
    ({ className, title, children, ...props }, ref) => {
        return (
            <li>
                <NavigationMenuLink asChild>
                    <a
                        ref={ref}
                        className={cn(
                            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                            className
                        )}
                        {...props}
                    >
                        <div className="text-sm font-medium leading-none">
                            {title}
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            {children}
                        </p>
                    </a>
                </NavigationMenuLink>
            </li>
        );
    }
);
ListItem.displayName = 'ListItem';

function UserDropdownContent() {
    return (
        <>
            <DropdownMenuLabel>
                <div className="flex items-center gap-3 pb-2">
                    <div className="h-10 w-10 rounded-full bg-muted" />
                    <div>
                        <h3 className="font-semibold">Company Name</h3>
                        <p className="text-sm text-muted-foreground">Finder</p>
                    </div>
                </div>

                <div className="flex items-center justify-between py-2">
                    <Label htmlFor="online-mode" className="text-xs">
                        Online for messages
                    </Label>
                    <Switch id="online-mode" />
                </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <Link to="/profile">
                <DropdownMenuItem className="cursor-pointer">
                    <CircleUserRound /> Your Profile ✔️
                </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
                <TrendingUp /> Stats and trends
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            <Link to="/membership/plan">
                <DropdownMenuItem className="cursor-pointer">
                    <CircleDollarSign /> Membership plan ✔️
                </DropdownMenuItem>
            </Link>
            <Link to="/tags/buy">
                <DropdownMenuItem className="cursor-pointer">
                    <Tags /> Tags ✔️
                </DropdownMenuItem>
            </Link>
            <DropdownMenuItem>
                <LayoutDashboard /> Apps and offers
            </DropdownMenuItem>

            <DropdownMenu>
                <DropdownMenuTrigger className="w-full">
                    <DropdownMenuItem className="flex gap-2 justify-start items-center relative w-full">
                        <Moon className="h-4 w-4" />
                        Theme: Light
                        <ChevronDown className="ml-auto h-4 w-4 absolute right-0" />
                    </DropdownMenuItem>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-[200px]">
                    <DropdownMenuItem>Light</DropdownMenuItem>
                    <DropdownMenuItem>Dark</DropdownMenuItem>
                    <DropdownMenuItem>System</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/settings/billing">
                <DropdownMenuItem className="cursor-pointer">
                    <Settings /> Account Settings ✔️
                </DropdownMenuItem>
            </Link>

            <DropdownMenuSeparator />

            <DropdownMenuItem>
                <LogOut /> Logout
            </DropdownMenuItem>
        </>
    );
}
