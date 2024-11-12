import React from 'react';
import { 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Layers, 
  Shield, 
  Zap,
  Bot,
  Settings
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: "Industry-Specific Knowledge",
    description: "Pre-trained with domain expertise for healthcare, finance, retail, and more."
  },
  {
    icon: MessageSquare,
    title: "Multi-Channel Integration",
    description: "Seamlessly connect with WhatsApp, Messenger, Instagram, and web platforms."
  },
  {
    icon: Layers,
    title: "Knowledge Base Management",
    description: "Easy-to-use interface for updating and managing your bot's knowledge."
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time insights and actionable data to optimize performance."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "GDPR compliant with enterprise-grade data protection."
  },
  {
    icon: Bot,
    title: "Personalized Responses",
    description: "AI-driven customization for each customer interaction."
  },
  {
    icon: Zap,
    title: "Automated Learning",
    description: "Continuous improvement through machine learning algorithms."
  },
  {
    icon: Settings,
    title: "No-Code Customization",
    description: "Easy setup and modification without technical expertise."
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to automate and enhance your customer interactions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="h-8 w-8 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}