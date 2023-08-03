import { getSchools } from "./database.js";

const schools = getSchools();

document.addEventListener("click", (clickEvent) => {
  const schoolClicked = clickEvent.target;

  if (schoolClicked.dataset.type === "school") {
    const detailsHtml = `
      <div>
        <h4>Description: ${schools.description}</h4>
        <h4>Disclaimer: ${schools.disclaimer}</h4>
        <h4>Currently accepting the following Magician Types: ${schools.name}</h4>
      </div>
    `;
  }
});

export const SchoolList = () => {
  let headerHtml = `<div id="schools_container" class="content_block">`;
  headerHtml += `<h3>Magic Schools:</h3>`;
  headerHtml += `<ul>`;

  for (const school of schools) {
    headerHtml += `<li>${school.name}</li>`;
  }

  headerHtml += `</ul>`;
  headerHtml += `</div>`;
  return headerHtml;
};
