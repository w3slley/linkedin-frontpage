let areas = document.querySelector('.areas')
let more = document.querySelector('.more')
let less = document.querySelector('.less')




more.onclick = function(event){
  event.preventDefault()
  areas.innerHTML = `
    <ul>
      <li><a href="#">Sales</a></li>
      <li><a href="#">Engineering</a></li>
      <li><a href="#">Business Development</a></li>
      <li><a href="#">Finance</a></li>
      <li><a href="#">Healthcare Service</a></li>
      <li><a href="#">Marketing</a></li>
      <li><a href="#">Information Technology</a></li>
      <li><a href="#">Administrative</a></li>
      <li><a href="#">Human Resources</a></li>
      <li><a href="#">Operations</a></li>
      <li><a href="#">Program and Project Management</a></li>
      <li><a href="#">Account</a></li>
      <li><a href="#">Arts and Design</a></li>
      <li><a href="#">Community and Social Services</a></li>
      <li><a href="#">Consulting</a></li>
      <li><a href="#">Education</a></li>
      <li><a href="#">Entrepreneurship</a></li>
      <li><a href="#">Legal</a></li>
      <li><a href="#">Media and Communications</a></li>
      <li><a href="#">Military and Protective Services</a></li>
      <li><a href="#">Product Management</a></li>
      <li><a href="#">Purchasing</a></li>
      <li><a href="#">Quality Assurance</a></li>
      <li><a href="#">Real Estate</a></li>
      <li><a href="#">Research</a></li>
      <li><a href="#">Support</a></li>
    </ul>`

    more.style.display = 'none'
    less.style.display = 'block'
}

less.onclick = function(event){
  event.preventDefault()
  areas.innerHTML = `
    <ul>
      <li><a href="#">Sales</a></li>
      <li><a href="#">Engineering</a></li>
      <li><a href="#">Business Development</a></li>
      <li><a href="#">Finance</a></li>
      <li><a href="#">Healthcare Service</a></li>
      <li><a href="#">Marketing</a></li>
      <li><a href="#">Information Technology</a></li>
      <li><a href="#">Administrative</a></li>
      <li><a href="#">Human Resources</a></li>
      <li><a href="#">Operations</a></li>
    </ul>`

    less.style.display = 'none'
    more.style.display = 'block'

}
