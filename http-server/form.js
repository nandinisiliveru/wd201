let userForm = document.getElementById("userform")
let today = new Date();
let minBirth = new Date(today);
minBirth.setFullYear(today.getFullYear() - 18);
let maxBirth = new Date(today);
maxBirth.setFullYear(today.getFullYear() - 55);
let minAge = minBirth.toISOString().split('T')[0]
let maxAge = maxBirth.toISOString().split('T')[0]
document.getElementById('dob').max = minAge;
document.getElementById('dob').min = maxAge;


const displayEntries = () => {
    const entries = retrieveEntries();
    const tableEntries = entries.map((entry) => {


        const nameCell = `<td class='border px-4 py-2'>${entry.name}</td>`;
        const emailCell = `<td class='border px-4 py-2'>${entry.email}</td>`;
        const passwordCell = `<td class='border px-4 py-2'>${entry.password}</td>`;
        const dobCell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
        const acceptTermsCell = `<td class='border px-4 py-2'>${entry.acceptTermsandconditions}</td>`;

        const row = `<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;

    }

    ).join("\n");

    const table = `<table class="table-auto w-full"><tr>
<th class="px-4 py-2">Name</th>
<th class="px-4 py-2">Email</th>
<th class="px-4 py-2">Password</th>
<th class="px-4 py-2">Dob</th>
<th class="px-4 py-2">Accepted terms?</th>
</tr>${tableEntries} </table`;

    let details = document.getElementById("userEntries");
    details.innerHTML = table;
}

const retrieveEntries = () => {
    let entries = localStorage.getItem("userEntries");
    if (entries) {
        entries = JSON.parse(entries);
    } else {
        entries = []
    }

    return entries;
}

const saveuserform = (event) => {
    event.preventDefault()
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const dob = document.getElementById("dob").value

    const acceptTermsandconditions = document.getElementById("acceptTerms").checked

    const entry = {
        name,
        email,
        password,
        dob,
        acceptTermsandconditions
    }
    let userEntries = retrieveEntries();

    userEntries.push(entry);
    localStorage.setItem("userEntries", JSON.stringify(userEntries));
    userForm.reset()
    displayEntries();
}
userForm.addEventListener("submit", saveuserform);
displayEntries();