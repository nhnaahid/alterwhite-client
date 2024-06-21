import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRecommendation = (id) => {
    const axiosSecure = useAxiosSecure();
    const { data: recommendations = [], refetch: recommendationRefetch } = useQuery({
        queryKey: ['recommendations', id],
        queryFn: async () => {
            const res = await axiosSecure.get(`/recommendations/${id}`)
            return res.data;
        }
    })
    return [recommendations, recommendationRefetch];
};

export default useRecommendation;