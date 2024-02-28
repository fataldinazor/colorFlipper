let colors=['red', 'green', 'rgba(133,122,200)','f15025']

const btn=document.querySelector('.btn');
const color=document.querySelector('.color');

btn.addEventListener('click',()=>{
    document.body.style.backgroundColor=colors[rNumber()];
    color.textContent=colors[rNumber()]
})

const rNumber=()=>{
    let rNum=Math.floor(Math.random()*colors.length)
    return rNum;
}