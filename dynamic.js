let fld=document.querySelector('.form-control')
let btn=document.querySelector('.btn')
let arr=[];
let entry=document.querySelector('.entry')
 btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(fld.value===''){
        alert('no data entered')
    }
arr.push(fld.value)
fld.value=''
let head=document.createElement('h6')
arr.forEach((e)=>{
    entry.appendChild(head)
    head.innerHTML=e;
})

 })

