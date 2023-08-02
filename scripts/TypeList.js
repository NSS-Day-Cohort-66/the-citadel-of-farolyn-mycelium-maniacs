import { getArchetypes } from "./database.js";

const archetypes = getArchetypes();

document.addEventListener("click", (clickEvent) => {
  const typeClicked = clickEvent.target;

  if (typeClicked.dataset.type === "type") {
    const detailsHtml = `
    <div>
      <h4>Greeting:${archetypes.greeting}</h4>
      <h4>School:</h4>
      <h4>Study Book:</h4>
    </div>`;
  }
});

export const TypeList = () => {
  let headerHtml = `<div id="archetypes_container" class="content_block">`;
  headerHtml += `<h3>Magician Types:</h3>`;
  headerHtml += `<ul>`;

  for (const archetype of archetypes) {
    headerHtml += `<li>${archetype.name}</li>`;
  }

  headerHtml += `</ul>`;
  headerHtml += `</div>`;
  return headerHtml;
};
