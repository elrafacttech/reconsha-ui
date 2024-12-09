import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const conversations = [
    {
        id: 1,
        name: 'Immediate Hiring Freelance',
        lastMessage: 'Arun: okay thanks',
        avatar: '/placeholder.svg',
        time: '10/12/22',
    },
    {
        id: 2,
        name: 'Neha Jain',
        role: 'Java backend developer',
        lastMessage: 'Neha: Hello',
        avatar: '/placeholder.svg',
        time: '10/10/22',
    },
    {
        id: 3,
        name: 'Yogita Rathi',
        role: 'Java, Microservices, Spring',
        lastMessage: 'Yogita: Hello Ravi tried 2 tim...',
        avatar: '/placeholder.svg',
        time: '10/7/22',
    },
];

export function MessageList() {
    return (
        <ScrollArea className="flex-1">
            {conversations.map((conversation) => (
                <div
                    key={conversation.id}
                    className="flex items-center gap-3 p-4 hover:bg-accent cursor-pointer"
                >
                    <Avatar>
                        <AvatarImage
                            src={conversation.avatar}
                            alt={conversation.name}
                        />
                        <AvatarFallback>{conversation.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 overflow-hidden">
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium truncate">
                                {conversation.name}
                            </h3>
                            <span className="text-xs text-muted-foreground">
                                {conversation.time}
                            </span>
                        </div>
                        {conversation.role && (
                            <p className="text-sm text-muted-foreground truncate">
                                {conversation.role}
                            </p>
                        )}
                        <p className="text-sm text-muted-foreground truncate">
                            {conversation.lastMessage}
                        </p>
                    </div>
                </div>
            ))}
        </ScrollArea>
    );
}
