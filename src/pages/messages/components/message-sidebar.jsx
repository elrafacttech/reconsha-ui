import { Clock10, Eye, Landmark, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function MessageSidebar() {
    return (
        <aside className="w-80 border-l bg-background hidden lg:block">
            <div className="p-4 relative flex flex-col items-center">
                <Button
                    className="absolute top-2 right-2"
                    variant="ghost"
                    size="icon"
                >
                    <X className="h-4 w-4" />
                </Button>

                <Avatar className="w-14 h-14">
                    <AvatarImage src="/placeholder.svg" alt="Elrafact" />
                    <AvatarFallback>ET</AvatarFallback>
                </Avatar>

                <div className="mt-3 text-center">
                    <h2 className="font-semibold">
                        Elrafact Technology Solutions
                    </h2>
                    <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                        <Landmark className="h-4 w-4" /> Elrafact Technology
                        Solutions
                    </p>
                    <span className="text-muted-foreground flex items-center justify-center gap-2">
                        <Clock10 className="h-4 w-4" /> 8:07 PM GMT+5:30
                    </span>
                </div>
            </div>

            <div className="p-4 flex justify-center w-full">
                <Button variant="link" className="flex items-center gap-2">
                    <Eye className="h-4 w-4" /> View proposal
                </Button>
            </div>
        </aside>
    );
}
