import config from "@/config/config";
import axios from "axios";

export const getProducts = async (searchParams) => {
    const sort = (await searchParams)?.sort ?? "";
    const min = (await searchParams)?.min ?? "";
    const max = (await searchParams)?.max ?? "";
    const category = (await searchParams)?.category ?? "";
    const brands = (await searchParams)?.brands ?? "";
    const name = (await searchParams)?.name ?? "";

    const response = await axios.get(
        `${config.apiUrl}/api/products?sort=${sort}&min=${min}&max=${max}&category=${category}&brand=${brands}&name=${name}`
    );

    return response.data;
};