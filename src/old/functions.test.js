import {binarySearch} from "./functions"

test("binary search", function (){
    const inputArr = [1,2,3,4,5]
    const inputNumb = 3
    const outputResult = 2

    expect(binarySearch(inputArr, inputNumb)).toBe(outputResult)
})