import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export function ProposalList({ title, proposals, count }) {
    return (
        <Card className="mb-6">
            <CardHeader>
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                    {title} <Badge variant="secondary">{count}</Badge>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {proposals.map((proposal) => (
                        <div
                            key={proposal.id}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2 border-b last:border-b-0"
                        >
                            <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">
                                    Initiated {proposal.initiatedDate}
                                    <span className="mx-2 hidden sm:inline">
                                        ·
                                    </span>
                                    <span className="sm:inline block">
                                        {proposal.timeAgo}
                                    </span>
                                </div>
                                <a
                                    href="#"
                                    className="text-primary hover:underline font-medium"
                                >
                                    {proposal.title}
                                </a>
                            </div>
                            <div className="flex items-center gap-4 mt-2 sm:mt-0">
                                {proposal.status === 'closed' && (
                                    <span className="text-sm text-muted-foreground">
                                        Job is closed
                                    </span>
                                )}
                                <a
                                    href="#"
                                    className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                    General Profile
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
