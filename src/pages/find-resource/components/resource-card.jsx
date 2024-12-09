import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
    Star,
    ThumbsDown,
    Heart,
    FileCheck2,
    BadgeCheck,
    MapPin,
} from 'lucide-react';

export function ResourceCard() {
    return (
        <Card className="mb-4 overflow-hidden">
            <CardContent className="p-6 bg-gray-100 overflow-hidden">
                <div className="flex items-start justify-between">
                    <div>
                        <Button
                            variant="outline"
                            className="rounded-full mb-4 text-blue-700 hover:text-blue-600 py-1 border-blue-700"
                            size="sm"
                        >
                            <FileCheck2 className="mr-2 h-4 w-4" />
                            Proposal Send
                        </Button>
                        <p className="text-sm text-muted-foreground">
                            Posted 1 hour ago
                        </p>
                        <h3 className="mt-2 text-xl font-medium text-muted-foreground">
                            Resource Name
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Hourly: $8-$9 · Intermediate · Est. Time: 3 to 6
                            months, Less than 30 hrs/week
                        </p>
                        <p className="mt-4 text-base">
                            strong Java Developer who has experience in Spring
                            Boot Microservices Angular AWS React
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {[
                                'Spring Boot',
                                'Java',
                                'JavaScript',
                                'Angular',
                                'React JS',
                                'API',
                                'RESTful API',
                                'Angular 10',
                            ].map((tag) => (
                                <Badge key={tag} variant="secondary">
                                    {tag}
                                </Badge>
                            ))}
                        </div>

                        <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-2">
                                <BadgeCheck className="size-5 text-white fill-muted-foreground" />
                                Rating
                            </div>
                            <div className="flex items-center">
                                <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                <Star className="mr-1 h-4 w-4 fill-yellow-400/50 text-yellow-400" />
                                <span className="ml-2">$3K+ spent</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="size-4 text-muted-foreground " />{' '}
                                United States
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <Button variant="ghost" size="icon">
                            <ThumbsDown className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                            <Heart className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
