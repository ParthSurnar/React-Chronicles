// Numeric Enums (Default)
// Starts from 0 by default, unless specified.


enum Direction {
    Up,    // 0
    Down,  // 1
    Left,  // 2
    Right  // 3
}
console.log(Direction.Up); // 0
console.log(Direction.Left); // 2


// Custom Starting Value
enum Status {
    Pending = 1,
    Approved,  // 2
    Rejected = 3
}


// String Enums
// Each value is explicitly a string.
// No auto-increment here!
enum StringStatus {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}


// Heterogeneous Enums (Mixing Types)
// Mix numbers & strings (not common, but possible).
enum MixedEnum {
    Yes = "YES",
    No = 0
}


// Const Enums (Super Optimized)
// Gets fully removed from compiled JavaScript.
// Improves performance.
const enum Colors {
    Red,
    Green,
    Blue
}


let myColor: Colors = Colors.Green;
console.log(myColor); // 1


// Enum Reverse Mapping (Only for Numeric Enums)
enum Roles {
    Admin = 0,
    User = 1
}


console.log(Roles.User);  // 1
console.log(Roles[1]);    // 'User'


// Enums with Functions
enum userRoles {
    ADMIN = 'ADMIN',
    USER = 'USER'
}

// Function to check user role
function checkRole(role: userRoles) {
    if (role === userRoles.ADMIN) {
        console.log('Admin User');
    } else {
        console.log('Normal User');
    }
}
checkRole(userRoles.ADMIN); // Admin User


// Enums with Interfaces
// Interface for User
interface User {
    name: string;
    role: userRoles;
}

// User Object
const user: User = {
    name: 'John Doe',
    role: userRoles.ADMIN
}
console.log(user.role); // 'ADMIN'



// Enums with Classes
class UserClass {
    name: string;
    role: userRoles;

    constructor(name: string, role: userRoles) {
        this.name = name;
        this.role = role;
    }
}


// User Object
const userObj = new UserClass('John Doe', userRoles.USER);
console.log(userObj.role); // 'USER'


// Enums with Switch Case
enum WeekDays {
    MONDAY = 'MONDAY',
    TUESDAY = 'TUESDAY',
    WEDNESDAY = 'WEDNESDAY',
    THURSDAY = 'THURSDAY',
    FRIDAY = 'FRIDAY',
    SATURDAY = 'SATURDAY',
    SUNDAY = 'SUNDAY'
}

const day: WeekDays = WeekDays.MONDAY as WeekDays;

switch (day) {
    case WeekDays.MONDAY:
        console.log('Today is Monday');
        break;
    case WeekDays.TUESDAY:
        console.log('Today is Tuesday');
        break;
    case WeekDays.WEDNESDAY:
        console.log('Today is Wednesday');
        break;
    case WeekDays.THURSDAY:
        console.log('Today is Thursday');
        break;
    case WeekDays.FRIDAY:
        console.log('Today is Friday');
        break;
    case WeekDays.SATURDAY:
        console.log('Today is Saturday');
        break;
    case WeekDays.SUNDAY:
        console.log('Today is Sunday');
        break;
    default:
        console.log('Invalid Day');
}
