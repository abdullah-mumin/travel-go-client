import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import HomeIcon from '@mui/icons-material/Home';
import { Button } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import { Box } from '@mui/system';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import RateReviewIcon from '@mui/icons-material/RateReview';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import PaymentIcon from '@mui/icons-material/Payment';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

const UserInfoModal = (props) => {
  const {admin} = useAuth();

    const {toggle, setToggle} = props;
    const { user, logout } = useAuth()
    const history = useHistory();



    const redirectToLogin = () => {
        history.push('/login')
    }

    return (
        <div className="absolute flex justify-end items-center mx-auto top-38 right-5 text-black">
            {
                toggle?

                <div className="w-60 p-3 rounded-md bg-white border border-black z-50">
                <div className="text-right">
                    <button className="bg-white w-8 h-8 rounded text-red-700" onClick={() => setToggle(false)}><HighlightOffIcon/></button>
                </div>
                <div className="flex justify-center text-center">
                    <div className="divide-y divide-gray-500 divide-solid w-full">
                        <div className="mb-3">
                        {
                                user.photoURL?
                                (<img onClick={() => setToggle(true)} className="w-10 h-10 ml-4 rounded-full" src={user?.photoURL} alt="" />
                                )
                            :
                            (<img onClick={() => setToggle(true)} className="w-10 h-10 ml-4 rounded-full" src="https://i.ibb.co/7kCyq0z/no-user-image-icon-0.png" alt="" />)
                            }
                            <h5 className="font-semibold m-2">{user.displayName} <i className="text-green-600 fa-regular fa-circle-check">{ admin && <AdminPanelSettingsIcon className='text-green-600'/> }</i></h5>
                        </div>
                        <div>
                            <div className="">
                                <div className="">
                                    <Link className="no-underline" to='/'><Button><HomeIcon/>Home</Button></Link><br />
                                    { admin && 
          <Box>
            
        <li className="list-none">
        <Link to="/addService" className="text-white no-underline font-semibold"><Button ><AddShoppingCartIcon/>Add product</Button></Link><br />
        </li>
        <li className="list-none ">
          <Link className="text-white no-underline font-semibold" to="/manageProduct"><Button ><EventAvailableIcon/>Manage Products</Button></Link><br />
        </li>
        <li className="list-none ">
          <Link className="text-white no-underline font-semibold" to="/manageAllOrder"><Button ><i className="fa-solid fa-arrow-up-short-wide"></i>Manage Order</Button></Link><br />
        </li>
        <li className="list-none text-white">
        <Link className="text-white no-underline font-semibold" to="/makeAdmin"><Button><AdminPanelSettingsIcon/>Make Admin</Button></Link>
        </li>
          </Box>
          }
        
      
        <li className="list-none  text-white">
          <Link className="text-white no-underline font-semibold" to='/myOrders'><Button><CardGiftcardIcon/>My Orders</Button></Link>
        </li>
        <li className="list-none  text-white">
          <Link className="text-white no-underline font-semibold" to='/pay'><Button><PaymentIcon/>Pay</Button></Link>
        </li>
        <li className="list-none  text-white">
          <Link className="text-white no-underline font-semibold" to='/addReview'><Button><RateReviewIcon/>Review</Button></Link>
        </li>
        
        <br />
                            <Button onClick={logout}><LogoutIcon/>Log Out</Button>
                                    <div className=" mt-3">
                                    <button onClick={logout} className="mt-2 rounded-lg hover:bg-green-500  transition duration-300 ease-in-out hover:text-white font-semibold border-2 border-green-500 px-3 py-2"><i className="fas fa-sign-out-alt"></i> Log Out</button>
                                    </div>
                                </div>
                            </div>
                            {!user.email && redirectToLogin()}
                        </div>
                    </div>
                </div>
            </div> 
            : 
            
            ''}

        </div>
    );
};

export default UserInfoModal;