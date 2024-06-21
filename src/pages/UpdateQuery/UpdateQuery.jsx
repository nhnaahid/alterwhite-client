import { useParams } from "react-router-dom";
import useOneQuery from "../../hooks/useOneQuery";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const UpdateQuery = () => {
    const { id } = useParams();
    console.log(id);
    const axiosSecure = useAxiosSecure();
    const [query, queryRefetch] = useOneQuery(id);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const productName = form.name.value;
        const productBrand = form.brand.value;
        const productImage = form.image.value;
        const productTitle = form.title.value;
        const productROA = form.reason.value;
        const queryInfo = {
            productName,
            productBrand,
            productImage,
            productTitle,
            productROA
        }
        console.log(queryInfo);

        axiosSecure.patch(`/queries/update/${id}`, queryInfo)
            .then(res => {
                if (res.data.modifiedCount) {
                    // console.log(res);
                    form.reset();
                    queryRefetch();
                    toast.success('Course Updated.')
                }
            })
    }

    return (
        <div className="w-full md:w-4/5 mx-auto px-3 md:px-0 mt-12">
            <h1 className="border-b border-gray-300 font-oswald tracking-wide text-2xl py-2">Update Query</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mt-5">
                <label>Product Name</label>
                <input defaultValue={query.productName} required type="text" name="name" id="" placeholder="Product Name" className="border border-gray-300 p-2 md:p-3 text-sm" />

                <label>Product Brand</label>
                <input defaultValue={query.productBrand} required type="text" name="brand" id="" placeholder="Product Brand" className="border border-gray-300 p-2 md:p-3 text-sm" />

                <label>Product Image</label>
                <input defaultValue={query.productImage} required type="text" name="image" id="" placeholder="Product Image" className="border border-gray-300 p-2 md:p-3 text-sm" />

                <label>Query Title</label>
                <input defaultValue={query.productTitle} required type="text" name="title" id="" placeholder="Query Title" className="border border-gray-300 p-2 md:p-3 text-sm" />


                <label>Reason of alternation</label>
                <textarea defaultValue={query.productROA} required name="reason" placeholder="Reason of alternation" className="textarea textarea-bordered rounded-none textarea-sm w-full" ></textarea>

                <input type="submit" value="Update Query" className="btn btn-xs sm:btn-sm md:btn-md btn-neutral hover:bg-gray-600" />
            </form>
        </div>
    );
};

export default UpdateQuery;