import { useState } from "react";
import { HiLocationMarker, HiOutlineMailOpen } from "react-icons/hi";
import Section from "../Section";
import { HiPhone } from "react-icons/hi2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Please enter your full name.";
      toast.error(errors.name);
    }
    if (!formData.email) {
      errors.email = "Please enter your email address.";
      toast.error(errors.email);
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email =
        "Please enter a valid email address (e.g., user@example.com).";
      toast.error(errors.email);
    }
    if (!formData.message) {
      errors.message = "Please enter your message.";
      toast.error(errors.message);
    }
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      try {
        const response = await fetch("https://example.com/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: "farhadzafari10@gmail.com",
            subject: "Contact Form Submission",
            text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
          }),
        });
        if (response.ok) {
          toast.success("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        } else {
          toast.error("Failed to send message.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <Section color="bg-slate-50" classes="py-12" has="contact">
      <ToastContainer />
      <span className="span">Contact Us</span>
      <h3 className="h3 mb-12">Lets Talk Together.</h3>
      <div className="w-full flex flex-col lg:flex-row mt-6 gap-4">
        {/* //? the text of contact us */}
        <div className="lg:w-1/3 border p-6 bg-white shadow-lg rounded-lg">
          <div className="py-2">
            <p className="text-lg font-medium text-black mb-8">
              Contact us anytime via WhatsApp for assistance. I am here to help!
            </p>

            <div className="flex items-center gap-2">
              <div className="p-2 bg-blue-500 rounded-full">
                <HiPhone className="text-white" />
              </div>
              <strong>Phone</strong>
            </div>
            <p className="ml-9">+0093 708969829</p>
          </div>
          <div className="py-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-green-500 rounded-full">
                <HiOutlineMailOpen className="text-white" />
              </div>
              <strong>Email</strong>
            </div>
            <p className="ml-9">farhadzafari10@gmail.com</p>
          </div>
          <div className="py-2">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-red-500 rounded-full">
                <HiLocationMarker className="text-white" />
              </div>
              <strong>Address</strong>
            </div>
            <p className="ml-9">Afghanistan, Ghazni, Mapure</p>
          </div>
        </div>

        {/* //! form of contact us  */}
        <form
          className="lg:w-2/3 flex flex-col space-y-4 bg-white p-6 shadow-lg rounded-lg"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Full Name..."
            value={formData.name}
            onChange={handleChange}
            className={`p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-700 bg-white`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email..."
            value={formData.email}
            onChange={handleChange}
            className={`bg-white p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-700 `}
          />
          <textarea
            name="message"
            id="message"
            placeholder="Your Message..."
            value={formData.message}
            onChange={handleChange}
            className={`p-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-700 bg-white`}
          />
          <button
            type="submit"
            className="p-2 bg-color-3 text-white rounded-lg hover:bg-color-3/70"
          >
            Send Message
          </button>
          {submitted && !Object.keys(errors).length && (
            <p className="text-green-500 text-sm mt-2">
              Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </Section>
  );
}
