document.getElementById('check-answers').addEventListener('click', function () {
    const inputs = document.querySelectorAll('#crossword input');
    let correctCount = 0;
    let total = 0;

    inputs.forEach(input => {
        const userAnswer = input.value.toUpperCase();
        const correctAnswer = input.dataset.answer;

        if (correctAnswer) {
            total++;
            if (userAnswer === correctAnswer) {
                input.style.backgroundColor = '#c8e6c9'; // Hijau untuk jawaban benar
                correctCount++;
            } else {
                input.style.backgroundColor = '#ffcdd2'; // Merah untuk jawaban salah
                input.title = `Jawaban yang benar adalah ${correctAnswer}`; // Tooltip
            }
        }
    });

    const resultMessage = `Anda menjawab ${correctCount} dari ${total} kotak dengan benar.`;
    document.getElementById('result').textContent = resultMessage;
});

document.getElementById('reset-crossword').addEventListener('click', function () {
    const inputs = document.querySelectorAll('#crossword input');
    inputs.forEach(input => {
        input.value = '';
        input.style.backgroundColor = '#fff';
    });
    document.getElementById('result').textContent = '';
});
