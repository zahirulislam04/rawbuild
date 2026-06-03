export interface Project {
  name: string;
  description: string;
  techStack: string[];
  status: 'live' | 'in-progress' | 'open-source';
  githubUrl?: string;
  demoUrl?: string;
  coverImage?: string;
}

export const projects: Project[] = [
  {
    name: "Fitness Tracker",
    description: "A mobile app to track workouts and monitor progress over time.",
    techStack: ["React Native", "Expo"],
    status: "in-progress",
  },
  {
    name: "Hydrate Daily - Water Tracker",
    description: "A calm hydration companion for iPhone. Track water and drink intake, build daily streaks, and meet your personal goal. Free, no account needed.",
    techStack: ["Swift", "SwiftUI", "iOS"],
    status: "in-progress",
    demoUrl: "https://rawbuild.de/hydratedaily",
  },
];
