import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Affichage dans la console du debugging Javascript</h1>
<div>
</div>
`;

var obj = {
  name: "reddit",
  website: true
};

console.log("obj", obj);
console.log(".toString", obj.toString());
console.log("String()", String(obj));
console.log("JSON.stringify", JSON.stringify(obj));
