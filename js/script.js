window.addEventListener('DOMContentLoaded', () => {

  //TABS

  const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

  function hideTabContent(){
    tabsContent.forEach(item =>{
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });

    tabs.forEach(item =>{
      item.classList.remove('tabheader__item_active');
    });
  }

  function showTabContent(i = 0){
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');

    tabs[i].classList.add('tabheader__item_active');
  }

  hideTabContent();
  showTabContent(0);

  tabsParent.addEventListener('click', (event) => {
    const target = event.target;

    if (target && target.classList.contains('tabheader__item')){
      tabs.forEach((item, i) => {
        if (target == item){
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });

  function myAnimation(){
    const elem = document.querySelector('.element');

    let pos = 0;

    const id = setInterval(frame, 10);

    function frame () {
      if (pos === 300){
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
        elem.style.left = pos + "px";
      }
    }
  }

  //TIMER

  const deadline = '2023-07-25';

  function getTimeRemaining(endtime){
    let days, hours, minutes, seconds;
    const t = Date.parse(endtime) - Date.parse(new Date());
      if (t <= 0){
        days = 0;
        hours = 0;
        minutes = 0;
        seconds = 0;
      } else {

        days = Math.floor(t / (1000 * 60 * 60 * 24));
        hours = Math.floor((t / (1000 * 60 * 60) % 24));
        minutes = Math.floor((t / 1000 / 60 % 60));
        seconds = Math.floor((t / 1000) % 60);
      }

    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10){
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime){
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);


      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock('.timer', deadline);



  //MODAL 

  const modalBtns = document.querySelectorAll('[data-modal]')
  const modal = document.querySelector('.modal')
  const modalClose = document.querySelector('[data-close]')

  function openModal() {
    modal.classList.toggle('show')
    document.body.style.overflow = 'hidden';

    clearInterval(modalTimerId);
  }


  function closeModal(){
    modal.classList.toggle('show')
    document.body.style.overflow = ''
  }

  modalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      openModal() 
    })
  })

  modalClose.addEventListener('click', closeModal);
  

  modal.addEventListener('click', (e) => {
    if (e.target === modal){
      closeModal()
    }
  });


  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('show')){
      closeModal()
    }
  });

  const modalTimerId = setTimeout(openModal, 5000)

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight -1){
      openModal(); // Если скролл дошел до низа страницы то открыть модалку
      
      window.removeEventListener('scroll', showModalByScroll)
    }
  }

  window.addEventListener('scroll', showModalByScroll) //При скролле выполняет функцию модалки

});