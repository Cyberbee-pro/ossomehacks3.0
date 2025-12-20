import Image from "next/image";

const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1A6953] px-10 py-6 flex items-center justify-between">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Ossome Hacks"
          width={140}
          height={60}
          priority
        />
      </div>
      <div className="bg-[#EFEACF] rounded-full px-8 py-3 flex gap-8 text-[#2F2F2F] font-medium">
        <button onClick={() => scrollToSection("home")} className="hover:opacity-70">
          Home
        </button>
        <button onClick={() => scrollToSection("themes")} className="hover:opacity-100">
          Themes
        </button>
        <button onClick={() => scrollToSection("timeline")} className="hover:opacity-100">
          Timeline
        </button>
        <button onClick={() => scrollToSection("gallery")} className="hover:opacity-100">
          Gallery
        </button>
        <button onClick={() => scrollToSection("faqs")} className="hover:opacity-100">
          FAQs
        </button>
      </div>

    </nav>
  );
};

export default Navbar;
