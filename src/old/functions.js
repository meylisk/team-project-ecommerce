export function binarySearch(arr, numb){
    if (typeof(numb) !== "number") return -1

    for (let i in arr){
        if (arr[i] === numb) return Number(i)
    }
    return -1
}

