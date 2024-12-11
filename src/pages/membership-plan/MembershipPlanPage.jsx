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
        <div className="container mx-auto px-4 py-8 sm:py-12 max-w-7xl">
            <h1 className="text-3xl sm:text-4xl font-medium mb-6 sm:mb-8">
                Membership plans
            </h1>

            <Tabs
                defaultValue="monthly"
                className="w-full mb-6 sm:mb-8"
                onValueChange={setBillingPeriod}
            >
                <TabsList className="grid w-full sm:w-[400px] grid-cols-2 mx-auto border-2 rounded-full p-0 py-0 px-0 bg-transparent">
                    <TabsTrigger
                        className="data-[state=active]:ring-1 data-[state=active]:border-2 border-black ring-black rounded-full text-sm sm:text-base"
                        value="monthly"
                    >
                        Monthly
                    </TabsTrigger>
                    <TabsTrigger
                        className="data-[state=active]:ring-1 data-[state=active]:border-2 border-black ring-black rounded-full text-sm sm:text-base"
                        value="annual"
                    >
                        Annual (Save 13%)
                    </TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="grid sm:grid-cols-2 gap-6">
                <Card className="relative">
                    <CardContent className="p-4 sm:p-6 space-y-6 sm:space-y-20">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-0">
                                <div>
                                    <h2 className="text-2xl sm:text-3xl font-medium mb-2">
                                        Basic
                                    </h2>
                                    <p className="text-2xl sm:text-3xl font-medium mb-2 sm:mb-6">
                                        Free
                                    </p>
                                </div>

                                <div className="text-sm mt-2 sm:mt-0">
                                    This is your current plan
                                </div>
                            </div>

                            <div className="space-y-4 sm:space-y-6">
                                <p className="">Includes:</p>
                                <ul className="space-y-3 sm:space-y-4">
                                    {basicFeatures.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2"
                                        >
                                            <Check className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                                            <span className="text-sm sm:text-base">
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <CardFooter className="px-0">
                            <p className="text-xs sm:text-sm text-muted-foreground">
                                *Connects expire one year after purchase date
                            </p>
                        </CardFooter>
                    </CardContent>
                </Card>

                <Card className="bg-blue-700 text-white">
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-medium mb-2">
                                    Plus{' '}
                                    {billingPeriod === 'annual'
                                        ? 'Annual'
                                        : 'Monthly'}
                                </h2>
                                <div className="flex items-baseline gap-2 flex-wrap">
                                    {billingPeriod === 'annual' ? (
                                        <>
                                            <span className="text-xl sm:text-2xl line-through opacity-70">
                                                $239.99
                                            </span>
                                            <span className="text-3xl sm:text-4xl font-medium">
                                                $209.99
                                            </span>
                                            <span className="text-sm sm:text-base">
                                                / year*
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <span className="text-3xl sm:text-4xl font-medium">
                                                $19.99
                                            </span>
                                            <span className="text-sm sm:text-base">
                                                / month*
                                            </span>
                                        </>
                                    )}
                                </div>
                                {billingPeriod === 'annual' && (
                                    <p className="mt-2 text-sm">
                                        Save 13% compared to the monthly plan
                                    </p>
                                )}
                            </div>
                            <Button
                                variant="secondary"
                                className="bg-white text-black hover:bg-white/90 mt-4 sm:mt-0 w-full sm:w-auto"
                            >
                                Upgrade to Plus{' '}
                                {billingPeriod === 'annual'
                                    ? 'Annual'
                                    : 'Monthly'}
                            </Button>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <p className="font-medium text-sm sm:text-base">
                                Includes everything in Basic and:
                            </p>
                            <ul className="space-y-3 sm:space-y-4">
                                {plusFeatures.map((feature, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <Check className="h-5 w-5 text-white mt-0.5 shrink-0" />
                                        <span className="text-sm sm:text-base">
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                                <li className="pl-7">
                                    <ul className="list-disc space-y-2 ml-4">
                                        {profileCustomization.map(
                                            (feature, index) => (
                                                <li
                                                    key={index}
                                                    className="text-sm sm:text-base"
                                                >
                                                    {feature}
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </li>
                            </ul>
                            <p className="text-xs sm:text-sm opacity-80">
                                *Sales tax may apply
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
