$(function () {
  // 탭 클릭 이벤트 처리
  $('.modal_tab ul li').click(function () {
    // 모든 탭에서 active 클래스 제거
    $('.modal_tab ul li').removeClass('active');

    // 클릭한 탭에 active 클래스 추가
    $(this).addClass('active');

    // 모든 탭 내용 숨기기
    $('.tab-content').hide();

    // 클릭한 탭에 해당하는 내용 보여주기
    var tabId = $(this).data('tab');
    $('#' + tabId).show();
  });
});
