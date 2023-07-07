
# Kindergarten School Record System

In this project we have used express and mongoose to create basic CRUD operations APIs to store the student's data of Kindergarten School.To store the data we have used MongoDB cloud database and also used pagination to show data in small chunks.

To run the server just use "npm start" command.

dotenv library is used to protect the cloud database access.
## API Reference

#### Get items 

```http
  GET /localhost:9000/accessAll?page=1&limit=5
```
#### Post item

```http
  POST /localhost:9000/add
```

#### Update item
```http
  Put /localhost:9000/update/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of student |


#### Delete item
```http

  Delete /localhost:9000/delete/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of student |


To check above APIs, I have used Postman. You can use any API platform.
## Authors

- [@maaz](https://github.com/maaz64)

