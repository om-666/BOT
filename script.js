const localFarmerQuestions = [
    { question: " ମୁଁ ବୀମା ପଲିସିରେ କିପରି ନାମ ଲେଖାଇବି?", answer: "ଆପ୍ ମାଧ୍ୟମରେ ଆପଣଙ୍କର ବିବରଣୀ ପ୍ରଦାନ କରି ଆପଣ ବୀମା ପଲିସିରେ ନାମ ଲେଖାଇ ପାରିବେ | ଆପଣ ନାମଲେଖା ପ୍ରକ୍ରିୟା ଉପରେ ମାର୍ଗଦର୍ଶନ ଚାହୁଁଛନ୍ତି କି?" },
    { question: "ଏକ ଦାବି ଦାଖଲ କରିବା ପରେ ମୁଁ କେବେ ଏକ SMS ବିଜ୍ଞପ୍ତି ଗ୍ରହଣ କରିବି?", answer: "ତୁମର ଦାବି କର୍ତ୍ତୃପକ୍ଷଙ୍କ ଦ୍ବାରା ଅନୁମୋଦିତ ହେବା ପରେ ତୁମେ ଏକ SMS ବିଜ୍ଞପ୍ତି ପାଇବ | ଦୟାକରି ନିଶ୍ଚିତ କରନ୍ତୁ ଯେ ଆପଣଙ୍କର ପ୍ରୋଫାଇଲ୍ ରେ ଆପଣଙ୍କର ଯୋଗାଯୋଗ ବିବରଣୀ ଅପ-ଟୁ-ଡେଟ୍ ଅଟେ |" },
    { question: "ମୁଁ ମୋର ସ୍ଥାନୀୟ ଭାଷାରେ ବିଜ୍ଞପ୍ତି ଏବଂ ସୂଚନା ଗ୍ରହଣ କରିପାରିବି କି?", answer: " ହଁ, ଆପଣଙ୍କ ପରି କୃଷକମାନଙ୍କ ପାଇଁ ଉତ୍ତମ ସୁବିଧା ସୁନିଶ୍ଚିତ କରିବାକୁ ଆପ୍ ସ୍ଥାନୀୟ ଭାଷାଗୁଡ଼ିକୁ ସମର୍ଥନ କରେ | ଆପଣ ସେଟିଂରେ ଆପଣଙ୍କର ପସନ୍ଦିତ ଭାଷା ବାଛିପାରିବେ |" },
    { question: "ମୋର ବୀମା ଦାବିର ସ୍ଥିତିକୁ ମୁଁ କିପରି ଟ୍ରାକ୍ କରିପାରିବି?", answer: "ଆପ୍ ର “ଟ୍ରାକ୍ ଦାବି” ବଶିଷ୍ଟ୍ୟ ମାଧ୍ୟମରେ ତୁମର ଆଧାର ନମ୍ବର ବ୍ୟବହାର କରି ତୁମର ବୀମା ଦାବିର ସ୍ଥିତିକୁ ଟ୍ରାକ୍ କରିପାରିବ | ତୁମର ଦାବି ଟ୍ରାକିଂ କରିବାରେ ସାହାଯ୍ୟ ଚାହୁଁଛ କି?" },
    { question: "ବୀମା ପଲିସିକୁ ଭଲ ଭାବରେ ବୁଝିବାରେ ମୋତେ ସାହାଯ୍ୟ କରିବାକୁ ଭିଡିଓ ଟ୍ୟୁଟୋରିଆଲ୍ ଉପଲବ୍ଧ କି?", answer: "ହଁ, ଆପ୍ ବୀମା ପଲିସି ଏବଂ ଏହାର ଲାଭ ବିଷୟରେ ସଚେତନତା ସୃଷ୍ଟି କରିବାକୁ ଭିଡିଓ ଟ୍ୟୁଟୋରିଆଲ୍ ପ୍ରଦାନ କରେ | ଆପଣ ସେଗୁଡିକୁ “ଟ୍ୟୁଟୋରିଆଲ୍” ବିଭାଗରେ ପ୍ରବେଶ କରିପାରିବେ " }
        ];

const govInsuranceQuestions = [
{
    "question": "How is claim verification done using meteorological department data?",
    "answer": "Claims are verified using meteorological department data to assess the impact of weather conditions on crop damage. This helps ensure accurate and timely processing of claims. Would you like more details on the verification process?"
},
{
    "question": "Is there a helpline available for farmers to seek assistance regarding insurance claims?",
    "answer": "Yes, there is a helpline available for farmers to seek assistance regarding insurance claims. You can find the helpline number in the 'Help & Support' section of the app."
}
];

const farmingQueries = [
    { question: "କେଉଁ ଫସଲ ମୋ ଅଞ୍ଚଳ ପାଇଁ ଉପଯୁକ୍ତ?", answer: " ଫସଲର ଉପଯୁକ୍ତତା ମୃତ୍ତିକାର ପ୍ରକାର, ଜଳବାୟୁ ଏବଂ ଜଳ ଉପଲବ୍ଧତା ଉପରେ ନିର୍ଭର କରେ | ବ୍ୟକ୍ତିଗତ ସୁପାରିଶ ପାଇଁ ଦୟାକରି ଆପଣଙ୍କର ଅବସ୍ଥାନ ପ୍ରଦାନ କରନ୍ତୁ |" },
    { question: "ମୁଁ କିପରି ମୋର ଫସଲକୁ କୀଟନାଶକ ଏବଂ ରୋଗରୁ ରକ୍ଷା କରିପାରିବି?", answer: "ସମନ୍ବିତ କୀଟ ପରିଚାଳନା (ଆଇପିଏମ) କୌଶଳ ଯେପରିକି ଫସଲ ପରିବର୍ତ୍ତନ, ପ୍ରତିରୋଧୀ ପ୍ରଜାତି ବ୍ୟବହାର ଏବଂ ଉପଯୁକ୍ତ ପରିମଳ ଦ୍ୱାରା ପୋକ ଏବଂ ରୋଗ କ୍ଷୟକ୍ଷତି ହ୍ରାସ କରିବାରେ ସହାୟକ ହୋଇପାରିବ । ଆପଣ IPM ବିଷୟରେ ଅଧିକ ବିସ୍ତୃତ ସୂଚନା ଚାହୁଁଛନ୍ତି କି?"},
    { question: "ମୁଁ କିପରି ମାଟିର ଉର୍ବରତାକୁ ଉନ୍ନତ କରିପାରିବି?", answer: "ପୁଷ୍ଟିକର ଆବଶ୍ୟକତା ନିର୍ଣ୍ଣୟ କରିବା ପାଇଁ ଫସଲ ଘୂର୍ଣ୍ଣନ, ଜୈବିକ ପଦାର୍ଥ ଯୋ​‌େ​‌ଗ (କମ୍ପୋଷ୍ଟ, ଖତ) ଏବଂ ମୃତ୍ତିକା ପରୀକ୍ଷଣ ପରି ଅଭ୍ୟାସ ମାଧ୍ୟମରେ ମୃତ୍ତିକାର ଉର୍ବରତା ବୃଦ୍ଧି କରାଯାଇପାରିବ | ଆପଣ ଏକ ମାଟି ପରୀକ୍ଷା କରିବା ପାଇଁ ମାର୍ଗଦର୍ଶନ ଚାହୁଁଛନ୍ତି କି?" },
    { question: "କୃଷକମାନଙ୍କ ପାଇଁ କେଉଁ ସରକାରୀ ଯୋଜନା ଉପଲବ୍ଧ?", answer: "କୃଷକମାନଙ୍କୁ ସହାୟତା କରିବାକୁ ଲକ୍ଷ୍ୟ ରଖାଯାଇଥିବା ବିଭିନ୍ନ ସରକାରୀ ଯୋଜନା ରହିଛି, ଯେଉଁଥିରେ ଇନପୁଟ, ବୀମା ଏବଂ ଆର୍ଥିକ ସହାୟତା ପାଇଁ ସବ୍‌ସିଡି ଅନ୍ତର୍ଭୁକ୍ତ | ଅଧିକ ବିବରଣୀ ପାଇଁ ଆପଣ ଆପ୍‌ରେ “ସରକାରୀ ଯୋଜନା” ବିଭାଗ ଅନୁସନ୍ଧାନ କରିପାରିବେ |" },
    { question: "ମୁଁ କିପରି ମୋ କ୍ଷେତରେ ଘାସକୁ କିପରି ନିୟନ୍ତ୍ରଣ କରିପାରିବି?", answer: "ଗଛ ପରିଚାଳନା କୌଶଳ ମଧ୍ୟରେ ମାନୁଆଲ ଗଛ କାଟିବା, ମଲଚିଂ ଏବଂ ହର୍ବିସାଇଡ ବ୍ୟବହାର ଅନ୍ତର୍ଭୁକ୍ତ । ଗଛ ପ୍ରଜାତି ଏବଂ ଫସଲ ପର୍ଯ୍ୟାୟ ଆଧାରରେ ସଠିକ୍ ପଦ୍ଧତି ବାଛିବା ଜରୁରୀ ଅଟେ । " },
    { question: "ଜଳସେଚନ ପାଇଁ ସର୍ବୋତ୍ତମ ଅଭ୍ୟାସଗୁଡିକ କ’ଣ?", answer: "ଫଳପ୍ରଦ ଜଳସେଚନ ପ୍ରଣାଳୀରେ ଫସଲ ଆବଶ୍ୟକତା ଉପରେ ଆଧାର କରି ଜଳସେଚନ ନିର୍ଦ୍ଧାରଣ, ଡ୍ରପ୍ କିମ୍ବା ସ୍ପ୍ରିଙ୍କଲର ପ୍ରଣାଳୀ ବ୍ୟବହାର ଏବଂ ଜଳ ଅପଚୟକୁ କମ୍ କରାଯାଇଥାଏ | ଜଳ ନିଷ୍କାସନକୁ ରୋକିବା ପାଇଁ ସଠିକ୍ ଜଳ ନିଷ୍କାସନ ମଧ୍ୟ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ |" },
    { question: "ମୋ ଫସଲରେ ପୁଷ୍ଟିକର ଅଭାବକୁ ମୁଁ କିପରି ଚିହ୍ନଟ କରିପାରିବି?", answer: "ପୁଷ୍ଟିକର ଅଭାବ ଉଦ୍ଭିଦଗୁଡିକରେ ନିର୍ଦ୍ଦିଷ୍ଟ ଲକ୍ଷଣ ପ୍ରଦର୍ଶନ କରେ, ଯେପରିକି ହଳଦିଆ ହେବା କିମ୍ବା ବୃଦ୍ଧି ରେ ବାଧା ସୃଷ୍ଟି ହୁଏ । ପୋଷକ ତତ୍ତ୍ୱର ଅଭାବକୁ ଚିହ୍ନଟ କରିବା ଏବଂ ସମାଧାନ କରିବାକୁ ଆପଣ ଆପ୍ଲିକେସନରେ “ଫସଲ ନିର୍ଣ୍ଣୟ” ଉପକରଣ ବ୍ୟବହାର କରିପାରିବେ |" },
    { question: "କୃଷି କାର୍ଯ୍ୟକଳାପ ପାଇଁ ମୁଁ କେଉଁଠାରୁ ଆର୍ଥିକ ସହାୟତା ପାଇବି?", answer: "ବ୍ୟାଙ୍କ, ସରକାରୀ ଯୋଜନା ଏବଂ କୃଷି ସମବାୟ ସମିତି ମାଧ୍ୟମରେ କୃଷି ପାଇଁ ଆର୍ଥିକ ସହାୟତା ଉପଲବ୍ଧ | ଆପଣ ଆପରେ ଥିବା “ଆର୍ଥିକ ସହାୟତା” ବିଭାଗ ମାଧ୍ୟମରେ ଋଣ ବିକଳ୍ପ ଏବଂ ସବସିଡି ଅନୁସନ୍ଧାନ କରିପାରିବେ" },
    
     
        ];
function showQuestions() {
    const category = document.getElementById('category').value;
    const questionsDropdown = document.getElementById('questions');
    if (category === 'local-farmer') {
        populateDropdown(questionsDropdown, localFarmerQuestions);
    } else if (category === 'gov-insurance') {
        populateDropdown(questionsDropdown, govInsuranceQuestions);
    } else if (category === 'farming-queries') {
        populateDropdown(questionsDropdown, farmingQueries);
    } else {
        questionsDropdown.style.display = 'none';
        questionsDropdown.innerHTML = '';
    }
}

function populateDropdown(dropdown, questions) {
    dropdown.style.display = 'block';
    dropdown.innerHTML = '<option value="">Select Question</option>';
    questions.forEach((item, index) => {
        dropdown.innerHTML += `<option value="${index}">${item.question}</option>`;
    });
}

function askQuestion() {
    const category = document.getElementById('category').value;
    const selectedQuestionIndex = document.getElementById('questions').value;
    let questions;
    if (category === 'local-farmer') {
        questions = localFarmerQuestions;
    } else if (category === 'gov-insurance') {
        questions = govInsuranceQuestions;
    } else if (category === 'farming-queries') {
        questions = farmingQueries;
    } else {
        return;
    }

    const selectedQuestion = questions[selectedQuestionIndex];
    const question = selectedQuestion.question;
    const answer = selectedQuestion.answer;

    const chatContainer = document.querySelector('.chat-container');
    chatContainer.innerHTML += `<p class="my-2"><strong>You:</strong> ${question}</p>`;
    chatContainer.innerHTML += `<p class="my-2"><strong>Chatbot:</strong> ${answer}</p>`;
}