import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';


const Footer = () => {
    return (
        <div className='bg-black text-white mt-20 p-2 md:p-0'>
            <div className="w-full md:w-1/2 text-center mx-auto py-8">
                <div className="border-b border-dotted py-10 space-y-5">
                    <div className="space-y-2">
                        <h1 className="text-3xl font font-extrabold font-oswald">AlterWhite</h1>
                        <h3 className='font-bold font-inter'>Explore Beyond the Norm</h3>
                    </div>

                    <p className="text-zinc-400 font-inter">Discover unique perspectives and in-depth analyses on a variety of products. Stay informed, make empowered choices, and embrace innovation with our curated insights.</p>
                    <p className="text-zinc-400 font-inter">Connect with us:</p>
                    <div className="flex flex-wrap justify-center gap-8 text-2xl">
                        <a href="https://x.com/?lang=en"><FaXTwitter></FaXTwitter></a>
                        <a href="https://www.facebook.com/"><FaFacebook></FaFacebook></a>
                        <a href="https://www.instagram.com/"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
                <div className="mt-10">
                    <p className="text-sm font-inter">Copyright © 2024, AlterWhite. All rights reserved | Designed by Alter Inc. | Terms of Use | Privacy Policy | Sitemap</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;