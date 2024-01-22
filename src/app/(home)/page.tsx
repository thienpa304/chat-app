import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) redirect("/login");
  return "Home page";
};

export default page;
