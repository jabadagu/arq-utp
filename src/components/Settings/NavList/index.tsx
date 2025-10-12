"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import styles from "@/components/Settings/NavList/NavList.module.css";

const NavList: React.FC = () => {
  const pathname = usePathname();
  const { lang } = useParams();

  return (
    <>
      <ul className={styles.navList}>
        <li>
          <Link
            href={`/${lang}/settings/`}
            className={`link ${
              pathname === `/${lang}/settings/` ? `${styles.active}` : ""
            }`}>
            Account Settings
          </Link>
        </li>
        <li>
          <Link
            href={`/${lang}/settings/change-password/`}
            className={`link ${
              pathname === `/${lang}/settings/change-password/`
                ? `${styles.active}`
                : ""
            }`}>
            Change Password
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
