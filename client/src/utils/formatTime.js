const formatTime = (time) => {
  let hour = Number(time.slice(0, 2));
  const minute = time.slice(3, 5);

  let ampm = "pm";
  if (hour < 12) {
    ampm = "am";
  } else if (hour > 12) {
    ampm = "pm";
    hour -= 12;
  }

  return [String(hour), minute].join(":") + ampm;
};

export default formatTime;
