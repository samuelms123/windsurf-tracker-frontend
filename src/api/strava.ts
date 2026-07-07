import { type SummaryResponse } from '../types/api';
import { type ActivitiesResponse } from '../types/api';

const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;

export async function syncStravaData(): Promise<any> {
  const apiKey = import.meta.env.VITE_HOME_LAB_API_KEY;

  const res = await fetch(`${API_BASE_URL}/strava/sync`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-API-Key': apiKey,
    },
  });

  if (!res.ok) {
    throw new Error('Sync endpoint failed');
  }

  return res.json();
}

export async function getActivities(): Promise<ActivitiesResponse> {
    const apiKey = import.meta.env.VITE_HOME_LAB_API_KEY;
    const res = await fetch(`${API_BASE_URL}/activities`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey,
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch activities');
    }

    return res.json();
}

export async function getSummary(): Promise<SummaryResponse> {
    const apiKey = import.meta.env.VITE_HOME_LAB_API_KEY;
    const res = await fetch(`${API_BASE_URL}/activities/summary`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-API-Key': apiKey,
        },
    });

    if (!res.ok) {
        throw new Error('Failed to fetch summary');
    }

    return res.json();
}