import {
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import userService from "../../services/user.service";

// TODO : response type, error type 설정
const useMe = (
  options?: UseQueryOptions<unknown, unknown, void, [QueryKey]>
): UseQueryResult<unknown, unknown> => {
  return useQuery(["me"], userService.me, {
    ...options,
  });
};

export default useMe;
