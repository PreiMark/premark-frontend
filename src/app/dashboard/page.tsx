import DashboardLayout from '@/layouts/Dashboard';
import DashboardPage from '@/modules/Dashboard/views';

export default function Dashboard() {
	return (
		<DashboardLayout>
			<DashboardPage />
		</DashboardLayout>
	);
}
