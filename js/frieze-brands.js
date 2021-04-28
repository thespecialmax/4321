jQuery( document ).ready(function() {

    var brandsList, nbItems;

    jQuery('.frieze-brand-img-logo').each(function(){
        brandsList = jQuery(this);
        nbItems = brandsList.find('a').length;
        brandsList.find('a').css({
            'width':100/nbItems+'%'
        });
    });

    var x = location.hostname.split(".");
    jQuery(".frieze-brand-logo-content .frieze-brand-logo-wrapper a").each(function(){
        if((x[0].indexOf('businesstravel') != -1) || (x[0].indexOf('travelpros') != -1) || (x[0].indexOf('meetings') != -1)){

            /* -- SPECIALS CASES FOR B2B -- */

            var ahurl = jQuery(this).data('data-ahurl') || jQuery(this).attr('data-ahurl');
            if(ahurl != "http://www.hotelformule1.in/"){
                ahurl = "https://all.accor.com"+ahurl;
            }

            jQuery(this).attr('href', ahurl);
            jQuery(this).attr('target', '_blank');
        }else if(x[1] === "accor"){

            var ahurl = jQuery(this).data('data-ahurl') || jQuery(this).attr('data-ahurl');
            jQuery(this).attr('href', ahurl);
        }else {
            var href = jQuery(this).attr('href').split(".");
            if(x[1] != href[1]){
                jQuery(this).attr('target', '_blank');
            }
        }
    });

    jQuery(".frieze-brand-logo-content .frieze-brand-img-logo a").each(function(){

        if((x[0].indexOf('businesstravel') != -1) || (x[0].indexOf('travelpros') != -1) || (x[0].indexOf('meetings') != -1)){

            /* -- SPECIALS CASES FOR B2B -- */

            var ahurl = jQuery(this).data('data-ahurl') || jQuery(this).attr('data-ahurl');
            if(ahurl != "http://www.hotelformule1.in/"){
                ahurl = "https://all.accor.com"+ahurl;
            }

            jQuery(this).attr('href', ahurl);
            jQuery(this).attr('target', '_blank');
        }else if(x[1] === "accor"){

            var ahurl = jQuery(this).data('data-ahurl') || jQuery(this).attr('data-ahurl');
            jQuery(this).attr('href', ahurl);
        }else {
            var href = jQuery(this).attr('href').split(".");
            if(x[1] != href[1]){
                jQuery(this).attr('target', '_blank');
            }
        }
    });
    
    if(navigator.appName.indexOf("Internet Explorer") != -1) {

            if(navigator.appVersion.indexOf('MSIE 8.0') != -1) {

                    jQuery('.frieze-brand-logo-wrapper a').each(function(i, v) {
                            //jQuery(this).append('<img src=' + jQuery(this).css('background-image').split('(')[1].split(')')[0] + ' />');
                            jQuery(this).append("<img src='/imagerie/commun/hotels_marques/frieze-brands.png' />");
                            jQuery(this).css('background', '');
                    });
            }
    }
      
});
