import React from 'react';
import { useParams } from 'react-router-dom';
import { orders } from '../../data/orders';

const OrderDetailPage = () => {
  const { id } = useParams();
  const order = orders.find((o) => o.orderId === id) || orders[0];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-4 text-xs space-y-3">
      <h1 className="text-base font-semibold text-jewel-dark">
        Order #{order.orderId}
      </h1>
      <p className="text-slate-500">
        Placed on {order.placedAt.slice(0, 10)} · ₹{order.totalAmount}
      </p>
      <div className="grid md:grid-cols-2 gap-3">
        <div>
          <p className="font-medium text-slate-700 mb-1">
            Items
          </p>
          <table className="w-full text-left text-[11px]">
            <thead className="text-slate-500">
              <tr>
                <th>Name</th>
                <th>Qty</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item) => (
                <tr key={item.productId}>
                  <td className="py-1">{item.name}</td>
                  <td className="py-1">{item.qty}</td>
                  <td className="py-1">₹{item.price}</td>
                  <td className="py-1">
                    ₹{item.price * item.qty}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="space-y-2">
          <div>
            <p className="font-medium text-slate-700">
              Customer
            </p>
            <p>{order.address.name}</p>
            <p className="text-slate-500">{order.address.phone}</p>
          </div>
          <div>
            <p className="font-medium text-slate-700">
              Shipping address
            </p>
            <p>
              {order.address.line1}, {order.address.line2}
            </p>
            <p>
              {order.address.city}, {order.address.state} -{' '}
              {order.address.pincode}
            </p>
          </div>
          <div>
            <p className="font-medium text-slate-700">
              Payment
            </p>
            <p>Method: {order.paymentMethod}</p>
            <p>Amount: ₹{order.totalAmount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetailPage;

