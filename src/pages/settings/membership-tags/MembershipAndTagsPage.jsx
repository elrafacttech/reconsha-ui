import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router';

export default function MembershipAndTagsSettingsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-medium">Membership & Tags</h1>

            <Card>
                <CardContent className="divide-y p-0">
                    <div className="py-8 space-y-2 px-6">
                        <h2 className="text-xl font-medium">Current plan</h2>
                        <p className="text-base ">Freelancer Basic</p>
                        <Button
                            variant="outline"
                            className="text-primary rounded-xl border-2 border-primary hover:bg-primary/10"
                        >
                            Change Plan
                        </Button>
                    </div>

                    <div className="py-8 space-y-2 px-6">
                        <h2 className="text-xl font-medium">
                            Current billing cycle
                        </h2>
                        <p className="text-base">Nov 7, 2024 — Dec 6, 2024</p>
                        <p className="text-sm">
                            Learn more about{' '}
                            <Link
                                to="/membership-billing"
                                className="text-primary underline"
                            >
                                membership billing.
                            </Link>
                        </p>
                    </div>

                    <div className="py-8 space-y-2 px-6">
                        <h2 className="text-xl font-medium">Tags balance</h2>
                        <p className="text-lg">32</p>
                        <p className="text-sm">
                            Learn more about how to earn and use{' '}
                            <Link to="/tags" className="text-primary underline">
                                Tags.
                            </Link>
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/tags/buy">
                                <Button className="rounded-xl">Buy Tags</Button>
                            </Link>
                            <Button
                                variant="ghost"
                                className="text-primary hover:text-primary/90"
                            >
                                View Tags History
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
