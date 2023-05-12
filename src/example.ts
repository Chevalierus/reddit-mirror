/*1*/

function concat(left:string, right:string):string {
    return left + " " + right
}

const concatResult = concat("Hello", 'world')
console.log(concatResult)

/*2*/

const MyHometask = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

interface MyInterface {
    howDoIt: string;
    simeArray: (string | number)[] ;
    withData: object[];
}

const obj: MyInterface = {
    howDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],
}

const valueObj = obj.withData
console.log(valueObj)

/*3*/

const myArray:MyArray<number> = [1, 2, 3]

interface MyArray<T> {
    [N: number]: T;
    
    reduce<U>(
        callback: (state: U, el: T, index: number, myArray: T[]) => U,
        initialValue?: U
    ): U;
}
let initialValue = 0
let res = myArray.reduce<number>((acc, val) => {
    return acc + val;
}, initialValue)

console.log(res)


/*4*/

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type TObjKeys = keyof IHomeTask
type commitType = IHomeTask['externalData']

type MyPartial<T> = {
    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}
