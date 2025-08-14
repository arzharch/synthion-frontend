"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Radio, Search, Eye, UserCheck, Phone, MessageSquare, Clock, Users, Activity, Pause, Play } from "lucide-react"
import { useState, useEffect } from "react"

const liveInteractions = [
  {
    id: "L001",
    type: "call",
    status: "active",
    user: "John D.",
    botName: "VoiceBot Alpha",
    duration: "2:34",
    currentPhase: "Qualification",
    transcript: "I'm interested in your premium package...",
    sentiment: "Positive",
  },
  {
    id: "L002",
    type: "chat",
    status: "active",
    user: "Sarah M.",
    botName: "ChatBot Pro",
    duration: "1:12",
    currentPhase: "Support Query",
    transcript: "Can you help me with my account settings?",
    sentiment: "Neutral",
  },
  {
    id: "L003",
    type: "call",
    status: "ended",
    user: "Mike R.",
    botName: "SalesBot V2",
    duration: "4:56",
    currentPhase: "Completed",
    transcript: "Thank you for your time today...",
    sentiment: "Positive",
  },
  {
    id: "L004",
    type: "chat",
    status: "active",
    user: "Emma L.",
    botName: "SupportBot",
    duration: "3:21",
    currentPhase: "Issue Resolution",
    transcript: "Let me check your order status...",
    sentiment: "Neutral",
  },
]

export function LiveFeed() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeCount, setActiveCount] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-3">
            <Radio className="h-8 w-8 text-red-400" />
            Live Feed
            <Badge className="bg-red-500 text-white animate-pulse">NEW</Badge>
          </h1>
          <p className="text-gray-400 mt-1">Real-time monitoring of active AI interactions</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-400">Current Time</p>
          <p className="text-lg font-mono text-white">{currentTime.toLocaleTimeString()}</p>
        </div>
      </div>

      {/* Live Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Active Interactions</p>
                <p className="text-2xl font-bold text-white mt-1">{activeCount}</p>
                <div className="flex items-center gap-1 mt-1">
                  <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
                  <p className="text-sm text-green-400">Live</p>
                </div>
              </div>
              <Activity className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Queue Length</p>
                <p className="text-2xl font-bold text-white mt-1">7</p>
                <p className="text-sm text-blue-400 mt-1">Avg wait: 45s</p>
              </div>
              <Users className="h-8 w-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Avg Session Time</p>
                <p className="text-2xl font-bold text-white mt-1">3:42</p>
                <p className="text-sm text-purple-400 mt-1">+12s from avg</p>
              </div>
              <Clock className="h-8 w-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400">Success Rate</p>
                <p className="text-2xl font-bold text-white mt-1">91.2%</p>
                <p className="text-sm text-green-400 mt-1">+2.1% today</p>
              </div>
              <UserCheck className="h-8 w-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardContent className="p-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search active sessions..."
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white"
                />
              </div>
            </div>
            <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent">
              <Pause className="h-4 w-4 mr-2" />
              Pause Monitoring
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Live Interactions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {liveInteractions.map((interaction) => (
          <Card
            key={interaction.id}
            className={`bg-gray-900/50 border-gray-800/50 hover:bg-gray-900/70 transition-all duration-200 ${
              interaction.status === "active" ? "ring-1 ring-green-500/30" : ""
            }`}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      interaction.status === "active" ? "bg-green-400 animate-pulse" : "bg-gray-500"
                    }`}
                  />
                  <div>
                    <CardTitle className="text-white text-lg">{interaction.id}</CardTitle>
                    <CardDescription className="flex items-center gap-2">
                      {interaction.type === "call" ? (
                        <Phone className="h-4 w-4" />
                      ) : (
                        <MessageSquare className="h-4 w-4" />
                      )}
                      {interaction.user} • {interaction.botName}
                    </CardDescription>
                  </div>
                </div>
                <Badge variant={interaction.status === "active" ? "default" : "secondary"} className="text-xs">
                  {interaction.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Duration</p>
                  <p className="text-sm font-medium text-white">{interaction.duration}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Current Phase</p>
                  <p className="text-sm font-medium text-white">{interaction.currentPhase}</p>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">Latest Transcript</p>
                <div className="p-3 rounded-lg bg-gray-800/50 border border-gray-700/50">
                  <p className="text-sm text-gray-300 italic">"{interaction.transcript}"</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    interaction.sentiment === "Positive"
                      ? "default"
                      : interaction.sentiment === "Negative"
                        ? "destructive"
                        : "secondary"
                  }
                  className="text-xs"
                >
                  {interaction.sentiment}
                </Badge>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Eye className="h-4 w-4 mr-1" />
                    Monitor
                  </Button>
                  {interaction.status === "active" && (
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-blue-500/30 text-blue-300 hover:bg-blue-500/10 bg-transparent"
                    >
                      <UserCheck className="h-4 w-4 mr-1" />
                      Take Over
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Live Transcript Viewer (Placeholder) */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Play className="h-5 w-5 text-green-400" />
            Live Transcript Viewer
          </CardTitle>
          <CardDescription>Real-time conversation monitoring (Select an active session above)</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gray-800/30 rounded-lg border border-gray-700/50 flex items-center justify-center">
            <div className="text-center">
              <Radio className="h-12 w-12 text-gray-500 mx-auto mb-4" />
              <p className="text-gray-400">Select an active interaction to view live transcript</p>
              <p className="text-sm text-gray-500 mt-2">Real-time conversation will appear here</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
