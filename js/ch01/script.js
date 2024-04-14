const name = document.getElementById('name');
const age = document.getElementById('age');
const dogYears = document.getElementById('dogyears');

name.innerText = 'John Doe'
age.innerText = '99'

function showDogYears(age) {
  dogYears.innerText = Number(age) * 7;
  return Number(age) * 7
}

dogYears.innerText = showDogYears(age.innerText)

const fakeInputs = document.querySelectorAll('.fake-input')
fakeInputs.forEach(node => {
  node.classList.add('real-input')
  node.classList.remove('fake-input')
})