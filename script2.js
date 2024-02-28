let colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','D','F'];
const btn=document.querySelector('.btn');
const color=document.querySelector('.color')

btn.addEventListener('click',()=>{
    let formColor='#';
    for(let i=0;i<6;i++)
    {
        formColor+=colors[rNumber()];
    }
    console.log(formColor);
    document.body.style.backgroundColor=formColor;
    color.textContent=formColor;
})

const rNumber=()=>{
    let rNum=Math.floor(Math.random()*colors.length)
    return rNum;
}