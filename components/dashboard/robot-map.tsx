"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Maximize2, Minimize2, RefreshCw } from "lucide-react";

// Mock data for robot positions
const initialRobots = [
  { id: "R001", x: 20, y: 30, status: "active", zone: "A" },
  { id: "R002", x: 50, y: 60, status: "active", zone: "B" },
  { id: "R003", x: 80, y: 40, status: "active", zone: "A" },
  { id: "R004", x: 30, y: 70, status: "inactive", zone: "C" },
  { id: "R005", x: 60, y: 20, status: "charging", zone: "B" },
];

export default function RobotMap() {
  const [robots, setRobots] = useState(initialRobots);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedZone, setSelectedZone] = useState("all");

  // Simulate robot movement
  useEffect(() => {
    const interval = setInterval(() => {
      setRobots((prevRobots) =>
        prevRobots.map((robot) => {
          if (robot.status !== "active") return robot;

          return {
            ...robot,
            x: Math.max(5, Math.min(95, robot.x + (Math.random() - 0.5) * 5)),
            y: Math.max(5, Math.min(95, robot.y + (Math.random() - 0.5) * 5)),
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const filteredRobots =
    selectedZone === "all"
      ? robots
      : robots.filter((robot) => robot.zone === selectedZone);

  const refreshMap = () => {
    // Simulate refreshing the map data
    setRobots(initialRobots);
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <Card className={isFullscreen ? "fixed inset-4 z-50" : ""}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div className="flex items-center gap-2">
          <CardTitle>Robot Locations</CardTitle>
          <Badge variant="outline">Live</Badge>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" onClick={refreshMap}>
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={toggleFullscreen}>
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="mb-4">
          <TabsList>
            <TabsTrigger value="all" onClick={() => setSelectedZone("all")}>
              All Zones
            </TabsTrigger>
            <TabsTrigger value="A" onClick={() => setSelectedZone("A")}>
              Zone A
            </TabsTrigger>
            <TabsTrigger value="B" onClick={() => setSelectedZone("B")}>
              Zone B
            </TabsTrigger>
            <TabsTrigger value="C" onClick={() => setSelectedZone("C")}>
              Zone C
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative h-[400px] w-full border rounded-md bg-muted/20">
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-muted/30"></div>
            ))}
          </div>

          {/* Zone labels */}
          <div className="absolute left-2 top-2 bg-background/80 p-1 rounded text-xs font-medium">
            Zone A
          </div>
          <div className="absolute right-2 top-2 bg-background/80 p-1 rounded text-xs font-medium">
            Zone B
          </div>
          <div className="absolute left-2 bottom-2 bg-background/80 p-1 rounded text-xs font-medium">
            Zone C
          </div>

          {/* Robots */}
          {filteredRobots.map((robot) => (
            <div
              key={robot.id}
              className={`absolute flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-in-out ${
                robot.status === "active"
                  ? "bg-green-500"
                  : robot.status === "charging"
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{
                left: `${robot.x}%`,
                top: `${robot.y}%`,
              }}
              title={`${robot.id} (${robot.status})`}
            >
              {robot.id.slice(-2)}
            </div>
          ))}
        </div>

        <div className="mt-4 flex justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>
            <span>Active</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
            <span>Charging</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500"></span>
            <span>Inactive</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
