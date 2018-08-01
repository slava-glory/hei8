export const isEmtyFields = (data) => {
  // Object.keys(data)
  for( let key in data) {
    if(!data[key]) {
      return true;
    }
  }
  return false;
}