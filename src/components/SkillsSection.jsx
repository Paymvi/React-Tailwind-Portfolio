import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // LanguagesSkills
  { name: "Java", level: 98, category: "languages/skills" },
  { name: "C++", level: 95, category: "languages/skills" },
  { name: "Python", level: 80, category: "languages/skills" },

  { name: "HTML/CSS", level: 90, category: "languages/skills" },
  { name: "SQL", level: 80, category: "languages/skills" },


  // Tools
  { name: "GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "Visual Studio", level: 95, category: "tools" },
  { name: "JUnit", level: 80, category: "tools" },
  { name: "Jira", level: 90, category: "tools" },
  { name: "OpenGL", level: 70, category: "tools" },
  { name: "Android Studio & Kotlin", level: 60, category: "tools" },
  { name: "Capcut", level: 60, category: "tools" },
  { name: "Notion", level: 90, category: "tools" },
  { name: "Canva", level: 90, category: "tools" },

  // Other
  { name: "SCRUM/Agile Methodologies", level: 95, category: "other" },
  { name: "Sprint Planning & Backlog management", level: 95, category: "other" },
  { name: "Requirements Gathering", level: 80, category: "other" },
];

const categories = ["all", "languages/skills", "tools", "other"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};