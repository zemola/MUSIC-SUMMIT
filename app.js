// Getting menu icon element
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".desktop-menu");
const closeMenu = document.getElementById("close");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
});

// Getting the bars of the hamburger menu
const portfolio = document.querySelector(".portfolio-link");
const aboutUs = document.querySelector(".about-link");
const contactLink = document.querySelector(".contact-link");

const closeMobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

portfolio.addEventListener("click", () => {
  closeMobileMenu();
});

aboutUs.addEventListener("click", () => {
  closeMobileMenu();
});

closeMenu.addEventListener("click", () => {
  closeMobileMenu();
});

const speakersContainer = document.getElementById("speakers");
const data = [
  {
    id: '1',
    pic: "./image/jazzy.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Michael Collins Ajereh",
    history:
      "Professionally known as Don Jazzy, is a Nigerian record producer, audio engineer, record executive, entrepreneur and philanthropist. He is the founder and the CEO of Mavin Records.",
  },
  {
    id: '2',
    pic: "./image/Olamide.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Olamide Gbenga Adedeji",
    history:
      "Professionally known as Olamide is a Nigerian hip hop recording artist. He records in Yoruba and English.",
  },
  {
    id: '3',
    pic: "./image/Davido.jpg",
    altText: "speaker image",
    nameOfSpeaker: "David Adedeji Adeleke",
    history:
      'Professionally known as Davido, is a Nigerian-American singer, songwriter, and record producer. Davido rose to fame after releasing "Dami Duro".',
  },
  {
    id: '4',
    pic: "./image/wizkid.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Ayodeji Ibrahim Balogun",
    history:
      "Professionally known as Wizkid is a Nigerian singer and songwriter. He began recording music at the age of 11.",
  },
  {
    id: '5',
    pic: "./image/burnaboy.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Damini Ebunoluwa Ogulu",
    history:
      'Professionally known as Burna Boy, is a Nigerian singer, rapper and songwriter. He is one of the biggest and most successful African artists.',
  },
  {
    id: '6',
    pic: "./image/yemi.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Yemi Eberechi Alade",
    history:
      'is a Nigerian Afropop singer, songwriter, actress and activist. She won the Peak Talent Show in 2009 after which she signed to Effyzzie Music Group.',
  },
  {
    id: '7',
    pic: "./image/Tiwa-Savage.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Tiwa Savage",
    history:
      "A Nigerian singer, songwriter and actress. Born in Isale Eko, she relocated to London at the age of 11 for her secondary education.",
  },
  {
    id: '8',
    pic: "./image/phyno.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Chibuzor Nelson Azubuike",
    history:
      "better known as Phyno Fino, is a Nigerian rapper, singer, songwriter and record producer.",
  },
];

// const speakerContainer = document.querySelector(".speaker");
// speakerContainer.setAttribute("class", "speaker");
// speakerContainer.setAttribute("id", "speaker1");

// data.forEach((speakerPara) => {
//   const speakerSection = document.createElement("div");
//   speakerSection.setAttribute("class", "speaker-section");
//   speakerSection.setAttribute("id", "each-speaker");

//   const imageSection = document.createElement("div");
//   imageSection.setAttribute("class", "image");
//   const image = document.createElement("img");
//   image.setAttribute("class", "speaker-image");
//   image.setAttribute("src", speakerPara.pic);
//   image.setAttribute("alt", speakerPara.altText);

//   imageSection.appendChild(image);
//   speakerSection.appendChild(imageSection);

//   const contentSection = document.createElement("div");
//   contentSection.setAttribute("class", "speaker-details");
//   contentSection.setAttribute("id", "about-speaker");

//   const speakerName = document.createElement("h2");
//   speakerName.setAttribute("class", "speaker-name");
//   speakerName.textContent = speakerPara.nameOfSpeaker;
//   speakerSection.appendChild(speakerName);

//   const speakerHistory = document.createElement("p");
//   speakerHistory.setAttribute("class", "speaker-history");
//   speakerHistory.textContent = speakerPara.history;
//   speakerSection.appendChild(speakerHistory);

//    contentSection.appendChild(speakerSection);
//   speakerContainer.appendChild(speakerSection);
// });
// const loadSpeakers = () => speakersContainer.appendChild(speakerContainer);

// window.onload(loadSpeakers());




const speakerContainer = document.createElement("section");
speakerContainer.setAttribute("class", "featured-speakers");
speakerContainer.setAttribute("id", "speakers");

data.forEach((speakerPara) => {
  const speakerSection = document.createElement("div");
  speakerSection.setAttribute("class", "speaker-section");
  speakerSection.setAttribute("id", "each-speaker");

  const imageSection = document.createElement("div");
  imageSection.setAttribute("class", "speaker-image-section");
  const image = document.createElement("img");
  image.setAttribute("class", "speaker-image");
  image.setAttribute("src", speakerPara.pic);
  image.setAttribute("alt", speakerPara.altText);

  imageSection.appendChild(image);
  speakerSection.appendChild(imageSection);

  const contentSection = document.createElement("div");
  contentSection.setAttribute("class", "speaker-details");
  contentSection.setAttribute("id", "about-speaker");

  const speakerName = document.createElement("h2");
  speakerName.setAttribute("class", "speaker-name");
  speakerName.textContent = speakerPara.nameOfSpeaker;
  contentSection.appendChild(speakerName);
  
  const speakerHistory = document.createElement("p");
  speakerHistory.setAttribute("class", "speaker-history");
  speakerHistory.textContent = speakerPara.history;
  contentSection.appendChild(speakerHistory);

  speakerSection.appendChild(contentSection);
  speakerContainer.appendChild(speakerSection);
});

const loadSpeakers = () => speakersContainer.appendChild(speakerContainer);

window.onload(loadSpeakers());
