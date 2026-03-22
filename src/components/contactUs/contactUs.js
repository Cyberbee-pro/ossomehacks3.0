import { useState } from "react";
import { apiLinks } from "../../data/apiLinks";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validateForm = () => {
      // Name validation: cannot be empty
      if (!formData.name.trim()) {
        setStatus({
          loading: false,
          success: false,
          message: "Please enter your name.",
        });
        return false;
      }

      // Email validation: standard regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setStatus({
          loading: false,
          success: false,
          message: "Please enter a valid email address.",
        });
        return false;
      }

      // Message validation: cannot be empty
      if (!formData.message.trim()) {
        setStatus({
          loading: false,
          success: false,
          message: "Please enter a message.",
        });
        return false;
      }

      return true;
    };

    if (!validateForm()) return;

    setStatus({ loading: true, success: false, message: "" });

    try {
      let finalMessage = formData.message;
      if (formData.phone) {
        finalMessage += `\n\nPhone: ${formData.phone}`;
      }

      const response = await fetch(apiLinks.sendContactform, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: finalMessage,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setStatus({
          loading: false,
          success: true,
          message:
            data.message ||
            "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else if (response.status === 400) {
        setStatus({
          loading: false,
          success: false,
          message: "Validation failed. Please check your input.",
        });
      } else {
        setStatus({
          loading: false,
          success: false,
          message: data.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        loading: false,
        success: false,
        message: "Network error. Please try again later.",
      });
    }
  };

  return (
    <section className="bg-greenDark px-4 sm:px-6 md:px-10 py-16 sm:py-20 font-poppins flex justify-center">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="w-full max-w-6xl text-text mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10 mb-12 font-poppins">
            <div>
              <label className="text-text text-sm mb-2 block font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#E6DFC1]/60 outline-none py-2 placeholder-[#E6DFC1]/50"
              />
            </div>

            <div>
              <label className="text-text text-sm mb-2 block font-medium">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-transparent border-b border-[#E6DFC1]/60 outline-none py-2 placeholder-[#E6DFC1]/50"
              />
            </div>

            <div>
              <label className="text-text text-sm mb-2 block font-medium">
                Phone Number (optional)
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-[#E6DFC1]/60 outline-none py-2 placeholder-[#E6DFC1]/50"
              />
            </div>
          </div>

          <div className="mb-12">
            <label className="text-text text-sm mb-2 block font-medium">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border-b border-[#E6DFC1]/60 outline-none py-2 h-28 resize-none placeholder-[#E6DFC1]/50"
            />
          </div>

          {status.message && (
            <div
              className={`mb-6 p-4 rounded ${status.success
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
                }`}
            >
              {status.message}
            </div>
          )}

          <div className="mb-12">
            <button
              type="submit"
              disabled={status.loading}
              className="bg-[#FFC627] text-black px-10 py-4 rounded-full font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status.loading ? "Sending..." : "Leave us a Message →"}
            </button>

          <div className="flex justify-center items-center p-3 text-center">
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

          {/* it was here */}
        </div>
      </form>
    </section>
  );
}