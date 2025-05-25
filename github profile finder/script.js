console.log("async mastering project");

function getProfileData(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    if (!raw.ok) throw new Error("Users not found");
    return raw.json();
  });
}

let searchInput = document.querySelector(".searchInput");
let submitBtn = document.querySelector(".submitBtn");
let card = document.querySelector(".card");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let userValue = searchInput.value.trim();
  if (userValue.length > 0) {
    getProfileData(userValue).then((data) => {
      decorateProfileData(data)
    });
  } else {
    alert("input a valid username");
  }
});

function decorateProfileData(details){
    
    console.log(details);
    
data = `<img
            src="${details.avatar_url}"
            alt="User Avatar"
            class="w-24 h-24 rounded-full shadow-md border"
          />
          <div>
            <h2 class="text-xl font-semibold text-gray-800">${details.name ? details.name : "N/A"}</h2>
            <p class="text-gray-500">@${details.login}</p>
            <p class="mt-2 text-gray-600">
              ${details.bio ? details.bio : "Bio unavailable"}
            </p>
            <div class="mt-4 flex gap-6 text-sm text-gray-600">
              <span
                ><strong class="text-gray-800 font-semibold">${details.public_repos}</strong>
                Repos</span
              >
              <span
                ><strong class="text-gray-800 font-semibold">${details.followers}</strong>
                Followers</span
              >
              <span
                ><strong class="text-gray-800 font-semibold">${details.following}</strong>
                Following</span
              >
            </div>
            <div class="mt-4 text-sm text-gray-500">
              <p>
                <span class="font-medium text-gray-700">Location:</span> ${details.location ? details.location : "N/A"}
              </p>
              <p>
                <span class="font-medium text-gray-700">Blog:</span>
                <a
                  href="https://github.blog"
                  class="text-blue-600 hover:underline"
                  >${details.blog ? details.blog : "N/A"}</a
                >
              </p>
              <p>
                <span class="font-medium text-gray-700">Company:</span> ${details.company ? details.company : "N/A"}
              </p>
              <p>
                <span class="font-medium text-gray-700">Joined:</span> ${details.created_at}
              </p>
            </div>
          </div>`;
card.innerHTML = data

}

