import React from 'react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function EarnTagsBanner() {
    return (
        <Card className="bg-emerald-900 text-primary-foreground mb-6">
            <CardHeader>
                <CardTitle className="text-sm font-medium">
                    Earn free tags
                </CardTitle>
                <CardDescription className="text-lg sm:text-xl font-medium text-primary-foreground/90">
                    Get eight Tags by watching a one-minute safety tips video
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Button variant="secondary" size="sm">
                    Watch now
                </Button>
            </CardContent>
        </Card>
    );
}
