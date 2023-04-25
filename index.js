const btn = document.querySelector("#submit")
const buttons = document.querySelector(".buttons")
const red = document.querySelector(".red")
const green = document.querySelector(".green")
const blue = document.querySelector(".blue")
const number = document.querySelector(".number")

//<div class="Scircle">inner</div>
// <button class="btn" id="start"> Start </button>
//<button class="btn" id="reset"> Reset </button>



btn.addEventListener("click" , (e) => {
    
    let num = number.value
    
    if ( num > 0 && num <= 10 ) {

        btn.disabled = true
        
    show ( "red" , num )
    show ( "green" , num )
    show ( "blue" , num )

    const start = document.createElement ( "button" )
    const reset = document.createElement ( "button" )
    start.classList.add ( "btn" )
    start.setAttribute ( "id" , "start" )
    start.textContent = "Start"

    reset.classList.add ( "btn" )
    reset.setAttribute ( "id" , "reset" )
    reset.textContent = "Reset"

    buttons.append ( start )
    buttons.append ( reset )


    click();
    
}

else alert ( "Please Enter Valid Number of Circles")
    
})


function click () {

    let redC = red.value
    let greenC = green.value
    let blueC = blue.value

 

    start.addEventListener ( "click" , () => {
       
        disappear ( redC , 0 , 0 , "red" )
        disappear ( redC , greenC ,  0 , "green" )
        disappear ( redC , greenC , blueC , "blue" )
    } )

    reset.addEventListener ( "click" , () => window.location.reload() )    
}



function show ( color , num ) {

    for(let i = 0; i < num; i++ ) {
        console.log(num)
        let div  = document.createElement ( "div" )
        div.classList.add ( "Scircle" )
        div.classList.add ( color + "A" )                  
        div.style.backgroundColor = color
 
        const circle = document.getElementsByClassName ( color )
        circle[1].append ( div )
        //console.log(circle)
    }
}


function disappear ( R , G , B , color ) {

    const dis = document.querySelectorAll ( "." + color + "A" )    // As it return NodeList

    let time =  ( R*1000 + G*1000 + B*1000 )
 
    console.log ( time )
 
    Array.from ( dis ).map ( ( e ) => {                  // We have toconvert it to Array
       
        setTimeout ( () => {
            e.style.display = "none"
        } , time )
    } )  
}