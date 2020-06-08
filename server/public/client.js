$(document).ready(readyNow);

const moment = require('moment');

function readyNow(params) {
    getTasks();
    $('#submit').on('click', addTask);
    $('table').on('click', '.tDone', taskDone);
    $('table').on('click', '.remove', deleteTask);
};

function getTasks() {
    $.ajax({
        method: 'GET',
        url: '/tasks'
    }).then((response) => {
        $('.taskTable').empty();
        for (const task of response) {
            let sDate = task.date_start;
            let eDate = task.date_end;
            let tr = $(`<tr data-id=${task.id}> </tr>`)
            tr.append(`
            <td>${sDate.split('T')[0]}</td>
            <td>${eDate.split('T')[0]}</td>
            <td>${task.task}</td>`);
            if (task.done === 'not finished'){tr.append(`<td><button class="btn btn-warning tDone">${task.done}</button></td>`)}
            else{tr.append(`<td><button class="btn btn-success tDone" disabled>${task.done}</button></td>`)}
            tr.append(`<td><button class="btn btn-danger remove">Remove</button>`)
            $('.taskTable').append(tr);
        }
    })
}; // end getTasks

function addTask() {
    const eDate = $('#finishDate').val();
    const task = $('#task').val();
    if ((eDate !== undefined) || (task !== undefined)) {
    $.ajax({
        method: 'POST',
        url: '/tasks',
        data: {
            eDate: eDate,
            task: task,
        }
    }).then(() => {
        getTasks()
        $('#finishDate').val('');
        $('#task').val('');
    });
}else {
    alert(`Please fill out all fields thank you`)
};
}; // end add task

function taskDone() {
    const el = $(event.target);
     console.log(el.parent().parent().data('id'));
     let id = el.parent().parent().data('id');
     const r = confirm(`Mark task as complete?`);
     if (r === true) {
         $.ajax({
             method: 'PUT',
             url: `/tasks/${id}`,
         }).then(() =>{ console.log(`status has been updated`); getTasks();});
     }else{ console.log(`Did not change status`);}   
};// end taskDone

function deleteTask() {
    const el = $(event.target);
    console.log(el.parent().parent().data('id'));
    let id = el.parent().parent().data('id');
    const r = confirm(`Are you sure you want to delete?`);
    if (r === true) {
        $.ajax({
            method: 'DELETE',
            url: `/tasks/${id}`,
        }).then(() => {console.log(`delete has been submitted`); getTasks();});
    }else{console.log('Did not delete task')};
};// end deleteTask