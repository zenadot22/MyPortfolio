// Get HTML containers to add elements to
let slidesContainer = document.getElementById("carousel-container");
let bulletsContainer = document.getElementById("carousel-bullets");

// Content for slides
let slideContent = [
  {
    title: "Godwin Dzvapatzva",
    subtitle: "Head of Curriculum",
    description:
      "I am pleased to commend on Zenande. She finishes her work on schedule and follows tasks through to completion",
    image: "assets/img/godwin.png"
  },
  
  {
    title: "Sihle Mambikimba",
    subtitle: "Colleague",
    description:
      "Always available to help, incredibly proficient, hits deadlines without fail, hard working and trustworthy.",
    image: "assets/img/profile(1).jpg"
  },
  {
    title: "Athenkosi Gongotha",
    subtitle: "Colleague",
    description:
      " Timely, reasonable, professional, great communication, innovative and creative ideas.She is a real pro in her chosen field.",
      image: "assets/img/athi.png"
  },

  {
    title: "Masande Gontyeleni",
    subtitle: "Colleague",
    description:
      "She is very professional , even though I have known her for a short period of time.She is very helpful , exceptional and willing to work at any given time.",
    image: "assets/img/masande.png"
  },

  
];


let totalSlides = slideContent.length;

// Function to create bullets
function createBullet(index) {
    // Create button to be clicked on and add attributes
    let bulletButton = document.createElement("button");
    bulletButton.classList.add("carousel-bullet");
    bulletButton.setAttribute("onclick", `bulletSlider(${index})`);
  
    // Create bullet with active classes
    let bullet = document.createElement("i");
    bullet.classList.add("fas");
    bullet.classList.add("fa-circle");
    if (index == 0) bullet.classList.add("active");
  
    // Add bullet to bulletButton
    bulletButton.appendChild(bullet);
  
    // Add bulletButton to buttonContainer
    bulletsContainer.appendChild(bulletButton);
  }
  
  // Function to create slides
  function createSlide(slide, index) {
    // Create slide container
    let slideWrapper = document.createElement("div");
    slideWrapper.classList.add("carousel-slide");
    if (index == 0) slideWrapper.classList.add("active");
  
    // Create content for slide
    let slideImage = document.createElement("img");
    slideImage.src = slide.image;
  
    let slideHeading = document.createElement("h2");
    slideHeading.innerHTML = slide.title;
  
    let slideSubtitle = document.createElement("h4");
    slideSubtitle.innerHTML = slide.subtitle;
  
    let slideDescription = document.createElement("p");
    slideDescription.innerHTML = slide.description;
  
    // Build slide
    slideWrapper.appendChild(slideImage);
    slideWrapper.appendChild(slideHeading);
    slideWrapper.appendChild(slideSubtitle);
    slideWrapper.appendChild(slideDescription);
  
    // Add slide to container
    slidesContainer.appendChild(slideWrapper);
  }
  
  // Initialize Carousel
  slideContent.forEach((slide, index) => {
    createBullet(index);
    createSlide(slide, index);
  });
  
  let bulletSlider = (index) => {
    let bullets = document.getElementsByClassName("fa-circle");
    for (let i = 0; i < totalSlides; i++) {
      if (index === i) {
        bullets[i].classList.add("active");
        slides[i].classList.add("active");
      } else {
        bullets[i].classList.remove("active");
        slides[i].classList.remove("active");
      }
    }
  };
  
  let changeSlide = (toSlide) => {
    let bullets = document.getElementsByClassName("fa-circle");
    let slides = document.getElementsByClassName("carousel-slide");
    for (let i = 0; i < totalSlides; i++) {
      if (slides[i].classList.contains("active")) {
        let endOfArray = i + toSlide > totalSlides - 1 ? true : false;
        let beginningOfArray = i + toSlide < 0 ? true : false;
        slides[i].classList.remove("active");
        bullets[i].classList.remove("active");
        if (endOfArray) {
          slides[0].classList.add("active");
          bullets[0].classList.add("active");
        } else if (beginningOfArray) {
          bullets[totalSlides - 1].classList.add("active");
          slides[totalSlides - 1].classList.add("active");
        } else {
          bullets[i + toSlide].classList.add("active");
          slides[i + toSlide].classList.add("active");
        }
        break;
      }
    }
  };