import { Link } from 'react-router-dom';
import help from '../../../assets/help.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ButtonTwo from '../../../components/ButtonTwo';
AOS.init();

const Alternative = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="1000" className='w-full md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-between gap-7 font-inter mt-24 px-5'>
            {/* image */}
            <div className='w-full md:w-1/2'>
                <img src={help} alt="Teacher" />
            </div>
            {/* text */}
            <div className='w-full md:w-1/2 space-y-2'>
                <h1 className='text-2xl md:text-3xl font-merri font-bold'>Need An Alternative Suggestion?</h1>
                <p className='text-gray-700 text-sm md:text-base'>Our awesome community will help you to find a good one. You are just one step away to post a query.</p>
                <div className='w-1/2 lg:w-2/5'>
                    <Link to="/add-queries"><ButtonTwo text="Add Query"></ButtonTwo></Link>
                </div>
            </div>
        </div>
    );
};

export default Alternative;