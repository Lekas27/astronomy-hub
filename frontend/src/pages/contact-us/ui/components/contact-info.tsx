import { contactInfo } from "@/pages/contact-us/model/constants/contact-info";
import { Paragraph } from "@/shared/components/ui/typography/paragraph";
import { Title } from "@/shared/components/ui/typography/title";

export const ContactInfoSection = () => (
  <section className="py-16 bg-linear-to-b from-slate-950 to-slate-900">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, index) => {
          const Icon = info.icon;
          return (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/20 text-center"
            >
              <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white mb-4 mx-auto">
                <Icon className="h-6 w-6" />
              </div>
              <Title className="text-xl font-bold text-white mb-2" level={3}>
                {info.title}
              </Title>
              <Paragraph className="text-purple-400 font-semibold mb-2">
                {info.detail}
              </Paragraph>
              <Paragraph className="text-slate-400 text-sm">
                {info.description}
              </Paragraph>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
