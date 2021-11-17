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

// const Data = [
//   {
//     id: 1,
//     pic: "./image/jazzy.jpg",
//     altText: "speaker image",
//     nameOfSpeaker: "Michael Collins Ajereh",
//     history:
//       "Professionally known as Don Jazzy, is a Nigerian record producer, audio engineer, record executive, singer, songwriter, entrepreneur and philanthropist. He is the founder and the CEO of Mavin Records. Don Jazzy was co-owner of the defunct Mo Hits Records record label with Dbanj.",
//   },
//   {
//     id: 2,
//     pic: "./image/Olamide.jpg",
//     altText: "speaker image",
//     nameOfSpeaker: "Olamide Gbenga Adedeji",
//     history:
//       "Professionally known as Olamide is a Nigerian hip hop recording artist. He records in Yoruba and English. In 2011, he released his debut studio album Rapsodi while signed to Coded Tunes. YBNL, his follow-up album, was released under his label imprint YBNL Nation.",
//   },
//   {
//     id: 3,
//     pic: "./image/Davido.jpg",
//     altText: "speaker image",
//     nameOfSpeaker: "David Adedeji Adeleke",
//     history:
//       'Professionally known as Davido, is a Nigerian-American singer, songwriter, and record producer. Davido rose to fame after releasing "Dami Duro", the second single from his debut studio album Omo Baba Olowo. In 2012, Davido won the Next Rated award at The Headies.',
//   },
//   {
//     id: 4,
//     pic: "././image/wizkid.jpg",
//     altText: "speaker image",
//     nameOfSpeaker: "Ayodeji Ibrahim Balogun",
//     history:
//       "Professionally known as Wizkid is a Nigerian singer and songwriter. He began recording music at the age of 11 and released a collaborative album with the Glorious Five, a group he and a couple of his church friends formed..",
//   },
//   {
//     id: 5,
//     pic: "./image/burnaboy.jpg",
//     altText: "speaker image",
//     nameOfSpeaker: "Damini Ebunoluwa Ogulu",
//     history:
//       'Professionally known as Burna Boy, is a Nigerian singer, rapper and songwriter. He is one of the biggest and most successful African artists. He rose to prominence in 2012 after releasing "Like to Party", the lead single from his debut studio album L.I.F.E.',
//   },
//   {
//     id: 6,
//     pic: "./image/yemi.jpg",
//     altText: "speaker image",
//     nameOfSpeaker: "Yemi Eberechi Alade",
//     history:
//       'is a Nigerian Afropop singer, songwriter, actress and activist. She won the Peak Talent Show in 2009 after which she signed to Effyzzie Music Group, and had a hit with her single "Johnny" in 2014.',
//   },
//   {
//     id: 7,
//     pic: "./image/Tiwa-Savage.jpg",
//     altText: "speaker image",
//     nameOfSpeaker: "Tiwa Savage",
//     history:
//       "A Nigerian singer, songwriter and actress. Born in Isale Eko, she relocated to London at the age of 11 for her secondary education. Five years later, she began her music career doing backup vocals for artists such as George Michael and Mary J. Blige.",
//   },
//   {
//     id: 8,
//     pic: "./image/phyno.jpg",
//     altText: "speaker image",
//     nameOfSpeaker: "Chibuzor Nelson Azubuike",
//     history:
//       "better known as Phyno Fino, is a Nigerian rapper, singer, songwriter and record producer. He started his music career as a producer in 2003, and is renowned for rapping in the Igbo language. His debut studio album No Guts No Glory was released in 2014",
//   },
// ];

// const speaker = document.querySelector(".guest-speaker");
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

//   const speakerName = document.createElement("h3");
//   speakerName.setAttribute("class", "speaker-name");
//   speakerName.textContent = speakerPara.nameOfSpeaker;
//   contentSection.appendChild(speakerName);

//   const speakerHistory = document.createElement("p");
//   speakerHistory.setAttribute("class", "speaker-history");
//   speakerHistory.textContent = speakerPara.history;
//   contentSection.appendChild(speakerHistory);

//   speakerSection.appendChild(contentSection);
//   speakerContainer.appendChild(speakerSection);
// });

// const loadSpeakers = () => speakersContainer.appendChild(speakerContainer);

// window.onload(loadSpeakers());
