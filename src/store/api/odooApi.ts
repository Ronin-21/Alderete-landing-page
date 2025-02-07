import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const db = "ronin-webdesign";
//const username = "ale_lasarte@hotmail.com";
const apiKey = "4976ff2229eddca2ef987f151a6336e7165265d1";

export interface Leads {
  name: string;
  email_from: string;
  phone: string;
  //service: string;
  description: string;
}

export const odooApi = createApi({
  reducerPath: "odooApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api/odoo", // URL de tu Odoo
    //baseUrl: "https://ronin-webdesign.odoo.com/jsonrpc", // URL de tu Odoo
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    credentials: "include", // Permite enviar cookies
  }),
  endpoints: (builder) => ({
    createLead: builder.mutation({
      query: (leadData: Leads) => ({
        url: "/lead",
        method: "POST",
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            service: "object",
            method: "execute",
            args: [
              db, // Nombre de la base de datos de Odoo
              2, // ID del usuario de Odoo
              apiKey, // Clave de la API de Odoo
              "crm.lead", // Modelo de Odoo
              "create", // Método de Odoo
              [
                {
                  name: leadData.name,
                  email_from: leadData.email_from,
                  phone: leadData.phone,
                  //x_service: leadData.service, // Personalizado para Odoo
                  description: leadData.description,
                },
              ],
            ],
          },
          id: new Date().getTime(),
        }),
      }),
    }),
    login: builder.mutation({
      query: ({ username, password }) => ({
        url: "/login",
        method: "POST",
        body: {
          jsonrpc: "2.0",
          method: "call",
          params: {
            db: db,
            login: username,
            password: password,
          },
          id: new Date().getTime(),
        },
      }),
    }),
  }),
});

export const { useCreateLeadMutation, useLoginMutation } = odooApi;
