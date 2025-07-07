
document.getElementById('resumeForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const fname = document.getElementById('fname').value;
  const mname = document.getElementById('mname').value;
  const lname = document.getElementById('lname').value;
  const about = document.getElementById('about').value;
  const contact = document.getElementById('contactNo').value;
  const email = document.getElementById('mail').value;
  const pin = document.getElementById('pin').value;
  const skill = document.getElementById('skill').value;
  const exp = document.getElementById('experience').value;
  const education = document.getElementById('qual').value;
  const output = document.getElementById('output');
  output.innerHTML = `
<div class="resume-container">
<h1 > Resume</h1>


<div class="left-sec">
<h3>${fname} ${mname} ${lname}<br>
<p>${contact}<br>${email}<br>${pin}<p><h3>
<img src=uncheck.png alt= img>
</div>
<h2>About Me</h2>
<p>${about}</p>
<h2>Skills</h2>
<p>${skill}</p>
<h2> Education</h2>
<p>${education}</p>
<h2>Experience</h2>
<p>${exp}</p>
<div class="sign">
<h4>Date:_____________<h4>

<h4>Signature:____________</h4>

</div>
</div>`;
  output.style.display = "flex";
  output.style.backgroundColor = "white";
})