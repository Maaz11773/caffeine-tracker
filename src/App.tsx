import React, { useState } from 'react';
import { Coffee, Plus, TrendingUp, Settings, Home, BarChart3, Clock, ChevronRight } from 'lucide-react';

const CaffeineTrackerWireframes = () => {
  const [activeScreen, setActiveScreen] = useState('home');

  const screens = {
    home: {
      title: 'Today',
      content: (
        <div className="flex flex-col h-full">
          {/* Header Stats */}
          <div className="bg-gray-100 rounded-lg p-4 mb-4">
            <div className="text-sm text-gray-600 mb-1">Daily Caffeine</div>
            <div className="text-3xl font-bold mb-2">280 mg</div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
              </div>
              <span className="text-sm text-gray-600">70%</span>
            </div>
          </div>

          {/* Quick Add Section */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Quick Add</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {['Espresso\n60mg', 'Coffee\n95mg', 'Energy Drink\n80mg', 'Tea\n47mg'].map((item, idx) => (
                <button key={idx} className="bg-white border-2 border-gray-200 rounded-lg p-4 text-center hover:border-blue-500">
                  <Coffee className="mx-auto mb-2" size={24} />
                  <div className="text-sm font-medium whitespace-pre-line">{item}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Entries */}
          <div className="flex-1">
            <h2 className="text-lg font-semibold mb-3">Today's Entries</h2>
            <div className="space-y-2">
              {
                { time: '2:30 PM', name: 'Espresso', amount: '60mg' },
                { time: '10:15 AM', name: 'Coffee', amount: '95mg' },
                { time: '8:00 AM', name: 'Coffee', amount: '95mg' }
              ].map((entry, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-lg p-3 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <Coffee size={20} />
                    <div>
                      <div className="font-medium">{entry.name}</div>
                      <div className="text-sm text-gray-600">{entry.time}</div>
                    </div>
                  </div>
                  <div className="font-semibold text-blue-600">{entry.amount}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    add: {
      title: 'Add Entry',
      content: (
        <div className="flex flex-col h-full">
          <div className="space-y-4">
            {/* Beverage Type Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Beverage Type</label>
              <select className="w-full border border-gray-300 rounded-lg p-3">
                <option>Coffee</option>
                <option>Espresso</option>
                <option>Energy Drink</option>
                <option>Tea</option>
                <option>Soda</option>
                <option>Custom</option>
              </select>
            </div>

            {/* Amount Input */}
            <div>
              <label className="block text-sm font-medium mb-2">Caffeine Amount (mg)</label>
              <input 
                type="number" 
                placeholder="95" 
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Time</label>
              <input 
                type="time" 
                className="w-full border border-gray-300 rounded-lg p-3"
              />
            </div>

            {/* Size/Volume */}
            <div>
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="grid grid-cols-3 gap-2">
                {['Small', 'Medium', 'Large'].map((size) => (
                  <button key={size} className="border-2 border-gray-200 rounded-lg p-3 hover:border-blue-500">
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-medium mb-2">Notes (Optional)</label>
              <textarea 
                className="w-full border border-gray-300 rounded-lg p-3"
                rows={3}
                placeholder="Add any notes..."
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto pt-4 space-y-2">
            <button className="w-full bg-blue-500 text-white rounded-lg p-4 font-semibold">
              Add Entry
            </button>
            <button className="w-full border border-gray-300 rounded-lg p-4">
              Cancel
            </button>
          </div>
        </div>
      )
    },
    stats: {
      title: 'Statistics',
      content: (
        <div className="flex flex-col h-full space-y-4">
          {/* Time Period Selector */}
          <div className="flex gap-2">
            {['Week', 'Month', 'Year'].map((period) => (
              <button key={period} className="flex-1 border-2 border-gray-200 rounded-lg p-2 hover:border-blue-500">
                {period}
              </button>
            ))}
          </div>

          {/* Chart Placeholder */}
          <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center" style={{height: '200px'}}>
            <div className="text-center text-gray-500">
              <BarChart3 size={48} className="mx-auto mb-2" />
              <div>Chart Visualization</div>
            </div>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Avg Daily</div>
              <div className="text-2xl font-bold">245 mg</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Peak Day</div>
              <div className="text-2xl font-bold">380 mg</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Total Entries</div>
              <div className="text-2xl font-bold">42</div>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-1">Trend</div>
              <div className="text-2xl font-bold flex items-center">
                <TrendingUp size={24} className="text-green-500" />
              </div>
            </div>
          </div>

          {/* Insights */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Insights</h3>
            <ul className="text-sm space-y-1 text-gray-700">
              <li>• You consume most caffeine in the morning</li>
              <li>• Average intake is within healthy limits</li>
              <li>• 3 days streak of tracking!</li>
            </ul>
          </div>
        </div>
      )
    },
    settings: {
      title: 'Settings',
      content: (
        <div className="flex flex-col space-y-4">
          {/* Daily Limit */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Daily Limit</div>
                <div className="text-sm text-gray-600">Set your caffeine goal</div>
              </div>
              <ChevronRight size={20} />
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Notifications</div>
                <div className="text-sm text-gray-600">Manage alerts</div>
              </div>
              <ChevronRight size={20} />
            </div>
          </div>

          {/* Units */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Units</div>
                <div className="text-sm text-gray-600">mg / oz</div>
              </div>
              <ChevronRight size={20} />
            </div>
          </div>

          {/* Custom Beverages */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Custom Beverages</div>
                <div className="text-sm text-gray-600">Add your own drinks</div>
              </div>
              <ChevronRight size={20} />
            </div>
          </div>

          {/* Data & Privacy */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">Data & Privacy</div>
                <div className="text-sm text-gray-600">Export and manage data</div>
              </div>
              <ChevronRight size={20} />
            </div>
          </div>

          {/* About */}
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="font-medium">About</div>
                <div className="text-sm text-gray-600">Version 1.0.0</div>
              </div>
              <ChevronRight size={20} />
            </div>
          </div>
        </div>
      )
    }
  };

  const navigation = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'add', label: 'Add', icon: Plus },
    { id: 'stats', label: 'Stats', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="max-w-md mx-auto h-screen bg-white flex flex-col">
      {/* Phone Status Bar */}
      <div className="bg-gray-900 text-white px-4 py-2 flex justify-between text-xs">
        <span>9:41</span>
        <div className="flex gap-1">
          <span>📶</span>
          <span>📡</span>
          <span>🔋</span>
        </div>
      </div>

      {/* App Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-xl font-bold">{screens[activeScreen].title}</h1>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto px-4 py-4 bg-gray-50">
        {screens[activeScreen].content}
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-gray-200">
        <div className="flex justify-around py-2">
          {navigation.map(item => {
            const Icon = item.icon;
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveScreen(item.id)}
                className={`flex flex-col items-center gap-1 p-2 ${isActive ? 'text-blue-500' : 'text-gray-400'}`}
              >
                <Icon size={24} />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CaffeineTrackerWireframes;

// Wrap the component as the default App export
function App() {
  return <CaffeineTrackerWireframes />;
}
