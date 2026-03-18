import React from 'react';
import { orders } from '../../data/orders';

const OrdersPage = () => {
  return (
    <div className="space-y-3 text-xs">
      <h1 className="text-base font-semibold text-jewel-dark">
        Orders ({orders.length})
      </h1>
      <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-[11px]">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-3 py-2">Order ID</th>
              <th className="px-3 py-2">Customer</th>
              <th className="px-3 py-2">Items</th>
              <th className="px-3 py-2">Amount</th>
              <th className="px-3 py-2">Payment</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr
                key={o.orderId}
                className="border-t border-slate-100"
              >
                <td className="px-3 py-2">{o.orderId}</td>
                <td className="px-3 py-2">{o.address.name}</td>
                <td className="px-3 py-2">{o.items.length}</td>
                <td className="px-3 py-2">₹{o.totalAmount}</td>
                <td className="px-3 py-2">{o.paymentMethod}</td>
                <td className="px-3 py-2">{o.status}</td>
                <td className="px-3 py-2">{o.placedAt.slice(0, 10)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;

