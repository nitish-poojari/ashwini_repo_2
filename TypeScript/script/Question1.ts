class MyArray {
  collection: any[] = []
  add(value: string | number) {
    this.collection.push(value)
  }
  remove(value: string | number) {
    const index = this.collection.indexOf(value)
    return this.collection.splice(index, 1)
  }
  getValues() {
    return this.collection
  }
}