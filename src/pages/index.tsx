import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "@/utils/api";
import { type GetServerSideProps } from "next";
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // const token = await getToken({
  //     req: ctx.req,
  //     secret: env.NEXTAUTH_SECRET,
  // })
  // if (token?.role) {
  return {
    redirect: {
      permanent: false,
      destination: `/STUDENT`,
    },
    props: {},
  };
  // }
  // return {
  //   props: {},
  // };
};

export default function Home() {

  return (
    <>
     
    </>
  );
}
