// TRANSFORM USERS JSON DATA (FROM API) TO A NEW FORM AS GROUPBY DEPARTMENT --> DISPLAY THEM ON WEB
//OUTPUT:
// {
//     "Marketing": {
//       male: 3,
//       female: 2,
//       ageRange: "25-45",
//       hair: {
//         Black: 2,
//         Brown: 1,
//         Blond: 2,
//       },
//       addressUser: {
//         JohnDoe: "12345",
//         JaneSmith: "45678",
//       }
//     },
//     ...
//   }

import { User } from "../types/user";

//FIRST STEP : DEFINE DATA STRUCTURE THAT THIS FILE FUNCTION WILL RETURN THE OUTPUT
// Summary = {department : {key: value, key: value, ...} }
interface Summary {
    [department: string]: {
        male: number;
        female: number;
        ageRange: string;
        hair: Record<string, number>;
        addressUser: Record<string, string>
    };
}


export const transformData = (users: User[]): Summary => {
    // CREATE Summary = {} TO STORE THE RESULT GROUPBY DEPARTMENT
    const summary: Summary = {} //Summary IS INTERFACE THAT DEFINE TYPE OF DATA IN OBJECT
    //THIS MEANS: DEFFINE summary has a type as Summary + START WITH {}

    //LOOP EVERY ELEMENT IN USERS (AS USER)
    users.forEach(user => { //EACH USER
        const departmentName = user.company.department
        //FOUND A NEW DEPARTMENT ;NEVER HAVE IN SUMMARY
        if (!summary[departmentName]) { //NEW DEPARTMENT = UNDEFINE
            summary[departmentName] = { //CREATE NEW OBJECT FOR NEW DEPARTMENT
                male: 0,
                female: 0,
                ageRange: "",
                hair: {},
                addressUser: {}
            }
        }

        const group = summary[departmentName] //= DEPARTMENT KEY

        //GENDER:
        user.gender === "male" ? group.male++ : group.female++

        //HAIR:
        const hairColor = user.hair.color //GET VALUE OF HAIRCOLOR
        group.hair[hairColor] = (group.hair[hairColor] || 0) + 1 //IF NO HAVE THAT COLOR YET, WILL START WITH 0 + 1

        //ADDREDD:
        const fullName = user.firstName + user.lastName
        group.addressUser[fullName] = user.address.postalCode

    })

    // CALCUALTE AGERANGE
    for (const departmentName in summary) {
        const ages = users.filter(user => user.company.department === departmentName).map(user => user.age)
        console.log('ages', ages);

        //FIND AGE RANGE:
        const min = Math.min(...ages)
        const max = Math.max(...ages)

        //ASSIGN VALUE OF AGERANGE IN SUMMARY OBJECT
        summary[departmentName].ageRange = `${min}-${max}`

    }

    //RETURN SUMMARY OBJECT TO USE NEXT
    return summary
}
