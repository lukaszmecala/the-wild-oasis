import Spinner from "../../ui/Spinner";
import styled from "styled-components";
import { useRecentBook } from "./useRecentBook";
import { useRecentStays } from "./useRecentStays";
import { useCabins } from "../cabins/useCabins";
import Stats from "./Stats";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
  margin-top: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading: loadingBookings, bookings } = useRecentBook();
  const {
    isLoading: loadingStays,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();

  const { cabins, isLoading: loadingCabins } = useCabins();

  if (loadingBookings || loadingStays || loadingCabins) return <Spinner />;
  return (
    <StyledDashboardLayout>
      <Stats
        bookings={bookings}
        confirmedStays={confirmedStays}
        numDays={numDays}
        cabinCount={cabins?.length}
      />
      <div>Test 2</div>
    </StyledDashboardLayout>
  );
}

export default DashboardLayout;
