import { Link, useLocation, useNavigate } from "@remix-run/react";
import {
  IconBell,
  IconLogin2,
  IconMenu3,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import {
  Icon,
  Button as KButton,
  Link as KLink,
  Popover as KPopover,
} from "konsta/react";
import { useRef, useState } from "react";

import {
  authAtom,
  cartAtom,
  mainLayoutPropsAtom,
  mainPanelAtom,
} from "~/store/store";

const menu = [
  { path: "/", name: "Accueil" },
  // { path: "/promotions", name: "Promotions", barge: 2 },
  { path: "/my-orders", name: "Mes Commandes" },
  { path: "/favorites", name: "Liste de souhaits" },
  { path: "/about", name: "à propos de nous" },
];

export default function MainNavbar() {
  const [auth] = useAtom(authAtom);
  const [mainPanel, setMainPanel] = useAtom(mainPanelAtom);
  const [propsAtm] = useAtom(mainLayoutPropsAtom);
  const location = useLocation();

  const [cart] = useAtom(cartAtom);
  const cartPopoverRef = useRef(null);
  const [cartPopover, setCartPopoverOpened] = useState<boolean>(false);
  const openCartPopover = (targetRef: any) => {
    cartPopoverRef.current = targetRef;
    setCartPopoverOpened(true);
  };

  const navigate = useNavigate();

  return (
    <>
      {/* <nav className="fixed top-0 z-40 hidden w-full max-w-full border-b bg-white antialiased lg:block">
        <div className="mx-auto max-w-screen-xl p-4 2xl:px-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="/" title="">
                  <img
                    className="block h-8 w-auto"
                    src="/logo.svg"
                    alt="Logo"
                  />
                </a>
              </div>

              <ul className="hidden items-center gap-6 py-3 md:gap-8 lg:flex">
                <li className="shrink-0">
                  <a
                    href={`/`}
                    // className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                    className={`text-sm font-medium ${
                      location.pathname === `/`
                        ? "text-primary"
                        : "text-gray-900"
                    } hover:text-primary-700`}
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-center lg:space-x-2">
              <KLink
                navbar
                iconOnly
                className="notif-btn cartpopover-navbar-link ios:me-5"
                component="span"
                onClick={() => openCartPopover(".cartpopover-navbar-link")}
              >
                <Icon
                  ios={<IconShoppingCart />}
                  material={<IconShoppingCart />}
                  badge={
                    cart.length ? (
                      <span style={{ marginTop: 4 }}>{cart.length || 0}</span>
                    ) : null
                  }
                />
              </KLink>

              {auth ? (
                <KLink navbar iconOnly component="span">
                  <Icon ios={<IconUser />} material={<IconUser />} />
                </KLink>
              ) : (
                <>
                  {!location.pathname.startsWith("/auth") && (
                    <Link to={`/auth/signin?next=${location.pathname}`}>
                      <KLink navbar iconOnly component="span">
                        <IconLogin2 className="mt-2" />
                      </KLink>
                    </Link>
                  )}
                </>
              )}

              <button
                type="button"
                aria-controls="ecommerce-navbar-menu-1"
                // aria-expanded={mobileMenuOpen}
                onClick={() => {
                  // setMobileMenuOpen((prev) => !prev);
                  setMainPanel(true);
                }}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-100 lg:hidden"
              >
                <span className="sr-only">Open Menu</span>
                <svg
                  className="size-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav> */}
      <nav className="fixed start-0 top-0 z-20 hidden w-full border-b border-gray-200 bg-white lg:block">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.svg" className="absolute h-12" alt="GCI" />
          </a>
          <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
            <Icon
              onClick={() => openCartPopover(".cartpopover-navbar-link")}
              // className="notif-btn  ios:me-5"
              className="cartpopover-navbar-link hover:text-secondary mx-3 mr-6 mt-2 text-gray-800"
              ios={<IconShoppingCart />}
              material={<IconShoppingCart />}
              badge={
                cart.length ? (
                  <span style={{ marginTop: 4 }}>{cart.length || 0}</span>
                ) : null
              }
            />
            <button
              type="button"
              onClick={() => navigate("/auth")}
              className="bg-secondary rounded-lg px-4 py-2 text-center text-sm font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-300"
            >
              <IconLogin2 className="inline w-4" /> Login
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="mt-1 flex flex-row rounded-lg border bg-white p-0 font-medium md:space-x-8 md:border-0 rtl:space-x-reverse">
              {menu.map((m, indx) => {
                return (
                  <li key={`menu-${indx}`}>
                    <Link
                      to={m.path}
                      className={`hover:text-secondary text-gray-800 ${location.pathname === m.path ? "text-secondary" : ""}`}
                    >
                      {m.name}
                      {/* {m.barge ? (
                        <Badge
                          className="!-mt-2 ml-1 pt-1"
                          colors={{ bg: "bg-green-500" }}
                        >
                          {m.barge}
                        </Badge>
                      ) : null} */}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>

      {/* ************************* MOBILE VIEW */}
      <div
        className={`fixed top-0 z-20 flex w-full max-w-full flex-nowrap items-center transition-opacity lg:hidden`}
      >
        <div className="material:from-[#F4EEEB] material:via-[#F4EEEB]/90 ios:from-[#F5F5F8] ios:via-[#F5F5F8]/95 material:dark:from-[#17140C] material:dark:via-[#17140C]/95 ios:dark:from-[#0E0E0E] ios:dark:via-[#0E0E0E]/90 absolute inset-x-0 top-0 -z-10 h-10 w-full bg-gradient-to-b via-30% to-transparent" />

        <button
          className={`relative ${mainPanel ? "opacity-0" : ""}`}
          onClick={() => {
            setMainPanel(true);
          }}
        >
          <div
            className="absolute inset-0 -z-10 rounded-full backdrop-blur-md"
            style={{
              maskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
              WebkitMaskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
            }}
          />
          <IconMenu3 stroke={1.75} size={32} className="m-4" />
          {/* <img src="/logo.svg" alt="" className="m-4 w-10" /> */}
        </button>
        <Link
          to={propsAtm.navbarLink || ""}
          className={`grow overflow-x-hidden ${mainPanel ? "opacity-0" : ""}`}
        >
          <div className="mt-2 text-2xl">
            {/* <img src="/logo.svg" alt="" className="w-10" /> */}
            <h1 className="truncate">{propsAtm.navbarTitle}</h1>
            <div
              className="absolute -inset-x-16 -inset-y-4 -z-10 rounded-full backdrop-blur-md"
              style={{
                maskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
                WebkitMaskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
              }}
            />
          </div>
        </Link>

        <Icon
          className="cartpopover-navbar-link-mobile mr-2"
          onClick={() => openCartPopover(".cartpopover-navbar-link-mobile")}
          ios={<IconShoppingCart />}
          material={<IconShoppingCart />}
          badge={
            cart.length ? (
              <span style={{ marginTop: 4 }}>{cart.length || 0}</span>
            ) : null
          }
        />

        {auth?.sub ? (
          <Link
            className={`relative ${mainPanel ? "opacity-0" : ""}`}
            to="/notifications"
          >
            <div
              className="absolute inset-0 -z-10 rounded-full backdrop-blur-md"
              style={{
                maskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
                WebkitMaskImage: `radial-gradient(closest-side ,black 40%, transparent)`,
              }}
            />
            <IconBell stroke={1.5} size={28} className="m-4" />
          </Link>
        ) : null}

        {auth ? (
          <Link to="/profile">
            <Icon ios={<IconUser />} material={<IconUser />} />
          </Link>
        ) : (
          <>
            {!location.pathname.startsWith("/auth") && (
              <Link to={`/auth/signin?next=${location.pathname}`}>
                <Icon
                  className="cartpopover-navbar-link-mobile mx-2 mt-1"
                  ios={<IconLogin2 />}
                  material={<IconLogin2 />}
                />
              </Link>
            )}
          </>
        )}
      </div>

      <KPopover
        opened={cartPopover}
        target={cartPopoverRef.current}
        onBackdropClick={() => setCartPopoverOpened(false)}
        className="z-50"
      >
        <div className="z-[99999] space-y-4 overflow-hidden p-4">
          {cart.length ? (
            <></>
          ) : (
            <span className="my-3 block text-center text-gray-400">
              Cart is currently empty
            </span>
          )}

          {cart.length && location.pathname !== "/cart" ? (
            <>
              <KButton>Proceed to Checkout</KButton>
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  or&nbsp;
                </span>
                <Link
                  to="/cart"
                  title=""
                  className="text-primary-700 dark:text-primary-500 inline-flex items-center gap-2 text-sm font-medium underline hover:no-underline"
                >
                  <KLink>View Cart</KLink>
                  <svg
                    className="size-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"
                    />
                  </svg>
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </KPopover>
    </>
  );
}
