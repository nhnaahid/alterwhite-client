import { Link } from 'react-router-dom';

const SharedCover = ({ head, para, btnText, coverImage, url }) => {
    return (
        <div className="hero" style={{ backgroundImage: `url(${coverImage})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content py-16">
                <div className="max-w-md text-white">
                    <h1 className="mb-2 md:mb-5 text-2xl md:text-4xl font-bold font-oswald">{head}</h1>
                    <p className="mb-2 md:mb-5 font-bold text-xs md:text-sm">{para}</p>
                    <Link to={url}><button className="btn btn-sm md:btn-md btn-outline text-white mt-2">{btnText}</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SharedCover;