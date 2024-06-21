import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useQueries = (search) => {
    const axiosPublic = useAxiosPublic();
    const { data: queries = [] } = useQuery({
        queryKey: ['queries', search],
        queryFn: async () => {
            const res = await axiosPublic.get(`/queries?search=${search}`);
            return res.data;
        }
    })
    return [queries];
};

export default useQueries;