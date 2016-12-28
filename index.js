// Using JS to add up time strings

// Get array of time strings from li's
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// Convert each time string to numeric seconds
const seconds = timeNodes
  // Get time from data-time attribute
  .map(node => node.dataset.time)
  // Separate minutes and seconds and convert to numbers
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  // Compute total number of seconds
  .reduce((total, vidSeconds) => total + vidSeconds);
  // Get total seconds
  let secondsLeft = seconds;
  // Calculate hours left
  const hours = Math.floor(secondsLeft / 3600);
  // Calculate remaining seconds to convert
  secondsLeft = secondsLeft % 3600;
  // Calculate minutes left
  const minutes = Math.floor(secondsLeft / 60);
  // Calculate seconds left
  secondsLeft = secondsLeft % 60;

  console.log(`Total Time: ${hours}:${minutes}:${secondsLeft}`);
