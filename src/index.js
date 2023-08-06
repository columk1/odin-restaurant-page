import './styles.css'

function component() {
    const content = document.createElement('div')
    content.setAttribute('id', 'content')

    const btn = document.createElement('button')
  
    btn.innerHTML = 'Click me and check the console!'
    btn.onclick = () => console.log('You clicked me')
  
    content.appendChild(btn)
  
    return content
  }
  
  document.body.appendChild(component())