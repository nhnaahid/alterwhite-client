import SharedCover from "../Shared/SharedCover/SharedCover";
import cover from '../../assets/cover.jpg'
const MyRecommend = () => {
    return (
        <div>
            <SharedCover
                head="My Recommendations"
                para="Welcome to your Recommendation section, where you are here to assist you with all the recommendations added by you to others posts."
                btnText="Add Recommendation"
                coverImage={cover}
                url="/all-queries">
            </SharedCover>
        </div>
    );
};

export default MyRecommend;