// NAVBAR

let bar = document.getElementById('bar');
let close = document.getElementById('close');
let navbar = document.getElementById('navbar');

bar.addEventListener('click' , function() {
    navbar.style.right = 0 + 'px';
})

close.addEventListener('click' , function() {
    navbar.style.right = -300 + 'px';
})

// BTN-SCROLL

let btnScroll = document.getElementById('btn-scroll');

window.onscroll = function() {
    if (scrollY >= 400) {
        btnScroll.style.display = 'block';
    }
    else {
        btnScroll.style.display = 'none'
    }
}

btnScroll.addEventListener('click' , ()=> {
    scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
});



// BUY PRODUCTS

// let test = document.getElementById('test');
// let imgTest = document.getElementById('img-test');
// let imgBasic = document.getElementById('basic');

// test.addEventListener('click' , ()=> {    
//     location.pathname = '../Pages/sproduct.html';
// })
