
const Recommendation = ({ data }) => {
    // console.log(data);
    return (
        <div className="mt-7">
            <div className="flex items-center gap-3 p-3">
                <div className=" w-[48px]">
                    <div className="avatar">
                        <div className="w-full rounded-full">
                            <img src={data.recommenderImage} />
                        </div>
                    </div>
                </div>
                <div className=" w-3/5">
                    <h5 className="font-bold">{data.recommenderName}</h5>
                    <p className="text-xs md:text-sm text-gray-600">{data.recommendationDate}</p>
                </div>
            </div>

            <div className="ml-16 border rounded-xl py-2">
                <div className="mx-5">
                    <h1 className="text-md md:text-lg font-bold font-merri">{data.recommendationTitle}</h1>
                    <div className="flex items-center gap-2 md:gap-7 pb-4 mt-5">
                        <p className="border rounded-xl px-2 text-xs md:text-sm">{data.recommendationProduct}</p>
                        <p className="border rounded-xl px-2 text-xs md:text-sm">{data.recommendationBrand}</p>
                    </div>
                </div>
                <div className="rounded-2xl mx-5 space-y-3">
                    <div className="space-y-1 text-xs md:text-sm">
                        <p>{data.recommendationReason}</p>
                    </div>
                </div>
                <div className="w-3/5 md:w-1/2 bg-base-200 rounded-2xl m-5">
                    <img className="rounded-2xl" src={data.recommendationImage} alt="Product Image" />
                </div>
            </div>
        </div>
    );
};

export default Recommendation;