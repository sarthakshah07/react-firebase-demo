import Loader from "../loader"

const CategoryList = ({ data, handleDelete, isLoading }) => {
    return (
        <div style={{ width: "80%", maxHeight: "50%" }}>
            <p style={{ textAlign: "center", width: "100%", fontSize: 15, }}> Category List</p>
            {isLoading ? <Loader /> :
            <table className="my-table" style={{ width: "100%", overflowY: "auto" }}>
                <thead style={{ backgroundColor: "darkblue", color: "white" }}>
                    <th>Category Name </th>
                    <th>User Id</th>
                    <th>Category Id</th>
                    <th>Action</th>
                </thead>
                
                    <tbody>
                        {data.length > 0 ? data?.map((item, index) => (
                            <tr>
                                <td>{item.CategoryName}</td>
                                <td>{item.UserId || "N/A"}</td>
                                <td>{item.id}</td>
                                <td align="center">
                                    <button
                                        onClick={() => handleDelete(item)}
                                        style={{ backgroundColor: "red", color: "white" }}>Delete</button></td>
                            </tr>
                        ))
                            : (
                                <tr style={{ textAlign: "center" }}>
                                    <label>No Data Found</label>
                                </tr>
                            )}

                    </tbody>
                
            </table>
            }
        </div>
    )
}
export default CategoryList