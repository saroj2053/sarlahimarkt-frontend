import companyLogo from "../assets/company-logo.png";

const Footer = () => {
  const liStyles =
    "text-slate-400 font-medium cursor-pointer hover:text-orange-600";
  return (
    <div className="w-full bg-slate-800 py-4 z-20">
      <div className="max-w-[90%] py-4 mx-auto flex justify-between items-center ">
        <div className="lg:w-[33%] text-center sm:my-4">
          <h2 className="text-2xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary-yellow to-primary-red">
            SarlahiMarkt
          </h2>
          <p className="text-slate-300 text-sm font-semibold">
            Your Trusted Local Online Marketplace
          </p>
        </div>

        <div className="w-14 h-14 ">
          <img src={companyLogo} alt="" />
        </div>
        <div className="flex flex-col">
          <ul className="flex gap-4 hover:text-orange-600 text-sm">
            <li className={liStyles}>About Us</li>
            <li className={liStyles}>Download apps</li>
            <li className={liStyles}>Become a seller</li>
            <li className={liStyles}>Careers</li>
            <li className={liStyles}>Contact</li>
          </ul>
          <div>
            <p className="py-4 text-slate-300 text-base text-right">
              &copy;{" "}
              <span className="font-medium text-slate-300">
                {new Date().getFullYear()}
              </span>{" "}
              by{" "}
              <a
                href="https://github.com/saroj2053"
                target="_blank"
                className="hover:underline hover:text-orange-600"
              >
                Saroj Sah.
              </a>{" "}
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
