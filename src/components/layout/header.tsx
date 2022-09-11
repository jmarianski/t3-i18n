import Head from "./head";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTranslation } from "next-i18next";

const Header = () => {
  const { data: session, status } = useSession();
  const { t } = useTranslation();
  return (
    <>
      <Head />
      {!session && (
        <>
          <span className={""}>{t("You are not signed in")}</span>
          <br />
          <a
            href={`/api/auth/signin`}
            className={"button-primary"}
            onClick={(e) => {
              e.preventDefault();
              signIn();
            }}
          >
            {t("Sign in")}
          </a>
        </>
      )}
    </>
  );
};

export default Header;
