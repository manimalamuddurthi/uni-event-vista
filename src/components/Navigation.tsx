import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "EVENTS", path: "/events" },
    { name: "DASHBOARD", path: "/dashboard" },
    { name: "PROFILE", path: "/profile" },
  ];

  return (
    <nav className="bg-nav-bg border-b border-nav-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold text-foreground">
                College Event Management
              </h1>
            </div>
          </div>
          <div className="flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium border-b-2 transition-colors duration-200",
                  location.pathname === item.path
                    ? "border-category-active text-category-active"
                    : "border-transparent text-category-text hover:text-primary hover:border-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;