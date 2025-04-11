"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowUpDown } from "lucide-react";
import { inventoryItems } from "@/mocks/data/inventory";

export default function InventoryOverview() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const filteredItems = inventoryItems
    .filter(
      (item) => categoryFilter === "all" || item.category === categoryFilter
    )
    .sort((a, b) => {
      const percentA = (a.stock / a.capacity) * 100;
      const percentB = (b.stock / b.capacity) * 100;
      return sortOrder === "asc" ? percentA - percentB : percentB - percentA;
    });

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle>Inventory Status</CardTitle>
        <div className="flex items-center gap-2">
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger className="w-[130px] h-8">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Mechanical">Mechanical</SelectItem>
              <SelectItem value="Sensors">Sensors</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm" onClick={toggleSortOrder}>
            <ArrowUpDown className="mr-2 h-3.5 w-3.5" />
            {sortOrder === "asc" ? "Lowest" : "Highest"}
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredItems.map((item) => {
            const percentage = Math.round((item.stock / item.capacity) * 100);
            let progressColor = "bg-green-500";

            if (percentage < 30) {
              progressColor = "bg-red-500";
            } else if (percentage < 60) {
              progressColor = "bg-yellow-500";
            }

            return (
              <div key={item.id} className="space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium">{item.name}</span>
                    <span className="ml-2 text-xs text-muted-foreground">
                      {item.category}
                    </span>
                  </div>
                  <span className="text-sm">
                    {item.stock}/{item.capacity}
                  </span>
                </div>
                <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    className={`h-full ${progressColor} transition-all duration-500 ease-in-out`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="flex h-[200px] items-center justify-center text-muted-foreground">
            No inventory items found
          </div>
        )}
      </CardContent>
    </Card>
  );
}
