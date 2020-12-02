filter_list = function(array){
	arr = []
	for (var i = 0; i <= array.length; i++) {
	
	  if (typeof array[i] == "number"){
		arr.push(array[i])
		}

	}


	return arr
}


console.log(filter_list([1,2,'a','b']));
console.log(filter_list([1,'a','b',0,15]))
console.log(filter_list([1,2,'aasf','1','123',123]))

//-------------------------------------


function first_non_repeating_letter(string) {
	string_original=string;
	string=string.toLowerCase();
  for (var i = 0; i < string.length; i++) {
    var c = string.charAt(i);
    if (string.indexOf(c) == i && string.indexOf(c, i + 1) == -1) {
      return string_original[string.indexOf(c)];
    }
  }
  return null;
}

var someString = 'sTreSS';
console.log(first_non_repeating_letter(someString))


//-------------------------------------

function digital_root(number) {
   let sum = number
   let arr = []
   let reducer = (a,b) => parseInt(a) + parseInt(b)

   while (sum > 9) {
      arr = sum.toString().split("")
      sum = arr.reduce(reducer)
   }

   console.log(sum) 
}





digital_root(16)
digital_root(942)
digital_root(132189)
digital_root(493193)


//-------------------------------------

function target_sum_of_two(arr, target){
	var result = [];

	for (var i = 0; i < arr.length; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			if (arr[i] + arr[j] === target) {
				result.push([i,j]);
				}
		}
	}
	return result;
}
console.log(target_sum_of_two([1, 3, 6, 2, 2, 0, 4, 5], 5));



//-------------------------------------
//-------------------------------------
function requested_pairs(s){
	s = s.toUpperCase()
	s += ';'
	cur_str=''
	pairs=[]
	pairs_one=[]
	pairs_two=[]
	for(var i =0; i<s.length;i++){
		c=s[i]
	    if (c!=':' && c!=';') {
	    	cur_str+=c
	    }
	    else{
	    	if(c==':'){
	    		pairs_one.push(cur_str)
	    		cur_str=''
	    	}
	    	if(c==';'){
	    		pairs_two.push(cur_str)
	    		cur_str=''
	    	}
	    }
		}
	for(var i =0; i<pairs_one.length;i++){
		pairs[i]='('+pairs_two[i]+','+pairs_one[i]+')'

	}


	answer = pairs.sort()

	return answer;
}


s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjorn:Tornbull;Rahphael:Corwill;Alfred:Corwill";

console.log(requested_pairs(s))


//-------------------------------------



function nextBigger(n){
  var d = n.toString().split('');

  // find the pivot, the point (from right) where i > i-1
  var p = -1;
  for (var i = d.length-1; i > 0; i--) {
    if (+d[i] > +d[i-1]) {
      p = i-1;
      break;
    }
  }

  // if we are unable to find the pivot, skip
  if (p == -1) return p;

  // splice the digits in the pivot
  var right = d.splice(p);

  // extract pivot
  var pv = right.splice(0, 1)[0];

  // find the lowest number > pv
  var mm = null, mmi = null;
  for (var i = 0; i < right.length; i++) {
    if (right[i] > pv) {
      if (mm == null || right[i] < mm) {
        mm = right[i];
        mmi = i;
      }
    }
  }

  if (mmi == null) return -1;

  right.splice(mmi, 1);
  right.push(pv);
  right = right.sort();

  // concat the left + new pivot + right part
  var ret = +d.concat([mm]).concat(right).join('');
  if (ret < n) return -1;

  return ret;
}


console.log(nextBigger(12))
console.log(nextBigger(513))
console.log(nextBigger(2017))
console.log(nextBigger(9))
console.log(nextBigger(111))

//-------------------------------------
//-------------------------------------
function int2ip (ipInt) {
    return ( (ipInt>>>24) +'.' + (ipInt>>16 & 255) +'.' + (ipInt>>8 & 255) +'.' + (ipInt & 255) );
}

console.log(int2ip(2149583361))
console.log(int2ip(0))
console.log(int2ip(32))




