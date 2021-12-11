### NOTE :
As the assignments 1 and 2 were part of each other and mentor suggested to do both the assignments simultaneously so both the assignments are submitted in form of one repo. The github repo link provided in assignment 2 and 3 are same. It is done to ensure that both the assignments will be marked as done without any confusion.

# avtaar-assignment-2-3-mohd-shadab

##  Steps to run the code (Windows OS)

You'll need to have node.js installed in the machine. Git Bash is suggested as a terminal

- After clonning the repository, Navigate to the project folder by running following command in terminal:
```sh
 cd avtaar-assignment-2-3-mohd-shadab/
```

- Run the following command to install the all the node.js packages that are used in the code.
```sh
npm install
```

- Run the server by running following command:
```sh
npm run start
```

- The ouput in the termnal will be :
>Listening Server over port 4000 in DEVELOMENT mode.
>
>mongoDB Database is connected with mongodb://localhost:27017/avtaar-mohd-shadab

# REST API

The REST API used in the code is described below.

## Insert into User table

### Request

`POST /api/v1/user/new`

     http://localhost:4000/api/v1/user/new

#### Sample Request (JSON)
  
    {
    "name" : "Mohd Shadab",
    "gender" : "MALE",
    "email" : "shaad82663@gmail.com"
    }
    
### Response
  
    HTTP/1.1 200 OK
    success : true
    user : {...user}
    
    
## Insert into Event table

### Request

`POST /api/v1/event/new`

     http://localhost:4000/api/v1/event/new  


#### Sample Request (JSON)
  
    {
    "name" : "Avtaar Fest",
    "occurance" : "WEEKLY",
    "uid" : "6193d55e635304f71aa4ea55"
    "startDate" : "2021-03-09",
    "endDate" : ""
    }

### Response
  
        HTTP/1.1 200 OK
        success : true,
        event : {...event}
    
## Get all the events for today

### Request

`GET /api/v1/events/today`

     http://localhost:4000/api/v1/events/today  
     
#### Sample Request (JSON)
  
    {} //NO INPUT REQUIRED         

### Response
  
        HTTP/1.1 200 OK
        success : true,
        count : events.length,
        events : [...events]
    

        
## Get all users for list of uid

### Request

`GET /api/v1/users`

     http://localhost:4000/api/v1/users

#### Sample Request (JSON)
  
    {
    "uid" : ["6193d55e635304f71aa4ea55", "6193d701f37175bbaa345a0f"]
    } 

### Response
  
         HTTP/1.1 200 OK
         success : true,
         users : {...users}
                 
         
## Get the all the events for given uid

### Request

`GET /api/v1/events`

     http://localhost:4000/api/v1/events
     
#### Sample Request (JSON)
  
    {
    "uid" : "6193d55e635304f71aa4ea55"
    } 

### Response
  
         HTTP/1.1 200 OK
         success : true,
         count : eventsForUid.length,
         eventsForUid : {...eventsForUid}   
                   
         
## Get all events for the next 7 days

### Request

`GET /api/v1/events/week`

     http://localhost:4000/api/v1/events/week
     
#### Sample Request (JSON)
  
    {} //NO INPUT REQUIRED      
     
### Response
  
         HTTP/1.1 200 OK
        success : true,
        count : events.length,
        events : {...events}    

### NOTE :
Some error habdling functions/modules will be added later while working on front-end because those are PRODUCTION based errors which will seen by end user. For now all errors are DEVELOPMENT based i.e. in most of the cases, only a programmer can understand the errors.

## Installation

Web App requires [Node.js](https://nodejs.org/) to run.
[Git Bash](https://git-scm.com/) is suggested as a terminal.

Install the dependencies and devDependencies and start the server.

```sh
cd <foler path>
npm install
npm run start
```

## Output
### Assignment-2
[Output-1](https://res.cloudinary.com/shaad82663/image/upload/v1637232316/Avtaar-Internship-Assisnments/Q-1_azz5ng.png)
[Output-2](https://res.cloudinary.com/shaad82663/image/upload/v1637232316/Avtaar-Internship-Assisnments/Q-2_jujqdh.png)

### Assignment-3
[Output-1: 5 users-screenshot](https://res.cloudinary.com/shaad82663/image/upload/v1637232766/Avtaar-Internship-Assisnments/Screenshot_223_syyhwa.png)
[Output-1: 5 users-txt-file](https://res.cloudinary.com/shaad82663/raw/upload/v1637232980/Avtaar-Internship-Assisnments/o-1_gx7ifq.txt)

[Output-2: 20 events-screenshot](https://res.cloudinary.com/shaad82663/image/upload/v1637232546/Avtaar-Internship-Assisnments/Screenshot_222_yb2ues.png)
[Output-2: 20 events-txt-file](https://res.cloudinary.com/shaad82663/raw/upload/v1637232980/Avtaar-Internship-Assisnments/o-2_ke6qiz.txt)



