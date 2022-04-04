$pbMainHeaderList = document.querySelector(".pb-main-header-list");
$listModalBoxInnerFinalBoxButton = document.querySelector('#list-modal-box-inner-final-box button');
$modalContainer1 = document.querySelector('.modal-container#modal-list-container');
$modalContainer2 = document.querySelector('.modal-container#modal-comment-container');
$heartButton = document.querySelectorAll('.heart-button');
$commentButton = document.querySelector('#comment-button');
$heartImage = document.querySelectorAll('.heart-image');
$cancleButton = document.querySelector('.cancle-button');        // dom 객체 받아오기
$modalCommentForm = document.querySelector('.modal-comment-form');
$loveNumber = document.querySelectorAll('.love-number');
                                                             
$pbMainHeaderList.addEventListener('click', () => {                               // 클릭하면 모달창 나오게
  $modalContainer1.style.display = "flex";
});

$commentButton.addEventListener('click', () => {                    
  $modalContainer2.style.display = "flex";
});

$listModalBoxInnerFinalBoxButton.addEventListener('click', () => {                // 취소 클릭하면 모달창 꺼지게
  $modalContainer1.style.display = "none";
})

$cancleButton.addEventListener('click', () => {                // 취소 클릭하면 모달창 꺼지게
  $modalContainer2.style.display = "none";
})

$modalContainer1.addEventListener('click', (event) => {                      // 모달창 바깥쪽 클릭하면 꺼지게 구현!!
  if(event.target == event.currentTarget)
    $modalContainer1.style.display = "none";
});

let image_flag = 0;  

$heartButton[1].addEventListener('click', () => {                            // 하트 클릭 색깔변하기 구현!!
    fetch('/main/test', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: "Test",
        body: "I am testing!",
        userId: 1,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(typeof data))
    
    if(image_flag == 0) {
      $heartImage[1].src = "./image/heart_red.png";
      image_flag = 1;
      $loveNumber[1].innerText = +$loveNumber[1].innerText +Number(1);
    }
    else {
      $heartImage[1].src = "./image/heart.png";
      image_flag = 0;
      $loveNumber[1].innerText = +$loveNumber[1].innerText -Number(1);;
    }
})
          
$modalCommentForm.addEventListener('submit', (e) => {                           // 댓글 달기
  e.preventDefault();
  if($modalCommentForm.children[1].children[0].value == '') {
    return;
  }

  $commentBoxElement = $modalCommentForm.parentNode.children[1].children[0];
  const $newCommentContainer = document.createElement("div");
  $newCommentContainer.className = 'comment-modal-box-main-comment'

  const $profile = document.createElement("div");
  $profile.className = 'pb-main-header-profile';
  const $img = document.createElement("img");
  $img.setAttribute('src',"./image/기본프로필사진.jpg");
  $profile.append($img);

  const $nickname = document.createElement("div");
  $nickname.className = 'pb-main-header-nickname';
  $nickname.append('songjaemin178');

  const $comment = document.createElement("div");
  $comment.className = 'comment-modal-box-main-comment-text';
  $comment.append($modalCommentForm.children[1].children[0].value);

  $newCommentContainer.append($profile);
  $newCommentContainer.append($nickname);
  $newCommentContainer.append($comment);

  $commentBoxElement.append($newCommentContainer);
  $modalCommentForm.children[1].children[0].value = '';
  $modalCommentForm.children[1].children[0].focus();


})
