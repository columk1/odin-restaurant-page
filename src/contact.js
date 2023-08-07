import Logo from './hero_large.png'

export default function renderContact() {
  const contact = document.createElement('div')
  contact.setAttribute('id', 'contact')

  const contactInfo = document.createElement('div')
  contactInfo.classList.add('contact-info')

  const contactItem1 = document.createElement('div')

  const phone = document.createElement('h3')
  phone.textContent = 'Phone'

  const phoneNumber = document.createElement('p')
  phoneNumber.textContent = '123-456-7890'

  const address = document.createElement('h3')
  address.textContent = 'Address'

  const addressLine1 = document.createElement('p')
  addressLine1.textContent = '123 Main Street'
  const addressLine2 = document.createElement('p')
  addressLine2.textContent = 'Portland, OR 12345'

  contactItem1.appendChild(phone)
  contactItem1.appendChild(phoneNumber)

  const contactItem2 = document.createElement('div')
  contactItem2.appendChild(address)
  contactItem2.appendChild(addressLine1)
  contactItem2.appendChild(addressLine2)

  contactInfo.appendChild(contactItem1)
  contactInfo.appendChild(contactItem2)

  const logo = new Image()
  logo.src = Logo

  const divider = document.createElement('div')
  divider.classList.add('h-divider')

  contact.appendChild(contactInfo)
  contact.appendChild(divider)
  contact.appendChild(logo)

  return contact
}
