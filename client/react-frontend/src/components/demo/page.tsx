"use client"

import { useState } from "react"
import { Sidebar } from "@/components/demo/sidebar"
import { TopNavigation } from "@/components/demo/top-navigation"
import { KanbanBoard } from "@/components/demo/kanban-board"
import { TeamManagement } from "@/components/demo/team-management"
import { NotesSection } from "@/components/demo/notes-section"
import { IdeasBank } from "@/components/demo/ideas-bank"
import { TaskManagement } from "@/components/demo/task-management"
import { CalendarSection } from "@/components/demo/calendar-section"
import { HomeDashboard } from "@/components/demo/home-dashboard"
import { ThemeProvider } from "@/contexts/theme-context";
import { TimeTracking } from "@/components/demo/time-tracking"
import { DocumentFormExample } from "./document-form-example"

function MainAppProjectDemo() {
  const [activeSection, setActiveSection] = useState("tasks")
  const [selectedProject, setSelectedProject] = useState("sysgd")
  const [showHome, setShowHome] = useState(true)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const handleHomeClick = () => {
    setShowHome(true)
  }

  const handleProjectSelect = (projectId: string) => {
    setSelectedProject(projectId)
    setShowHome(false)
    setActiveSection("tasks")
  }

  const handleSectionChange = (section: string) => {
    setActiveSection(section)
    setIsMobileSidebarOpen(false)
  }

  if (showHome) {
    return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
        <TopNavigation
          selectedProject={selectedProject}
          onProjectChange={setSelectedProject}
          onHomeClick={handleHomeClick}
          onMobileSidebarToggle={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
          isHomePage={true}
        />
        <HomeDashboard onProjectSelect={handleProjectSelect} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col">
      <TopNavigation
        selectedProject={selectedProject}
        onProjectChange={setSelectedProject}
        onHomeClick={handleHomeClick}
        onMobileSidebarToggle={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        isHomePage={false}
      />
      <div className="flex flex-1 relative">
        <Sidebar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
          isMobileOpen={isMobileSidebarOpen}
          onMobileClose={() => setIsMobileSidebarOpen(false)}
        />
        <main className="flex-1 p-2 md:p-4 overflow-auto">
          {activeSection === "tasks" && <TaskManagement />}
          {activeSection === "kanban" && <KanbanBoard />}
          {activeSection === "calendar" && <CalendarSection />}
          {activeSection === "team" && <TeamManagement />}
          {activeSection === "notes" && <NotesSection />}
          {activeSection === "ideas" && <IdeasBank />}
          {activeSection === "time-tracking" && <TimeTracking />}
          {activeSection === "document-form" && <DocumentFormExample />}
        </main>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <ThemeProvider>
      <MainAppProjectDemo />
    </ThemeProvider>
  )
}
