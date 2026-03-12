const ctx = document.getElementById("skillsChart");

new Chart(ctx, {

type: "bar",

data: {

labels: ["HTML", "CSS", "JavaScript", "Teamwork", "Communication"],

datasets: [{

label: "Skill Level",

data: [70, 60, 50, 90, 85],

borderWidth: 1

}]

},

options: {

scales: {

y: {

beginAtZero: true,
max: 100

}

}

}

});
