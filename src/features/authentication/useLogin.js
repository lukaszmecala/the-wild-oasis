import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLoadingLogin } = useMutation({
    mutationFn: ({ email, password }) => {
      return loginApi({ email, password });
    },
    onSuccess: (user) => {
      console.log("Login successful", user);
      navigate("/dashboard");
    },
    onError: (error) => {
      console.error("Login failed", error);
      toast.error("Login failed: " + error.message);
      // Handle error (e.g., show a notification)
    },
  });
  return { login, isLoadingLogin };
}
