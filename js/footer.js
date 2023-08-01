const footer = document.querySelector(`.footer`)
const headerForAd = document.querySelector(`.header`)

const appVersion = '0.504'

function init() {
  footer.innerHTML = ` 
 
  
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
