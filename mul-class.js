function mul3(x) {
    return function(y) {
        return function(z) {
            return x*y*z
        }
    }
}

var result = mul3(4)(3)(4)
console.log(result)
