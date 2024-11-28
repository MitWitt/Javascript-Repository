$(document).ready(function () {
    const $inputBox = $("#input-box");
    const $listContainer = $("#list-container");

    // Lisää tehtävä
    function addTask() {
        const taskText = $inputBox.val().trim();
        if (!taskText) {
            alert("You must write something!");
        } else {
            const $li = $("<li>").text(taskText).hide();
            const $span = $("<span>").html("&times;");
            $li.append($span);
            $listContainer.append($li);
            $li.fadeIn();
            saveData();
        }
        $inputBox.val('');
    }

    // Tallenna data localStorageen
    function saveData() {
        localStorage.setItem("data", $listContainer.html());
    }

    // Näytä tallennetut tehtävät
    function showTask() {
        $listContainer.html(localStorage.getItem("data") || '');
    }

    // Enter-painike lisää tehtävän
    $inputBox.on("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    });

    // Klikkaus Add-painikkeeseen lisää tehtävän
    $("#add-task-button").on("click", function () {
        addTask();
    });

    // Klikkaukset: tehtävän tila tai poisto
    $listContainer.on("click", "li", function () {
        $(this).toggleClass("checked");
        saveData();
    });

    $listContainer.on("click", "span", function (e) {
        $(this).parent().fadeOut(300, function () {
            $(this).remove();
            saveData();
        });
    });

    // Näytä aiemmin tallennetut tehtävät
    showTask();
});
