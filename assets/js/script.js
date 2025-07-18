//https://flynn.boolean.careers/exercises/api/random/mail
const list = document.getElementById("mail-list")
const button = document.getElementById("submit-button")
const background = document.getElementById('spinner-bg')
const spinner= document.getElementById('spinner')
list.classList.add('d-none')
const mail = [];
const generateMail = (min) => {
  background.classList.remove('d-none')
  spinner.classList.remove('d-none')
  for (let i = 0; i < min; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((res) => {
      mail.push(res.data.response)
      list.innerHTML += `<li class="list-group-item">${mail[i]}</li>`
      if (mail.length === min - 1) {
        list.classList.remove("d-none")
        background.classList.add('d-none')
        spinner.classList.add('d-none')
      }
    })
  }
}
        
        


button.addEventListener('click', () => {
  list.classList.add("d-none")
  list.innerHTML = ``;
  mail.length = 0
  generateMail(10)
})


generateMail(10)