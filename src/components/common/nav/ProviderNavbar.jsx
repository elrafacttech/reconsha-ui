import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import {
    Bell,
    ChevronDown,
    CircleHelp,
    CircleUser,
    FileCheck2,
    Heart,
    LogOut,
    Menu,
    Search,
    Settings,
    Sun,
    User2,
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
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
} from '@/components/ui/select';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Link } from 'react-router';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import Logo from '../logo/Logo';

export default function ProviderNavbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {
            label: 'Resources',
            link: '/provider/resource',
            subLink: [
                { label: 'Post a Resources', link: '/post' },
                { label: 'Your Dashboard', link: '/' },
                { label: 'All Resource Posts', link: '/all' },
                { label: 'All Contracts', link: '/contracts' },
                { label: 'Any Hire', link: '/hire' },
            ],
        },
        {
            label: 'Talent',
            link: '/provider/talent',
            subLink: [
                { label: 'Discover', link: '/' },
                { label: 'Your hires', link: '/hires' },
                { label: 'Company hires', link: '/company' },
                { label: 'Recently viewed', link: '/recent' },
                { label: 'Saved talent', link: '/saved' },
            ],
        },
        {
            label: 'Reports',
            link: '/provider/reports',
            subLink: [
                { label: 'Account Overview', link: null },
                { label: 'Weekly summary', link: '/summary' },
                { label: 'Financilas', link: null },

                {
                    label: 'Transactions history',
                    link: '/transactions',
                },
                {
                    label: 'Budget',
                    link: '/budget',
                },
            ],
        },
        {
            label: 'Messages',
            link: '/message',
            subLink: [],
        },
    ];

    const resources = [
        {
            label: 'Talent',
            value: 'talent',
        },
    ];

    const [selectedResource, setSelectedResource] = useState(
        resources[0].value
    );

    return (
        <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6 z-20">
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
                    <div className="relative rounded-full border overflow-hidden">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Search"
                            className="pl-8 w-[300px] lg:w-[400px] border-none outline-none"
                        />
                        <Select
                            value={selectedResource}
                            onValueChange={setSelectedResource}
                            className="hidden lg:block"
                        >
                            <SelectTrigger className="absolute bg-white top-0 right-0 w-[120px] rounded-r-full border-l outline-none ring-0 focus:ring-0">
                                {
                                    resources.find(
                                        (x) => x.value === selectedResource
                                    )?.label
                                }
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem value="talent">
                                        <Link to="/resource/all">
                                            <div className="flex items-center gap-2">
                                                <FileCheck2 className="size-4 text-black" />
                                                <div className="flex flex-col justify-center">
                                                    <h5 className="text-sm font-medium">
                                                        Talent
                                                    </h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                </form>

                <CircleHelp className="hidden sm:block size-7 text-black font-thin cursor-pointer stroke-1" />

                <Heart className="hidden sm:block size-7 text-black font-thin cursor-pointer stroke-1" />

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
                            <div className="relative rounded-full border overflow-hidden">
                                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search"
                                    className="pl-8 w-[300px] lg:w-[400px] border-none outline-none"
                                />
                                <Select
                                    value={selectedResource}
                                    onValueChange={setSelectedResource}
                                    className="hidden lg:block"
                                >
                                    <SelectTrigger className="absolute bg-white top-0 right-0 w-[120px] rounded-r-full border-l  outline-none ring-0 focus:ring-0">
                                        {
                                            resources.find(
                                                (x) =>
                                                    x.value === selectedResource
                                            )?.label
                                        }
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="talent">
                                                <Link to="/resource/all">
                                                    <div className="flex items-center gap-2">
                                                        <FileCheck2 className="size-4 text-black" />
                                                        <div className="flex flex-col justify-center">
                                                            <h5 className="text-sm font-medium">
                                                                Talent
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
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
                                    <Link to="/saved">
                                        <Heart className="mr-2 h-4 w-4" />
                                        Saved
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
            <div className="space-y-2">
                <div className="flex flex-col items-center gap-3">
                    <div className="flex size-20 items-center justify-center rounded-full border">
                        <User2 className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div className="text-center">
                        <h3 className="font-semibold">
                            Elrafact Technology Solution
                        </h3>
                        <p className="text-sm text-muted-foreground">Client</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-muted p-1">
                    <Button
                        variant="default"
                        className="flex-1 rounded-full bg-[#00A651] text-white hover:bg-[#008C44]"
                    >
                        Online
                    </Button>
                    <Button
                        variant="ghost"
                        className="flex-1 rounded-full hover:bg-background"
                    >
                        Invisible
                    </Button>
                </div>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant="ghost"
                            className="flex w-full items-center justify-between"
                        >
                            <div className="flex items-center gap-2">
                                <Sun className="h-4 w-4" />
                                Theme: Light
                            </div>
                            <ChevronDown className="h-4 w-4" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-[200px]">
                        <DropdownMenuItem>Light</DropdownMenuItem>
                        <DropdownMenuItem>Dark</DropdownMenuItem>
                        <DropdownMenuItem>System</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <Button
                    variant="ghost"
                    className="flex w-full items-center justify-start gap-2"
                >
                    <User2 className="h-4 w-4" />
                    Invite a Coworker
                </Button>

                <Button
                    variant="ghost"
                    className="flex w-full items-center justify-start gap-2"
                >
                    <Settings className="h-4 w-4" />
                    Settings
                </Button>

                <Button
                    variant="ghost"
                    className="flex w-full items-center justify-start gap-2 text-red-500 hover:text-red-500"
                >
                    <LogOut className="h-4 w-4" />
                    Log out
                </Button>
            </div>
        </>
    );
}
