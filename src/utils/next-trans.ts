import { serverSideTranslations } from "next-i18next/serverSideTranslations";
export function mergeStaticPropsWithTrans(
  callback?: (props: any) => any,
  namespaces?: Array<string>,
) {
  return async function getStaticProps(props: { locale: string }) {
    const { locale } = props;
    const staticProps = callback ? callback(props) : { props: {} };
    if (staticProps.props) {
      const { props, ...other } = staticProps;
      return {
        ...other,
        props: {
          ...(await serverSideTranslations(locale, namespaces)),
          ...props,
        },
      };
    }

    return staticProps;
  };
}

export async function getStaticPropsWithTrans({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
