document.addEventListener('DOMContentLoaded', () => {
    const showPopup = (questionNumber) => {
        const popupContainer = document.getElementById('question-popup');
        const questionInfo = document.getElementById('question-info');

        questionInfo.textContent = `This is the pop-up for Question ${questionNumber}`;
        popupContainer.classList.remove('hidden');
    };

    for (let i = 1; i <= 36; i++) {
        const button = document.getElementById(`button ${i}`);
        if (button) {
            button.addEventListener('click', () => {
                showPopup(i);
            });
        }
    }

    const closePopupButton = document.getElementById('close-popup');
    if (closePopupButton) {
        closePopupButton.addEventListener('click', () => {
            const popupContainer = document.getElementById('question-popup');
            popupContainer.classList.add('hidden');
        });
    }
});