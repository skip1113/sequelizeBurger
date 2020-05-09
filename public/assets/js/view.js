$(document).ready(function() {
    var burgers = [];
    getBurger();
    function initializeRows() {
        $burgerContainer.empty();
        var rowsToAdd = [];
        for (var i = 0; i <burgers.length; i++) {
            rowsToAdd.push(createNewRow(burgers[i]));
        }
        $burgerContainer.prepend(rowsToAdd);
    }
    function getBurger() {
        $.get("/api/burgers", function(data) {
            burgers = data;
            initializeRows();
        })
    }
    function createNewRow(todo) {
        var $newInputRow = $(
          [
            "<li class='list-group-item todo-item'>",
            "<span>",
            todo.text,
            "</span>",
            "<input type='text' class='edit' style='display: none;'>",
            "<button class='delete btn btn-danger'>x</button>",
            "<button class='complete btn btn-primary'>✓</button>",
            "</li>"
          ].join("")
        );
    
        $newInputRow.find("button.delete").data("id", todo.id);
        $newInputRow.find("input.edit").css("display", "none");
        $newInputRow.data("todo", todo);
        if (todo.complete) {
          $newInputRow.find("span").css("text-decoration", "line-through");
        }
        return $newInputRow;
      }
})