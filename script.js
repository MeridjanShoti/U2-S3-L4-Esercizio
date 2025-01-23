const URL = "https://api.pexels.com/v1/search?query=parrots";
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
    console.log(object);
    object.photos.forEach((element) => {
      const row = document.getElementById("mainRow");
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
      const editBtn = document.createElement("button");
      editBtn.type = "button";
      editBtn.classList.add("btn", "btn-sm", "btn-outline-secondary");
      editBtn.innerText = "Edit";
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
      btnGroup.appendChild(editBtn);
    });
  })
  .catch((err) => console.log(err));

/*
<div class="col-md-4">
              <div class="card mb-4 shadow-sm">
                <img src="https://picsum.photos/id/237/300/200" class="bd-placeholder-img card-img-top" />
                <div class="card-body">
                  <h5 class="card-title">Lorem Ipsum</h5>
                  <p class="card-text">
                    This is a wider card with supporting text below as a natural lead-in to additional content. This
                    content is a little bit longer.
                  </p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                    <small class="text-muted">9 mins</small>
                  </div>
                </div>
              </div>
            </div>
*/
