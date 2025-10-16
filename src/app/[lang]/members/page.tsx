import * as React from "react";
import NextLink from "next/link";
import MembersTable from "@/components/Members/MembersTable";
import RequireAuth from "@/components/Authentication/RequireAuth";

export default function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Proveedores</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/to-do-list'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Proveedores</li>
        </ul>
      </div>

      <MembersTable />
    </RequireAuth>
  );
}
