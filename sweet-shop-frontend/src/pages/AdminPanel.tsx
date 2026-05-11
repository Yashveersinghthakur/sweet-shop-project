import { useEffect, useState } from "react";
import { SweetCard } from "../components/SweetCard";
import { Sweet } from "../types";
import { getSweets, addSweet, updateSweet, deleteSweet } from "../api/sweets";

export const AdminPanel = () => {
  const [sweets, setSweets] = useState<Sweet[]>([]);
  const [form, setForm] = useState<Sweet>({ name: "", price: 0, quantity: 0 });

  const fetchSweets = async () => {
    const data = await getSweets();
    setSweets(data);
  };

  useEffect(() => { fetchSweets(); }, []);

  const handleAdd = async () => {
    await addSweet(form);
    setForm({ name: "", price: 0, quantity: 0 });
    fetchSweets();
  };

  const handleDelete = async (id: string) => {
    await deleteSweet(id);
    fetchSweets();
  };

  return (
    <div>
      <h2>Admin Panel</h2>
      <div>
        <input placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
        <input type="number" placeholder="Price" value={form.price} onChange={e => setForm({ ...form, price: Number(e.target.value) })} />
        <input type="number" placeholder="Quantity" value={form.quantity} onChange={e => setForm({ ...form, quantity: Number(e.target.value) })} />
        <button onClick={handleAdd}>Add Sweet</button>
      </div>
      <div>
        {sweets.map((sweet) => (
          <div key={sweet.id}>
            <SweetCard sweet={sweet} />
            <button onClick={() => handleDelete(sweet.id!)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};
