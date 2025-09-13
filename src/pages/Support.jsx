import React from "react";
import CommonHeader from "../components/CommonHeader";
import { Headset, Mail, Phone, Clock, MessageCircle } from "lucide-react";
import { useSelector } from "react-redux";

const Support = () => {
  const { storeInfo } = useSelector((state) => state.storeInfo);
  console.log("storeInfo", storeInfo);
  return (
    <>
      <CommonHeader title="Support Center" />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              We're Here to Help
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get assistance with your healthcare & e-commerce needs from our
              dedicated support team.
            </p>
          </div>

          {/* Why Contact Us Section */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-left">
              Why Contact Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Resolve account or billing issues",
                "Get help with product or service inquiries",
                "Technical support for platform usage",
                "Feedback or suggestions for improvement",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Support Options */}
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Support Options
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: <MessageCircle className="text-blue-600 w-6 h-6" />,
                title: "Live Chat – Instant support",
                description: "Available 24/7",
              },
              {
                icon: <Mail className="text-blue-600 w-6 h-6" />,
                title: "Email Support – Detailed assistance",
                description: "Response within 24 hours",
              },
              {
                icon: <Phone className="text-blue-600 w-6 h-6" />,
                title: "Phone Support – Speak to our team",
                description: `Mon-Fri, ${
                  storeInfo?.storeInfo?.storeTime || "11:00 AM - 8:00 PM"
                }`,
              },
            ].map((option, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                  {option.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {option.title}
                </h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-xl p-6 mb-12">
            <div className="flex items-start">
              <Headset className="text-blue-600 w-5 h-5 mt-1 mr-3 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-medium">Need urgent help?</span> Try our
                live chat for the fastest response.
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="w-full max-w-full px-4">
            <div className="grid grid-cols-1 gap-6 mb-12">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  How to Reach Us
                </h2>
                <p className="text-gray-700 mb-6">
                  Email us at{" "}
                  <a
                    href="mailto:support@yourcompany.com"
                    className="text-blue-600 hover:underline"
                  >
                    {storeInfo?.storeinfo?.email || "storename123@gmail.com"}
                  </a>
                  . Please include a brief description of your issue.
                </p>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  Additional Help
                </h3>
                <p className="text-gray-700">
                  For immediate assistance, call us at{" "}
                  <a href="#" className="text-blue-600 hover:underline">
                    {storeInfo?.storeinfo?.mobile_no || "+91 9876543210"}
                  </a>{" "}
                  or visit our{" "}
                  <a href="/faq" className="text-blue-600 hover:underline">
                    FAQ page
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
