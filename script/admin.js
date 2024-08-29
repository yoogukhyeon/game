document.getElementById('back-button').addEventListener('click', function (event) {
  event.preventDefault(); // 기본 링크 동작을 막습니다.
  history.back(); // 이전 페이지로 이동합니다.
});
