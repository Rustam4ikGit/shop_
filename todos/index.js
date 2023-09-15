let form = document.forms.add
let time = new Date()
let wrapper = document.querySelector('.wrapper')
let todos = []

form.onsubmit = event => {
    event.preventDefault()


    let task = {
        id: Math.random(),
        isDone: false,
        time: time.getHours() + ':' + time.getMinutes()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        task[key] = value
    })

    todos.push(task)
    reload(todos)
}

function reload(arr) {
    wrapper.innerHTML = ""


    for (let item of arr) {
        let div = document.createElement('div')
        let topDiv = document.createElement('div')
        let h4 = document.createElement('h4')
        let span = document.createElement('span')
        let img = document.createElement('img')


        span.style.opacity = '.5'
        div.classList.add('item')
        img.src = "./assets/img/x.svg"
        img.style.cursor = 'pointer'
        topDiv.setAttribute('id', item.id)
        div.setAttribute('id', item.id)
        h4.innerHTML = item.task
        span.innerHTML = item.time
        h4.classList.add('done')


        if (item.isDone == true) {
            h4.classList.add('done')
            span.classList.add('done')
        } else {
            h4.classList.remove('done')
            span.classList.remove('done')
        }


        topDiv.append(h4, img)
        div.append(topDiv, span)
        wrapper.append(div)

        let Delete_imgs = document.querySelectorAll('img')
        let items = document.querySelectorAll('.item')


        Delete_imgs.forEach(elem => {
            elem.onclick = (event) => {

                let cont_delete = event.target.parentNode.id

                todos = todos.filter(item => item.id !== +cont_delete)
                reload(todos)
            }
        });

        items.forEach(element => {
            element.onclick = () => {
                let id = +element.id

                let find = todos.find(item => item.id === id)
                find.isDone = !find.isDone
                reload(todos)
            }
        });
        items.forEach(change => {
            change.ondblclick = () => {
               let yes = prompt('Пожалуйста измените задание?')
               item.task = yes
            }
        })

    }
}

