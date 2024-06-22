import { Link } from "react-router-dom";
import useQueries from "../../../hooks/useQueries";
import PageHeadline from "../../Shared/PageHeadline/PageHeadline";
import SharedCard from "../../Shared/SharedCard/SharedCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Recent = () => {
    const [queries] = useQueries('');
    console.log(queries);
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className="mt-20">
            <PageHeadline headline="Recent Queries" text="Welcome to the latest insights and updates on our innovative product information system. Stay informed on the most recent advancements."></PageHeadline>
            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-2 md:px-5'>
                {
                    queries.slice(0, 6).map(query => <Link to={`/query/${query._id}`} key={query._id}><SharedCard data={query} btn=''></SharedCard></Link>)
                }
            </div>
        </div>
    );
};

export default Recent;