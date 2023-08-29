// var section = document.querySelectorAll('section');
// var header = document.querySelectorAll('div nav a');

// window.onscroll = () => {
//   section.forEach(sec => {
//     let top  = window.screenY;
//     let offset = sec.offsetTop - 150;
//     let height = sec.offsetHeight;
//     let id = sec.getAttribute('id');

//     if(top>=offset && top < offset + height){
//       header.forEach(links => {
//         links.classList.remove('active');
//         document.querySelectorAll('header nav a[href*=' + id +']').classList.add('active');
//       });
//     };
//   });
//   let barplace = document.getElementById('home1');
//   barplace.classList.toggle('sticky',window.scrollY > 100);
// };






















// const name = document.getElementById('name').value;
  //  var email = document.getElementById('email').value;
  //  var message = document.getElementById('message').value;
   var button = document.getElementById('button');
    // var email = document.getElementById('email').value;
    // var message = document.getElementById('message').value;
  button.addEventListener('click',function(e){
    e.preventDefault();
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var name = document.getElementById('name').value;
    var body = name + message ;
    Email.send({
      SecureToken : "cc3a351d-95c7-4d35-8fb9-0c555b673675",
      To : 'bossgod060@gmail.com',
      From : email,
      Subject : "Contact From ",
      Body :  body,
  }).then(
    message => alert(message)
  );
})
