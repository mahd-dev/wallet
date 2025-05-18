import { useNavigate, useLocation } from "@remix-run/react";
import {
  IconChartBar,
  IconChevronLeft,
  IconLanguage,
  IconLogin2,
  IconMoneybag,
  IconSmartHome,
  IconUser,
  IconWallet,
  IconList,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { List, ListItem } from "konsta/react";
import { authAtom, localeAtom, mainPanelAtom } from "~/store/store";

export default function MainPanelContent() {
  const [auth] = useAtom(authAtom);
  const [, setMainPanel] = useAtom(mainPanelAtom);
  const [locale, setLocale] = useAtom(localeAtom);
  const navigate = useNavigate();
  const location = useLocation();

  return (
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
          title={"Home"} 
          onClick={(e) => {
            e.preventDefault();
            navigate(`/`);
            setMainPanel(false);
          }}
          linkProps={{ href: "/" }}
        />
        <ListItem
          className="overflow-hidden lg:rounded-e-full"
          media={<IconMoneybag />}
          link
          title={"Transactions"}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/transactions`);
            setMainPanel(false);
          }}
          linkProps={{ href: "/transactions" }}
        />
        {/* Added Budget Section */}
        <ListItem
          className="overflow-hidden lg:rounded-e-full"
          media={<IconWallet />}
          link
          title={"Budget"}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/budget`);
            setMainPanel(false);
          }}
          linkProps={{ href: "/budget" }}
        />
        {/* Added Categories Section */}
        <ListItem
          className="overflow-hidden lg:rounded-e-full"
          media={<IconList />}
          link
          title={"Categories"}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/categorie`);
            setMainPanel(false);
          }}
          linkProps={{ href: "/categorie" }}
        />
        <ListItem
          className="overflow-hidden lg:rounded-e-full"
          media={<IconChartBar />}
          link
          title={"Statistics"}
          onClick={(e) => {
            e.preventDefault();
            navigate(`/statistiques`);
            setMainPanel(false);
          }}
          linkProps={{ href: "/statistiques" }}
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
              navigate(`/login`);
              setMainPanel(false);
            }}
            linkProps={{ href: "/login" }}
          />
        )}
      </List>
      <div></div>
    </div>
  );
}