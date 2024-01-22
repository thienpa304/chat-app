"use client";
import { Icons } from "@/components/icons";
import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFormValues({ name: "", email: "", password: "" });

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoading(false);
      if (!res.ok) {
        setError((await res.json()).message);
        return;
      }

      signIn(undefined, { callbackUrl: "/" });
    } catch (error: any) {
      setLoading(false);
      setError(error);
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="w-full h-screen   bg-slate-200 flex justify-center items-center">
        <div className="w-full max-w-md">
          <div className="w-full h-full relative flex-col justify-start items-start flex gap-4">
            <div className="w-full h-full bg-sky-100 rounded-2xl shadow  " />
            <div className="text-center text-gray-500 text-base font-bold tracking-wide">
              Welcome Back
            </div>

            <div className="w-full h-12 relative">
              <div
                onClick={() => signIn("google", { callbackUrl: "/" })}
                className="cursor-pointer w-12 h-12 p-3 left-0 top-0 absolute bg-sky-100 rounded-3xl shadow  justify-center items-center inline-flex"
              >
                <Icons.google className="w-6 h-6 relative flex-col justify-start items-start flex" />
              </div>
              <div className="w-12 h-12 p-3 left-[72px] top-0 absolute bg-sky-100 rounded-3xl shadow  justify-center items-center inline-flex">
                <Icons.facebook className="w-6 h-6 relative flex-col justify-start items-start flex" />
              </div>
              <div className="w-12 h-12 p-3 left-[144px] top-0 absolute bg-sky-100 rounded-3xl shadow  justify-center items-center inline-flex">
                <Icons.twitter className="w-6 h-6 relative flex-col justify-start items-start flex" />
              </div>
            </div>
            <div className="w-full h-12 justify-center items-center inline-flex">
              <input
                required
                type="name"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Name"
                className="focus:outline-none  w-full h-12 pl-4 pr-44 py-4 bg-sky-100 rounded-2xl shadow-inner justify-start items-center inline-flex"
              />
            </div>
            <div className="w-full h-12 relative">
              <div className="w-full h-12 left-0 top-0 absolute justify-center items-center inline-flex">
                <input
                  required
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="focus:outline-none  w-full h-12 pl-4 pr-44 py-4 bg-sky-100 rounded-2xl shadow-inner justify-start items-center inline-flex"
                />
              </div>
              <div className="w-4 h-4 left-[220px] top-[16px] absolute" />
            </div>
            <div className="w-full h-12 relative">
              <div className="w-full h-12 left-0 top-0 absolute justify-center items-center inline-flex">
                <input
                  required
                  type="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="focus:outline-none  w-full h-12 pl-4 pr-44 py-4 bg-sky-100 rounded-2xl shadow-inner justify-start items-center inline-flex"
                />
              </div>
              <div className="w-4 h-4 left-[220px] top-[16px] absolute" />
            </div>
            {error && <p className="text-red-600">{error}</p>}
            <button type="submit" className="cursor-pointer w-28 h-12 relative">
              <div className="w-28 h-12 left-0 top-0 absolute bg-violet-500 rounded-2xl shadow  first-line:" />
              <div className="w-28 h-12 left-0 top-0 absolute bg-violet-500 bg-opacity-60 rounded-2xl blur-xl" />
              <div className="left-[28px] top-[16px] absolute text-center text-white text-xs font-bold tracking-wide">
                Sign Up
              </div>
            </button>
            <a
              href="/login"
              className="text-center text-gray-500 text-xs font-normal"
            >
              New here? login
            </a>
            <div className="text-center text-gray-500 text-xs font-normal">
              Forgot your password?
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
