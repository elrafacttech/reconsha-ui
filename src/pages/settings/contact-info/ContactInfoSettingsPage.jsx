import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { BriefcaseBusiness, Pencil } from 'lucide-react';
import { Link } from 'react-router';

export default function ContactInfoSettingsPage() {
    const [editingAccount, setEditingAccount] = useState(false);
    const [editingLocation, setEditingLocation] = useState(false);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl sm:text-3xl font-medium mb-6 sm:mb-8">
                Contact info
            </h1>

            <div className="space-y-6 sm:space-y-8">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg sm:text-xl font-medium">
                                Account
                            </h2>
                            {!editingAccount && (
                                <Button
                                    variant="outline"
                                    className="rounded-full text-primary border-2"
                                    size="icon"
                                    onClick={() => setEditingAccount(true)}
                                >
                                    <Pencil className="h-4 w-4" />
                                </Button>
                            )}
                        </div>

                        {editingAccount ? (
                            <form className="space-y-4 sm:space-y-6">
                                <div className="text-sm text-primary">
                                    <Link
                                        to="/policy/name-changes"
                                        className="underline text-primary hover:text-primary/90 flex items-center gap-2"
                                    >
                                        <BriefcaseBusiness className="size-3" />{' '}
                                        Read our policy on name changes
                                    </Link>
                                </div>

                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="firstName">
                                            First name
                                        </Label>
                                        <Input
                                            id="firstName"
                                            defaultValue="Raghu"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="lastName">
                                            Last name
                                        </Label>
                                        <Input
                                            id="lastName"
                                            defaultValue="Basuvaraj"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        defaultValue="m******od@gmail.com"
                                    />
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <Button
                                        type="submit"
                                        className="rounded-xl w-full sm:w-auto"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setEditingAccount(false);
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="text-primary hover:text-primary/90 w-full sm:w-auto"
                                        onClick={() => setEditingAccount(false)}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <div className="space-y-4">
                                <p className="flex flex-col gap-1">
                                    <span className="text-sm text-muted-foreground">
                                        User ID
                                    </span>
                                    <span>094972b6</span>
                                </p>
                                <p className="flex flex-col gap-1">
                                    <span className="text-sm text-muted-foreground">
                                        Name
                                    </span>
                                    <span>Raghu Basuvaraj</span>
                                </p>
                                <p className="flex flex-col gap-1">
                                    <span className="text-sm text-muted-foreground">
                                        Email
                                    </span>
                                    <span>m******@gmail.com</span>
                                </p>
                                <Button
                                    variant="link"
                                    className="text-destructive px-0 h-auto"
                                >
                                    Close my account
                                </Button>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg sm:text-xl font-medium">
                                Location
                            </h2>
                            {!editingLocation && (
                                <Button
                                    variant="outline"
                                    className="rounded-full text-primary border-2"
                                    size="icon"
                                    onClick={() => setEditingLocation(true)}
                                >
                                    <Pencil className="h-4 w-4" />
                                </Button>
                            )}
                        </div>

                        {editingLocation ? (
                            <form className="space-y-6">
                                <div className="grid gap-4 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label>Time Zone</Label>
                                        <Select defaultValue="utc+5:30">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="utc+5:30">
                                                    <span className="hidden md:block">
                                                        UTC+05:30 Mumbai,
                                                        Kolkata, Chennai, New
                                                        Delhi
                                                    </span>
                                                    <span className="md:hidden">
                                                        UTC+05:30 Mumbai
                                                    </span>
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Country</Label>
                                        <Select defaultValue="india">
                                            <SelectTrigger>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="india">
                                                    India
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <p className="text-sm text-muted-foreground">
                                    We take your privacy seriously. Only your
                                    city and country will be shared with
                                    clients.{' '}
                                    <Link
                                        to="/learn-more"
                                        className="text-primary hover:underline"
                                    >
                                        Learn more
                                    </Link>
                                </p>

                                <div className="space-y-4">
                                    <div className="space-y-2">
                                        <Label>Address</Label>
                                        <Input defaultValue="46 Kuppusamy Street" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>
                                            Address 2 (Apartment, suite, etc.)
                                        </Label>
                                        <Input placeholder="Optional" />
                                    </div>

                                    <div className="grid gap-4 sm:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label>City</Label>
                                            <Input defaultValue="Coimbatore" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label>State/Province</Label>
                                            <Input defaultValue="TN" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label>ZIP/Postal code</Label>
                                        <Input defaultValue="641109" />
                                    </div>

                                    <div className="space-y-2">
                                        <Label>Phone</Label>
                                        <div className="flex gap-2">
                                            <Select defaultValue="91">
                                                <SelectTrigger className="w-[100px]">
                                                    <SelectValue />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectItem value="91">
                                                        +91
                                                    </SelectItem>
                                                </SelectContent>
                                            </Select>
                                            <Input
                                                defaultValue="9600363627"
                                                className="flex-1"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <Button
                                        type="submit"
                                        className="rounded-xl w-full sm:w-auto"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setEditingLocation(false);
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="text-primary hover:text-primary/90 w-full sm:w-auto"
                                        onClick={() =>
                                            setEditingLocation(false)
                                        }
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <div className="space-y-4">
                                <div className="space-y-1">
                                    <h3 className="font-medium">Time Zone</h3>
                                    <p className="text-sm text-muted-foreground">
                                        UTC+05:30 Mumbai, Kolkata, Chennai, New
                                        Delhi
                                    </p>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="font-medium">Address</h3>
                                    <p className="text-sm text-muted-foreground">
                                        46 Kuppusamy Street
                                        <br />
                                        Coimbatore, TN 641109
                                        <br />
                                        India
                                    </p>
                                </div>

                                <div className="space-y-1">
                                    <h3 className="font-medium">Phone</h3>
                                    <p className="text-sm text-muted-foreground">
                                        +91 9600363627
                                    </p>
                                </div>
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
