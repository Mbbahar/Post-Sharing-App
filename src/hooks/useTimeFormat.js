export function useTimeFormat() {
  function timeFormatting() {
    const now = new Date();
    const offsetMs = now.getTimezoneOffset() * 60 * 1000;
    const dateLocal = new Date(now.getTime() - offsetMs);
    const str = dateLocal
      .toISOString()
      .slice(0, 19)
      .replace(/-/g, '')
      .replace('T', '')
      .replace(/:/g, '');

    return str;
  }

  return {timeFormatting};
}
