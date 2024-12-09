import { X, DollarSign, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router';

export default function NotificationsPage() {
    return (
        <div className="container max-w-5xl mx-auto p-4 md:p-6 lg:p-8 space-y-10">
            <h1 className="text-4xl font-medium">Notifications</h1>

            <div className="space-y-12">
                <section className="space-y-4">
                    <h2 className="text-2xl font-medium">Most Recent</h2>
                    <Card className="p-4">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <div className="h-8 w-8 rounded-full flex items-center justify-center">
                                        <DollarSign className="h-4 w-4" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-base">
                                        A payment of $10.62 has been applied to
                                        your{' '}
                                        <Link
                                            to="/financial-account"
                                            className="text-primary hover:underline"
                                        >
                                            financial account
                                        </Link>
                                        .
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Nov 21
                                    </p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-primary hover:text-primary/90"
                            >
                                <X className="h-4 w-4" />
                                <span className="sr-only">
                                    Dismiss notification
                                </span>
                            </Button>
                        </div>
                    </Card>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-medium">Earlier</h2>
                    <Card className="p-4">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <div className="h-8 w-8 rounded-full flex items-center justify-center">
                                        <Rocket className="h-4 w-4" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-base">
                                        You have received an invitation to
                                        interview for the job "Java and Spring
                                        boot".
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                        Nov 15
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button
                                    variant="outline"
                                    className="text-primary hover:text-primary/90 border-2 rounded-xl border-primary"
                                >
                                    Respond
                                </Button>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-primary hover:text-primary/90"
                                >
                                    <X className="h-4 w-4" />
                                    <span className="sr-only">
                                        Dismiss notification
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </Card>
                </section>
            </div>
        </div>
    );
}
