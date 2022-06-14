function likeThePost(ref) {
  let countRef = ref.nextElementSibling;

  let currentValueStr = countRef.innerHTML;
  let currentValue = parseInt(currentValueStr);

  countRef.innerHTML = currentValue + 1;
}

function addNewPost() {
  let ref = document.querySelector("#output");

  let oldValue = ref.innerHTML;
  let newValue = `<div class="mypost">
                    <h2>Hello World. Learning Web Application</h2>
                    <span class="mylikebtn" onclick="likeThePost(this)">&#128077;</span>
                    <span class="mylikebtn">0</span>
                  </div>`;

  ref.innerHTML = oldValue + newValue;
}
