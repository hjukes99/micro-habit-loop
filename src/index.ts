export function getAppBanner(): string {
  return "Micro Habit Loop ready";
}

if (import.meta.url === `file://${process.argv[1]}`) {
  console.log(getAppBanner());
}
