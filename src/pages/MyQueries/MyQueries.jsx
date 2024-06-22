import cover from '../../assets/cover.jpg'
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import SharedCard from '../Shared/SharedCard/SharedCard';
import SharedCover from '../Shared/SharedCover/SharedCover';
import { Helmet } from 'react-helmet-async';

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
            <Helmet>
                <title>AlterWhite | My Queries</title>
            </Helmet>
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
        </div>
    );
};

export default MyQueries;