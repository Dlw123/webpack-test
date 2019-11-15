
// 加载css/less
// require('../css/app.css')
require('../less/app.less')

let img=require('../images/dog.jpg')
console.log(img)

window.onload = function () {

    let person = ["kevin", "mark", "jone"]

    let ul = document.createElement('ul')
    person.map(v => {

        let li = document.createElement('li')
        li.textContent = v
        ul.appendChild(li)
    })

    document.body.appendChild(ul)

    // 创建图片对象
    let image=new Image()
    image.src=img

    // if(/^data:image\/[A-Za-z]+base64/.test(img)){
    // //  该图片就是based4

    // image.src=img
    // }else{
    //     image.src='./build/'+img

    // }
    document.getElementById('icon').appendChild(image)
}