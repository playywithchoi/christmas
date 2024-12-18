document.addEventListener("DOMContentLoaded", () => {
  const commentsContainer = document.getElementById("comments");

  // 서버에서 댓글 데이터를 가져오기
  fetch('/api/comments')
    .then(response => response.json())
    .then(data => {
      data.forEach(comment => {
        const div = document.createElement('div');
        div.textContent = comment.text;
        commentsContainer.appendChild(div);
      });
    })
    .catch(error => {
      console.error("Error fetching comments:", error);
    });
});
