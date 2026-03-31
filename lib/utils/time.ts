export function timeAgo(dateStr: string): string {
  const then = new Date(dateStr);
  const now = new Date();
  const years = now.getFullYear() - then.getFullYear();
  const months = now.getMonth() - then.getMonth() + years * 12;
  if (years >= 1) return `${years} ${years === 1 ? 'Year' : 'Years'} Ago`;
  if (months >= 1) return `${months} ${months === 1 ? 'Month' : 'Months'} Ago`;
  const days = Math.floor((now.getTime() - then.getTime()) / 86400000);
  if (days >= 1) return `${days} ${days === 1 ? 'Day' : 'Days'} Ago`;
  return 'Today';
}
