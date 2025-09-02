import { Calendar, MapPin, User, Clock } from "lucide-react";

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  organizer: string;
  organizerType: "student" | "faculty" | "external";
  registrationRequired: boolean;
  maxParticipants?: number;
}

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const getOrganizerColor = (type: string) => {
    switch (type) {
      case "student":
        return "bg-blue-100 text-blue-800";
      case "faculty":
        return "bg-green-100 text-green-800";
      case "external":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="bg-event-card border border-border rounded-lg p-6 hover:bg-event-hover transition-colors duration-200 hover:shadow-md">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-foreground">{event.title}</h3>
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${getOrganizerColor(
            event.organizerType
          )}`}
        >
          {event.organizerType}
        </span>
      </div>
      
      <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
        {event.description}
      </p>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-foreground">
          <Calendar className="w-4 h-4 mr-2 text-primary" />
          {event.date}
        </div>
        <div className="flex items-center text-sm text-foreground">
          <Clock className="w-4 h-4 mr-2 text-primary" />
          {event.time}
        </div>
        <div className="flex items-center text-sm text-foreground">
          <MapPin className="w-4 h-4 mr-2 text-primary" />
          {event.location}
        </div>
        <div className="flex items-center text-sm text-foreground">
          <User className="w-4 h-4 mr-2 text-primary" />
          Organized by: {event.organizer}
        </div>
      </div>
      
      {event.registrationRequired && (
        <div className="flex justify-between items-center pt-4 border-t border-border">
          <span className="text-xs text-muted-foreground">
            {event.maxParticipants && `Max ${event.maxParticipants} participants`}
          </span>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
            Register
          </button>
        </div>
      )}
    </div>
  );
};

export default EventCard;