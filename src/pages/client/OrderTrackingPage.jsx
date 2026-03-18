import React from 'react';
import { useParams } from 'react-router-dom';
import { orders, ORDER_STATUSES } from '../../data/orders';

const OrderTrackingPage = () => {
  const { id } = useParams();
  const order = orders.find((o) => o.orderId === id) || orders[0];

  const currentStatusIndex = ORDER_STATUSES.indexOf(order.status);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-8 grid md:grid-cols-3 gap-6">
      <section className="md:col-span-2 bg-white rounded-2xl border border-border/80 p-4">
        <div className="mb-4">
          <h1 className="font-display text-xl text-jewel-dark">
            Tracking Order #{order.orderId}
          </h1>
          <p className="text-xs text-text-muted">
            Placed on {order.placedAt.slice(0, 10)} · Payment:{' '}
            {order.paymentMethod}
          </p>
        </div>
        <div className="relative pl-6">
          {ORDER_STATUSES.slice(0, 6).map((status, index) => {
            const historyEntry = order.statusHistory.find(
              (h) => h.status === status,
            );
            const completed = currentStatusIndex > index;
            const active = currentStatusIndex === index;

            return (
              <div
                key={status}
                className="relative pb-6 last:pb-0"
              >
                {index !== ORDER_STATUSES.slice(0, 6).length - 1 && (
                  <div className="absolute left-1 top-3 w-[2px] h-full bg-border" />
                )}
                <div
                  className={`w-3 h-3 rounded-full border-2 ${
                    completed || active
                      ? 'border-success bg-success'
                      : 'border-border bg-white'
                  }`}
                />
                <div className="ml-4 -mt-4">
                  <p
                    className={`text-xs font-medium ${
                      active
                        ? 'text-gold'
                        : completed
                        ? 'text-jewel-dark'
                        : 'text-text-muted'
                    }`}
                  >
                    {status}
                  </p>
                  <p className="text-[11px] text-text-muted">
                    {historyEntry ? historyEntry.at.replace('T', ' ') : 'Pending'}
                  </p>
                  {status === 'Shipped' && order.trackingId && (
                    <p className="text-[11px] text-text-muted mt-1">
                      Tracking ID: {order.trackingId}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <aside className="bg-white rounded-2xl border border-border/80 p-4 text-xs space-y-3">
        <div>
          <h2 className="text-sm font-semibold text-jewel-dark mb-1">
            Items
          </h2>
          <ul className="space-y-1">
            {order.items.map((item) => (
              <li
                key={item.productId}
                className="flex justify-between"
              >
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>₹{item.price * item.qty}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-jewel-dark mb-1">
            Delivery Address
          </h2>
          <p className="text-jewel-dark">
            {order.address.name}
          </p>
          <p className="text-text-muted">{order.address.phone}</p>
          <p className="text-text-muted">
            {order.address.line1}, {order.address.line2}
          </p>
          <p className="text-text-muted">
            {order.address.city}, {order.address.state} - {order.address.pincode}
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-jewel-dark mb-1">
            Payment
          </h2>
          <p className="text-text-muted">Method: {order.paymentMethod}</p>
          <p className="text-text-muted">Amount: ₹{order.totalAmount}</p>
        </div>
      </aside>
    </div>
  );
};

export default OrderTrackingPage;

