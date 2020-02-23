const zero = document.querySelector('#zero');
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const add = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const mult = document.querySelector('#mult');
const clear = document.querySelector('#clear');
const div = document.querySelector('#div');
const per = document.querySelector('#per');
const equals = document.querySelector('#equals');




var disp = document.querySelector("#results");
function ud(n) {
  disp.innerHTML += n;
}



function ans() {
  c = eval(disp.innerHTML);
  disp.innerHTML = c;
}
zero.addEventListener('click', function () {
  ud(0);

});

one.addEventListener('click', function () {
  ud(1);

});

two.addEventListener('click', function () {
  ud(2);

});

three.addEventListener('click', function () {
  ud(3);

});

four.addEventListener('click', function () {
  ud(4);


});


five.addEventListener('click', function () {
  ud(5);


});

six.addEventListener('click', function () {
  ud(6);

});

seven.addEventListener('click', function () {
  ud(7);


});


eight.addEventListener('click', function () {
  ud(8);


});


nine.addEventListener('click', function () {
  ud(9);

});

add.addEventListener('click', function () {

  ud('+');



});

sub.addEventListener('click', function () {

  ud('-');


});

mult.addEventListener('click', function () {
  ud('*');


});


div.addEventListener('click', function () {

  ud('/');



});

equals.addEventListener('click', answer);

function answer() {


  const inputs = document.querySelector("#results").innerHTML;
  const arrays = [];
  arrays.push(inputs);
  const newArrays = Array.from(arrays);

  newArrays.forEach(function (newArray) {

    newArray.split('/');

    if (newArray.includes('//')) {

      document.querySelector("#results").innerHTML = 'undefined';

    } else {

      try {
        ans();

      } catch (e) {

        disp.innerHTML = e.description;

      }

    }


  });



}





clear.addEventListener('click', function () {
  disp.innerHTML = ' ';
  

});

