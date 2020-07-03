function findMinAndRemove(array){
    let smallest = array[0];
    let index = 0;

    for(let i = 1; i < array.length; i++) {
        if(array[i] < smallest) {
            smallest = array[i];
            index = i;
        };
    };

    array.splice(index, 1);
    return smallest;
}

function insertionSort(array){
    let newMin;
    let sorted = [];
    while (array.length != 0) {
      newMin = findMinAndRemove(array);
      sorted.push(newMin);
    }
    
    return sorted;
}
