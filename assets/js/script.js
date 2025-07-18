//https://flynn.boolean.careers/exercises/api/random/mail
const list = document.getElementById("mail-list")
const button = document.getElementById("submit-button")

const mail = [];
const generateMail = (min) => {
  for (let i = 0; i < min; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((res) => {
      mail.push(res.data.response)
      list.innerHTML += `<li class="list-group-item">${mail[i]}</li>`
    })
  }
}


button.addEventListener('click', () => {
  list.innerHTML = ``;
  generateMail(10)
})


generateMail(10)