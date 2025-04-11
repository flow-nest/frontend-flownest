import { Package, AlertTriangle, CheckCircle, Clock, Zap } from "lucide-react";

export interface Activity {
  id: number;
  type: "delivery" | "alert" | "status";
  robot: string;
  message: string;
  time: string;
  icon: any;
}

export const activities = [
  {
    id: 1,
    type: "delivery",
    robot: "R001",
    message: "Delivered package #1234 to Zone A",
    time: "2 mins ago",
    icon: Package,
  },
  {
    id: 2,
    type: "alert",
    robot: "R004",
    message: "Low battery warning",
    time: "15 mins ago",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "status",
    robot: "R005",
    message: "Started charging",
    time: "30 mins ago",
    icon: Zap,
  },
  {
    id: 4,
    type: "delivery",
    robot: "R002",
    message: "Picked up package #1235 from Zone B",
    time: "45 mins ago",
    icon: Package,
  },
  {
    id: 5,
    type: "status",
    robot: "R003",
    message: "Completed inventory check",
    time: "1 hour ago",
    icon: CheckCircle,
  },
  {
    id: 6,
    type: "alert",
    robot: "R004",
    message: "Maintenance required",
    time: "2 hours ago",
    icon: AlertTriangle,
  },
  {
    id: 7,
    type: "status",
    robot: "R001",
    message: "Started shift",
    time: "3 hours ago",
    icon: Clock,
  },
];
