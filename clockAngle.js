/* https://www.byte-by-byte.com/clockangle/ */

const MINUTES_PER_HOUR = 60;
const DEGREES_PER_MINUTE = 360 / MINUTES_PER_HOUR;
const DEGREES_PER_HOUR = 360 / 12;

const clockAngle = (hour, minutes) => {
  const minuteAngle = minutes * DEGREES_PER_MINUTE;
  const hourAngle = hour * DEGREES_PER_HOUR + (minutes / MINUTES_PER_HOUR) * DEGREES_PER_HOUR;

  const diff = Math.abs(minuteAngle - hourAngle);
  if (diff > 180) return 360 - diff;
  return diff;
};

console.log(clockAngle(3, 40));