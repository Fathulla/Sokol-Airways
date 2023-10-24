import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseQuery, access_key } from '../../utils/baseQuery';

interface IFlightsPayload {
    limit: number
}

interface IFlightResponse extends IFlightsPayload { }

export const aviationStackApi = createApi({
    reducerPath: 'aviationStackApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseQuery
    }),
    endpoints: (builder) => ({
        getFlights: builder.query<IFlightResponse, IFlightsPayload>({
            query: () => ({
                url: `/v1/flights${access_key}`,
            })
        })
    })
})

export const {
    useGetFlightsQuery,
} = aviationStackApi;