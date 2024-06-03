import React, { useState } from "react";
import AppLayout from "../layout/AppLayout";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const credentials = { email, password };
    await login(credentials);
  };
  return (
    <AppLayout>
      <main className="px-24 py-16">
        <div className="bg-white max-w-[45rem] mx-auto px-28 py-20 rounded-lg shadow-md shadow-slate-200">
          <h2 className="text-2xl font-bold uppercase mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-primary-yellow">
            Log into your account
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-7">
              <label
                htmlFor="email"
                className="block font-semibold text-lg text-slate-800 mb-3"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                className="bg-[#f2f2f2] px-3 py-5 w-full text-lg text-slate-800 font-semibold rounded-md placeholder:italic placeholder:text-slate-400 placeholder:text-lg border-none outline-none"
                placeholder="example@email.com"
              />
            </div>
            <div className="mb-7">
              <label
                htmlFor="password"
                className="block font-semibold text-lg text-slate-800 mb-3"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(evt) => setPassword(evt.target.value)}
                className="bg-[#f2f2f2] px-3 py-5 w-full text-md text-slate-800 rounded-md placeholder:text-slate-400 placeholder:text-4xl outline-none border-none"
                placeholder="........"
                required
              />
            </div>
            <div>
              <button
                className="border-none outline-none bg-gradient-to-l from-primary-red to-primary-yellow text-white font-semibold text-lg px-8 py-2 rounded-full uppercase transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-md hover:shadow-slate-400"
                onClick={handleSubmit}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </AppLayout>
  );
};

export default Login;
