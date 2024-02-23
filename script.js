// script.js
const emojis = [
    "&#129409;", // 🦁
    "&#127873;", // 🏡
    "&#128640;", // 🚀
    "&#128516;", // 😄
    "&#128525;", // 😍
    "&#128640;", // 🚀
    "&#128293;", // 🎵
    "&#128169;", // 💩
    "&#128584;", // 😸
    "&#129296;", // 🦐
    "&#128008;", // 😈
    "&#128527;"  // 😏
  ];
  
  const emojiGallery = document.getElementById("emoji-gallery");
  
  emojis.forEach(emoji => {
    const emojiItem = document.createElement("div");
    emojiItem.classList.add("emoji-item");
  
    const emojiCharacter = document.createElement("span");
    emojiCharacter.classList.add("emoji-character");
    emojiCharacter.innerHTML = emoji;
  
    const emojiCode = document.createElement("code");
    emojiCode.classList.add("emoji-code");
    emojiCode.textContent = emoji.codePointAt(0); 
  
    emojiItem.appendChild(emojiCharacter);
    emojiItem.appendChild(emojiCode);
    emojiGallery.appendChild(emojiItem);
  });
  