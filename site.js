let fruits = {
    lemon: {
        name: "Lemon",
        color: "Yellow",
        sweetness:"Low",
        bitterness: "Low",
        shape: 'Oval',
        size: 'Small',
        area: 'Northeast India',
        lemonimage: "img/lemon.png",
    },
    pomelo: {
        name: "Pomelo",
        color: "Green",
        sweetness: "High",
        bitterness: "Low",
        shape: "Round",
        size: "Big",
        area: " Asia and Malaysia",
        pomeloimage: "img/pomelo.png",

    }, 
    orange:{ 
        name: "Orange",
        color: "Orange",
        sweetness: "High",
        bitterness: "Low",
        shape: "Round",
        size: "Medium",
        area: "Malay Archipelago",
        orangeimage: "img/orange.png",
    },
    bloodOrange:{
        name: "Blood Orange",
        color: "Red",
        sweetness: "High",
        bitterness: "Low",
        shape: "Round",
        size: "Medium",
        area: "Southern Mediterranean",
        bloodorangeimage: "img/bloodorange.png",
    },
    lime: {
        name: "Lime",
        color: "Green",
        sweetness: "Low",
        bitterness: "Low",
        shape: "Oval",
        size: "Small",
        area: "Florida",
        limeimage: "img/lime.png",
    },
    mandarin: {
        name: "Mandarin",
        color: "Orange",
        sweetness: "High",
        bitterness:"Low",
        shape: "Round",
        size: "Small",
        area: "Southern Asia and the Philippines.",
        mandarinimage: "img/mandarin.png",
    },
    clementines: {
        name: "Clementines",
        color: "Orange",
        sweetness: "High",
        bitterness: "Low",
        shape: "Round",
        size: "Small",
        area: "China",
        clementineimage: "img/clementine.png",
    },
    yuzu:{
        name: "Yuzu",
        color: "Yellow",
        sweetness: "Low",
        bitterness: "Low",
        shape: "Round",
        size: "Small",
        area: "The upper river basin of the Yangtze River in China",
        yuzuimage: "img/yuzu.png",
    },
    grapefruit: {
        name: "Grapefruit",
        color: "Pink",
        sweetness: "Low",
        bitterness: "High",
        shape: "Round",
        size: "Large",
        area: "Barbados",
        grapefruitimage: "img/grapefruit.png",
    }

    }

    let story = {

        beginning: {
            line1: "Once upon a time in a sunny orchard, there were 9 colorful citrus fruits, each with a different taste.",
            line2: "Let's meet them in order from the most sour to the sweetest!",
            line3: "Hover over their names to see where they come from!"

        },

        story1: {

            line1: "A bit small and yellow ",
            line2: "It was a little sour, like a surprise face.",
            line3: "Sometimes, a bit of sourness makes life exciting."

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
            document.querySelector('.sweetnessplace').innerHTML = `${fruit.name} is not very sweet.`
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


// lemon name
document.querySelector('.lemonsweetness').innerHTML = fruits.lemon.name

// lime name
document.querySelector('.limename').innerHTML = fruits.lime.name

//yuzu name
document.querySelector('.yuzuname').innerHTML = fruits.yuzu.name

// grapefruit name
document.querySelector('.grapefruitname').innerHTML = fruits.grapefruit.name

//orange name
document.querySelector('.orangename').innerHTML = fruits.orange.name 

//mandarin name
document.querySelector('.mandarinname').innerHTML = fruits.mandarin.name 

//clementine name 
document.querySelector('.clementinesname').innerHTML = fruits.clementines.name 

// pomelo name 
document.querySelector('.pomeloname').innerHTML = fruits.pomelo.name 

// blood orange name 
document.querySelector('.bloodorangename').innerHTML = fruits.bloodOrange.name 

document.querySelector('.line1').innerHTML = story.beginning.line1
document.querySelector('.line2').innerHTML = story.beginning.line2

//images 

//lemon
document.querySelector(".lemon-image").setAttribute("src",fruits.lemon.lemonimage)

//lime
document.querySelector(".lime-image").setAttribute("src",fruits.lime.limeimage)

//pomelo
document.querySelector(".pomelo-image").setAttribute("src",fruits.pomelo.pomeloimage)

//blood orange
document.querySelector(".bloodorange-image").setAttribute("src",fruits.bloodOrange.bloodorangeimage)

//yuzu 
document.querySelector(".yuzu-image").setAttribute("src",fruits.yuzu.yuzuimage)

//clementine
document.querySelector(".clementine-image").setAttribute("src",fruits.clementines.clementineimage)


//grapefruit
document.querySelector(".grapefruit-image").setAttribute("src",fruits.grapefruit.grapefruitimage)

//orange
document.querySelector(".orange-image").setAttribute("src",fruits.orange.orangeimage)


//lemon story 1
document.querySelector('.lemon-line1').innerHTML = story.story1.line1



function addPopupEffect(targetId, tooltipId) {
    const target = document.getElementById(targetId);
    const tooltip = document.getElementById(tooltipId);
  
    // Add event listeners for the target element
    target.addEventListener('mouseover', () => {
      tooltip.style.display = 'block';
    }, false);
  
    target.addEventListener('mouseleave', () => {
      tooltip.style.display = 'none';
    }, false);
  }
  

 
//    function blinker() {
//     if(document.getElementById("blink")){
//         var d = 
//         document.getElementById("blink");
//         d.style.display = (d.style.opacity == '100%'?"0%":"100%");
//         
//     }
// }

// setInterval(blinker, 2000); // every 2 seconds



  window.onload = function () {
    addPopupEffect("popup-text1", "tooltip-text1");
    addPopupEffect("popup-text2", "tooltip-text2");
    addPopupEffect("popup-text3", "tooltip-text3");
    addPopupEffect("popup-text4", "tooltip-text4");
    addPopupEffect("popup-text5", "tooltip-text5");
    addPopupEffect("popup-text6", "tooltip-text6");
    addPopupEffect("popup-text7", "tooltip-text7");
    addPopupEffect("popup-text8", "tooltip-text8");
    addPopupEffect("popup-text9", "tooltip-text9");
  }
  

    // area
    document.querySelector('.lemonarea').innerHTML = fruits.lemon.area
    document.querySelector('.limearea').innerHTML = fruits.lime.area
    document.querySelector('.yuzuarea').innerHTML = fruits.yuzu.area
    document.querySelector('.grapefruitarea').innerHTML = fruits.grapefruit.area
    document.querySelector('.orangearea').innerHTML = fruits.orange.area
    document.querySelector('.mandarinarea').innerHTML = fruits.mandarin.area
    document.querySelector('.clementinearea').innerHTML = fruits.clementines.area
    document.querySelector('.pomeloarea').innerHTML = fruits.pomelo.area
    document.querySelector('.bloodorangearea').innerHTML = fruits.bloodOrange.area


 