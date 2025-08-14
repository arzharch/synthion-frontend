"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bot, TrendingUp, Clock, Zap, MessageSquare, Target, AlertTriangle, CheckCircle, XCircle } from "lucide-react"
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const agentData = [
  {
    id: "VA001",
    name: "VoiceBot Alpha",
    type: "Voice",
    successRate: 94.2,
    avgTurnDuration: 1200,
    gptTokenUsage: 15420,
    interruptionsCount: 12,
    timeToFirstResponse: 850,
    nlpAccuracy: 91.5,
    status: "Excellent",
    totalInteractions: 1247,
  },
  {
    id: "CB001",
    name: "ChatBot Pro",
    type: "Chat",
    successRate: 89.7,
    avgTurnDuration: 2100,
    gptTokenUsage: 12890,
    interruptionsCount: 0,
    timeToFirstResponse: 650,
    nlpAccuracy: 88.3,
    status: "Good",
    totalInteractions: 2156,
  },
  {
    id: "SB001",
    name: "SalesBot V2",
    type: "Voice",
    successRate: 87.1,
    avgTurnDuration: 1850,
    gptTokenUsage: 18750,
    interruptionsCount: 23,
    timeToFirstResponse: 1100,
    nlpAccuracy: 85.2,
    status: "Good",
    totalInteractions: 892,
  },
  {
    id: "SP001",
    name: "SupportBot",
    type: "Chat",
    successRate: 82.4,
    avgTurnDuration: 2800,
    gptTokenUsage: 21340,
    interruptionsCount: 0,
    timeToFirstResponse: 950,
    nlpAccuracy: 79.8,
    status: "Needs Improvement",
    totalInteractions: 1534,
  },
]

const performanceMetrics = [
  { metric: "Success Rate", voicebot: 94, chatbot: 90, salesbot: 87, supportbot: 82 },
  { metric: "NLP Accuracy", voicebot: 92, chatbot: 88, salesbot: 85, supportbot: 80 },
  { metric: "Response Speed", voicebot: 85, chatbot: 95, salesbot: 78, supportbot: 82 },
  { metric: "User Satisfaction", voicebot: 91, chatbot: 87, salesbot: 84, supportbot: 79 },
]

const radarData = [
  { subject: "Success Rate", A: 94, B: 90, fullMark: 100 },
  { subject: "NLP Accuracy", A: 92, B: 88, fullMark: 100 },
  { subject: "Response Speed", A: 85, B: 95, fullMark: 100 },
  { subject: "Consistency", A: 89, B: 86, fullMark: 100 },
  { subject: "User Satisfaction", A: 91, B: 87, fullMark: 100 },
]

export function AgentScores() {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">AI Agent Scores</h1>
          <p className="text-gray-400 mt-1">Performance analytics and optimization insights</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <TrendingUp className="h-4 w-4 mr-2" />
          Generate Report
        </Button>
      </div>

      {/* Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white">Agent Performance Comparison</CardTitle>
            <CardDescription>Key metrics across all AI agents</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                voicebot: { label: "VoiceBot Alpha", color: "#3B82F6" },
                chatbot: { label: "ChatBot Pro", color: "#10B981" },
                salesbot: { label: "SalesBot V2", color: "#8B5CF6" },
                supportbot: { label: "SupportBot", color: "#F59E0B" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={performanceMetrics}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="metric" stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#9CA3AF" fontSize={12} tickLine={false} axisLine={false} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="voicebot" fill="#3B82F6" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="chatbot" fill="#10B981" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="salesbot" fill="#8B5CF6" radius={[2, 2, 0, 0]} />
                  <Bar dataKey="supportbot" fill="#F59E0B" radius={[2, 2, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white">Top Performers Analysis</CardTitle>
            <CardDescription>VoiceBot Alpha vs ChatBot Pro comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer
              config={{
                A: { label: "VoiceBot Alpha", color: "#3B82F6" },
                B: { label: "ChatBot Pro", color: "#10B981" },
              }}
              className="h-[300px]"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid stroke="#374151" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: "#9CA3AF", fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fill: "#9CA3AF", fontSize: 10 }} />
                  <Radar
                    name="VoiceBot Alpha"
                    dataKey="A"
                    stroke="#3B82F6"
                    fill="#3B82F6"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <Radar
                    name="ChatBot Pro"
                    dataKey="B"
                    stroke="#10B981"
                    fill="#10B981"
                    fillOpacity={0.1}
                    strokeWidth={2}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                </RadarChart>
              </ResponsiveContainer>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Agent Details */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {agentData.map((agent) => (
          <Card
            key={agent.id}
            className="bg-gray-900/50 border-gray-800/50 hover:bg-gray-900/70 transition-all duration-200"
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">{agent.name}</CardTitle>
                    <CardDescription>
                      {agent.type} Agent • {agent.totalInteractions} interactions
                    </CardDescription>
                  </div>
                </div>
                <Badge
                  variant={
                    agent.status === "Excellent" ? "default" : agent.status === "Good" ? "secondary" : "destructive"
                  }
                  className="text-xs"
                >
                  {agent.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">Success Rate</span>
                    <span className="text-sm font-medium text-white">{agent.successRate}%</span>
                  </div>
                  <Progress value={agent.successRate} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-400">NLP Accuracy</span>
                    <span className="text-sm font-medium text-white">{agent.nlpAccuracy}%</span>
                  </div>
                  <Progress value={agent.nlpAccuracy} className="h-2" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-400" />
                  <div>
                    <p className="text-xs text-gray-400">Avg Turn Duration</p>
                    <p className="text-sm font-medium text-white">{(agent.avgTurnDuration / 1000).toFixed(1)}s</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-yellow-400" />
                  <div>
                    <p className="text-xs text-gray-400">First Response</p>
                    <p className="text-sm font-medium text-white">{(agent.timeToFirstResponse / 1000).toFixed(1)}s</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4 text-green-400" />
                  <div>
                    <p className="text-xs text-gray-400">Token Usage</p>
                    <p className="text-sm font-medium text-white">{agent.gptTokenUsage.toLocaleString()}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {agent.interruptionsCount > 15 ? (
                    <XCircle className="h-4 w-4 text-red-400" />
                  ) : agent.interruptionsCount > 5 ? (
                    <AlertTriangle className="h-4 w-4 text-yellow-400" />
                  ) : (
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  )}
                  <div>
                    <p className="text-xs text-gray-400">Interruptions</p>
                    <p className="text-sm font-medium text-white">{agent.interruptionsCount}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  View Details
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  Optimize
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recommendations */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Target className="h-5 w-5 text-green-400" />
            Optimization Recommendations
          </CardTitle>
          <CardDescription>AI-powered suggestions to improve agent performance</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
            <div className="flex items-start gap-3">
              <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5" />
              <div>
                <h4 className="font-medium text-blue-200">VoiceBot Alpha - Reduce Interruptions</h4>
                <p className="text-sm text-blue-300/80 mt-1">
                  Consider implementing longer pause detection (1.5s → 2.0s) to reduce user interruptions by ~40%.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5" />
              <div>
                <h4 className="font-medium text-yellow-200">SupportBot - Improve NLP Training</h4>
                <p className="text-sm text-yellow-300/80 mt-1">
                  Low NLP accuracy detected. Retrain with recent conversation data to improve understanding by ~15%.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 text-green-400 mt-0.5" />
              <div>
                <h4 className="font-medium text-green-200">ChatBot Pro - Optimize Response Time</h4>
                <p className="text-sm text-green-300/80 mt-1">
                  Excellent performance! Consider A/B testing shorter responses to improve engagement rates.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
