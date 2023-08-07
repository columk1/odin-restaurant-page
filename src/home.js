import HeroImg from './hero_large.png'

export default function renderHome() {
  const home = document.createElement('div')
  home.setAttribute('id', 'home')

  const hero = new Image()
  hero.src = HeroImg

  const slogan = document.createElement('p')
  slogan.classList.add('slogan')
  slogan.textContent = 'Crafting fresh noodles since 1988'

  const bookBtn = document.createElement('button')
  bookBtn.classList.add('btn')
  bookBtn.classList.add('book-btn')
  bookBtn.textContent = 'Make an Order'

  home.appendChild(slogan)
  home.appendChild(hero)
  home.appendChild(bookBtn)

  return home
}
