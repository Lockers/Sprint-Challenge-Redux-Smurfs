const express = require('express');
const cors = require('cors');
const port = 3333;

const server = express();
server.use(express.json());
server.use(cors());

const sendUserError = (msg, res) => {
  res.status(422);
  res.json({ Error: msg });
  return;
};

let smurfs = [
  {
    name: 'Brainey Smurf',
    age: 200,
    height: 5,
    id: 0
  },
  {
    name: 'Grumpy Smurf',
    age: 100,
    height: 8,
    id: 1
  },
  {
    name: 'Stupid Smurf',
    age: 20,
    height: 5,
    id: 2
  },
  {
    name: 'Barry Smurf',
    age: 100,
    height: 10,
    id: 3
  },
  {
    name: 'Addict Smurf',
    age: 500,
    height: 10,
    id: 4
  },
  {
    name: 'Pimp Smurf',
    age: 100,
    height: 15,
    id: 5
  },
  {
    name: 'Detective Smurf',
    age: 80,
    height: 3,
    id: 6
  },
];
server.get('/smurfs', (req, res) => {
  res.json(smurfs);
});
let smurfId = smurfs.length;

server.post('/smurfs', (req, res) => {
  const { name, age, height } = req.body;
  const newSmurf = { name, age, height, id: smurfId };
  if (!name || !age || !height) {
    return sendUserError(
      'Ya gone did smurfed! Name/Age/Height are all required to create a smurf in the smurf DB.',
      res
    );
  }
  const findSmurfByName = smurf => {
    return smurf.name === name;
  };
  if (smurfs.find(findSmurfByName)) {
    return sendUserError(
      `Ya gone did smurfed! ${name} already exists in the smurf DB.`,
      res
    );
  }

  smurfs.push(newSmurf);
  smurfId++;
  res.json(smurfs);
});

server.put('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const { name, age, height } = req.body;
  const findSmurfById = smurf => {
    return smurf.id == id;
  };
  const foundSmurf = smurfs.find(findSmurfById);
  if (!foundSmurf) {
    return sendUserError('No Smurf found by that ID', res);
  } else {
    if (name) foundSmurf.name = name;
    if (age) foundSmurf.age = age;
    if (height) foundSmurf.height = height;
    res.json(smurfs);
  }
});

server.delete('/smurfs/:id', (req, res) => {
  const { id } = req.params;
  const foundSmurf = smurfs.find(smurf => smurf.id == id);

  if (foundSmurf) {
    const SmurfRemoved = { ...foundSmurf };
    smurfs = smurfs.filter(smurf => smurf.id != id);
    res.status(200).json(smurfs);
  } else {
    sendUserError('No smurf by that ID exists in the smurf DB', res);
  }
});

server.listen(port, err => {
  if (err) console.log(err);
  console.log(`server is listening on port ${port}`);
});
