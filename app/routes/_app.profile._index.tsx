import { useNavigate } from "@remix-run/react";
import {
  IconLogout,
  IconShield,
  IconUserEdit,
  IconUserShield,
} from "@tabler/icons-react";
import { useAtom } from "jotai";
import { Block, Dialog, DialogButton, List, ListItem } from "konsta/react";
import { useState } from "react";
import { useMainLayoutProps } from "~/layout/MainLayout";
import { authAtom, dirAtom } from "~/store/store";

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const url = new URL(request.url);

//   await authenticator.isAuthenticated(request, {
//     failureRedirect: `/auth?next=${`${url.pathname}${url.search}${url.hash}`}`,
//   });

//   return {
//     zitadelUrl: process.env.ZITADEL_HOST,
//   };
// };

export default function ProfilePage() {
  const [dir] = useAtom(dirAtom);
  // const location = useLocation();
  const [auth] = useAtom(authAtom);
  // const { zitadelUrl } = useLoaderData<typeof loader>();

  useMainLayoutProps({ navbarTitle: "My Profile" });

  const navigate = useNavigate();

  // const [profile] = useAtom(profileAtom);
  // const [auth] = useAtom(authAtom);

  const [logoutDialog, setLogoutDialog] = useState(false);

  // const [, rmDevice] = useMutation(
  //   gql(`
  //     mutation RmUserToken($userId: String!, $token: String!) {
  //       deleteUserDevice(input: {userId: $userId, token: $token}) {
  //         clientMutationId
  //         deletedUserDeviceNodeId
  //       }
  //     }
  //   `)
  // );

  return (
    <Block className="!my-0 mx-auto flex max-w-3xl flex-col md:flex-row">
      <div className="flex flex-col items-center gap-1">
        <div className="avatar mb-3">
          <div className="mask mask-squircle size-24">
            <img src={"/images/avatar-man.png"} alt={""} />
          </div>
        </div>
        <h3 className="text-xl">{auth?.firstName}</h3>
        <span>{auth?.email}</span>
      </div>
      <div className="w-7"></div>
      <List strong inset className="flex-1 md:my-0">
        <ListItem
          title={"Edit my profile"}
          media={<IconUserEdit />}
          link
          onClick={(e) => {
            e.preventDefault();
            navigate("/profile/edit");
          }}
          linkProps={{ href: "/profile/edit" }}
        />
        {/* <ListItem
            title={t("profile.linktoNotifications")}
            media={<i className="las la-bell" />}
            link
          /> */}
        <ListItem
          title={"Security"}
          media={<IconShield />}
          link
          // linkProps={{ href: zitadelUrl }}
        />
        <ListItem
          title={"Privacy Policy"}
          media={<IconUserShield />}
          link
          onClick={(e) => {
            e.preventDefault();
            navigate("/legal/terms");
          }}
          linkProps={{ href: "/legal/terms" }}
        />
        {/* <ListItem
          title={"Invite Friends"}
          media={<IconUserShare />}
          link
          onClick={async () => {
            await WebShareLink(location.pathname, "Invitation", "Join us");
          }}
        /> */}
        <ListItem
          title={"Logout"}
          media={
            <IconLogout className={`${dir === "ltr" ? "-scale-x-100" : ""}`} />
          }
          link
          chevronIos={false}
          chevronMaterial={false}
          onClick={async () => {
            setLogoutDialog(true);
          }}
        />
        <Dialog
          opened={logoutDialog}
          onBackdropClick={() => setLogoutDialog(false)}
          title={"Confirm logout"}
          content={"Are you sure to want to logout ?"}
          buttons={
            <>
              <DialogButton strong onClick={() => setLogoutDialog(false)}>
                No
              </DialogButton>
              <DialogButton
                onClick={async () => {
                  // const deviceToken = localStorage?.getItem("deviceToken");
                  // if (deviceToken) {
                  //   await rmDevice({
                  //     token: deviceToken,
                  //     userId: auth?.sub || "",
                  //   });
                  // }

                  // localStorage?.removeItem("deviceToken");

                  navigate(`/auth/logout`);
                  setLogoutDialog(false);
                }}
              >
                Log me out
              </DialogButton>
            </>
          }
        />
      </List>
    </Block>
  );
}
