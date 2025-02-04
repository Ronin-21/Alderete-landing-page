import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Leads {
  name: string;
  email_from: string;
  phone: string;
  service: string;
  description: string;
}

export const odooApi = createApi({
  reducerPath: "odooApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://tuodoo.com/jsonrpc", // URL de tu Odoo
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    createLead: builder.mutation({
      query: (leadData: Leads) => ({
        url: "",
        method: "POST",
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            service: "object",
            method: "execute",
            args: [
              "nombre_de_base", // Nombre de la base de datos de Odoo
              2, // ID del usuario de Odoo
              "clave_de_API", // Clave de la API de Odoo
              "crm.lead", // Modelo de Odoo
              "create", // Método de Odoo
              [
                {
                  name: leadData.name,
                  email_from: leadData.email_from,
                  phone: leadData.phone,
                  x_service: leadData.service, // Personalizado para Odoo
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
      query: ({ db, username, password }) => ({
        url: "",
        method: "POST",
        body: JSON.stringify({
          jsonrpc: "2.0",
          method: "call",
          params: {
            service: "common",
            method: "authenticate",
            args: [db, username, password, {}], // Parámetros requeridos
          },
          id: new Date().getTime(),
        }),
      }),
    }),
  }),
});

export const { useCreateLeadMutation, useLoginMutation } = odooApi;
