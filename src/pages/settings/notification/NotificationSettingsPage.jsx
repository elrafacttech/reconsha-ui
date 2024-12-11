import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function NotificationSettingsPage() {
    return (
        <div className="container space-y-5">
            <h1 className="text-3xl font-medium">Notification settings</h1>

            <Tabs defaultValue="messages" className="w-full">
                <TabsList className="w-full justify-start h-auto p-0 bg-transparent border-b rounded-none">
                    <TabsTrigger
                        value="messages"
                        className="data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-4 py-2"
                    >
                        Messages
                    </TabsTrigger>
                    <TabsTrigger
                        value="email"
                        className="data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-4 py-2"
                    >
                        Email updates
                    </TabsTrigger>
                    <TabsTrigger
                        value="tax"
                        className="data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none border-b-2 border-transparent rounded-none px-4 py-2"
                    >
                        Tax settings
                    </TabsTrigger>
                </TabsList>

                <div className="mt-8 space-y-8">
                    <div>
                        <h2 className="text-xl mb-2">Email</h2>
                        <p className="text-muted-foreground mb-6">
                            (Sending to m******od@gmail.com)
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-md md:text-lg">
                                Send an email with unread activity for:
                            </h3>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <Select defaultValue="all">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select activity" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">
                                            All activity
                                        </SelectItem>
                                        <SelectItem value="important">
                                            Important only
                                        </SelectItem>
                                        <SelectItem value="mentions">
                                            Mentions only
                                        </SelectItem>
                                    </SelectContent>
                                </Select>

                                <Select defaultValue="15">
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Select frequency" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="15">
                                            Every 15 minutes
                                        </SelectItem>
                                        <SelectItem value="30">
                                            Every 30 minutes
                                        </SelectItem>
                                        <SelectItem value="60">
                                            Every hour
                                        </SelectItem>
                                        <SelectItem value="daily">
                                            Daily
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="flex items-center space-x-2">
                            <Checkbox id="offline" />
                            <Label
                                htmlFor="offline"
                                className="text-sm font-normal"
                            >
                                Only send when offline or idle
                            </Label>
                        </div>
                    </div>
                </div>
            </Tabs>
        </div>
    );
}
