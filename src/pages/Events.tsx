import { useState } from "react";
import Navigation from "@/components/Navigation";
import EventCard, { Event } from "@/components/EventCard";

const Events = () => {
  const [activeCategory, setActiveCategory] = useState<"student" | "faculty" | "external">("student");

  // Sample events data
  const sampleEvents: Record<string, Event[]> = {
    student: [
      {
        id: "1",
        title: "Tech Symposium 2024",
        description: "A comprehensive technology symposium featuring the latest in AI, web development, and mobile technologies. Join fellow students for networking and learning opportunities.",
        date: "March 15, 2024",
        time: "9:00 AM - 5:00 PM",
        location: "Main Auditorium",
        organizer: "Computer Science Society",
        organizerType: "student",
        registrationRequired: true,
        maxParticipants: 200,
      },
      {
        id: "2",
        title: "Cultural Night - Spring Festival",
        description: "An evening of cultural performances, music, and dance celebrating the diversity of our college community. Food stalls and art exhibitions included.",
        date: "March 22, 2024",
        time: "6:00 PM - 11:00 PM",
        location: "College Ground",
        organizer: "Cultural Committee",
        organizerType: "student",
        registrationRequired: false,
      },
      {
        id: "3",
        title: "Entrepreneurship Workshop",
        description: "Learn the fundamentals of starting your own business. Guest speakers from successful startups will share their experiences and insights.",
        date: "March 28, 2024",
        time: "2:00 PM - 6:00 PM",
        location: "Seminar Hall B",
        organizer: "Business Club",
        organizerType: "student",
        registrationRequired: true,
        maxParticipants: 50,
      },
    ],
    faculty: [
      {
        id: "4",
        title: "Research Methodology Seminar",
        description: "Advanced seminar on research methodologies for graduate students. Covers quantitative and qualitative research approaches with practical examples.",
        date: "April 5, 2024",
        time: "10:00 AM - 4:00 PM",
        location: "Conference Room A",
        organizer: "Dr. Sarah Johnson",
        organizerType: "faculty",
        registrationRequired: true,
        maxParticipants: 30,
      },
      {
        id: "5",
        title: "Industry-Academia Partnership Meet",
        description: "Networking event bringing together industry professionals and academic researchers to discuss collaboration opportunities and knowledge exchange.",
        date: "April 12, 2024",
        time: "3:00 PM - 7:00 PM",
        location: "Innovation Center",
        organizer: "Prof. Michael Chen",
        organizerType: "faculty",
        registrationRequired: true,
        maxParticipants: 100,
      },
      {
        id: "6",
        title: "Grant Writing Workshop",
        description: "Professional development workshop for faculty and graduate students on effective grant proposal writing and funding opportunities.",
        date: "April 18, 2024",
        time: "1:00 PM - 5:00 PM",
        location: "Faculty Lounge",
        organizer: "Research Office",
        organizerType: "faculty",
        registrationRequired: true,
        maxParticipants: 25,
      },
    ],
    external: [
      {
        id: "7",
        title: "Inter-College Debate Championship",
        description: "Annual debate championship featuring teams from colleges across the region. Topics cover current affairs, technology, and social issues.",
        date: "May 3, 2024",
        time: "9:00 AM - 6:00 PM",
        location: "Regional Convention Center",
        organizer: "State University Alliance",
        organizerType: "external",
        registrationRequired: true,
        maxParticipants: 16,
      },
      {
        id: "8",
        title: "Regional Science Fair",
        description: "Showcase of innovative science projects from colleges and universities in the region. Prizes awarded for best projects in various categories.",
        date: "May 10, 2024",
        time: "10:00 AM - 4:00 PM",
        location: "City Exhibition Center",
        organizer: "Regional Education Board",
        organizerType: "external",
        registrationRequired: true,
        maxParticipants: 50,
      },
      {
        id: "9",
        title: "Career Fair - Summer Internships",
        description: "Regional career fair focusing on summer internship opportunities. Top companies from various industries will be participating.",
        date: "May 15, 2024",
        time: "11:00 AM - 5:00 PM",
        location: "Metro Business Complex",
        organizer: "Regional Career Services",
        organizerType: "external",
        registrationRequired: false,
      },
    ],
  };

  const categories = [
    { key: "student", label: "Student Conducted Events", description: "Events organized by student groups and societies" },
    { key: "faculty", label: "Faculty Conducted Events", description: "Academic and professional events organized by faculty" },
    { key: "external", label: "Outside Events", description: "Events from other colleges and external organizations" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Events</h1>
          <p className="text-muted-foreground">
            Discover and participate in various events across our college community
          </p>
        </div>

        {/* Category Selection */}
        <div className="mb-8">
          <div className="border-b border-border">
            <nav className="flex space-x-8">
              {categories.map((category) => (
                <button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key as any)}
                  className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeCategory === category.key
                      ? "border-category-active text-category-active"
                      : "border-transparent text-category-text hover:text-primary hover:border-primary"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Category Description */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {categories.find(cat => cat.key === activeCategory)?.description}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sampleEvents[activeCategory]?.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {sampleEvents[activeCategory]?.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;