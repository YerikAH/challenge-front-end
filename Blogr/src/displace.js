const displace =()=>{
  const $connectDisplace = document.getElementById('displace') 
  const $secondContent = document.getElementById('second-content')
  const $moveSvg = document.getElementById('move-svg')
  const $moveWhite = document.getElementById('move-svg-light')
  $connectDisplace.addEventListener('click',e=>{
    e.preventDefault()
    //Move arrow
    $moveSvg.classList.toggle('move-svg-js')
    $moveWhite.classList.toggle('arraw-light-js')
    let height = 0
    if($secondContent.clientHeight== "0"){
      height = $secondContent.scrollHeight
    }
    $secondContent.style.height = `${height}px`
    $secondContent.classList.toggle('second-content-js-one')
  })
}
export default displace