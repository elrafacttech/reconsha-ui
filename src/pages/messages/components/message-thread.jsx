import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const messages = [
    {
        id: 1,
        sender: 'Elrafact Technology Solutions',
        content:
            'Docker,Kubernetes,Apache Kafka,RabbitMQ,Jenkins. Kindly provide me opportunity. I can do my best.\n\nThanks & Regards,\nRaghu B',
        time: '7:56 AM',
        avatar: '/placeholder.svg',
    },
    {
        id: 2,
        sender: 'Elrafact Technology Solutions',
        content: 'Are you available for Full Time?',
        time: '7:56 AM',
        avatar: '/placeholder.svg',
    },
    {
        id: 3,
        sender: 'Raghu Basuvaraj',
        content: 'Yes I am available..',
        time: '7:56 AM',
        avatar: '/placeholder.svg',
    },
];

export function MessageThread() {
    return (
        <div className="space-y-4">
            {messages.map((message) => (
                <div key={message.id} className="flex gap-3 rounded-3xl bg-gray-100 w-max p-4">
                    <Avatar className="h-8 w-8">
                        <AvatarImage
                            src={message.avatar}
                            alt={message.sender}
                        />
                        <AvatarFallback className="bg-primary/10">{message.sender[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className="font-medium">
                                {message.sender}
                            </span>
                            <span className="text-xs text-muted-foreground">
                                {message.time}
                            </span>
                        </div>
                        <p className="text-sm whitespace-pre-line">
                            {message.content}
                        </p>
                        {message.id === 1 && (
                            <Button
                                variant="link"
                                className="text-primary p-0 h-auto text-sm"
                            >
                                View details
                            </Button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
