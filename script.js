function indexOfIgnoreCase(str, subStr) {
    // Edge case: if subStr is empty, it is always found at index 0
    if (subStr === "") return 0;
    
    // Convert both strings to lowercase
    let lowerStr = str.toLowerCase();
    let lowerSubStr = subStr.toLowerCase();
    
    // Use indexOf to find the first occurrence of lowerSubStr in lowerStr
    return lowerStr.indexOf(lowerSubStr);
}

// Example usage:
console.log(indexOfIgnoreCase("Hello World", "world")); // Output: 6
console.log(indexOfIgnoreCase("apple", "Ple"));         // Output: 2
console.log(indexOfIgnoreCase("test", "aaa"));    
// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
