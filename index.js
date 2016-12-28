// Using JS to add up time strings

// Get time strings from li's
const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

// Convert each time string to numeric seconds
const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
    console.log(mins, secs);
  })
  // Compute total number of seconds
  .reduce((total, vidSeconds) => total + vidSeconds);

  let secondsLeft = seconds;
  // Calculate hours left
  const hours = Math.floor(secondsLeft / 3600);
  // Calculate remaining seconds
  secondsLeft = secondsLeft % 3600;
  // Calculate minutes left
  const minutes = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  console.log(`Total Time: ${hours}:${minutes}:${secondsLeft}`);
