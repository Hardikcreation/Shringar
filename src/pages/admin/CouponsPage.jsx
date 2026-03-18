import React, { useState } from 'react';
import { coupons as initialCoupons } from '../../data/coupons';
import Modal from '../../components/ui/Modal';
import Button from '../../components/ui/Button';

const CouponsPage = () => {
  const [coupons, setCoupons] = useState(initialCoupons);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCreate = (e) => {
    e.preventDefault();
    setModalOpen(false);
  };

  return (
    <div className="space-y-3 text-xs">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-semibold text-jewel-dark">
          Coupons
        </h1>
        <Button
          size="sm"
          onClick={() => setModalOpen(true)}
        >
          + Create Coupon
        </Button>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-[11px]">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-3 py-2">Code</th>
              <th className="px-3 py-2">Type</th>
              <th className="px-3 py-2">Value</th>
              <th className="px-3 py-2">Min Order</th>
              <th className="px-3 py-2">Used / Max</th>
              <th className="px-3 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {coupons.map((c) => (
              <tr
                key={c.code}
                className="border-t border-slate-100"
              >
                <td className="px-3 py-2 font-semibold">{c.code}</td>
                <td className="px-3 py-2 capitalize">{c.type}</td>
                <td className="px-3 py-2">
                  {c.type === 'percentage' ? `${c.value}%` : `₹${c.value}`}
                </td>
                <td className="px-3 py-2">₹{c.minOrder}</td>
                <td className="px-3 py-2">
                  {c.used}/{c.maxUses}
                </td>
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      c.isActive
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {c.isActive ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title="Create Coupon"
        footer={
          <>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>
            <Button
              size="sm"
              onClick={handleCreate}
            >
              Save Coupon
            </Button>
          </>
        }
      >
        <form
          onSubmit={handleCreate}
          className="space-y-2 text-xs"
        >
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block mb-1 text-slate-600">
                Coupon Code
              </label>
              <input
                type="text"
                className="w-full rounded-md border border-slate-300 px-3 py-1.5"
                placeholder="JEWEL25"
              />
            </div>
            <div>
              <label className="block mb-1 text-slate-600">
                Discount Type
              </label>
              <select className="w-full rounded-md border border-slate-300 px-3 py-1.5">
                <option>Percentage</option>
                <option>Flat Amount</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block mb-1 text-slate-600">
                Discount Value
              </label>
              <input className="w-full rounded-md border border-slate-300 px-3 py-1.5" />
            </div>
            <div>
              <label className="block mb-1 text-slate-600">
                Minimum Order
              </label>
              <input className="w-full rounded-md border border-slate-300 px-3 py-1.5" />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CouponsPage;

