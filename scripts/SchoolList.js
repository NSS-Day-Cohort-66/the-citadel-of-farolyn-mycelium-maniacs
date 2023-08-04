import { getSchools, getArchetypes } from "./database.js";

const schools = getSchools();
const types = getArchetypes();

document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;
  let typesList = [];
  let schoolId = schoolClicked.dataset.id;
  let typesListString = " ";
  const detailsContainer = document.querySelector("#details_container");
  if (schoolClicked.dataset.type === "school") {
    for (const type of types) {
      if (parseInt(schoolId) === type.schoolId) {
        typesList.push(type.name);
      }
    }
    typesListString += typesList.join(", ");
    const detailsHtml = `
      <div>
        <h4>Description: ${schoolClicked.dataset.description}</h4>
        <h4>Disclaimer: ${schoolClicked.dataset.disclaimer}</h4>
        <h4>Currently accepting the following Magician Types: ${typesListString}</h4>
      </div>
    `;
    detailsContainer.innerHTML = detailsHtml;
  }
});

export const SchoolList = () => {
  let headerHtml = `<div id="schools_container" class="content_block">`;
  headerHtml += `<h3>Magic Schools:</h3>`;
  headerHtml += `<ul>`;

  for (const school of schools) {
    headerHtml += `<li data-id="${school.id}" data-description="${school.description}" data-disclaimer="${school.disclaimer}"data-type="school">${school.name}</li>`;
  }

  headerHtml += `</ul>`;
  headerHtml += `</div>`;
  return headerHtml;
};

document.addEventListener("click", (clickEvent) => {
  const itemClicked = clickEvent.target;

  if (itemClicked.dataset.type === "school") {
    const detailsHtml = `
      <div>
      <h2> Description: </h2>
        <p> ${schools.description}</p>
      </div>
    `;
  }
});
