// Curved Header Text
new CircleType(document.getElementById('curvedHeaderNames'))
    .radius(800);

new CircleType(document.getElementById('curvedHeaderMarried'))
    .dir(-1)
    .radius(800);

// About Us Questions
function showCardInfo(index) {
    const about_question = document.querySelector(".back-question");
    const option_list = document.querySelector(".card-options");
    const question_explanation = document.querySelector(".card-explanation")
    let question_text = questions[index].question;
    let options = '<button>' + questions[index].options[0] + '</button>'
                + "<button>" + questions[index].options[1] + "</button>"
                + "<button>" + questions[index].options[2] + "</button>";
    let explanation = questions[index].explanation;
    about_question.innerHTML = question_text;
    option_list.innerHTML = options;
    question_explanation.innerHTML = explanation;
}

showCardInfo(0);