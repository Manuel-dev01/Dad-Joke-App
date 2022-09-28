const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

generateJoke();
//Using the .then() method
// function generateJoke(){
//     const config = {
//         headers : {
//             'Accept' : 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//         .then(response => response.json())
//         .then(data => {
//             jokeEl.innerHTML = data.joke
//         })
// }

jokeBtn.addEventListener('click', () => {
  generateJoke();
});

//Using the ASYNC/AWAIT
async function generateJoke() {
  const config = {
    headers: {
      //  Accept: 'application/json',
    },
  };

  const res = await fetch('https://icanhazdadjoke.com', config);

  const data = await res.json();
  console.log(data);
  jokeEl.innerHTML = data.value;
}
