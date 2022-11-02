function swap(nlist) {
    var len = nlist.length;
    var temp = nlist[0];
    nlist[0] = nlist[len - 1];
    nlist[len - 1] = temp;
    return nlist;
}
