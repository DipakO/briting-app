import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userAuthApi = createApi({
  reducerPath: "userAuthApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:2000/api/user/" }),

  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user) => {
        return {
          url: "register",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),

    loginUser: builder.mutation({
      query: (user) => {
        return {
          url: "login",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    sendPasswordResetEmail: builder.mutation({
      query: (user) => {
        return {
          url: "send-reset-password-email",
          method: "POST",
          body: user,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    resetPassword: builder.mutation({
      query: ({ actualData, id, token }) => {
        return {
          url: `/reset-password/${id}/${token}`,
          method: "POST",
          body: actualData,
          headers: {
            "Content-type": "application/json",
          },
        };
      },
    }),
    getLoggedUser: builder.query({
      query: (token) => {
        return {
          url: `loggeduser`,
          method: "GET",
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    changeUserPassword: builder.mutation({
      query: ({ actualData, token }) => {
        return {
          url: "changepassword",
          method: "POST",
          body: actualData,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
      },
    }),
    getBrithingData: builder.query({
      query: () => {
        return {
          url: "data",
          method: "GET",
        };
      },
    }),
  }),
});

// Auto Generate the hooks
// Attach  the end of  the function which type of api post our get
export const {
  useRegisterUserMutation,
  useLoginUserMutation,
  useSendPasswordResetEmailMutation,
  useResetPasswordMutation,
  useGetLoggedUserQuery,
  useChangeUserPasswordMutation,
  useGetBrithingDataQuery,
} = userAuthApi;

// reducerPath : IS set to unique key of every api call
// fetchBaseQuery : Is the store the base URL  for avoid the repitation to the comman URL
// builing.mutation : mutation write for the post api
