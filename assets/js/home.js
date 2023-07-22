
let input = document.getElementById("description");
let date = document.getElementById("mydate");
let category = document.getElementById("category");



document.addEventListener('click', (e) => {

    // for selecting todos using check box
    if (e.target.className == "checkmark") {
        let id = { id: e.target.id };
        console.log(id)
        fetch('/select-todo', { method: 'POST', body: JSON.stringify(id), headers: { "Content-type": "application/json; charset=UTF-8" } })
            .then(res => {
                if (res.ok) {
                    console.log("recorded");
                    return;
                }
                throw new Error('Request failed.');
            })
            .catch(function (error) {
                console.log(error);
            });
        window.location.reload();
    }

    // for edit button clicks
    if (e.target.className == "edit-btn") {
        let id = e.target.id.slice(1);
        let edit_btn = document.getElementById(e.target.id);

        // for editing the todo
        if (edit_btn.innerHTML.trim() == "Edit") {

            edit_btn.innerHTML = "save"
            fetch(`/get-todo/${id}`)
                .then(res => res.json())
                .then(data => {
                    input.value = data[0].text;
                    date.value = data[0].calDate.comp_date;
                    category.value = data[0].category;
                })
        } else {

            // for saving the edited todo
            let newData = {
                newtodo: input.value,
                category: category.value,
                date: date.value
            }
            console.log(newData, id);
            fetch(`/edit-todo/${id}`, { method: 'POST', body: JSON.stringify(newData), headers: { "Content-type": "application/json; charset=UTF-8" } })
                .then(res => res.json())
                .then(data => {
                    console.log("successful", data);
                    window.location.reload();
                })
            edit_btn.innerHTML = "Edit"
        }


    }
})