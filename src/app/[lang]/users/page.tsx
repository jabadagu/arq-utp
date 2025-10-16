import * as React from "react";
import NextLink from "next/link";
import TeamMembers from "@/components/Users/TeamMembers";
import RequireAuth from "@/components/Authentication/RequireAuth";

export default function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Usuarios del sistema</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/to-do-list'>
              <i className='material-symbols-outlined'>home</i>
              Panel de Control
            </NextLink>
          </li>
          <li>Usuarios</li>
        </ul>
      </div>

      <TeamMembers />
    </RequireAuth>
  );
}
