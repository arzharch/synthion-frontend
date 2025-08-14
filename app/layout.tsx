import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"
import Image from "next/image"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Synthion AI - Intelligence Synthesized",
  description: "Premium analytics dashboard for AI-powered voice agents and chatbots",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          <SidebarProvider defaultOpen={true}>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/80 backdrop-blur-xl px-6">
                <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />
                <div className="flex items-center gap-4">
                  <div className="h-8 w-8 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-[#0099ff]/20">
                    <Image
                      src="/synthion-logo.png"
                      alt="Synthion AI"
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-semibold text-foreground text-lg">Synthion AI</span>
                    <span className="text-sm text-muted-foreground ml-3">Intelligence Synthesized</span>
                  </div>
                </div>
              </header>
              <main className="flex-1 overflow-auto bg-background">{children}</main>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
