import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SharedTable = ({ dataList, tableHeads, btn, myRecommendRefetch }) => {
    const axiosSecure = useAxiosSecure();
    const handleDelete = (data) => {
        // console.log(data);
        Swal.fire({
            title: "Are you sure?",
            text: `Do you want to delete the recommendation.`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Delete"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/recommendations/delete/${data._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            myRecommendRefetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your recommendation has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="overflow-x-auto mt-12">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            #
                        </th>
                        {
                            tableHeads.map((thData, idx) => <th key={idx}>{thData}</th>)
                        }
                    </tr>
                </thead>
                <tbody>
                    {/* row */}
                    {
                        dataList.map((data, index) => <tr key={data._id}>
                            <td>
                                {index + 1}
                            </td>
                            <td>{data.queryTitle}</td>
                            <td>{data.queryProduct}</td>
                            <td>{data.recommendationTitle}</td>
                            <td>{data.recommendationProduct}</td>
                            <td>{data.recommendationBrand}</td>
                            <td>
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={data.recommendationImage} alt="Craft item image" />
                                    </div>
                                </div>
                            </td>
                            {
                                btn && <td> <button onClick={() => handleDelete(data)} className="text-2xl rounded-full  my-btn p-2 tooltip" data-tip="Delete"><RiDeleteBin6Line /></button> </td>
                            }

                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SharedTable;