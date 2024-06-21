import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useQueries = () => {
    const axiosPublic = useAxiosPublic();
    const { data: queries = [] } = useQuery({
        queryKey: ['queries'],
        queryFn: async () => {
            const res = await axiosPublic.get("/queries");
            return res.data;
        }
    })
    return [queries];
};

export default useQueries;