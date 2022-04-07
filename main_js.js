$pbMainHeaderList = document.querySelectorAll(".pb-main-header-list");
$listModalBoxInnerFinalBoxButton = document.querySelector('#list-modal-box-inner-final-box button');
$modalContainer1 = document.querySelector('.modal-container#modal-list-container');
$modalContainer2 = document.querySelector('.modal-container#modal-comment-container');
$heartButton = document.querySelectorAll('.heart-button');
$commentButton = document.querySelectorAll('.comment-button');
$heartImage = document.querySelectorAll('.heart-image');
$cancleButton = document.querySelector('.cancle-button');        // dom 객체 받아오기
$modalCommentForm = document.querySelector('.modal-comment-form');
$loveNumber = document.querySelectorAll('.love-number');
$commentModalBoxLeft = document.querySelector('#comment-modal-box-left');
$cmbmctPostContent = document.querySelector('#cmbmct-postContent');
$bigModalBoxLike = document.querySelector('#modal-comment-container .love-number');
$cmbmCommentBundle = document.querySelector('.comment-modal-box-main-comment-bundle');
$pbMainFlag = document.querySelector('#pb-main-flag');

for(let i = 0 ; i < $pbMainHeaderList.length ; i++) {             
  $pbMainHeaderList[i].addEventListener('click', () => {                       // 클릭하면 모달창 나오게
    $modalContainer1.style.display = "flex";
  });
}

for(let i = 0 ; i < $commentButton.length ; i++) {
  $commentButton[i].addEventListener('click', () => {                           // 댓글 모달창 구현!
    fetch('/main/commentClick', {                                               // 댓글 모달창에 필요한 코드 서버에서 가져오기
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        feed_id: i,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        $commentModalBoxLeft.style.backgroundImage = `url(${data.img_path})`;
        $cmbmctPostContent.textContent = `${data.postContent}`;
        $bigModalBoxLike.textContent = `${data.like}`
        for(let i = 0 ; i < data.comments.length ; i++) {
          commentReplyCommon(data.comments[i],data.commentsId[i]);
        }
        $pbMainFlag.textContent = i;

        $commentRemove= document.querySelectorAll('.comment-remove');

        for(let k = 0 ; k < $commentRemove.length; k++) {
          let id = $commentRemove[k].parentNode.children[4].textContent
          $commentRemove[k].addEventListener('click', () => {                // 댓글 제거!
            fetch('/main/remove', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: id,
              }),
            })
            $commentRemove[k].parentNode.remove();
          })
        }
      })
                
    $modalContainer2.style.display = "flex";


  });
}

$listModalBoxInnerFinalBoxButton.addEventListener('click', () => {                // 취소 클릭하면 모달창 꺼지게
  $modalContainer1.style.display = "none";
})

$cancleButton.addEventListener('click', () => {                // 취소 클릭하면 모달창 꺼지게
  $modalContainer2.style.display = "none";
  while($cmbmCommentBundle.childNodes[2]) {
    $cmbmCommentBundle.removeChild($cmbmCommentBundle.childNodes[2]);
  }
})

$modalContainer1.addEventListener('click', (event) => {                      // 모달창 바깥쪽 클릭하면 꺼지게 구현!!
  if(event.target == event.currentTarget)
    $modalContainer1.style.display = "none";
});

let image_flag = 0;  
$heartButton[1].addEventListener('click', () => {                            // 하트 클릭 색깔변하기 구현!!
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
  let commentId;
  e.preventDefault();
  if($modalCommentForm.children[1].children[0].value == '') {
    return;
  }

  fetch('/main/inputClick', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      feed_id: $pbMainFlag.textContent,
      value: $modalCommentForm.children[1].children[0].value,
    }),
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    commentId = data.id;
    console.log(commentId);
    commentReplyCommon($modalCommentForm.children[1].children[0].value,commentId);
    $modalCommentForm.children[1].children[0].value = '';
    $modalCommentForm.children[1].children[0].focus();
    $commentRemove= document.querySelectorAll('.comment-remove');

    for(let k = 0 ; k < $commentRemove.length; k++) {
      let id = $commentRemove[k].parentNode.children[4].textContent
      $commentRemove[k].addEventListener('click', () => {                // 댓글 제거!
        fetch('/main/remove', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: id,
          }),
        })
        $commentRemove[k].parentNode.remove();
      })
    }
  })



})

function commentReplyCommon(append,commentId) {
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
  $comment.append(append);

  const $remove = document.createElement("div");
  $remove.className = 'comment-remove';
  $remove.append('삭제');

  const $commentId = document.createElement("span");
  $commentId.className = 'comment-id';
  $commentId.append(commentId);

  $newCommentContainer.append($profile);
  $newCommentContainer.append($nickname);
  $newCommentContainer.append($comment);
  $newCommentContainer.append($remove);
  $newCommentContainer.append($commentId);

  $commentBoxElement.append($newCommentContainer);
  
}

