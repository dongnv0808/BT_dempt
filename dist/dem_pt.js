"use strict";
let arrList = [5, 2, 2, 3, 3, 6, 6, 6, 8, 4, 4, 1, 1];
function countItem(arrList, item) {
    let count = 0;
    for (let i = 0; i < arrList.length; i++) {
        if (item == arrList[i]) {
            count++;
        }
    }
    return count;
}
let item = 6;
let count = countItem(arrList, item);
if (count !== 0) {
    console.log(`Phan tu ${item} xuat hien ${count} lan trong mang`);
}
else {
    console.log(`Phan tu ${item} khong ton tai trong mang`);
}
arrList.sort();
function countBinaruSearch(arr, item) {
    let count = 0;
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        if (item == arr[mid]) {
            count++;
            high = mid - 1;
        }
        else if (item < arr[mid]) {
            high = mid - 1;
        }
        else {
            low = mid + 1;
        }
    }
    return count;
}
let count1 = countItem(arrList, item);
if (count1 !== 0) {
    console.log(`Phan tu ${item} xuat hien ${count1} lan trong mang`);
}
else {
    console.log(`Phan tu ${item} khong ton tai trong mang`);
}
