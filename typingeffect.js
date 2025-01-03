const roles = [
    "Game Developer",
    "Technical Artist",
    "Tool Developer",
    "2D Artist",
    "3D Generalist"
  ];

  let part = "";
  let i = 0; // Current role index
  let offset = 0; // Current character offset
  let forwards = true; // Direction of typing
  let skipCount = 0; // Skip counter for delay between roles
  const skipDelay = 15; // Delay between roles
  const speed = 100; // Typing speed

  const wordFlick = () => {
    setInterval(() => {
      if (forwards) {
        if (offset >= roles[i].length) {
          skipCount++;
          if (skipCount === skipDelay) {
            forwards = false;
            skipCount = 0;
          }
        }
      } else {
        if (offset === 0) {
          forwards = true;
          i++;
          if (i >= roles.length) {
            i = 0; // Loop back to the first role
          }
        }
      }

      part = roles[i].substr(0, offset);
      if (skipCount === 0) {
        if (forwards) {
          offset++;
        } else {
          offset--;
        }
      }

      document.querySelector(".typing-effect").textContent = part;
    }, speed);
  };

  document.addEventListener("DOMContentLoaded", wordFlick);