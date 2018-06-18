// Given an encoded string, return its corresponding decoded string. 
// The encoding rule is: k[encoded_string], 
// where the encoded_string inside the square brackets is repeated exactly k times. 
// Note: k is guaranteed to be a positive integer. 
// For s = "4[ab]", the output should be decodeString(s) = "abababab" 
// For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

function decodeString(s) {
    // var decoded = s.replace(/[\[\]']+/g, "");
    // var arr;
    // for (var i = 0; i < decoded.length; i++) {
    //     if (typeof (Number(decoded[i])) === "number") {
    //         arr =+ decoded[i];
    //         console.log(decoded[i] + " " + typeof(Number(decoded[i])))
    //     }
    // }
    
    // console.log(arr)
    var arr = s.split("")
    var newArr = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === "[" || s[i] === "]")  {
            newArr.push(arr.slice(0, s[i +1]))
        } 
    }
    // for loop for [4, [ab]]
    // if statement to get the index with the nested array
    // in the conditional there will be another loop 


    console.log(newArr)
}
decodeString("4[ab]")