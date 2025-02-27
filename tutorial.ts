// Initial Setup
// TypeScript is a superset of JavaScript that adds optional static typing and other features to improve the development experience.
// It helps catch errors early and improves code maintainability, thus making it a popular choice for large and complex applications.




// Annotiation
// Annotations, or type annotations, are used in TypeScript to specify the type of a variable, function parameter, or return value.
// They help TypeScript understand the expected types and provide better code completion, error checking, and documentation.
// Annotations are optional but highly recommended for maintaining clarity and preventing type-related errors.

let id: number = 5; // Specify that 'id' is a number
let company: string = "Jasmin"; // Specify that 'company' is a string
let isPublished: boolean = true; // Specify that 'isPublished' is a boolean
let objects: {} = { "ee": "dd", "ddd": "fdf" }; // Specify that 'objects' is an object (though it's better to use interfaces for complex objects)
let ids: number[] = [1, 2, 3, 4, 5]; // Specify that 'ids' is an array of numbers
let x: any = "dharan"; // Specify that 'x' can be of any type (avoid using 'any' unless necessary)
let xArr: any[] = ["dharanidharan", 0, true] // Specify that 'xArr' is an array that can contain any type

// Explanation:
// - The `id`, `company`, and `isPublished` variables are annotated with their respective types.
// - The `objects` variable is annotated as an empty object type `{}`. For more complex objects, interfaces are recommended.
// - The `ids` array is annotated as an array of numbers.
// - The `x` and `xArr` variables are annotated with the `any` type, which allows them to hold any type of value. However, using `any` should be avoided unless necessary because it bypasses TypeScript's type checking.


// ----------------------------------



// Function props and return type
// In TypeScript, you can specify the types of function parameters and the return type using annotations.
// This helps ensure that functions are called with the correct types and return the expected types.

// Explanation:
// Function annotations are used to specify the types of parameters and the return type.
// This improves code readability and helps TypeScript catch type-related errors.

const concatValues = (a: string, b: string): string => {
    return a + b
}

// Explanation:
// - The `concatValues` function takes two parameters, `a` and `b`, both annotated as strings.
// - The function returns a string, which is the concatenation of `a` and `b`.




// ----------------------------------





// Objects
// Interfaces in TypeScript are used to define the structure of objects.
// They specify which properties an object must have, their types, and whether they are optional.

interface UserInterface {
    id: number;
    name: string;
    age?: number; // Optional property
    greet(message: string): void; // Method in the interface
}

// Explanation:
// - The `UserInterface` interface defines an object with `id`, `name`, and an optional `age` property.
// - The `greet` method is also defined in the interface.

const User: UserInterface = {
    id: 2,
    name: "dharan",
    greet(message) {
        console.log(message)
    }
}

if (!User.age) {
    console.log("No age")
}
else {
    console.log(User.age)
}

User.age = 22

// Explanation:
// - An object `User` is created that conforms to the `UserInterface`.
// - The `age` property is initially undefined, so the condition checks for its existence.
// - Later, the `age` property is assigned a value.





// ----------------------------------





// Union
// A union type in TypeScript allows a value to be one of multiple types.
// This is useful when a variable or function parameter can be of different types.

const printID = (id: string | number) => { // Union type for 'id'
    console.log("ID: " + id)
}

// Explanation:
// - The `printID` function takes an `id` parameter that can be either a string or a number.
// - This allows the function to handle both types of IDs.



// ----------------------------------





// Type definition / type Alias
// Type aliases in TypeScript allow you to create new names for existing types.
// They are useful for simplifying complex types and making code more readable.

type IDFieldType = string | number // Type alias for a union type

const printIDField = (id: IDFieldType) => { // Using the type alias
    console.log("ID: " + id)
}

// Explanation:
// - The `IDFieldType` type alias is created for a union type that can be either a string or a number.
// - The `printIDField` function uses this type alias for its `id` parameter.



// ----------------------------------




// Intersections
// Intersection types in TypeScript allow you to combine multiple types into one.
// This is useful when you need an object to have properties from multiple interfaces.

interface BuisnessPartner {
    name: string;
    creditScore: number
}

interface UserIdentity {
    id: number;
    email: string
}

type employee = BuisnessPartner & UserIdentity // Intersection type

const signContract = (employee: employee) => {
    console.log("contract signed by " + employee.name + " with email: " + employee.email)
}

signContract({
    name: "dharan",
    creditScore: 891,
    id: 34,
    email: "sssss@ddd.com"
})

// Explanation:
// - Two interfaces, `BuisnessPartner` and `UserIdentity`, are defined.
// - The `employee` type is created by intersecting these two interfaces.
// - The `signContract` function takes an object of type `employee`, which must have all properties from both interfaces.
// - An object that conforms to the `employee` type is passed to the `signContract` function.




// ----------------------------------







// Enums
// Enums in TypeScript allow you to define a set of named values.
// They are useful for making code more readable when working with a fixed set of distinct values.

enum LoginError {
    Unauthorized = "Unauthorized",
    NoUser = "No User",
    WrongCredentials = "wrong credentials",
    internal = "internal"
}

const printErrorMsg = (error: LoginError) => {
    if (error === LoginError.Unauthorized) {
        console.log("Error: Unauthorized access.");
    } else if (error === LoginError.NoUser) {
        console.log("Error: User does not exist.");
    } else if (error === LoginError.WrongCredentials) {
        console.log("Error: Wrong credentials provided.");
    } else if (error === LoginError.internal) {
        console.log("Error: Internal server error.");
    } else {
        console.log("Error: Unknown error.");
    }
}

printErrorMsg(LoginError.WrongCredentials)

// Explanation:
// - An enum `LoginError` is defined with named values for different error types.
// - The `printErrorMsg` function takes a `LoginError` enum value and logs a corresponding error message.
// - The function uses the enum values to determine which error message to display.





// ----------------------------------







// Generic Types
// Generics in TypeScript allow you to create reusable functions and classes that work with multiple types.
// They are useful for maintaining type safety while working with different data types.

class StorageContainer<T> { // Generic class
    private contents: T[];

    constructor() {
        this.contents = []
    }

    addItem(item: T): void {
        this.contents.push(item)
    }

    getItem(idx: number): T | undefined {
        return this.contents[idx]
    }
}

const usernames = new StorageContainer<string>();

usernames.addItem("Dharanidharan")
usernames.addItem("K")
console.log("username", usernames.getItem(0))

const friendsCount = new StorageContainer<number>();

friendsCount.addItem(3)
friendsCount.addItem(5)
console.log("username", friendsCount.getItem(0))

// Explanation:
// - A generic class `StorageContainer` is defined with a type parameter `T`.
// - The class has methods to add and retrieve items of type `T`.
// - Two instances of `StorageContainer` are created, one for strings (`usernames`) and one for numbers (`friendsCount`).
// - Items are added and retrieved from these containers, maintaining type safety.






// ----------------------------------







// Read-only variables
// The `readonly` keyword in TypeScript is used to declare properties that cannot be modified after they are initialized.

interface Employee {
    readonly employeeID: number; // Read-only property
    startDate: Date;
    name: string;
}

const employee: Employee = {
    employeeID: 123,
    startDate: new Date(),
    name: "Dharan"
}

// Attempting to modify a read-only property will result in a TypeScript error.
// employee.employeeID = 555; // This line would cause a TypeScript error

employee.name = "dd"
console.log(employee)

// Explanation:
// - An interface `Employee` is defined with a read-only `employeeID` property.
// - An object `employee` is created that conforms to this interface.
// - Attempting to modify the `employeeID` property results in a TypeScript error, while modifying other properties is allowed.
