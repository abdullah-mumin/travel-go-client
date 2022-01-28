import React from 'react';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const OrderPlace = () => {
    const {user} = useAuth();
    const history = useHistory();

    const handleManageBookings = () => {
        history.push('/myOrders')
    }
    return (
        <div className="h-screen text-center">
            <h3 className=" mt-5">
            Thank you <span style={{color:'#bf5655'}}>{user.displayName}</span> for booking our service!
            </h3>
            <button onClick={handleManageBookings} className="bg-green-500 px-3 py-2 rounded-lg text-lg font-semibold text-white">See Your Orders</button>
        </div>
    )
}

export default OrderPlace;