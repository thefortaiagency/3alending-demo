import { TrendingUp, DollarSign, Users, FileText, Clock, CheckCircle } from 'lucide-react';

const KPICard = ({ title, value, change, icon: Icon, trend }: {
  title: string;
  value: string;
  change: string;
  icon: any;
  trend: 'up' | 'down';
}) => (
  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-gray-600 text-sm font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
      </div>
      <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
    </div>
    <div className="mt-4 flex items-center">
      <TrendingUp className={`w-4 h-4 mr-1 ${trend === 'up' ? 'text-green-600' : 'text-red-600'} ${trend === 'down' ? 'rotate-180' : ''}`} />
      <span className={`text-sm font-medium ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
        {change}
      </span>
      <span className="text-gray-500 text-sm ml-1">vs last month</span>
    </div>
  </div>
);

const RecentActivity = () => (
  <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Loan Activity</h3>
    <div className="space-y-4">
      {[
        { company: 'ABC Manufacturing', amount: '$250,000', status: 'approved', time: '2 hours ago' },
        { company: 'Tech Startup Inc', amount: '$75,000', status: 'under-review', time: '4 hours ago' },
        { company: 'Local Restaurant', amount: '$150,000', status: 'approved', time: '1 day ago' },
        { company: 'Construction Co', amount: '$500,000', status: 'pending', time: '2 days ago' }
      ].map((item, index) => (
        <div key={index} className="flex items-center justify-between py-3 border-b border-gray-200 last:border-b-0">
          <div className="flex items-center space-x-3">
            <div className={`w-3 h-3 rounded-full ${
              item.status === 'approved' ? 'bg-green-500' :
              item.status === 'under-review' ? 'bg-yellow-500' : 'bg-blue-500'
            }`} />
            <div>
              <p className="text-gray-900 font-medium">{item.company}</p>
              <p className="text-gray-600 text-sm">{item.amount}</p>
            </div>
          </div>
          <div className="text-right">
            <p className={`text-sm font-medium capitalize ${
              item.status === 'approved' ? 'text-green-600' :
              item.status === 'under-review' ? 'text-yellow-600' : 'text-blue-600'
            }`}>
              {item.status.replace('-', ' ')}
            </p>
            <p className="text-gray-500 text-xs">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-lg">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Lending Dashboard</h2>
        <p className="text-gray-600">Real-time insights into your loan portfolio and business performance</p>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KPICard
          title="Total Loans Funded"
          value="$2.4M"
          change="+12.5%"
          icon={DollarSign}
          trend="up"
        />
        <KPICard
          title="Active Clients"
          value="156"
          change="+8.2%"
          icon={Users}
          trend="up"
        />
        <KPICard
          title="Applications Pending"
          value="23"
          change="-5.1%"
          icon={FileText}
          trend="down"
        />
        <KPICard
          title="Avg Processing Time"
          value="3.2 days"
          change="-15.3%"
          icon={Clock}
          trend="up"
        />
      </div>

      {/* Charts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Loan Performance Chart */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Monthly Loan Volume</h3>
          <div className="h-64 flex items-end justify-center space-x-4">
            {[65, 80, 45, 90, 75, 85, 95, 70, 85, 60, 90, 100].map((height, index) => (
              <div
                key={index}
                className="bg-gradient-to-t from-blue-600 to-blue-400 rounded-t-lg w-8 opacity-80 hover:opacity-100 transition-opacity"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
          <div className="grid grid-cols-12 gap-4 mt-2 text-xs text-gray-500 text-center">
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map(month => (
              <div key={month}>{month}</div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <RecentActivity />
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
          <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">94%</p>
          <p className="text-gray-600">Approval Rate</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
          <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">24hrs</p>
          <p className="text-gray-600">Avg Response Time</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow text-center">
          <DollarSign className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
          <p className="text-2xl font-bold text-gray-900">$50K-2M</p>
          <p className="text-gray-600">Loan Range</p>
        </div>
      </div>
    </div>
  );
}