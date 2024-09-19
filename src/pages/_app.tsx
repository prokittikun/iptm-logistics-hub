import { GeistSans } from "geist/font/sans";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { type AppType } from "next/app";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import {
  createTheme as createMantineTheme,
  MantineProvider,
  virtualColor,
} from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";

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
  return (
    <MantineProvider theme={themeMantine}>
      <ModalsProvider>
        <SessionProvider session={session}>
          <div className={GeistSans.className}>
            <Component {...pageProps} />
          </div>
        </SessionProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default api.withTRPC(MyApp);
