export default function debounce(func, delay) {
  let timeoutId;
  return function debouncedFunc(...args) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(func, delay, ...args);
  };
}
