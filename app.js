const btn = document.querySelector('button')
let usrInp = document.querySelector('#userInp')
let uls = document.querySelector('ul');
// console.log(li)

btn.addEventListener('click', function (event) {
    let item = document.createElement('li')
    item.innerText = usrInp.value
    let delebtn = document.createElement('button')
    delebtn.innerText = 'delete'
    delebtn.classList.add('delete')
    item.appendChild(delebtn)
    uls.appendChild(item)
    usrInp.value = ''

    //    console.log(item)



})
uls.addEventListener('dblclick',function(event){
    console.log(event.target.nodeName)
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement
        listItem.remove()
        console.log('deleted')
    }
})

// let delBtns=document.querySelectorAll('button')

// for (let dltBtn of delBtns) {
//     dltBtn.addEventListener('click', function () {
//         // console.log(this.parentElement)
//         let par=this.parentElement
//         par.remove()
//     })
// }
