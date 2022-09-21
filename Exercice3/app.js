 let input = document.getElementById("input");
let submitBtn = document.getElementById("search");
let output = document.getElementById("output");
// let url = "https://api.github.com/users/";
let inputValue = document.querySelector("#input");

async function getUser(url) {
  try {    
    let userdata = await fetch(url);
      return userdata.json
  } catch (error) {
    output.textContent = "Erreur de connexion ";
  }
}



// getUser("https://api.github.com/users/" + inputValue.value);

submitBtn.addEventListener("click", () => {
  getUser("https://api.github.com/users/" + inputValue.value).then((res) => {
    console.log(res);
  })
});
