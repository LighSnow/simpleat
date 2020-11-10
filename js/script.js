const customSelect = () => {
  const elements = document.querySelectorAll('.select');
  elements.forEach(el => {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: '',
    });
  });
};

customSelect();

const labels = document.querySelectorAll('.check label');
const button = document.querySelector('.main__add-btn .btn');
labels.forEach(el => {
  let oneTime = document.querySelector('.one-time');
  el.addEventListener('click', (e) => {
    if (oneTime.contains(e.target)) {
      button.innerHTML = 'Buy Now';
      document.querySelector('.tooltip').style.display = "none";
    } else {
      button.innerHTML = 'Add to cart';
     
    }
  });
});





const tabsTriggers = document.querySelectorAll('.tabs__trigger');
const tabsContentItem = document.querySelectorAll('.tabs__content-item');

tabsTriggers.forEach((item) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    const id = e.target.getAttribute('href').replace('#', '');

    tabsTriggers.forEach((child) => {
      child.classList.remove('active');
    });
    tabsContentItem.forEach((child) => {
      child.classList.remove('active');
    });

    item.classList.add('active');

    document.getElementById(id).classList.add('active');
  });
});



const cookies = document.querySelector('.cookies');
const cookiesCloseBtn = document.querySelector('.btn-close');


cookiesCloseBtn.addEventListener('click', () => {
  cookies.classList.remove('active');
});


setTimeout(() => {
  cookies.classList.add('active');
}, 2000);