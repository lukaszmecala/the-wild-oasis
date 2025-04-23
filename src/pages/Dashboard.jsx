import DashboardLayout from "../features/dashboard/DashboardLayout";
import DashboardFilter from "../features/dashboard/DashboardFilter";
import Spinner from "../ui/Spinner";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { useRecentBook } from "../features/dashboard/useRecentBook";
import { useRecentStays } from "../features/dashboard/useRecentStays";

function Dashboard() {
  const { isLoading: loadingBookings, bookings } = useRecentBook();
  const { isLoading: loadingStays, stays, confirmedStays } = useRecentStays();

  console.log("Bookings", bookings);

  if (loadingBookings || loadingStays) return <Spinner />;

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Dashboard</Heading>
        <DashboardFilter />
      </Row>
      <DashboardLayout />
    </>
  );
}

export default Dashboard;
