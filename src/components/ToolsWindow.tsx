import { Window } from "./Window";
import { Wrench } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ToolsWindow() {
  const tools = {
    development: [
      { name: "C", level: 60 },
      { name: "Java", level: 40 },
      { name: "Python", level: 40 },
      { name: "React", level: 20 },
      { name: "TypeScript", level: 20 },
      { name: "Dart", level: 20 },
    ],
    design: [
      { name: "Figma", level: 25 },
      { name: "Canva", level: 50 },
      { name: "Photoshop", level: 30 },
    ],
    other: [
      { name: "Git", level: 40 },
      { name: "Docker", level: 15 },
    ],
  };

  const softwareIcons = [
    {
      name: "C",
      image: "../assets/C-program.png",
      color: "bg-[#426E55]/20 border-[#426E55]",
    },
    {
      name: "Java",
      image: "../assets/java-program.svg",
      color: "bg-[#73986F]/20 border-[#73986F]",
    },
    {
      name: "Python",
      image: "../assets/python-program.png",
      color: "bg-[#73986F]/20 border-[#73986F]",
    },
    {
      name: "Git",
      image: "../assets/git-logo.png",
      color: "bg-[#73986F]/20 border-[#73986F]",
    },
    {
      name: "Canva",
      image: "../assets/Canva-logo.png",
      color: "bg-[#D698AB]/20 border-[#D698AB]",
    },
    {
      name: "Figma",
      image: "../public/assets/figma-logo.png",
      color: "bg-[#CB748E]/20 border-[#CB748E]",
    },
  ];

  return (
    <Window
      title="C:\taylorwymes\tools"
      headerColor="bg-[#CB748E]"
      windowBorderColor="border-[#ECA0B8]/30"
      leftDot={{
        bg: "bg-[#ECA0B8]",
        border: "border-[#ECA0B8]",
      }}
      middleDot={{
        bg: "bg-[#73986F]",
        border: "border-[#73986F]",
      }}
      rightDot={{ bg: "bg-white", border: "border-white" }}
    >
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Wrench className="w-6 h-6 text-[#CB748E]" />
          <h2 className="text-2xl font-bold text-[#D698AB] font-bohemian">
            TOOLS & SKILLS
          </h2>
        </div>

        {/* Quick View */}
        <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-4 sm:p-6">
          <h3 className="text-sm font-bold text-[#2D4839] mb-4 uppercase tracking-wider">
            Primary Software
          </h3>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {softwareIcons.map((software) => (
              <div
                key={software.name}
                className="flex flex-col items-center gap-1.5 sm:gap-2"
              >
                <div
                  className={`w-12 h-12 sm:w-16 sm:h-16 ${software.color} border-2 rounded-lg flex items-center justify-center overflow-hidden p-1.5 sm:p-2`}
                >
                  <ImageWithFallback
                    src={software.image}
                    alt={software.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[10px] sm:text-xs text-[#2D4839] text-center leading-tight">
                  {software.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Levels */}
        <div className="space-y-4">
          <div className="bg-white border-2 border-[#73986F] rounded-lg p-4">
            <h3 className="font-bold text-[#2D4839] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#73986F]"></span>
              Development
            </h3>
            <div className="space-y-2.5">
              {tools.development.map((tool) => (
                <div key={tool.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#2D4839] font-medium">
                      {tool.name}
                    </span>
                    <span className="text-[#426E55]">
                      {tool.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#73986F] transition-all duration-500"
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-[#CB748E] rounded-lg p-4">
            <h3 className="font-bold text-[#2D4839] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#CB748E]"></span>
              Design
            </h3>
            <div className="space-y-2.5">
              {tools.design.map((tool) => (
                <div key={tool.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#2D4839] font-medium">
                      {tool.name}
                    </span>
                    <span className="text-[#426E55]">
                      {tool.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#CB748E] transition-all duration-500"
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border-2 border-[#D698AB] rounded-lg p-4">
            <h3 className="font-bold text-[#2D4839] mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D698AB]"></span>
              Other Tools
            </h3>
            <div className="space-y-2.5">
              {tools.other.map((tool) => (
                <div key={tool.name}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-[#2D4839] font-medium">
                      {tool.name}
                    </span>
                    <span className="text-[#426E55]">
                      {tool.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#D698AB] transition-all duration-500"
                      style={{ width: `${tool.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}