const images=[
    "store/poster.png",
    "store/discount.png",
    "store/delivery.png",
    "store/store1.png"
];
let index=0;
function slider(char)
{
if(char=='right')
{
index+=1; 
if (index==4)
    index=0
}
else if(char='left')
    if(index>0)
        index-=1
    else
        index=0
let poster=document.getElementById("pos");
poster.src=images[index];
return index
}
let x=0
let post=document.getElementById("pos");
setInterval( ()=>{
    index++;
    if(index==images.length){
        index=0;
    }
    post.src=images[index];
},4000);