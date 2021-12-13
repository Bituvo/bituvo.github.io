const projects = [
  new Array('https://bituvo.github.io/wordGenerator', 'Random Word Generator', 'A simple random, pronouceable word generator written in Javascript.', 'Javascript'),
  new Array('https://google.com/', 'Poopyfard', 'Poopy fard!', 'Poopy!', 'Python'),
  new Array('https://mail.google.com/', 'I can\'t believe it', 'I am devastated.', 'Javascript'),
  new Array('https://turbowarp.org/', 'Haha', 'Just kidding! XD', 'Python')
];
  
function addProject(data) {
  const link = data[0];
  const title = data[1];
  const info = data.slice(2, data.length - 1);
  const language = data[data.length - 1];
  
  const projectsDiv = document.getElementById('projects');
  const newProjectDiv = document.createElement('div');
  newProjectDiv.setAttribute('class', 'project')
  newProjectDiv.onclick = function() {
    document.location.href = link;
  };
  newProjectDiv.style.cssText += 'position: relative; cursor: pointer;';
  
  newProjectDiv.innerHTML += '<h1>' + title + '</h1>';
  for (const label of info) {
    newProjectDiv.innerHTML += "<p style='margin-top: 15px; font-size: 25px;'>" + label + "</p>";
  };
  
  const languageDiv = document.createElement('div');
  languageDiv.style.cssText += 'position: absolute; bottom: 0; margin-bottom: 15px;';
  if (language == 'Python') {
    languageDiv.innerHTML += "<img src='https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' width='25' height='25'>";
    languageDiv.innerHTML += "<p style='float: right; margin: 0; margin-left: 10px; line-height: 25px;'>Python</p>";
  } else if (language == 'Javascript') {
    languageDiv.innerHTML += "<img src='https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg' width='25' height='25'>";
    languageDiv.innerHTML += "<p style='float: right; margin: 0; margin-left: 10px; line-height: 25px;'>Javascript</p>";
  };
  
  newProjectDiv.appendChild(languageDiv);
  
  projectsDiv.appendChild(newProjectDiv);
}

function refreshProjects(mode) {
  const elements = document.getElementsByClassName('project');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  
  if (mode == 'all') {
    for (const item in projects) {
      addProject(projects[item]);
    };
  } else if (mode == 'python') {
    for (const item in projects) {
      if (projects[item][projects[item].length - 1] == 'Python') {
          addProject(projects[item]);
      };
    };
  } else if (mode == 'javascript') {
    for (const item in projects) {
      if (projects[item][projects[item].length - 1] == 'Javascript') {
          addProject(projects[item]);
      };
    };
  };
};
