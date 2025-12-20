export default function ContactSection() {
  return (
    <section className="bg-greenDark px-4 sm:px-6 md:px-10 py-16 sm:py-20 font-poppins flex justify-center">
      <form
    action="https://octacore.githubsrmist.in/api/contact"
    method="POST"
    >
       
      <div className="w-full max-w-6xl text-[#E6DFC1]">

       
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mb-12">
          <div>
            <label className="text-black text-sm mb-2 block font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full bg-transparent border-b border-[#E6DFC1]/60 outline-none py-2"
            />
          </div>

          <div>
            <label className="text-black text-sm mb-2 block font-medium">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full bg-transparent border-b border-[#E6DFC1]/60 outline-none py-2"
            />
          </div>

          <div>
            <label className="text-black text-sm mb-2 block font-medium">
              Phone Number (optional)
            </label>
            <input
              type="text"
              name="phone"
              className="w-full bg-transparent border-b border-[#E6DFC1]/60 outline-none py-2"
            />
          </div>
        </div>

        
        <div className="mb-12">
          <label className="text-black text-sm mb-2 block font-medium">
            Message
          </label>
          <textarea
           name="message"
            required
            className="w-full bg-transparent border-b border-[#E6DFC1]/60 outline-none py-2 h-28 resize-none"
          />
        </div>

        
        <div className="mb-12">
          <button 
          type="submit"className="bg-[#FFC627] text-black px-10 py-4 rounded-full font-semibold">
            Leave us a Message →
          </button>
        </div>

       
        <div className="text-center mb-6">
          <a
            href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md"
            target="_blank"
            rel="noopener noreferrer"
            className="underline tracking-wide text-[#E6DFC1]"
          >
            CODE OF CONDUCT
          </a>
        </div>

        
      </div>
      </form>
    </section>
  );
}