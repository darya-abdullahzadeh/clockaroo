export function calculateDaysAgo(givenDate: string) {
  const currentDate = new Date(); // Gets today's date
  const givenDateObj = new Date(givenDate); // Converts the given date into a Date object

  // Difference in time (in milliseconds)
  const timeDifference = currentDate.getTime() - givenDateObj.getTime();

  // Convert the time difference to days (milliseconds per day)
  const daysAgo = timeDifference / (1000 * 3600 * 24);

  // Return the absolute value of days (as you can't have negative days)
  return Math.floor(daysAgo);
}
