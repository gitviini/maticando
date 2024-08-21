const container = document.querySelector('.container')

let list = [
    [2,3,4],
    [3,4,5],
    [5,6,7]
]

gerenate(list)

function gerenate(list_all = []){
    set_container(container,list.length)
    for(list_line of list_all){
        list_line.forEach(item => {
            create_item(container,item)
        });
    }
}

function set_container(container=Element,list_length = 0){
    let template = ''
    for(let n = 0; n < list_length; n++){
        template += `1fr `
    }
    container.style.gridTemplateColumns = container.style.gridTemplateRows = template
    console.log(template)
}

function create_item(container=Element,info=Element){
    let new_item = document.createElement('div')
    new_item.setAttribute('class','item')
    new_item.innerHTML = info
    container.appendChild(new_item)
}