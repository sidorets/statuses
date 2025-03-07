document.addEventListener("DOMContentLoaded", function () {
    let tg = window.Telegram.WebApp;
    tg.expand(); // Разворачиваем Mini App на весь экран

    // Проверяем, можно ли устанавливать статусы
    if (!tg.setEmojiStatus) {
        alert("Ваш Telegram-клиент не поддерживает установку статусов.");
        return;
    }

    document.querySelectorAll(".status-btn").forEach(button => {
        button.addEventListener("click", function () {
            let emoji = this.getAttribute("data-emoji");

            if (tg.initDataUnsafe.user) {
                try {
                    tg.setEmojiStatus(emoji);
                    alert(`Статус ${emoji} установлен!`);
                    tg.close(); // Закрываем Mini App после установки статуса
                } catch (error) {
                    alert("Ошибка установки статуса: " + error.message);
                }
            } else {
                alert("Ошибка: Telegram Web App не инициализирован.");
            }
        });
    });
});