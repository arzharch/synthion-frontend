"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Download, DollarSign, TrendingUp, Bot } from "lucide-react"

const costsData = [
  {
    botId: "BOT001",
    botName: "VoiceBot Alpha",
    agentScore: 4.8,
    costPerMin: "$0.12",
    totalCost: "$156.80",
    minutesUsed: 1307,
    efficiency: "Excellent",
  },
  {
    botId: "BOT002",
    botName: "ChatBot Pro",
    agentScore: 4.6,
    costPerMin: "$0.08",
    totalCost: "$89.60",
    minutesUsed: 1120,
    efficiency: "Good",
  },
  {
    botId: "BOT003",
    botName: "SalesBot V2",
    agentScore: 4.4,
    costPerMin: "$0.15",
    totalCost: "$201.75",
    minutesUsed: 1345,
    efficiency: "Good",
  },
  {
    botId: "BOT004",
    botName: "SupportBot",
    agentScore: 4.2,
    costPerMin: "$0.10",
    totalCost: "$134.50",
    minutesUsed: 1345,
    efficiency: "Average",
  },
  {
    botId: "BOT005",
    botName: "LeadBot Pro",
    agentScore: 4.7,
    costPerMin: "$0.14",
    totalCost: "$182.70",
    minutesUsed: 1305,
    efficiency: "Excellent",
  },
]

export function Costs() {
  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-white">Cost Analysis</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-[#0099ff] to-[#0066cc] rounded-full"></div>
        </div>
        <Button className="bg-[#0099ff] hover:bg-[#0088ee] text-white shadow-lg shadow-[#0099ff]/20">
          <Download className="h-4 w-4 mr-2" />
          Export Data
        </Button>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">Total Cost Today</p>
                <p className="text-2xl font-bold text-white mb-2">$765.35</p>
                <div className="flex items-center gap-1 text-green-400">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">-8.2%</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-xl bg-[#0099ff]/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-[#0099ff]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">Avg Cost/Min</p>
                <p className="text-2xl font-bold text-white mb-2">$0.118</p>
                <div className="flex items-center gap-1 text-green-400">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">-$0.02</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-green-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">Total Minutes</p>
                <p className="text-2xl font-bold text-white mb-2">6,422</p>
                <div className="flex items-center gap-1 text-[#0099ff]">
                  <TrendingUp className="h-4 w-4" />
                  <span className="text-sm font-medium">+12.4%</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <Bot className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filters */}
      <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search by bot name or ID..."
                  className="pl-12 bg-gray-800/50 border-gray-700 text-white h-12 rounded-xl"
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Costs Data Table */}
      <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#0099ff]/10 flex items-center justify-center">
              <DollarSign className="h-5 w-5 text-[#0099ff]" />
            </div>
            <div>
              <CardTitle className="text-white text-xl">Bot Cost Analysis</CardTitle>
              <CardDescription>Detailed cost breakdown and performance metrics</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-800/50 hover:bg-transparent">
                  <TableHead className="text-gray-300 font-medium">Bot ID</TableHead>
                  <TableHead className="text-gray-300 font-medium">Bot Name</TableHead>
                  <TableHead className="text-gray-300 font-medium">Agent Score</TableHead>
                  <TableHead className="text-gray-300 font-medium">Cost/Min</TableHead>
                  <TableHead className="text-gray-300 font-medium">Total Cost</TableHead>
                  <TableHead className="text-gray-300 font-medium">Minutes Used</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {costsData.map((bot) => (
                  <TableRow key={bot.botId} className="border-gray-800/30 hover:bg-gray-800/20 transition-colors">
                    <TableCell className="font-medium text-white">{bot.botId}</TableCell>
                    <TableCell className="text-gray-300 font-medium">{bot.botName}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <span className="text-white font-semibold">{bot.agentScore}</span>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full mr-1 ${
                                i < Math.floor(bot.agentScore) ? "bg-[#0099ff]" : "bg-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-white font-semibold">{bot.costPerMin}</TableCell>
                    <TableCell className="text-white font-semibold">{bot.totalCost}</TableCell>
                    <TableCell className="text-gray-300">{bot.minutesUsed.toLocaleString()}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
