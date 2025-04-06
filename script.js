const images = [
    "https://images.squarespace-cdn.com/content/v1/64098fbbd21dd971ed1f5028/bc87ee89-dcbe-436d-87fa-1d8eeff75e09/03-Dance-photographer-Chennai.jpg",
    "https://miro.medium.com/v2/resize:fit:852/1*Sa2kzBxo1U0Ex9nuIENxhQ.jpeg",
    "https://pixahive.com/wp-content/uploads/2020/09/Dance-80570-pixahive.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ILXnA2lPLgx29ucIipcgJa-g9vsZp4w1KQ&s"
  ];
  
  let currentIndex = 0;
  
  const sliderImage = document.getElementById("slider-image");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  
  function updateImage() {
    sliderImage.src = images[currentIndex];
  }
  
  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
  });
  