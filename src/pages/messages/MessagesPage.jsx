import { useState } from 'react';
import {
    Search,
    Paperclip,
    Smile,
    Send,
    Settings2,
    BriefcaseBusiness,
    MoreHorizontal,
    PanelRightClose,
    Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageList } from './components/message-list';
import { MessageThread } from './components/message-thread';
import { MessageSidebar } from './components/message-sidebar';
import { Separator } from '@/components/ui/separator';

export default function MessagesPage() {
    const [message, setMessage] = useState('');

    return (
        <div className="flex max-h-screen">
            <div className="w-96 border-r flex-col bg-background hidden md:flex">
                <div className="p-4 border-b space-y-4">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-medium">Messages</h1>
                        <Button
                            variant="ghost"
                            className="hover:text-primary text-primary rounded-full border"
                            size="icon"
                        >
                            <MoreHorizontal className="size-8" />
                        </Button>
                    </div>
                    <div className="relative flex justify-between items-center gap-2">
                        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            placeholder="Search"
                            className="pl-8 rounded-full"
                        />
                        <Button
                            variant="ghost"
                            className="hover:text-primary"
                            size="icon"
                        >
                            <Settings2 className="size-8" />
                        </Button>
                    </div>
                </div>
                <MessageList />
            </div>

            <div className="flex-1 flex flex-col">
                <div className="border-b p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex flex-col">
                            <h2 className="font-semibold">
                                Elrafact Technology Solutions
                            </h2>
                            <p className="text-sm text-muted-foreground flex gap-1 items-center">
                                <BriefcaseBusiness className="size-4" /> Spring
                                Boot / Java Developer - Micro Services
                            </p>
                        </div>
                    </div>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="text-primary hover:text-primary"
                    >
                        <PanelRightClose className="size-6" />
                    </Button>
                </div>

                <ScrollArea className="flex-1 p-4">
                    <MessageThread />
                </ScrollArea>

                <div className="p-4">
                    <div className="bg-muted rounded-lg p-4">
                        <Input
                            placeholder="Send a message..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="bg-transparent border-none mb-2 placeholder:text-muted-foreground focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <button className="text-muted-foreground hover:text-foreground">
                                    T
                                </button>
                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />
                                <button className="text-muted-foreground hover:text-foreground">
                                    <Paperclip className="h-4 w-4" />
                                </button>
                                <button className="text-muted-foreground hover:text-foreground">
                                    <Sparkles className="h-4 w-4" />
                                </button>
                                <button className="text-muted-foreground hover:text-foreground">
                                    <Smile className="h-4 w-4" />
                                </button>
                            </div>
                            <div className="flex items-center gap-4">
                                <button className="text-muted-foreground hover:text-foreground">
                                    <Settings2 className="h-4 w-4" />
                                </button>
                                <Separator
                                    orientation="vertical"
                                    className="h-4"
                                />
                                <button className="text-muted-foreground hover:text-foreground">
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <MessageSidebar />
        </div>
    );
}
