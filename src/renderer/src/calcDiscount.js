export default (arr) => {
    let discount = 0;

    const sum = arr.reduce((count, el) => {
        count += el.count;
        return count
    }, 0)

    if (sum < 10000) discount = 0;
    else if (sum < 50000) discount = 5;
    else if (sum < 300000) discount = 10;
    else if (sum > 300000) discount = 15;

    return discount;
}