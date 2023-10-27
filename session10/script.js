let formInput;
let content = document.getElementById("content");

function form(event) {
  formInput = event.target.value;
  //clearContent();
  card(formInput);
}

document.getElementById("form").addEventListener("change", form);

async function card(username) {
  try {
    const res = await fetch(`https://api.github.com/users/${username}`);
    console.log(res.ok)
    if (res.ok) {
      const data = await res.json();
      bindData(data);
    } else {
      displayErrorMessage("User not found.");
    }
  } catch (error) {
    displayErrorMessage("An error occurred while fetching data.");
  }
}

function clearContent() {
  content.innerHTML = "";
}

function displayErrorMessage(message) {
  const errorDiv = document.createElement("div");
  errorDiv.textContent = message;
  content.appendChild(errorDiv);
}

function bindData(data) {
  document.getElementById(
    "img"
  ).innerHTML = `<img src=${data.avatar_url} alt="" />`;
  let contentDiv = document.createElement("div");
  contentDiv.innerHTML = `<h2>${data.name}</h2>
    <h4>${data.bio}</h4>
    <h5>follower: ${data.followers} following: ${data.following} repos:${data.public_repos} <br />
    tiwtter:${data.twitter_username} Location:${data.location}</h5>`;
  content.appendChild(contentDiv);
}
