import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import authService from "../../services/auth.service";
import { LoginRequest } from "../../types/api";

// TODO : response type, error type 설정
const useLogin = (
  options?: UseMutationOptions<unknown, unknown, LoginRequest, QueryKey>
): UseMutationResult<unknown, unknown, LoginRequest, QueryKey> => {
  return useMutation(authService.login, {
    ...options,
  });
};

export default useLogin;
