import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { CreditCard, Lock, Plus } from 'lucide-react';

export default function BillingSettingsPage() {
    const [showAddPayment, setShowAddPayment] = useState(false);
    const [step, setStep] = useState('select');
    const [paymentType, setPaymentType] = useState(null);

    const handlePaymentTypeSelect = (value) => {
        setPaymentType(value);
        if (value === 'card') {
            setStep('details');
        } else {
            setShowAddPayment(false);
        }
    };

    const handleBack = () => {
        if (step === 'details') {
            setStep('select');
        } else {
            setShowAddPayment(false);
        }
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-medium">Billing & payments</h2>
            <Card>
                <CardContent className="pt-6">
                    {!showAddPayment && (
                        <>
                            <h3 className="text-lg font-medium mb-4">
                                Manage billing methods
                            </h3>
                            <p className="text-sm text-muted-foreground mb-6">
                                Add, update, or remove your billing methods.
                            </p>
                        </>
                    )}

                    {!showAddPayment && (
                        <div className="space-y-6">
                            <div className="pb-4">
                                <h4 className="font-medium mb-2">Primary</h4>
                                <p className="text-sm text-muted-foreground mb-4">
                                    Your primary billing method is used for all
                                    recurring payments.
                                </p>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-5 bg-[#1A1F71] rounded flex items-center justify-center text-white text-[10px] font-bold">
                                            VISA
                                        </div>
                                        <span>Visa ending in 6505</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Button
                                            variant="ghost"
                                            className="text-primary hover:text-primary"
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="text-destructive hover:text-destructive"
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <Button
                                onClick={() => setShowAddPayment(true)}
                                className="text-primary hover:text-primary/90"
                                variant="ghost"
                            >
                                <Plus className="size-6" /> Add a billing method
                            </Button>
                        </div>
                    )}

                    {showAddPayment && (
                        <div className="space-y-6">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-medium">
                                    Add a billing method
                                </h3>

                                <Button
                                    onClick={handleBack}
                                    variant="outline"
                                    className="text-primary hover:text-primary/90 rounded-xl"
                                >
                                    Cancel
                                </Button>
                            </div>

                            <RadioGroup
                                defaultValue={paymentType}
                                onValueChange={(value) =>
                                    handlePaymentTypeSelect(value)
                                }
                                className="space-y-4"
                            >
                                <div className="flex items-center space-x-4 p-4">
                                    <RadioGroupItem value="card" id="card" />
                                    <Label htmlFor="card" className="flex-1">
                                        <div>Payment card</div>
                                        <div className="text-sm text-muted-foreground">
                                            Visa, Mastercard, American Express,
                                            Discover, Diners
                                        </div>
                                    </Label>
                                </div>

                                {paymentType === 'card' && (
                                    <form className="space-y-6">
                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-end">
                                                    <Label>Card number</Label>

                                                    <img
                                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlhElDa9mup4dGKzLku0e-af59ui5TpjVH158MoxsE5SScUgdF7WZIh-D1FGiiRHFDEA"
                                                        alt="accepted card image"
                                                        className="w-auto h-8"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <CreditCard className="h-4 w-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                                                    <Input
                                                        placeholder="1234 5678 9012 3456"
                                                        className="pl-10"
                                                        maxLength="16"
                                                    />
                                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                                        <Lock className="h-4 w-4 text-muted-foreground" />
                                                        <span className="text-sm text-muted-foreground hidden md:block">
                                                            Securely stored
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <Label>First name</Label>
                                                    <Input placeholder="Raghu" />
                                                </div>
                                                <div>
                                                    <Label>Last name</Label>
                                                    <Input placeholder="Basuvaraj" />
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-3 gap-4">
                                                <div>
                                                    <Label>
                                                        Expiration month
                                                    </Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="MM" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {Array.from(
                                                                { length: 12 },
                                                                (_, i) => (
                                                                    <SelectItem
                                                                        key={
                                                                            i +
                                                                            1
                                                                        }
                                                                        value={(
                                                                            i +
                                                                            1
                                                                        )
                                                                            .toString()
                                                                            .padStart(
                                                                                2,
                                                                                '0'
                                                                            )}
                                                                    >
                                                                        {(i + 1)
                                                                            .toString()
                                                                            .padStart(
                                                                                2,
                                                                                '0'
                                                                            )}
                                                                    </SelectItem>
                                                                )
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div>
                                                    <Label>
                                                        Expiration year
                                                    </Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="YY" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {Array.from(
                                                                { length: 10 },
                                                                (_, i) => {
                                                                    const year =
                                                                        new Date().getFullYear() +
                                                                        i;
                                                                    return (
                                                                        <SelectItem
                                                                            key={
                                                                                year
                                                                            }
                                                                            value={year
                                                                                .toString()
                                                                                .slice(
                                                                                    -2
                                                                                )}
                                                                        >
                                                                            {
                                                                                year
                                                                            }
                                                                        </SelectItem>
                                                                    );
                                                                }
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div>
                                                    <Label>Security code</Label>
                                                    <Input
                                                        placeholder="3 digits"
                                                        maxLength={3}
                                                    />
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h4 className="font-medium">
                                                    Billing address
                                                </h4>
                                                <div>
                                                    <Label>Country</Label>
                                                    <Select>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select country" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            <SelectItem value="in">
                                                                India
                                                            </SelectItem>
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div>
                                                    <Label>
                                                        Address line 1
                                                    </Label>
                                                    <Input />
                                                </div>
                                                <div>
                                                    <Label>
                                                        Address line 2
                                                        (optional)
                                                    </Label>
                                                    <Input />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <Label>City</Label>
                                                        <Input placeholder="Coimbatore" />
                                                    </div>
                                                    <div>
                                                        <Label>
                                                            Postal code
                                                            <span className="hidden md:block">
                                                                (optional)
                                                            </span>
                                                        </Label>
                                                        <Input placeholder="641109" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                <div className="flex items-center space-x-4 p-4">
                                    <RadioGroupItem
                                        value="paypal"
                                        id="paypal"
                                    />
                                    <Label htmlFor="paypal" className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    fill="#00457C"
                                                    d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.72a.641.641 0 0 1 .632-.544h6.964c2.377 0 4.17.554 5.323 1.645 1.154 1.09 1.523 2.638 1.097 4.605-.09.425-.236.872-.445 1.342a8.294 8.294 0 0 1-.663 1.324c-.25.407-.53.79-.833 1.145-.304.354-.674.669-1.11.944-.435.275-.92.497-1.452.669-.532.171-1.134.257-1.805.257H9.676L8.29 20.597a.641.641 0 0 1-.632.544H7.076v.196zm3.768-12.29c1.293 0 2.225.28 2.795.84.57.561.713 1.415.43 2.562-.285 1.146-.892 2.005-1.822 2.575-.93.57-2.127.855-3.59.855H6.77l1.184-6.832h2.89z"
                                                />
                                            </svg>
                                            PayPal
                                        </div>
                                    </Label>
                                </div>
                            </RadioGroup>
                            <div className="flex justify-between">
                                {step === 'details' && (
                                    <Button
                                        className="rounded-xl"
                                        type="submit"
                                    >
                                        Save
                                    </Button>
                                )}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
