const menuBtn = document.querySelector('.menu-btn')
const nav = document.querySelector('.nav')
const menuItems = document.querySelectorAll('.menu-item')

menuItems.forEach(item =>
	item.addEventListener('click', () => {
		nav.classList.remove('menu-open')
	}),
)
menuBtn.addEventListener('click', () => {
	nav.classList.toggle('menu-open')
})
