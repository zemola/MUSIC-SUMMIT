const openMenu = document.getElementById('menu');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('nav-mobile');

function openMobileMenu() {
  menu.style.display = 'block';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
}

function closeMobileMenu() {
  menu.style.display = 'none';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
}

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);

// The speker Selection
const data = [
  {
    id: "1",
    pic: "./image/jazzy.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Michael Collins Ajereh",
    designation: "Southafrican Air news Magazine Author and Editor with 20years experience",
    history:
      "Professionally known as Don Jazzy, is a Nigerian record producer,and philanthropist. He is the founder and the CEO of Mavin Records.",
  },
  {
    id: "2",
    pic: "./image/Olamide.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Olamide Gbenga Adedeji",
    designation:
      "Southafrican Air news Magazine Author and Editor with 20years experience",
    history:
      "Professionally known as Olamide is a Nigerian hip hop recording artist. He records in Yoruba and English.",
  },
  {
    id: "3",
    pic: "./image/Davido.jpg",
    altText: "speaker image",
    nameOfSpeaker: "David Adedeji Adeleke",
    designation:
      "Southafrican Air news Magazine Author and Editor with 20years experience",
    history:
      "Professionally known as Davido, is a Nigerian-American singer, songwriter, and record producer. Davido rose to fame after releasing Dami Duro.",
  },
  {
    id: "4",
    pic: "./image/wizkid.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Ayodeji Ibrahim Balogun",
    designation:
      "Southafrican Air news Magazine Author and Editor with 20years experience",
    history:
      "Professionally known as Wizkid is a Nigerian singer and songwriter. He began recording music at the age of 11.",
  },
  {
    id: "5",
    pic: "./image/burnaboy.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Damini Ebunoluwa Ogulu",
    designation:
      "Southafrican Air news Magazine Author and Editor with 20years experience",
    history:
      "Professionally known as Burna Boy, is a Nigerian singer, rapper and songwriter. He is one of the biggest and most successful African artists.",
  },
  {
    id: "7",
    pic: "./image/Tiwa-Savage.jpg",
    altText: "speaker image",
    nameOfSpeaker: "Tiwa Savage",
    designation:
      "Southafrican Air news Magazine Author and Editor with 20years experience",
    history:
      "A Nigerian singer, songwriter and actress. Born in Isale Eko, she relocated to London at the age of 11 for her secondary education.",
  },
];

window.onload = () => {
  const speakerContainer = document.getElementById('speakers');

  data.forEach((speakerPara) => {
    const speakerSection = document.createElement('div');
    speakerSection.setAttribute('class', 'speaker-section');
    speakerSection.setAttribute('id', 'each-speaker');

    const imageSection = document.createElement('div');
    imageSection.setAttribute('class', 'speaker-image-section');
    const image = document.createElement('img');
    image.setAttribute('class', 'speaker-image');
    image.setAttribute('src', speakerPara.pic);
    image.setAttribute('alt', speakerPara.altText);

    imageSection.appendChild(image);
    speakerSection.appendChild(imageSection);

    const contentSection = document.createElement('div');
    contentSection.setAttribute('class', 'speaker-details');
    contentSection.setAttribute('id', 'about-speaker');

    const speakerName = document.createElement('h2');
    speakerName.setAttribute('class', 'speaker-name');
    speakerName.textContent = speakerPara.nameOfSpeaker;
    contentSection.appendChild(speakerName);

    const speakerDesignation = document.createElement("p");
    speakerDesignation.setAttribute("class", "speaker-designation");
    speakerDesignation.textContent = speakerPara.designation;
    contentSection.appendChild(speakerDesignation);

    const speakerHistory = document.createElement('p');
    speakerHistory.setAttribute('class', 'speaker-history');
    speakerHistory.textContent = speakerPara.history;
    contentSection.appendChild(speakerHistory);

    speakerSection.appendChild(contentSection);
    speakerContainer.appendChild(speakerSection);
  });
};