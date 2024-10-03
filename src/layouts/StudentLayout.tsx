import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  Image,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { StudentMenu } from "@/components/Menu/Student_Menu/StudentMenu";

export default function StudentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  useEffect(() => {
    if (mobileOpened) {
      toggleMobile();
    }
  }, [pathname]);

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      padding="md"
    >
      <AppShell.Header className="flex items-center gap-2 px-3">
        <Group h="100%" px="md" w="100%">
          <Burger
            opened={mobileOpened}
            onClick={toggleMobile}
            hiddenFrom="sm"
            size="sm"
          />
          <Burger
            opened={desktopOpened}
            onClick={toggleDesktop}
            visibleFrom="sm"
            size="sm"
          />
          <Link href={"/"}>
            <div className="text-xl font-bold">IPTM Logistics Hub</div>
          </Link>
        </Group>
        {/* {colorScheme === "dark" ? (
            <ActionIcon variant="subtle" onClick={() => setColorScheme("light")}>
              <IconSun size={18} />
            </ActionIcon>
          ) : (
            <ActionIcon variant="subtle" onClick={() => setColorScheme("dark")}>
              <IconMoon size={18} />
            </ActionIcon>
          )} */}
      </AppShell.Header>
      <AppShell.Navbar p="sm">
        <StudentMenu />
      </AppShell.Navbar>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
