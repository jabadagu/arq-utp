import * as React from "react";
import NextLink from "next/link";
import AccountSettings from "@/components/Settings/AccountSettings";
import RequireAuth from "@/components/Authentication/RequireAuth";

export default function Page() {
  return (
    <RequireAuth>
      {/* Breadcrumb */}
      <div className='breadcrumb-card'>
        <h5>Settings</h5>

        <ul className='breadcrumb'>
          <li>
            <NextLink href='/dashboard/ecommerce/'>
              <i className='material-symbols-outlined'>home</i>
              Dashboard
            </NextLink>
          </li>
          <li>Settings</li>
        </ul>
      </div>

      <AccountSettings />
    </RequireAuth>
  );
}
