// ===== creating a tabbed component   =====

const p_btns = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const p_img = document.querySelectorAll(".img-overlay")

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target;
    
    p_btn.forEach((btn) => btn.classList.remove("p-btn-active"));
    p_btn_clicked.classList.add("p-btn-active");
    
    const btn_num = p_btn_clicked.dataset.btnNum;
    
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`)

    p_img.forEach((ele) => ele.classList.add("p-img-not-active"))
    img_active.forEach((ele) => ele.classList.remove("p-img-not-active"))
})

// ===== swiper component   =====

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // ======= scroll to top button ================

  const headerSection = document.querySelector('.header');

  const footerEle = document.querySelector(".section-footer")
  const scrollToTopBtn = document.createElement("div");
  scrollToTopBtn.classList.add("scrollTopBtn");
  
  scrollToTopBtn.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-Top" ></ion-icon>`;
  footerEle.after(scrollToTopBtn);

  const goTopHandler = () => {
    headerSection.scrollIntoView({behavior : 'smooth'});
  }

  scrollToTopBtn.addEventListener('click', goTopHandler);

  // ========== hireMe button scroll ==============

  const hireMeBtn = document.querySelector('.hireme-btn');
  const contactMeBtn = document.querySelector('.contact-to-me');
  const contactUsDiv = document.querySelector('.section-contact');

  const gotoContactDiv = () => {
    contactUsDiv.scrollIntoView({behavior: 'smooth', block: 'end'})
  }

  hireMeBtn.addEventListener('click', gotoContactDiv);
  contactMeBtn.addEventListener('click', gotoContactDiv);

  // ========== Animate work counter numbers =============

  const counterNum = document.querySelectorAll('.counter-number')
  const speed = 200;

  counterNum.forEach((num) => {
    const updateNum = () => {
      const targetNum = parseInt(num.dataset.number);
      const initialNum = parseInt(num.innerText);
      const increamentNum = Math.floor(targetNum/speed)+1;
      console.log(increamentNum)
      if(initialNum < targetNum){
        num.innerText = initialNum + increamentNum;
        setTimeout(() => {
          updateNum();
        }, 10);
      }
    }
    updateNum();
  });