const projects = [
  new Array('https://bituvo.github.io/wordGenerator', 'Random Word Generator', 'A simple random, pronouceable word generator.', 'Javascript')
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
  for (var i = 0; i < info.length; i++) {
    newProjectDiv.innerHTML += "<p style='margin-top: 15px; font-size: 25px;'>" + info[i] + "</p>";
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
    for (var i = 0; i < projects.length; i++) {
      addProject(projects[i]);
    };
  } else if (mode == 'python') {
    for (var i = 0; i < projects.length; i++) {
      if (projects[i][projects[i].length - 1] == 'Python') {
          addProject(projects[i]);
      };
    };
  } else if (mode == 'javascript') {
    for (var i = 0; i < projects.length; i++) {
      if (projects[i][projects[i].length - 1] == 'Javascript') {
          addProject(projects[i]);
      };
    };
  };
};
