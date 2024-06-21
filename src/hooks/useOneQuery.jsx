import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOneQuery = (id) => {
    const axiosSecure = useAxiosSecure();
    const { data: query = [], refetch: queryRefetch } = useQuery({
        queryKey: ['query', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/queries/details/${id}`)
            return res.data;
        }
    })
    return [query, queryRefetch];
};

export default useOneQuery;