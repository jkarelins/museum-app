const { artObjects } = data;
const gallery = document.getElementById("gallery");

// // Create index Gallery
gallery.innerHTML += artObjects
  .map(artObject => {
    const { longTitle } = artObject;
    const date = +longTitle.slice(-4);
    if (
      artObject.webImage.width > 1500 &&
      artObject.principalOrFirstMaker !== "Gerard van Honthorst" &&
      date < 1800
    ) {
      return `<a href="./pages/detail-page.html">
      <img
          class="artObject"
          data="${artObject.id}"
          src="${artObject.webImage.url}"
          alt="${artObject.title}"
></a>`;
    }
  })
  .join("");

// Join to remove extra commas from toString -> innerHTML uses

const artObjsArr = document.getElementsByClassName("artObject");

for (artObj of artObjsArr) {
  artObj.addEventListener("click", e => {
    const id = e.target.getAttribute("data");
    localStorage.setItem("artObjectToDetails", id);
  });
}
