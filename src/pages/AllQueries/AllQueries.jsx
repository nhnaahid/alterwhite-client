import useQueries from "../../hooks/useQueries";
import cover from '../../assets/cover.jpg'
import SharedCover from "../Shared/SharedCover/SharedCover";
import SharedCard from "../Shared/SharedCard/SharedCard";
import { Link } from "react-router-dom";

const AllQueries = () => {
    const [queries] = useQueries();
    return (
        <div>
            <SharedCover
                head="Browse Queries"
                para="Welcome to our Alternative Product Information System! Our system is designed to offer real-time updates, comprehensive reporting, and a user-friendly interface."
                btnText="Add Queries"
                coverImage={cover}
                url="/add-queries">
            </SharedCover>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-5'>
                {
                    queries.map(query => <Link to={`/query/${query._id}`} key={query._id}><SharedCard data={query} btn=''></SharedCard></Link>)
                }
            </div>
        </div>
    );
};

export default AllQueries;