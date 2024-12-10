import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { EyeIcon, EyeOffIcon } from 'lucide-react';

export default function PasswordAndSecuritySettingsPage() {
    const [showChangePassword, setShowChangePassword] = useState(false);
    const [showPassword, setShowPassword] = useState({
        current: false,
        new: false,
        confirm: false,
    });

    const togglePasswordVisibility = (field) => {
        setShowPassword((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    return (
        <div className="">
            <h1 className="text-3xl font-medium mb-8">Password and security</h1>

            <Card>
                <CardContent className="pt-6">
                    <h2 className="text-2xl font-medium mb-6">Login</h2>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">
                            Reconsha password
                        </h3>
                        <p className="text-muted-foreground">
                            You&apos;ve set a Reconsha password.{' '}
                            <Button
                                variant="link"
                                className="text-primary p-0 h-auto underline"
                                onClick={() => setShowChangePassword(true)}
                            >
                                Change password
                            </Button>
                        </p>
                    </div>
                </CardContent>
            </Card>

            <Dialog
                open={showChangePassword}
                onOpenChange={setShowChangePassword}
            >
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle className="text-2xl">
                            Change your password
                        </DialogTitle>
                    </DialogHeader>

                    <form className="space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current-password">
                                    Current password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="current-password"
                                        type={
                                            showPassword.current
                                                ? 'text'
                                                : 'password'
                                        }
                                        className="pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() =>
                                            togglePasswordVisibility('current')
                                        }
                                    >
                                        {showPassword.current ? (
                                            <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                                        ) : (
                                            <EyeIcon className="h-4 w-4 text-muted-foreground" />
                                        )}
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="new-password">
                                    New Password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="new-password"
                                        type={
                                            showPassword.new
                                                ? 'text'
                                                : 'password'
                                        }
                                        className="pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() =>
                                            togglePasswordVisibility('new')
                                        }
                                    >
                                        {showPassword.new ? (
                                            <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                                        ) : (
                                            <EyeIcon className="h-4 w-4 text-muted-foreground" />
                                        )}
                                    </Button>
                                </div>
                                <p className="text-[10px] text-muted-foreground">
                                    Must be at least 8 characters long,
                                    including 1 number or 1 symbol.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="confirm-password">
                                    Re-enter new password
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="confirm-password"
                                        type={
                                            showPassword.confirm
                                                ? 'text'
                                                : 'password'
                                        }
                                        className="pr-10"
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() =>
                                            togglePasswordVisibility('confirm')
                                        }
                                    >
                                        {showPassword.confirm ? (
                                            <EyeOffIcon className="h-4 w-4 text-muted-foreground" />
                                        ) : (
                                            <EyeIcon className="h-4 w-4 text-muted-foreground" />
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end gap-4">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={() => setShowChangePassword(false)}
                            >
                                Cancel
                            </Button>
                            <Button type="submit">Confirm</Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}
