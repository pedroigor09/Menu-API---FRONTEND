import axios, { AxiosPromise } from "axios"
import { StreamData } from "../interface/StreamData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<StreamData[]> => {
    const response = axios.get(API_URL + '/streams')
    return response;
}

export function useStreamData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['stream-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}