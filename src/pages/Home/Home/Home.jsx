import Alternative from "../Alternative/Alternative";
import Banner from "../Banner/Banner";
import Featured from "../Featured/Featured";
import NewsLetter from "../NewsLetter/NewsLetter";
import Recent from "../Recent/Recent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Recent></Recent>
            <Featured></Featured>
            <Alternative></Alternative>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;