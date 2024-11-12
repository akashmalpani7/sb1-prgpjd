import React from 'react';
import { Bot, Brain, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-indigo-50 via-white to-white pt-24 pb-8 md:pt-32 md:pb-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 rounded-full mb-8">
              <Zap className="h-4 w-4 text-indigo-600 mr-2" />
              <span className="text-sm text-indigo-700 font-medium">Industry-Leading AI Technology</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Transform Customer Service with{' '}
              <span className="gradient-text">Industry-Specific AI</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Deploy intelligent conversational AI tailored to your industry. Automate support, boost engagement, and drive growth with personalized customer experiences.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="w-full md:w-auto bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all transform hover:scale-105 flex items-center justify-center shadow-lg shadow-indigo-500/25"
              >
                Start Free Trial
              </Link>
              <Link
                to="/contact"
                className="w-full md:w-auto bg-white text-gray-700 px-8 py-3 rounded-full border border-gray-300 hover:border-indigo-600 hover:text-indigo-600 transition-all transform hover:scale-105 flex items-center justify-center"
              >
                Schedule Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Bot className="h-5 w-5 text-indigo-600" />
              <span>24/7 Automated Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Brain className="h-5 w-5 text-indigo-600" />
              <span>Self-Learning AI</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Zap className="h-5 w-5 text-indigo-600" />
              <span>Instant Deployment</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}