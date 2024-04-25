import Link from "next/link";

import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
} from "../../data/mainMenuData";
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import {
  isActiveParent,
  isActiveLink,
  isActiveParentChaild,
} from "../../utils/linkActiveChecker";
import { useRouter } from "next/router";
import MusicMegaMenu from "./MusicMegaMenu";
import ShowsMegaMenu from "./ShowsMegaMenu";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        {/*
      <li
          className={`${isActiveParentChaild(homeItems, router.asPath) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Home</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}
        {/* End home page menu */}

        <li className="menu-item-has-children -has-mega-menu">
          <a href="#">
            <span className="mr-10">Sport</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega" style={{ width: '1000px' }}>
            <CategoriesMegaMenu />
          </div>
        </li>
        <li className="menu-item-has-children -has-mega-menu">
          <a href="#">
            <span className="mr-10">Music</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega" style={{ width: '1000px' }}>
            <MusicMegaMenu />
          </div>
        </li>
        <li className="menu-item-has-children -has-mega-menu">
          <a href="#">
            <span className="mr-10">Shows</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega" style={{ width: '1000px' }}>
            <ShowsMegaMenu />
          </div>
        </li>
        {/* End categories menu items */}

        {/* <li className={router.pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li> */ }
        {/* End Destinatinos single menu */}

        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/blog/blog-list-v2">Blog</Link>
        </li>
        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/others-pages/terms">Terms</Link>
        </li>
        {/* End blogIems */}
        {/*
     <li
          className={`${isActiveParentChaild(pageItems, router.asPath) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Pages</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {pageItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
*/}

        {/* End pages items */}
        {/*
   <li
          className={`${isActiveParentChaild(dashboardItems, router.asPath) ? "current" : ""
            } menu-item-has-children`}
        >
          <a href="#">
            <span className="mr-10">Dashboard</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav ">
            {dashboardItems.map((menu, i) => (
              <li
                key={i}
                className={
                  isActiveLink(menu.routePath, router.asPath) ? "current" : ""
                }
              >
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li> */}


        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;