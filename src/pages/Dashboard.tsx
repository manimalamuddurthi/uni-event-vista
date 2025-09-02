import Navigation from "@/components/Navigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Manage your events and view analytics
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">My Events</h3>
            <p className="text-2xl font-bold text-primary mb-1">12</p>
            <p className="text-muted-foreground text-sm">Events organized</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Registrations</h3>
            <p className="text-2xl font-bold text-primary mb-1">248</p>
            <p className="text-muted-foreground text-sm">Total participants</p>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">Upcoming</h3>
            <p className="text-2xl font-bold text-primary mb-1">5</p>
            <p className="text-muted-foreground text-sm">Events this month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;