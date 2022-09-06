const changepage = ()=>{
    location.href='./main.html';
}

const change = ()=>{
    setTimeout(changepage,3000)
}
window.onload = change();