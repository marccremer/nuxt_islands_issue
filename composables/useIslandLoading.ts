const ISLAND_EVENT = 'island:loaded';
export default function (callback: (arg0: Event) => void) {
  if (!process.server) {
    document.addEventListener(ISLAND_EVENT, callback);
    onUnmounted(() => document.removeEventListener(ISLAND_EVENT, callback));
  }
}
