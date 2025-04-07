import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateBooking } from "../../services/apiBookings";

export function useCheckOut() {
  const queryClient = useQueryClient();
  const { mutate: checkOut, isLoading: isCheckOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      toast.success(`Booking ${data.id} successfully checked out.`);
      queryClient.invalidateQueries({
        active: true,
      });
    },
    onError: (err) => {
      toast.error(`Error: ${err.message}`);
    },
  });
  return { isCheckOut, checkOut };
}
