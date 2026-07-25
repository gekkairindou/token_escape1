const mokuroku = document.getElementById("mokuroku");
const menu = document.getElementById("menu");
const closeBtn = document.getElementById("closeBtn");

/* ▼ 変更：目録ボタンでメニューを開く */
mokuroku.addEventListener("click", () => {
    menu.classList.add("open");
});

/* ▼ 変更：×ボタンでメニューを閉じる（即時表示） */
closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
});