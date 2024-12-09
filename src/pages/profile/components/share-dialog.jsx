'use client';

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import {
    Link2,
    Mail,
    MessageCircleMore,
    MessageSquare,
    PhoneIcon as WhatsApp,
} from 'lucide-react';

export function ShareDialog({ open, onOpenChange }) {
    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
            // You could add a toast notification here
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-[600px] py-10">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-normal">
                        Share Company profile
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-6">
                    <div className="flex items-center gap-4">
                        <img
                            src="https://via.placeholder.com/48x48.png?text=Company"
                            alt="Company"
                            width={48}
                            height={48}
                            className="rounded-full"
                        />
                        <div>
                            <h3 className="font-medium text-lg">
                                Company Name
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                Company Title
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                        <Button
                            variant="outline"
                            className="h-auto py-4 px-4 flex flex-col items-center gap-2 border-2"
                            onClick={handleCopyLink}
                        >
                            <Link2 className="h-6 w-6" />
                            <span>Copy link</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-auto py-4 px-4 flex flex-col items-center gap-2 border-2"
                        >
                            <MessageSquare className="h-6 w-6" />
                            <span>Message</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-auto py-4 px-4 flex flex-col items-center gap-2 border-2"
                        >
                            <Mail className="h-6 w-6" />
                            <span>Email</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-auto py-4 px-4 flex flex-col items-center gap-2 border-2"
                        >
                            <WhatsApp className="h-6 w-6" />
                            <span>WhatsApp</span>
                        </Button>
                        <Button
                            variant="outline"
                            className="h-auto py-4 px-4 flex flex-col items-center gap-2 border-2"
                        >
                            <MessageCircleMore className="h-6 w-6" />
                            <span>Messenger</span>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
