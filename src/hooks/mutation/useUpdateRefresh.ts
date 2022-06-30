import {
  QueryKey,
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { AuthService } from "../../services";

// TODO : response type, error type 설정
const useUpdateRefresh = (
  options?: UseMutationOptions<unknown, unknown, void, QueryKey>
): UseMutationResult<unknown, unknown, void, QueryKey> => {
  return useMutation(AuthService.refresh, {
    ...options,
  });
};

export default useUpdateRefresh;
