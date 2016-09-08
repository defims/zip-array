var zip_array = require("./index")
zip_array([[1,2], [10, 20], [100, 200]], function(array) {
    console.log(
        JSON.stringify(array)
        ===
        "[[1,10,100],[2,20,200]]"
        ? "[pass]" : "[fail]",

        "([[1, 2], [10, 20], [100, 200]], callback)",
        "=>",
        "callback([[1, 10, 100], [2, 20, 200]])"
    )
})
