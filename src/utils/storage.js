const localStorage = {
  set(key, val) {
    window.localStorage.setItem(key, JSON.stringify(val));
  },
  get(key) {
    const json = window.localStorage.getItem(key);
    return JSON.parse(json);
  },
  remove(key) {
    window.localStorage.removeItem(key);
  },
  clear() {
    window.localStorage.clear();
  },
};

export default localStorage;
