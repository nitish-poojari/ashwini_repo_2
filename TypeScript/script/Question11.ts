function swap(nlist: any): void {
    const len = nlist.length
    let temp = nlist[0]
    nlist[0] = nlist[len - 1]
    nlist[len - 1] = temp
    return nlist
}