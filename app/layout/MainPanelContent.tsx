// import { useNavigate } from "@remix-run/react";
// import {
//   IconChevronLeft,
//   IconLanguage,
//   IconLogin2,
//   IconSearch,
//   IconSmartHome,
//   IconUser,
// } from "@tabler/icons-react";
// import { useAtom } from "jotai";
// import { List, ListItem } from "konsta/react";
// import { authAtom, localeAtom, mainPanelAtom } from "~/store/store";

import { useNavigate } from "@remix-run/react";
import {
  IconBookmarks,
  IconChevronLeft,
  IconListCheck,
  IconLogin2,
  IconSmartHome,
  IconUser,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { List, ListItem } from "konsta/react";
import { authAtom, mainPanelAtom } from "~/store/store";

export default function MainPanelContent() {
  const [auth] = useAtom(authAtom);

  const [, setMainPanel] = useAtom(mainPanelAtom);

  // const [locale, setLocale] = useAtom(localeAtom);

  const navigate = useNavigate();

  return (
    // <div
    //   className={`pt-safe pb-safe ps-safe pe-safe flex h-full flex-col place-content-between`}
    // >
    <div className="flex h-full flex-col place-content-between">
      <div>
        <button
          onClick={() => setMainPanel(false)}
          className="lg:hidden"
          aria-label={"Menu"}
        >
          <IconChevronLeft size={32} className="m-4" />
        </button>
      </div>
      <List>
        <ListItem
          className="overflow-hidden lg:rounded-e-full"
          media={<IconSmartHome />}
          link
          title={"Accueil"}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/`);
            setMainPanel(false);
          }}
          linkProps={{ href: "/" }}
        />
        <ListItem
          className="overflow-hidden lg:rounded-e-full"
          media={<IconListCheck />}
          link
          title={"Mes Commandes"}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/my-orders`);
            setMainPanel(false);
          }}
          linkProps={{ href: "/my-orders" }}
        />
        <ListItem
          className="overflow-hidden lg:rounded-e-full"
          media={<IconBookmarks />}
          link
          title={"mes favoris"}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/favorites`);
            setMainPanel(false);
          }}
          linkProps={{ href: "/favorites" }}
        />
        {auth && (
          <>
            <ListItem
              className="overflow-hidden lg:rounded-e-full"
              media={<IconUser />}
              link
              title={"Profile"}
              onClick={(e) => {
                e.preventDefault();
                navigate(`/profile`);
                setMainPanel(false);
              }}
              linkProps={{ href: "/profile" }}
            />
          </>
        )}
        {!auth && (
          <ListItem
            className="overflow-hidden lg:rounded-e-full"
            media={<IconLogin2 />}
            link
            title={"Signin"}
            onClick={(e) => {
              e.preventDefault();
              navigate(`/auth`);
              setMainPanel(false);
            }}
            linkProps={{ href: "/auth" }}
          />
        )}
      </List>
      <div>
        {/* <form className="mx-3 mb-3 flex text-sm">
          <label htmlFor="lang">
            <IconLanguage />
          </label>
          <div className="w-4"></div>
          <select
            className="flex-1 bg-transparent"
            id="lang"
            value={locale}
            onChange={(e) => {
              document.cookie = `locale=${e.currentTarget.value}; secure; SameSite=Strict; expires=Thu, 01 Jan 10000 00:00:00 UTC; path=/;`;
              setLocale(e.currentTarget.value);
            }}
          >
            <option value={"en"}>English</option>
            <option value={"fr"}>Français</option>
          </select>
        </form> */}
      </div>
    </div>
  );
}
