import { MdRecommend } from "react-icons/md";
import ButtonTwo from "../../../components/ButtonTwo";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
AOS.init();
const SharedCard = ({ data, btn, myQueriesRefetch }) => {
    const axiosSecure = useAxiosSecure();
    const handleDelete = data => {
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to delete the Query.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/queries/delete/${data._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            myQueriesRefetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Query has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

//     return (
//         <div data-aos="fade-up" data-aos-duration="1000" className="border-2 rounded-2xl hover:shadow-2xl h-full">
// import { FaRegCalendarCheck } from "react-icons/fa";
// import { MdRecommend } from "react-icons/md";

// const SharedCard = ({ data }) => {
    return (
        <div className="border-2 rounded-2xl">
            <div className="flex items-center gap-3 p-3">
                <div className=" w-1/6">
                    <div className="avatar">
                        <div className="w-full rounded-full">
                            <img
                                src={data.userImage} />
                        </div>
                    </div>
                </div>
                <div className=" w-3/5">
                    <h5 className="font-bold">{data.userName}</h5>
                    <p className="text-xs md:text-sm text-gray-600">{data.date}</p>
                    <p>{data.date}</p>
                </div>
            </div>
            <div className="rounded-2xl m-5 space-y-3">
                <div className="space-y-1">
                    <h3 className="text-lg md:text-xl font-bold font-merri">{data.productTitle}</h3>
                    <p className="text-xs md:text-sm">{data.productROA.slice(0, 150) + '...'}</p>
                    <h3 className="text-xl font-bold font-merri">{data.productTitle}</h3>
                    <p className="text-sm">{data.productROA.slice(0, 150) + '...'}</p>
                </div>
            </div>
            <div className="bg-base-200 rounded-2xl m-5">
                <img className="rounded-2xl" src={data.productImage} alt="Product Image" />
            </div>
            {
                btn ?
                    <div className="flex justify-evenly items-center pb-5 text-xl">
                        <Link to={`/query/update/${data._id}`}><ButtonTwo text="Update"></ButtonTwo></Link>
                        <button onClick={() => handleDelete(data)} className="btn btn-sm btn-neutral btn-outline" >Delete</button>
                        <Link to={`/query/${data._id}`}><ButtonTwo text="View Details"></ButtonTwo></Link>
                    </div>
                    :
                    <div className="flex items-center justify-evenly pb-4">
                        <div className="flex items-center gap-1 tooltip" data-tip="Recommendation Count">
                            <MdRecommend className="text-2xl" />
                            <p className="bg-blue-500 text-white px-2 rounded-xl">{data.recommendationCount}</p>
                        </div>
                        <p className="bg-red-500 rounded-xl px-2 text-white">{data.productName}</p>
                        <p className="bg-green-500 rounded-xl px-2 text-white">{data.productBrand}</p>
                    </div>
            }
            <div className="flex items-center justify-evenly pb-3">
                <div className="flex items-center gap-1 tooltip" data-tip="Recommendation Count">
                    <MdRecommend className="text-2xl" />
                    <p className="bg-blue-500 text-white px-2 rounded-xl">{0}</p>
                </div>
                <p className="bg-red-500 rounded-xl px-2 text-white">{data.productName}</p>
                <p className="bg-green-500 rounded-xl px-2 text-white">{data.productBrand}</p>
            </div>
        </div>
    );
};

export default SharedCard;