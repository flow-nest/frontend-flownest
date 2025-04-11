export interface InventoryItem {
  id: number;
  name: string;
  stock: number;
  capacity: number;
  category: string;
}

export const inventoryItems: InventoryItem[] = [
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
