let votes = 25;
const animalArray = [];
const numAnimals = 15;
const randomNames = {"results":[{"name":{"title":"Mr","first":"Louis","last":"Smith"}},{"name":{"title":"Mr","first":"Marcos","last":"Crespo"}},{"name":{"title":"Mr","first":"Roméo","last":"Dubois"}},{"name":{"title":"Mr","first":"Loïs","last":"Riviere"}},{"name":{"title":"Miss","first":"Emmy","last":"Gauthier"}},{"name":{"title":"Miss","first":"Regina","last":"Gibson"}},{"name":{"title":"Miss","first":"Inmaculada","last":"Vargas"}},{"name":{"title":"Mr","first":"Domingo","last":"Rojas"}},{"name":{"title":"Mr","first":"Auguste","last":"Roussel"}},{"name":{"title":"Mr","first":"Mario","last":"Hernandez"}},{"name":{"title":"Mr","first":"Stanley","last":"Warren"}},{"name":{"title":"Ms","first":"Tracey","last":"Kuhn"}},{"name":{"title":"Mr","first":"Jeff","last":"Garcia"}},{"name":{"title":"Miss","first":"Victoria","last":"Thomas"}},{"name":{"title":"Ms","first":"Phyllis","last":"Ortiz"}}],"info":{"seed":"313c6f851695a8ff","results":15,"page":1,"version":"1.3"}};
let threeAnimals = [];

class Animal {
    constructor(index) {
        this.id = index;
        this.name = randomNames.results[index].name.first;
        this.type = Math.random() < 0.5 ? "kitten" : "puppy";
        this.image = this.type === "kitten" ? `https://placekitten.com/${200 + index}/${200 + index}` : `https://place-puppy.com/${200 + index}x${200 + index}`;
        this.views = 0;
        this.clicks = 0;
    }
}

function updateVotesRemaining() {
    $("#votes").text((votes == 1 ? "1 vote" : `${votes} votes`));
}

function populateAnimalArray() {
    for(let i = 0; i < numAnimals; i++) {
        animalArray.push(new Animal(i));
    }
}

function getThreeRandomAnimals() {
    threeAnimals = [];
    $("#image-container").html("");
    while(threeAnimals.length < 3) {
        let animal = animalArray[Math.floor(Math.random() * numAnimals)];
        if(!threeAnimals.includes(animal)) {
            threeAnimals.push(animal);
        }
    }
    threeAnimals.forEach(function(animal) {
        animal.views++;
        $("<img>").attr({
            "src": animal.image
            ,"alt": `${animal.name} the ${animal.type}`
            ,"title": `${animal.name} the ${animal.type}`
            ,"data-id": animal.id
        }).appendTo($("#image-container"));
    });
}

function renderChart() {
    // Parallel arrays
    let animalNames = [];
    let animalClicks = [];
    let animalViews = [];

    animalArray.forEach(function(animal) {
        animalNames.push(`${animal.name} the ${animal.type}`);
        animalClicks.push(animal.clicks);
        animalViews.push(animal.views);
    });
    
    const ctx = document.getElementById('chart-container').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: animalNames,
            datasets: [
                {
                    label: '# of Votes',
                    data: animalClicks,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 1
                },
                {
                    label: '# of Views',
                    data: animalViews,
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)'
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)'
                    ],
                    borderWidth: 1
                }
            ]
        },
        options: {
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true,
                    beginAtZero: true
                }
            },
            plugins: {
                legend: {
                    display: true
                }
            }
        }
    });

}

function compareAlphaByName(a, b) {
    return a.name.localeCompare(b.name);
}

function compareClicksBigToSmall(a, b) {
    // return -1 * (a.clicks/a.views - b.clicks/b.views);
    let result = -1 * (a.clicks - b.clicks);
    if(result == 0) {
        result = a.views - b.views;
    }
    return result;
}

function renderTable() {
    animalArray.sort(compareClicksBigToSmall);
    let count = 5;
    animalArray.forEach(function(animal) {
        if(count > 0) {
            let row = $("<tr></tr>");
            row.append(`<td><img src="${animal.image}" alt="${animal.name} the ${animal.type}"></td>`);
            row.append(`<td>${animal.name} the ${animal.type}</td>`);
            row.append(`<td>${animal.clicks}</td>`);
            row.append(`<td>${animal.views}</td>`);
            $("#results-container thead").append(row);
        }
        count--;
    });
}

$(function() {
    updateVotesRemaining();
    populateAnimalArray();
    getThreeRandomAnimals();
    $("#image-container").on("click", "img", function() {
        if(votes > 0){
            let animalClicked = $(this).attr("data-id");
            animalArray[animalClicked].clicks++;
            votes--;
            updateVotesRemaining();
            getThreeRandomAnimals();
        } 
        if(votes == 0) {
            $("header p").hide();
            $("#image-container").hide();
            renderChart();
            $("#chart-container").show();
            renderTable();
            $("#results-container").show();
        }
    });

});

