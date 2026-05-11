import { api } from "./axios";

export const getSweets = async () => {
  try {
    const res = await api.get("/sweets");
    return res.data;
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const addSweet = async (sweet) => {
  try {
    const res = await api.post("/sweets", sweet);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const updateSweet = async (id, sweet) => {
  try {
    const res = await api.put(`/sweets/${id}`, sweet);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const deleteSweet = async (id) => {
  try {
    const res = await api.delete(`/sweets/${id}`);
    return res.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};
