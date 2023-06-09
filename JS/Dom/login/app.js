const API_URL = "http://localhost:3000";

//queryselectorAll è un array
const $form = document.querySelector("#login");
const $inputs = document.querySelectorAll(".form-input");
const $output = document.querySelector("#output");

const state = {
  form: {
    email: "",
    password: "",
  },
  output: "",
};

document.addEventListener("click", (event) => {
  if (event.target.id == "logout") {
    state.output = "";
    $output.innerHTML = "";
  }
});

$inputs.forEach(($input) => {
  $input.addEventListener("input", (event) => {
    const { name, value } = event.target; //target ci prende tutti i valori del nostro elemento
    state.form[name] = value; //state.form["email"]
  });
});

$form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const response = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      body: JSON.stringify(state.form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.ok) {
      state.output = result;
      renderOutput();
      state.form.email = "";
      state.form.password = "";
      $form.reset();
    } else {
      console.error(result);
    }
  } catch (err) {
    console.error(err);
  }
});

const renderOutput = () => {
  $output.innerHTML = `<p>
  ${state.output.token}
  </p> 
  <button id="logout">
  Logout
  </button>`;
};
