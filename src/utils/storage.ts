/* eslint-disable class-methods-use-this */
class Storage {
  save(key: string, data: string) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key: string) {
    const data =
      localStorage.getItem(key) !== null
        ? JSON.parse(localStorage.getItem(key))
        : [];

    return data;
  }
}

const storage = new Storage();

export default storage;
