"use client";

import React, { useState, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname, useParams } from "next/navigation";
import TopNavbar from "@/modules/Layout/TopNavbar";
import LeftSidebarMenu from "@/modules/Layout/LeftSidebarMenu";
import Footer from "@/modules/Layout/Footer";
import ControlPanel from "@/modules/Layout/ControlPanel";

interface LayoutProviderProps {
  children: ReactNode;
  leftSideMenu?: any;
  topHeaderNavbar?: any;
}

const LayoutProvider: React.FC<LayoutProviderProps> = ({
  children,
  leftSideMenu,
  topHeaderNavbar,
}) => {
  const { lang } = useParams();

  const [active, setActive] = useState<boolean>(false);
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            retry: 2,
            retryDelay: 1000,
            staleTime: 5 * 60 * 1000, // 5 minutes
          },
        },
      })
  );
  const pathname = usePathname();

  const toggleActive = () => {
    setActive(!active);
  };

  const isAuthPage = [
    `/${lang}/authentication/sign-in/`,
    `/${lang}/authentication/sign-up/`,
    `/${lang}/authentication/forgot-password/`,
    `/${lang}/authentication/reset-password/`,
    `/${lang}/authentication/confirm-email/`,
    `/${lang}/authentication/logout/`,
    `/${lang}/authentication/validate-email/`,
    `/${lang}/`,
  ].includes(pathname);

  return (
    <QueryClientProvider client={queryClient}>
      <>
        <div className={`main-wrapper-content ${active ? "active" : ""}`}>
          {!isAuthPage && (
            <>
              <TopNavbar
                toggleActive={toggleActive}
                topHeaderNavbar={topHeaderNavbar}
              />

              <LeftSidebarMenu
                toggleActive={toggleActive}
                leftSideMenu={leftSideMenu}
              />
            </>
          )}

          <div className='main-content'>
            {children}

            {!isAuthPage && <Footer />}
          </div>
        </div>

        <div
          style={{
            position: "fixed",
            bottom: "15px",
            right: "15px",
            zIndex: "-5",
            opacity: 0,
            visibility: "hidden",
          }}>
          <ControlPanel />
        </div>

        <ReactQueryDevtools initialIsOpen={false} />
      </>
    </QueryClientProvider>
  );
};

export default LayoutProvider;
