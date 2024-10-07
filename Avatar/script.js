const addBtn = document.getElementById('addBtn');
const modal = document.getElementById('modal');
const nameInput = document.getElementById('nameInput');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancle-btn');
const avatarContainer = document.getElementById('avatarContainer');

let avatars = JSON.parse(localStorage.getItem('avatars')) || [];

function saveAvatars() {
  localStorage.setItem('avatars', JSON.stringify(avatars));
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function isColorDark(color) {
  
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
 
  const brightness = (r + g + b) / 3;
  return brightness < 128; 
}

function createAvatar(name, color) {
  const avatarWrapper = document.createElement('div');
  avatarWrapper.classList.add('avatar-wrapper');

  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  avatar.innerText = name[0].toUpperCase();
  avatar.style.backgroundColor = color;
  avatar.style.color = isColorDark(color) ? 'white' : 'black';

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML = '&times;';
  deleteBtn.onclick = function() {
    avatarContainer.removeChild(avatarWrapper);
    avatars = avatars.filter(a => a.name !== name);
    saveAvatars();
  };

  avatarWrapper.appendChild(avatar);
  avatarWrapper.appendChild(deleteBtn);
  avatarContainer.insertBefore(avatarWrapper, addBtn);
}

function addAvatar() {
  const name = nameInput.value.trim();
  if (name) {
    const color = getRandomColor();
    avatars.push({ name, color });
    createAvatar(name, color);
    saveAvatars();
    nameInput.value = '';
    modal.style.display = 'none';
  }
}

function loadAvatars() {
  avatars.forEach(avatar => {
    createAvatar(avatar.name, avatar.color);
  });
}

addBtn.onclick = () => modal.style.display = 'block';
submitBtn.onclick = addAvatar;
nameInput.onkeypress = (e) => {
  if (e.key === 'Enter') addAvatar();
};
cancelBtn.onclick = () => modal.style.display = 'none';

window.onclick = (e) => {
  if (e.target === modal) modal.style.display = 'none';
};

loadAvatars();
