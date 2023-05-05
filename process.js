const apiurl = "http://localhost:8000/Exercises"
 
const ul = document.querySelector('#workouts')

async function exercises(){
    const response = await fetch(apiUrl);
    const filmData = await response.json();
  
    exerciseData.forEach( exercises => {
    let li = document.createElement("li");
    li.className = "zoezi list"
    li.innerText = exercises.title
      return ul.appendChild(li);
  });
}
exercises()
