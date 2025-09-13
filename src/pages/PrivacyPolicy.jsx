import React from "react";
import CommonHeader from "../components/CommonHeader";

const PrivacyPolicy = () => {
  const privacySections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect personal details such as your name, email address, contact number, etc., which you provide when using our services or registering on our platform.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use your information to improve our services, respond to inquiries, send transactional emails, and inform you about updates and offers.",
    },
    {
      title: "3. Data Security",
      content:
        "We implement appropriate security measures to protect your data from unauthorized access, alteration, disclosure, or destruction.",
    },
    {
      title: "4. Cookies and Tracking",
      content:
        "We may use cookies and similar tracking technologies to enhance your experience. You can control cookies through your browser settings.",
    },
    {
      title: "5. Third-Party Services",
      content:
        "We may work with third-party vendors who assist in delivering our services. They are required to protect your data and use it only for authorized purposes.",
    },
    {
      title: "6. Your Rights",
      content:
        "You have the right to access, correct, or delete your personal information. You can also opt out of promotional communications at any time.",
    },
    {
      title: "7. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. The updated version will be posted on this page with the revised date.",
    },
    {
      title: "8. Contact Us",
      content:
        "If you have any questions or concerns about our Privacy Policy, feel free to contact us at our support email or phone number.",
    },
  ];

  return (
    <>
      <CommonHeader title="Privacy Policy" />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Privacy Policy
            </h1>
            <div className="border-b border-gray-200 mb-8"></div>
            <p className="mb-8 text-gray-600 text-center">
              We are committed to protecting your personal information and your
              right to privacy. This Privacy Policy outlines how we collect,
              use, and protect your data.
            </p>
            <div className="space-y-6">
              {privacySections.map((section, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg">
                  <h2 className="text-xl font-bold mb-3 text-gray-800 text-left">
                    {section.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-left">
                    {section.content}
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

export default PrivacyPolicy;
