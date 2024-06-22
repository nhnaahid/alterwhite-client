import SharedCover from "../Shared/SharedCover/SharedCover";
import cover from '../../assets/cover2.jpg'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import SharedTable from "../Shared/SharedTable/SharedTable";
import { Helmet } from "react-helmet-async";
const MyRecommend = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: myRecommendations = [], refetch: myRecommendRefetch } = useQuery({
        queryKey: ['myRecommendations', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/recommendations/my/${user.email}`)
            return res.data;
        }
    })

    const tableHeads = ['Query Title', 'Query Product', 'Recommendation Title', 'Alternative Product', 'Product Brand', 'Image', ' '];
    let tableInfo = [];
    myRecommendations.map((recommendation) => {
        const courseInfo = {
            _id: recommendation._id,
            queryId: recommendation.queryId,
            queryTitle: recommendation.queryTitle,
            queryProduct: recommendation.queryProduct,
            recommendationTitle: recommendation.recommendationTitle,
            recommendationProduct: recommendation.recommendationProduct,
            recommendationBrand: recommendation.recommendationBrand,
            recommendationImage: recommendation.recommendationImage
        }
        tableInfo = [...tableInfo, courseInfo];
    })
    return (
        <div>
            <Helmet>
                <title>AlterWhite | My Recommendations</title>
            </Helmet>
            <SharedCover
                head="My Recommendations"
                para="Welcome to your Recommendation section, where you are here to assist you with all the recommendations added by you to others posts."
                btnText="Add Recommendation"
                coverImage={cover}
                url="/all-queries">
            </SharedCover>
            <div className="12 px-5">
                <SharedTable dataList={tableInfo} tableHeads={tableHeads} btn='yes' myRecommendRefetch={myRecommendRefetch}></SharedTable>
            </div>
        </div>
    );
};

export default MyRecommend;