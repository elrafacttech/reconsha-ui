import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

export default function MyResourcesPage() {
    return (
        <div className="flex justify-center">
            <div className="container max-w-7xl py-6">
                <h1 className="text-4xl font-medium mb-6">My Resources</h1>

                <div className="flex items-center gap-2 mb-12">
                    <h2 className="text-2xl font-normal">
                        Total Spend :{' '}
                        <span className="text-primary">$1.97</span>
                    </h2>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 rounded-full"
                            >
                                <MoreHorizontal className="h-4 w-4 text-primary" />
                                <span className="sr-only">More options</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem>View details</DropdownMenuItem>
                            <DropdownMenuItem>Export data</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <h2 className="text-3xl font-normal mb-8">Active contracts</h2>

                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-8 py-10">
                    <p className="text-2xl">There are no active contracts.</p>
                    <p className="text-muted-foreground">
                        Contracts you're actively working on will appear here.
                    </p>
                </div>

                <div className="flex justify-center">
                    <Button size="lg" className="rounded-xl px-8">
                        Search for new Resources
                    </Button>
                </div>
            </div>
        </div>
    );
}
