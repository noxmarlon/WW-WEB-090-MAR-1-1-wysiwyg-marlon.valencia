
(function ( $ ) {
    
    $.fn.my_wysiwyg = function( options ) {
      
        
        $('body').prepend(" <div id='text' contenteditable='true'  style='width: 1500px; height: 800px; border: 2px solid black'></div>");
        $('body').prepend(" <div id='toolbar'></div>"); 
        
        var bouttons = ['bold','italic','souligner','center','gauche','droite','barré','police','color','indent','outdent','select','createLink','codeSource','codeSourcehide','sauvegarde'];
        
        for(var button = 0 ; bouttons.length > button; button++){
            if(bouttons[button] == 'select'){
                $('#toolbar').append('<select></select>');
                for(var i=1; i<8; i++){
                    $('select').append("<option selected='selected'value="+i+">size "+i+"</option>");
                }
            }  
            else{
                $('#toolbar').append("<input type='button' value="+bouttons[button]+">");
            }
        }

          
       
        
        $( "input[value=bold]" ).on( "click", function() { 
            document.execCommand('bold'); 
        });
        
        $( "input[value=italic]" ).on( "click", function() { 
            document.execCommand('italic'); 
        });
        
        $( "input[value=souligner]" ).on( "click", function() { 
            document.execCommand('underline'); 
        });
        
        $( "input[value=center]" ).on( "click", function() { 
            document.execCommand('justifyCenter'); 
        });
        
        $( "input[value=gauche]" ).on( "click", function() { 
            document.execCommand('justifyLeft');
        });
        
        $( "input[value=droite]" ).on( "click", function() { 
            document.execCommand('justifyRight'); 
        });
        
        $( "input[value=barré]" ).on( "click", function() { 
            document.execCommand('strikeThrough');  
        });
        
        $( "input[value=police]" ).on( "click", function() { 
            var x = prompt('entrer le nom de votre police!');
            document.execCommand('fontName',true ,x); 
        });
        
        $( "input[value=createLink]" ).on( "click", function() { 
            var link = prompt('entrer un lien');
            document.execCommand('createLink',true , link); 
        });
        $( "input[value=createLinkphoto]" ).on( "click", function() { 
            var url = prompt('entrer un lien photo');
            
            document.execCommand('createLink',true , link); 
        });
        
        $( "input[value=color]" ).on( "click", function() { 
            var y = prompt('entrer une couleur!');
            document.execCommand('foreColor',true ,y); 
        });
        
        $( "input[value=indent]" ).on( "click", function() { 
            document.execCommand('indent',true ,null); 
        });
        
        $( "input[value=outdent]" ).on( "click", function() { 
            document.execCommand('outdent',true ,null); 
        });
        
        $( "select" ).change(function() { 
            var str = "";
            $( "select option:selected" ).each(function() {
                str += $( this ).val();
            });  
            document.execCommand('fontSize',true, str);    
        });
        
        $("input[value=codeSource]").on("click", function(){
            
            $('textarea').attr("style","display: inline-block; width: 800px; height: 130px; border: 2px solid black");
            var t = $('#text').html();
            $('textarea').text(t);
            $('#text').attr("style","display: none");
        });
        
        $("input[value=codeSourcehide]").on("click", function(){
            $('textarea').attr("style","display: none");
            $('#text').attr("style","display: inline-block;");
            $('#text').attr("style"," display: inline-block; width: 1500px; height: 800px; border: 2px solid black");
        });

        $('input[value=sauvegarde]').on('click', function(){
            var save = $('#text').text();
            localStorage.setItem('savegarde',save);           
        });
        
        setInterval(function(){ var save = $('#text').text(); localStorage.setItem('text', save); }, 15); 
    
        var storageObj = localStorage.getItem('text');

        if(storageObj){
            $('#text').text(storageObj);
        }

        var settings = $.extend({  
           
        }, options );
        
        this.attr({     
            style:settings.style
        });
        
    };
}( jQuery ));

$( "textarea" ).my_wysiwyg({ 
    style: 'display: none;' 
    
});