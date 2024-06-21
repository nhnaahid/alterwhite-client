
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdRecommend } from "react-icons/md";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import useRecommendation from "../../hooks/useRecommendation";
import Recommendation from "../../components/Recommendation/Recommendation";
import useOneQuery from "../../hooks/useOneQuery";

const QueryDetails = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [recommendations, recommendationRefetch] = useRecommendation(id);
    // console.log(id);
    const [query, queryRefetch] = useOneQuery(id);
    // console.log(query);
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const recommendationTitle = form.title.value;
        const recommendationProduct = form.name.value;
        const recommendationBrand = form.brand.value;
        const recommendationImage = form.image.value;
        const recommendationReason = form.reason.value;
        const recommendationInfo = {
            recommendationTitle,
            recommendationProduct,
            recommendationBrand,
            recommendationImage,
            recommendationReason,
            recommenderImage: user?.photoURL,
            recommenderName: user?.displayName,
            recommenderEmail: user?.email,
            queryId: query?._id,
            queryTitle: query?.productTitle,
            queryProduct: query?.productName,
            queryUserName: query?.userName,
            queryUserImage: query?.userImage,
            recommendationDate: new Date()
        }
        // console.log(recommendationInfo);
        axiosSecure.post('/recommendations', recommendationInfo)
            .then(res => {
                if (res.data.insertedId) {
                    form.reset();
                    recommendationRefetch();
                    axiosSecure.put(`/queries/${id}`)
                        .then(() => {
                            // console.log(res.data);
                        })
                    queryRefetch();
                    toast.success("Recommendation Added.")
                }
            })
    }
    // console.log(recommendations);

    return (
        <div className="w-full md:w-4/5 mx-auto mt-12 px-2 md:px-0">
            <div>
                <h1 className="text-xl md:text-3xl font-bold font-merri">{query.productTitle}</h1>
                <div className="flex items-center gap-2 md:gap-7 pb-4 mt-5">
                    <div className="flex items-center gap-1 tooltip" data-tip="Recommendation Count">
                        <MdRecommend className="text-2xl" />
                        <p className="bg-blue-500 text-white px-2 rounded-xl">{query.recommendationCount}</p>
                    </div>
                    <p className="bg-red-500 rounded-xl px-2 text-white">{query.productName}</p>
                    <p className="bg-green-500 rounded-xl px-2 text-white">{query.productBrand}</p>
                </div>
            </div>
            <div className="divider"></div>
            <div>
                <div className="flex items-center gap-3 p-3">
                    <div className=" w-[64px]">
                        <div className="avatar">
                            <div className="w-full rounded-xl">
                                <img
                                    src={query.userImage} />
                            </div>
                        </div>
                    </div>
                    <div className=" w-3/5">
                        <h5 className="font-bold">{query.userName}</h5>
                        <p className="text-xs md:text-sm text-gray-600">{query.date}</p>
                    </div>
                </div>
                <div className="rounded-2xl mx-5 space-y-3">
                    <div className="space-y-1">
                        <p>{query.productROA}</p>
                    </div>
                </div>
                <div className="w-4/5 md:w-3/5 bg-base-200 rounded-2xl m-5">
                    <img className="rounded-2xl" src={query.productImage} alt="Product Image" />
                </div>
            </div>
            <div className="divider mt-16 font-bold text-xl">Recommendations</div>
            {
                !recommendations.length && <h1 className="font-bold text-2xl font-merri text-center mt-12">No Recommendation Added</h1>
            }
            <div className="w-full md:w-3/4 mt-5">
                {
                    recommendations.map(recommend => <Recommendation key={recommend._id} data={recommend}></Recommendation>)
                }
            </div>
            <div className="mx-5 my-10">
                <div className="text-center">
                    <button onClick={() => document.getElementById('my_modal').showModal()} className="btn btn-sm btn-neutral btn-outline" >Add Recommendation</button>
                </div>
                <dialog id="my_modal" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg md:text-xl font-merri">Add A Recommendation</h3>
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mt-5">
                            <label>Recommendation Title</label>
                            <input required type="text" name="title" id="" placeholder="Recommendation title" className="border border-gray-300 p-2 md:p-3 text-sm rounded-lg" />

                            <label>Product Name</label>
                            <input required type="text" name="name" id="" placeholder="Product Name" className="border border-gray-300 p-2 md:p-3 text-sm rounded-lg" />

                            <label>Brand Name</label>
                            <input required type="text" name="brand" id="" placeholder="Brand Name" className="border border-gray-300 p-2 md:p-3 text-sm rounded-lg" />

                            <label>Product Image</label>
                            <input required type="text" name="image" id="" placeholder="Product Image" className="border border-gray-300 p-2 md:p-3 text-sm rounded-lg" />

                            <label>Recommendation Reason</label>
                            <textarea required name="reason" placeholder="Recommendation Reason" className="textarea textarea-bordered rounded-lg textarea-sm w-full" ></textarea>

                            <input type="submit" value="Add Recommendation" className="btn btn-xs sm:btn-sm md:btn-md btn-neutral hover:bg-gray-600" />
                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default QueryDetails;