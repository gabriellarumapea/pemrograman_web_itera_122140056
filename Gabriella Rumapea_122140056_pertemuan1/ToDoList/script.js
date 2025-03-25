document.addEventListener("DOMContentLoaded", function () {
    const todoInput = document.getElementById("todo-input");
    const addBtn = document.getElementById("add-btn");
    const todoList = document.getElementById("todo-list");

    // Load todos saat halaman dimuat
    loadTodos();

    // Event listener untuk tombol tambah
    addBtn.addEventListener("click", function () {
        addTodo();
    });

    // Event listener untuk input field (Enter key)
    todoInput.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            addTodo();
        }
    });

    // Fungsi menambahkan todo
    function addTodo() {
        let todoText = todoInput.value.trim();
        if (todoText === "") {
            alert("Tugas tidak boleh kosong!");
            return;
        }

        let todos = getTodos();
        todos.push({ text: todoText, completed: false });
        saveTodos(todos);

        todoInput.value = ""; // Reset input
        renderTodos();
    }

    // Fungsi untuk menampilkan todo dari localStorage
    function renderTodos() {
        todoList.innerHTML = "";
        let todos = getTodos();

        todos.forEach((todo, index) => {
            let li = document.createElement("li");
            li.textContent = todo.text;
            li.classList.toggle("completed", todo.completed);

            // Klik untuk menandai selesai
            li.addEventListener("click", function () {
                toggleTodo(index);
            });

            // Tombol hapus
            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Hapus";
            deleteBtn.classList.add("delete-btn");
            deleteBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                deleteTodo(index);
            });

            li.appendChild(deleteBtn);
            todoList.appendChild(li);
        });
    }

    // Fungsi untuk mengambil data dari localStorage
    function getTodos() {
        return JSON.parse(localStorage.getItem("todos")) || [];
    }

    // Fungsi untuk menyimpan data ke localStorage
    function saveTodos(todos) {
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    // Fungsi untuk menandai tugas selesai
    function toggleTodo(index) {
        let todos = getTodos();
        todos[index].completed = !todos[index].completed;
        saveTodos(todos);
        renderTodos();
    }

    // Fungsi untuk menghapus tugas
    function deleteTodo(index) {
        let todos = getTodos();
        todos.splice(index, 1);
        saveTodos(todos);
        renderTodos();
    }

    // Fungsi untuk memuat data dari localStorage saat halaman dibuka
    function loadTodos() {
        renderTodos();
    }
});
