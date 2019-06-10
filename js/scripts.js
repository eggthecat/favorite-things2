$(document).ready(function(){
  //whenever our "form" is "submitted" we perform a "function"
  $("form").submit(function(event){
    event.preventDefault();


    var inputs = [0, 0, 0];
    for (i = 0; i < inputs.length; i++) {
      inputs[i] = $("input:text[name=q" + (i + 1) + "]").val();
    }
    for (var i = 0; i < inputs.length; i++) {
      $("ul#list li:nth-child(" + (i + 1) + ")").text(inputs[i]);
    }

  var languages = ['japanese', 'lebanese', 'english', 'creole'];
// for all languages in the array; each will a perfom a singular action.  (language) translates into spot of 'var = languages'
  languages.forEach(function(language){
    alert('I eat '+ language + ' food!');
  })




    //this works now
    // var array = [$("input:text[name=q1]").val(), $("input:text[name=q2]").val(), $("input:text[name=q3]").val()];
    //
    // for (var i = 0; i < array.length; i++) {
    //   $("ul#list li:nth-child(" + (i + 1) + ")").text(array[i]);
    // }

    //
    //
    //
    //
    // var question1 = $("input:text[name=q1]").val();
    // array[0] = question1
    // alert(array[0]);
    //
    //
    //
    // array[0] = $("input:text[name=q1]").val();

    //declare array
    // var array = []
    // //This will take the user input and put it in the array
    // array.push($("input:text[name=q1]").val());
    // array.push($("input:text[name=q2]").val());
    // array.push($("input:text[name=q3]").val());
    //
    // // This calls out the "#list" to show the input as output in listed items for the array.
    // // this takes the the user input stored in array and outputs it as text to the child of the ul with id list
    // $("ul#list li:nth-child(1)").text(array[0]);
    // $("ul#list li:nth-child(2)").text(array[1]);
    // $("ul#list li:nth-child(3)").text(array[2]);

    console.log(languages[0]);
  });
});
