import * as React from "react";
import NextLink from "next/link";
import UsersList from "@/modules/Users/UsersList";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Lista de Usuarios</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/to-do-list'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Usuarios</li>
          <li>Lista de Usuarios</li>
        </ul>
      </div>

      <UsersList />
    </>
  );
}
