  // Hike View handler
  export default class HikesView {
    constructor(listElementId) {
        this.imgBasePath = '../images/';
        this.parentElement = document.getElementById(listElementId); 
    }

    renderHikeList(hikeList, listElement = this.parentElement) {
        // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
        hikeList.forEach(hike => listElement.appendChild(this.renderOneHikeLight(hike)));
    }

    renderOneHikeLight(hike) {
        // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
        const item = document.createElement("li");
        item.innerHTML = ` <h2>${hike.name}</h2>
                <div class="image"><img src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}"></div>
                <div class="hikeDescLite">
                        <div>
                            <h3>Distance</h3>
                            <p>${hike.distance}</p>
                        </div>
                        <div>
                            <h3>Difficulty</h3>
                            <p>${hike.difficulty}</p>
                        </div>
                </div>`;
        return item;
      }

  renderOneHikeFull(hike, parentElement) {
    // this method will be used to one hike with full detail...you will need this for the stretch goal! 
  }
}