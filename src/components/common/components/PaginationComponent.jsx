import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from '@/components/ui/pagination';

export function PaginationComponent() {
    return (
        <Pagination className="justify-end text-muted-foreground">
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        href="#"
                        className="text-black rounded-full border-2 border-black"
                        isActive
                    >
                        2
                    </PaginationLink>
                </PaginationItem>

                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className="text-black" href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
