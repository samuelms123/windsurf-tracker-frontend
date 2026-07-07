export const formatDuration = (seconds: number): string => {
  if (!seconds) return '0h 0m';
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  return `${hours}h ${minutes}m`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const msToKmh = (ms: number): number => {
  return ms * 3.6;
}

export const msToKnots = (ms: number): number => {
  return ms * 1.94384;
}