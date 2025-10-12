import { redirect } from "next/navigation";

export default async function Home({ params }: any) {
  const { lang } = await params;

  redirect(`/${lang}/authentication/sign-in`);
}
