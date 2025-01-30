import Librarylogo from '@/public/images/library-logo.png';
import ProfileDp from '@/public/images/Profile DP.jpg';
import { FaHome } from 'react-icons/fa';
import { IoExitOutline } from "react-icons/io5";

const AdminSidePanel = () => {
    return (
        <div className='admin-side-panel'>
            <div>
                <img src={Librarylogo.src} alt="A book" />
                <p>Uni Library Admin</p>
            </div>
            <div>
                <div>
                    <FaHome />
                    <p>Home</p>
                </div>
                <div>
                    <FaHome />
                    <p>Home</p>
                </div>
                <div>
                    <FaHome />
                    <p>Home</p>
                </div>
                <div>
                    <FaHome />
                    <p>Home</p>
                </div>
                <div>
                    <FaHome />
                    <p>Home</p>
                </div>
            </div>
            <div>
                <div>
                    <img src={ProfileDp.src} width={50} height={50} alt="Profile Image" />
                    <div>
                        <p>Muhammed Oparemi</p>
                        <p>fourzerofour@gmail.com</p>
                    </div>
                    <IoExitOutline />
                </div>
            </div>
        </div>
    )
}

export default AdminSidePanel;