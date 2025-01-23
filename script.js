const loadButton = document.getElementById("loadButton");
const loadSecondary = document.getElementById("loadSecondary");
const row = document.getElementById("mainRow");
const searchForm = document.getElementById("searchForm");
loadButton.onclick = () => {
  loadImages("hamsters");
};
loadSecondary.onclick = () => {
  loadImages("tigers");
};
function loadImages(searchedItem) {
  const URL = `https://api.pexels.com/v1/search?query=${searchedItem}`;
  fetch(URL, {
    method: "GET",
    headers: { Authorization: "r6kc5rViS2YJ30ATdgtrJAKxSrDUpcR9hASYBw8YVvvZskAeL0fQlE4n" },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Errore nella creazione della card");
      }
    })
    .then((pexelsData) => {
      row.innerHTML = "";
      pexelsData.photos.forEach((photo) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const img = document.createElement("img");
        img.onclick = () => {
          window.location.assign("./details.html?imgId=" + photo.id);
        };
        img.src = photo.src.medium;
        img.alt = photo.alt;
        img.classList.add("bd-placeholder-img", "card-img-top");
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerText = "photographer: " + photo.photographer;
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = photo.alt;
        const bigContainer = document.createElement("div");
        bigContainer.classList.add("d-flex", "justify-content-between", "align-items-center");
        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");
        const viewBtn = document.createElement("button");
        viewBtn.type = "button";
        viewBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
        viewBtn.innerText = "View";
        const hideBtn = document.createElement("button");
        hideBtn.type = "button";
        hideBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
        hideBtn.innerText = "Hide";
        const photoID = document.createElement("small");
        photoID.classList.add("text-muted");
        photoID.innerText = photo.id;

        row.appendChild(col);
        col.appendChild(card);
        card.appendChild(img, cardBody);
        card.appendChild(cardBody);
        cardBody.appendChild(title);
        cardBody.appendChild(cardText);
        cardBody.appendChild(bigContainer);
        bigContainer.appendChild(btnGroup);
        bigContainer.appendChild(photoID);
        btnGroup.appendChild(viewBtn);
        btnGroup.appendChild(hideBtn);
        hideBtn.addEventListener("click", () => {
          col.classList.add("d-none");
        });
      });
    })
    .catch((err) => console.log(err));
}
searchForm.onsubmit = (e) => {
  e.preventDefault();
  loadImages(searchForm[0].value);
};
