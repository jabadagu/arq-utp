"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname, useParams } from "next/navigation";
import styles from "./NavList.module.css";

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
            Configuración de Cuenta
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
            Cambiar Contraseña
          </Link>
        </li>
      </ul>
    </>
  );
};

export default NavList;
