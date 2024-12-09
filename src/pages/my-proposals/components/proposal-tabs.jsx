import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function ProposalTabs({ activeTab, onTabChange }) {
    return (
        <Tabs value={activeTab} onValueChange={onTabChange} className="w-full">
            <TabsList className="flex justify-start w-full border-b bg-white">
                <TabsTrigger
                    value="active"
                    className="w-max px-4 py-2 border-b-2 rounded-none data-[state=active]:border-primary data-[state=active]:text-primary"
                >
                    Active
                </TabsTrigger>
                <TabsTrigger
                    value="referrals"
                    className="w-max px-4 py-2 border-b-2 rounded-none data-[state=active]:border-primary data-[state=active]:text-primary"
                >
                    Referrals
                </TabsTrigger>
                <TabsTrigger
                    value="archived"
                    className="w-max px-4 py-2 border-b-2 rounded-none data-[state=active]:border-primary data-[state=active]:text-primary"
                >
                    Archived
                </TabsTrigger>
            </TabsList>
        </Tabs>
    );
}
