async function fetchCategories() {
    await fetch('/create-quiz', { method: 'GET' })
        .then(response => response.json())
        .then(DATA => {
            console.log(DATA.status)
            JSON.parse(DATA)
            console.log(DATA)
            DATA.categories.forEach(element => {
                console.log(element.category)
                document.getElementById("categories").innerHTML += "<label class='category' for='" + element.id + "'>" + element.category + "<input type='radio' name='category' value='" + element.id + "' id='" + element.id + "'></label>"
            })
        }).catch((error) => {
            console.error('Error:', error);
        })
    document.getElementById("categories").innerHTML += "<div class='takeusername'><label for='username'><h3>Enter Your </h3><input type='text' name='name' id='username'></label></div>"
    document.getElementById("categories").innerHTML += "<button class='submit' onclick=postCreateQuiz>Submit</button>"
}
fetchCategories();

$("form").submit(function(e) {
    e.preventDefault();
});

async function postCreateQuiz() {
    e.preventDefault();
    console.log("yes")
    await fetch(`/create_quiz`, {
        method: "POST",
        body: JSON.stringify({
            user_name: $("#username").val(),
            category: $('form input[type=radio]:checked').val(),
        }),
    }).preventDefault().then(() => console.log("json"));
}