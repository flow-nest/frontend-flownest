"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Battery,
  Clock,
  MoreHorizontal,
  Truck,
  AlertTriangle,
  CheckCircle,
  Zap,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { robotsData } from "@/lib/utils";

export default function RobotStatusCards() {
  const [filter, setFilter] = useState("all");

  const filteredRobots = robotsData.filter((robot) => {
    if (filter === "all") return true;
    return robot.status === filter;
  });

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle>Robot Status</CardTitle>
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="all" onClick={() => setFilter("all")}>
                All
              </TabsTrigger>
              <TabsTrigger value="active" onClick={() => setFilter("active")}>
                Active
              </TabsTrigger>
              <TabsTrigger
                value="inactive"
                onClick={() => setFilter("inactive")}
              >
                Inactive
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {filteredRobots.map((robot) => (
            <Card key={robot.id} className="overflow-hidden">
              <div className="flex justify-between p-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-full p-2 ${
                      robot.status === "active"
                        ? "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400"
                        : robot.status === "charging"
                        ? "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-400"
                        : "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400"
                    }`}
                  >
                    <Truck className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{robot.name}</p>
                    <p className="text-xs text-muted-foreground">{robot.id}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant={
                      robot.status === "active"
                        ? "default"
                        : robot.status === "charging"
                        ? "secondary"
                        : "destructive"
                    }
                  >
                    {robot.status.charAt(0).toUpperCase() +
                      robot.status.slice(1)}
                  </Badge>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Send Command</DropdownMenuItem>
                      <DropdownMenuItem>Maintenance</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="bg-muted/50 px-4 py-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Battery className="h-4 w-4 text-muted-foreground" />
                    <div className="text-sm">
                      <div className="flex items-center gap-1">
                        <span>{robot.battery}%</span>
                        {robot.status === "charging" && (
                          <Zap className="h-3 w-3 text-yellow-500" />
                        )}
                      </div>
                      <div className="h-1 w-full bg-muted mt-1 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${
                            robot.battery > 60
                              ? "bg-green-500"
                              : robot.battery > 30
                              ? "bg-yellow-500"
                              : "bg-red-500"
                          }`}
                          style={{ width: `${robot.battery}%` }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{robot.lastActive}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">{robot.tasks} tasks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle
                      className={`h-4 w-4 ${
                        robot.alerts > 0
                          ? "text-red-500"
                          : "text-muted-foreground"
                      }`}
                    />
                    <span className="text-sm">
                      {robot.alerts > 0
                        ? `${robot.alerts} alerts`
                        : "No alerts"}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {filteredRobots.length === 0 && (
          <div className="flex h-[200px] items-center justify-center text-muted-foreground">
            No robots found with the selected filter
          </div>
        )}
      </CardContent>
    </Card>
  );
}
