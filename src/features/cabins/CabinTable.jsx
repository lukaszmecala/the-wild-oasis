import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import { useCabins } from "./useCabins";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

function CabinTable() {
  const { isLoading, cabins } = useCabins();
  const [searchParams] = useSearchParams();

  const filteredValue = searchParams.get("discount") || "all";

  let filterCabins;

  if (filteredValue === "all") filterCabins = cabins;
  else if (filteredValue === "no-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount === 0);
  if (filteredValue === "discount")
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);

  const sortBy = searchParams.get("sortBy") || "startDate-asc";
  const [field, direction] = sortBy.split("-");
  const sortedCabins = filterCabins?.sort((a, b) => {
    if (direction === "asc") {
      return (a[field] - b[field]) * 1;
    } else {
      return (a[field] - b[field]) * -1;
    }
  });

  if (!cabins?.length) return <Empty resource="cabins" />;
  if (isLoading) return <Spinner />;

  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div></div>
          <div>Cabin</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          // data={cabins}
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}

export default CabinTable;
