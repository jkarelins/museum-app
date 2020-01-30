const { artObjects } = data;
const gallery = document.getElementById("gallery");
let artAuthor = { name: "allArt" };
let innerArtObj = [];
let minYear = 0;
let maxYear = 1500;

// function to sort gallery
function sortArtByAuth(author) {
  if (artAuthor.name == "allArt") {
    innerArtObj = artObjects;
  } else {
    innerArtObj = artObjects.filter(
      artObj => author == artObj.principalOrFirstMaker
    );
  }
}

function sortByYear(minYear, maxYear) {
  innerArtObj = innerArtObj.filter(
    artObj =>
      artObj.longTitle.slice(-4) < maxYear &&
      artObj.longTitle.slice(-4) > minYear
  );
}

// function to create gallery
function createArtGallery() {
  $(".artCover").remove();
  gallery.innerHTML += innerArtObj
    .map(artObject => {
      // if (
      // artObject.webImage.width > 1500 &&
      // artObject.principalOrFirstMaker !== "Gerard van Honthorst" &&
      // date < 1800
      // author === "allArt"
      // true
      // ) {
      return `<a href="./pages/detail-page.html" class='artCover'>
      <img
          class="artObject"
          data="${artObject.id}"
          src="${artObject.webImage.url}"
          alt="${artObject.title}"
></a>`;
      // }
    })
    .join("");
}

const artObjsArr = document.getElementsByClassName("artObject");

for (artObj of artObjsArr) {
  artObj.addEventListener("click", e => {
    const id = e.target.getAttribute("data");
    localStorage.setItem("artObjectToDetails", id);
  });
}

document.getElementById("painterSelector").innerHTML +=
  '<option value="allArt">Show All</option>';

document.getElementById("painterSelector").innerHTML += artObjects
  .map(artObject => {
    return `<option value="${artObject.principalOrFirstMaker}">${artObject.principalOrFirstMaker}</option>`;
  })
  .join("");

function runApp() {
  sortArtByAuth(artAuthor.name);
  console.log(minYear, maxYear);
  sortByYear(minYear, maxYear);
  createArtGallery();
  $("#painterSelector").change(e => {
    artAuthor.name = e.target.value;
    runApp();
    $("#minYear").val(minYear);
    $("#maxYear").val(maxYear);
  });
  $("#searchForYears").on("click", e => {
    e.preventDefault();
    minYear = $("#minYear").val();
    maxYear = $("#maxYear").val();
    runApp();
    $("#minYear").val(minYear);
    $("#maxYear").val(maxYear);
  });
}

runApp();
