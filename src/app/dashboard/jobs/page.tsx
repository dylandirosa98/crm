'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Plus, 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  DollarSign, 
  CheckCircle, 
  AlertCircle, 
  Wrench, 
  Truck,
  Camera,
  FileText,
  MoreHorizontal
} from 'lucide-react'

// Mock data for jobs
const mockJobs = [
  {
    id: 'JOB-001',
    customerName: 'John Smith',
    customerPhone: '(555) 123-4567',
    address: '123 Oak Street, Springfield, IL 62701',
    jobType: 'Full Roof Replacement',
    status: 'scheduled',
    priority: 'high',
    scheduledStart: '2024-01-25',
    estimatedDuration: '3 days',
    assignedCrew: ['Mike Johnson', 'Sarah Wilson'],
    estimateValue: 15500,
    materials: ['Asphalt Shingles', 'Underlayment', 'Flashing'],
    notes: 'Storm damage claim, insurance approved',
    progress: 0,
    photos: 12
  },
  {
    id: 'JOB-002',
    customerName: 'Emily Davis',
    customerPhone: '(555) 345-6789',
    address: '654 Birch Street, Springfield, IL 62705',
    jobType: 'Gutter Replacement',
    status: 'in_progress',
    priority: 'medium',
    scheduledStart: '2024-01-23',
    estimatedDuration: '1 day',
    assignedCrew: ['Tom Brown'],
    estimateValue: 3200,
    materials: ['Aluminum Gutters', 'Downspouts', 'Brackets'],
    notes: 'Customer requested seamless gutters',
    progress: 65,
    photos: 8
  },
  {
    id: 'JOB-003',
    customerName: 'David Thompson',
    customerPhone: '(555) 456-7890',
    address: '987 Elm Avenue, Springfield, IL 62706',
    jobType: 'Commercial Roof Repair',
    status: 'materials_ordered',
    priority: 'high',
    scheduledStart: '2024-01-28',
    estimatedDuration: '5 days',
    assignedCrew: ['Mike Johnson', 'Sarah Wilson', 'Tom Brown'],
    estimateValue: 28500,
    materials: ['EPDM Membrane', 'Insulation', 'Fasteners'],
    notes: 'Large commercial building, requires crane access',
    progress: 15,
    photos: 5
  },
  {
    id: 'JOB-004',
    customerName: 'Lisa Anderson',
    customerPhone: '(555) 567-8901',
    address: '147 Oak Ridge, Springfield, IL 62707',
    jobType: 'Shingle Repair',
    status: 'completed',
    priority: 'low',
    scheduledStart: '2024-01-20',
    estimatedDuration: '0.5 days',
    assignedCrew: ['Tom Brown'],
    estimateValue: 1200,
    materials: ['Replacement Shingles', 'Nails', 'Sealant'],
    notes: 'Minor wind damage repair',
    progress: 100,
    photos: 15
  }
]

const jobStatuses = [
  { 
    key: 'scheduled', 
    label: 'Scheduled', 
    color: 'bg-blue-100 text-blue-800',
    icon: Calendar,
    count: mockJobs.filter(j => j.status === 'scheduled').length
  },
  { 
    key: 'in_progress', 
    label: 'In Progress', 
    color: 'bg-yellow-100 text-yellow-800',
    icon: Wrench,
    count: mockJobs.filter(j => j.status === 'in_progress').length
  },
  { 
    key: 'materials_ordered', 
    label: 'Materials Ordered', 
    color: 'bg-purple-100 text-purple-800',
    icon: Truck,
    count: mockJobs.filter(j => j.status === 'materials_ordered').length
  },
  { 
    key: 'completed', 
    label: 'Completed', 
    color: 'bg-green-100 text-green-800',
    icon: CheckCircle,
    count: mockJobs.filter(j => j.status === 'completed').length
  }
]

export default function JobsPage() {
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800'
      case 'medium': return 'bg-yellow-100 text-yellow-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'scheduled': return Calendar
      case 'in_progress': return Wrench
      case 'materials_ordered': return Truck
      case 'completed': return CheckCircle
      default: return Clock
    }
  }

  const totalJobValue = mockJobs.reduce((sum, job) => sum + job.estimateValue, 0)
  const activeJobs = mockJobs.filter(j => ['scheduled', 'in_progress', 'materials_ordered'].includes(j.status))

  return (
    <div className="space-y-6">
      {/* Page header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Job Management</h1>
          <p className="text-gray-600">Track and manage your roofing projects</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" onClick={() => setViewMode(viewMode === 'grid' ? 'list' : 'grid')}>
            {viewMode === 'grid' ? 'List View' : 'Grid View'}
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Job
          </Button>
        </div>
      </div>

      {/* Job stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Wrench className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">{mockJobs.length}</div>
                <div className="text-sm text-gray-600">Total Jobs</div>
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
                <div className="text-2xl font-bold text-gray-900">{activeJobs.length}</div>
                <div className="text-sm text-gray-600">Active Jobs</div>
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
                  ${totalJobValue.toLocaleString()}
                </div>
                <div className="text-sm text-gray-600">Total Value</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <CheckCircle className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <div className="text-2xl font-bold text-gray-900">
                  {mockJobs.filter(j => j.status === 'completed').length}
                </div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status filters */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedStatus === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedStatus('all')}
        >
          All Jobs ({mockJobs.length})
        </Button>
        {jobStatuses.map((status) => (
          <Button
            key={status.key}
            variant={selectedStatus === status.key ? 'default' : 'outline'}
            size="sm"
            onClick={() => setSelectedStatus(status.key)}
          >
            <status.icon className="mr-2 h-4 w-4" />
            {status.label} ({status.count})
          </Button>
        ))}
      </div>

      {/* Jobs grid/list */}
      <div className={viewMode === 'grid' ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
        {mockJobs
          .filter(job => selectedStatus === 'all' || job.status === selectedStatus)
          .map((job) => {
            const StatusIcon = getStatusIcon(job.status)
            
            return (
              <Card key={job.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{job.jobType}</CardTitle>
                      <CardDescription>{job.customerName}</CardDescription>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(job.priority)}`}>
                        {job.priority.toUpperCase()}
                      </span>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Status and Progress */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <StatusIcon className="h-4 w-4 mr-2 text-gray-600" />
                        <span className="text-sm font-medium capitalize">
                          {job.status.replace('_', ' ')}
                        </span>
                      </div>
                      <span className="text-sm text-gray-600">{job.progress}%</span>
                    </div>
                    
                    {job.progress > 0 && (
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${job.progress}%` }}
                        ></div>
                      </div>
                    )}

                    {/* Job details */}
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        {job.address.split(',')[0]}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Start: {new Date(job.scheduledStart).toLocaleDateString()}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        Duration: {job.estimatedDuration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        Crew: {job.assignedCrew.join(', ')}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <DollarSign className="h-4 w-4 mr-2" />
                        Value: ${job.estimateValue.toLocaleString()}
                      </div>
                    </div>

                    {/* Materials */}
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Materials</h4>
                      <div className="flex flex-wrap gap-1">
                        {job.materials.map((material) => (
                          <span
                            key={material}
                            className="inline-flex items-center px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded"
                          >
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Notes */}
                    {job.notes && (
                      <div>
                        <p className="text-sm text-gray-600">{job.notes}</p>
                      </div>
                    )}

                    {/* Action buttons */}
                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Camera className="h-4 w-4 mr-1" />
                          {job.photos}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <FileText className="h-4 w-4 mr-1" />
                          Details
                        </Button>
                      </div>
                      <Button size="sm">
                        Update Status
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
      </div>

      {/* Today's schedule */}
      <Card>
        <CardHeader>
          <CardTitle>Today&apos;s Schedule</CardTitle>
          <CardDescription>Jobs scheduled for today</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockJobs
              .filter(job => job.scheduledStart === '2024-01-25')
              .map((job) => (
                <div key={job.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      <Wrench className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">{job.jobType}</h4>
                      <p className="text-sm text-gray-600">{job.customerName} • {job.address.split(',')[0]}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">
                      Crew: {job.assignedCrew.join(', ')}
                    </p>
                    <p className="text-sm text-gray-600">{job.estimatedDuration}</p>
                  </div>
                </div>
              ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
} 