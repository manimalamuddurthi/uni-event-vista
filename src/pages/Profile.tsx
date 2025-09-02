import Navigation from "@/components/Navigation";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Profile</h1>
          <p className="text-muted-foreground">
            Manage your account settings and preferences
          </p>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">JD</span>
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">John Doe</h2>
              <p className="text-muted-foreground">Student - Computer Science</p>
            </div>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="text-sm font-medium text-foreground">Email</label>
              <p className="text-muted-foreground">john.doe@college.edu</p>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Student ID</label>
              <p className="text-muted-foreground">CS2024001</p>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Department</label>
              <p className="text-muted-foreground">Computer Science</p>
            </div>
            <div>
              <label className="text-sm font-medium text-foreground">Year</label>
              <p className="text-muted-foreground">Final Year</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;