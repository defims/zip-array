var ziparray = require("./index")
ziparray([[1,2], [10, 20], [100, 200]], function(array) {
    console.log(
        JSON.stringify(array)
        ===
        "[[1,10,100],[2,20,200]]"
        ? "[pass]" : "[fail]",

        "[[1, 2], [10, 20], [100, 200]]",
        "=>",
        "[[1, 10, 100], [2, 20, 200]]",
        "in cps way"
    )
})
var array; ziparray([[1,2], [10, 20], [100, 200]], function(v){array = v})
console.log(
    JSON.stringify(array)
    ===
    "[[1,10,100],[2,20,200]]"
    ? "[pass]" : "[fail]",

    "[[1, 2], [10, 20], [100, 200]]",
    "=>",
    "[[1, 10, 100], [2, 20, 200]]",
    "in simulation way"
)
