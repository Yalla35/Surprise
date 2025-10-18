/* app.js - shared interactivity */

document.addEventListener("DOMContentLoaded", ()=>{

  // SECRET CODE PAGE logic (index.html)
  const codeInput = document.getElementById && document.getElementById("secret-code");
  if(codeInput){
    const submit = document.getElementById("submit-code");
    const message = document.getElementById("code-message");
    submit.addEventListener("click", ()=>{
      const val = codeInput.value.trim();
      if(val === "091825"){
        message.textContent = "Happy First Monthsary, Babi💞";
        message.style.color = "#ff4d7e";
        // small animation then redirect
        
      } else {
        message.textContent = "Wrong code — try again, Babi 💌";
        message.style.color = "#c83a56";
      }
    });
    // allow Enter
    codeInput.addEventListener("keydown", (e)=>{
      if(e.key === "Enter") submit.click();
    });
  }

  // LOVE LETTER envelope toggle
  const envelope = document.querySelector(".envelope");
  if(envelope){
    envelope.addEventListener("click", ()=>{
      envelope.classList.toggle("open");
      const text = document.getElementById("letter-container");
      if(text){
        // reveal/hide with gentle animation
        if(envelope.classList.contains("open")){
          text.style.maxHeight = text.scrollHeight + "px";
          text.style.opacity = 1;
        } else {
          text.style.maxHeight = 0;
          text.style.opacity = 0;
        }
      }
    });
  }

  document.querySelectorAll(".tilt").forEach(card=>{
    card.addEventListener("mousemove", (e)=>{
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width/2;
      const cy = rect.height/2;
      const dx = (x-cx)/(rect.width/2);
      const dy = (y-cy)/(rect.height/2);
      const rx = dy * 6; 
      const ry = dx * -6; 
      card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(8px)`;
    });
    card.addEventListener("mouseleave", ()=>{
      card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
    });
  });

  document.querySelectorAll("audio").forEach(a=>{
    a.addEventListener("play", ()=>{
      document.querySelectorAll("audio").forEach(other=>{
        if(other !== a) other.pause();
      });
    });
  });
});