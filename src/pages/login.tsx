import { Button, CloseButton, Input } from "@mantine/core";
import { type NextPage } from "next";
import { useState } from "react";
import { LockKeyhole, User } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

const Login: NextPage<Props> = () => {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();
  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="z-10 flex flex-col gap-5 rounded-2xl border border-sky-400 bg-white bg-opacity-70 px-8 py-10 backdrop-blur-sm md:px-16">
          <div className="flex items-center justify-center gap-4">
            <div className="">
              <img className="h-24 w-24" src="/assets/iptm-logo.png" />
            </div>
            <div className="flex flex-col justify-around">
              <div className="flex gap-3">
                <span className="text-primary text-4xl font-bold leading-10">
                  IPTM Logistics Online
                </span>
              </div>
              <div className="flex font-medium text-neutral-700">
                ระบบบริหารจัดการพัสดุออนไลน์
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Input
              placeholder="Username"
              value={value}
              onChange={(event) => setValue(event.currentTarget.value)}
              rightSectionPointerEvents="all"
              mt="md"
              size="lg"
              leftSection={<User size={16} />}
              rightSection={
                <CloseButton
                  aria-label="Clear input"
                  onClick={() => setValue("")}
                  style={{ display: value ? undefined : "none" }}
                />
              }
            />
            <Input
              placeholder="Password"
              value={password}
              type="password"
              onChange={(event) => setPassword(event.currentTarget.value)}
              rightSectionPointerEvents="all"
              mt="md"
              size="lg"
              leftSection={<LockKeyhole size={16} />}
              rightSection={
                <CloseButton
                  aria-label="Clear input"
                  onClick={() => setPassword("")}
                  style={{ display: password ? undefined : "none" }}
                />
              }
            />
            <Button
              size="lg"
              fullWidth
              color="orange"
              onClick={() => {
                void router.push('/')
              }}
            >
              Login
            </Button>
            <div className="flex w-full items-center gap-5">
              <div className="h-[1px] w-full bg-black"></div>
              <div className="flex-1">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-300 text-white">
                  OR
                </div>
              </div>
              <div className="h-[1px] w-full bg-black"></div>
            </div>
            <Link href="/register">
              <div className="text-center">Register</div>
            </Link>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 z-0">
          <img
            src="/assets/sky-wave.svg"
            className="h-[80vh] w-full sm:h-[70vh] lg:h-full"
            alt="sky wave background"
          />
        </div>
      </div>
    </>
  );
};

export default Login;
