import AllResourcePage from '@/pages/all-resource/AllResourcePage';
import FindResourcePage from '@/pages/find-resource/FindResourcePage';
import MyProposalsPage from '@/pages/my-proposals/MyProposalPage';
import MyResourcesPage from '@/pages/my-resource/MyResourcePage';
import { Route, Routes } from 'react-router';
function ResourceRoutes() {
    return (
        <Routes>
            <Route path="" element={<MyResourcesPage />} />
            <Route path="all" element={<AllResourcePage />} />
            <Route path="find" element={<FindResourcePage />} />
            <Route path="proposals" element={<MyProposalsPage />} />
        </Routes>
    );
}

export default ResourceRoutes;
