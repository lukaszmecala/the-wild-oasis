import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: signUp, isLoading: isLoadingSignUp } = useMutation({
    mutationFn: ({ fullName, email, password }) => {
      return signUpApi({ fullName, email, password });
    },
    onSuccess: (user) => {
      toast.success(
        "Account successfully created. Please verify the new account from the user's email address."
      );
    },
    onError: (error) => {
      console.error("Sign up failed", error);
      toast.error("Failed to create account " + error.message);
    },
  });
  return { signUp, isLoadingSignUp };
}
