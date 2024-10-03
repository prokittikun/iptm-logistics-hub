import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import '@mantine/carousel/styles.css';
import {
  createTheme as createMantineTheme,
  MantineProvider,
  virtualColor,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import AppLayout from "@/layouts/StudentLayout";
import StudentLayout from "@/layouts/StudentLayout";
import { useRouter } from "next/router";

const themeMantine = createMantineTheme({
  colors: {
    primary: [
      "#a2d9ff",
      "#a2d9ff",
      "#a2d9ff",
      "#a2d9ff",
      "#a2d9ff",
      "#a2d9ff",
      "#a2d9ff",
      "#a2d9ff",
      "#a2d9ff",
      "#a2d9ff",
    ],
    secondary: [
      "#B2BB1C",
      "#B2BB1C",
      "#B2BB1C",
      "#B2BB1C",
      "#B2BB1C",
      "#B2BB1C",
      "#B2BB1C",
      "#B2BB1C",
      "#B2BB1C",
      "#B2BB1C",
    ],
  },
  primaryColor: "primary",
  fontFamily: "Noto Sans Thai",
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const { asPath, pathname, back } = useRouter();

  const exceptGlobal = ["/login", "/404", "/error"];

  const RenderLayout = (path: string, children: JSX.Element) => {
    const mapLayout = [
      {
        startSlug: "/STUDENT",
        except: [...exceptGlobal],
        layout: (children: JSX.Element) => {
          return <StudentLayout>{children}</StudentLayout>;
        },
      },
      {
        startSlug: "/SAB",
        except: [...exceptGlobal],
        layout: (children: JSX.Element) => {
          return <>{ children }</>;
        },
      },
      {
        startSlug: "/",
        except: [...exceptGlobal],
        layout: (children: JSX.Element) => {
          return <>{children}</>;
        },
      },
    ];

    for (const layout of mapLayout) {
      if (path.startsWith(layout.startSlug)) {
        let isRenderNull = false;

        if (layout.except) {
          for (const except of layout.except) {
            if (path.startsWith(except)) {
              isRenderNull = true;
              return <>{children}</>;
            }
          }
        }
        if (!isRenderNull) {
          return layout.layout(children);
        }

        return <>{children}</>;
      }
    }
  };

  return (
    <MantineProvider theme={themeMantine}>
      <ModalsProvider>
        <SessionProvider session={session}>
          <div className={GeistSans.className}>
            {RenderLayout(pathname, <Component {...pageProps} />)}
          </div>
        </SessionProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default api.withTRPC(MyApp);
