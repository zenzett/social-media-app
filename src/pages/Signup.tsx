import { Link } from "react-router-dom";

import logo from "src/assets/logo-white.svg";
import galaxy from "src/assets/galaxy-white.svg";
import { ButtonPink } from "components/Button";
import Layout from "components/Layout";
import { useTitle } from "utils/hooks/customHooks";

const Signup = () => {
  useTitle(`Let's sign up!`);
  return (
    <Layout>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink py-10 md:hidden">
        <div className="w-full flex justify-center">
          <img className="w-20" src={logo} alt="logo" />
        </div>
        <div className="w-full flex justify-center">
          <img className="w-20" src={galaxy} alt="logo" />
        </div>
        <div className="my-5 mx-5 border-4 py-5 px-5 rounded-3xl bg-white md:px-5">
          <p className="">Full name :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
            type="text"
            placeholder="Full name"
          />
          <p className="">Username :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
            type="text"
            placeholder="username"
          />
          <p className="">Email :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
            type="text"
            placeholder="yourmail@mail.com"
          />
          <p className="">Password :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
            type="text"
            placeholder="********"
          />
          <p className="">Re-password :</p>
          <input
            className="w-full rounded-full py-2 px-5 border-2 border-gray-500"
            type="text"
            placeholder="********"
          />
          <Link className="flex justify-center mt-7 mb-3" to="/timeline">
            <ButtonPink label="Sign Up" />
          </Link>
          <p className="flex justify-center font-light mb-1">OR</p>
          <span className="flex justify-center text-sm gap-2">
            Have an account?
            <Link className="font-semibold" to="/register">
              Login
            </Link>
          </span>
        </div>
      </section>
      <section className="bg-gradient-to-b from-bgpurple to-bgpink h-full py-16 hidden md:flex md:items-center md:px-10 lg:px-36 xl:px-60">
        <div className="w-1/2 flex flex-col items-center">
          <img src={logo} alt="logo" />
          <img className="w-40" src={galaxy} alt="logo" />
        </div>
        <div className="w-1/2 my-5 mx-16 border-4 py-5 px-10 rounded-3xl bg-white md:px-5">
          <p className="">Full name :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
            type="text"
            placeholder="Full name"
          />
          <p className="">Username :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
            type="text"
            placeholder="username"
          />
          <p className="">Email :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
            type="text"
            placeholder="yourmail@mail.com"
          />
          <p className="">Password :</p>
          <input
            className="w-full rounded-full py-2 px-5 mb-5 border-2 border-gray-500"
            type="text"
            placeholder="********"
          />
          <p className="">Re-password :</p>
          <input
            className="w-full rounded-full py-2 px-5 border-2 border-gray-500"
            type="text"
            placeholder="********"
          />
          <Link className="flex justify-center mt-7 mb-3" to="/timeline">
            <ButtonPink label="Sign Up" />
          </Link>
          <p className="flex justify-center font-light mb-1">OR</p>
          <span className="flex justify-center text-sm gap-2">
            Have an account?
            <Link className="font-semibold" to="/register">
              Login
            </Link>
          </span>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
