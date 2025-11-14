import * as React from "react";
import NextLink from "next/link";
import AccountSettings from "@/modules/Settings/AccountSettings";
import RequireAuth from "@/modules/Authentication/RequireAuth";

export default function Page() {
  return (
    <RequireAuth>
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
        </ul>
      </div>

      <AccountSettings />
    </RequireAuth>
  );
}
