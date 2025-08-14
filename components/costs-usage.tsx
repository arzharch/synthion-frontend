"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DollarSign, Download, TrendingUp, MessageSquare, Phone, AlertTriangle, Calendar } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const usageData = [
  { date: "Jan 1", voiceMinutes: 1240, chatMessages: 3450, cost: 156.8 },
  { date: "Jan 2", voiceMinutes: 1180, chatMessages: 3200, cost: 148.2 },
  { date: "Jan 3", voiceMinutes: 1350, chatMessages: 3800, cost: 172.4 },
  { date: "Jan 4", voiceMinutes: 1420, chatMessages: 4100, cost: 185.6 },
  { date: "Jan 5", voiceMinutes: 1380, chatMessages: 3950, cost: 178.9 },
  { date: "Jan 6", voiceMinutes: 1290, chatMessages: 3600, cost: 162.3 },
  { date: "Jan 7", voiceMinutes: 1450, chatMessages: 4200, cost: 192.5 },
]

const botCosts = [
  { name: "VoiceBot Alpha", voiceCost: 89.4, chatCost: 0, totalCost: 89.4, color: "#3B82F6" },
  { name: "ChatBot Pro", voiceCost: 0, chatCost: 67.2, totalCost: 67.2, color: "#10B981" },
  { name: "SalesBot V2", voiceCost: 45.8, chatCost: 23.1, totalCost: 68.9, color: "#8B5CF6" },
  { name: "SupportBot", voiceCost: 0, chatCost: 34.5, totalCost: 34.5, color: "#F59E0B" },
]

const forecastData = [
  { month: "Current", actual: 4250, projected: 4250 },
  { month: "Next", actual: 0, projected: 4680 },
  { month: "Month+2", actual: 0, projected: 5120 },
  { month: "Month+3", actual: 0, projected: 5450 },
]

export function CostsUsage() {
  const totalCost = botCosts.reduce((sum, bot) => sum + bot.totalCost, 0)
  const totalMinutes = usageData.reduce((sum, day) => sum + day.voiceMinutes, 0)
  const totalMessages = usageData.reduce((sum, day) => sum + day.chatMessages, 0)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Costs & Usage</h1>
          <p className="text-gray-400 mt-1">Monitor spending and resource utilization</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Current Period Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Total Cost</p>
                <p className="text-2xl font-bold text-white mt-1">${totalCost.toFixed(2)}</p>
                <p className="text-sm text-green-400 mt-1">-8.2% from last week</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Voice Minutes</p>
                <p className="text-2xl font-bold text-white mt-1">{totalMinutes.toLocaleString()}</p>
                <p className="text-sm text-blue-400 mt-1">+12.4% from last week</p>
              </div>
              <Phone className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Chat Messages</p>
                <p className="text-2xl font-bold text-white mt-1">{totalMessages.toLocaleString()}</p>
                <p className="text-sm text-purple-400 mt-1">+5.7% from last week</p>
              </div>
              <MessageSquare className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Cost per Interaction</p>
                <p className="text-2xl font-bold text-white mt-1">$0.18</p>
                <p className="text-sm text-green-400 mt-1">-$0.02 from last week</p>
              </div>
              <TrendingUp className="h-8 w-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Usage Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white">Daily Usage & Costs</CardTitle>
            <CardDescription>Voice minutes, chat messages, and associated costs</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                cost: { label: "Cost ($)", color: "#10B981" },
                voiceMinutes: { label: "Voice Minutes", color: "#3B82F6" },
                chatMessages: { label: "Chat Messages", color: "#8B5CF6" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={usageData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="cost"
                    stroke="#10B981"
                    strokeWidth={2}
                    dot={{ fill: "#10B981", strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white">Cost Distribution by Bot</CardTitle>
            <CardDescription>Breakdown of costs across AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                totalCost: { label: "Total Cost", color: "hsl(var(--chart-1))" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={botCosts}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="totalCost"
                  >
                    {botCosts.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
            <div className="mt-4 space-y-2">
              {botCosts.map((bot, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: bot.color }} />
                    <span className="text-gray-300">{bot.name}</span>
                  </div>
                  <span className="text-white font-medium">${bot.totalCost.toFixed(2)}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bot Cost Breakdown */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardHeader>
          <CardTitle className="text-white">Detailed Cost Breakdown</CardTitle>
          <CardDescription>Voice and chat costs per AI agent</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {botCosts.map((bot, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-colors">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: bot.color }} />
                    <h3 className="font-medium text-white">{bot.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold text-white">${bot.totalCost.toFixed(2)}</p>
                    <p className="text-xs text-gray-400">Total Cost</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">Voice Cost</span>
                      <span className="text-sm font-medium text-white">${bot.voiceCost.toFixed(2)}</span>
                    </div>
                    <Progress value={(bot.voiceCost / bot.totalCost) * 100} className="h-2" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-gray-400">Chat Cost</span>
                      <span className="text-sm font-medium text-white">${bot.chatCost.toFixed(2)}</span>
                    </div>
                    <Progress value={(bot.chatCost / bot.totalCost) * 100} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Forecasting */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-400" />
            Cost Forecasting
          </CardTitle>
          <CardDescription>Projected costs based on current usage patterns</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4 p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-200">Budget Alert</h4>
                <p className="text-sm text-yellow-300/80 mt-1">
                  Current usage trend suggests you'll exceed your monthly budget of $5,000 by ~$450.
                </p>
              </div>
            </div>
          </div>

          <ChartContainer
            config={{
              actual: { label: "Actual", color: "#10B981" },
              projected: { label: "Projected", color: "#3B82F6" },
            }}
            className="h-[250px]"
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={forecastData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="actual" fill="#10B981" radius={[2, 2, 0, 0]} />
                <Bar dataKey="projected" fill="#3B82F6" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>

          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3 rounded-lg bg-gray-800/30">
              <p className="text-sm text-gray-400">Next Month Estimate</p>
              <p className="text-xl font-bold text-white">$4,680</p>
              <p className="text-xs text-blue-400">+10.1% increase</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-gray-800/30">
              <p className="text-sm text-gray-400">Quarterly Projection</p>
              <p className="text-xl font-bold text-white">$15,250</p>
              <p className="text-xs text-purple-400">Based on trends</p>
            </div>
            <div className="text-center p-3 rounded-lg bg-gray-800/30">
              <p className="text-sm text-gray-400">Cost per Interaction</p>
              <p className="text-xl font-bold text-white">$0.16</p>
              <p className="text-xs text-green-400">Optimizing</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
