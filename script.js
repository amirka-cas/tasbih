let Count=0
const display=document.getElementById("display")
const count=document.getElementById("count")
const reset=document.getElementById("reset")
const led=document.getElementById("led")
const container=document.getElementById("container")
count.addEventListener("click", function(){
    Count++;
    display.textContent=Count
})
reset.addEventListener("click", function(){
    Count=0;
    display.textContent=Count
})
led.addEventListener("click", function(){
    container.classList.toggle("led-on")
})