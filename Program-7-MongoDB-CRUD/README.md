# Experiment 8: MongoDB CRUD Operations

Perform CRUD (Create, Read, Update, Delete) operations with Node.js and MongoDB using Mongoose.

## Requirements
- Node.js (v18+)
- npm
- MongoDB (running on port 27017)

## Setup & Install
```bash
npm install
```

## Dependencies
- mongoose

## How to Run
1. Start MongoDB first:
   ```bash
   mongod
   ```
2. Run the program:
   ```bash
   node app.js
   ```

## Database
- Database: `college`
- Collection: `students`

## Output
The program will:
1. **Create** - Insert 3 students (Rahul, Anu, Kiran)
2. **Read** - Display all students
3. **Update** - Update Rahul's age to 25
4. **Delete** - Delete Rahul
