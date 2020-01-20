const add = (a, b) => {
    return a + b;
};
console.log(add(55,1));

const user = {
    name: 'Mai Gohara',
    cities:['Tokyo','New York', 'Vancouver'],
    printPlaceLived(){
        const cityMessages = this.cities.map((city) => {
            return city + '!';
        });
        return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + 'has lived in ' + city);
        // });
    }
};
console.log(user.printPlaceLived());


const multiplier = {
    nums:[1,2,3,4,5],
    num6:6,
    printNumArr(){
        this.nums.map((num) => {
            return num * this.num6;
        });
    }
};

console.log('[' + multiplier.nums + ']' + ' ' + multiplier.num6 + ' ' + '[' + multiplier.printNumArr() + ']');