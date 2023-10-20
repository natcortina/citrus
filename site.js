let fruits = {
    lemon: {
        name: "Lemon",
        color: "Yellow",
        sweetness:"Low",
        bitterness: "Low",
        shape: 'Oval',
        size: 'Small',
        area: 'Worldwide',
    },
    pomelo: {
        name: "Pomelo",
        color: "Green",
        sweetness: "High",
        bitterness: "Low",
        shape: "Round",
        size: "Big",
        area: "Asia",

    }, 
    orange:{ 
        name: "Orange",
        color: "Orange",
        sweetness: "High",
        bitterness: "Low",
        shape: "Round",
        size: "Medium",
        area: "Worldwide",
    },
    bloodOrange:{
        name: "Blood Orange",
        color: "Red",
        sweetness: "High",
        bitterness: "Low",
        shape: "Round",
        size: "Medium",
        area: "Mediterranean",
    },
    lime: {
        name: "Lime",
        color: "Green",
        sweetness: "Low",
        bitterness: "Low",
        shape: "Oval",
        size: "Small",
        area: "Florida",
    },
    mandarin: {
        name: "Mandarin",
        color: "Orange",
        sweetness: "High",
        bitterness:"Low",
        shape: "Round",
        size: "Small",
        area: "Worldwide",
    },
    clementines: {
        name: "Clementines",
        color: "Orange",
        sweetness: "High",
        bitterness: "Low",
        shape: "Round",
        size: "Small",
        area: "Worldwide",
    },
    yuzu:{
        name: "Yuzu",
        color: "Yellow",
        sweetness: "Low",
        bitterness: "Low",
        shape: "Round",
        size: "Small",
        area: "Asia",
    },
    grapefruit: {
        name: "Grapefruit",
        color: "Pink",
        sweetness: "Low",
        bitterness: "High",
        shape: "Round",
        size: "Large",
        area: "Worldwide",
    }

    }
    
    //  determine if it is very sweet
    function isSweet(fruit) {
        return fruit.sweetness === "High";
    }
    

    // display fruit details
    function displayFruitDetails(fruit) {
        console.log(`Name: ${fruit.name}`);
        console.log(`Color: ${fruit.color}`);
        console.log(`Size: ${fruit.size}`);
        console.log(`Size: ${fruit.area}`);
    }
    

    function displaySweetnessInfo(fruit) {
        displayFruitDetails(fruit);
    
        if (isSweet(fruit)) {
            console.log(`${fruit.name} is sweet.`);
        } else {
            console.log(`${fruit.name} is not very sweet.`);
        }
    }
    
    // get fruits info and put them into the display
    const lemon = fruits.lemon;
    const pomelo = fruits.pomelo;
    const orange = fruits.orange;
    
    // Display sweetness information for each fruit
    displaySweetnessInfo(lemon);
    displaySweetnessInfo(pomelo);
    displaySweetnessInfo(orange);

