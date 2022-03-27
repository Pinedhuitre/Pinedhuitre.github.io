jQuery(document).ready(function () {
    $('ul').hide();
    
    function choix(){var select = document.getElementById( "CommuneSelect" ),
            
    index = select.selectedIndex;
    
alert( select.options[ index ].value );
    }

function choix(){var select = document.getElementById( "CommuneSelect" ),
            
					index = select.selectedIndex;
					
					var test = select.options[ index ].value ;
					$("ul").hide();
					$("."+test).show();
					}
                })