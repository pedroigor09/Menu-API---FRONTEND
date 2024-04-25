import axios, { AxiosPromise } from "axios"
import { StreamData } from "../interface/StreamData";
import { InvalidateQueryFilters, useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const postData = async (data: StreamData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/streams', data)
    return response;
}

export function useStreamDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['stream-data'] as InvalidateQueryFilters)
        }
    })

    return mutate;
    }