import * as React from "react";
import NextLink from "next/link";
import ToDoList from "@/components/Apps/ToDoList";
import RequireAuth from "@/components/Authentication/RequireAuth";

export default async function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Lista de Eventos</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/to-do-list'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Aplicaciones</li>
          <li>Lista de Eventos</li>
        </ul>
      </div>

      <ToDoList />
    </RequireAuth>
  );
}
