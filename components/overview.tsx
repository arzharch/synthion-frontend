"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, MessageSquare, TrendingUp, Users, Activity, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const todayStats = [
  { label: "Total Calls", value: "1,247", icon: Phone, change: "+12%", trend: "up" },
  { label: "Total Chats", value: "3,891", icon: MessageSquare, change: "+8%", trend: "up" },
  { label: "Conversion Rate", value: "23.4%", icon: TrendingUp, change: "+2.1%", trend: "up" },
]

const agentLeaderboard = [
  { name: "VoiceBot Alpha", rating: 4.8, calls: 156, badge: "Excellent", color: "#0099ff" },
  { name: "ChatBot Pro", rating: 4.6, calls: 203, badge: "Good", color: "#00cc88" },
  { name: "SalesBot V2", rating: 4.4, calls: 89, badge: "Good", color: "#8b5cf6" },
  { name: "SupportBot", rating: 4.2, calls: 134, badge: "Good", color: "#f59e0b" },
]

const recentActivity = [
  { id: "C001", type: "call", status: "completed", time: "2 min ago", outcome: "Appointment Booked" },
  { id: "CH045", type: "chat", status: "completed", time: "3 min ago", outcome: "Query Resolved" },
  { id: "C002", type: "call", status: "failed", time: "5 min ago", outcome: "User Hung Up" },
  { id: "CH046", type: "chat", status: "completed", time: "7 min ago", outcome: "Lead Qualified" },
  { id: "C003", type: "call", status: "completed", time: "8 min ago", outcome: "Information Provided" },
]

export function Overview() {
  return (
    <div className="p-8 space-y-8">
      {/* Today's Summary */}
      <div>
        <div className="flex items-center gap-4 mb-6">
          <div className="h-10 w-10 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-[#0099ff]/20">
            <Image
              src="/synthion-logo.png"
              alt="Synthion AI"
              width={40}
              height={40}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-3xl font-bold text-foreground">Today's Summary</h2>
          <div className="h-1 w-12 bg-gradient-to-r from-[#0099ff] to-[#0066cc] rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {todayStats.map((stat, index) => (
            <Card
              key={index}
              className="bg-card/40 border-border hover:bg-card/60 transition-all duration-300 hover:shadow-xl hover:shadow-[#0099ff]/10 backdrop-blur-sm group"
            >
              <CardContent className="p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-2">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mb-2">{stat.value}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1 text-[#0099ff]">
                        <ArrowUpRight className="h-4 w-4" />
                        <span className="text-sm font-medium">{stat.change}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">vs yesterday</span>
                    </div>
                  </div>
                  <div className="h-16 w-16 rounded-2xl bg-[#0099ff]/10 flex items-center justify-center group-hover:bg-[#0099ff]/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-[#0099ff]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Agent Leaderboard */}
        <Card className="bg-card/40 border-border backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-[#0099ff]/10 flex items-center justify-center">
                <Users className="h-5 w-5 text-[#0099ff]" />
              </div>
              <div>
                <CardTitle className="text-foreground text-xl">Agent Leaderboard</CardTitle>
                <CardDescription className="text-muted-foreground">Top performing AI agents today</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {agentLeaderboard.map((agent, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                    style={{ backgroundColor: agent.color }}
                  >
                    {index + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{agent.name}</p>
                    <p className="text-sm text-muted-foreground">{agent.calls} interactions</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Badge
                    variant={agent.badge === "Excellent" ? "default" : "secondary"}
                    className={`text-xs font-medium ${agent.badge === "Excellent" ? "bg-[#0099ff]/20 text-[#0099ff] border-[#0099ff]/30" : ""}`}
                  >
                    {agent.badge}
                  </Badge>
                  <span className="text-lg font-bold text-foreground">{agent.rating}</span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-card/40 border-border backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <Activity className="h-5 w-5 text-green-400" />
              </div>
              <div>
                <CardTitle className="text-foreground text-xl">Recent Activity</CardTitle>
                <CardDescription className="text-muted-foreground">Last 10 interactions</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentActivity.map((activity, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-all duration-200"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-3 w-3 rounded-full ${
                      activity.status === "completed"
                        ? "bg-green-400 shadow-lg shadow-green-400/30"
                        : activity.status === "failed"
                          ? "bg-red-400 shadow-lg shadow-red-400/30"
                          : "bg-yellow-400 shadow-lg shadow-yellow-400/30"
                    }`}
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{activity.id}</p>
                    <p className="text-xs text-muted-foreground">{activity.outcome}</p>
                  </div>
                </div>
                <div className="text-right">
                  <Badge variant="outline" className="text-xs mb-1 border-border text-muted-foreground">
                    {activity.type}
                  </Badge>
                  <p className="text-xs text-muted-foreground">{activity.time}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
