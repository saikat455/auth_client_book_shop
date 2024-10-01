// import { Link } from "react-router-dom";
// import avater from "../assets/profile-avater.png"
// import { useState } from "react";
// import axios from 'axios';

// const Register = () => {

//     const [image, setImage] = useState({})
//     const [uploading, setUploading] = useState(false)
//     const handleImage = async (e) => {
//         const file = e.target.files[0]
//         let formData = new FormData()
//         formData.append('image', file)
//         setUploading(true)
//         try{
//             const {data} = await axios.post('http://localhost:8000/api/v1/all/upload-image', formData)
//             setUploading(false)
//             setImage({
//                 url: data.url,
//                 public_id: data.public_id
//             })
//         }catch (error) {
//             console.log(error)
//         }
//     }

//     return (
//         <div className="register">
//             <div className="w-full mx-auto pt-[16vh]">
//                 <form className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop:blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5">
//                     <label htmlFor="file-upload" className="custom-file-upload">
//                         <img src={image?.url || avater} alt="" className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer"/>
//                     </label>
//                     <label htmlFor="" className="block text-center text-gray-900 text-base mb-2">Profile Picture</label>
//                     <input type="file" name="myFile" id="file-upload" label="Image" className="hidden" accept=".jpeg, .png, .jpg" onChange={handleImage}/>

//                     <div className="mb-3">
//                         <label className="block text-gray-700 text-sm mb-2" htmlFor="name">Name</label>
//                         <input type="text" placeholder="Enter your name" name="name" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline-none focus:shadow-outline" />
//                     </div>

//                     <div className="mb-3">
//                         <label className="block text-gray-700 text-sm mb-2" htmlFor="email">Email</label>
//                         <input type="text" placeholder="Enter your email" name="email" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline-none focus:shadow-outline" />
//                     </div>

//                     <div className="flex flex-col md:flex-row md:gap-4">
//                     <div className="mb-3">
//                         <label className="block text-gray-700 text-sm mb-2" htmlFor="email">Password</label>
//                         <input type="password" name="password" placeholder="Enter your password" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline-none focus:shadow-outline" />
//                     </div>
//                     <div className="mb-3">
//                         <label className="block text-gray-700 text-sm mb-2" >Confirm password</label>
//                         <input type="password" name="confirmPassword" placeholder="Confirm password" className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:shadow-outline-none focus:shadow-outline" />
//                     </div>
//                     </div>

//                     <button className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-lg px-8 py-2 text-xl font-medium text-white mx-auto text-center mb-3 mt-4" type="submit">
//                         Register
//                     </button>

//                     <Link to="/login" className="text-green-600 text-center font-semibold w-full mb-3 py-2 px-4 rounded">
//                         Have an account? Sign in !
//                     </Link>

//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Register;


import { Link } from "react-router-dom";
import avatar from "../assets/profile-avater.png";
import { useState } from "react";
import axios from 'axios';

const Register = () => {
    const [image, setImage] = useState({});
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState(null); 

    const handleImage = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            setError("No file selected.");
            return;
        }

        const formData = new FormData();
        formData.append('image', file);

        setUploading(true);
        setError(null); 
        try {
            const { data } = await axios.post('http://localhost:8000/api/v1/all/upload-image', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setImage({
                url: data.url,
                public_id: data.public_id,
            });
            setUploading(false);
        } catch (error) {
            console.error("Image upload error:", error);
            setError("Failed to upload image. Please try again.");
            setUploading(false);
        }
    }

    return (
        <div className="register">
            <div className="w-full mx-auto pt-[16vh]">
                <form className="ease-in duration-300 w-[80%] sm:w-max shadow-sm backdrop:blur-md bg-white/80 lg:w-max mx-auto rounded-md px-8 py-5">
                    
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <img
                            src={image?.url || avatar}
                            alt="Profile"
                            className="h-32 w-32 bg-contain rounded-full mx-auto cursor-pointer"
                        />
                    </label>
                    <label htmlFor="file-upload" className="block text-center text-gray-900 text-base mb-2">Profile Picture</label>
                    <input
                        type="file"
                        name="image" 
                        id="file-upload"
                        className="hidden"
                        accept=".jpeg, .png, .jpg"
                        onChange={handleImage}
                        disabled={uploading} 
                    />
                    {uploading && <p className="text-center text-gray-500">Uploading...</p>}
                    {error && <p className="text-center text-red-500">{error}</p>} 

                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            name="name"
                            required
                            className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                  
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm mb-2" htmlFor="email">Email</label>
                        <input
                            type="email" 
                            id="email"
                            placeholder="Enter your email"
                            name="email"
                            required
                            className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    <div className="flex flex-col md:flex-row md:gap-4">
                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Enter your password"
                                required
                                className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>

                        <div className="mb-3">
                            <label className="block text-gray-700 text-sm mb-2" htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm password"
                                required
                                className="shadow-sm bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                        </div>
                    </div>

                    <button
                        className="bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md w-full rounded-lg px-8 py-2 text-xl font-medium text-white mx-auto text-center mb-3 mt-4"
                        type="submit"
                        disabled={uploading} 
                    >
                        Register
                    </button>

 
                    <Link to="/login" className="text-green-600 text-center font-semibold w-full mb-3 py-2 px-4 rounded">
                        Have an account? Sign in!
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Register;
