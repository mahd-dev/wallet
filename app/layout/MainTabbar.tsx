import { Link, useLocation } from "@remix-run/react";
import {
  IconChartBar,
  IconList,
  IconMoneybag,
  IconSmartHome,
  IconWallet,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { Badge } from "konsta/react";
import { ReactNode } from "react";
import { favsAtom, mainPanelAtom } from "~/store/store";

const maskImage = `radial-gradient(closest-side ,black 40%, transparent)`;

const TabBarItem = (props: {
  to: string;
  icon: ReactNode;
  label: string | JSX.Element;
  active: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link
      to={props.to}
      className={`flex flex-col items-center transition-colors duration-300 ${props.active ? "text-primary" : ""}`}
    >
      <div className="relative">
        {props.icon}
        <div
          className={`absolute -inset-2 -z-10 rounded-lg backdrop-blur-md transition-colors duration-300 ${props.active ? "bg-primary/10" : ""}`}
          style={{ maskImage, WebkitMaskImage: maskImage }}
        />
      </div>
      <span className="relative text-[0.7rem]">
        {props.label}
        <div
          className={`absolute -inset-x-4 -inset-y-1 -z-10 rounded-sm backdrop-blur-md transition-colors duration-300 ${props.active ? "bg-primary/10" : ""}`}
          style={{ maskImage, WebkitMaskImage: maskImage }}
        />
      </span>
    </Link>
  );
};

const MainTabBar = (props: { disabled?: boolean }) => {
  const location = useLocation();
  const [mainPanel] = useAtom(mainPanelAtom);

  const [favs] = useAtom(favsAtom);

  return (
    <div
      className={`fixed bottom-0 z-20 flex w-full flex-row flex-nowrap justify-center gap-4 transition-[transform,opacity] duration-300 lg:hidden ${
        mainPanel || props.disabled
          ? "pointer-events-none translate-y-[200%]"
          : ""
      }`}
    >
      {/* <div
      className={`fixed bottom-0 z-20 flex w-full flex-row flex-nowrap justify-center gap-4 transition-[transform,opacity] duration-300 lg:hidden ${mainPanel || props.disabled ? "pointer-events-none translate-y-[200%]" : ""}`}
    > */}
      <div
        className="pointer-events-none absolute inset-x-[-40%] -bottom-10 -top-8 backdrop-blur-sm"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      />
      <div
        className="pointer-events-none absolute inset-x-[-40%] -bottom-20 -top-0 backdrop-blur-sm"
        style={{ maskImage, WebkitMaskImage: maskImage }}
      />
      <TabBarItem
        active={location.pathname === "/"}
        icon={<IconSmartHome stroke={1} size={32} />}
        label={"Home"}
        to="/"
      />
      <TabBarItem
        active={location.pathname.startsWith("/transaction")}
        icon={<IconMoneybag stroke={1} size={32} />}
        label={"Transactions"}
        to="/transactions"
      />

      <TabBarItem
        active={location.pathname.startsWith("/statistiques")}
        icon={
          // <Icon
          //   ios={<IconBookmarks stroke={1} size={32} />}
          //   material={<IconBookmarks stroke={1} size={32} />}
          //   badge={favs?.length || undefined}
          //   className="!h-8"
          //   style={{height: "25px !important", width: 25, overflow: "hidden"}}
          // />
          <div className="relative !size-8">
            <IconChartBar stroke={1} size={32} />
            {favs?.length ? (
              <Badge className="absolute -right-2 -top-2">
                {favs?.length || undefined}
              </Badge>
            ) : null}
          </div>
        }
        label={"Statistics"}
        to="/statistiques"
      />

      <TabBarItem
        active={location.pathname.startsWith("/Categorie")}
        icon={<IconList stroke={1} size={32} />}
        label={"categories"}
        to="/categorie"
      />

    </div>
    
  );
};

export default MainTabBar;
