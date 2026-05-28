import CompanyProjectsPage from '@/components/CompanyProjectsPage';

export default async function CompanyProjectsRoute({ params }) {
    const { id } = await params;
    return <CompanyProjectsPage companyId={parseInt(id, 10)} />;
}
