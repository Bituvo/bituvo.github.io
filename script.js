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
  newProjectDiv.style.cssText += 'cursor: pointer;';
  
  newProjectDiv.innerHTML += '<h1>' + title + '</h1>';
  
  projectsDiv.appendChild(newProjectDiv);
}

function refreshProjects(mode) {
  const elements = document.getElementsByClassName('project');
  while (elements.length > 0) {
    elements[0].parentNode.removeChild(elements[0]);
  }
  
  if (mode == 'all') {
    for (const item in projects) {
      addProject(item);
      console.log(item);
    };
  };
};

refreshProjects('all');
