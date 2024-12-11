import {
    ArrowRight,
    Check,
    CheckCircle,
    CircleCheck,
    CircleDollarSign,
    DollarSign,
    Info,
    Mail,
    MailCheck,
    Phone,
    PlusIcon,
    Smartphone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router';

export default function ProviderHomePage() {
    return (
        <div className="min-h-screen max-w-7xl mx-auto bg-background p-4 md:p-6 lg:p-8">
            <div className="flex lg:items-center flex-col lg:flex-row gap-5 lg:justify-between">
                <div className="flex items-center gap-2">
                    <h1 className="text-2xl font-medium">Your Resources</h1>
                    <Info className="size-6" />
                </div>
                <Button className="rounded-xl w-max">
                    <PlusIcon className="size-6" /> Post a Resources
                </Button>
            </div>
            <div className="py-10">
                <h2 className="mb-6 text-2xl font-medium">
                    Complete these steps to stand out and resource share fast
                </h2>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <Card className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-none rounded-xl">
                        <CardContent className="flex items-center justify-between p-6">
                            <div className="space-y-1">
                                <p className="text-sm font-light">
                                    Required to resource share
                                </p>
                                <div className="flex items-start gap-2">
                                    <Info className="size-8 text-yellow-400 font-thin rotate-180" />
                                    <p className="text-lg font-light">
                                        <Link
                                            to="#"
                                            className="font-medium text-black underline"
                                        >
                                            Add a billing method
                                        </Link>{' '}
                                        You could resource share 3X faster.
                                    </p>

                                    <CircleDollarSign className="size-16 stroke-1 py-0 h-10" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-none rounded-xl">
                        <CardContent className="flex items-center justify-between p-6">
                            <div className="space-y-1">
                                <p className="text-sm font-light">
                                    Required to resource share
                                </p>
                                <div className="flex items-start gap-2">
                                    <CircleCheck className="size-6 text-primary" />

                                    <p className="text-lg font-light">
                                        You verified your email address.
                                    </p>

                                    <MailCheck className="size-10 stroke-1" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-none rounded-xl">
                        <CardContent className="flex items-center justify-between p-6">
                            <div className="space-y-1">
                                <p className="text-sm font-light">
                                    Required to resource share
                                </p>
                                <div className="flex items-start gap-2">
                                    <CircleCheck className="size-6 text-primary" />

                                    <p className="text-lg font-light">
                                        You verified your phone number.
                                    </p>

                                    <Smartphone className="size-10 stroke-1" />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <div className="space-y-5">
                <Card className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-none rounded-xl">
                    <CardContent className="flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center">
                        <div className="space-y-5">
                            <div className="space-y-2">
                                <p className="text-sm">Get started</p>
                                <h3 className="text-2xl font-medium">
                                    Get started and connect with talent to get
                                    work done
                                </h3>
                            </div>

                            <Button
                                variant="outline"
                                className="border-primary text-primary hover:text-primary/90 rounded-xl"
                            >
                                Go to article
                            </Button>
                        </div>
                        <div className="relative h-32 w-32 flex-shrink-0">
                            <img
                                src="https://via.placeholder.com/128x128.png?text=RocketIllustration"
                                alt="Rocket illustration"
                                width={128}
                                height={128}
                                className="object-contain"
                            />
                        </div>
                    </CardContent>
                </Card>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {[
                        {
                            title: 'Payments',
                            description:
                                'Everything you need to know about payments',
                            image: 'https://via.placeholder.com/64x64.png?text=Illustration',
                        },
                        {
                            title: 'Payments',
                            description:
                                'How to set up your preferred billing method',
                            image: 'https://via.placeholder.com/64x64.png?text=Illustration',
                        },
                        {
                            title: 'Trust & Safety',
                            description:
                                'Keep yourself and others safe on Reconsha',
                            image: 'https://via.placeholder.com/64x64.png?text=Illustration',
                        },
                    ].map(({ title, description, image }, index) => (
                        <Card
                            key={index}
                            className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] border-none rounded-xl"
                        >
                            <CardContent className="flex items-start justify-between p-6">
                                <div className="space-y-1">
                                    <p className="text-sm">{title}</p>
                                    <h3 className="text-lg font-medium">
                                        {description}
                                    </h3>
                                </div>
                                <div className="relative h-16 w-16 flex-shrink-0">
                                    <img
                                        src={image}
                                        alt={title + ' icon'}
                                        width={64}
                                        height={64}
                                        className="object-contain"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}
