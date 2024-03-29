const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map((item) => {
        return (
          <tbody key={item.id}>
            <tr>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
};

// const TransactionHistory = ({ items }) => {
//   return (
//     <div>
//       {items.map((item) => {
//         return (
//           <table key={item.id}>
//             <thead>
//               <tr>
//                 <th>Type</th>
//                 <th>Amount</th>
//                 <th>Currency</th>
//               </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td>{item.type}</td>
//                 <td>{item.amount}</td>
//                 <td>{item.currency}</td>
//               </tr>
//             </tbody>
//           </table>
//         );
//       })}
//     </div>
//   );
// };

export default TransactionHistory;
