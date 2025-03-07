document.addEventListener("DOMContentLoaded", function () {
    let tg = window.Telegram.WebApp;
    tg.expand(); // Разворачиваем Web App на весь экран

    document.querySelectorAll(".status-btn").forEach(button => {
        button.addEventListener("click", function () {
            let emoji = this.getAttribute("data-emoji");

            // Устанавливаем статус пользователя
            if (tg.initDataUnsafe.user) {
                tg.setEmojiStatus(emoji);
                tg.close(); // Закрываем Web App после выбора
            } else {
                alert("Error: Telegram Web App not initialized.");
            }
        });
    });
});