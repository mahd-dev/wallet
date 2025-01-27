import { Outlet } from "@remix-run/react";
import { App as KonstaApp } from "konsta/react";
import MainLayout from "~/layout/MainLayout";

export default function App() {
  return (
    <>
      <KonstaApp
        safeAreas
        // dark={false}
        // theme={data.isIos ? "ios" : "material"}
        // className={`${data.isIos ? "k-ios" : "k-material"} light-theme`}
        theme="ios"
        className={`light-theme k-ios`}
      >
        <MainLayout>
          <Outlet />
        </MainLayout>
        {/* <ScrollRestoration />
        <Scripts /> */}
      </KonstaApp>
    </>
  );
}
