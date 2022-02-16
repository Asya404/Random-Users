
let userData = [];
let id, card;

// get id from link
const getParameterByName = (name) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
  var results = regex.exec(window.location.href);
  if (!results || !results[2]) { return null; }
  return decodeURIComponent(results[2].replace(/\+/g, ' ')); }
const userID = getParameterByName('id');


// get info for main card if array has user.id == userID from link
fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response){
  return response.json();
})
  .then(function(data) {
  userData = data;
  console.log(data);
  data.forEach(function(user) {
    if(user.id == userID) {
      document.querySelector('.card').id = user.id;
      document.querySelector('.card').dataset.name = user.name;
      document.querySelector('.card__photo').innerHTML = `<img src="https://placeimg.com/245/245" alt="">`
      document.querySelector('.card__name').innerHTML =  `${user.name}`
      document.querySelector('.card__email').innerHTML = `${user.email}`
      document.querySelector('.card__phone').innerHTML = `${user.phone}`
      document.querySelector('.card__street').innerHTML =  `${user.address.street}`
      document.querySelector('.card__suite').innerHTML =  `${user.address.suite}`
      document.querySelector('.card__city').innerHTML = `${user.address.city}`
      document.querySelector('.card__zipcode').innerHTML = `${user.address.zipcode}`
      document.querySelector('.card__website').innerHTML = `${user.website}`
      document.querySelector('.card__company').innerHTML = `${user.company.name}`
      ;
    }
  })

  // generate random number 1-10 with no repeat
  const relatedItemsNum = 3;
  let ranEl = [];
  
  function getRandomEl() {
    return Math.floor(Math.random() * 10) + 1;
  }
  
  for(let i=0; i<relatedItemsNum; i++) {
    let result = getRandomEl();
    if(result == userID || ranEl.includes(result)) {
      result = getRandomEl();
      ranEl.push(result); 
    } else {
      ranEl.push(result); 
    }
  }

// create cards with id = ranEl[i]
  for(let i=0; i<relatedItemsNum; i++) {
    data.forEach(function(user) {
      if(user.id == ranEl[i]) {
        const item = document.createElement('a');
        item.innerHTML = 
          `<div class="card__photo"><img src="https://placeimg.com/145/145" alt=""></div>
          <p class="card__name">${user.name}</p>
          <p class="card__email">${user.email}</p>
          `;
        item.classList.add('card');
        item.id = user.id;
        item.setAttribute('href', `http://growinternational-5265844.hs-sites.com/user-page/?id=${user.id}`);
        item.dataset.name = user.name;
        document.querySelector('.cards').append(item);
      }
    })
  }
});

// Counter (session)
let counter = document.querySelector('.website-counter');
let visitCount = sessionStorage.getItem('page_view');

if (visitCount) {
  visitCount = Number(visitCount) + 1;
  sessionStorage.setItem('page_view', visitCount);
} else {
  visitCount = 1;
  sessionStorage.setItem('page_view', 1);
}
counter.innerHTML = visitCount;

// Counter (total)
let counterTotal = document.querySelector('.website-counter--total');
let visitCountTotal = localStorage.getItem('page_view');

if (visitCountTotal) {
  visitCountTotal = Number(visitCountTotal) + 1;
  localStorage.setItem('page_view', visitCountTotal);
} else {
  visitCountTotal = 1;
  localStorage.setItem('page_view', 1);
}
counterTotal.innerHTML = visitCountTotal;






