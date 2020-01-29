const { artObjects } = data;
const gallery = document.getElementById("gallery");

for (artObject of artObjects) {
  gallery.insertAdjacentHTML(
    "beforeend",
    `<a href="./pages/detail-page.html"><img
      class="artObject"
      src="${artObject.webImage.url}"
      alt="${artObject.title}"
  /></a>`
  );
}

const art = document.getElementsByClassName("artObject");
for (artObject of art) {
  // showArt(artObject.id);
}

function newComment(e) {
  const nameInput = document.getElementById("nameInput");
  const commentText = document.getElementById("message");
  const commentsSpace = document.getElementById("commentsSpace");

  commentsSpace.insertAdjacentHTML(
    "beforeend",
    `<section class="comment">
      <h3>${nameInput.value} said:</h3>
      <p>"${commentText.value}"</p>
    </section>`
  );

  commentText.value = "";
  nameInput.value = "";
}
