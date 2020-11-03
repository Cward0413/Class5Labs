$(document).ready(function(){

        //add event handlers
        $("form").submit(greetUser);
        $("input[type=number]").change(updatePrice);

        //all other functions (program logic)

        function greetUser(event){

            //prevents form from flashing and resetting
            event.preventDefault();

            //get users name
            var fName = $("#fName").val();
            var lName = $("#lName").val();
            var fullName = fName + " " + lName;

            //find selected rank
            var selectedRank = $("input[name=rank]:checked");
            var abbrevRank = selectedRank.data("abbrev");
            var rankColor = selectedRank.data("color");

            //create the full greeting
            var greet = "Hello, " + abbrevRank + " " + fullName;

            //put greeting on screen
            $("#greeting").text(greet);
            $("#greeting").css("color", rankColor);
        }

        function updatePrice(){

            //get qtys in cart
            var books = $("#qtyBook").val();
            var donations = $("#qtyDonation").val();

            //get prices
            var bPrice = books * 39.99;
            var dPrice = donations * 14.99;
            var grandTotal = bPrice + dPrice;

            //output prices
            $("#totalBook").text((bPrice).toFixed(2));
            $("#totalDonation").text((dPrice).toFixed(2));
            $("#grandTotal").text((grandTotal).toFixed(2));
        }

});