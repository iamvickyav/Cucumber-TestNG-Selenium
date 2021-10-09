$(document).ready(function() {
    $('#add').click(function() {
 
        var checkBoxName = $('#name').val();
        $('#container').append(
            $(document.createElement('input')).prop({
                id: checkBoxName,
                value: checkBoxName,
                type: 'checkbox'
            })
        ).append(
            $(document.createElement('label')).prop({
                for: checkBoxName
            }).html(checkBoxName)
            ).append(document.createElement('br'));

        $('#name').val('');
    }) 
});