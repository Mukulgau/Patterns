// STAR PATTERNS

1. 
// *
// **
// ***
// ****
// *****

// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


2.
// *****
// ****
// ***
// **
// *
// let n = 1;
// let string = "";
// for(let i = 5; i >= n; i--) {
//   for(let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


3.
//     *
//    **
//   ***
//  ****
// *****
// let n = 5;
// let string = "";
// for(let i = 1; i <= n; i++) {
//   for(let j = 0; j < n - i; j++){
//     string += " ";
//   }
//   for(let k = 0; k < i; k++){
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


4.
// *****
//  ****
//   ***
//    **
//     *
// let n = 1;
// let string = "";
// for(let i = 5; i >= n; i--) {
//   for(let j = 5; j > i; j--){
//     string += " ";
//   }
//   for(let k = 0; k < i; k++){
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


5.
//     *  
//    * * 
//   * * *
//  * * * *
// * * * * *

// let n = 5;
// let string = "";
// for(let i = 1; i <= n ; i++){
//     for(let j =0;j<n-i;j++){
//         string +=" ";
//     }
//     for(let k = 0;k<i;k++){
//         string+="* ";
//     }
//     string+="\n";
// }
// console.log(string);


6.
// * * * * * 
//  * * * *
//   * * *
//    * *
//     *
// let n = 1;
// let string = "";
// for(let i = 5; i >= n ; i--){
//     for(let j =5;j>i;j--){
//         string +=" ";
//     }
//     for(let k = 0;k<i;k++){
//         string+="* ";
//     }
//     string+="\n";
// }
// console.log(string);


7.
// *****
// *****
// *****
// *****
// *****
// let string = "";
// for(let i = 1;i<=5;i++){
//     for(let j=0;j<5;j++){
//         string+="*";
//     }
//     string+="\n";
// }
// console.log(string);


8.
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// let string ="";
// for(let i=1;i<=5;i++){
//     for(let j=0;j<i;j++){
//         string+="*";
//     }
//     string+="\n";
// }
// for(let k=4;k>=1;k--){
//     for(let l=0;l<k;l++){
//     string+="*";
//     }
//     string+="\n";
// }
// console.log(string);


9.
//      *      
//     * *     
//    * * *    
//   * * * *   
//  * * * * *  
// * * * * * * 
//  * * * * *  
//   * * * *   
//    * * *    
//     * *     
//      *     
// let string ="";
// for(let i=1;i<=6;i++){
//     for(let j=0;j<6-i;j++){
//         string+=" ";
//     }
//     for(let k=0;k<i;k++){
//         string+="* ";
//     }
//     string+="\n";
// }
// for(let l=5;l>=1;l--){
//     for(let a=5;a>=l;a--){
//         string+=" ";
//     }
//     for(let b=0;b<l;b++){
//         string+="* ";
//     }
//     string+="\n";
// }
// console.log(string);


10.
//     *     
//    * *    
//   *   *   
//  *     *  
// *       *
// let string = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5 - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);


11.
//     *
//    ***
//   *****
//  *******
// *********
// let n = 5;
// let string = "";
// for(let a=1;a<=5;a++){
//     for(let b=0;b<5-a;b++){
//         string+=" ";
//     }
//     for(let c=0;c<2*a-1;c++){
//         string+="*";
//     }
//     string+="\n";
// }
// console.log(string);


12.
// *********
//  *******
//   *****
//    ***
//     *
// let string = "";
// for(let a=5;a>=1;a--){
//     for(let b=0;b<5-a;b++){
//         string+=" ";
//     }
//     for(let c=0;c<2*a-1;c++){
//         string+="*";
//     }
//     string+="\n";
// }
// console.log(string);


13.
//      *
//     **
//    ***
//   ****
//  *****
// ******
//  *****
//   ****
//    ***
//     **
//      *
// let string = "";
// for(let a=1;a<=6;a++){
//     for(let b=0;b<6-a;b++){
//         string+=" ";
//     }
//     for(let c=0;c<a;c++){
//         string+="*";
//     }
//     string+="\n";
// }
// for(let d=5;d>=1;d--){
//     for(let e=5;e>=d;e--){
//         string+=" ";
//     }
//     for(let f=0;f<d;f++){
//         string+="*";
//     }
//     string+="\n";
// }
// console.log(string);


14.
// *       * 
//  *     *  
//   *   *   
//    * *    
//     *     
// let string = "";
// for(let a=5;a>=1;a--){
//   for(let b=0;b<5-a;b++){
//     string+=" ";
//   }
//   for(let c=0;c<2*a-1;c++){
//     if(c===0 || c===2*a -2){
//       string+="*";
//     } else if(a===0) {
//       string+="*";
//     } else {
//       string+=" ";
//     }
//   }
//   string+="\n";
// }
// console.log(string)

15.
//    *   
//   * *
//  *   * 
// *     *
//  *   *
//   * *
//    *
// let string = "";
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 5 - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// for(let a=3;a>=1;a--){
//   for(let b=0;b<5-a;b++){
//     string+=" ";
//   }
//   for(let c=0;c<2*a-1;c++){
//     if(c===0 || c===2*a -2){
//       string+="*";
//     } else if(a===0) {
//       string+="*";
//     } else {
//       string+=" ";
//     }
//   }
//   string+="\n";
// }
// console.log(string);


16. 
// *********
// **** ****
// ***   ***
// **     **
// *       *
// let string ="";
// for(let i = 5; i >= 1; i--) {
//   for(let j = 0; j < i; j++){
//     string += "*";
//   }
//   for(let k = 5; k > i; k--){
//     string += "!";
//   }
//   string += "\n";
// }
// for(let a = 1; a <= 5; a++){
//   for(let b = 0; b < a - 1; b++){
//     string += "!";
//   }
//   for(let c = 5; c >= a; c--){
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);
// Incomplete


17.
// *       *
// **     **
// ***   ***
// **** ****
// *********


18. 
// ******
// *****
// ****
// ***
// **
// *
// **
// ***
// ****
// *****
// ******
// let string = "";
// for(let a = 5; a >= 1; a--){
//   for(let b = 0; b < a; b++){
//     string += "*";
//   }
//   string += "\n";
// }
// for(let a = 2; a <= 5; a++){
//   for(let b = 0; b < a; b++){
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);


19.
// *   *
//  * *
//   *
//  * *
// *   *
// let string = "";
// for(let a=3;a>=1;a--){
//   for(let b=0;b<5-a;b++){
//     string+=" ";
//   }
//   for(let c=0;c<2*a-1;c++){
//     if(c===0 || c===2*a -2){
//       string+="*";
//     } else if(a===0) {
//       string+="*";
//     } else {
//       string+=" ";
//     }
//   }
//   string+="\n";
// }
// for (let i = 2; i <= 3; i++) {
//   for (let j = 1; j <= 5 - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1) {
//       string += "*";
//     }
//     else {
//       if(k === 0 || k === 2 * i - 2) {
//         string += "*";
//       }
//       else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);



20.
// *    
// **
// * *
// *  *
// *****
// let string = "";
// for(let a = 1; a <= 5; a++){
//   for(let b = 0; b < a; b++){
//     if(a === 5) {
//       string += "*";
//     } else {
//       if(b === 0 || b === a - 1) {
//         string += "*";
//       } else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);


21. 
// *****
// *   *
// *   *
// *   *
// *****
// let string ="";
// for(let i = 1; i <= 5; i++){
//   for(let j = 0; j < 5; j++){
//     if(i == 1 || i == 5){
//       string += "*";
//     } else {
//       if(j == 0 || j == 4){
//         string += "*";
//       } else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);


22.
// *     *
// **   **
// *** ***
// *******
// *** ***
// **   **
// *     *




// NUMBERS PATTERNS

1. 
// 11111
// 22222
// 33333
// 44444
// 55555
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 0; j < 5 ; j++){
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);


2. 
// 12345
// 12345
// 12345
// 12345
// 12345
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= 5; j++){
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);


3.
// 55555
// 44444
// 33333
// 22222
// 11111
// let string = "";
// for(let i = 5; i >= 1; i--){
//   for(let j = 5; j >= 1; j--){
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);


4.
// 54321
// 54321
// 54321
// 54321
// 54321
// let string = "";
// for(let i = 5; i >= 1; i--){
//   for(let j = 5; j >= 1; j--){
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);


5. 
// 1
// 22
// 333
// 4444
// 55555
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 0; j < i; j++){
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);


6.
// 1
// 12
// 123
// 1234
// 12345
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= i; j++){
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);


7.
// 11111
// 2222
// 333
// 44
// 5
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 5; j >= i; j--){
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);


8.
// 12345
//  1234
//   123
//    12
//     1
// let string = "";
// for(let i = 5; i >= 1; i--){
//   for(let k = 5; k > i; k--){
//     string += " ";
//   }
//   for(let j = 1; j <= i; j++){
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);


9.
//     1
//    222
//   33333
//  4444444
// 555555555
// let string= "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 1; j <= 5 - i; j++){
//     string += " ";
//   }
//   for(let k = 0 ; k < 2 * i - 1; k++){
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);


10.
//     1
//    333
//   55555
//  7777777
// 999999999
// let string = "";
// for(let i = 1; i <= 9; i = i + 2){
//   for(let j = 1; j <= 9 - i; j = j + 2){
//     string += " ";
//   }
//   for(let k = 0 ; k < i; k++){
//     string += i;
//   }
//   string += "\n";
// }
// console.log(string);


11.
//     1
//    123
//   12345
//  1234567
// 123456789
// let string = "";
// for(let i = 1; i <= 9; i = i + 2){
//   for(let j = 1; j <= 9 - i; j = j + 2) {
//     string += " ";
//   }
//   for(let k = 1; k <= i; k++){
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);


12.
//     1 
//    321
//   54321
//  7654321
// 987654321
// let string = "";
// for(let i = 9; i >= 1; i -= 2){
//   for(let j = 1; j <= 9 - i; j += 2) {
//     string += "$";
//   }
//   for(let k = i; k <= 9 - i + 1; k--){
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);
// INCOMPLETE


13.
//     1 
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 0; j < 5 - i; j++){
//     string += " ";
//   }
//   for(let k = 0; k < i; k++){
//     string += `${i} `;
//   }
//   string += "\n";
// }
// console.log(string);


14.
// 5 5 5 5 5 
//  4 4 4 4
//   3 3 3
//    2 2
//     1
// let string = "";
// for(let i = 5; i >= 1; i--){
//   for(let j = 0; j < 5 - i; j++){
//     string += " ";
//   }
//   for(let k = 0; k < i; k++){
//     string += `${i} `;
//   }
//   string += "\n";
// }
// console.log(string);


15. 
//     1  
//    2 2
//   3 3 3
//  4 4 4 4
// 5 5 5 5 5
//  4 4 4 4
//   3 3 3
//    2 2
//     1
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 0; j < 5 - i; j++){
//     string += " ";
//   }
//   for(let k = 0; k < i; k++){
//     string += `${i} `;
//   }
//   string += "\n";
// }
// for(let i = 4; i >= 1; i--){
//   for(let j = 0; j < 5 - i; j++){
//     string += " ";
//   }
//   for(let k = 0; k < i; k++){
//     string += `${i} `;
//   }
//   string += "\n";
// }
// console.log(string);


16.
//     1     
//    2 2
//   3   3
//  4     4
// 5       5
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 0; j < 5 - i; j++){
//     string += " ";
//   }
//   for(let k = 0; k < 2 * i - 1; k++){
//     if(k === 0 || k === 2 * i - 2){
//       string += i;
//     } else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }
// console.log(string);


17.
// 5       5 
//  4     4
//   3   3
//    2 2
//     1
// let string = "";
// for(let i = 5; i >= 1; i--){
//   for(let j = 0; j < 5 - i; j++){
//     string += " ";
//   }
//   for(let k = 0; k < 2 * i - 1; k++){
//     if(k === 0 || k === 2 * i - 2){
//       string += i;
//     } else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }
// console.log(string);


18.
// 5
// 54
// 543
// 5432
// 54321
// 543210
// 54321
// 5432
// 543
// 54
// 5
// let string = "";
// for(let i = 1; i <= 6; i++) {
//   for(let j = 5; j > 5 - i; j--){
//     string += j;
//   }
//   string += "\n";
// }
// for(let i = 1; i <= 5; i++) {
//   for(let j = 5; j >= i; j--){
//     string += j;
//   }
//   string += "\n";
// }
// console.log(string);


19.
//      5
//     45
//    345
//   2345
//  12345
// 012345
//  12345
//   2345
//    345
//     45
//      5
// let string = "";
// for(let i = 5; i >= 0; i--) {
//   for(let j = 1; j <= i; j++){
//     string += "$";
//   }
//   for(let k = i; k > 5 - i + 1; k--){
//     string += k;
//   }
//   string += "\n";
// }
// console.log(string);
// INCOMPLETE


20.
//     1    
//    2 2
//   3   3
//  4     4
// 5       5
//  4     4
//   3   3
//    2 2
//     1
// let string = "";
// for(let i = 1; i <= 5; i++) {
//   for(let j = 5; j > i; j--){
//     string += " ";
//   }
//   for(let k = 0; k < 2 * i - 1; k++) {
//     if(i === 1){
//       string += i;
//     } else {
//       if(k === 0 || k === 2 * i - 2){
//         string += i;
//       } else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// for(let a=4;a>=1;a--){
//   for(let b=0;b<5-a;b++){
//     string+=" ";
//   }
//   for(let c=0;c<2*a-1;c++){
//     if(c===0 || c===2*a -2){
//       string += a;
//     } else if(a===0) {
//       string += a;
//     } else {
//       string+=" ";
//     }
//   }
//   string+="\n";
// }
// console.log(string);


21.
// 1   1
//  2 2
//   3
//  4 4
// 5   5
// let string = "";
// for(let i = 1; i <= 3; i++) {
//   for(let j = 1; j < i; j++){
//     string += "$";
//   }
//   for(let k = 1; k <= 2 * i - 1; k++){
//     if(k === 1 || k === 2 * i - 2){
//       string += "%";
//     } else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }
// console.log(string);
// INCOMPLETE


22.
// 1 
// 1 2
// 3 5 8
// 13 21 34 55
// 89 144 233 377 610
// let string = "";
// let count = 1;
// for(let i = 0; i < 5; i++) {
//   for(let j = 0; j <= i; j++) {
//     string += count;   
//   }
//   string += "\n";
// }
// console.log(string);
// INCOMPLETE


23.
// 1     7
// 12   67
// 123 567
// 1234567
// 123 567
// 12   67
// 1     7


24.
// 1    
// 22   
// 3 3  
// 4  4
// 55555
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 0; j < i; j++){
//     if(i === 5){
//       string += i;
//     } else {
//       if(j === 0 || j === i - 1){
//         string += i;
//       } else {
//         string += " ";
//       }
//     }
//   }
//   string += "\n";
// }
// console.log(string);


25.
// 1 
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15
// let string = "";
// let count = 1;
// for(let i = 1; i <= 5; i++) {
//   for(let j = 0; j < i; j++) {
//     string += count + " ";
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);


26.
//   1
//  234
// 56789
// let count = 1;
// let string = "";
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3 - i; j++) {
//     string += " ";
//   }
//   for (let k = 1; k <= 2 * i - 1; k++) {
//     string += count;
//     count++;
//   }
//   string += "\n";
// }
// console.log(string);



// ALBHABET PATTERNS

1.
// AAAAA
// BBBBB
// CCCCC
// DDDDD
// EEEEE
// let string = "";
// for(let i = 0; i < 5; i++) {
//   for(let j = 0; j < 5; j++) {
//     string += String.fromCharCode(i + 65);
//   }
//   string += "\n";
// }
// console.log(string);



2.
// A B C D E 
// A B C D E
// A B C D E
// A B C D E
// A B C D E
// let string = "";
// for(let i = 0; i < 5; i++) {
//   for(let j = 0; j < 5; j++) {
//     string += String.fromCharCode(j + 65) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


3.
// E E E E E 
// D D D D D
// C C C C C
// B B B B B
// A A A A A
// let string = "";
// for(let i = 4; i >= 0; i--){
//   for(let j = 0; j < 5; j++){
//     string += String.fromCharCode(i + 65) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


4.
// E D C B A 
// E D C B A
// E D C B A
// E D C B A
// E D C B A
// let string = "";
// for(let i = 1; i <= 5; i++){
//   for(let j = 4; j >= 0; j--){
//     string += String.fromCharCode(j + 65) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


5.
// A 
// B B
// C C C
// D D D D
// E E E E E
// let string = "";
// for(let i = 0; i <= 4; i++) {
//   for(let j = 0; j <= i; j++) {
//     string += String.fromCharCode(i + 65) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


6.
// A 
// A B
// A B C
// A B C D
// A B C D E
// let string = "";
// for(let i = 1; i <= 5; i++) {
//   for(let j = 0; j < i; j++) {
//     string += String.fromCharCode(j + 65) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


7.
// E E E E E 
// D D D D
// C C C
// B B
// A
// let string = "";
// for(let i = 4; i >= 0; i--){
//   for(let j = 0; j <= i; j++){
//     string += String.fromCharCode(i + 65) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


8.
// E E E E E 
// D D D D
// C C C
// B B
// A
// let string = "";
// for(let i = 4; i >= 0; i--){
//   for(let j = 0; j <= i; j++){
//     string += String.fromCharCode(i + 65) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


9.
// A A A A A 
// B B B B
// C C C
// D D
// E
// let string = "";
// for(let i = 0; i <= 4; i++){
//   for(let j = 4; j >= i; j--){
//     string += String.fromCharCode(i + 65) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


10.
// E D C B A 
// E D C B
// E D C
// E D
// E
// let string = "";
// for(let i = 0; i <= 4; i++) {
//   for(let j = 4; j >= i; j--){
//     string += String.fromCharCode(j + 65) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


11.
// A
// BB
// CCC
// DDDD
// EEEEE
// let string = "";
// for(let i = 0; i <= 4; i++) {
//   for(let j = 0; j <= i; j++) {
//     string += String.fromCharCode(i + 65);
//   }
//   string += "\n";
// }
// console.log(string);


12.
// A
// AB
// ABC
// ABCD
// ABCDE
// let string = "";
// for (let i = 0; i <= 4; i++) {
//   for(let j = 0; j <= i; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);


13.
// ABCDE
//  ABCD
//   ABC
//    AB
//     A
// let string ="";
// for(let i = 1; i <= 5; i++) {
//   for(let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for(let k = 0; k < 5 - i + 1; k++) {
//     string += String.fromCharCode(k + 65)
//   }
//   string += "\n";
// }
// console.log(string);


14.
// ABCDE
//  ABCD
//   ABC
//    AB
//     A
// let string ="";
// for(let i = 1; i <= 5; i++) {
//   for(let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for(let k = 0; k < 5 - i + 1; k++) {
//     string += String.fromCharCode(k + 65)
//   }
//   string += "\n";
// }
// console.log(string);


15.
//     A
//    BBB
//   CCCCC
//  DDDDDDD
// EEEEEEEEE
// let string = "";
// for(let i = 1; i <= 5; i++) {
//   for(let j = 4; j >= i; j--) {
//     string += " ";
//   }
//   for(let k = 0; k < 2 * i - 1; k++) {
//     string += String.fromCharCode(i - 1 + 65);
//   }
//   string += "\n";
// }
// console.log(string);


16.
// EEEEEEEEE
//  DDDDDDD
//   CCCCC
//    BBB
//     A
// let string = "";
// for(let i = 5; i >= 1; i--){
//   for(let j = 5; j > i; j--){
//     string += " ";
//   }
//   for(let k = 0 ; k < 2 * i - 1; k++){
//     string += String.fromCharCode(i - 1 + 65);
//   }
//   string += "\n";
// }
// console.log(string);


17.
// F
// FE
// FED
// FEDC
// FEDCB
// FEDCBA
// FEDCB
// FEDC
// FED
// FE
// F
// let string = "";
// for(let i = 6; i >= 1; i--) {
//   for(let j = 6; j >= i; j--) {
//     string += String.fromCharCode(j - 1 + 65);
//   }
//   string += "\n";
// }
// for(let a = 1; a <= 5; a++) {
//   for(let b = 5; b >= a; b--) {
//     string += String.fromCharCode(b + 65);
//   }
//   string += "\n";
// }
// console.log(string);


18.
// F
// EF
// DEF
// CDEF
// BCDEF
// ABCDEF
// BCDEF
// CDEF
// DEF
// EF
// F
// let string = "";
// for(let i = 6; i >= 1; i--) {
//   for(let j = 1; j <= 6 - i + 1; j++) {
//     string += String.fromCharCode(j + 65);
//   }
//   string += "\n";
// }
// console.log(string);


19.
//      A 
//     B B
//    C C C
//   D D D D
//  E E E E E
// F F F F F F
//  E E E E E
//   D D D D
//    C C C
//     B B
//      A
// let string = "";
// for(let i = 1; i <= 6; i++) {
//   for(let k = 5; k >= i; k--){
//     string += " ";
//   }
//   for(let j = 0; j < i; j++) {
//     string += String.fromCharCode(i + 64) + " ";
//   }
//   string += "\n";
// }
// for(let a = 5; a >= 1; a--){
//   for(let b = 5; b >= a; b--){
//     string += " ";
//   }
//   for(let c = 1; c <= a; c++){
//     string += String.fromCharCode(a + 64) + " ";
//   }
//   string += "\n";
// }
// console.log(string);


20.
// E       E 
//  D     D
//   C   C
//    B B
//     A    
// let string = "";
// for(let i = 5; i >= 1; i--) {
//   for(let j = 5; j > i; j--) {
//     string += " ";
//   }
//   for(let k = 0; k < 2 * i - 1; k++) {
//     if(k === 0 || k === 2 * i - 2){
//       string += String.fromCharCode(i + 64);
//     } else {
//       string += " ";
//     }
//   }
//   string += "\n";
// }   
// console.log(string);


// EXAMPLE CODE
// for(let i = 65; i <= 90; i++){
//   console.log(String.fromCharCode(i));
// }

// console.log(String.fromCharCode(65));
// console.log(String.fromCharCode(66));
// console.log(String.fromCharCode(67));
// console.log(String.fromCharCode(68));
// console.log(String.fromCharCode(69));
// console.log(String.fromCharCode(70));