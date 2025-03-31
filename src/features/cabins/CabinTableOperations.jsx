import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";

function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterValue="discount"
        options={[
          { value: "all", label: "All" },
          { value: "no-discount", label: "No discount" },
          { value: "discount", label: "With discount" },
        ]}
      />
    </TableOperations>
  );
}

export default CabinTableOperations;
