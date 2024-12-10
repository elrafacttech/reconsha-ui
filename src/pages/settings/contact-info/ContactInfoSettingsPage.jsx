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
        <div className="container">
            <h1 className="text-3xl font-medium mb-8">Contact info</h1>

            <div className="space-y-6">
                <Card>
                    <CardContent className="pt-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-medium">Account</h2>
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
                            <form className="space-y-4">
                                <div className="text-sm text-primary">
                                    <Link
                                        className="underline text-primary hover:text-primary/90 flex items-center gap-2"
                                        to="/policy/name-changes"
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

                                <div className="flex gap-2">
                                    <Button
                                        type="submit"
                                        className="rounded-xl"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setEditingAccount(false);
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="text-primary hover:text-primary/90"
                                        onClick={() => setEditingAccount(false)}
                                    >
                                        Cancel
                                    </Button>
                                </div>
                            </form>
                        ) : (
                            <div className="space-y-4">
                                <p className="flex flex-col gap-2">
                                    <span className="text-muted-foreground">
                                        User ID
                                    </span>
                                    094972b6
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="text-muted-foreground">
                                        Name
                                    </span>
                                    Raghu Basuvaraj
                                </p>
                                <p className="flex flex-col gap-2">
                                    <span className="text-muted-foreground">
                                        Email
                                    </span>
                                    m******@gmail.com
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
                            <h2 className="text-xl font-medium">Location</h2>
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
                                                    UTC+05:30 Mumbai, Kolkata,
                                                    Chennai, New Delhi
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
                                        className="text-primary"
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
                                            <Input defaultValue="9600363627" />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-2">
                                    <Button
                                        type="submit"
                                        className="rounded-xl"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setEditingLocation(false);
                                        }}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        variant="ghost"
                                        className="text-primary hover:text-primary/90"
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
                                <div className="space-y-2">
                                    <h3 className="font-medium">Time Zone</h3>
                                    <p className="text-muted-foreground">
                                        UTC+05:30 Mumbai, Kolkata, Chennai, New
                                        Delhi
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-medium">Address</h3>
                                    <p className="text-muted-foreground">
                                        46 Kuppusamy Street
                                        <br />
                                        Coimbatore, TN 641109
                                        <br />
                                        India
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <h3 className="font-medium">Phone</h3>
                                    <p className="text-muted-foreground">
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
