document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    const resultElement = document.getElementById('result');

    let currentQuestionIndex = 0;

    async function loadQuestion() {
        try {
            const response = await fetch('/api/question');
            const questionData = await response.json();

            questionElement.textContent = questionData.text;
            optionsElement.innerHTML = '';

            questionData.options.forEach(option => {
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.name = 'answer';
                radioInput.value = option;
                optionsElement.appendChild(radioInput);

                const label = document.createElement('label');
                label.textContent = option;
                optionsElement.appendChild(label);
                optionsElement.appendChild(document.createElement('br'));
            });
        } catch (error) {
            console.error('Error loading question:', error);
            questionElement.textContent = 'Error loading quiz.';
        }
    }

    nextButton.addEventListener('click', () => {
        loadQuestion();
    });

    loadQuestion();
});