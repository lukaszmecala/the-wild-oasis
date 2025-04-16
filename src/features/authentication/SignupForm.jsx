import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignUp } from "./useSignUp";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signUp, isSignUpLoading } = useSignUp();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const onSubmit = (data) => {
    signUp(
      {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      },
      {
        onSettled: () => reset,
      }
    );
  };
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors.fullName?.message}>
        <Input
          type="text"
          id="fullName"
          disabled={isSignUpLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Email address" error={errors.email?.message}>
        <Input
          type="email"
          id="email"
          disabled={isSignUpLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Email address is not valid",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Password (min 8 characters)"
        error={errors.password?.message}
      >
        <Input
          type="password"
          id="password"
          disabled={isSignUpLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors.passwordConfirm?.message}>
        <Input
          type="password"
          id="passwordConfirm"
          disabled={isSignUpLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) => {
              if (value !== getValues().password) {
                return "Passwords do not match";
              }
            },
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          disabled={isSignUpLoading}
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isSignUpLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
