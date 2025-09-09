
import ProfileSection from "@/components/ProfileSection";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import { useEffect, useState } from "react";

const Index = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return (
    <div className="min-h-screen bg-background">
      <button
        onClick={toggleDarkMode}
        className="fixed top-6 right-6 z-50 px-4 py-2 rounded-lg border border-border bg-card text-card-foreground shadow transition-colors hover:bg-accent"
        aria-label="Alternar modo escuro"
      >
        {isDark ? "🌙" : "☀️"}
      </button>
      <ProfileSection />
      <ProjectsCarousel />
    </div>
  );
};

export default Index;
