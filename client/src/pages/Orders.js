// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Eye } from 'lucide-react';

// const Orders = () => {
//   const navigate = useNavigate();

//   const dummyOrders = [
//     {
//       id: 'ORD1001',
//       userName: 'Ravi Kumar',
//       amount: 1500,
//       address: '123, MG Road, Delhi',
//     },
//     {
//       id: 'ORD1002',
//       userName: 'Anjali Singh',
//       amount: 2350,
//       address: '22, Park Street, Kolkata',
//     },
//     {
//       id: 'ORD1003',
//       userName: 'Vikas Sharma',
//       amount: 980,
//       address: '67, Banjara Hills, Hyderabad',
//     },
//   ];

//   const handleView = (orderId) => {
//     navigate(`/dashboard/orders/view/${orderId}`);
//   };

//   return (
//     <div className="p-4">
//       <h2 className="text-xl font-semibold mb-4">Orders List</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded shadow">
//           <thead>
//             <tr className="bg-gray-200 text-left">
//               <th className="p-3">Order ID</th>
//               <th className="p-3">User Name</th>
//               <th className="p-3">Order Amount</th>
//               <th className="p-3">User Address</th>
//               <th className="p-3">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {dummyOrders.map((order, index) => (
//               <tr key={index} className="border-b hover:bg-gray-50">
//                 <td className="p-3">{order.id}</td>
//                 <td className="p-3">{order.userName}</td>
//                 <td className="p-3">₹{order.amount}</td>
//                 <td className="p-3">{order.address}</td>
//                 <td className="p-3">
//                   <button
//                     onClick={() => handleView(order.id)}
//                     className="text-blue-500 hover:text-blue-700"
//                   >
//                     <Eye size={20} />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Orders;
