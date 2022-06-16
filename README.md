# Internshala - Assignment (Mohd Shadab)

##  Steps to run the code (Windows OS)

You'll need to have node.js installed in the machine. Git Bash is suggested as a terminal

- Clone the repository using following command (git bash):
```sh
 git clone https://github.com/shaad82663/Internshala-assignment
```

- After clonning the repository, Navigate to the project folder by running following command in terminal:
```sh
 cd Internshala-assignment/
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
>mongoDB Database is connected with mongodb://localhost:27017/internshala-assignment

# REST API

The REST API used in the code is described below.

## Register User

### Request

`POST /api/v1/user/register`

     http://localhost:4000/api/v1/user/register

#### Sample Request (JSON)
  
    {
     "firstname" : "Mohd",
     "lastname" : "Shadab",
     "username" : "shaad123",
     "password" : "123456"
    }
    
### Response
  
    HTTP/1.1 200 OK
    success : true
    token : token
    user : {...user}
    
## Login User

### Request

`POST /api/v1/user/login`

     http://localhost:4000/api/v1/user/login

#### Sample Request (JSON)
  
    {
    "username" : "shaad123",
    "password" : "123456"
    }
    
### Response
  
    HTTP/1.1 200 OK
    success : true
    token : token
    user : {...user}    
    
## Get user details (Protected : Login First)

### Request

`GET /api/v1/user/user-details`

     http://localhost:4000/api/v1/user/user-details

#### Sample Request (JSON)
  
    {
    "username" : "shaad123"
    }
    
### Response
  
    HTTP/1.1 200 OK
    success : true
    user : {...user}    
    
## Fetch users list  (Protected : Login First)

### Request

`GET /api/v1/user/users`

     http://localhost:4000/api/v1/user/users

#### Sample Request (JSON)
  
    {}
    
### Response
  
    HTTP/1.1 200 OK
    success : true
    users : [users]      
    
    
## Logout

### Request

`GET /api/v1/user/logout`

     http://localhost:4000/api/v1/user/logout

#### Sample Request (JSON)
  
    {}
    
### Response
  
    HTTP/1.1 200 OK
    success : true,
    message : "Logged Out"
    
    
    
## Add Product (Protected Route : Login first)

### Request

`POST /api/v1/product/new`

     http://localhost:4000/api/v1/product/new


#### Sample Request (JSON)

    {
     "name" : "Cricket Ball",
     "description" : "myDesc",
     "price" : 299,
     "quantity" : 10
    }

### Response
  
        HTTP/1.1 200 OK
        success : true,
        product : {...product}
        
### Error (In case of not logged in user) //Same for other protected routes.
       {
       "success": false,
        "error": {
        "statusCode": 500
         },
         "errMessage": "Login first to access resourses.",
         "stack" : {error-stack}
       }
    
## Fetch all products(Protected Route : Login first)

### Request

`GET /api/v1/products`

     http://localhost:4000/api/v1/products
     
#### Sample Request (JSON) 
  
    {} //NO INPUT REQUIRED         

### Response
  
        HTTP/1.1 200 OK
        success : true,
        count : products.length,
        products : [...products]
    
        

## Installation

Web App requires [Node.js](https://nodejs.org/) to run.
[Git Bash](https://git-scm.com/) is suggested as a terminal.

Install the dependencies and devDependencies.

```sh
cd <foler path>
npm install
```

Run the app

```sh
cd <foler path>
npm run dev //Running in Development mode
npm run prod //Running in Production mode
```



