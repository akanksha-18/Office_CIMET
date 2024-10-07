const form = document.getElementById('leaderboard-form');
const board = document.getElementById('board');

let leaderboardData = [];

window.onload = function () {
  const savedData = localStorage.getItem('leaderboardData');
  if (savedData) {
    leaderboardData = JSON.parse(savedData);
    updateLeaderboard();
  }
};

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const firstName = document.getElementById('fname').value;
  const lastName = document.getElementById('lname').value;
  const country = document.getElementById('country').value;
  let score = parseInt(document.getElementById('score').value);

  const entry = { firstName, lastName, country, score };

  
  leaderboardData.push(entry);
 
  
  saveToLocalStorage();

  
  updateLeaderboard();


  form.reset();
});


function updateLeaderboard() {

  leaderboardData.sort((a, b) => b.score - a.score);

  board.innerHTML = ''; 

  leaderboardData.forEach((entry, index) => {
    const entryDiv = document.createElement('div');
    entryDiv.classList.add('playerRecord');

    entryDiv.innerHTML = `
      <div>${entry.firstName} ${entry.lastName} (${entry.country})</div>
      <div>Score: ${entry.score}</div>
      <div>
        <button onclick="incrementScore(${index})">+5</button>
        <button onclick="decrementScore(${index})">-5</button>
        <button onclick="deleteEntry(${index})">Delete</button>
      </div>
    `;

    board.appendChild(entryDiv);
  });
}

function saveToLocalStorage() {
  localStorage.setItem('leaderboardData', JSON.stringify(leaderboardData));
}


function incrementScore(index) {
  leaderboardData[index].score += 5;
  saveToLocalStorage();
  updateLeaderboard();
}

function decrementScore(index) {
  leaderboardData[index].score -= 5;
  saveToLocalStorage();
  updateLeaderboard();
}


function deleteEntry(index) {
  leaderboardData.splice(index, 1);
  saveToLocalStorage();
  updateLeaderboard();
}