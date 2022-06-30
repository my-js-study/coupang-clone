import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import userService from "../../services/user.service";
import { GetReadRequest } from "../../types/api";

// TODO : response type, error type 설정
const useRead = (
  request: GetReadRequest,
  options?: UseQueryOptions<
    unknown,
    unknown,
    GetReadRequest,
    [QueryKey, GetReadRequest]
  >
): UseQueryResult<unknown, unknown> => {
  return useQuery(["read", request], () => userService.read(request), {
    ...options,
  });
};

export default useRead;
