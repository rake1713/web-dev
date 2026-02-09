let user;

alert(user ?? "Anonymous"); // Anonymous (user is undefined)

let usr = "John";

alert(usr ?? "Anonymous"); // John (user is not null/undefined)

let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder


let firstNam = null;
let lastNam = null;
let nickNa = "Supercoder";

// shows the first truthy value:
alert(firstNam || lastNam || nickNa || "Anonymous"); // Supercoder

let height = null;
let width = null;

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000