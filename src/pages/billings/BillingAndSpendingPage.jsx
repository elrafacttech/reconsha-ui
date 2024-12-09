import { CalendarIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { Link } from 'react-router';
import { useState } from 'react';

export default function BillingsPage() {
    const [activeTab, setActiveTab] = useState('billings');
    return (
        <div className="container max-w-7xl mx-auto p-4 sm:p-6 space-y-4 sm:space-y-14">
            <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">
                    Billings & Spending
                </h1>
                <p className="text-sm sm:text-base text-muted-foreground">
                    View your spendings and any applicable fees or taxes by
                    client for the past 3 years. For earnings past three years,
                    go to{' '}
                    <Link
                        href="/transaction-history"
                        className="text-primary underline"
                    >
                        transaction history
                    </Link>
                    .
                </p>
            </div>

            <Tabs
                defaultValue="billings"
                value={activeTab}
                onValueChange={setActiveTab}
                className="w-full"
            >
                <TabsList className="w-full bg-transparent justify-start border-b-2 p-0 rounded-none">
                    <TabsTrigger
                        value="billings"
                        className="w-max text-black/80 data-[state=active]:text-primary data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-primary"
                    >
                        Billings & Spendings
                    </TabsTrigger>
                    <TabsTrigger
                        value="lifetime"
                        className="w-max text-black/80 data-[state=active]:text-primary data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-primary"
                    >
                        Lifetime Billed
                    </TabsTrigger>
                </TabsList>

                <div
                    className={`flex flex-col sm:flex-row items-start sm:items-center ${activeTab === 'billings' ? 'justify-between' : 'justify-end'} gap-4 sm:gap-0 py-10`}
                >
                    {activeTab === 'billings' && (
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto gap-2"
                        >
                            <CalendarIcon className="h-4 w-4" />
                            Dec 1, 2023 - Nov 21, 2024
                        </Button>
                    )}

                    <Button className="w-full sm:w-auto rounded-xl">
                        Download CSV
                    </Button>
                </div>

                <TabsContent value="billings">
                    <div className="flex gap-14 items-start w-full">
                        <h2 className="text-base text-primary mb-4">
                            Emstell Technology Consulting
                        </h2>
                        <Card className="w-full">
                            <CardContent className="p-4 sm:p-10">
                                <div className="grid gap-6 pt-5">
                                    <div className="space-y-10">
                                        <div className="flex justify-between items-center">
                                            <div className="space-y-4">
                                                <div className="space-y-2">
                                                    <div className="text-3xl sm:text-4xl font-normal">
                                                        $140.01
                                                    </div>
                                                    <div className="text-sm sm:text-base text-muted-foreground">
                                                        Your earnings after
                                                        Reconsha fees & taxes
                                                    </div>
                                                </div>
                                                <div className="space-y-1 text-sm sm:text-base">
                                                    <div>
                                                        Total billed:{' '}
                                                        <span className="font-medium">
                                                            $160.83
                                                        </span>
                                                    </div>
                                                    <div>
                                                        Total fees & taxes:{' '}
                                                        <span className="font-medium">
                                                            ($20.82)
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-center sm:justify-end">
                                                <img
                                                    src="https://via.placeholder.com/120x120.png?text=Money"
                                                    alt="Money illustration"
                                                    width={100}
                                                    height={100}
                                                    className="opacity-80"
                                                />
                                            </div>
                                        </div>

                                        <div className="overflow-x-auto">
                                            <Table>
                                                <TableHeader>
                                                    <TableRow>
                                                        <TableHead className="w-[40%] text-black">
                                                            Job name
                                                        </TableHead>
                                                        <TableHead className="w-[35%] text-black text-right">
                                                            Fees & taxes
                                                        </TableHead>
                                                        <TableHead className="w-[25%] text-right text-black">
                                                            Billed
                                                        </TableHead>
                                                    </TableRow>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell className="font-medium text-muted-foreground">
                                                            Java Spring Boot
                                                            Expert
                                                        </TableCell>
                                                        <TableCell className="flex flex-col justify-end items-end">
                                                            <span className="text-muted-foreground">
                                                                ($20.82)
                                                            </span>
                                                            <span className="text-xs sm:text-sm text-muted-foreground">
                                                                $16.08 fees +
                                                                $4.74 tax
                                                            </span>
                                                        </TableCell>
                                                        <TableCell className="text-right text-muted-foreground">
                                                            $160.83
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>

                <TabsContent value="lifetime">
                    <div className="flex gap-14 w-full items-start">
                        <h2 className="text-base font-medium text-primary mb-4">
                            Emstell Technology Consulting
                        </h2>
                        <Card className="w-full">
                            <CardContent className="p-4 sm:p-20">
                                <div className="flex flex-col items-center text-center space-y-4 py-10">
                                    <img
                                        src="https://via.placeholder.com/120x120.png?text=Money"
                                        alt="Money bag illustration"
                                        width={100}
                                        height={100}
                                        className="opacity-80"
                                    />
                                    <div>
                                        <h3 className="text-xl sm:text-2xl mb-2">
                                            Your lifetime billed amount is
                                            $160.83
                                        </h3>
                                        <p className="text-sm sm:text-base text-muted-foreground">
                                            This is a total sum of invoices
                                            (paid or pending to be paid),
                                            excluding taxes and fees.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}
