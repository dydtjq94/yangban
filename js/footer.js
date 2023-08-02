const footer = document.querySelector(`.footer`)
const headerForAd = document.querySelector(`.header`)

const appVersion = '0.504'

function init() {
  footer.innerHTML = ` 
  <div>
  <a href="/blog">AI 블로그</a>
  </div>
  <div>
  <a href="/blog/post/5g.html">5g</a>
  <a href="/blog/post/10.html">10</a>
  <a href="/blog/post/11.html">11</a>
  <a href="/blog/post/12.html">12</a>
  <a href="/blog/post/13.html">13</a>
  <a href="/blog/post/14.html">14</a>
  <a href="/blog/post/15.html">15</a>
  <a href="/blog/post/16.html">16</a>
  <a href="/blog/post/17.html">17</a>
  <a href="/blog/post/18.html">18</a>
  </div>
  <div>
  <a href="/blog/post/alter.html">alter</a>
  <a href="/blog/post/code.html">code</a>
  <a href="/blog/post/company.html">company</a>
  <a href="/blog/post/fb.html">fb</a>
  <a href="/blog/post/fear.html">fear</a>
  <a href="/blog/post/know.html">know</a>
  <a href="/blog/post/mind.html">mind</a>
  <a href="/blog/post/tech.html">tech</a>
  </div>
 
  
  <span class="footer_text_wrap">
    ⓒ 2023. NMAX, All Rights Reserved. 
  </span>`

  // if (bottomAd) {
  //   if (headerForAd.id === 'face') {
  //     bottomAd.innerHTML = ` <div class="bottom_ad_top">무료 관상은 어떠셨나요?</div>
  // <div class="bottom_ad_bottom">
  //   <div class="bottom_ad_ment">
  //     복채로 응원해주세요 (5,000원)
  //   </div>
  //   <div class="bottom_ad_btn">
  //     <i class="fas fa-comment"></i>
  //     응원하기
  //   </div>
  // </div>`
  //   } else if (headerForAd.id === 'fortune') {
  //     bottomAd.innerHTML = ` <div class="bottom_ad_top">운세 결과가 마음에 드시나요?</div>
  //   <div class="bottom_ad_bottom">
  //     <div class="bottom_ad_ment">
  //       복채로 응원해주세요 (5,000원)
  //     </div>
  //     <div class="bottom_ad_btn">
  //       <i class="fas fa-comment"></i>
  //       응원하기
  //     </div>
  //   </div>`
  //   } else {
  //     bottomAd.innerHTML = ` <div class="bottom_ad_top">연대생이 만드는 AI양반 기대해주세요!</div>
  //   <div class="bottom_ad_bottom">
  //     <div class="bottom_ad_ment">
  //       커피 한 잔, 응원해주세요 (5,000원)
  //     </div>
  //     <div class="bottom_ad_btn">
  //       <i class="fas fa-comment"></i>
  //       응원하기
  //     </div>
  //   </div>`
  //   }
  // }
  // const bottomBtn = document.querySelector(`.bottom_ad_btn`)
  // if (bottomBtn) {
  //   bottomBtn.addEventListener('click', () => {
  //     location.href = 'https://qr.kakaopay.com/Ej9MgSCp09c405780'
  //   })
  // }
}
init()
