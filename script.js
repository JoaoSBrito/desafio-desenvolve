var swiper = new Swiper('.mySwiper', {
  slidesPerView: 3,
  spaceBetween: 14,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})

form.addEventListener('submit', e => {
  e.preventDefault()

  checkInputs()
})

function checkInputs() {
  if (validacaoEmail(f1.email) == true && validaText() == true) {
    alert(user + ' agradecemos seu contato!')
    console.log(user)
  } else {
    alert('nao')
  }

  if (validacaoEmail(f1.email) == true) {
    console.log('valido')
  } else {
    console.log('invalido')
  }
}

function validaText() {
  const textArea = document.getElementById('textarea')

  if (textArea.value == '' || textArea.value.length <= 2) {
    console.log('invalido')
    document.getElementById('msgtext').innerHTML =
      "<font color='red'>Insira uma mensagem </font>"
    return false
  } else {
    console.log('valido')
    document.getElementById('msgtext').innerHTML =
      "<font color='green'>Mensagem válida </font>"
    return true
  }
}

function validacaoEmail(field) {
  user = field.value.substring(0, field.value.indexOf('@'))
  domain = field.value.substring(
    field.value.indexOf('@') + 1,
    field.value.length
  )
  if (
    user.length >= 1 &&
    user.length <= 32 &&
    domain.length >= 3 &&
    domain.length <= 16 &&
    user.search('@') == -1 &&
    domain.search('@') == -1 &&
    user.search(' ') == -1 &&
    domain.search(' ') == -1 &&
    domain.search('.') != -1 &&
    domain.indexOf('.') >= 1 &&
    domain.lastIndexOf('.') < domain.length - 1
  ) {
    document.getElementById('msgemail').innerHTML =
      "<font color='green'>Email válido </font>"
    return true
  } else {
    document.getElementById('msgemail').innerHTML =
      "<font color='red'>Email inválido </font>"
    return false
  }
}

const backToTopButton = document.querySelector('.back-to-top')
function backToTop() {
  if (window.scrollY >= 380) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  backToTop()
})
