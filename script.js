var signaturePad = new SignaturePad(document.getElementById('signatureCanvas'));

function validateForm() {
  var notebookId = document.getElementById("notebookId").value;
  var fullName = document.getElementById("fullName").value;
  var companyName = document.getElementById("companyName").value;
  var icNumber = document.getElementById("icNumber").value;
  var date = document.getElementById("date").value;

  if (notebookId === "" || fullName === "" || companyName === "" || icNumber === "" || date === "") {
    alert("Please fill in all fields.");
    return false;
  } else {
    return true;
  }
}

function submitForm() {
  if (validateForm()) {
    printForm();
  }
}

function printForm() {
  window.print();
}

function clearSignature() {
  signaturePad.clear();
}
