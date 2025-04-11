"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Maximize2, Minimize2, RefreshCw } from "lucide-react";
import { initialRobots } from "@/mocks/data/robots"; // Adjust the import path as necessary

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
            x: Math.max(
              5,
              Math.min(95, (robot.x ?? 50) + (Math.random() - 0.5) * 5)
            ),
            y: Math.max(
              5,
              Math.min(95, (robot.y ?? 50) + (Math.random() - 0.5) * 5)
            ),
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
    <Card
      className={`border-[#D2B48C] bg-[#F5EBE0] brown-shadow ${
        isFullscreen ? "fixed inset-4 z-50" : ""
      }`}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2 border-b border-[#D2B48C]">
        <div className="flex items-center gap-2">
          <CardTitle className="text-[#8B4513]">Robot Locations</CardTitle>
          <Badge variant="outline" className="border-[#8B4513] text-[#8B4513]">
            Live
          </Badge>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="border-[#D2B48C] text-[#8B4513] hover:bg-[#E6D2B5]"
            onClick={refreshMap}
          >
            <RefreshCw className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="border-[#D2B48C] text-[#8B4513] hover:bg-[#E6D2B5]"
            onClick={toggleFullscreen}
          >
            {isFullscreen ? (
              <Minimize2 className="h-4 w-4" />
            ) : (
              <Maximize2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all" className="mb-4 mt-4">
          <TabsList className="bg-[#E6D2B5]">
            <TabsTrigger
              value="all"
              onClick={() => setSelectedZone("all")}
              className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-white"
            >
              All Zones
            </TabsTrigger>
            <TabsTrigger
              value="A"
              onClick={() => setSelectedZone("A")}
              className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-white"
            >
              Zone A
            </TabsTrigger>
            <TabsTrigger
              value="B"
              onClick={() => setSelectedZone("B")}
              className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-white"
            >
              Zone B
            </TabsTrigger>
            <TabsTrigger
              value="C"
              onClick={() => setSelectedZone("C")}
              className="data-[state=active]:bg-[#8B4513] data-[state=active]:text-white"
            >
              Zone C
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative h-[400px] w-full border border-[#D2B48C] rounded-md bg-white">
          {/* Grid lines */}
          <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-[#E6D2B5]"></div>
            ))}
          </div>

          {/* Zone labels */}
          <div className="absolute left-2 top-2 bg-[#F5EBE0] p-1 rounded text-xs font-medium text-[#8B4513] border border-[#D2B48C]">
            Zone A
          </div>
          <div className="absolute right-2 top-2 bg-[#F5EBE0] p-1 rounded text-xs font-medium text-[#8B4513] border border-[#D2B48C]">
            Zone B
          </div>
          <div className="absolute left-2 bottom-2 bg-[#F5EBE0] p-1 rounded text-xs font-medium text-[#8B4513] border border-[#D2B48C]">
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

        <div className="mt-4 flex justify-between text-sm text-[#8B4513]">
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
