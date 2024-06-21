import cover from '../../assets/cover.jpg'
import { Link } from 'react-router-dom';
import banner from '../../assets/banner2.jpg'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import SharedCard from '../Shared/SharedCard/SharedCard';
import SharedCover from '../Shared/SharedCover/SharedCover';

const MyQueries = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    console.log(user.email);

    const { data: myQueries = [], refetch: myQueriesRefetch } = useQuery({
        queryKey: ['myQueries'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/queries/${user.email}`);
            return res.data;
        }
    })
    // console.log(myQueries);

    return (
        <div>
            <SharedCover
                head="My Queries"
                para="Welcome to your query section, where you are here to assist you with any inquiries you have about our alternative product information system."
                btnText="Add Queries"
                coverImage={cover}
                url="/add-queries">
            </SharedCover>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-5'>
                {
                    myQueries.map(query => <SharedCard key={query._id} data={query} btn="yes" myQueriesRefetch={myQueriesRefetch}></SharedCard>)
                }
            </div>
            <div className="hero" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content py-16">
                    <div className="max-w-md text-white">
                        <h1 className="mb-5 text-5xl font-bold font-oswald">My Queries</h1>
                        <p className="mb-5 font-bold">Welcome to your query section, where you are here to assist you with any inquiries you have about our alternative product information system.</p>
                        <Link to="/add-queries"><button className="btn btn-outline text-white mt-2">Add Queries</button></Link>
                    </div>
                </div>
            </div>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2'>
                {
                    myQueries.map(query => <SharedCard key={query._id} data={query}></SharedCard>)
                }
            </div>

        </div>
    );
};

export default MyQueries;