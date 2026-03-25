export function getAppBanner() {
    return "Micro Habit Loop ready";
}
if (import.meta.url === `file://${process.argv[1]}`) {
    console.log(getAppBanner());
}
