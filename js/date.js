const today = new Date();

const date = document.querySelector("#date span")
date.innerText = today.getMonth() + 1 +  "월" + today.getDate() + "일";