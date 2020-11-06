// Given a string s that represents a special encoding, return the total ways that s can be decoded.

// The mapping is like so:
// 1 -> "a"
// 2 -> "b"
// 3 -> "c"
// ...
// 12 -> "l"
// 13 -> "m"
// 14 -> "n"
// ...
// 22 -> "v"
// 23 -> "w"
// 24 -> "x"
// 25 -> "y"
// 26 -> "z"

// Input: "123"
// Output: 3
// Explanation:
// There are 3 possible valid & complete decodings:
// 1.) ["1", "2", "3"] =>["a", "b", "c"]
// 2.) ["12", "3"] => ["l", "c"]
// 3.) ["1", "23"] => ["a", "w"]

// each number has to be less than 26 