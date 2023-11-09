// this section for map 
let map;
async function initMap() {
  const { Map, Marker } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 28.58153853129693, lng:  77.3215530337054 },
    zoom: 15,
  });

  new Marker({
    position: { lat: 28.58153853129693, lng: 77.3215530337054 }, // Replace with your business location coordinates
    map,
    title: "Booming Bulls Office", // Replace with your business name
  });
}
initMap();

// this section for number animation of index page
document.addEventListener("DOMContentLoaded", function() {
  const numberElement1 = document.getElementById("number-display1");
  const numberElement2 = document.getElementById("number-display2");
  const numberElement3 = document.getElementById("number-display3");
  const numberElement4 = document.getElementById("number-display4");

  const originalNumber1 = "1.9M";
  const originalNumber2 = "24,000+";
  const originalNumber3 = "1,000+";
  const originalNumber4 = 4.6;

  const duration = 500; // 2 seconds

  // Function to generate a random number between min and max
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // Function to display a random number for a few seconds
  function showRandomNumber() {
    const startTime = Date.now();
    const min = 100; // Minimum random number
    const max = 999; // Maximum random number

    function updateNumber() {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;

      if (elapsed < duration) {
        const randomNumber = getRandomNumber(min, max);
        numberElement1.textContent = randomNumber;
        numberElement2.textContent = randomNumber;
        numberElement3.textContent = randomNumber;
        numberElement4.textContent = randomNumber;
        requestAnimationFrame(updateNumber);
      } else {
        numberElement1.textContent = originalNumber1;
        numberElement2.textContent = originalNumber2;
        numberElement3.textContent = originalNumber3;
        numberElement4.textContent = originalNumber4;
      }
    }
    updateNumber();
  }
  // Start the animation when the page loads
  showRandomNumber();
});
