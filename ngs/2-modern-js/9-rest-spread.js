const [first, ...restOfItems] = [10, 20, 30, 40]; // creates one single const (first) and an array (restOfItems)

const data = {
  temp1: '001',
  temp2: '002',
  firstName: 'John',
  lastName: 'Doe',
};

const { temp1, temp2, ...person } = data;

const newArray = [...restOfItems]; // this is just a straight copy of newArray

const newObject = {
  ...person,
};
