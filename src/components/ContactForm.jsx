"use client";

import { useState } from "react";

export default function ContactForm({
  title,
  subtitle,
  buttonText,
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter valid 10-digit number";
    }

    if (!form.interest) newErrors.interest = "Please select an option";

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Submitted:", form);
    }
  };

  return (
    <section className="section bg-[#f5f5f5]">
      <div className="container-custom">

        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm">

          {/* Heading */}
          <h2>{title}</h2>
          <p className="mt-2">{subtitle}</p>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">

            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label>Phone number:</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Your phone number"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>

              <div>
                <label>What are you interested in?</label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg"
                >
                  <option value="">Select</option>
                  <option value="buy">Buy Property</option>
                  <option value="sell">Sell Property</option>
                  <option value="rent">Rent Property</option>
                </select>
                {errors.interest && <p className="text-red-500 text-sm mt-1">{errors.interest}</p>}
              </div>
            </div>

            {/* Message */}
            <div>
              <label>Your Message:</label>
              <textarea
                name="message"
                placeholder="Message"
                value={form.message}
                onChange={handleChange}
                rows="5"
                className="w-full mt-2 p-3 border rounded-lg"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Button */}
            <button type="submit" className="btn-primary">
              {buttonText}
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}