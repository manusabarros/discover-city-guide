import { ExternalLink, UtensilsCrossed } from "lucide-react";

const RestaurantButtons = ({
  restaurantName = "",
  city = "",
  className = "",
}) => {
  // TripAdvisor search URL
  const tripAdvisorUrl = restaurantName
    ? `https://www.tripadvisor.com/Search?q=${encodeURIComponent(restaurantName + " " + city)}`
    : "https://www.tripadvisor.com";

  // TheFork search URL
  const theForkUrl = restaurantName
    ? `https://www.thefork.com/search?q=${encodeURIComponent(restaurantName)}`
    : "https://www.thefork.com";

  return (
    <div className={`flex gap-3 ${className}`}>
      {/* TripAdvisor Button */}
      <a
        href={tripAdvisorUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 bg-green-600 hover:bg-green-700 text-white shadow-sm hover:shadow-md"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 6 6 0 0 0 5.997-5.997c0-.213-.011-.425-.033-.636l.04.002a5.997 5.997 0 0 0 11.986-1.395 5.997 5.997 0 0 0-5.997-5.997c-.211 0-.421.011-.63.032V4.295h-.002c-1.317-.783-2.818-1.197-4.358-1.197zm0 1.5a7.5 7.5 0 0 1 4.36 1.394l-4.36 4.36-4.36-4.36a7.5 7.5 0 0 1 4.36-1.394zM5.998 9.295a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm12.006 0a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm-12.006 1.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm12.006 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
        <span className="text-sm">TripAdvisor</span>
      </a>

      {/* TheFork Button */}
      <a
        href={theForkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg font-medium transition-all duration-200 bg-red-600 hover:bg-red-700 text-white shadow-sm hover:shadow-md"
      >
        <UtensilsCrossed className="w-4 h-4" />
        <span className="text-sm">TheFork</span>
      </a>
    </div>
  );
};

export default RestaurantButtons;
