// Document.body.children[1].children = List of children
// elements in the main element
let main = document.body.children[2].children;

// main[main.length-1].children = select the last child
// element in the main element and list all of its children
let links = main[0].children;

for (var i = 0; i < links.length; i++) {
  links[i].onclick = (event) => {
    document.querySelector(".active").className = "";
    event.target.className = "active ";
    console.log(event.target.innerHTML == "«");
    console.log(event.target.innerHTML == "»");
  };
}

var heading = ["Test post"];

var body = [
  "hibj kljblk kldsnlskdj lkblk lkjl lkjl  kjds lsk k;sjdbl kjl lkds j",
];

posts();

function posts() {
  const main = document.getElementsByTagName("main")[0];
  console.log(main);

  main.innerHTML = `<a>
        <h4>${heading[0]}</h4>
        <img src="IMG_0562.jpeg" alt="" />
        <span>
          ${body[0]}
        </span>
      </a>`;
}
