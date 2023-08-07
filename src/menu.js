const menuData = [
  {
    category: 'Ramen',
    items: [
      {
        name: 'Chilled Tsukemen',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
        price: '20$',
      },
      {
        name: 'Spicy Beef Mazemen',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
        price: '20$',
      },
      {
        name: 'Yozu Chicken Bowl',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
        price: '18$',
      },
      {
        name: 'Yozu Tofu Bowl',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
        price: '15$',
      },
    ],
  },
  {
    category: 'Donburi',
    items: [
      {
        name: 'Chasu Donburi',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
        price: '15$',
      },
      {
        name: 'Yakitori Don',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet',
        price: '15$',
      },
    ],
  },
]

export default function renderMenu() {
  const menu = document.createElement('div')
  menu.setAttribute('id', 'menu')

  menuData.forEach((menuObj) => {
    const menuCategory = document.createElement('div')
    menuCategory.classList.add('menu-category')
    const title = document.createElement('h2')
    title.textContent = menuObj.category
    menuCategory.appendChild(title)
    menu.appendChild(menuCategory)

    const menuItems = menuObj.items
    menuItems.forEach((item) => {
      const menuItem = document.createElement('div')
      menuItem.classList.add('menu-item')

      const name = document.createElement('h4')
      name.textContent = item.name

      const description = document.createElement('p')
      description.classList.add('description')
      description.textContent = item.description

      const price = document.createElement('p')
      price.classList.add('price')
      price.textContent = item.price

      const divider = document.createElement('div')
      divider.classList.add('h-divider')

      menuItem.appendChild(name)
      menuItem.appendChild(price)
      menuItem.appendChild(description)
      menuItem.appendChild(divider)
      menuCategory.appendChild(menuItem)
    })
  })

  return menu
}
