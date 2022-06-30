import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import authService from "../../services/auth.service";
import { SignupRequest } from "../../types/api";

// TODO : response type, error type 설정
const useSignup = (
  options?: UseMutationOptions<unknown, unknown, SignupRequest, QueryKey>
): UseMutationResult<unknown, unknown, SignupRequest, QueryKey> => {
  return useMutation(authService.signup, {
    ...options,
  });
};

export default useSignup;
