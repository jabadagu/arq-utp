import * as React from "react";
import NextLink from "next/link";
import MembersTable from "@/components/Members/MembersTable";
import RequireAuth from "@/components/Authentication/RequireAuth";

export default function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Members</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/apps/to-do-list'>
              <i className='material-symbols-outlined'>home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Members</li>
        </ul>
      </div>

      <MembersTable />
    </RequireAuth>
  );
}
