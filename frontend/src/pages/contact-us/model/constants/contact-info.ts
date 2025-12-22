import { Mail, MessageSquare, MapPin, Clock } from "lucide-react";

import type { ContactInfoType } from "@/pages/contact-us/model/types/contact-info";

export const contactInfo: ContactInfoType[] = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "support@astronomyhub.com",
    description: "We'll respond within 24 hours",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    detail: "Available 24/7",
    description: "Instant support for urgent queries",
  },
  {
    icon: MapPin,
    title: "Location",
    detail: "San Francisco, CA",
    description: "Visit our headquarters",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Fri, 9AM - 6PM PST",
    description: "Weekend support available",
  },
];
