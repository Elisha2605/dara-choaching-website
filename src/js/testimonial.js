const testimonialCardContainer = document.querySelector('[data-card-testimonial-container]');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const data = [
    {"title": "Jean Batist", "body": "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable."},
    {"title": "Luis Suarez", "body": "I tried to electrocute it but got sweetmeat all over it.My neighbor Lori has one of these. She works as a taxidermist and she says it looks whopping. This Coca-Cola works outstandingly well."},
    {"title": "Leo Messi", "body": "This Coca-Cola works outstandingly well. It beautifully improves my basketball by a lot.heard about this on brazilian radio, decided to give it a try. I tried to nab it but got salad all over it."},
    {"title": "Cristiano Ronaldo", "body": "This Coca-Cola works outstandingly well. It beautifully improves my basketball by a lot.heard about this on brazilian radio, decided to give it a try. I tried to nab it but got salad all over it."},
    {"title": "Laura Petersen", "body": "This Coca-Cola works outstandingly well. It beautifully improves my basketball by a lot.heard about this on brazilian radio, decided to give it a try. I tried to nab it but got salad all over it."},
]

const maxItem = 1;
let index = 1;

let testimonials = [];

testimonials = data.slice(0).reverse().map(testimonial => {
    let content = `
                <div class="card">
                    <h1 class="testimonial__customer-name">${testimonial.title}</h1>
                    <p class="testimonial__body">${testimonial.body}</p>
                </div>
    `;
    testimonialCardContainer.insertAdjacentHTML('afterbegin', content)

})

const pagination = Math.ceil(testimonialCardContainer.children.length / maxItem)

console.log(pagination);


prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    index--;
    console.log(index);
    checkPrevAndNextButton();
    showTestimonals();
})


nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    index++;
    console.log(index);
    checkPrevAndNextButton();
    showTestimonals();
})

function checkPrevAndNextButton() {
    if (index == pagination) {
        nextBtn.classList.add('disabled');
    } else {
        nextBtn.classList.remove('disabled');
    }
    if (index == 1) {
        prevBtn.classList.add('disabled');
    } else {
        prevBtn.classList.remove('disabled')
    }
}

function showTestimonals() {
    for (let i = 0; i < testimonialCardContainer.children.length; i++) {
        testimonialCardContainer.children[i].classList.remove('show');
        testimonialCardContainer.children[i].classList.add('hide');

        if (i >= index * maxItem - maxItem && i < index * maxItem) {
            testimonialCardContainer.children[i].classList.remove('hide');
            testimonialCardContainer.children[i].classList.add('show');
        }
    }
}

showTestimonals();
checkPrevAndNextButton();