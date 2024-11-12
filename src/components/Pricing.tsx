import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const plans = [
  {
    name: "Starter",
    price: {
      inr: "3,999",
      usd: "49"
    },
    description: "Perfect for small businesses",
    features: [
      "Up to 1,000 conversations/month",
      "Basic analytics",
      "Email support",
      "2 team members",
      "1 chatbot template"
    ]
  },
  {
    name: "Professional",
    price: {
      inr: "11,999",
      usd: "149"
    },
    description: "For growing companies",
    features: [
      "Up to 10,000 conversations/month",
      "Advanced analytics",
      "Priority support",
      "5 team members",
      "All chatbot templates",
      "Custom branding",
      "API access"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: {
      inr: "Custom",
      usd: "Custom"
    },
    description: "For large organizations",
    features: [
      "Unlimited conversations",
      "Custom analytics",
      "24/7 dedicated support",
      "Unlimited team members",
      "Custom templates",
      "White labeling",
      "Custom integrations",
      "SLA guarantee"
    ]
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect plan for your business needs
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={`bg-white rounded-2xl shadow-sm p-8 relative h-full border ${
                plan.popular ? 'border-indigo-600' : 'border-gray-100'
              } hover:border-indigo-600 transition-colors`}>
                {plan.popular && (
                  <span className="absolute top-0 right-8 -translate-y-1/2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex flex-col items-center justify-center space-y-2">
                    <div className="flex items-center">
                      <span className="text-3xl font-bold">₹</span>
                      <span className="text-5xl font-bold text-gray-900">{plan.price.inr}</span>
                      {plan.price.inr !== "Custom" && <span className="text-gray-600 ml-2">/month</span>}
                    </div>
                    {plan.price.inr !== "Custom" && (
                      <span className="text-sm text-gray-500">(USD ${plan.price.usd}/month)</span>
                    )}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-indigo-600 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 rounded-full font-medium transition-all transform hover:scale-105 ${
                    plan.popular
                      ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                  onClick={() => window.location.href = '/signup'}
                >
                  {plan.price.inr === "Custom" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}