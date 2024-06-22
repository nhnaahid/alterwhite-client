import SharedCover from "../Shared/SharedCover/SharedCover";
import cover from '../../assets/cover2.jpg'
import SharedTable from "../Shared/SharedTable/SharedTable";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";

const RecommendForMe = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: recommendForMe = [] } = useQuery({
        queryKey: ['recommendForMe', user.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/recommendations/for-me/${user.email}`)
            return res.data;
        }
    })

    const tableHeads = ['Query Title', 'Query Product', 'Recommendation Title', 'Alternative Product', 'Recommender Name', 'Image'];
    let tableInfo = [];
    recommendForMe.map((recommendation) => {
        const courseInfo = {
            _id: recommendation._id,
            queryId: recommendation.queryId,
            queryTitle: recommendation.queryTitle,
            queryProduct: recommendation.queryProduct,
            recommendationTitle: recommendation.recommendationTitle,
            recommendationProduct: recommendation.recommendationProduct,
            recommenderName: recommendation.recommenderName,
            recommendationImage: recommendation.recommendationImage
        }
        tableInfo = [...tableInfo, courseInfo];
    })
    return (
        <div>
            <Helmet>
                <title>AlterWhite | Recommendations For Me</title>
            </Helmet>
            <SharedCover
                head="Recommendation For Me"
                para="Welcome to your Recommendation section, where you are here to assist you with all the recommendations added by you to others posts."
                btnText="Browse Queries"
                coverImage={cover}
                url="/all-queries">
            </SharedCover>
            <div className="12 px-5">
                <SharedTable dataList={tableInfo} tableHeads={tableHeads} btn=''></SharedTable>
            </div>
        </div>
    );
};

export default RecommendForMe;