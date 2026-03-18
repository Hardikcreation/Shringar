import React from 'react';
import { useNavigate } from 'react-router-dom';
import { orders } from '../../data/orders';
import Button from '../../components/ui/Button';

const OrderHistoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-8">
      <h1 className="font-display text-2xl text-jewel-dark mb-4">
        My Orders
      </h1>
      <div className="space-y-3">
        {orders.map((order) => (
          <div
            key={order.orderId}
            className="bg-white rounded-2xl border border-border/80 p-4 flex flex-col md:flex-row gap-4"
          >
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-gold-pale/60">
              {/* In a full build we'd grab first product image via productId */}
              <div className="w-full h-full flex items-center justify-center text-3xl">
                💎
              </div>
            </div>
            <div className="flex-1 text-xs space-y-1">
              <div className="flex flex-wrap justify-between gap-2">
                <div>
                  <p className="font-medium text-jewel-dark">
                    Order #{order.orderId}
                  </p>
                  <p className="text-text-muted">
                    Placed on {order.placedAt.slice(0, 10)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-jewel-dark">
                    ₹{order.totalAmount}
                  </p>
                  <p className="text-text-muted">
                    {order.items.length} item(s)
                  </p>
                </div>
              </div>
              <p className="text-text-muted">
                {order.items.map((i) => i.name).join(', ')}
              </p>
            </div>
            <div className="flex flex-col justify-between text-xs gap-2">
              <span className="self-start px-2 py-0.5 rounded-full bg-gold-pale text-jewel-dark">
                {order.status}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="flex-1"
                  onClick={() => navigate(`/orders/${order.orderId}`)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistoryPage;

