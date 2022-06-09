const handleHam = () =>{
  const $onHam = document.getElementById('ham-on')
  const $offHam = document.getElementById('ham-off')
  const $contentNav = document.getElementById('content-nav')
  $onHam.addEventListener('click',e=>{
    $contentNav.classList.toggle('visible-on')
    $onHam.style.setProperty('display','none')
    $offHam.style.setProperty('display','block')
  })
  $offHam.addEventListener('click',e=>{
    $contentNav.classList.toggle('visible-on')
    $onHam.style.setProperty('display','block')
    $offHam.style.setProperty('display','none')
  })

}
export default handleHam;