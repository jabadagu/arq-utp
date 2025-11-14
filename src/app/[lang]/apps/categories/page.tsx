import * as React from "react";
import NextLink from "next/link";
import RequireAuth from "@/modules/Authentication/RequireAuth";
import Categories from "@/modules/Apps/Categories";

export default async function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Lista de Categorias de servicios</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/categories'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Aplicaciones</li>
          <li>Lista de Categorias</li>
        </ul>
      </div>

      <Categories />
    </RequireAuth>
  );
}
