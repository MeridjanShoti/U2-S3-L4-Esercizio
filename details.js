const params = new URLSearchParams(window.location.search);
const imgId = params.get("imgId");
console.log(imgId);
fetch("https://api.pexels.com/v1/photos/" + imgId, {
  method: "GET",
  headers: {
    Authorization: "r6kc5rViS2YJ30ATdgtrJAKxSrDUpcR9hASYBw8YVvvZskAeL0fQlE4n",
  },
})
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("ERRORE");
    }
  })
  .then((photoObj) => {
    console.log(photoObj);
    const wrapper = document.getElementById("wrapper");
    const img = document.createElement("img");
    img.src = photoObj.src.large;
    img.alt = photoObj.alt;
    const h4 = document.createElement("h4");
    h4.innerText = photoObj.photographer;
    const link = document.createElement("a");
    link.href = photoObj.photographer_url;
    link.innerText = "visita il sito del fotografo";
    wrapper.appendChild(img);
    wrapper.appendChild(h4);
    wrapper.appendChild(link);
    document.body.style.backgroundColor = photoObj.avg_color;
  });
