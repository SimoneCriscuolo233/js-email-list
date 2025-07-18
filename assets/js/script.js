//https://flynn.boolean.careers/exercises/api/random/mail
const list = document.getElementById("mail-list")
const button = document.getElementById("submit-button")

const mail = [];

for (let i = 0; i < 10; i++) {
  axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`).then((res) => {
    mail.push(res.data.response)
    list.innerHTML += `<li class="list-group-item">${mail[i]}</li>`
  })

}