let projects = [
  {
    title: "Портфолио",
    description: "Мой личный сайт на HTML, CSS и JS.",
    link: "https://dimamaloi2442-prog.github.io/portfolio/"
  },
  {
    title: "HorizWorld",
    description: "Сайт для Minecraft-сервера.",
    link: "https://dimamaloi2442-prog.github.io/horizworld-layout/"
  }
];

function createProject(project) {
  let div = document.createElement("div");
  div.classList.add("project");
  
  let h3 = document.createElement("h3");
  h3.textContent = project.title;

  let p = document.createElement("p");
  p.textContent = project.description;   // ← вот здесь берёшь описание из объекта

  let link = document.createElement("a");
  link.textContent = "Посмотреть";
  link.href = project.link;    // ← свойство href есть у всех <a>
  link.target = "_blank";
  link.rel = "noopener noreferrer";


  div.appendChild(h3);
  div.appendChild(p);
  div.appendChild(link);

  return div;
}

let projectsList = document.querySelector(".projects-list");

projects.forEach(function(project) {
  let projectElement = createProject(project);
  projectsList.appendChild(projectElement);
});
