'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Plus, 
  Phone, 
  Mail, 
  MapPin, 
  Calendar, 
  DollarSign, 
  User, 
  MoreHorizontal,
  Star,
  Clock,
  CheckCircle,
  XCircle
} from 'lucide-react'

// Mock data for leads
const mockLeads = [
  {
    id: '1',
    customerName: 'Robert Martinez',
    email: 'robert.m@email.com',
    phone: '(555) 234-5678',
    address: '321 Cedar Lane, Springfield, IL 62704',
    source: 'Website Form',
    status: 'new',
    score: 85,
    estimatedValue: 12500,
    notes: 'Interested in full roof replacement after storm damage',
    createdAt: '2024-01-23',
    partnerName: null
  },
  {
    id: '2',
    customerName: 'Emily Davis',
    email: 'emily.davis@email.com',
    phone: '(555) 345-6789',
    address: '654 Birch Street, Springfield, IL 62705',
    source: 'Partner Referral',
    status: 'contacted',
    score: 70,
    estimatedValue: 8500,
    notes: 'Looking for gutter replacement and minor repairs',
    createdAt: '2024-01-22',
    partnerName: 'ABC Home Solutions'
  },
  {
    id: '3',
    customerName: 'David Thompson',
    email: 'david.t@email.com',
    phone: '(555) 456-7890',
    address: '987 Elm Avenue, Springfield, IL 62706',
    source: 'Google Ads',
    status: 'qualified',
    score: 90,
    estimatedValue: 18500,
    notes: 'Commercial property, needs complete roof overhaul',
    createdAt: '2024-01-21',
    partnerName: null
  },
  {
    id: '4',
    customerName: 'Lisa Anderson',
    email: 'lisa.a@email.com',
    phone: '(555) 567-8901',
    address: '147 Oak Ridge, Springfield, IL 62707',
    source: 'Referral',
    status: 'estimate_sent',
    score: 75,
    estimatedValue: 9500,
    notes: 'Estimate sent for shingle replacement',
    createdAt: '2024-01-20',
    partnerName: null
  }
]

const leadStatuses = [
  { 
    key: 'new', 
    label: 'New Leads', 
    color: 'bg-blue-100 text-blue-800',
    icon: Star,
    count: mockLeads.filter(l => l.status === 'new').length
  },
  { 
    key: 'contacted', 
    label: 'Contacted', 
    color: 'bg-yellow-100 text-yellow-800',
    icon: Phone,
    count: mockLeads.filter(l => l.status === 'contacted').length
  },
  { 
    key: 'qualified', 
    label: 'Qualified', 
    color: 'bg-purple-100 text-purple-800',
    icon: CheckCircle,
    count: mockLeads.filter(l => l.status === 'qualified').length
  },
  { 
    key: 'estimate_sent', 
    label: 'Estimate Sent', 
    color: 'bg-orange-100 text-orange-800',
    icon: Clock,
    count: mockLeads.filter(l => l.status === 'estimate_sent').length
  },
  { 
    key: 'won', 
    label: 'Won', 
    color: 'bg-green-100 text-green-800',
    icon: CheckCircle,
    count: mockLeads.filter(l => l.status === 'won').length
  },
  { 
    key: 'lost', 
    label: 'Lost', 
    color: 'bg-red-100 text-red-800',
    icon: XCircle,
    count: mockLeads.filter(l => l.status === 'lost').length
  }
]

export default function LeadsPage() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [showAddLead, setShowAddLead] = useState(false)

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600 bg-green-100'
    if (score >= 60) return 'text-yellow-600 bg-yellow-100'
    return 'text-red-600 bg-red-100'
  }

  const totalLeadValue = mockLeads.reduce((sum, lead) => sum + lead.estimatedValue, 0)

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lead Management</h1>
          <p className="text-gray-600">Track and manage your sales pipeline</p>
        </div>
        <Button onClick={() => setShowAddLead(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Lead
        </Button>
      </div>

      {/* Lead stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{mockLeads.length}</div>
                <div className="text-sm text-gray-600">Total Leads</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  ${totalLeadValue.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Pipeline Value</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {mockLeads.filter(l => ['new', 'contacted'].includes(l.status)).length}
                </div>
                <div className="text-sm text-gray-600">Active Leads</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {Math.round(mockLeads.reduce((sum, lead) => sum + lead.score, 0) / mockLeads.length)}
                </div>
                <div className="text-sm text-gray-600">Avg Score</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Kanban Board */}
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        {leadStatuses.map((status) => (
          <Card key={status.key} className="min-h-96">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <status.icon className="h-5 w-5 mr-2 text-gray-600" />
                  <CardTitle className="text-sm font-medium">{status.label}</CardTitle>
                </div>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${status.color}`}>
                  {status.count}
                </span>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3">
                {mockLeads
                  .filter(lead => lead.status === status.key)
                  .map((lead) => (
                    <div
                      key={lead.id}
                      className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-medium text-gray-900 text-sm">{lead.customerName}</h4>
                          <p className="text-xs text-gray-500">{lead.source}</p>
                        </div>
                        <div className={`px-2 py-1 text-xs font-medium rounded-full ${getScoreColor(lead.score)}`}>
                          {lead.score}
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center text-xs text-gray-600">
                          <Phone className="h-3 w-3 mr-2" />
                          {lead.phone}
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <MapPin className="h-3 w-3 mr-2" />
                          {lead.address.split(',')[0]}
                        </div>
                        <div className="flex items-center text-xs text-gray-600">
                          <DollarSign className="h-3 w-3 mr-2" />
                          ${lead.estimatedValue.toLocaleString()}
                        </div>
                      </div>

                      {lead.partnerName && (
                        <div className="mb-2">
                          <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                            Partner: {lead.partnerName}
                          </span>
                        </div>
                      )}

                      <p className="text-xs text-gray-600 mb-3 line-clamp-2">{lead.notes}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </span>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  ))}
                
                {mockLeads.filter(lead => lead.status === status.key).length === 0 && (
                  <div className="text-center py-8 text-gray-400">
                    <status.icon className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">No leads</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Lead Activity</CardTitle>
          <CardDescription>Latest updates and interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-2 w-2 bg-green-600 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">New lead from Robert Martinez - Website Form</p>
                <p className="text-sm text-gray-500">2 hours ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-2 w-2 bg-blue-600 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">Estimate sent to Lisa Anderson</p>
                <p className="text-sm text-gray-500">1 day ago</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="flex-shrink-0 h-2 w-2 bg-yellow-600 rounded-full mt-2"></div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">Follow-up call scheduled with Emily Davis</p>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 