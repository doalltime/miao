class ListedList {
  constructor() {
    this.head = null
  }

  get(idx) {
    var p = this.head
    while (idx > 0 && p) {
      p = p.next
      idx--
    }
    if (p) {
      return p.val
    } else {
      return undefined
    }
  }

  set(idx, val) {
    var node = {
      val : val,
      next : null,
    }
    if (!this.head) {
      this.head = node
      return head
    }

    var p = this.head
    while (idx > 0 && p.next) {
      p = p.next
      idx--
    }
    if (idx > 0) {
      p.next = node
    } else {
      p.val = val
    }
    return head
  }

  push(val) {
    var node = {
      val : val,
      next : null
    }

    var p = this.head

    if (!p) {
      this.head = node
      return this.head
    }
    while (p.next) {
      p = p.next
    }
    p.next = node
    return this.head
  }

  pop() {
    var p = this.head

    if (!p) {
      return undefined
    }
    if (!p.next) {
      this.head = null
      return undefined
    }

    while (p.next.next) {
    var p = p.next
    }
    var k = p.next
    p.next = null
    return k
  }

  unshift(val) {
    var node = {
      val : val,
      next : null,
    }

    node.next = this.head
    this.head = node
    return this.head
  }

  shift() {
    var p = this.head

    if(!p) {
      return undefined
    }

    if (!p.next) {
      this.head = null
    } else {
      this.head = p.next
    }
    p.next = null
    return p
  }

  toArray() {
    var result = []
    var p = this.head
    while (p) {
      result.push(p.val)
      p = p.next
    }
    return result
  }

  toString() {
    var result = ''
    var p = this.head
    while (p) {
      result = result + p.val + '->'
      p = p.next
    }
    return result
  }
}

class Collection {
  constructor(initalValues) {
    this.elements = []
    for (var item of initalValues) {
      if (!this.elements.includes(item)) {
        this.elements.push(item)
      }
    }
  }

  add(item) {
    if (this.elements.includes(item)) {
      return false
    } else {
      this.elements.push(item)
      return this
    }
  }

  delete(item) {
    var idx = this.elements.indexOf(item)
    if (idx >= 0 ) {
      this.elements.splice(idx , 1)
    }
    return this
  }

  has(item) {
    if (this.elements.includes(item)) {
      return true
    } else {
      return false
    }
  }

  get size() {
    return this.elements.length
  }

  clear() {
    this.elements = []
    return this
  }
}

class Stack {
  constructor() {
    this.elements = []
  }

  in(val) {
    this.elements.push()
  }

  out() {
    this.elements.pop()
  }

  peek() {
    return this.elements[this.size() - 1]
  }

  get size() {
    return this.elements.length
  }
}

class Map {
  constructor() {
    this._pairs = []
  }

  set(key, val) {
    this._pairs.push(key, val)
  }

  get(key) {
    for (var i = 0 ; i < this._pairs.length; i+=2) {
      if (this._pairsp[i] === key) {
        return this._pairs[i + 1]
      }
    }
  }

  has(key) {
    for (var i = 0 ; i < this._pairs.length; i+=2) {
      if (this._pairsp[i] === key) {
        return true
      }
    }
  }

  delete(key) {
    for (var i = 0 ; i < this._pairs.length; i+=2) {
      if (this._pairsp[i] === key) {
        this._pairs.splice(i , 2)
      }
    }
    return this
  }

  clear() {
    this._pairs = []
    return this
  }

  get size() {
    return this._pairs.length / 2
  }

  forEach(iterator) {
    for (var i = 0 ; i < this._pairs.length; i+=2) {
      iterator(this._pairs[i + 1] , i)
      }
  }
}

class Queue {
  constructor() {
    this._head = null
    this._tail = null
    this._length = 0
  }

  in(val) {
    this._length++
    var node = {
      val : val,
      next : null,
    }
    if (!_tail) {
      this._head = node
      this._tail = node
    } else {
      this._tail.next = node
      this._tail = node
    }
    return this
  }

  out() {
    var result = this._head
    if (!retult) {
      return undefined
    }
    this._length--
    this._head = this._head.next
    if (!this.head) {
      this._tail = null
    }
    return result
  }

  peek() {
    return this.head
  }

  get size() {
    return this._length
  }
}