function Storage(capacity) {
  this.capacity = capacity;
  this._innerItems = new List();

  this.addItem = function(item) {
    if (this._innerItems.length < this.capacity) {
      this._innerItems.push(item);
      return new CallResult(true, "");
    }
    else {
      return new CallResult(false, "Not enough place in ship storage to put: " + item.name);
    }
  };

  this.removeItem = function(item) {
      this._innerItems.remove(item);
  };

  this.iterator = function() {
    return this._innerItems.iterator();
  };
};
