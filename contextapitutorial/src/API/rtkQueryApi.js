import {createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkQueryApi = createApi({
    reducerPath:"rtkQueryApi",
    tagTypes:['Contacts'],
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:3008/"}),
    endpoints: (builder)=>({
        getAllContacts:builder.query({
            query:()=>"/contacts",
            providesTags: ['Contacts'],
        }),
        getContactById:builder.query({
            query:(id)=>`/contacts/${id}`,
            providesTags: ['Contacts'],
        }),
        addContacts:builder.mutation({
            query:(contact)=>({
                url:'/contacts',
                method:'POST',
                body: contact
            }),
            invalidatesTags: ['Contacts'],
        }),
        editContact:builder.mutation({
            query:({id,...rest})=>({
                url:`/contacts/${id}`,
                method:'PUT',
                body: rest
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact:builder.mutation({
            query:(id)=>({
                url:`/contacts/${id}`,
                method:'DELETE'
            }),
            invalidatesTags: ['Contacts'],
        })
    })
})

export const {
    useGetAllContactsQuery,
    useGetContactByIdQuery,
    useAddContactsMutation,
    useEditContactMutation,
    useDeleteContactMutation

} = rtkQueryApi