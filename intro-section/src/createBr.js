const theBr=()=>{
    console.log(window.innerWidth)
    const label = document.createElement("br")
    const separator = document.querySelector(".separator")
    document.addEventListener('DOMContentLoaded',e=>{
        if (window.innerWidth >= 1000){
            console.log("Hola mundo")
            separator.appendChild(label)
        }
    })
}
export default theBr