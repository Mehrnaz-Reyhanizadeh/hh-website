import { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";
import Image from "next/image";
import name_and_logo from "../../styles/images/name_and_logo.svg";
import navIcon from "../../styles/images/navIcon.svg";
import { useRouter } from "next/router";

function Navbar() {
  const router = useRouter();
  const active = router.pathname;
  const [activeIcon, useIconActive] = useState(false);

  return (
    <>
      <nav
        id="navId"
        className={` navbar navbar-expand-lg bg-white navbar navbar-expand-lg justify-content-between py-1 px-2`}
      >
        <button
          onClick={() => useIconActive(!activeIcon)}
          className={`navbar-toggler ${
            activeIcon === true
              ? `${styles.navButtonActive}`
              : `${styles.navButton}`
          }`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="">
          <Link className="text-dark navbar-brand ml-3" href="/">
            <Image
              src={name_and_logo}
              alt="hoseein hekmati logo"
              className={styles.navLogo}
            />
          </Link>
        </div>
        <ul
          dir="rtl"
          className={`
         
          ${styles.myNavbarCollapseStyle} navbar-nav w-75 collapse navbar-collapse mr-2`}
          id="navbarNavAltMarkup"
        >
          <li className={`${styles.navBorder} d-inline-block d-lg-none`}></li>
          <li
            className={`d-inline-block mx-0 mx-lg-5 d-lg-none ${styles.navTitleSM}`}
          >
            <Link
              className={`${
                active === "/" && `${styles.navTitleSMActive}`
              } }  ${styles.navTitleSM}`}
              href="/"
            >
              Mainpage
            </Link>
          </li>
          <li
            className={`d-inline-block mx-0 mx-lg-5 d-lg-none ${styles.navTitleSM}`}
          >
            <Link
              className={`${
                active === "/certificates" && `${styles.navTitleSMActive}`
              } }  ${styles.navTitleSM}`}
              href="/certificates"
            >
              My Certificates
            </Link>
          </li>
          <li
            className={`d-inline-block mx-0 mx-lg-5 d-lg-none ${styles.navTitleSM}`}
          >
            <Link
              className={`${
                active === "/portfolio" && `${styles.navTitleSMActive}`
              } }  ${styles.navTitleSM}`}
              href="/portfolio"
            >
              My portfolio
            </Link>
          </li>
          <li
            className={`d-none d-lg-inline-block nav-item mx-0 mx-lg-5 font-nav ${styles.fontNav}`}
          >
            <Link
              className={`${
                active === "/certificates" && `${styles.navMarginActive}`
              } }  ${styles.navLinkStyle}`}
              href="/certificates"
            >
              Certificates
            </Link>
            {active === "/certificates" && (
              <div className={` ${styles.navLinkActive} `}></div>
            )}
          </li>
          <li
            className={`d-none d-lg-inline-block nav-item  mx-0 mx-lg-5 font-nav ${styles.fontNav}`}
          >
            <Link
              className={`${
                active === "/portfolio" && `${styles.navMarginActive}`
              } }  ${styles.navLinkStyle}`}
              href="/portfolio"
            >
              PORTFOLIO
            </Link>
            {active === "/portfolio" && (
              <div className={` ${styles.navLinkActive}`}></div>
            )}
          </li>
          <li
            className={`d-none d-lg-inline-block nav-item mx-0 mx-lg-5 font-nav ${styles.fontNav}`}
          >
            <Link
              className={`${active === "/" && `${styles.navMarginActive}`} }  ${
                styles.navLinkStyle
              }`}
              href="/"
            >
              Home
            </Link>
            {active === "/" && (
              <div className={` ${styles.navLinkActive}`}></div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
