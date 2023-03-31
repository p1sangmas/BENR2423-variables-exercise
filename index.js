let data1 = 1
let data2 = "1.25"
console.log(data1, typeof data2)
console.log(data2, typeof data2)

let data3 = data1 + parseFloat(data2)
console.log(data3, typeof data3)

// Array

let data = ["one", 2, true]
console.log(data[2], typeof data[2])

// Object

let user = {
    name: "fakhrul",
    faculty: "fkekk",
    phone: {
        office : "012345",
        mobile : "678910"
    },
    email: "fakhrul@gmail.com"
}

console.log(user.phone)
console.log(user.phone.mobile)
console.log(user.phone.home)