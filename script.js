const content=[
    {title:'HTML', text:'learn html and everthing will be good'},
    {title:'CSS', text:'learn CSS and everthing will be fine'},
    {title:'JavaScript', text:'you need to learn JS'},
]

const container=document.querySelector('ul') 

function toHTML(item){
    return`
    <li>
        <h3>${item.title}</h3>
        <div class='content'>${item.text}</div>
    </li>
    `
}

function renderContent(){
    // const html=content.map(item=>toHTML(item)).join('')
    const html=content.map(toHTML).join('')
    container.insertAdjacentHTML("afterbegin", html)
}

renderContent()
function removeActiveClasses(){
    container
    .querySelectorAll('li')
    .forEach((li)=>li.classList.remove('active'))
}

container.addEventListener('click', event=>{
    const target= event.target
    console.log('target is', target)

    const tag=event.target.tagName
    console.log('tag is', tag)

    const localName=event.target.localName
    console.log('tag is', localName)
    if(localName==='li' || event.target.closest('li')?.localName==='li'){
        removeActiveClasses()
        event.target.closest('li').classList.add('active')
    }
})