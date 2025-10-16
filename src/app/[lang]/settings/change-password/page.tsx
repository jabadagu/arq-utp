import * as React from "react";
import NextLink from "next/link";
import ChangePassword from "@/components/Settings/ChangePassword";

export default function Page() {
  return (
    <>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Configuración</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/to-do-list'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Configuración</li>
          <li>Cambiar Contraseña</li>
        </ul>
      </div>

      <ChangePassword />
    </>
  );
}
