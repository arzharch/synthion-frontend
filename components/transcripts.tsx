"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Search, Download, FileText, Brain, MessageSquare, User, Clock, AlertTriangle, TrendingUp, ArrowUpRight } from 'lucide-react'
import { useState } from "react"

const transcriptData = [
  {
    id: "T001",
    timestamp: "2024-01-15 14:32",
    botName: "VoiceBot Alpha",
    type: "call",
    duration: "4:23",
    sentiment: "Positive",
    category: "Booking",
    keywords: ["appointment", "schedule", "premium package"],
    transcript:
      "Hello! I'm interested in scheduling an appointment for your premium package. Can you help me with that?",
    userType: "Lead",
    outcome: "Query Resolved",
  },
  {
    id: "T002",
    timestamp: "2024-01-15 14:28",
    botName: "ChatBot Pro",
    type: "chat",
    duration: "2:15",
    sentiment: "Neutral",
    category: "Query",
    keywords: ["pricing", "features", "comparison"],
    transcript:
      "What are the differences between your basic and premium plans? I need to understand the pricing structure.",
    userType: "Prospect",
    outcome: "Lead Qualified",
  },
  {
    id: "T003",
    timestamp: "2024-01-15 14:25",
    botName: "SupportBot",
    type: "chat",
    duration: "6:45",
    sentiment: "Negative",
    category: "Complaint",
    keywords: ["issue", "problem", "refund", "dissatisfied"],
    transcript: "I'm having issues with my account and I'm not satisfied with the service. I want to discuss a refund.",
    userType: "Customer",
    outcome: "Escalated",
  },
  {
    id: "T004",
    timestamp: "2024-01-15 14:20",
    botName: "SalesBot V2",
    type: "call",
    duration: "3:12",
    sentiment: "Positive",
    category: "Off-topic",
    keywords: ["weather", "casual", "unrelated"],
    transcript: "Nice weather today, isn't it? By the way, I was wondering about your services...",
    userType: "Lead",
    outcome: "User Left",
  },
]

export function Transcripts() {
  const [selectedTranscript, setSelectedTranscript] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredTranscripts = transcriptData.filter(
    (transcript) =>
      transcript.transcript.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transcript.keywords.some((keyword) => keyword.toLowerCase().includes(searchQuery.toLowerCase())),
  )

  return (
    <div className="p-8 space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl font-bold text-white">Transcript Review</h1>
          <div className="h-1 w-12 bg-gradient-to-r from-[#0099ff] to-[#0066cc] rounded-full"></div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent">
            <Brain className="h-4 w-4 mr-2" />
            Retrain AI
          </Button>
          <Button className="bg-[#0099ff] hover:bg-[#0088ee] text-white shadow-lg shadow-[#0099ff]/20">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">Avg Response Latency</p>
                <p className="text-2xl font-bold text-white mb-2">1.4s</p>
                <div className="flex items-center gap-1 text-green-400">
                  <ArrowUpRight className="h-4 w-4 rotate-180" />
                  <span className="text-sm font-medium">-0.2s</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-xl bg-[#0099ff]/10 flex items-center justify-center">
                <Clock className="h-6 w-6 text-[#0099ff]" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">Escalations</p>
                <p className="text-2xl font-bold text-white mb-2">23</p>
                <div className="flex items-center gap-1 text-red-400">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm font-medium">+5</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-xl bg-orange-500/10 flex items-center justify-center">
                <AlertTriangle className="h-6 w-6 text-orange-400" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm hover:bg-gray-900/60 transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-400 mb-2">Resolution Rate</p>
                <p className="text-2xl font-bold text-white mb-2">87.3%</p>
                <div className="flex items-center gap-1 text-green-400">
                  <ArrowUpRight className="h-4 w-4" />
                  <span className="text-sm font-medium">+2.1%</span>
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
                <p className="text-sm font-medium text-gray-400 mb-2">Avg Messages/Chat</p>
                <p className="text-2xl font-bold text-white mb-2">9.8</p>
                <div className="flex items-center gap-1 text-[#0099ff]">
                  <ArrowUpRight className="h-4 w-4 rotate-180" />
                  <span className="text-sm font-medium">-1.2</span>
                </div>
              </div>
              <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                <MessageSquare className="h-6 w-6 text-purple-400" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm">
        <CardContent className="p-6">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Search transcripts, keywords, or phrases..."
                  className="pl-12 bg-gray-800/50 border-gray-700 text-white h-12 rounded-xl"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800/50 border-gray-700 text-white h-12 rounded-xl">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="booking">Booking</SelectItem>
                <SelectItem value="query">Query</SelectItem>
                <SelectItem value="complaint">Complaint</SelectItem>
                <SelectItem value="off-topic">Off-topic</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800/50 border-gray-700 text-white h-12 rounded-xl">
                <SelectValue placeholder="Sentiment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sentiments</SelectItem>
                <SelectItem value="positive">Positive</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="negative">Negative</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px] bg-gray-800/50 border-gray-700 text-white h-12 rounded-xl">
                <SelectValue placeholder="Bot Name" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Bots</SelectItem>
                <SelectItem value="voicebot-alpha">VoiceBot Alpha</SelectItem>
                <SelectItem value="chatbot-pro">ChatBot Pro</SelectItem>
                <SelectItem value="supportbot">SupportBot</SelectItem>
                <SelectItem value="salesbot-v2">SalesBot V2</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Transcript List */}
      <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[#0099ff]/10 flex items-center justify-center">
              <FileText className="h-5 w-5 text-[#0099ff]" />
            </div>
            <div>
              <CardTitle className="text-white text-xl">Transcript Library</CardTitle>
              <CardDescription>
                {filteredTranscripts.length} of {transcriptData.length} transcripts
                {searchQuery && ` matching "${searchQuery}"`}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4 max-h-[600px] overflow-y-auto">
            {filteredTranscripts.map((transcript) => (
              <div
                key={transcript.id}
                className={`p-6 rounded-xl border transition-all cursor-pointer ${
                  selectedTranscript === transcript.id
                    ? "bg-[#0099ff]/10 border-[#0099ff]/30 shadow-lg shadow-[#0099ff]/10"
                    : "bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50"
                }`}
                onClick={() => setSelectedTranscript(transcript.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="text-xs font-medium px-3 py-1">
                      {transcript.id}
                    </Badge>
                    <Badge variant="outline" className="text-xs font-medium px-3 py-1">
                      {transcript.category}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span>{transcript.timestamp}</span>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-sm text-gray-300 line-clamp-2 leading-relaxed">{transcript.transcript}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-300">{transcript.botName}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge
                      variant={
                        transcript.sentiment === "Positive"
                          ? "default"
                          : transcript.sentiment === "Negative"
                            ? "destructive"
                            : "secondary"
                      }
                      className={`text-xs font-medium ${
                        transcript.sentiment === "Positive" ? "bg-green-500/20 text-green-400 border-green-500/30" : ""
                      }`}
                    >
                      {transcript.sentiment}
                    </Badge>
                    <Badge
                      variant={
                        transcript.outcome === "Query Resolved" || transcript.outcome === "Lead Qualified"
                          ? "default"
                          : transcript.outcome === "Escalated"
                            ? "destructive"
                            : "secondary"
                      }
                      className={`text-xs font-medium ${
                        transcript.outcome === "Query Resolved" || transcript.outcome === "Lead Qualified"
                          ? "bg-[#0099ff]/20 text-[#0099ff] border-[#0099ff]/30"
                          : ""
                      }`}
                    >
                      {transcript.outcome}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {transcript.keywords.slice(0, 3).map((keyword, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full font-medium">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Detailed Transcript View */}
      {selectedTranscript && (
        <Card className="bg-gray-900/40 border-gray-800/30 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#0099ff]/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-[#0099ff]" />
              </div>
              <div>
                <CardTitle className="text-white text-xl">Detailed Transcript - {selectedTranscript}</CardTitle>
                <CardDescription>Full conversation analysis and labeling</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {(() => {
              const transcript = transcriptData.find((t) => t.id === selectedTranscript)
              if (!transcript) return null

              return (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-300">Category</label>
                      <Select defaultValue={transcript.category.toLowerCase()}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white h-12 rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="booking">Booking</SelectItem>
                          <SelectItem value="query">Query</SelectItem>
                          <SelectItem value="complaint">Complaint</SelectItem>
                          <SelectItem value="off-topic">Off-topic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-300">Sentiment</label>
                      <Select defaultValue={transcript.sentiment.toLowerCase()}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white h-12 rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="positive">Positive</SelectItem>
                          <SelectItem value="neutral">Neutral</SelectItem>
                          <SelectItem value="negative">Negative</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-medium text-gray-300">Outcome</label>
                      <Select defaultValue={transcript.outcome.toLowerCase().replace(" ", "-")}>
                        <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white h-12 rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="query-resolved">Query Resolved</SelectItem>
                          <SelectItem value="lead-qualified">Lead Qualified</SelectItem>
                          <SelectItem value="escalated">Escalated</SelectItem>
                          <SelectItem value="user-left">User Left</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">Full Transcript</label>
                    <Textarea
                      defaultValue={transcript.transcript}
                      className="min-h-[200px] bg-gray-800/50 border-gray-700 text-white rounded-xl"
                      placeholder="Full conversation transcript..."
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-300">Keywords</label>
                    <div className="flex flex-wrap gap-2">
                      {transcript.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs px-3 py-1">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-[#0099ff] hover:bg-[#0088ee] text-white shadow-lg shadow-[#0099ff]/20">
                      Save Changes
                    </Button>
                    <Button
                      variant="outline"
                      className="border-green-500/30 text-green-300 hover:bg-green-500/10 bg-transparent"
                    >
                      <Brain className="h-4 w-4 mr-2" />
                      Retrain AI on This
                    </Button>
                  </div>
                </>
              )
            })()}
          </CardContent>
        </Card>
      )}
    </div>
  )
}
