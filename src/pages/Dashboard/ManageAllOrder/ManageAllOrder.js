import React from 'react';
const ManageAllOrder = ({service,handleConfirm,handleDeleteService
}) => {
    const {name,status,_id } = service?.data;
    const {date,time} = service;

    return (
          <tr className="mt-2 border border-black text-center hover:bg-blue-50 transition duration-300 ease-in-out">
            <td className="px-3"> {name}</td>
            <td className="px-3"> {date?.slice(0,10)}</td>
            <td className="px-3"> {time?.slice(16,24)}</td>
            <td className="px-3"><button onClick={() =>handleDeleteService(_id)}>delete</button></td>

            <td className="robotoFont fw-lighter text-start">
            <td>  
                  
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
          {status}
          </button>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><button onClick={() => handleConfirm(_id, "Approved")} className="dropdown-item">Approved</button></li>
            {/* <li><button onClick={() => handleUpdateStatus(_id, "Cancel")} className="dropdown-item">Cancel</button></li> */}
          </ul>
        </div>
            </td>
            </td>
        </tr>
        
    )
};

export default ManageAllOrder;