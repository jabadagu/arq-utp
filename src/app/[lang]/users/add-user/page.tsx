import * as React from "react";
import NextLink from "next/link";
import AddUser from "@/components/Users/AddUser";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Agregar Usuario</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/to-do-list'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Usuarios</li>
          <li>Agregar Usuario</li>
        </ul>
      </div>

      <AddUser />
    </>
  );
}
