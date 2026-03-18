import React, { useState } from 'react';
import { users as allUsers } from '../../data/users';
import toast from 'react-hot-toast';

const UsersPage = () => {
  const [users, setUsers] = useState(allUsers);

  const toggleBlock = (id) => {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id ? { ...u, isBlocked: !u.isBlocked } : u,
      ),
    );
    const user = users.find((u) => u.id === id);
    toast.success(
      user?.isBlocked ? 'User has been unblocked' : 'User has been blocked',
    );
  };

  return (
    <div className="space-y-3 text-xs">
      <h1 className="text-base font-semibold text-jewel-dark">
        Users ({users.length})
      </h1>
      <div className="bg-white rounded-xl border border-slate-200 overflow-x-auto">
        <table className="w-full text-left text-[11px]">
          <thead className="bg-slate-50 text-slate-600">
            <tr>
              <th className="px-3 py-2">Name</th>
              <th className="px-3 py-2">Email</th>
              <th className="px-3 py-2">Phone</th>
              <th className="px-3 py-2">Orders</th>
              <th className="px-3 py-2">Spent</th>
              <th className="px-3 py-2">Joined</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                className="border-t border-slate-100"
              >
                <td className="px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gold-pale flex items-center justify-center text-[10px] font-semibold text-jewel-dark">
                      {u.name[0]}
                    </div>
                    <span>{u.name}</span>
                  </div>
                </td>
                <td className="px-3 py-2">{u.email}</td>
                <td className="px-3 py-2">{u.phone}</td>
                <td className="px-3 py-2">{u.totalOrders}</td>
                <td className="px-3 py-2">
                  ₹{u.totalSpent.toLocaleString('en-IN')}
                </td>
                <td className="px-3 py-2">{u.joinedDate}</td>
                <td className="px-3 py-2">
                  <span
                    className={`px-2 py-0.5 rounded-full ${
                      u.isBlocked
                        ? 'bg-red-50 text-red-600'
                        : 'bg-emerald-50 text-emerald-700'
                    }`}
                  >
                    {u.isBlocked ? 'Blocked' : 'Active'}
                  </span>
                </td>
                <td className="px-3 py-2">
                  <button
                    type="button"
                    onClick={() => toggleBlock(u.id)}
                    className="text-gold"
                  >
                    {u.isBlocked ? 'Unblock' : 'Block'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;

