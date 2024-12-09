import { CalendarIcon, Check, Download, X } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import React from 'react';
import { addDays, format } from 'date-fns';
import { cn } from '@/lib/utils';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';

const transactions = [
    {
        date: 'Nov 21, 2024',
        type: 'GST',
        description: 'GST (IN) - Membership Fee - Ref ID 754818470',
        client: '',
        amount: -1.62,
        refId: '754818471',
    },
    {
        date: 'Nov 21, 2024',
        type: 'Membership Fee',
        description: 'Fees for additional Connects (60).',
        client: '',
        amount: -9.0,
        refId: '754818470',
    },
    {
        date: 'Nov 21, 2024',
        type: 'Payment',
        description: 'Paid from Visa 6505',
        client: '',
        amount: 10.62,
        refId: '754818438',
    },
];

const transactionCategories = [
    'All transactions',
    'All debits',
    'All credits',
    'Hourly',
    'Fixed price',
    'Bonus',
    'Adjustments',
    'Withdrawals',
    'Expense',
];

export default function TransactionHistoryPage() {
    const [showSuccess, setShowSuccess] = React.useState(false);
    const [selectedCategory, setSelectedCategory] = React.useState(
        transactionCategories[0]
    );
    const [selectedClient, setSelectedClient] = React.useState('All clients');
    const [date, setDate] = React.useState({
        from: new Date(2022, 0, 20),
        to: addDays(new Date(2022, 0, 20), 20),
    });

    return (
        <div className="container mx-auto p-6 max-w-7xl space-y-6">
            <h1 className="text-4xl font-medium">Transaction history</h1>

            <div>
                <h2 className="text-2xl font-medium">
                    Balance: <span className="text-primary">$1.97</span>
                </h2>
            </div>

            <div className="flex justify-between items-end flex-wrap py-5">
                <div className="flex justify-between items-center gap-5 flex-wrap">
                    <div className="flex flex-col justify-start gap-2">
                        <Label className="text-base">Statement Period</Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    id="date"
                                    variant={'outline'}
                                    className={cn(
                                        'w-[300px] justify-start text-left font-normal',
                                        !date && 'text-muted-foreground'
                                    )}
                                >
                                    <CalendarIcon />
                                    {date?.from ? (
                                        date.to ? (
                                            <>
                                                {format(date.from, 'LLL dd, y')}{' '}
                                                - {format(date.to, 'LLL dd, y')}
                                            </>
                                        ) : (
                                            format(date.from, 'LLL dd, y')
                                        )
                                    ) : (
                                        <span>Pick a date</span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent
                                className="w-auto p-0"
                                align="start"
                            >
                                <Calendar
                                    initialFocus
                                    mode="range"
                                    defaultMonth={date?.from}
                                    selected={date}
                                    onSelect={setDate}
                                    numberOfMonths={2}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="flex flex-col justify-start gap-2">
                        <Label className="text-base">
                            Transaction Category
                        </Label>
                        <Select
                            value={selectedCategory}
                            onValueChange={setSelectedCategory}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                {transactionCategories.map((category) => (
                                    <SelectItem key={category} value={category}>
                                        {category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <div className="flex flex-col justify-start gap-2">
                        <Label className="text-base">Client</Label>
                        <Select
                            value={selectedClient}
                            onValueChange={setSelectedClient}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select client" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="All clients">
                                    All clients
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-5 flex-wrap">
                    <Button
                        variant="outline"
                        className="gap-2 text-primary hover:text-primary/90 rounded-xl"
                        onClick={() => setShowSuccess(true)}
                    >
                        <Download className="h-4 w-4" />
                        Download CSV
                    </Button>
                    <Button
                        variant="outline"
                        className="gap-2 text-primary hover:text-primary/90 rounded-xl"
                        onClick={() => setShowSuccess(true)}
                    >
                        <Download className="h-4 w-4" />
                        Download invoices
                    </Button>
                </div>
            </div>

            {showSuccess && (
                <Alert className="mb-5 bg-primary/10 text-primary border-none">
                    <AlertDescription className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Check className="h-4 w-4" />
                            Your invoice download was successful.
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-4 w-4 hover:bg-primary/10"
                            onClick={() => setShowSuccess(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </AlertDescription>
                </Alert>
            )}

            <Table>
                <TableHeader>
                    <TableRow className="border-b">
                        <TableHead className="text-black">Date</TableHead>
                        <TableHead className="text-black">Type</TableHead>
                        <TableHead className="text-black">
                            Description
                        </TableHead>
                        <TableHead className="text-black">Client</TableHead>
                        <TableHead className="text-right text-black">
                            Amount
                        </TableHead>
                        <TableHead className="text-right text-black">
                            Ref ID
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="border-b">
                    {transactions.map((transaction) => (
                        <TableRow
                            key={transaction.refId}
                            className="text-muted-foreground border-b"
                        >
                            <TableCell classNam="">
                                {transaction.date}
                            </TableCell>
                            <TableCell>{transaction.type}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>{transaction.client}</TableCell>
                            <TableCell className="text-right">
                                ${Math.abs(transaction.amount).toFixed(2)}
                            </TableCell>
                            <TableCell className="text-right text-primary">
                                {transaction.refId}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
