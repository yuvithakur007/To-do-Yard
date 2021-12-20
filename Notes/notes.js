var notes=[
    {text:"",
     date:""}
];

document.getElementById("addNote").onclick = function (){

var notetext = document.getElementById("notetext").value;
notetext = notetext.replace(/(?:\r\n|\r|\n)/g, '<br>');
notes.push({text:notetext,date: new Date(Date.now()).toLocaleString()});
var note = document.createElement("div");
note.id = "note";
note.className="note";



for(var i in notes){
    note.innerHTML=notes[i].date +"<br/><br/>"+notes[i].text;
    document.getElementById("col-2").appendChild(note);
}

}
