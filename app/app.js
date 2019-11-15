
// 加载css/less
// require('../css/app.css')
require('../less/app.less')

window.onload = function () {

    let person = ["kevin", "mark", "jone"]

    let ul = document.createElement('ul')
    person.map(v => {

        let li = document.createElement('li')
        li.textContent = v
        ul.appendChild(li)
    })

    document.body.appendChild(ul)
}