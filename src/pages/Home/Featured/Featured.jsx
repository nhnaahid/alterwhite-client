import { Link } from 'react-router-dom';
import featured from '../../../assets/feature.jpg'

const Featured = () => {
    return (
        <div className="hero min-h-screen bg-fixed mt-24 font-inter" style={{ backgroundImage: `url(${featured})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="w-full md:w-3/4 mx-auto">
                    <h1 className="mb-5 text-2xl md:text-5xl font-bold font-merri text-white">A Trusted Community With 5000+ Members</h1>
                    <p className="text-sm md:text-base mb-5 font-semibold w-4/5 mx-auto text-white">Whether you are a potential customer, a current client, or a business partner, our PIS ensures you have access to the most accurate, up-to-date product data at your fingertips.</p>
                    <Link to='/all-queries'><button className="btn btn-sm md:btn-md btn-neutral btn-outline text-white">Browse Queries</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Featured;