"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
} from "../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import Social from "../common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  const router = useRouter();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/icon_hubspot.jpg" alt="brand" style={{width:50 , height:50}}/>
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
          <MenuItem
              component={
                <Link
                  href="/"
                  className={
                    router.pathname === "/contact" ? "menu-active-link" : ""
                  }
                />
              }
            >
              Home
            </MenuItem>
            {/* End  All Home Menu */}

          
            {/* End  All Categories Menu */}

          
            {/* End  Desitinations Menu */}

            <SubMenu label="Categories">
              {blogItems.map((item, i) => (
                <MenuItem
                  key={i}
                  component={
                    <Link
                      href={item.routePath}
                      className={
                        isActiveLink(item.routePath, router.asPath)
                          ? "menu-active-link"
                          : ""
                      }
                    />
                  }
                >
                  {item.name}
                </MenuItem>
              ))}
            </SubMenu>
            {/* End  All Blog Menu */}


            <MenuItem
              component={
                <Link
                  href="/others-pages/terms"
                  className={
                    router.pathname === "/others-pages/terms" ? "menu-active-link" : ""
                  }
                />
              }
            >
              Terms
            </MenuItem>

            <MenuItem
              component={
                <Link
                  href="/contact"
                  className={
                    router.pathname === "/contact" ? "menu-active-link" : ""
                  }
                />
              }
            >
              Contact
            </MenuItem>
            {/* End Contact  Menu */}
          </Menu>
        </Sidebar>
      </ProSidebarProvider>

     
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
