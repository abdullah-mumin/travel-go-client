  import React from 'react';
  const BlogTable = ({service, handleDeleteService, handleUpdateStatus 
  }) => {
      const {name, price,status } = service.data;

      return (
              <tr className="mt-2 border border-black text-center hover:bg-blue-50 transition duration-300 ease-in-out">
              <td className="px-3"> {name}</td>
              <td className="px-3">$ {price}</td>
              <td className="px-3"> {service?.admin}</td>
              <td className="px-3"> {service?.status}</td>
              <td className="px-3"><button onClick={() => handleDeleteService(service?._id)}><i className="fas fa-trash-alt text-red-500 text-lg"></i></button></td>
              <td className="px-3"><button className='btn btn-success' onClick={() => handleUpdateStatus(service?._id)}>Approve</button></td>
              <td className="robotoFont fw-lighter text-start">
              <td>  
              </td>
              </td>
          </tr>
      )
  };

  export default BlogTable;