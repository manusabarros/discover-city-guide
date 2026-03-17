import { FC } from "react";
import { ExternalLink } from "lucide-react";

const BookingButton: FC<{
  city?: string;
  checkIn?: string;
  checkOut?: string;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  children: string;
}> = ({
  city = "",
  checkIn = "",
  checkOut = "",
  className = "",
  variant = "primary",
  children,
}) => {
  // Build Booking.com affiliate URL
  // Replace YOUR_AFFILIATE_ID with actual affiliate ID
  const baseUrl = "https://www.booking.com/searchresults.html";
  const params = new URLSearchParams({
    aid: "YOUR_AFFILIATE_ID", // Replace with actual affiliate ID
    ss: city,
    checkin: checkIn,
    checkout: checkOut,
    no_rooms: "1",
    group_adults: "2",
  });

  const bookingUrl = city
    ? `${baseUrl}?${params.toString()}`
    : "https://www.booking.com?aid=YOUR_AFFILIATE_ID";

  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary:
      "bg-white hover:bg-gray-50 text-blue-600 border-2 border-blue-600",
    outline: "border-2 border-blue-600 hover:bg-blue-50 text-blue-600",
  };

  return (
    <a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 shadow-sm hover:shadow-md ${variants[variant]} ${className}`}
    >
      <span>{children}</span>
      <ExternalLink className="w-4 h-4" />
    </a>
  );
};

export default BookingButton;
