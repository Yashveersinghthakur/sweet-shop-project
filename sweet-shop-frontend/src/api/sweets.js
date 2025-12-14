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
