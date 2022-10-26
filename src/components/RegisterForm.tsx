import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../utils/api";
import {
  Button,
  Input,
  InputContainer,
  InputContainerHeader,
  InputLabel
} from "../utils/styles";
import { RegisterUserParams } from "../utils/types";

export const RegisterForm = () => {
  const navigate = useNavigate();

  const mutation = useMutation(registerUser, {
    onSuccess: () => navigate("/login"),
    onError: () => toast.error("Could not create account"),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterUserParams>();

  const onSubmit = async (data: RegisterUserParams) => {
    console.log(data);
    try {
      const { data: user } = await mutation.mutateAsync(data);
      console.log(user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <InputContainer>
        <InputContainerHeader>
          <InputLabel htmlFor="username">Username</InputLabel>
        </InputContainerHeader>
        <Input
          id="username"
          {...register("username", {
            required: "Username is required",
            minLength: {
              value: 3,
              message: "Min. 3 Characters required",
            },
            maxLength: {
              value: 16,
              message: "Max. 16 Characters required",
            },
          })}
        />
      </InputContainer>
      <InputContainer>
        <InputContainerHeader>
          <InputLabel htmlFor="password">Password</InputLabel>
        </InputContainerHeader>
        <Input
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 3,
              message: "Min. 3 Characters required",
            },
            maxLength: {
              value: 16,
              message: "Max. 32 Characters required",
            },
          })}
        />
      </InputContainer>
      <Button>Create Account</Button>
    </form>
  );
};
