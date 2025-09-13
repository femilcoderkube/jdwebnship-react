import React from "react";
import CommonHeader from "../components/CommonHeader";

const Terms = () => {
  const terms = [
    {
      title: "1. Use of the Site",
      content:
        "You must be at least 18 years old to use this site. The content provided is for general information only and may be subject to change without notice.",
    },
    {
      title: "2. Intellectual Property",
      content:
        "All content, including images, logos, and text, are the property of our company unless otherwise stated. Unauthorized use may lead to legal action.",
    },
    {
      title: "3. User Accounts",
      content:
        "If you create an account, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.",
    },
    {
      title: "4. Orders & Payments",
      content:
        "All purchases made through the site are subject to availability and confirmation of the order. We reserve the right to refuse or cancel any order at our discretion.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "We shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our website or services.",
    },
    {
      title: "6. Modifications",
      content:
        "We reserve the right to update or change these terms at any time without prior notice. Continued use of the site constitutes acceptance of those changes.",
    },
    {
      title: "7. Contact Us",
      content:
        "If you have any questions about these Terms and Conditions, feel free to contact our support team via email or phone.",
    },
  ];

  return (
    <>
      <CommonHeader title="Terms & Conditions" />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Terms & Conditions
            </h1>
            <div className="border-b border-gray-200 mb-8"></div>
            <p className="mb-8 text-gray-600 text-center">
              By accessing and using this website, you agree to be bound by the
              following terms and conditions. If you do not agree with any part
              of these terms, please do not use our website.
            </p>
            <div className="space-y-8">
              {terms.map((term, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-3 text-gray-800 text-left">
                    {term.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-left">
                    {term.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Terms;
