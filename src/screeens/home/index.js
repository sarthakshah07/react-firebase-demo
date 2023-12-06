import CategoryList from "../../components/categoryList"
import UserList from "../../components/userlist"
import "../../firebase-config"
import { getFirestore, collection, getDoc, doc, getDocs, addDoc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase-config"
import { database } from "../../firebase-config"
import { useEffect, useState } from "react"
import MyForm from "../../components/myform"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";



const Home = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState([])
    const [catData, setCatData] = useState([])
    const [formData, setFormData] = useState({});
    const userInputs = ["Name", "Email", "Phone"]
    const categoryInputs = ["CategoryName", "UserId"]
    const userValue = collection(database, "users")
    const categoryValue = collection(database, "categories")

    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        zIndex: 1,
        showConfirmButton: false,
        background:"whtesmoke",
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

    const handleDelete = async (data) => {
        if (data?.CategoryName) {
            const UserId = data?.UserId
            const d = await getDoc(doc(userValue, UserId || "0")) 
            if (d?.data()) {
                Toast.fire({
                    title:"Cannot Delete Category",
                    text:"User is Active",
                    icon:"error",
                    background:"whitesmoke"
                })
            } else {
                if (!d?.exists()) {
                    await deleteDoc((doc(categoryValue, data?.id || "0"))).then((response)=>{
                        fetchData()
                        Toast.fire({
                            title:"Category Deleted",
                            icon:"success",
                        })
                    }) .catch((error)=>{
                        console.error("delete error",error);
                    })
                }
            }
        } else {
            Swal.fire({
                title: "Are You Sure?",
                color: "#000",
                text: "Want to Delete User !",
                icon: "question",
                width: 600,
                showCancelButton: true,
                confirmButtonText: "Yes",
                confirmButtonColor: "green",
                cancelButtonText: `No`,
                cancelButtonColor: "red",
            }).then(async (response)=>{
                if (response.isConfirmed) {
                    await deleteDoc((doc(userValue, data))).then((response)=>{;
                        fetchData()
                        Toast.fire({
                            title:"User Deleted ",
                            icon:"success",
                        })
                    }) .catch((error)=>{
                        Toast.fire({
                            title:"Cannot Delete User",
                            icon:"error",
                            background:"whitesmoke"
                        })
                        console.error("delete error",error);
                    })
                }
            })
           
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.Name) {
            await addDoc(userValue, formData).then((response) => {
                Toast.fire({
                    title:"User Added ",
                    icon:"success",
                })
                fetchData()
            }).catch((error) => {
                console.error("error", error);
                Toast.fire({
                    title:"User Not Added ! ",
                    icon:"error",
                })
            })
        }
        else if (formData.CategoryName) {
            console.log("cat");
            await addDoc(categoryValue, formData).then((response) => {
                Toast.fire({
                    title:"Category Added ",
                    icon:"success",
                })
                fetchData()
            })
                .catch((error) => {
                    console.error("error", error);
                    Toast.fire({
                        title:"Category Not Added ",
                        icon:"error",
                    })
                })
        }
        else {
            Toast.fire({
                title:"Not Added ",
                icon:"error",
            })
        }
        setFormData([]);
    };

    const fetchData = async () => {
        setIsLoading(true)
        const newValues = await getDocs(userValue)
        const data = newValues.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        setData(data)
        const newCatValues = await getDocs(categoryValue)
        const CategoryData = newCatValues.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        setCatData(CategoryData)
        setIsLoading(false)
    }
    
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div style={{ width: "100vw", height: "95vh", display: "flex" }}>
            <div style={{ width: "50%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "30px" }}>
                <MyForm  formData={formData} heading="Add User" inputs={userInputs} setFormData={setFormData} handleSubmit={handleSubmit} />
                <UserList isLoading={isLoading} data={data} handleDelete={handleDelete} />
            </div>
            <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingTop: "30px" }}>
                <MyForm formData={formData} heading="Add Category" inputs={categoryInputs} setFormData={setFormData} handleSubmit={handleSubmit} />
                <CategoryList isLoading={isLoading} data={catData}   handleDelete={handleDelete}/>
            </div>
            <ToastContainer />
        </div>
    )
}
export default Home