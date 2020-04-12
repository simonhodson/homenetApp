class Utilities {
  hasKeys(user) {
    return !!(Object.keys(user).length === 0 && user.constructor === Object);
  }
}

export default new Utilities();
