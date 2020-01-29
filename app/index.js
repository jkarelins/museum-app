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
