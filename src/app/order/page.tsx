import DashboardLayout from '@/layouts/Dashboard';
import OrderPage from '@/modules/Order/views';

export default function Order() {
	return (
		<DashboardLayout>
			<OrderPage />
		</DashboardLayout>
	);
}
