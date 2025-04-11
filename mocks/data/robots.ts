export interface Robot {
  id: string;
  name: string;
  status: "active" | "inactive" | "charging";
  battery: number;
  lastActive: string;
  location: string;
  tasks: number;
  alerts: number;
  x?: number;
  y?: number;
  zone?: string;
}

export const initialRobots: Robot[] = [
  {
    id: "R001",
    name: "Delivery Bot 1",
    status: "active",
    battery: 87,
    lastActive: "2 mins ago",
    location: "Zone A",
    tasks: 12,
    alerts: 0,
    x: 20,
    y: 30,
    zone: "A",
  },
  {
    id: "R002",
    name: "Delivery Bot 2",
    status: "active",
    battery: 64,
    lastActive: "Just now",
    location: "Zone B",
    tasks: 8,
    alerts: 0,
    x: 50,
    y: 60,
    zone: "B",
  },
  {
    id: "R003",
    name: "Inventory Bot 1",
    status: "active",
    battery: 92,
    lastActive: "5 mins ago",
    location: "Zone A",
    tasks: 15,
    alerts: 0,
    x: 80,
    y: 40,
    zone: "A",
  },
  {
    id: "R004",
    name: "Inventory Bot 2",
    status: "inactive",
    battery: 23,
    lastActive: "1 hour ago",
    location: "Zone C",
    tasks: 0,
    alerts: 2,
    x: 30,
    y: 70,
    zone: "C",
  },
  {
    id: "R005",
    name: "Delivery Bot 3",
    status: "charging",
    battery: 45,
    lastActive: "30 mins ago",
    location: "Zone B",
    tasks: 5,
    alerts: 1,
    x: 60,
    y: 20,
    zone: "B",
  },
];
