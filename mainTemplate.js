const db = require("./sql");

let html = {
  main: function (pbMain, feedData) {
    return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>instagram</title>
      <link rel="icon" type="image/x-icon" href="./image/favicon.png">
      <link rel="stylesheet" href="./main_css.css">
    </head>
    <body>
      <header>
        <div id = header-inner-box>
          <div id = "logo-box"><a href=""><h1 id="logo"><span class="blind">instagram</span></h1></a></div>
          <div id = "search-box"><input type="text" placeholder="검색"></div>
          <nav>
            <div><a href=""><span id="nav-1"></span></a></div>
            <div><a href=""><span id="nav-2"></span></a></div>
            <div><a href=""><span id="nav-3"></span></a></div>
            <div><a href=""><span id="nav-4"></span></a></div>
            <div><a href=""><span id="nav-5"></span></a></div>
            <div><a href=""><span id="nav-6"></span></a></div>
          </nav>
        </div>
      </header>
      <main>
        <section>  
          <article>
            <div id="story-bundle">
              <div class="story-container">
                <div><img src="./image/예시사진1.png"></div>
                <div>OYR</div>
              </div>
              <div class="story-container">
                <div><img src="./image/예시사진1.png"></div>
                <div>OYR</div>
              </div>
              <div class="story-container">
                <div><img src="./image/예시사진1.png"></div>
                <div>OYR</div>
              </div>
            </div>
            <div id="post-bundle">
              ${pbMain}
            </div>
          </article>
    
          <aside>
            <div id="aside-container">
              <div id="aside-me">
                <div id="aside-me-picture"><a href=""><img src="./image/기본프로필사진.jpg" alt="profile picture"></a></div>
                <div id="aside-me-nickname">songjaemin178</div>
                <div id="aside-me-transform"><a href="" class="blue-color-change">전환</a></div>
              </div>
              <div id="aside-recommend">
                <div id="aside-recommend-header">
                  <div id= "aside-recommend-header-1">회원님을 위한 추천</div>
                  <div id= "aside-recommend-header-2">모두 보기</div>
                </div>
                <div id="aside-recommend-main">
                  <div class="asider-recommend-main-list">
                    <div><img src="./image/기본프로필사진.jpg"></div>
                    <div class="recommend-main-secondbox">
                      <div class="recommend-list-font1">karina-aespa</div>
                      <div class="recommend-list-font2">IU-soloSinger님이 팔로우합니다</div>
                    </div>
                    <div class="recommend-list-font3"><a href="" class="blue-color-change">팔로우</a></div>
                  </div>
                  <div class="asider-recommend-main-list">
                    <div><img src="./image/기본프로필사진.jpg"></div>
                    <div class="recommend-main-secondbox">
                      <div class="recommend-list-font1">Yoo_Jae_Suk</div>
                      <div class="recommend-list-font2">haha-comedian님이 팔로우합니다</div>
                    </div>
                    <div class="recommend-list-font3"><a href="" class="blue-color-change">팔로우</a></div>
                  </div>
                  <div class="asider-recommend-main-list">
                    <div><img src="./image/기본프로필사진.jpg"></div>
                    <div class="recommend-main-secondbox">
                     <div class="recommend-list-font1">ImHappyHappy</div>
                      <div class="recommend-list-font2">Tony_Stark_Iron님이 팔로우합니다</div>
                    </div>
                    <div class="recommend-list-font3"><a href="" class="blue-color-change">팔로우</a></div>
                  </div>
                  <div class="asider-recommend-main-list">
                    <div><img src="./image/기본프로필사진.jpg"></div>
                    <div class="recommend-main-secondbox">
                      <div class="recommend-list-font1">Hard_Training_Web_Study</div>
                      <div class="recommend-list-font2">I_Can_Do님이 팔로우합니다</div>
                    </div>
                    <div class="recommend-list-font3"><a href="" class="blue-color-change">팔로우</a></div>
                  </div> 
                </div>
              </div>
              <div id="aside-footer">
                <ul>
                  <li> <a href="">소개</a></li>
                  <li> <a href="">도움말</a></li>
                  <li> <a href="">홍보 센터</a></li>
                  <li> <a href="">API</a></li>
                  <li> <a href="">채용 정보</a></li>
                  <li> <a href="">개인정보처리방침</a></li>
                  <li> <a href="">약관</a></li>
                  <li> <a href="">위치</a></li>
                  <li> <a href="">인기 계정</a></li>
                  <li> <a href="">해시태그</a></li>
                  <li> <a href="">언어</a></li>
                </ul>
                <div id="aside-footer-footer">© 2022 INSTAGRAM FROM META</div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    
      <div class="modal-container" id="modal-list-container">
        <div id="list-modal-box">
          <div id="list-modal-box-inner-first-box"><button class="font-red bold-word">신고</button></div>
          <div><button class="font-red bold-word">팔로우 취소</button></div>
          <div><button>게시물로 이동</button></div>
          <div><button>퍼가기</button></div>
          <div id="list-modal-box-inner-final-box"><button>취소</button></div>
        </div>
      </div>
    
      <div class="modal-container" id="modal-comment-container">
        <div id="comment-modal-box">
          <div id="comment-modal-box-left"></div>
          <div id="comment-modal-box-right">
            <div class="comment-modal-box-header">
              <div class="pb-main-header-profile">
                  <img src="./image/기본프로필사진.jpg"></div>
              <div class="pb-main-header-nickname">Winter</div>
              <div class="pb-main-header-list"><button><img src="./image/more.png"></button></div>
            </div>
    
            <div class="comment-modal-box-main">
              <div class="comment-modal-box-main-comment-bundle">
                <div class="comment-modal-box-main-comment">
                  <div class="pb-main-header-profile"><img src="./image/기본프로필사진.jpg"></div>
                  <div class="pb-main-header-nickname">Winter</div>
                  <div class="comment-modal-box-main-comment-text" id="cmbmct-postContent"> 댓글내용 댓글내용 </div>
                </div>
              </div>
            </div>
    
            <div class="pb-main-icons">
              <div class="pb-main-icons-inner1">
                <button class="heart-button"><img src="./image/heart.png" class="heart-image"></button>
                <button id="comment-button"><img src="./image/comment.png"></button>
                <button><img src="./image/direct.png"></button>
              </div>
              <div class="pb-main-icons-inner2"><button><img src="./image/bookmark.png"></button></div>
            </div>
    
            <div class="pb-main-whoislove"><img src="./image/기본프로필사진.jpg"> <div class="pb-main-whoislove-explain"><span class="bold-word">Kim_Tae_Ri</span>님 <span class="bold-word">외 <span class="love-number">3</span>명</span>이 좋아합니다.</div></div>
    
            <div class="pb-main-time">16시간 전</div>
            <form class="pb-main-writecomment modal-comment-form">
              <div class="pb-main-write-comment-emo"></div>
              <div class="pb-main-write-comment-core"><input placeholder="댓글 달기..."></div>
              <div class="pb-main-write-comment-button"><button>게시</button></div>
            </form>
          </div>
        </div>
        <div class="cancle-button"></div>
      </div>
      <script src="./main_js.js">
      </script>
    </body>
    </html>`;
  },
  pbMain: function(feedData) {
      let body = ``;
      for(let i = 0 ; i < 4 ; i++) {
        body += `
        <div class="pb-main">
          <span class="blind" id="pb-main-flag"></span>
          <div class="pb-main-header">
            <div class="pb-main-header-profile"><img src="./image/기본프로필사진.jpg"></div>
            <div class="pb-main-header-nickname">Winter</div>
            <div class="pb-main-header-list"><button><img src="./image/more.png"></button></div>
          </div>
          <div class="pb-main-img"><img src="${feedData[i].img_path}"></div>
          <div class="pb-main-icons">
            <div class="pb-main-icons-inner1">
              <button class="heart-button"><img src="./image/heart.png" class="heart-image"></button>
              <button class="comment-button"><img src="./image/comment.png"></button>
              <button><img src="./image/direct.png"></button>
            </div>
            <div class="pb-main-icons-inner2"><button><img src="./image/bookmark.png"></button></div>
          </div>
          <div class="pb-main-whoislove"><img src="./image/기본프로필사진.jpg"> <div class="pb-main-whoislove-explain"  class="bold-word">Kim_Tae_Ri</span>님  <span class="bold-word">외 <span class="love-number">${feedData[i].like}</span>명</span>이 좋아합니다.</div></div>
          <div class="pb-main-viewcomment">댓글 1개 보기</div>
          <div class="pb-main-time">16시간 전</div>
          <form class="pb-main-writecomment">
            <div class="pb-main-write-comment-emo"></div>
            <div class="pb-main-write-comment-core"><input placeholder="댓글 달기..."></div>
            <div class="pb-main-write-comment-button"><button>게시</button></div>
          </form>
        </div>
      `
    }
    return body;
  }
}



module.exports = html;