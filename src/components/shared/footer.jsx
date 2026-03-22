import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-greenDark text-[#E6DFC1] font-poppins px-0 sm:px-0">
      <div className="max-w-6xl mx-auto">

        
        <div className="flex justify-end gap-8 text-2xl mt-[-6rem] mb-5 pr-10">
          <a
            href="https://twitter.com/GithubSrm"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.linkedin.com/company/githubsrm"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://www.instagram.com/githubsrm"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/SRM-IST-KTR"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <FaGithub />
          </a>
        </div>

        
        <div className="border-t border-[#E6DFC1]/10 mb-8" />

        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-0 pb-8">

         
          <div className="flex justify-center lg:justify-start">
            <img
              src="/logos/final-logo.svg"
              alt="OSSOME Logo"
              className="h-10 sm:h-12 w-auto"
            />
          </div>

          
          <div className="flex gap-6 text-xs sm:text-sm">
            <a
              href="https://github.com/MLH/mlh-policies/blob/main/privacy-policy.md"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </a>

            <a
              href="https://github.com/MLH/mlh-policies/blob/main/contest-terms.md"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;