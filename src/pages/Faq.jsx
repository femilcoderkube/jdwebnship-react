import React, { useState } from "react";
import CommonHeader from "../components/CommonHeader";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const faqItems = [
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the courier's website.",
    },
    {
      question: "What is the return policy?",
      answer:
        "We offer a 7-day return policy for most items. Products must be unused and in original packaging to qualify for a return or replacement.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Standard delivery typically takes 3-5 business days. Express delivery options are available at checkout for faster shipping.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "You can cancel your order within 1 hour of placing it. After that, please contact our customer support team for assistance.",
    },
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit/debit cards, PayPal, and select digital wallets. All transactions are secure and encrypted.",
    },
    {
      question: "Is cash on delivery available?",
      answer:
        "Yes, we offer cash on delivery for most locations. This option will be shown during checkout if available for your address.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by destination and will be calculated at checkout.",
    },
    {
      question: "How do I apply a discount coupon?",
      answer:
        "Enter your coupon code in the 'Promo Code' field during checkout and click 'Apply'. The discount will be automatically calculated.",
    },
    {
      question: "Why is my order delayed?",
      answer:
        "Delays can occur due to high order volume, weather conditions, or carrier delays. You'll receive updates via email if there are any delays with your order.",
    },
    {
      question: "Can I change my delivery address after placing an order?",
      answer:
        "Address changes can only be made if the order hasn't been shipped. Please contact our customer support immediately for assistance.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <CommonHeader title="Frequently Asked Questions" />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-3xl font-bold mb-6 text-center">
              Frequently Asked Questions
            </h1>
            <div className="border-b border-gray-200 mb-8"></div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`border border-gray-200 shadow-sm rounded-xl transition-all duration-300 transform ${
                    activeIndex === index
                      ? "scale-[1.01]"
                      : "hover:scale-[1.02]"
                  }`}
                >
                  <button
                    className="w-full text-left px-6 py-4 bg-white hover:bg-gray-50 flex cursor-pointer justify-between items-center focus:outline-none"
                    onClick={() => toggleAccordion(index)}
                    aria-expanded={activeIndex === index}
                    aria-controls={`faq-${index}`}
                  >
                    <span className="text-base font-medium text-gray-800">
                      {item.question}
                    </span>
                    <span className="text-2xl text-gray-500">
                      {activeIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  <div
                    id={`faq-${index}`}
                    className={`bg-gray-50 px-6 overflow-hidden transition-all duration-300 ${
                      activeIndex === index
                        ? "max-h-96 py-4 border-t border-gray-200"
                        : "max-h-0 py-0 border-t-0"
                    }`}
                  >
                    <p className="text-gray-700">{item.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
