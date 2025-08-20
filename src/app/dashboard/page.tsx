import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Users, 
  UserPlus, 
  Briefcase, 
  DollarSign, 
  TrendingUp, 
  Calendar,
  Plus,
  FileText
} from 'lucide-react'

const stats = [
  {
    name: 'Total Customers',
    value: '248',
    change: '+12%',
    changeType: 'positive',
    icon: Users,
  },
  {
    name: 'Active Leads',
    value: '32',
    change: '+8%',
    changeType: 'positive',
    icon: UserPlus,
  },
  {
    name: 'Jobs in Progress',
    value: '18',
    change: '-2%',
    changeType: 'negative',
    icon: Briefcase,
  },
  {
    name: 'Monthly Revenue',
    value: '$124,500',
    change: '+18%',
    changeType: 'positive',
    icon: DollarSign,
  },
]

const recentActivities = [
  {
    id: 1,
    type: 'lead',
    message: 'New lead from John Smith - Residential roof repair',
    time: '2 hours ago',
  },
  {
    id: 2,
    type: 'job',
    message: 'Job #1234 marked as completed by field crew',
    time: '4 hours ago',
  },
  {
    id: 3,
    type: 'estimate',
    message: 'Estimate #5678 accepted by Sarah Johnson',
    time: '6 hours ago',
  },
  {
    id: 4,
    type: 'payment',
    message: 'Payment received for Invoice #9012 - $8,500',
    time: '1 day ago',
  },
]

const upcomingJobs = [
  {
    id: 1,
    customer: 'Mike Wilson',
    address: '123 Oak Street, Springfield',
    date: 'Today, 9:00 AM',
    type: 'Roof Inspection',
  },
  {
    id: 2,
    customer: 'Lisa Brown',
    address: '456 Pine Avenue, Springfield',
    date: 'Tomorrow, 10:30 AM',
    type: 'Shingle Replacement',
  },
  {
    id: 3,
    customer: 'David Chen',
    address: '789 Maple Drive, Springfield',
    date: 'Friday, 2:00 PM',
    type: 'Gutter Installation',
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                      <p className="text-gray-600">Welcome back! Here&apos;s what&apos;s happening with your business.</p>
        </div>
        <div className="flex space-x-3">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Customer
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule Job
          </Button>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.name}>
            <CardContent className="p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                      <div className={`ml-2 flex items-baseline text-sm font-semibold ${
                        stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                      }`}>
                        <TrendingUp className="self-center flex-shrink-0 h-4 w-4" />
                        <span className="sr-only">
                          {stat.changeType === 'positive' ? 'Increased' : 'Decreased'} by
                        </span>
                        {stat.change}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your business</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View All Activity
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Jobs */}
        <Card>
          <CardHeader>
            <CardTitle>Today&apos;s Schedule</CardTitle>
            <CardDescription>Upcoming jobs and appointments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingJobs.map((job) => (
                <div key={job.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-md">
                  <div className="flex-shrink-0">
                    <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">{job.customer}</p>
                    <p className="text-sm text-gray-600">{job.address}</p>
                    <p className="text-sm text-gray-500">{job.date} • {job.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View Full Schedule
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to get things done faster</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Users className="h-6 w-6" />
              <span className="text-sm">Add Customer</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <UserPlus className="h-6 w-6" />
              <span className="text-sm">Create Lead</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <FileText className="h-6 w-6" />
              <span className="text-sm">New Estimate</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col items-center justify-center space-y-2">
              <Briefcase className="h-6 w-6" />
              <span className="text-sm">Schedule Job</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 