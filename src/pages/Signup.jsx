import { useState } from "react";
import AppLayout from "../layout/AppLayout";
import useSignup from "../hooks/useSignup";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };
  const handleToggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const { loading, signup } = useSignup();

  const signupHandler = async (evt) => {
    evt.preventDefault();
    await signup(inputs);
  };
  return (
    <AppLayout>
      <main className="px-8 py-20">
        <div className="bg-white sm:w-[100%] md:w-[70%] lg:w-[50%] mx-auto px-12 py-12 rounded-lg shadow-md shadow-slate-200">
          <h2 className="text-2xl font-semibold  uppercase mb-10 tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-primary-red to-primary-yellow">
            Create Your Account!
          </h2>
          <form onSubmit={signupHandler}>
            <div className="mb-7">
              <label
                htmlFor="name"
                className="block font-medium text-slate-800 mb-3"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={inputs.name}
                onChange={(evt) =>
                  setInputs({ ...inputs, name: evt.target.value })
                }
                className="bg-[#f2f2f2] px-3 py-5 w-full text-base text-slate-800 font-medium rounded-md placeholder:text-slate-400 placeholder:text-sm border-none outline-none"
                placeholder="john doe"
                required
              />
            </div>
            <div className="mb-7">
              <label
                htmlFor="email"
                className="block font-medium text-slate-800 mb-3"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={inputs.email}
                onChange={(evt) =>
                  setInputs({ ...inputs, email: evt.target.value })
                }
                className="bg-[#f2f2f2] px-3 py-5 w-full text-base text-slate-800 font-medium rounded-md placeholder:text-slate-400 placeholder:text-sm border-none outline-none"
                placeholder="johndoe@email.com"
                required
              />
            </div>
            <div className="mb-7 relative">
              <label
                htmlFor="password"
                className="block font-medium text-slate-800 mb-3"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={inputs.password}
                onChange={(evt) =>
                  setInputs({ ...inputs, password: evt.target.value })
                }
                className="bg-[#f2f2f2] px-3 py-5 w-full text-base font-normal text-slate-800 rounded-md placeholder:text-slate-400 placeholder:text-4xl outline-none border-none"
                placeholder="........"
                required
              />
              <span
                className="absolute right-4 bottom-4 text-base font-normal bg-slate-600 px-3 py-0.5 rounded-md text-slate-100 cursor-pointer"
                onClick={handleToggleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
            <div className="mb-7 relative">
              <label
                htmlFor="confirmPassword"
                className="block font-medium text-slate-800 mb-3"
              >
                Confirm Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={inputs.passwordConfirm}
                onChange={(evt) =>
                  setInputs({ ...inputs, passwordConfirm: evt.target.value })
                }
                className="bg-[#f2f2f2] px-3 py-5 w-full text-base font-normal text-slate-800 rounded-md placeholder:text-slate-400 placeholder:text-4xl outline-none border-none"
                placeholder="........"
                required
              />
              <span
                className="absolute right-4 bottom-4 text-base font-normal bg-slate-600 px-3 py-0.5 rounded-md text-slate-100 cursor-pointer"
                onClick={handleToggleShowConfirmPassword}
              >
                {showConfirmPassword ? "Hide" : "Show"}
              </span>
            </div>
            <div>
              <button
                className="border-none outline-none bg-gradient-to-l from-primary-red to-primary-yellow text-white font-normal text-base px-8 py-2 rounded-full uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm hover:shadow-slate-300"
                onClick={signupHandler}
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </div>
          </form>
        </div>
      </main>
    </AppLayout>
  );
};

export default Signup;
