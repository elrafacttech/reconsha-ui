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
    FileCheck2,
    LayoutDashboard,
    LogOut,
    Moon,
    Search,
    Settings,
    Tags,
    TrendingUp,
} from 'lucide-react';
import { Link } from 'react-router';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import Logo from '../logo/Logo';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export default function Navbar() {
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
                { label: 'Your active resources', link: '/active' },
                {
                    label: 'Resource history ✔️',
                    link: '',
                },
            ],
        },
        {
            label: 'Manage finances',
            link: '/finances',
            subLink: [
                {
                    label: 'Financial overview',
                    link: '/overview',
                },
                { label: 'Your reports', link: '/reports' },
                {
                    label: 'Billings and earnings ✔️',
                    link: '/billings',
                },
                {
                    label: 'Transactions and invoices ✔️',
                    link: '/transactions',
                },
                {
                    label: 'Certificate of earnings',
                    link: '/certificate',
                    icon: ExternalLink,
                },

                {
                    label: 'Payments',
                    link: null,
                },

                {
                    label: 'Withdraw earnings',
                    link: '/withdraw',
                },

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

    const resources = [
        {
            label: 'Resources',
            value: 'resources',
        },
    ];

    const [selectedResource, setSelectedResource] = useState(
        resources[0].value
    );

    return (
        <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 z-20">
            <Logo />
            <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-1">
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
                                                <>
                                                    {subLink.link === null ? (
                                                        <span className="text-muted-foreground border-t-2 pt-2 px-3">
                                                            {subLink.label}
                                                        </span>
                                                    ) : (
                                                        <ListItem
                                                            key={subLink.link}
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
                                                            href={
                                                                link.link +
                                                                subLink.link
                                                            }
                                                        />
                                                    )}
                                                </>
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
            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="ml-auto flex-1 sm:flex-initial">
                    <div className="relative rounded-full border-none bg-muted overflow-hidden">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search"
                            className="pl-8 sm:w-[400px] md:w-[300px] border-none outline-none lg:w-[500px]"
                        />
                        <Select
                            value={selectedResource}
                            onValueChange={setSelectedResource}
                        >
                            <SelectTrigger className="absolute bg-white top-0 right-0 w-[120px] rounded-full border-2 border-neutral-500 outline-none ring-0 focus:ring-0">
                                {
                                    resources.find(
                                        (x) => x.value === selectedResource
                                    ).label
                                }
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="resources">
                                        <div className="flex items-center gap-2">
                                            <FileCheck2 className="size-4 text-black" />
                                            <div className="flex flex-col justify-center">
                                                <h5 className="text-sm font-medium">
                                                    Resources
                                                </h5>
                                                <p className="text-black text-xs">
                                                    Find a perfect Resources
                                                </p>
                                            </div>
                                        </div>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </form>

                <CircleHelp className="size-7 text-black font-thin cursor-pointer" />

                <Link to="/notifications">
                    <Bell className="size-7 text-black font-thin cursor-pointer" />
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
                        <DropdownMenuLabel>
                            <div className="flex items-center gap-3 pb-2">
                                <div className="h-10 w-10 rounded-full bg-muted" />
                                <div>
                                    <h3 className="font-semibold">
                                        Company Name
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Finder
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between py-2">
                                <Label
                                    htmlFor="online-mode"
                                    className="text-xs"
                                >
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
                            <DropdownMenuContent
                                align="end"
                                className="w-[200px]"
                            >
                                <DropdownMenuItem>Light</DropdownMenuItem>
                                <DropdownMenuItem>Dark</DropdownMenuItem>
                                <DropdownMenuItem>System</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <DropdownMenuItem>
                            <Settings /> Account Settings
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />

                        <DropdownMenuItem>
                            <LogOut /> Logout
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    );
}

const ListItem = React.forwardRef(({ className, title, ...props }, ref) => (
    <li>
        <NavigationMenuLink asChild>
            <a
                ref={ref}
                className={cn(
                    'block hover:text-primary select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent focus:bg-accent focus:text-accent-foreground',
                    className
                )}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
            </a>
        </NavigationMenuLink>
    </li>
));
ListItem.displayName = 'ListItem';
