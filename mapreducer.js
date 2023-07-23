let a = [
  {
    name: "Yusuf",
    age: 50,
  },
  {
    name: "Raafay",
    age: 60,
  },
  {
    name: "Tehreem",
    age: 6,
  },
  {
    name: "Max",
    age: 6,
  },
];

let arr = [3, 2, 1, 5];

const output = a.reduce(function (acc, curr) {
  if (acc[curr.age]) {
    acc[curr.age] = ++acc[curr.age];
  } else {
    acc[curr.age] = 1;
  }
  scopechain();
  return acc;
}, {});

function scopechain() {
  console.log("hello");
}

console.log(output);

let newfilter = a.filter((x) => x.age > 30).map((i) => i.name);

let newreducer = a.reduce((acc, curr) => {
  if (curr.age > 30) {
    acc[curr.name] = curr.name;
  }
  return acc;
}, {});
console.log(newreducer);
