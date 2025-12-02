document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-button');
    const resultElement = document.getElementById('result');

    let currentQuestionIndex = 0;

    async function gradeQuestion() {
        const selected = document.querySelector('input[name="answer"]:checked');
        if (!selected) {
            alert("Please choose an answer.");
            return null;
        }

        const response = await fetch('/api/grade', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: currentQuestionIndex + 1,   // questions start at ID 1
                answer: selected.value
            })
        });

        const result = await response.json();
        return result.correct;
    }

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

    nextButton.addEventListener('click', async () => {
    const isCorrect = await gradeQuestion();
    if (isCorrect === null) return;

    if (isCorrect) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect.";
    }

    if (currentQuestionIndex >= 2) {
        questionElement.textContent = 'Quiz completed!';
        nextButton.disabled = true;
        return;
    }

    currentQuestionIndex++;
    loadQuestion();
});
    if(currentQuestionIndex === 0)
    {
        loadQuestion();
    }
});
