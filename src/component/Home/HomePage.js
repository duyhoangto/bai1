import VideoHomepage from '../../assets/video-homepage.mp4'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const HomePage = () => {
    const navigate = useNavigate();
    const isAutheticated = useSelector(state => state.user.isAutheticated)
    return (
        <div className="homepage-container">
            <video autoPlay muted loop >
                <source src={VideoHomepage}
                    type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>
                    Make forms worth filling out
                </div>
                <div className='title-2'>
                    Get more data—like signups, feedback, and anything else—with forms designed to be refreshingly different.
                </div>
                <div className='title-3'>

                    <button onClick={() => {
                        navigate('/login')
                    }}>Get's  started. It's free (need to login)</button>

                    <button onClick={() => {
                        navigate('/users')
                    }} >
                        Doing quiz now
                    </button>


                </div>
            </div>
        </div>
    )
}

export default HomePage;