        $(document).ready(function() {
           $('img').click(function(){
            var id = $(this).attr("id");
            $.get(`https://www.anapioficeandfire.com/api/houses/${id}`, function(res){
                console.log(res)
                var string = res.titles[0]
                for (var i = 1; i < res.titles.length; i++) {
                    string += ", " + res.titles[i]
                }
                var html = `<fieldset>
                    <legend>House Detail</legend>
                    <h2>Name: ${res.name}</h2>
                    <h3>Words: ${res.words}</h3>
                    <h3>Titles:${string}</h3>
                </fieldset>`
                $('#results').html(html);
            }, 'json');
            return false;
           })
        });