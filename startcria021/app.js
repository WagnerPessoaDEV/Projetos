const navToggle = document.querySelector('.nav-toggle')
const nav = document.querySelector('.site-nav')
if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('is-open')
  })
}

const yearEl = document.querySelector('#year')
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear())
}

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12 }
)

document.querySelectorAll('.reveal').forEach(el => observer.observe(el))

