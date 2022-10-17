const card1 = document.querySelector('.card-1');
const cardhidden = document.body.children[1];
const ratCount = document.querySelector('.selected span')
const btnSubmit = document.querySelector('.btn-submit');
const rating = document.querySelectorAll('.rating-btn');

const star = document.querySelector('.star');

btnSubmit.addEventListener('click', function () {
   card1.classList.add('hidden');
    cardhidden.classList.remove('hidden');
});

rating.forEach(function(rating){
    rating.addEventListener('click', function(e){
        ratCount.innerHTML = rating.innerHTML;
    });
});

// light-mode
    star.addEventListener('click', function(){
        card1.classList.toggle('light');
        cardhidden.classList.toggle('light');
        document.body.classList.toggle('body-light');
        card1.children[1].children[1].classList.toggle('txt-lg');
        cardhidden.children[2].children[1].classList.toggle('txt-lg');

    });


