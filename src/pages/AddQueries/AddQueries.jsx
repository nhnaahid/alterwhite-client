import { toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddQueries = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
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
            productROA,
            userName: user.displayName,
            userEmail: user.email,
            userImage: user.photoURL,
            recommendationCount: 0,
            date: new Date().toLocaleString()
        }
        // console.log("from: ", queryInfo);
        axiosSecure.post('/queries', queryInfo)
            .then(res => {
                if (res.data.insertedId) {
                    form.reset();
                    toast.success("Query Added Successfully")
                }
            })
    }
    return (
        <div className="w-full md:w-4/5 mx-auto px-3 md:px-0 mt-12">
            <h1 className="border-b border-gray-300 font-oswald tracking-wide text-2xl py-2">Query Details</h1>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2 mt-5">
                <label>Product Name</label>
                <input required type="text" name="name" id="" placeholder="Product Name" className="border border-gray-300 p-2 md:p-3 text-sm" />

                <label>Product Brand</label>
                <input required type="text" name="brand" id="" placeholder="Product Brand" className="border border-gray-300 p-2 md:p-3 text-sm" />

                <label>Product Image</label>
                <input required type="text" name="image" id="" placeholder="Product Image" className="border border-gray-300 p-2 md:p-3 text-sm" />

                <label>Query Title</label>
                <input required type="text" name="title" id="" placeholder="Query Title" className="border border-gray-300 p-2 md:p-3 text-sm" />


                <label>Reason of alternation</label>
                <textarea required name="reason" placeholder="Reason of alternation" className="textarea textarea-bordered rounded-none textarea-sm w-full" ></textarea>

                <input type="submit" value="Add Query" className="btn btn-xs sm:btn-sm md:btn-md btn-neutral hover:bg-gray-600" />
            </form>
        </div>
    );
};

export default AddQueries;