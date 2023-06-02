// setup express server
const express = require('express')
const app = express()

// whenever we use json, we can accss the body and parses any json automatically
app.use(express.json())

let dogList = [
    {
        id: 1,
        name: "Mustard",
        age: 5
    },
    {
        id: 2,
        name: "Ketchup",
        age: 6
    }
]

app.get('/dogs', (req, res) => {
    // req is used for when clients send data or we want to add stuff to our database
    // res is when we want to send data back to the client

    res.json(dogList)
})

// in post method, we are creating new data and that data will be retrieved from the client so we must use req
app.post("/dogs", (req, res) => {
  const newUser = req.body;
  dogList.push(newUser);

  res.json(dogList);
});

// update a user using a specific id
app.put("/dogs/:id", (req, res) => {
  const newName = req.body.name;

  // params refers to the url :id
  const id = req.params.id;
  // get the user id
  // update user id
  // return the list
  dogList.map((dog) => {
    if (dog.id == id) {
      dog.name = newName;
    }
  });

  res.json(dogList);
});

app.delete('/dogs/:id', (req, res) => {
    // Get ID of the user you want to delete
    // Filter list and only get the ones not matching with the given ID
    // Send back the list

    let found = false;

    const id = req.params.id;
    dogList = dogList.filter((dog) => {
        dog.id != id;
        // found = true;
    })

   
    res.json(dogList)
})


app.listen(5173, () => console.log("Listening on port 5173"))