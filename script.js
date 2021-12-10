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
  newProjectsDiv.appendChild(newProjectDiv);
  
  const titleText = newProjectDiv.createElement('h1');
  titleText.innerText = title;
};

addProject(projects[3]);
