import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from './component/User/User';
import Admin from './component/Admin/Admin';
import App from './App';
import HomePage from './component/Home/HomePage';
import ManageUser from './component/Admin/content/ManageUser';
import Dashboard from './component/Admin/content/Dashboard';
import Login from './component/Auth/Login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcPlus } from "react-icons/fc"
import Register from "./component/Auth/Register";
const Layout = (props) => {
    return (
        <>

            <Routes>
                <Route path='/' element={<App />} >
                    <Route index element={<HomePage />} />
                    <Route path='users' element={<User />} />

                </Route>
                <Route path='/admins' element={<Admin />} >
                    <Route index element={<Dashboard />} />
                    <Route path='manage-user' element={<ManageUser />} />
                </Route>
                <Route path='/login' element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>

            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}


export default Layout;