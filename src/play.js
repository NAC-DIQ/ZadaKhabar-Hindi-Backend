// // nums =[2,7,11,15]
// //target=9
// //var i;
// // var isPalindrome = function(x) {
// //     var p=0,q=0,r=x
// //     while(x>0){
// //         q=(x%10)
// //         x=parseInt(x/10)
// //         p=p*10+q
// //     }
// //     if(r===p){
// //         return true
// //     }
// //     else 
// //     return false
    
// // };
// // console.log(isPalindrome(121))
// class Stack {
 
//     // Array is used to implement stack
//     constructor()
//     {
//         this.items = [];
//     }
 
//     // Functions to be implemented
//     // push(item)
//     // pop()
//     // peek()
//     // isEmpty()
//     // printStack()

//     push(element)
// {
//     // push element into the items
//     this.items.push(element);
// }
// pop()
// {
//     // return top most element in the stack
//     // and removes it from the stack
//     // Underflow if stack is empty
//     if (this.items.length == 0)
//         return "Underflow";
//     return this.items.pop();
// }
// isEmpty()
// {
//     // return true if stack is empty
//     return this.items.length == 0;
// }
// printStack(){
//     var str = "";
//     for (var i = 0; i < this.items.length; i++)
//         str += this.items[i] + " ";
//     return str;
// }
// peek()
// {
//     // return the top most element from the stack
//     // but does'nt delete it.
//     return this.items[this.items.length - 1];
// }
// }
// var stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// while(!stack.isEmpty()){
// console.log(stack.pop())
// }
// console.log(stack.isEmpty())
// var isValid = function(s) {
//    // console.log(s)
//     let j=1;
//     //console.log(s);
//       for(let i=0;j<s.length;i+=2){
//         console.log(s[i]+s[j]+".....");
//           if(s[i]+s[j]!=="()" && s[i]+s[j]!=="{}" && s[i]+s[j]!=="[]"){
//              // console.log((s[i]+s[j])==="()");
              
//               return false;
//           }
//           j+=2;
//       }
//       return true;
// };
 
var isValid = (s,stack = []) => {
    const map = {
        '}' : '{',
        ')' : '(',
        ']' : '[',
    };
    

    for(const char of s ){
        
        const isBracket = (char in map)
        if (!isBracket){
            stack.push(char);
            continue;}
            console.log(stack)

        const isEqual = (stack[stack.length - 1] === map[char]);
        if(isEqual){
            stack.pop();
            continue;}

        return false;
    }
    return (stack.length === 0);
}
console.log(isValid(("{[]}")))
