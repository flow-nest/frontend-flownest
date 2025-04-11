export interface Stat {
  id: string;
  title: string;
  value: string;
  change: string;
  percentage: number;
}

export const stats = [
  {
    id: "active-robots",
    title: "Active Robots",
    value: "12/15",
    change: "3 robots currently inactive",
    percentage: 80,
  },
  {
    id: "inventory",
    title: "Inventory Status",
    value: "87%",
    change: "+2.5% from last week",
    percentage: 87,
  },
  {
    id: "battery",
    title: "Battery Status",
    value: "76%",
    change: "Average across all robots",
    percentage: 76,
  },
  {
    id: "tasks",
    title: "Task Completion",
    value: "94.2%",
    change: "+1.2% from yesterday",
    percentage: 94,
  },
];
