import Head from "next/head";
import { HeaderProps } from "../../data-types";

export default function Header({ title }: HeaderProps) {
  return (
    <Head>
      <title>{title} - Slicing TailwindCSS</title>
    </Head>
  );
}
