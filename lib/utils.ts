import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AlertTriangle, CheckCircle, Clock, Package, Zap } from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
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

// Mock inventory data
export const inventoryItems = [
  {
    id: 1,
    name: "Component A",
    stock: 85,
    capacity: 100,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Component B",
    stock: 32,
    capacity: 50,
    category: "Mechanical",
  },
  {
    id: 3,
    name: "Component C",
    stock: 120,
    capacity: 150,
    category: "Electronics",
  },
  { id: 4, name: "Component D", stock: 18, capacity: 75, category: "Sensors" },
  {
    id: 5,
    name: "Component E",
    stock: 45,
    capacity: 60,
    category: "Mechanical",
  },
  { id: 6, name: "Component F", stock: 92, capacity: 100, category: "Sensors" },
];

// Mock data for robot positions
export const initialRobots = [
  { id: "R001", x: 20, y: 30, status: "active", zone: "A" },
  { id: "R002", x: 50, y: 60, status: "active", zone: "B" },
  { id: "R003", x: 80, y: 40, status: "active", zone: "A" },
  { id: "R004", x: 30, y: 70, status: "inactive", zone: "C" },
  { id: "R005", x: 60, y: 20, status: "charging", zone: "B" },
];

// Mock robot data
export const robotsData = [
  {
    id: "R001",
    name: "Delivery Bot 1",
    status: "active",
    battery: 87,
    lastActive: "2 mins ago",
    location: "Zone A",
    tasks: 12,
    alerts: 0,
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
  },
];