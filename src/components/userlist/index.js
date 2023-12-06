
import Loader from "../loader"
import "./usrlist.css"

const UserList = ({ data, handleDelete, isLoading }) => {
    return (
        <div style={{ width: "80%", maxHeight: "50%" }}>
            <p style={{ textAlign: "center", width: "100%", fontSize: 20, }}> User List</p>
            {isLoading ?
                (<Loader />) :
                <table className="my-table" style={{ width: "100%", overflowY: "auto" }}>
                    <thead style={{ backgroundColor: "darkblue", color: "white" }}>
                        <th>Name </th>
                        <th>Id</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </thead>
                    <tbody>
                        {data.length > 0 ? data?.map((item, index) => (
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.id}</td>
                                <td>{item.Email}</td>
                                <td>{item.Phone}</td>
                                <td align="center">
                                    <button
                                        onClick={(data) => handleDelete(item.id)}
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
export default UserList