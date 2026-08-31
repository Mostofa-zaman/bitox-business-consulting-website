"use client";

import ButtonThree from "../common/ButtonThree";
import { useContactForm } from "../hooks/UseContactForm";

const FieldError = ({ message }) =>
  message ? (
    <p className="mt-1.5 text-xs text-red-500 font-medium">{message}</p>
  ) : null;

const ContactForm = () => {
  const {
    values,
    errors,
    touched,
    submitted,
    handleChange,
    handleBlur,
    handleSubmit,
    inputClass,
  } = useContactForm();

  if (submitted) {
    return (
      <div className="bg-bg-secondaryOne">
        <div className="bg-[#f0ede6] min-h-screen py-10 lg:py-30 px-4 md:px-6 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-primary mb-2">
              Message Sent!
            </h2>

            <p className="text-tarnary">
              Thank you for reaching out. We'll get back to you soon.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-bg-secondaryOne">
      <div className="bg-[#f0ede6] min-h-screen py-10 lg:py-30 px-4 md:px-6">
        <div className="max-w-400 mx-auto flex flex-col gap-10">

          {/* Top Section */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start">

            {/* Headline */}
            <div className="w-full lg:max-w-97.75 lg:w-full lg:shrink-0">
              <h1 className="text-[26px] font-bold leading-9 underline text-primary md:text-[34px] lg:text-[43px] md:leading-12 lg:leading-14.5">
                Reach out for inquiries, collaborations, or just to say hello.
                We're eager to connect!
              </h1>
            </div>

            {/* Form Card */}
            <div className="w-full lg:max-w-266.75 bg-white rounded-2xl p-6 md:p-10 lg:p-15">

              {/* Row 1 */}
              <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2 md:gap-6 md:mb-6 lg:gap-7.5 lg:mb-7.5">
                <div>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name*"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("firstName")}
                  />

                  <FieldError
                    message={touched.firstName ? errors.firstName : undefined}
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name*"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("lastName")}
                  />

                  <FieldError
                    message={touched.lastName ? errors.lastName : undefined}
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-1 gap-5 mb-5 md:grid-cols-2 md:gap-6 md:mb-6 lg:gap-7.5 lg:mb-7.5">
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email ID*"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("email")}
                  />

                  <FieldError
                    message={touched.email ? errors.email : undefined}
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={inputClass("phone")}
                  />
                </div>
              </div>

              {/* Row 3 */}
              <div className="mb-5 md:mb-6 lg:mb-7.5">
                <input
                  type="password"
                  name="password"
                  placeholder="Password*"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={inputClass("password")}
                />

                <FieldError
                  message={touched.password ? errors.password : undefined}
                />
              </div>

              {/* Row 4 */}
              <div className="mb-5 md:mb-6 lg:mb-7.5">
                <textarea
                  name="message"
                  placeholder="Write your message*"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={["resize-none", inputClass("message")].join(" ")}
                />

                <FieldError
                  message={touched.message ? errors.message : undefined}
                />
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <div
                  onClick={handleSubmit}
                  className="self-start flex items-center gap-2 text-white text-base font-medium rounded-[90px] px-4 py-2 sm:px-7.5 sm:py-5 cursor-pointer bg-secondary transition-colors group"
                >
                  <ButtonThree
                    frontText="Submit message"
                    backText="Let's Talk."
                    backgroundColor="transparent"
                    textColor="#FFFFFF"
                    fontSize={14}
                    paddingTop={0}
                    paddingBottom={0}
                    paddingLeft={0}
                    paddingRight={0}
                  />

                  <span className="inline-block transition-transform group-hover:translate-x-1">
                    <svg width="9" height="12" viewBox="0 0 9 12" fill="none">
                      <path
                        d="M0.77735 0.0848229C0.445073 -0.136695 0 0.1015 0 0.500848V10.6323C0 11.0317 0.445073 11.2699 0.77735 11.0484L8.37596 5.98261C8.67283 5.7847 8.67283 5.34848 8.37596 5.15056L0.77735 0.0848229Z"
                        fill="#FFFFFF"
                      />
                    </svg>
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactForm;