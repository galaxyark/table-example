'use strict';

const $table = $('#table').bootstrapTable({
    columns: [{
        field: 'id',
        title: 'Item ID'
    }, {
        field: 'name',
        title: 'Item Name'
    }, {
        field: 'price',
        title: 'Item Price'
    }],
    pagination: true,
    search: true
});

async function getData() {
    const res = await fetch('/api/data');
    const data = await res.json();

    $table.bootstrapTable('load', data);
    return data;
}

let data = getData();
console.log(data);
console.log(table);

