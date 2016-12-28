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
  });
