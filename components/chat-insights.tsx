"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { MessageSquare, Search, Download, Clock, AlertTriangle, TrendingUp } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, BarChart, Bar } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chatData = [
  {
    id: "CH001",
    timestamp: "2024-01-15 14:32",
    botName: "ChatBot Pro",
    outcome: "Query Resolved",
    messages: 12,
    avgLatency: "1.2s",
    sentiment: "Positive",
    dropoffPoint: "Completed",
    escalations: 0,
  },
  {
    id: "CH002",
    timestamp: "2024-01-15 14:28",
    botName: "SalesBot Chat",
    outcome: "Lead Qualified",
    messages: 8,
    avgLatency: "0.8s",
    sentiment: "Positive",
    dropoffPoint: "Completed",
    escalations: 0,
  },
  {
    id: "CH003",
    timestamp: "2024-01-15 14:25",
    botName: "SupportBot Chat",
    outcome: "Escalated",
    messages: 15,
    avgLatency: "2.1s",
    sentiment: "Neutral",
    dropoffPoint: "Human Handoff",
    escalations: 1,
  },
  {
    id: "CH004",
    timestamp: "2024-01-15 14:20",
    botName: "ChatBot Pro",
    outcome: "User Left",
    messages: 4,
    avgLatency: "1.5s",
    sentiment: "Negative",
    dropoffPoint: "Message 4",
    escalations: 0,
  },
]

const latencyData = [
  { time: "00:00", latency: 1.2 },
  { time: "04:00", latency: 0.9 },
  { time: "08:00", latency: 1.8 },
  { time: "12:00", latency: 2.1 },
  { time: "16:00", latency: 1.6 },
  { time: "20:00", latency: 1.3 },
]

const commonPhrases = [
  { phrase: "How can I help you?", frequency: 156, category: "Greeting" },
  { phrase: "Let me check that for you", frequency: 89, category: "Processing" },
  { phrase: "Is there anything else?", frequency: 67, category: "Follow-up" },
  { phrase: "I understand your concern", frequency: 45, category: "Empathy" },
  { phrase: "Thank you for contacting us", frequency: 34, category: "Closing" },
]

export function ChatInsights() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Chat Insights</h1>
          <p className="text-gray-400 mt-1">Analyze text-based interactions and chatbot performance</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Avg Response Latency</p>
                <p className="text-2xl font-bold text-white mt-1">1.4s</p>
                <p className="text-sm text-green-400 mt-1">-0.2s from yesterday</p>
              </div>
              <Clock className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Escalations</p>
                <p className="text-2xl font-bold text-white mt-1">23</p>
                <p className="text-sm text-red-400 mt-1">+5 from yesterday</p>
              </div>
              <AlertTriangle className="h-8 w-8 text-orange-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Resolution Rate</p>
                <p className="text-2xl font-bold text-white mt-1">87.3%</p>
                <p className="text-sm text-green-400 mt-1">+2.1% from yesterday</p>
              </div>
              <TrendingUp className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Avg Messages/Chat</p>
                <p className="text-2xl font-bold text-white mt-1">9.8</p>
                <p className="text-sm text-blue-400 mt-1">-1.2 from yesterday</p>
              </div>
              <MessageSquare className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white">Response Latency Trend</CardTitle>
            <CardDescription>Average response time throughout the day</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                latency: {
                  label: "Latency (seconds)",
                  color: "hsl(var(--chart-1))",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={latencyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="time" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="latency"
                    stroke="#3B82F6"
                    strokeWidth={2}
                    dot={{ fill: "#3B82F6", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white">Common Phrases Triggered</CardTitle>
            <CardDescription>Most frequently used bot responses</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                frequency: {
                  label: "Frequency",
                  color: "hsl(var(--chart-2))",
                },
              }}
              className="h-[250px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={commonPhrases} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis type="number" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis
                    type="category"
                    dataKey="phrase"
                    stroke="#9CA3AF"
                    fontSize={10}
                    tickLine={false}
                    axisLine={false}
                    width={120}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="frequency" fill="#10B981" radius={[0, 2, 2, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[200px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search chats..." className="pl-10 bg-gray-800/50 border-gray-700 text-white" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800/50 border-gray-700 text-white">
                <SelectValue placeholder="Bot Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bots</SelectItem>
                <SelectItem value="chatbot-pro">ChatBot Pro</SelectItem>
                <SelectItem value="salesbot-chat">SalesBot Chat</SelectItem>
                <SelectItem value="supportbot-chat">SupportBot Chat</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800/50 border-gray-700 text-white">
                <SelectValue placeholder="Outcome" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Outcomes</SelectItem>
                <SelectItem value="resolved">Query Resolved</SelectItem>
                <SelectItem value="qualified">Lead Qualified</SelectItem>
                <SelectItem value="escalated">Escalated</SelectItem>
                <SelectItem value="abandoned">User Left</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Chat Data Table */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardHeader>
          <CardTitle className="text-white">Recent Chats</CardTitle>
          <CardDescription>Detailed chat history and performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800">
                <TableHead className="text-gray-300">Chat ID</TableHead>
                <TableHead className="text-gray-300">Timestamp</TableHead>
                <TableHead className="text-gray-300">Bot Name</TableHead>
                <TableHead className="text-gray-300">Outcome</TableHead>
                <TableHead className="text-gray-300">Messages</TableHead>
                <TableHead className="text-gray-300">Avg Latency</TableHead>
                <TableHead className="text-gray-300">Sentiment</TableHead>
                <TableHead className="text-gray-300">Drop-off Point</TableHead>
                <TableHead className="text-gray-300">Escalations</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {chatData.map((chat) => (
                <TableRow key={chat.id} className="border-gray-800 hover:bg-gray-800/30">
                  <TableCell className="font-medium text-white">{chat.id}</TableCell>
                  <TableCell className="text-gray-300">{chat.timestamp}</TableCell>
                  <TableCell className="text-gray-300">{chat.botName}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        chat.outcome === "Query Resolved" || chat.outcome === "Lead Qualified"
                          ? "default"
                          : chat.outcome === "User Left"
                            ? "destructive"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {chat.outcome}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">{chat.messages}</TableCell>
                  <TableCell className="text-gray-300">{chat.avgLatency}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        chat.sentiment === "Positive"
                          ? "default"
                          : chat.sentiment === "Negative"
                            ? "destructive"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {chat.sentiment}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-gray-300">{chat.dropoffPoint}</TableCell>
                  <TableCell className="text-center">
                    <Badge variant={chat.escalations > 0 ? "destructive" : "secondary"} className="text-xs">
                      {chat.escalations}
                    </Badge>
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
