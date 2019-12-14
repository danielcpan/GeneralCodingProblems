const debounce = (func, timer) => {
  let timeId = null;
  return (...args) => {
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      func(...args);
    }, timer);
  }
}

this.addEventListener('keyup', debounce((e) => console.log(e.key), 1000))

