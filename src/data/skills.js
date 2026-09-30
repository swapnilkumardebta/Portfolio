import { 
    FaPython, FaReact, FaHtml5, FaCss3Alt, FaGithub, FaDocker, FaDatabase 
} from "react-icons/fa";
import { 
    SiDjango, SiFlask, SiJavascript, SiPreact, SiPostgresql, SiBootstrap, 
    SiGitea, SiMqtt, SiGrafana, SiTimescale 
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

export const skills = [
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Django", icon: SiDjango, color: "#092E20" },
  { name: "Flask", icon: SiFlask, color: "#000000" },
  { name: "Frappe", icon: SiGitea, color: "#0089FF" }, // Gitea icon as placeholder for Frappe
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Preact", icon: SiPreact, color: "#673AB7" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Git", icon: FaGithub, color: "#F05032" }, // Git icon is similar
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Docker", icon: FaDocker, color: "#2496ED" },
  { name: "MQTT", icon: SiMqtt, color: "#660066" },
  { name: "Grafana", icon: SiGrafana, color: "#F46800" },
  { name: "TimescaleDB", icon: SiTimescale, color: "#FDB515" },
  { name: "REST API", icon: TbApi, color: "#009688" },
];
