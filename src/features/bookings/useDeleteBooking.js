import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate, useSearchParams } from "react-router-dom";

export function useDeleteBooking() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const queryClient = useQueryClient();
  const { mutate: deleteCurrBooking, isLoading: isDeleteBooking } = useMutation(
    {
      mutationFn: (bookingId) => deleteBooking(bookingId),
      onSuccess: () => {
        toast.success(`Booking  successfully deleted.`);
        queryClient.invalidateQueries({
          active: true,
        });
        if (searchParams.get(":bookingsId")) navigate("/");
      },
      onError: (err) => {
        toast.error(`Error: ${err.message}`);
      },
    }
  );

  return { isDeleteBooking, deleteCurrBooking };
}
