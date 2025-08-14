"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Switch } from "@/components/ui/switch"
import {
  Play,
  Pause,
  Download,
  Share,
  Search,
  Headphones,
  FileAudio,
  Clock,
  User,
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
} from "lucide-react"
import { useState } from "react"

const recordingData = [
  {
    id: "R001",
    callId: "C001",
    timestamp: "2024-01-15 14:32",
    botName: "VoiceBot Alpha",
    duration: "4:23",
    fileSize: "2.1 MB",
    quality: "HD",
    sentiment: "Positive",
    outcome: "Appointment Booked",
    transcriptAvailable: true,
    audioUrl: "/placeholder-audio.mp3",
  },
  {
    id: "R002",
    callId: "C002",
    timestamp: "2024-01-15 14:28",
    botName: "SalesBot V2",
    duration: "1:45",
    fileSize: "0.8 MB",
    quality: "Standard",
    sentiment: "Negative",
    outcome: "User Hung Up",
    transcriptAvailable: true,
    audioUrl: "/placeholder-audio.mp3",
  },
  {
    id: "R003",
    callId: "C003",
    timestamp: "2024-01-15 14:25",
    botName: "VoiceBot Alpha",
    duration: "3:12",
    fileSize: "1.5 MB",
    quality: "HD",
    sentiment: "Neutral",
    outcome: "Information Provided",
    transcriptAvailable: true,
    audioUrl: "/placeholder-audio.mp3",
  },
  {
    id: "R004",
    callId: "C004",
    timestamp: "2024-01-15 14:20",
    botName: "SupportBot",
    duration: "6:45",
    fileSize: "3.2 MB",
    quality: "HD",
    sentiment: "Neutral",
    outcome: "Escalated",
    transcriptAvailable: false,
    audioUrl: "/placeholder-audio.mp3",
  },
]

export function Recordings() {
  const [selectedRecording, setSelectedRecording] = useState<string | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(263) // 4:23 in seconds
  const [volume, setVolume] = useState([75])
  const [isMuted, setIsMuted] = useState(false)
  const [playbackSpeed, setPlaybackSpeed] = useState(1)
  const [showTranscript, setShowTranscript] = useState(true)
  const [muteAI, setMuteAI] = useState(false)
  const [muteUser, setMuteUser] = useState(false)

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const selectedRecordingData = recordingData.find((r) => r.id === selectedRecording)

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Call Recording Library</h1>
          <p className="text-gray-400 mt-1">Stream, download, and analyze voice interactions</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Download className="h-4 w-4 mr-2" />
          Bulk Download
        </Button>
      </div>

      {/* Search and Filters */}
      <Card className="bg-gray-900/50 border-gray-800/50">
        <CardContent className="p-4">
          <div className="flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search recordings by call ID, bot name, or outcome..."
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white"
                />
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
                <SelectValue placeholder="Quality" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Quality</SelectItem>
                <SelectItem value="hd">HD</SelectItem>
                <SelectItem value="standard">Standard</SelectItem>
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
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recording List */}
        <Card className="lg:col-span-2 bg-gray-900/50 border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <FileAudio className="h-5 w-5 text-green-400" />
              Recording Library
            </CardTitle>
            <CardDescription>{recordingData.length} recordings available</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[600px] overflow-y-auto">
              {recordingData.map((recording) => (
                <div
                  key={recording.id}
                  className={`p-4 rounded-lg border transition-all cursor-pointer ${
                    selectedRecording === recording.id
                      ? "bg-blue-500/10 border-blue-500/30"
                      : "bg-gray-800/30 border-gray-700/50 hover:bg-gray-800/50"
                  }`}
                  onClick={() => setSelectedRecording(recording.id)}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {recording.id}
                      </Badge>
                      <Badge
                        variant={
                          recording.sentiment === "Positive"
                            ? "default"
                            : recording.sentiment === "Negative"
                              ? "destructive"
                              : "secondary"
                        }
                        className="text-xs"
                      >
                        {recording.sentiment}
                      </Badge>
                      <Badge variant={recording.quality === "HD" ? "default" : "secondary"} className="text-xs">
                        {recording.quality}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <Clock className="h-3 w-3" />
                      {recording.duration}
                    </div>
                  </div>

                  <div className="mb-2">
                    <p className="text-sm font-medium text-white mb-1">Call ID: {recording.callId}</p>
                    <p className="text-sm text-gray-300">Outcome: {recording.outcome}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <User className="h-3 w-3" />
                      {recording.botName}
                    </div>
                    <div className="flex items-center gap-2">
                      <span>{recording.fileSize}</span>
                      {recording.transcriptAvailable && (
                        <Badge variant="outline" className="text-xs">
                          Transcript
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-2 mt-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation()
                        setIsPlaying(!isPlaying)
                      }}
                    >
                      {isPlaying && selectedRecording === recording.id ? (
                        <Pause className="h-3 w-3" />
                      ) : (
                        <Play className="h-3 w-3" />
                      )}
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Download className="h-3 w-3" />
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Share className="h-3 w-3" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Audio Player */}
        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Headphones className="h-5 w-5 text-blue-400" />
              Audio Player
            </CardTitle>
            <CardDescription>
              {selectedRecordingData ? `Playing ${selectedRecordingData.id}` : "Select a recording to play"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {selectedRecordingData ? (
              <>
                {/* Waveform Placeholder */}
                <div className="h-20 bg-gray-800/50 rounded-lg border border-gray-700/50 flex items-center justify-center">
                  <div className="flex items-end gap-1 h-12">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-1 bg-blue-400 rounded-t ${
                          i < (currentTime / duration) * 40 ? "opacity-100" : "opacity-30"
                        }`}
                        style={{ height: `${Math.random() * 100}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <Slider
                    value={[currentTime]}
                    max={duration}
                    step={1}
                    className="w-full"
                    onValueChange={(value) => setCurrentTime(value[0])}
                  />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{formatTime(duration)}</span>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <SkipBack className="h-4 w-4" />
                  </Button>
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <SkipForward className="h-4 w-4" />
                  </Button>
                </div>

                {/* Volume Control */}
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => setIsMuted(!isMuted)}
                    className="text-gray-400 hover:text-white"
                  >
                    {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                  </Button>
                  <Slider value={volume} max={100} step={1} className="flex-1" onValueChange={setVolume} />
                  <span className="text-xs text-gray-400 w-8">{volume[0]}%</span>
                </div>

                {/* Playback Speed */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Playback Speed</label>
                  <Select
                    value={playbackSpeed.toString()}
                    onValueChange={(value) => setPlaybackSpeed(Number.parseFloat(value))}
                  >
                    <SelectTrigger className="bg-gray-800/50 border-gray-700 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0.5">0.5x</SelectItem>
                      <SelectItem value="0.75">0.75x</SelectItem>
                      <SelectItem value="1">1x</SelectItem>
                      <SelectItem value="1.25">1.25x</SelectItem>
                      <SelectItem value="1.5">1.5x</SelectItem>
                      <SelectItem value="2">2x</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Audio Filters */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-300">Mute AI Voice</label>
                    <Switch checked={muteAI} onCheckedChange={setMuteAI} />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-300">Mute User Voice</label>
                    <Switch checked={muteUser} onCheckedChange={setMuteUser} />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-gray-300">Show Transcript</label>
                    <Switch checked={showTranscript} onCheckedChange={setShowTranscript} />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-gray-700 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Share className="h-4 w-4 mr-2" />
                    Share
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-8">
                <Headphones className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                <p className="text-gray-400">Select a recording to start playback</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Transcript Overlay */}
      {selectedRecordingData && showTranscript && (
        <Card className="bg-gray-900/50 border-gray-800/50">
          <CardHeader>
            <CardTitle className="text-white">Live Transcript</CardTitle>
            <CardDescription>Real-time transcript synchronized with audio playback</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 bg-gray-800/30 rounded-lg border border-gray-700/50 p-4 overflow-y-auto">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-blue-400 mb-1">AI Agent (00:05)</p>
                    <p className="text-sm text-gray-300">
                      Hello! Thank you for calling. I'm here to help you with your inquiry today. How can I assist you?
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-xs text-green-400 mb-1">User (00:12)</p>
                    <p className="text-sm text-gray-300">
                      Hi, I'm interested in learning more about your premium package. Can you tell me about the
                      features?
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                  <div className="bg-blue-500/10 p-2 rounded">
                    <p className="text-xs text-blue-400 mb-1">AI Agent (00:18) - Current</p>
                    <p className="text-sm text-white">
                      I'd be happy to walk you through our premium package features. It includes...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
