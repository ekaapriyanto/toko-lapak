import { getData } from "@/service";

export const fetchBanners = () => getData("http://localhost:3000/api/banners");

export const fetchCoverCategory = () => getData("http://localhost:3000/api/catImage");

export const fetchNewArrival = () => getData("http://localhost:3000/api/new-arrival");