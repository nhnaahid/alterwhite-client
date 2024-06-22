import useQueries from "../../hooks/useQueries";
import cover from '../../assets/cover.jpg'
import SharedCover from "../Shared/SharedCover/SharedCover";
import SharedCard from "../Shared/SharedCard/SharedCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AllQueries = () => {
    const [search, setSearch] = useState('');
    const [queries] = useQueries(search);
    const handleSearch = e => {
        e.preventDefault();
        const searchText = e.target.search.value;
        // console.log(searchText);
        setSearch(searchText);
        // userRefetch();
    }
    return (
        <div>
            <Helmet>
                <title>AlterWhite | All Queries</title>
            </Helmet>
            <SharedCover
                head="Browse Queries"
                para="Welcome to our Alternative Product Information System! Our system is designed to offer real-time updates, comprehensive reporting, and a user-friendly interface."
                btnText="Add Queries"
                coverImage={cover}
                url="/add-queries">
            </SharedCover>
            <form onSubmit={handleSearch} className="join mt-12 w-full px-2 md:px-5">
                <input className="input input-sm md:input-md input-bordered join-item w-4/5 md:w-1/2 lg:w-1/4" name="search" placeholder="search by product name" />
                <input type="submit" value="Search" className="btn btn-sm md:btn-md join-item rounded-r-full text-xs md:text-sm btn-outline bg-transparent border-gray-300" />
            </form>
            <div className='mt-5 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-5'>
                {
                    queries.map(query => <Link to={`/query/${query._id}`} key={query._id}><SharedCard data={query} btn=''></SharedCard></Link>)
                }
            </div>
        </div>
    );
};

export default AllQueries;