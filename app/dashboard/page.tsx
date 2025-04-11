import DashboardLayout from "@/components/layouts/dashboard-layout";
import RobotMap from "@/components/dashboard/robot-map";
import InventoryOverview from "@/components/dashboard/inventory-overview";
import RobotStatusCards from "@/components/dashboard/robot-status-cards";
import ActivityFeed from "@/components/dashboard/activity-feed";
import StatsCards from "@/components/dashboard/stats-cards";

export default function DashboardPage() {
    return (
        <DashboardLayout>
            <div className="flex flex-col gap-6">
                <StatsCards />
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <RobotMap />
                    <InventoryOverview />
                </div>
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    <div className="lg:col-span-2">
                        <RobotStatusCards />
                    </div>
                    <ActivityFeed />
                </div>
            </div>
        </DashboardLayout>
    );
}