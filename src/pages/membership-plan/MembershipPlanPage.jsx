import { useState } from 'react';
import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function MembershipPlanPage() {
    const [billingPeriod, setBillingPeriod] = useState('monthly');

    const basicFeatures = [
        '10 Connects total per month',
        'Buy Connects as you need them for $0.15 + Tax each*',
        "Hourly protection to ensure you're paid for each hour worked",
        'Fixed-price payments are secured through milestones',
        'Limited reports and functionality',
    ];

    const plusFeatures = [
        '100 Connects total per month',
        'View competitor bids for any job',
        'Enjoy a 0% service fee when you bring new clients to Upwork',
        'Customize your profile',
    ];

    const profileCustomization = [
        'Keep your profile active even when you take a break',
        'Keep your earnings private',
        'Build your brand with a custom profile URL',
    ];

    return (
        <div className="container mx-auto px-4 py-12 max-w-7xl">
            <h1 className="text-4xl font-medium mb-8">Membership plans</h1>

            <Tabs
                defaultValue="monthly"
                className="w-full mb-8"
                onValueChange={setBillingPeriod}
            >
                <TabsList className="grid w-[400px] grid-cols-2 mx-auto border-2 rounded-full p-0 py-0 px-0 bg-transparent">
                    <TabsTrigger
                        className="data-[state=active]:ring-1 data-[state=active]:border-2 border-black ring-black rounded-full"
                        value="monthly"
                    >
                        Monthly
                    </TabsTrigger>
                    <TabsTrigger
                        className="data-[state=active]:ring-1 data-[state=active]:border-2 border-black ring-black rounded-full"
                        value="annual"
                    >
                        Annual (Save 13%)
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="grid md:grid-cols-2 gap-6">
                <Card className="relative">
                    <CardContent className="p-6 space-y-20">
                        <div>
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-3xl font-medium mb-2">
                                        Basic
                                    </h2>
                                    <p className="text-3xl font-medium mb-6">
                                        Free
                                    </p>
                                </div>

                                <div className="text-sm">
                                    This is your current plan
                                </div>
                            </div>

                            <div className="space-y-6">
                                <p className="">Includes:</p>
                                <ul className="space-y-4">
                                    {basicFeatures.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2"
                                        >
                                            <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <CardFooter>
                            <p className="text-sm text-muted-foreground">
                                *Connects expire one year after purchase date
                            </p>
                        </CardFooter>
                    </CardContent>
                </Card>

                <Card className="bg-blue-700 text-white">
                    <CardContent className="p-6">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h2 className="text-2xl font-medium mb-2">
                                    Plus{' '}
                                    {billingPeriod === 'annual'
                                        ? 'Annual'
                                        : 'Monthly'}
                                </h2>
                                <div className="flex items-baseline gap-2">
                                    {billingPeriod === 'annual' ? (
                                        <>
                                            <span className="text-2xl line-through opacity-70">
                                                $239.99
                                            </span>
                                            <span className="text-4xl font-medium">
                                                $209.99
                                            </span>
                                            <span>/ year*</span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-4xl font-medium">
                                                $19.99
                                            </span>
                                            <span>/ month*</span>
                                        </>
                                    )}
                                </div>
                                {billingPeriod === 'annual' && (
                                    <p className="mt-2">
                                        Save 13% compared to the monthly plan
                                    </p>
                                )}
                            </div>
                            <Button
                                variant="secondary"
                                className="bg-white text-black hover:bg-white/90"
                            >
                                Upgrade to Plus{' '}
                                {billingPeriod === 'annual'
                                    ? 'Annual'
                                    : 'Monthly'}
                            </Button>
                        </div>

                        <div className="space-y-6">
                            <p className="font-medium">
                                Includes everything in Basic and:
                            </p>
                            <ul className="space-y-4">
                                {plusFeatures.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <Check className="h-5 w-5 text-white mt-0.5 shrink-0" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                                <li className="pl-7">
                                    <ul className="list-disc space-y-2 ml-4">
                                        {profileCustomization.map(
                                            (feature, index) => (
                                                <li key={index}>{feature}</li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            </ul>
                            <p className="text-sm opacity-80">
                                *Sales tax may apply
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
