function min(Array){
	if(Array===undefined){
	return;
	} else {
		var minEl;
		for(var i=0;i<Array.length;i++){
 			if (typeof Array[i] == 'number'){
   				if (minEl===undefined ){
     			minEl = Array[i];
    			 continue;
   				}
   			if(minEl>=Array[i]){
    		console.log(minEl)
  			minEl=Array[i];}
  			}
			
		}
		return minEl;
	}
}

function max(Array){
	if(Array===undefined){
	return;
	} else {
		var maxEl=Array[0];
		for(var i=0;i<Array.length;i++){
			if(Array[i]>=maxEl)
			maxEl=Array[i]
		}
		return maxEl;
	}
}

function sum(){
	if(arguments===undefined){
	return;
	} else {
		var summ=0;
		for(var i=0;i<arguments.length;i++){
			if(typeof arguments[i] !== 'number')
			continue;
			summ+=arguments[i];
		}
		return summ;
	}
}


console.log(min([]));
console.log(max());
console.log(sum());
