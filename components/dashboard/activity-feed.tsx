"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, CheckCircle, Clock, Package, Zap } from "lucide-react";

// Mock activity data
const activities = [
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

export default function ActivityFeed() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3">
              <div
                className={`mt-0.5 rounded-full p-1.5 ${
                  activity.type === "alert"
                    ? "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
                    : activity.type === "status"
                    ? "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400"
                    : "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                }`}
              >
                <activity.icon className="h-3 w-3" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs font-normal">
                    {activity.robot}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {activity.time}
                  </span>
                </div>
                <p className="text-sm">{activity.message}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
