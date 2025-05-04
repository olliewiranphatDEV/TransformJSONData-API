# Transform JSON Data from API
This project fetches user data from the public API [dummyjson.com/users](https://dummyjson.com/users) and transforms it into a summarized format grouped by **department**. It displays the result using a clean and readable UI built with **React + TypeScript + Tailwind CSS**.

### Requirement Summary:
1. Fetch Data https://dummyjson.com/users by Axios at userService.ts
``` bash
npm i axios
```
2. Transform the raw JSON Data to a new form - with Groupby Department and the Summary The Field Name
3. Create Summary following as Field
Field Name        Wannted
male, female       Count
ageRange           Display Age Range
hair               Count each Hair Color
addressuser        fisrName + lastName : postalCode
### Example The Finished
``` bash
{
  Marketing: {
    male: 5,
    female: 3,
    ageRange: "23-45",
    hair: {
      Black: 2,
      Brown: 3,
      Blond: 1
    },
    addressUser: {
      "JohnDoe": "90210",
      "JaneSmith": "12345"
    }
  },
  Engineering: { ... }
}
```

### Solutions:
1. Use Axios to Fetch API
2. Use Reduce to organize groupBy Department
3. Use Min, Max to calculate ageRange
4. Use TypeScript to define The Data Structure

## Tech Stack

- React
- TypeScript
- Vite
- Axios
- Tailwind CSS


