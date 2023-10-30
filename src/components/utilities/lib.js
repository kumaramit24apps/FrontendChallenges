function getTime() {
  // Get the current local timestamp (UNIX timestamp)
  const localTimestamp = Date.now();

  // Create a Date object from the timestamp
  const date = new Date(localTimestamp);

  // Get the individual date and time components
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Ensure leading zeros for single-digit day, month, and minutes
  const formattedMinutes = String(minutes).padStart(2, '0');

  // Determine whether it's AM or PM
  const amOrPm = hours >= 12 ? 'PM' : 'AM';

  // Create the final formatted date and time string
  const formattedDateTime = `${hours}:${formattedMinutes} ${amOrPm}`;

  return formattedDateTime;
}

export { getTime };
