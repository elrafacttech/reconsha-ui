import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

const tagOptions = [
    { amount: 10, price: 1.5 },
    { amount: 20, price: 3.0 },
    { amount: 40, price: 6.0 },
    { amount: 60, price: 9.0 },
    { amount: 80, price: 12.0 },
    { amount: 100, price: 15.0 },
    { amount: 150, price: 22.5 },
    { amount: 200, price: 30.0 },
    { amount: 250, price: 37.5 },
    { amount: 300, price: 45.0 },
];

export default function BuyTagsPage() {
    const [selectedOption, setSelectedOption] = useState('10');
    const currentTags = 32;
    const expirationDate = 'November 22, 2025';

    const selectedAmount = parseInt(selectedOption);
    const selectedPrice =
        tagOptions.find((option) => option.amount === selectedAmount)?.price ||
        0;
    const newBalance = currentTags + selectedAmount;

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-5xl">
                <CardContent className="p-6 space-y-6">
                    <div className="space-y-6">
                        <h1 className="text-2xl font-medium">Buy Tags</h1>

                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-sm">Your available Tags</p>
                                <p className="text-sm text-muted-foreground">
                                    {currentTags}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground mb-1"></p>
                                <p className="text-xl font-medium"></p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm">
                                    Select the amount to buy
                                </p>
                                <Select
                                    value={selectedOption}
                                    onValueChange={setSelectedOption}
                                >
                                    <SelectTrigger className="w-full max-w-md">
                                        <SelectValue placeholder="Select amount" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {tagOptions.map((option) => (
                                            <SelectItem
                                                key={option.amount}
                                                value={option.amount.toString()}
                                            >
                                                {option.amount} for $
                                                {option.price.toFixed(2)}
                                            </SelectItem>
                                        ))}
                                        <SelectItem value="custom">
                                            Custom amount
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm">
                                    Your account will be charged
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    ${selectedPrice.toFixed(2)} + Tax
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm">
                                    Your new Tags balance will be
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {newBalance}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm">
                                    These Tags will expire on
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {expirationDate}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <p className="text-sm">Promo code</p>
                                <div className="flex gap-4">
                                    <Input
                                        placeholder="Enter code"
                                        className="flex-1 max-w-md"
                                    />
                                    <Button
                                        variant="outline"
                                        className="text-primary border-primary border-2 rounded-xl hover:text-primary/90"
                                    >
                                        Apply
                                    </Button>
                                </div>
                            </div>

                            <div className="flex justify-end gap-4 pt-4">
                                <Button
                                    variant="ghost"
                                    className="text-primary hover:text-primary/90"
                                >
                                    Cancel
                                </Button>
                                <Button>Buy Tags</Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
