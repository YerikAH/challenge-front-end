const ham = ()=>{
    const transparent = document.querySelector(".nav-content")
    const squeare = document.querySelector(".nav-content-this")
    const ham = document.querySelector(".btn-ham")
    const exitHam = document.querySelector(".btn-ham-exit")
    const nav = document.querySelector(".nav-content")
    exitHam.addEventListener('click',e=>{
        exitHam.style.setProperty("display","none")
        ham.style.setProperty("display","block")
        squeare.style.setProperty("right","-250px")
        transparent.style.setProperty("background-color","transparent")
        nav.style.setProperty("width","0vw")  
        nav.style.setProperty("height","0vh")  
    })
    ham.addEventListener('click',e=>{
        exitHam.style.setProperty("display","block")
        ham.style.setProperty("display","none")
        squeare.style.setProperty("right","0px")
        transparent.style.setProperty("background-color","rgba(0, 0, 0, 0.678)")
        nav.style.setProperty("width","100vw")  
        nav.style.setProperty("height","100vh")  
    })

}

export default ham