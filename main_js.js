$pbMainHeaderList = document.querySelector(".pb-main-header-list");
$listModalBoxInnerFinalBoxButton = document.querySelector('#list-modal-box-inner-final-box button');
$modalContainer1 = document.querySelector('.modal-container#modal-list-container');
$modalContainer2 = document.querySelector('.modal-container#modal-comment-container');
$heartButton = document.querySelector('#heart-button');
$commentButton = document.querySelector('#comment-button');
$heartImage = document.querySelector('#heart-image');
let image_flag = 0;                                                               // dom 객체 받아오기

$pbMainHeaderList.addEventListener('click', () => {                               // 클릭하면 모달창 나오게
  $modalContainer1.style.display = "flex";
});

$commentButton.addEventListener('click', () => {                    
  $modalContainer2.style.display = "flex";
});

$listModalBoxInnerFinalBoxButton.addEventListener('click', () => {                // 취소 클릭하면 모달창 꺼지게
  $modalContainer1.style.display = "none";
})

$modalContainer1.addEventListener('click', (event) => {                      // 모달창 바깥쪽 클릭하면 꺼지게 구현!!
  if(event.target == event.currentTarget)
    $modalContainer1.style.display = "none";
});

$heartButton.addEventListener('click', () => {                            // 하트 클릭 색깔 변하기 구현!!
  if(image_flag == 0) {
    $heartImage.src = "./image/heart_red.png";
    image_flag = 1;
  }
  else {
    $heartImage.src = "./image/heart.png";
    image_flag = 0;
  }
})

