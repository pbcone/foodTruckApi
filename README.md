
Auth routes
  POST http://localhost:3005/v1/account/register
    body-
    {
    	"email": "bob@bobinthewoods.com",
    	"password":"password"
    }

  POST http://localhost:3005/v1/account/login
    body-
    {
    	"email": "mcone@cbtnuggets.com",
    	"password":"password"
    }
    response-
    {
      "user": "mcone@cbtnuggets.com",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMzE5YzQyNmRhZmEwNzVmNGVmNDQ0MSIsImlhdCI6MTUxMzIwMDg0NywiZXhwIjoxNTE1NzkyODQ3fQ.vLIzYGvSyCFEOdzJqA7MW9eXoZMX09uIB2XJphLlcgc"
    }



FoodTruck routes
    POST http://localhost:3005/v1/foodtruck/add
      header-
        Authorization: 'Bearer USER_TOKEN'
      body-
      {
        "name": "Dev slopes diner",
        "foodtype":"American",
        "avgcost":12.99,
        "geometry":{
          "coordinates":[20.40]
        }
      }

    GET http://localhost:3005/v1/foodtruck
      response-
        Array of Food trucks
    GET http://localhost:3005/v1/foodtruck/:id
      response-
        FoodTruck object
    PUT http://localhost:3005/v1/foodtruck/:id
      header-
        Authorization: 'Bearer USER_TOKEN'
      body-
      {
        "name": "Dev slopes diner",
        "foodtype":"American",
        "avgcost":12.99,
        "geometry":{
          "coordinates":[20.40]
        }
      }

    Delete http://localhost:3005/v1/foodtruck/:id
      response-
        {
          "message": "FoodTruck Successfully Removed"
        }
    POST http://localhost:3005/v1/foodtruck/reviews/add/:id
      header-
        Authorization: 'Bearer USER_TOKEN'
      body-
      {
      	"title":"GREEN IS GREAT",
      	"text":"this truck is very energy efficent"
      }
    GET http://localhost:3005/v1/foodtruck/reviews/:id

    GET http://localhost:3005/v1/foodtruck/foodtype/:foodtype



User accounts
  user- mcone@cbtnuggets.com
  password- password
  token- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMzE5YzQyNmRhZmEwNzVmNGVmNDQ0MSIsImlhdCI6MTUxMzIwMDg0NywiZXhwIjoxNTE1NzkyODQ3fQ.vLIzYGvSyCFEOdzJqA7MW9eXoZMX09uIB2XJphLlcgc

  user- bob@bobinthewoods.com
  password- password
  token - eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMzFhMDUzMDBhNTJmNzczZWZhNGQ0OSIsImlhdCI6MTUxMzIwMTkwOSwiZXhwIjoxNTE1NzkzOTA5fQ.MHC3ro8WFW6SXcPur7_4mz-mnFVxK3t6Y1tJaNOZQVo

  user-  steve@steveinthewoods.com
	password- password
  token- eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhMzFhOWQ1MDBhNTJmNzczZWZhNGQ0YSIsImlhdCI6MTUxMzIwNDIzNiwiZXhwIjoxNTE1Nzk2MjM2fQ.OGveuM_gTfUKGOLKjqKa2veqQrlkI6BJq_rSpbxnWjI
