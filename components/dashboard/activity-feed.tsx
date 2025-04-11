"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { activities } from "@/lib/utils";

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
