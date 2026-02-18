//Team Data
const team = [
  {
    id: "anna",
    fullName: "Anna Kendrick",
    avatar: "avataaars/annakendrick.svg", // No dot, no leading slash
  },
  {
    id: "harry",
    fullName: "Harry Fawn",
    avatar: "avataaars/harryfn.svg",
  },
  {
    id: "sofia",
    fullName: "Sofia Sultan",
    avatar: "avataaars/sofiasul.svg",
  },
];
//Modify Code below this line

//Content Selected using ID.
const content = document.getElementById("content");

/**
 * Creates and img HTML element with given src and alt
 * @param {string} src - Source for image
 * @param {string} alt - Alt text for image
 * @returns An Image HTML Element
 */
const getImageElement = (src, alt) => {
  // Create the img element
  const img = document.createElement("img");

  // Set the required attributes [cite: 38]
  img.setAttribute("src", src);
  img.setAttribute("alt", alt);
  img.setAttribute("height", "100"); // [cite: 39]
  img.setAttribute("width", "100"); // [cite: 39]

  return img; // [cite: 40]
};

/**
 * Creates a new card with passed parameters.
 * @param {string} id - Unique id from team data
 * @param {string} fullName - Name of the team member
 * @param {string} jobTitle - Job title of the team memeber
 * @param {string} bio - Description Bio
 * @param {string} avatar - Source of the avatar image.
 * @returns section HTML element with Image and Text
 */
function generateCard(id, fullName, jobTitle, bio, avatar) {
  // 1. Create a new "section" element and set the className and id [cite: 45]
  const section = document.createElement("section");
  section.classList.add("team-member");
  section.setAttribute("id", id);

  // 2. Generate the image using getImageElement() function [cite: 37]
  const imageElement = getImageElement(avatar, fullName);

  // 3. Create a div for text content
  const textDiv = document.createElement("div");

  // 4. Create an h2 for fullName
  const nameH2 = document.createElement("h2");
  nameH2.textContent = fullName;

  // 5. Create an h3 for jobTitle
  const titleH3 = document.createElement("h3");
  titleH3.textContent = jobTitle;

  // 6. Create a p for bio
  const bioP = document.createElement("p");
  bioP.textContent = bio;

  // 7. Append the fullName, jobTitle, and bio element to the div [cite: 45]
  textDiv.append(nameH2);
  textDiv.append(titleH3);
  textDiv.append(bioP);

  // 8. Append the Image and the Text div to the new section [cite: 45]
  section.append(imageElement);
  section.append(textDiv);

  return section;
}

/**
 * Generates and returns an array of HTML elements
 * @param {Array} data Team data array
 */
function generateCardArray(data) {
  const cards = [];

  // Loop through the team data array
  data.forEach((member) => {
    // Create a card for the current member
    const card = generateCard(
      member.id,
      member.fullName,
      member.jobTitle,
      member.bio,
      member.avatar
    );
    // Add the generated card to our cards array
    cards.push(card);
  });

  return cards;
}

const cardsArray = generateCardArray(team);

//Run a loop for the cardsArray and append its elements to content.
for (let card of cardsArray) {
  content.append(card);
}
//Modify Code above this line
