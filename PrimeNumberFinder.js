let a=1
let x=2
let d=3
let e=0
let PRIMES=[]
let HEX_PRIMES=[]
while (e<700){
    if (d==0){
        console.log("INSERT INTO data (ID,PRIMES,PRIMES_HEX) VALUES ("+(e+1)+"," + a+ ","+"'"+a.toString(16).toUpperCase()+"'"+");")
        e++
    }
    a++
    d=0
    x=2
    while (x<a){
        if (a%x==0){
            x++
            d=1

        }
        else{x++}
    }
}
//console.log(PRIMES)
//console.log(HEX_PRIMES)

//"INSERT INTO data (PRIMES,PRIMES_HEX) VALUES (" + 11+ ","+B+");"