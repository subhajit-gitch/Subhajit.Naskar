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
