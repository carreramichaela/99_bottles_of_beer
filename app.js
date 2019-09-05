const bottles = document.querySelectorAll('.bottle')

const counters = document.querySelectorAll('.count')

function drink (){
    if(confirm("Take one down, pass it around?")){
        this.classList.add('drank')
        counters.forEach(counter => counter.textContent--)
    }

}

bottles.forEach(bottle => bottle.addEventListener('click', drink))


