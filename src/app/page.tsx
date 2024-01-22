import Header from "@/components/header.component";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  if (!user) redirect("/login");
  return (
    <div>
      <Header />
      welcome {user.name}
    </div>
  );
};

export default page;
