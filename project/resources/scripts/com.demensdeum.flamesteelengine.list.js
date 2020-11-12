function List() {
  this.last = null;
  this.length = 0;

  this.iterator = function() {
    return new ListIterator(this);
  };

  this.push = function(value) {
    this.last = new ListNode(this.last, value);
    this.length += 1;
    print("added to list, length: " + this.length);
  };

  this.pop = function() {
    if (this.length > 0) {
      this.last = this.last.link;
      this.length -= 1;
    }
  };

  this.remove = function(value) {
    var iterator = this.iterator();
    while (true) {
      var item = iterator.next();
      if (item == null) {
        break;
      }
      else if (item.value == value) {
        iterator.remove();
      }
    }
  };
};

function ListNode(link, value) {
  this.link = link;
  this.value = value;
};

function ListIterator(list) {
  this._list = list;
  this._previous = null;
  this._current = null;
  this._next = list.last;
  this.next = function() {
    this._previous = this._current;
    this._current = this._next;
    this._next = this._current.link;
    return this._current.value;
  };

  this.remove = function() {
    if (this._list.last == this._current) {
      this._list.last = this._current.link;
    }
    this._previous.link = this._current.next;
    this._current = this._previous;
    this._next = this._current.link;
    this._list.length -= 1;
  };

};
