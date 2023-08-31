import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
  'X-RapidAPI-Key': '40f0b3196amsh0dcfe9ed0a63479p1c0a79jsndd2bc6dceb3f',
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';


// Note: Change v1 to v2 on rapid api

const createRequest = (url) => ({url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath:"cryptoApi",
  baseQuery: fetchBaseQuery({baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`),
    }),

    // Note: Change the coin price history endpoint from this - `coin/${coinId}/history/${timeperiod} to this - `coin/${coinId}/history?timeperiod=${timeperiod}`
   getCryptoHistory: builder.query({
      query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
    }) 

  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi; 