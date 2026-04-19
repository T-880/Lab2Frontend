const API_URL = "http://localhost:3000/api/workexperience";

async function loadWork() {
    const res = await fetch(API_URL);
    const data = await res.json();

    const list = document.getElementById("list");

    list.innerHTML = "";

    data.forEach(item => {
        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${item.companyname}</h3>
            <p><strong>Roll:</strong> ${item.jobtitle}</p>
            <p><strong>Plats:</strong> ${item.location}</p>
            <p><strong>Period:</strong> ${formatDate(item.startdate)} - ${formatDate(item.enddate)}</p>
            <p>${item.description}</p>
            <button onclick="deleteWork(${item.id})">Ta bort</button>
        `;

        list.appendChild(div);
    });
}

async function deleteWork(id) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadWork();
}

async function addWork(event) {
    event.preventDefault();

    const companyname = document.getElementById("companyname").value;
    const jobtitle = document.getElementById("jobtitle").value;
    const location = document.getElementById("location").value;
    const startdate = document.getElementById("startdate").value;
    const enddate = document.getElementById("enddate").value;
    const description = document.getElementById("description").value;

    if (!companyname || !jobtitle || !location || !startdate || !enddate || !description) {
        alert("Alla fält måste fyllas i!");
        return;
    }

    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            companyname,
            jobtitle,
            location,
            startdate,
            enddate,
            description
        })
    });

    alert("Post tillagd!");

    window.location.href = "index.html";
}

function formatDate(dateString) {
    return new Date(dateString).toLocaleDateString("sv-SE");
}