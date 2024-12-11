import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent } from '@/components/ui/card';
import {
    BadgeCheck,
    Check,
    ShieldCheck,
} from 'lucide-react';

export default function VerificationSettingsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-medium tracking-tight">
                Identity verification
            </h1>

            <Card>
                <CardContent className="p-6 space-y-20">
                    <div className="space-y-8">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <h2 className="text-2xl font-medium">
                                    You verified your identity
                                </h2>
                                <BadgeCheck className="size-6 text-white fill-blue-600" />
                            </div>
                            <p className="text-muted-foreground text-base">
                                You've completed an important part of
                                establishing trust in our global work
                                marketplace.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                                <Check className="h-5 w-5 text-white" />
                            </div>
                            <span className="text-lg text-muted-foreground">
                                Email Verified
                            </span>
                        </div>
                    </div>

                    <Alert
                        variant="secondary"
                        className="bg-muted-foreground/20 border-none p-6"
                    >
                        <AlertDescription className="text-teal-900 font-medium md:flex-row flex-col items-center md:items-start flex gap-5">
                            <ShieldCheck className="size-10 text-teal-900" />
                            <span>
                                We encrypt your data and will securely share it
                                with our ID verification partner and any
                                government that requires reporting income.{' '}
                                <a href="#" className="text-primary underline">
                                    Privacy Policy
                                </a>
                            </span>
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>
        </div>
    );
}
