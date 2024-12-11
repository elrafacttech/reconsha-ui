import * as React from 'react';
import {
    Search,
    Download,
    MoreHorizontal,
    Settings2,
    CircleX,
    CalendarIcon,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useToggle } from '@/hooks/use-toggle';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import { PaginationComponent } from '@/components/common/components/PaginationComponent';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

export default function ResourcesDashboard() {
    const [isFilterOpen, setFilterOpen] = useToggle();

    const [startDate, setStartDate] = React.useState();
    const [endDate, setEndDate] = React.useState();

    return (
        <div className="container max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-8">
            <h1 className="text-4xl font-medium mb-6">All Resources</h1>
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 sm:space-x-4">
                <div className="w-full sm:max-w-md lg:max-w-2xl relative flex items-center">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                        placeholder="Search by contract, client, or company name"
                        className="pl-10 w-full rounded-full"
                    />

                    <Button
                        variant="ghost"
                        onClick={setFilterOpen}
                        className="ml-2 sm:ml-4 flex text-primary hover:text-primary/90 items-center gap-2"
                    >
                        {isFilterOpen ? (
                            <Settings2 className="h-4 w-4 fill-primary" />
                        ) : (
                            <Settings2 className="h-4 w-4" />
                        )}
                        <span className="hidden sm:inline">Filters</span>
                    </Button>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full sm:w-auto">
                        <Label className="sm:sr-only">Sort by</Label>
                        <Select defaultValue="start-date">
                            <SelectTrigger className="w-full sm:w-[140px]">
                                <SelectValue placeholder="Sort by" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="start-date">
                                    Start date
                                </SelectItem>
                                <SelectItem value="end-date">
                                    End date
                                </SelectItem>
                                <SelectItem value="name">Name</SelectItem>
                            </SelectContent>
                        </Select>

                        <Select defaultValue="descending">
                            <SelectTrigger className="w-full sm:w-[140px]">
                                <SelectValue placeholder="Order" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="ascending">
                                    Ascending
                                </SelectItem>
                                <SelectItem value="descending">
                                    Descending
                                </SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <span className="text-sm text-muted-foreground">
                        1 total
                    </span>
                </div>
            </div>

            <Collapsible open={isFilterOpen}>
                <CollapsibleContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4 sm:p-6 border-t rounded-lg bg-background">
                        <div className="space-y-4">
                            <h3 className="font-medium">Contract type</h3>
                            <RadioGroup defaultValue="all">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="all" id="all-type" />
                                    <Label htmlFor="all-type">All</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="hourly"
                                        id="hourly"
                                    />
                                    <Label htmlFor="hourly">Hourly</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem
                                        value="fixed-price"
                                        id="fixed-price"
                                    />
                                    <Label htmlFor="fixed-price">
                                        Fixed-Price
                                    </Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium">Contract status</h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="all-status" defaultChecked />
                                    <Label htmlFor="all-status">All</Label>
                                </div>
                                {['Pending', 'Active', 'Ended', 'Paused'].map(
                                    (status) => (
                                        <div
                                            key={status}
                                            className="flex items-center space-x-2"
                                        >
                                            <Checkbox
                                                id={status.toLowerCase()}
                                            />
                                            <Label
                                                htmlFor={status.toLowerCase()}
                                            >
                                                {status}
                                            </Label>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium">Milestone status</h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="all-milestone"
                                        defaultChecked
                                    />
                                    <Label htmlFor="all-milestone">All</Label>
                                </div>
                                {[
                                    'Active',
                                    'Awaiting funding',
                                    'Payment requested',
                                ].map((status) => (
                                    <div
                                        key={status}
                                        className="flex items-center space-x-2"
                                    >
                                        <Checkbox
                                            id={status
                                                .toLowerCase()
                                                .replace(' ', '-')}
                                        />
                                        <Label
                                            htmlFor={status
                                                .toLowerCase()
                                                .replace(' ', '-')}
                                        >
                                            {status}
                                        </Label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h3 className="font-medium">
                                Escrow refund status
                            </h3>
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="any" defaultChecked />
                                    <Label htmlFor="any">Any</Label>
                                </div>
                                {['Requested', 'Approved', 'Not approved'].map(
                                    (status) => (
                                        <div
                                            key={status}
                                            className="flex items-center space-x-2"
                                        >
                                            <Checkbox
                                                id={status
                                                    .toLowerCase()
                                                    .replace(' ', '-')}
                                            />
                                            <Label
                                                htmlFor={status
                                                    .toLowerCase()
                                                    .replace(' ', '-')}
                                            >
                                                {status}
                                            </Label>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <h3 className="font-medium">
                                    Contract start dates
                                </h3>
                                <div className="relative">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={'outline'}
                                                className={cn(
                                                    'w-[200px] justify-start text-left font-normal',
                                                    !startDate &&
                                                        'text-muted-foreground'
                                                )}
                                            >
                                                <CalendarIcon />
                                                {startDate ? (
                                                    format(startDate, 'PPP')
                                                ) : (
                                                    <span>All start dates</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={startDate}
                                                onSelect={setStartDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <h3 className="font-medium">
                                    Contract end dates
                                </h3>
                                <div className="relative">
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button
                                                variant={'outline'}
                                                className={cn(
                                                    'w-[200px] justify-start text-left font-normal',
                                                    !endDate &&
                                                        'text-muted-foreground'
                                                )}
                                            >
                                                <CalendarIcon />
                                                {endDate ? (
                                                    format(endDate, 'PPP')
                                                ) : (
                                                    <span>All end dates</span>
                                                )}
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0">
                                            <Calendar
                                                mode="single"
                                                selected={endDate}
                                                onSelect={setEndDate}
                                                initialFocus
                                            />
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-start items-center w-full px-4 sm:px-6 mt-4 gap-2">
                        <Button
                            variant="default"
                            className="w-full sm:w-auto rounded-xl"
                        >
                            Apply Filters
                        </Button>
                        <Button
                            variant="ghost"
                            className="w-full sm:w-auto flex items-center gap-2 text-primary hover:text-primary/90"
                        >
                            <CircleX className="h-4 w-4" />
                            Clear Filters
                        </Button>
                    </div>
                </CollapsibleContent>
            </Collapsible>

            <div className="space-y-4 w-full">
                <div className="flex justify-end">
                    <Button
                        variant="ghost"
                        className="w-full sm:w-auto flex items-center gap-2 text-primary hover:text-primary/90"
                    >
                        <Download className="h-4 w-4" />
                        Download CSV
                    </Button>
                </div>

                <Card>
                    <CardContent className="p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                            <div className="space-y-5 w-full sm:w-3/5">
                                <h2 className="text-xl sm:text-2xl font-medium">
                                    Resource Name
                                </h2>
                                <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                                    <div className="space-y-1">
                                        <p className="text-muted-foreground">
                                            Company
                                        </p>
                                        <p className="text-primary">
                                            Emstell Technology Consulting
                                        </p>
                                    </div>

                                    <div className="text-left sm:text-right">
                                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
                                            <Badge variant="secondary">
                                                Ended
                                            </Badge>
                                            <div className="flex items-center gap-1">
                                                {'★★★★★'
                                                    .split('')
                                                    .map((star, i) => (
                                                        <span
                                                            key={i}
                                                            className="text-yellow-400"
                                                        >
                                                            {star}
                                                        </span>
                                                    ))}
                                                <span className="ml-1 font-medium">
                                                    5.0
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Rate: $5.00/hr, 20 hrs weekly limit
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-muted-foreground">
                                    Mar 6 - Jun 17
                                </p>
                            </div>

                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <Button
                                    variant="outline"
                                    className="w-full sm:w-auto border-primary rounded-xl text-primary hover:text-primary/90"
                                >
                                    Propose new contract
                                </Button>

                                <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="rounded-full border"
                                        >
                                            <MoreHorizontal className="h-4 w-4 text-primary" />
                                        </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end">
                                        <DropdownMenuItem>
                                            View details
                                        </DropdownMenuItem>
                                        <DropdownMenuItem>
                                            Edit contract
                                        </DropdownMenuItem>
                                        <DropdownMenuItem className="text-destructive">
                                            Delete
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <div className="flex md:justify-between flex-col md:flex-row gap-4 items-center w-full">
                    <div className="flex items-center gap-2 w-full">
                        <span className="text-sm text-muted-foreground">
                            Resource Per Page:
                        </span>
                        <Select value="10">
                            <SelectTrigger className="w-[80px]">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {[10, 20, 30, 40, 50].map((size) => (
                                    <SelectItem
                                        key={size}
                                        value={size.toString()}
                                    >
                                        {size}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <PaginationComponent />
                </div>
            </div>
        </div>
    );
}
