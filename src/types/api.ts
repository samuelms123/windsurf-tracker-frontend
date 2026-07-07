export interface SummaryResponse {
  total_distance: number;
  time_spent: number;
  time_spent_planing: number;
  total_session_count: number;
  top_speed: number;
  fastest_100: number;
  fastest_500: number;
  fastest_1000: number;
};

export interface SpeedZones {
    idle: number;
    low: number;
    planing_entry: number;
    planing: number;
    blasting: number;
}

export interface StartLocation {
    street: string;
    neighborhood: string;
    suburb: string;
    city_district: string;
    city: string;
    municipality: string;
    region: string;
    area: string;
    postal_code: string;
    country: string;
}

export interface ActivityItem {
  id: string;
  date: string;
  start_location: StartLocation;
  elapsed_time: number;
  average_speed: number;
  max_speed: number;
  max_speed_avg_5_s: number;
  max_speed_avg_10_s: number;
  fastest_100: number;
  fastest_500: number;
  fastest_1000: number;
  total_distance: number;
  speed_zones: SpeedZones
}

export type ActivitiesResponse = ActivityItem[];