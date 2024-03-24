let array = [400, 122, 132, 111, 1100, 688, 900];

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] < array[j + 1]) {
            
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}

console.log(array.join(', '));
