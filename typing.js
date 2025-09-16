let input = document.getElementById('tempo');
let status = document.getElementById('ok');
let lip = document.getElementById('ol');
let star = document.getElementById('messageInput');
let typingTimer;


star.addEventListener('keyup', () => {
  status.textContent = "typing...";
  clearTimeout(typingTimer);
  typingTimer = setTimeout(() => {
    status.textContent = "";
  }, 1000);
});

let button = document.createElement('button');
button.textContent = "☑️Send";

// styling
button.style.color = "purple";
button.style.fontSize = "16px";
button.style.cursor = "pointer";
button.style.backgroundColor = "pink";
button.style.borderRadius = "4px";
document.getElementById('tempo').append(button);
button.addEventListener('click', () => {
  if (star.value.trim() === "") {
    lip.textContent = "Type something"; 
  } else {
    lip.textContent = ""; 
    star.textContent="";
    alert("Message Sent...");
  }

  

});



