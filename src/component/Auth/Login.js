import { useState } from 'react';
import { toast } from 'react-toastify';
import './Login.scss'; // Import your custom styles
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/APIservice';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import { useDispatch } from 'react-redux';
import { doLogin } from '../../redux/action/userAction';
import { ImSpinner10 } from "react-icons/im"
const Login = (props) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const [isLoading, setIsloading] = useState(false);
    const validateEmail = (email) => {
        return String(email)
            .toLocaleLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }
    const handleLogin = async () => {
        //validate
        const isvalidateEmail = validateEmail(email)
        if (!isvalidateEmail) {
            toast.error("Invalid email")
            return
        }
        if (!password) {
            toast.error('Invalid email')
            return
        }
        //submit aPis
        setIsloading(true);
        let data = await postLogin(email, password)

        if (data && data.EC === 0) {
            dispatch(doLogin(data))
            toast.success(data.EM)
            setIsloading(false)
            navigate('/')

        }
        if (data && data.EC !== 0) {
            toast.error(data.EM)
            setIsloading(false)
        }
    }
    return (
        <div className="login-container d-flex justify-content-center align-items-center vh-100">
            <div className="login-background">
                <div className="login-content p-5 rounded shadow-lg bg-white">
                    <div className="title mb-4 text-center">
                        Welcome to Pet Spa
                    </div>
                    <div className="welcome mb-4 text-center">
                        Hello, Who are you?
                    </div>
                    <div className="content-form">
                        <div className="form-group">
                            <label>Email</label>
                            <input type={"email"} value={email} className="form-control" onChange={(event) => setemail(event.target.value)} />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type={"password"} value={password} className="form-control" onChange={(event) => setpassword(event.target.value)} />
                        </div>
                        <div className="forgot-password text-right">
                            <span>Forgot password?</span>
                        </div>
                        <button disabled={isLoading} onClick={() => handleLogin()} className="btn btn-primary btn-block mt-4 login-btn">
                            {isLoading === true && <ImSpinner10 className="loaderIcon" />}
                            Login to Pet Spa</button>
                    </div>

                    <div className="text-center mt-4">
                        <p>Don't have an account yet?</p>
                        <button onClick={() => navigate('/register')} className="btn btn-secondary">Sign Up</button>
                    </div>
                </div>
                <button className="btn btn-back-home" onClick={() => { navigate('/') }} >Go To Back HomePage</button>
            </div>
        </div>
    );
}

export default Login;
