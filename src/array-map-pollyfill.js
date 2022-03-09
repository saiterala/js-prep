Array.prototype.map = (callback) => {
     //Store the new array
  const result = [];
  for (let i = 0; i < this.length; i++) {
    //cross check if the element is part of the current
    if (this.indexOf(this[i]) > -1) {
      result[i] = callback(this[i], i, this)
    }
  }
  
  //return the array
  return result
}