// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchOrders,
//   fetchReturnRequests,
// } from './myaccountslice'
// // } from '../redux/features/myAccount/myAccountSlice';

// const MyAccountTable = () => {
//   const dispatch = useDispatch();
//   const { orders, returnRequests, status, error } = useSelector(
//     (state) => state.myAccount
//   );

//   useEffect(() => {
//     dispatch(fetchOrders());
//     dispatch(fetchReturnRequests());
//   }, [dispatch]);

//   if (status === 'loading') {
//     return <p>Loading...</p>;
//   }

//   if (status === 'failed') {
//     return <p>{error}</p>;
//   }

//   return (
//     <div>
//       <h2>Orders</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Order ID</th>
//             <th>Date</th>
//             <th>Amount</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {orders.map((order) => (
//             <tr key={order.id}>
//               <td>{order.id}</td>
//               <td>{order.date}</td>
//               <td>{order.amount}</td>
//               <td>{order.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <h2>Return Requests</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Request ID</th>
//             <th>Order ID</th>
//             <th>Date</th>
//             <th>Reason</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {returnRequests.map((request) => (
//             <tr key={request.id}>
//               <td>{request.id}</td>
//               <td>{request.orderId}</td>
//               <td>{request.date}</td>
//               <td>{request.reason}</td>
//               <td>{request.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default MyAccountTable;
