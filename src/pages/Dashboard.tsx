import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Bot, MessageSquare, Users, BarChart3, Settings, Zap, Brain, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { name: 'Total Conversations', value: '1,234', icon: MessageSquare, color: 'from-purple-500 to-pink-500' },
  { name: 'Active Users', value: '891', icon: Users, color: 'from-blue-400 to-purple-500' },
  { name: 'Response Rate', value: '98%', icon: Zap, color: 'from-pink-400 to-rose-500' },
  { name: 'Avg. Response Time', value: '30s', icon: Brain, color: 'from-violet-500 to-purple-500' },
];

const recentActivities = [
  { id: 1, user: 'Sarah M.', action: 'New conversation started', time: '2 min ago' },
  { id: 2, user: 'John D.', action: 'Updated bot settings', time: '15 min ago' },
  { id: 3, user: 'Emma W.', action: 'Generated monthly report', time: '1 hour ago' },
];

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="bg-white/70 backdrop-blur-lg shadow-sm border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Bot className="h-8 w-8 text-purple-600" />
              <span className="text-xl font-bold gradient-text">ConvoAI Dashboard</span>
            </div>
            <button
              onClick={() => logout()}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="premium-card p-6"
            >
              <div className="flex items-center">
                <div className={`p-3 rounded-full bg-gradient-to-r ${stat.color} text-white`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.name}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="premium-card"
          >
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-center p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-medium">
                      {activity.user.charAt(0)}
                    </div>
                    <div className="ml-4 flex-1">
                      <p className="text-sm font-medium text-gray-900">{activity.user}</p>
                      <p className="text-sm text-gray-600">{activity.action}</p>
                    </div>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="premium-card"
          >
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              <div className="space-y-4">
                {['Customize Chatbot', 'View Analytics', 'Manage Team', 'API Settings'].map((action, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center p-4 bg-white/50 rounded-xl hover:bg-white/80 transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white group-hover:scale-110 transition-transform">
                      {i === 0 ? <Bot className="h-5 w-5" /> :
                       i === 1 ? <BarChart3 className="h-5 w-5" /> :
                       i === 2 ? <Users className="h-5 w-5" /> :
                       <Settings className="h-5 w-5" />}
                    </div>
                    <span className="ml-4 text-sm font-medium text-gray-900">{action}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}