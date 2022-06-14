function likeThePost(ref) {
  let countRef = ref.nextElementSibling;

  let currentValueStr = countRef.innerHTML;
  let currentValue = parseInt(currentValueStr);

  countRef.innerHTML = currentValue + 1;
}
