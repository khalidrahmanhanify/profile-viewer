const api = "https://api.github.com/users/";
const userInput = document.getElementById("githubUsername");
const card = document.querySelector(".card");
const profileAvatar = document.querySelector(".profileAvatar");
const userFullName = document.querySelector(".fullName");
const username = document.querySelector(".username");
const followLink = document.querySelector(".follow-link");
const followersCount = document.querySelector(".followers strong");
const followingCount = document.querySelector(".following strong");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const repoCount = document.querySelector(".repo-info p span");
const repoLink = document.querySelector(".repos");
const errorContainer = document.querySelector(".error-container");

function searchUser() {
  fetch(api + userInput.value)
    .then((res) => {
      return res.json();
    })
    .then((response) => {
      if (response.status == 404) {
        card.style.display = "none";
        errorContainer.style.display = "block";
        console.log(response);
      } else {
        card.style.display = "block";
        profileAvatar.src = response.avatar_url;
        userFullName.textContent = response.name || response.login;
        username.textContent = "@" + response.login;
        followLink.href = response.html_url;
        followersCount.textContent = response.followers;
        followingCount.textContent = response.following;
        followers.href = response.html_url + "?tab=followers";
        following.href = response.html_url + "?tab=following";
        repoCount.textContent = response.public_repos;
        repoLink.href = response.html_url + "?tab=repositories";
        errorContainer.style.display = "none";
        console.log(response);
      }
    })
    .catch((err) => {
      card.style.display = "none";
      errorContainer.style.display = "block";
    });
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    searchUser();
  }
});
