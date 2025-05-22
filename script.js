function inputCommentTrigger() {
  let field = document.getElementById("reason-miscellaneous");
  let toggleTextbox = document.querySelector(".form-floating");
  if (field.selected === true) {
    toggleTextbox.classList.toggle("collapse");
  }
}

function validateForm() {
  const input = document.getElementsByTagName("input");
  console.log(input);
}

function generateLink() {
  let https = "http://127.0.0.1:5500/index.html";
  let content = document.querySelectorAll(".form-control");
  let element = [];
  let dateKey = Date.now();
  for (let i = 0; i < content.length; i++) {
    element.push(content[i].value);
  }
  const link = https + "?id=" + dateKey + element[1] + element[0];
  let linkJSON = {
    id: dateKey + element[1] + element[0],
    status: "offen",
    kunde: element[0],
    ls: element[1],
  };
  sendJSON(linkJSON);
  console.log(link);
  navigator.clipboard.writeText(link);
}

/* Was passiert mit dem Link? Inhalt & Struktur */
async function sendJSON(json) {
  console.log(json);
  const database = "http://localhost/Retoure/link.php"; //hier dann die eigene Domain
  let response = await fetch(database, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(json),
  });
  return (responseJSON = await response.json());
}

/* http://localhost/Retoure/data/1747856116115/11111/123123 */
/* generierter link an den Kunden  */

function init() {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");
  const baseUrl = window.location.origin + window.location.pathname;

  prefillContent(id);
  console.log("Base URL:", baseUrl);
  console.log("ID:", id);
}

async function prefillContent(id) {
  const caseURL = "http://localhost/Retoure/data/";
  try {
    const response = await fetch(caseURL + id + ".json");

    if (!response.ok) {
      throw new Error("Datei nicht gefunden oder Serverfehler");
    }

    const responseRef = await response.json();
    console.log(responseRef.results);
  } catch (error) {
    console.error("Fehler beim Laden der JSON-Datei:", error);
  }
}


/* 

2	Extra-Formularseite für den Kunden anlegen
3	Parameter aus URL lesen
4	Formular einbauen und per POST abschicken
5	submit.php erstellen, Daten verarbeiten
6	Daten in Datei loggen
7	Kunden-Feedbackseite nach Absenden
8	Bessere Datenstruktur und evtl. Datenbank
9	Sicherheit prüfen
10	(Optional) Mailversand bei Eintrag
*/
