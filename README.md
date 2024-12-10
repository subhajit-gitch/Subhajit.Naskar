# Subhajit.Naskar
This is a Task Management System where you can Add, Edit , Delete your task and also able to View Your tasks Sorted in order to task Priority and current task Status. I have used Nodejs, express.js, Mongodb and Necessary node packages to Developed this Project.

# 1st install 

npm init -y
npm install express mongoose dotenv joi express-validator morgan
npm install --save-dev nodemon

# create a .env file in backend folder and paste below code 

PORT=5000
HOST=127.0.0.1
MONGO_URI=mongodb+srv://subhajit:subhajit123@cluster0.qhzb3.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0

# Then run the app

nodemon app.js
npm run dev

# send the data from postman as post api end point->http://127.0.0.1:5000/api/tasks  (body-> raw)
# example
{
    "title": "Learn Node.js",
    "description": "Complete tutorials and build a project",
    "status": "TODO",
    "priority": "HIGH",
    "dueDate": "2024-12-15T00:00:00Z"
}

# api end points

# get
 http://127.0.0.1:5000/api/tasks
 http://127.0.0.1:5000/api/tasks/:id

# post
 http://127.0.0.1:5000/api/tasks

# put
 http://127.0.0.1:5000/api/tasks/:id

# delete
 http://127.0.0.1:5000/api/tasks/:id
