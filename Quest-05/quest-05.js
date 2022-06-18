function reverse(arr) {
    var o = '';
    for (var i = arr.length - 1; i >= 0; i--) {
        o += arr[i];
    }
    return o;
}
console.log(reverse("Kenkujako"));