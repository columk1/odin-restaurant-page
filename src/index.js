import './styles.css'
import renderHome from './home.js'
import renderMenu from './menu.js'
import renderContact from './contact.js'

function renderSite() {
  const content = document.createElement('div')
  content.setAttribute('id', 'content')

  content.appendChild(renderHeader())
  content.appendChild(renderMain())
  content.appendChild(renderFooter())

  document.body.appendChild(content)
  toggleActive(document.getElementsByClassName('nav-link')[0])
  loadMainContent(renderHome())
}

function renderHeader() {
  const header = document.createElement('header')
  header.setAttribute('id', 'header')

  const brandName = document.createElement('h1')
  brandName.classList.add('brand-name')
  brandName.textContent = 'Hikaru Ramen'

  header.appendChild(brandName)
  header.appendChild(renderNav())

  return header
}

function renderNav() {
  const nav = document.createElement('nav')
  nav.setAttribute('id', 'nav')

  const navLinks = document.createElement('ul')
  navLinks.classList.add('nav-links')

  const home = document.createElement('li')
  home.classList.add('nav-link')
  const homeLink = document.createElement('a')
  homeLink.textContent = 'Home'
  home.appendChild(homeLink)

  home.addEventListener('click', () => {
    toggleActive(home)
    loadMainContent(renderHome())
  })

  navLinks.appendChild(home)

  const menu = document.createElement('li')
  menu.classList.add('nav-link')
  const menuLink = document.createElement('a')
  menuLink.textContent = 'Menu'
  menu.appendChild(menuLink)

  menu.addEventListener('click', () => {
    toggleActive(menu)
    loadMainContent(renderMenu())
  })

  navLinks.appendChild(menu)

  const contact = document.createElement('li')
  contact.classList.add('nav-link')
  const contactLink = document.createElement('a')
  contactLink.textContent = 'Contact'
  contact.appendChild(contactLink)

  contact.addEventListener('click', () => {
    toggleActive(contact)
    loadMainContent(renderContact())
  })

  navLinks.appendChild(contact)

  nav.appendChild(navLinks)

  return nav
}

function renderMain() {
  const main = document.createElement('main')
  main.setAttribute('id', 'main')

  return main
}

function renderFooter() {
  const footer = document.createElement('footer')
  footer.setAttribute('id', 'footer')

  return footer
}

function loadMainContent(content) {
  const main = document.getElementById('main')
  main.textContent = ''
  main.appendChild(content)
}

function toggleActive(element) {
  const links = document.querySelectorAll('.nav-link')

  links.forEach((link) => {
    if (link !== this) {
      link.classList.remove('active')
    }
  })
  element.classList.add('active')
}

renderSite()
