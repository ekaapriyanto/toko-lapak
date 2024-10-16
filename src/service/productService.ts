import { getData } from "@/service";

export const fetchProducts = () => getData("http://localhost:3000/api/products");