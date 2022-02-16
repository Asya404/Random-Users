let userData = [];

fetch('https://jsonplaceholder.typicode.com/users')
  .then(function(response){
  return response.json();
})
  .then(function(data) {
  userData = data;
  console.log(data);
  data.forEach(function(user) {
    const item = document.createElement('a');
    item.innerHTML = 
      `<div class="card__photo"><img src="https://picsum.photos/145/145" alt=""></div>
<p class="card__name">${user.name}</p>
<p class="card__email">${user.email}</p>`;
    item.classList.add('card');
    item.id = user.id;
    item.setAttribute('href', `./userPage/index.html?id=${user.id}`);
    item.dataset.name = user.name;
    document.querySelector('.cards').append(item);
  })

  // Filter cards by name
  let card = document.querySelectorAll('.card');
  document.getElementById('search').addEventListener('input', (e) => {
    for(let i=0; i<card.length; i++) {
      card[i].classList.add('visually-hidden');
      if(card[i].dataset.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        card[i].classList.remove('visually-hidden');
      }
    }
    
    document.querySelector('.cards__empty').classList.add('visually-hidden');
    if (document.querySelectorAll('.card').length == document.querySelectorAll('.card.visually-hidden').length) {
      document.querySelector('.cards__empty').classList.remove('visually-hidden');
    }
  });
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


// user page


















