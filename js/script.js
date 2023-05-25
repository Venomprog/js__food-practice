window.addEventListener('DOMContentLoaded', () => {
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

  // const btn = document.querySelector('.calculating__choose-item');

  // let timerID,
  //     i = 0;

  // btn.addEventListener('click', () => {
  //   timerID = setInterval(logger, 500);
  // });

  // function logger () {
  //   if (i === 3){
  //     clearInterval(timerID);
  //   }

  //   console.log('text');
  //   i++;
  // }

});