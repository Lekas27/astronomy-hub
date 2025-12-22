import { Send, Rocket, MessageSquare, Users, HelpCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/shared/components/ui/button";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

//NOTE: this will become feature it dont need to have separate type and const
export const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = () => {
    setFormData({
      ...formData,
    });
  };

  const faqs = [
    {
      question: "How do I create my first simulation?",
      answer:
        "Sign up for a free account, navigate to the Simulator page, and click 'Create New Simulation'. Our intuitive interface will guide you through the process.",
    },
    {
      question: "Is Astronomy Hub free to use?",
      answer:
        "Yes! We offer a free tier with access to basic simulations and discussions. Premium features are available for advanced users.",
    },
    {
      question: "Can I collaborate with other users?",
      answer:
        "Absolutely! Share your simulations, join discussions, and collaborate on projects with our global community of astronomy enthusiasts.",
    },
  ];

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Title className="text-3xl md:text-4xl font-bold text-white mb-4">
              Send Us a Message
            </Title>
            <Paragraph className="text-slate-400 mb-8">
              Fill out the form below and our team will get back to you within
              24 hours.
            </Paragraph>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button
                className="w-full px-8 py-4 bg-linear-to-r! from-purple-600! to-blue-600! text-white! font-bold text-lg rounded-lg hover:from-purple-500 hover:to-blue-500 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-3"
                icon={Send}
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Support Info & FAQs */}
          <div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                  <Rocket className="h-8 w-8" />
                </div>
                <div>
                  <Title className="text-2xl font-bold text-white" level={3}>
                    Quick Support
                  </Title>
                  <Paragraph className="text-slate-400">
                    Get instant help
                  </Paragraph>
                </div>
              </div>

              <div className="space-y-4">
                <Button
                  className="w-full px-6 py-3 bg-purple-600/20! text-purple-300! border! border-purple-500/30! rounded-lg hover:bg-purple-600/30! transition-all duration-300 flex items-center justify-center gap-3"
                  icon={MessageSquare}
                >
                  Start Live Chat
                </Button>
                <Button
                  className="w-full px-6 py-3 bg-blue-600/20! text-blue-300! border! border-blue-500/30! rounded-lg hover:bg-blue-600/30! transition-all duration-300 flex items-center justify-center gap-3"
                  icon={Users}
                >
                  Join Community
                </Button>
                <Button
                  className="w-full px-6 py-3 bg-pink-600/20! text-pink-300! border! border-pink-500/30! rounded-lg! hover:bg-pink-600/30! transition-all duration-300 flex items-center justify-center gap-3"
                  icon={HelpCircle}
                >
                  Visit Help Center
                </Button>
              </div>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <Title
                className="text-2xl font-bold text-white mb-6 flex items-center gap-3"
                level={3}
              >
                <HelpCircle className="h-6 w-6 text-purple-400" />
                Frequently Asked Questions
              </Title>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <Title
                      className="text-lg font-semibold text-white mb-2"
                      level={4}
                    >
                      {faq.question}
                    </Title>
                    <Paragraph className="text-slate-400">
                      {faq.answer}
                    </Paragraph>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
