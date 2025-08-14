"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Palette, Shield } from "lucide-react"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export function Settings() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleThemeChange = (newTheme: string) => {
    console.log("Changing theme to:", newTheme)
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <div className="p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="mt-1">Loading...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Settings</h1>
          <p className="text-muted-foreground mt-1">Manage your account, team, and system preferences</p>
          <p className="text-xs text-muted-foreground mt-2">Current theme: {resolvedTheme}</p>
        </div>
      </div>

      <Tabs defaultValue="alerts" className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 bg-muted border border-border">
          <TabsTrigger
            value="alerts"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Bell className="h-4 w-4 mr-2" />
            Alerts
          </TabsTrigger>
          <TabsTrigger
            value="preferences"
            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
          >
            <Palette className="h-4 w-4 mr-2" />
            Preferences
          </TabsTrigger>
        </TabsList>

        {/* Alert Configuration */}
        <TabsContent value="alerts" className="space-y-6">
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <Bell className="h-5 w-5 text-yellow-400" />
                Notification Settings
              </CardTitle>
              <CardDescription>Configure how you receive alerts and notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div>
                      <p className="text-sm font-medium text-foreground">Slack Notifications</p>
                      <p className="text-xs text-muted-foreground">Receive alerts via Slack</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm text-foreground">Slack Email</Label>
                    <Input
                      type="email"
                      placeholder="slack@company.com"
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                    <div>
                      <p className="text-sm font-medium text-foreground">WhatsApp Notifications</p>
                      <p className="text-xs text-muted-foreground">Receive alerts via WhatsApp</p>
                    </div>
                    <Switch />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm text-foreground">WhatsApp Number</Label>
                    <Input
                      type="tel"
                      placeholder="+1234567890"
                      className="bg-background border-border text-foreground"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Save Alert Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Preferences */}
        <TabsContent value="preferences" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Palette className="h-5 w-5 text-pink-400" />
                  Theme & Display
                </CardTitle>
                <CardDescription>Customize your dashboard appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label className="text-sm text-foreground">Theme Mode</Label>
                  <Select value={theme || "dark"} onValueChange={handleThemeChange}>
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Shield className="h-5 w-5 text-red-400" />
                  Security & Privacy
                </CardTitle>
                <CardDescription>Manage security settings</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground">Add extra security to your account</p>
                  </div>
                  <Switch />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm text-foreground">Session Timeout</Label>
                  <Select defaultValue="24hrs">
                    <SelectTrigger className="bg-background border-border text-foreground">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                      <SelectItem value="10mins">10 minutes</SelectItem>
                      <SelectItem value="24hrs">24 hours</SelectItem>
                      <SelectItem value="2days">2 days</SelectItem>
                      <SelectItem value="4days">4 days</SelectItem>
                      <SelectItem value="6days">6 days</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Save All Settings</Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
