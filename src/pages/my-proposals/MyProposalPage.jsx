import React, { useState } from 'react';
import { ProposalTabs } from './components/proposal-tabs';
import { ProposalList } from './components/proposal-list';
import EarnTagsBanner from './components/earn-tags-banner';

const activeProposals = [
    {
        id: '1',
        title: 'Java Developer',
        initiatedDate: 'Nov 21, 2024',
        timeAgo: '4 hours ago',
    },
    {
        id: '2',
        title: 'Java Backend Developer Needed for Project Enhancement',
        initiatedDate: 'Nov 21, 2024',
        timeAgo: '5 hours ago',
    },
];

const referredProposals = [
    {
        id: '3',
        title: 'Develop a Scalable API for E-Commerce Application',
        initiatedDate: 'Nov 5, 2024',
        timeAgo: '2 weeks ago',
    },
    {
        id: '4',
        title: 'Experienced Backend Developers Needed for Innovative Project',
        initiatedDate: 'Nov 4, 2024',
        timeAgo: '2 weeks ago',
    },
];

const archivedProposals = [
    {
        id: '3',
        title: 'Develop a Scalable API for E-Commerce Application',
        initiatedDate: 'Nov 5, 2024',
        timeAgo: '2 weeks ago',
        status: 'closed',
    },
    {
        id: '4',
        title: 'Experienced Backend Developers Needed for Innovative Project',
        initiatedDate: 'Nov 4, 2024',
        timeAgo: '2 weeks ago',
        status: 'closed',
    },
];

export default function MyProposalsPage() {
    const [activeTab, setActiveTab] = useState('active');

    return (
        <div className="max-w-5xl mx-auto p-4 sm:p-6">
            <h1 className="text-2xl font-medium mb-6">My proposals</h1>

            <EarnTagsBanner />

            <ProposalTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {activeTab === 'active' && (
                <ProposalList
                    title="Active proposals"
                    proposals={activeProposals}
                    count={2}
                />
            )}

            {activeTab === 'referrals' && (
                <ProposalList
                    title="Referred proposals"
                    proposals={referredProposals}
                    count={3}
                />
            )}

            {activeTab === 'archived' && (
                <ProposalList
                    title="Archived proposals"
                    proposals={archivedProposals}
                    count={3}
                />
            )}

            <div className="flex flex-col sm:flex-row sm:justify-end gap-5 mt-8 text-sm">
                <a
                    href="#"
                    className="text-emerald-600 hover:underline mb-2 sm:mb-0"
                >
                    Search for Resources
                </a>
                <a href="#" className="text-emerald-600 hover:underline">
                    Manage your profile
                </a>
            </div>
        </div>
    );
}
