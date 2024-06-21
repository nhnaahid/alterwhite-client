import SharedCover from "../Shared/SharedCover/SharedCover";
import cover from '../../assets/cover2.jpg'
const RecommendForMe = () => {
    return (
        <div>
            <SharedCover
                head="Recommendation For Me"
                para="Welcome to your Recommendation section, where you are here to assist you with all the recommendations added by you to others posts."
                btnText="Browse Queries"
                coverImage={cover}
                url="/all-queries">
            </SharedCover>
        </div>
    );
};

export default RecommendForMe;