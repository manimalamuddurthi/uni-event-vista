import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { Calendar, Users, Trophy, BookOpen } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Event Management",
      description: "Organize and manage college events efficiently",
      link: "/events"
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Connect students, faculty, and external organizations",
      link: "/events"
    },
    {
      icon: Trophy,
      title: "Competitions & Awards",
      description: "Track competitions and recognize achievements",
      link: "/events"
    },
    {
      icon: BookOpen,
      title: "Academic Events",
      description: "Seminars, workshops, and research presentations",
      link: "/events"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-16 text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            College Event Management System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Streamline event organization and participation across your college community. 
            Discover student events, faculty seminars, and external opportunities all in one place.
          </p>
          <Link
            to="/events"
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block"
          >
            Explore Events
          </Link>
        </div>

        {/* Features Grid */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-foreground mb-12">
            Why Choose Our Platform?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="bg-card border border-border rounded-lg p-6 hover:bg-event-hover transition-colors duration-200 hover:shadow-md group"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 border-t border-border">
          <div className="grid gap-8 md:grid-cols-3 text-center">
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Events Organized</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">10,000+</h3>
              <p className="text-muted-foreground">Student Participants</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
              <p className="text-muted-foreground">Partner Colleges</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
