const pages = document.querySelectorAll('.page')
const menus = document.querySelectorAll('.menus a')
const projects = document.querySelectorAll('.project')
const greetings = document.querySelector('#greetings')
const name = document.querySelector('#name')
const writeUp = document.querySelector('.write-up')
/*panel var dec */
const main = document.querySelector('.body')
const panel = document.querySelector('.panel')
const panelClose = document.querySelector('.panel svg')
const readMoreBtn = document.querySelectorAll('.read-more')
/*burger toggle */
const burger = document.querySelector('#burger')
const closeBurger = document.querySelector('#close')
const navMenu = document.querySelector('.menus')
const donateBtn = document.querySelector('.donate')
const hireBtn = document.querySelector('.hire_me .hire-me')
const closeContractBtn = document.querySelector('.close-contract')


/*Adding typewriter effect on write-up */
document.addEventListener('DOMContentLoaded',()=>{
  const animate =(element)=>{
     setTimeout(() => {
      element.classList.add('writer')
      element.style.visibility = 'visible'
      removeAnimation(element)
  }, null);
}
  const removeAnimation =(element)=>{
     setTimeout(() => {
      element.classList.remove('writer')
    }, 2500);
  }
  animate(greetings)
  setTimeout(()=>animate(name),3000)
  setTimeout(()=>{
    writeUp.style.transition = '5s'
    writeUp.style.visibility = 'visible'
    writeUp.classList.add('rise')
  },7000)

})
// Function to check which section is in view

const highlightNav = ()=>{
  document.addEventListener('DOMContentLoaded',()=>{
    // IntersectionObserver to detect which page is active
    let observer = new IntersectionObserver(entries =>{
      entries.forEach(entry =>{
        if (entry.isIntersecting) {
          menus.forEach(menu => menu.classList.remove('active'))
          // Getting the id of the active section
          let id = entry.target.getAttribute('id')
          // add active class to the corresponding menu
          document.querySelector(`.menus a[href="#${id}"]`).classList.add('active')
        }
      })
    },{threshold: 0.5})
    // Observe each section
    pages.forEach(page => observer.observe(page))
    // Smooth scrolling onClicking menu
    menus.forEach(menu =>{
      menu.addEventListener('click',e =>{
        e.preventDefault()
        let targetId = e.target.getAttribute('href')
        document.querySelector(targetId).scrollIntoView({ behaviour : 'smooth'})
      })
    })
  })
}
highlightNav()
/*Adding a scroll behaviour to hide nav-bar:scroll down & show nav:scroll-up*/
let yPosition = window.scrollY
window.addEventListener('scroll',()=>{
  if (yPosition < window.scrollY) {
    document.querySelector('.bar').style.display = 'none'
    document.querySelector('.bar').style.position = 'fixed'
    document.querySelector('.scroll-indicator').style.background = 'lime'
  }else{
    document.querySelector('.scroll-indicator').style.background = 'red'
    document.querySelector('.bar').style.display = 'block'
  }
  yPosition =window.scrollY
})

/*Adding event to the services cards on click */
panelClose.addEventListener('click', () => {
    panel.style.display = 'none'
    main.style.filter = 'none'
})
readMoreBtn.forEach(button => {
    button.addEventListener('click', () => {
        panel.style.display = 'block'
        main.style.filter = 'blur(3px)'
        panel.style.position = 'fixed'
        document.querySelectorAll('.card').forEach(card => {
            let title = card.querySelector('h3').textContent
        })
    })
})
window.addEventListener('touchend', () => {
    panel.style.display = 'none'
    main.style.filter = 'none'
})
panel.addEventListener('focusout', () => {
    panel.style.display = 'none'
    main.style.filter = 'none'
})

/*Adding event to the project cards*/
projects.forEach(project=>{
  project.addEventListener('click',()=>{
    panel.style.display = 'block' 
    main.style.filter = 'blur(3px)'   
  })
})
/*Displayin contract form on hire-me btn click  */
hireBtn.addEventListener('click',()=>{
  document.querySelector('.contract-form')
  .style.display = 'block'
  closeContractBtn.style.display = 'block'
  hireBtn.style.display = 'none'
})
closeContractBtn.addEventListener('click',()=>{
  document.querySelector('.contract-form')
  .style.display = 'none'
  hireBtn.style.display = 'block'
  closeContractBtn.style.display = 'none'
})

/*Hamburger menu toggle */
burger.addEventListener('click',()=>{
  donateBtn.style.display = 'none'
  navMenu.style.display = 'flex'
  burger.style.display = 'none'
  closeBurger.style.display = 'block'
})
closeBurger.addEventListener('click',()=>{
  donateBtn.style.display = 'block'
  navMenu.style.display = 'none'
  burger.style.display = 'block'
  closeBurger.style.display = 'none'

})
document.querySelectorAll('.menu').forEach(menu => {
  menu.addEventListener('click',()=>{
    donateBtn.style.display = 'block'
    navMenu.style.display = 'none'
    burger.style.display = 'block'
    closeBurger.style.display = 'none'
  })
});


/*CRUD operation on portfolio contents*/
let projectsData = []
let allProjects = document.querySelectorAll('.project.card')

// console.log(allProjects)
class Project{
  constructor(id,img,tittle,description){
    this.id = id
    this.img = img
    this.tittle = tittle
    this.description = description
  }
  addItem(){
    // let file = imgChooser.files[0]
    this.id = 123
    this.img = 'This is the image'
    this.tittle = 'projectTittle.value'
    this.description = 'projectDescription.value'
  }
  removeItem(id){

  }
  editItem(){

  }

}
let project = new Project()
project.addItem()
projectsData.push(project)
console.log(projectsData)
/*Creating a Blogger for content creation */
// class Blog extends Blogger{
//   constructor(id,tittle,body,reviews) {
//     this.id = id
//     this.tittle = tittle
//     this.body = body
//   }
// }