import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Link } from 'react-router';
import Logo from '@/components/common/logo/Logo';

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [companyName, setCompanyName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("india");

    const isFormValid = companyName.trim() && email.trim() && password.trim() && country;

    return (
        <div className="min-h-screen w-full mx-auto">
            <Logo />

            <div className="w-full space-y-8 flex justify-center items-center">
                <div className="space-y-6 w-full max-w-xl px-4 sm:px-0">
                    <h1 className="text-2xl sm:text-3xl font-normal text-center">
                        Sign up
                    </h1>

                    <div className="space-y-4">
                    <div className="space-y-2">
                            <Label htmlFor="name">Company name</Label>
                            <Input
                                placeholder="company name"
                                id="name"
                                type="name"
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email">Work email address</Label>
                            <Input
                                placeholder="user@example.com"
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password (8 or more characters)"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                                >
                                    {showPassword ? (
                                        <EyeOffIcon className="h-5 w-5" />
                                    ) : (
                                        <EyeIcon className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="country">Country</Label>
                            <Select value={country} onValueChange={setCountry}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select country" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="india">India</SelectItem>
                                    <SelectItem value="us">
                                        United States
                                    </SelectItem>
                                    <SelectItem value="uk">
                                        United Kingdom
                                    </SelectItem>
                                    {/* Add more countries as needed */}
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-2">
                                <Checkbox id="emails" defaultChecked />
                                <Label
                                    htmlFor="emails"
                                    className="font-normal text-sm sm:text-base"
                                >
                                    Send me emails with tips on how to find
                                    talent that fits my needs.
                                </Label>
                            </div>

                            <div className="flex items-start space-x-2">
                                <Checkbox
                                    id="terms"
                                    className="mt-1"
                                    required
                                />
                                <Label
                                    htmlFor="terms"
                                    className="font-normal text-sm sm:text-base"
                                >
                                    Yes, I understand and agree to the{' '}
                                    <Link
                                        to="/terms"
                                        className="text-primary underline"
                                    >
                                        <span className="font-kanit">                                      
                                        WorkRiches</span> Terms of Service
                                    </Link>
                                    , including the{' '}
                                    <Link
                                        to="/agreement"
                                        className="text-primary underline"
                                    >
                                        User Agreement
                                    </Link>{' '}
                                    and{' '}
                                    <Link
                                        to="/privacy"
                                        className="text-primary underline"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </Label>
                            </div>
                        </div>

                        <div className="flex justify-center w-full">
                            <Button className="rounded-xl px-7"
                            disabled={!isFormValid}
                            >
                                Create my account
                            </Button>
                        </div>

                        <p className="text-center text-sm">
                            Already have an account?{' '}
                            <Link to="/login">
                                <Button className="underline" variant="link">
                                    Log In
                                </Button>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
