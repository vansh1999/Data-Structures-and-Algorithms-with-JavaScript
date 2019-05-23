// first algorithm

// greatest common divisor

function gcd(a,b){
  
divisor = 2
greDiv = 1
  
  if(a < 2 || b < 2){
    return 1;
  }
  
  
while(a>= divisor && b>=divisor){
  if(a %divisor == 0 && b% divisor ==0){
    greDiv = divisor
  }
   divisor++
}
  return greDiv
  
}

console.log(gcd(16,36))

// problem - 2 
// program to remove dublicate numbers from array

arr = [4.5,5.6,4.5]

function dubli(arr){
  
  let finalArr =[]
  let present = []
  
  for(i=1;i<arr.length;i++){
    
    
    y = arr[i]
    
    
    
    if(!present[y]){
      
      finalArr.push(y)
      
      present[y] = true
      
    }
  }
  
  return finalArr
  
  
}

console.log(dubli(arr))


// problem - 3
// merge two SORTED list
a = [5,9,12]
b = []

function mergeArr(a,b){
  
  aElm = a[0]
  bElm = b[0]
  i =1
  j =1
  merged = []
  
  if(a.lenght == 0)
    return b
    
  if(b.length ==0)
    return a

    
  while(aElm || bElm){
    if((aElm && !bElm) || (aElm < bElm) ){
      merged.push(aElm)
      aElm = a[i++]
    }else{
       merged.push(bElm)
       bElm = b[i++]
    }
  }
  
  return merged  
  
  
}

console.log(mergeArr(a,b))


// problem - 4 -- reverse string
// using loop and concatenate a new string

function revStr(string){

 var rev = ''

for(i= string.length -1  ; i >= 0 ; i--){
  
  rev += string[i]
  
}

 return rev
}

console.log(revStr('vansh')) 


// using recursion

function reverse(str){
  
  if(str.length == 0){
    return ''
  }else{
    
    return reverse(str.substr(1)) + str.charAt(0)
    
  }
    
    
}

console.log(reverse('vansh'))

// problem - 5
// reverse word in string 

function reverseWords(str){
 var rev = [], 
     wordLen =0
     
 for(i = str.length -1 ; i >= 0; i--){
     if(str[i] == ' ' || i == 0){
       
       rev.push(str.substr(i , wordLen + 1))
       wordLen =0
       
     }else{
       wordLen++
     }
   }
  return rev.join(' ')
}
  
console.log(reverseWords('my name is vansh bhardwaj gta'))

// problem -6
// reverse letters not word in string

function rev(str){
  
  return str.split(' ').reverse().join(' ').split('').reverse().join('')
  
}


console.log(rev('my name is vansh bhardwaj'))

// problem - 7
// to check first non repeating character in string


function checkChar(str){
  
  len = str.length
  charCount = []
  var char
  
  for(i = 0; i < len ; i++){
    char = str[i]
    
    if(charCount[char]){
      charCount[char]++
    }else{
      charCount[char] = 1
    }
  }
  
  for (var j in charCount){
    
    if(charCount[j] == 1){
      return j
    }
  }
  
 }
console.log(checkChar('the quick brown fox jumps then quickly blow air'))

// problem - 8
// // remove dublicate char from string if there any
function removeDub(str){
  
  len = str.length
  charCount = []
  var char
  newStr = []
  
  
  for(i =0; i < len; i++){
    char = str[i]
    
    if(charCount[char]){
      charCount[char]++
    }else{
      charCount[char] = 1
    }
    }
  
  for(var j in charCount){
    if(charCount[j] == 1){
      newStr.push(j)
    }
  }
  
  return newStr.join('')
  
  
  
}
 
console.log(removeDub('Learn more javascript dude'))

// problem - 9

// check palindrome

function checkPal(str){
  
 if(str == str.split('').reverse().join()){
    return true
    } else{
    return false
  }
   
}

console.log(checkPal('vansh'))


// problem -10
// random number from 1 to 5

function rand5(){
  return Math.ceil(Math.random() * 5)
}

console.log(rand5())
// problem - 11
// to check in array if two element add to number given

arr = [5,4,6,1]

function sumFind(arr, number){
  len = arr.length
  
  
  for(i=0; i < len - 1; i++){
    for(j = i +1 ;j< len; j++){
      if(arr[i] + arr[j] == number){
        return true
      }
    }
  }
  return false
}


console.log(sumFind([5,4,6,1],7))

//problem - 12

// find the sum of largest number in array


function findBig(arr){
  
  biggest = arr[0]
  second = arr[1]
  i = 2
  
  
  len = arr.length
  
  if(len < 2) return null
  
  if(biggest < second){
    biggest = arr[1]
    second = arr[0]
  }
  
  for(i=0; i < len; i++) {
    if(arr[i] > biggest){
      second = biggest
      biggest = arr[i]
    }
    else if(arr[i] > second){
      second = arr[i]
    }
  }
  
  return biggest + second
  
}

console.log(findBig([3,5,6,2,60,4,6,10,9]))


// problem - 13
// position of substring in string
// eg - ab in abdfdsf - 0

function func(str, subStr){
 
    var idx = 0,
    i = 0,
    j= 0 ,
    leng = str.length
    subLen = subStr.length
    
    for(i=0; i < leng; i++){
      
      if(str[i] == subStr[j])
        j++
      else 
        j = 0
            
      // index of substr
      if(j==0)
        idx = i
      
      // if whole substr 
      else if (j == subLen)
        return idx
      
    }
  return -1
  
}

console.log(func('bbcdabbbbbck', 'ab'))










