
export function copyArray(arr) {
    let arr2 = [...arr];
    return arr2;
}
export function concat(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3;
}
export function findMin(...numbers) {
    let min = numbers[0];
    if (numbers.length > 0) {
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < min) {
            min = numbers[i];
            }
            min = min;
        }
        return min;
    }
}
export function combineObjs(obj1, obj2) {
    const obj3 = { ...obj1, ...obj2 };
    return obj3;
}