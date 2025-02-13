import { useNavigation } from "@remix-run/react";
import { useAtom } from "jotai";
import type { MainLayoutProps } from "~/store/store";
import { mainLayoutPropsAtom, mainPanelAtom } from "~/store/store";
import MainPanelContent from "./MainPanelContent";
import MainTabBar from "./MainTabbar";

import { useHydrateAtoms } from "jotai/utils";
import { useEffect } from "react";
import MainNavbar from "./MainNavbar";

export const useMainLayoutProps = (props: MainLayoutProps) => {
  const [, setMainLayoutProps] = useAtom(mainLayoutPropsAtom);
  useHydrateAtoms([[mainLayoutPropsAtom, props]], {
    dangerouslyForceHydrate: typeof document === "undefined",
  });
  useEffect(() => {
    if (typeof document !== "undefined") {
      setTimeout(() => {
        setMainLayoutProps(props);
      }, 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setMainLayoutProps, JSON.stringify(props)]);
};

const MainLayout: React.FC<React.HTMLProps<HTMLDivElement>> = ({
  children,
}) => {
  const [propsAtm] = useAtom(mainLayoutPropsAtom);
  const [mainPanel] = useAtom(mainPanelAtom);

  const navigation = useNavigation();
  const navProgress =
    navigation.state !== "idle" &&
    !(navigation.location?.state?.hideLoader || false);

  return (
    <div>
      <img
        className="pointer-events-none fixed -start-10 top-10 w-full max-w-3xl object-fill blur-3xl"
        src="/images/bg-gradient.svg"
        alt=""
      />
      <img
        className="pointer-events-none fixed bottom-0 end-[-50%] w-full max-w-3xl object-fill opacity-50 blur-3xl"
        src="/images/bg-gradient.svg"
        alt=""
      />
      <div
        className={`fixed start-0 h-screen w-full transform-gpu transition-all duration-300 lg:hidden lg:w-56 ${mainPanel ? `z-50 backdrop-blur-md lg:z-0` : `pointer-events-none scale-105 opacity-0 lg:pointer-events-auto lg:scale-100 lg:opacity-100 ltr:-translate-x-32 lg:ltr:translate-x-0 rtl:translate-x-32 lg:rtl:translate-x-0`}`}
      >
        <MainPanelContent />
      </div>

      {navProgress && (
        <div className="fixed flex h-screen w-screen place-content-center lg:ps-56">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      )}
      <div
        className={`h-screen transform-gpu overflow-hidden transition-all duration-300 ${!navProgress ? "opacity-100" : "opacity-[0.001]"} ${mainPanel ? `pointer-events-none translate-y-[-5%] scale-90 overflow-hidden opacity-20 ltr:translate-x-[5%] rtl:translate-x-[-5%]` : ``}`}
      >
        <div className="pt-16-safe pb-safe ps-safe pe-safe size-full overflow-y-auto overflow-x-hidden">
          {children}
        </div>
      </div>

      <MainNavbar />
      <MainTabBar disabled={propsAtm.tabbarEnabled === false} />
    </div>
  );
};

export default MainLayout;
