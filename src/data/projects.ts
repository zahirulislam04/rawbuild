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
    name: "Water Intake Tracker",
    description: "A simple app to log daily hydration and build healthy drinking habits.",
    techStack: ["React Native", "Expo"],
    status: "in-progress",
  },
];
