import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import "../styles/hover-effects.css";

const faqs = [
  {
    question: "How do I add Avon to my server?",
    answer:
      'Click the "Add to Discord" button and follow the OAuth2 authorization process to add the bot to your server. You\'ll need the "Manage Server" permission.',
  },
  {
    question: "Is the Avon Bot free to use?",
    answer:
      "Yes! The bot is completely free to use. You can invite it to as many servers as you want.",
  },
  {
    question: "What permissions does Avon Bot need?",
    answer:
      "Avon requires Chat And Voice permissions to function properly, other features may require additional permissions.",
  },
  {
    question: "How can I customize the bot's prefix?",
    answer:
      "Use the +prefix command to change the bot's prefix. For example: +prefix ? will change the prefix to ?",
  },
  {
    question: "Does Avon Bot store any user data?",
    answer:
      "The bot does not store any user data. We only store server data required for the bot to function.",
  },
  {
    question: "How do I report issues or get support?",
    answer:
      "Join our support server to report issues, get help, or suggest new features.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <div className="py-20 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-card border border-gray-800 rounded-lg overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left bg-black/20 hover:bg-black/30 transition-colors"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-[#8B5DFF]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#8B5DFF]" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-48" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-4 text-gray-400">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
