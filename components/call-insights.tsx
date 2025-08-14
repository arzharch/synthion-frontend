"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, FileText, BarChart3, Headphones } from 'lucide-react'

const callData = [
  {
    id: "C001",
    timestamp: "2024-01-15 14:32",
    botName: "VoiceBot Alpha",
    outcome: "Appointment Booked",
    duration: "4:23",
    sentiment: "Positive",
    dropoffCause: "Completed",
  },
  {
    id: "C002",
    timestamp: "2024-01-15 14:28",
    botName: "SalesBot V2",
    outcome: "User Hung Up",
    duration: "1:45",
    sentiment: "Negative",
    dropoffCause: "User Disconnected",
  },
  {
    id: "C003",
    timestamp: "2024-01-15 14:25",
    botName: "VoiceBot Alpha",
    outcome: "Information Provided",
    duration: "3:12",
    sentiment: "Neutral",
    dropoffCause: "Completed",
  },
  {
    id: "C004",
    timestamp: "2024-01-15 14:20",
    botName: "SupportBot",
    outcome: "Escalated",
    duration: "6:45",
    sentiment: "Neutral",
    dropoffCause: "Transferred",
  },
  {
    id: "C005",
    timestamp: "2024-01-15 14:15",
    botName: "VoiceBot Alpha",
    outcome: "Lead Qualified",
    duration: "5:30",
    sentiment: "Positive",
    dropoffCause: "Completed",
  },
]

export function CallInsights() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Call Insights</h1>
          <p className="text-gray-400 mt-1">Analyze voice interactions and performance metrics</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Filters */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search calls..." className="pl-10 bg-gray-800/50 border-gray-700 text-white" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800/50 border-gray-700 text-white">
                <SelectValue placeholder="Bot Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bots</SelectItem>
                <SelectItem value="voicebot-alpha">VoiceBot Alpha</SelectItem>
                <SelectItem value="salesbot-v2">SalesBot V2</SelectItem>
                <SelectItem value="supportbot">SupportBot</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800/50 border-gray-700 text-white">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Durations</SelectItem>
                <SelectItem value="short">{"< 2 minutes"}</SelectItem>
                <SelectItem value="medium">2-5 minutes</SelectItem>
                <SelectItem value="long">{"> 5 minutes"}</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800/50 border-gray-700 text-white">
                <SelectValue placeholder="Outcome" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Outcomes</SelectItem>
                <SelectItem value="booked">Appointment Booked</SelectItem>
                <SelectItem value="info">Information Provided</SelectItem>
                <SelectItem value="qualified">Lead Qualified</SelectItem>
                <SelectItem value="hung-up">User Hung Up</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Call Data Table */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardHeader>
          <CardTitle className="text-white">Recent Calls</CardTitle>
          <CardDescription>Detailed call history and metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800">
                <TableHead className="text-gray-300">Call ID</TableHead>
                <TableHead className="text-gray-300">Timestamp</TableHead>
                <TableHead className="text-gray-300">Bot Name</TableHead>
                <TableHead className="text-gray-300">Outcome</TableHead>
                <TableHead className="text-gray-300">Duration</TableHead>
                <TableHead className="text-gray-300">Sentiment</TableHead>
                <TableHead className="text-gray-300">Drop-off Cause</TableHead>
                <TableHead className="text-gray-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {callData.map((call) => (
                <TableRow key={call.id} className="border-gray-800 hover:bg-gray-800/30">
                  <TableCell className="font-medium text-white">{call.id}</TableCell>
                  <TableCell className="text-gray-300">{call.timestamp}</TableCell>
                  <TableCell className="text-gray-300">{call.botName}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        call.outcome === "Appointment Booked"
                          ? "default"
                          : call.outcome === "User Hung Up"
                            ? "destructive"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {call.outcome}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">{call.duration}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        call.sentiment === "Positive"
                          ? "default"
                          : call.sentiment === "Negative"
                            ? "destructive"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {call.sentiment}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">{call.dropoffCause}</TableCell>
                  <TableCell>
                    <div className="flex gap-1">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-700">
                        <Headphones className="h-4 w-4 text-blue-400" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-700">
                        <FileText className="h-4 w-4 text-green-400" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 hover:bg-gray-700">
                        <BarChart3 className="h-4 w-4 text-purple-400" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
