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