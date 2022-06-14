function likeThePost(ref) {
  let countRef = ref.nextElementSibling;

  let currentValueStr = countRef.innerHTML;
  let currentValue = parseInt(currentValueStr);

  countRef.innerHTML = currentValue + 1;
}

function addNewPost(refBtn) {
  let inputRef = refBtn.previousElementSibling;
  let userInput = inputRef.value;

  let ref = document.querySelector("#output");

  let oldValue = ref.innerHTML;
  let newValue = `<div class="mypost">
                    <h2> ${userInput} </h2>
                    <span class="mylikebtn" onclick="likeThePost(this)">&#128077;</span>
                    <span class="mylikebtn">0</span>
                  </div>`;

  // ref.innerHTML = newValue + oldValue;
  ref.innerHTML = `${newValue} ${oldValue}`;
  inputRef.value = "";
}

function checkEnterEvent(event, ref) {
  if (event.keyCode == 13) {
    addNewPost(ref.nextElementSibling);
  }
}
