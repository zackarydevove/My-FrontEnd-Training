let button = document.getElementsByClassName('button')[0];
let display = document.getElementsByClassName('output')[0];
let quote = 
    [
        "The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela",
        "The way to get started is to quit talking and begin doing. -Walt Disney",
        "If life were predictable it would cease to be life, and be without flavor. -Eleanor Roosevelt",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. -James Cameron",
        "Life is what happens when you're busy making other plans. -John Lennon"
    ];


button.addEventListener('click', function() {
    display.innerHTML = quote[Math.floor(Math.random() * quote.length)];
})