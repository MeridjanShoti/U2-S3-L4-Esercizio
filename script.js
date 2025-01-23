let loadButton = document.getElementById("loadButton");
let loadSecondary = document.getElementById("loadSecondary");
const row = document.getElementById("mainRow");
let searchedItem;
loadButton.onclick = () => {
  searchedItem = "hamsters";
  loadImages();
};
loadSecondary.onclick = () => {
  searchedItem = "tigers";
  loadImages();
};

function loadImages() {
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
    .then((object) => {
      row.innerHTML = "";
      object.photos.forEach((element) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");
        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm");
        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");
        const img = document.createElement("img");
        img.src = element.src.medium;
        img.alt = element.alt;
        img.classList.add("bd-placeholder-img", "card-img-top");
        const title = document.createElement("h5");
        title.classList.add("card-title");
        title.innerText = "photographer: " + element.photographer;
        const cardText = document.createElement("p");
        cardText.classList.add("card-text");
        cardText.innerText = element.alt;
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
        photoID.innerText = element.id;

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
