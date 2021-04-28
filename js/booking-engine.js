/** > /scripts-v2104/booking/common/utils-booking-engine.js **/
var bookingEngineToggler = {
   
    init : function(){
        /* Initialisation de l'état fermé du div */
        var toggler = false;
        /* Ecouteur du lien plus de critère */
        jQuery(".more-criteria .lnk-moreoptions").click(function(){
            if(toggler == true){
                jQuery(".roomsOptions").slideUp("slow", function(){
                    jQuery(this).addClass("off").removeClass("on");
                    toggler = false;
                });
                /* Gestion du changement de la puce +/- */
                jQuery(".more-criteria .undeploy").addClass("deploy").removeClass("undeploy");
                return false;
            } else {
                jQuery(".roomsOptions").slideDown("slow", function(){
                    jQuery(this).addClass("on").removeClass("off");
                    toggler = true;
                });
                /* Gestion du changement de la puce +/- */
                jQuery(".more-criteria .deploy").addClass("undeploy").removeClass("deploy");
                return false;
            }
        });
    }
};

var roomDisplay = {
   
    init : function(form){
	  
        /* Ecouteur du select enfant par chambre */
        jQuery("select[name$=childrenNumber]").change(function(){
            roomDisplay.showChildrensRooms(this);
        });
	  
        /* Ecouteur du select chambre */
        jQuery("select[name$=search.roomNumber]").change(function(){
            roomDisplay.showRoom(this,1);
        });
	  
        /* Ecouteur du select fake enfant */
        jQuery("select[name$=search.childrenNumber]").change(function(){
            roomDisplay.showChildrens(this,form);
            roomDisplay.showRoom(this,0);
        });
		
    },
	  
    /* Gestion d'affichage du bloc "Chambres" */
    showRoom : function(e, nbr){
        var fieldset = jQuery(e).parents('fieldset');
        if(jQuery(e).val() > nbr){
            jQuery(".roomsDetails").slideDown("slow", function(){
                jQuery(this).addClass("on").removeClass("off");
                jQuery(this).find(".lnk-moreoptions").click(function(){
                    var link = this;
                    if(jQuery(this).parent().hasClass("undeploy")){
                        jQuery(".roomsWrapper").slideUp("slow", function(){
                            jQuery(link).parent().addClass("deploy").removeClass("undeploy");
                        });
                    } else {
                        jQuery(".roomsWrapper").slideDown("slow", function(){
                            jQuery(link).parent().addClass("undeploy").removeClass("deploy");
                        });
                    }
                    return false;
                });
            });
            jQuery(fieldset).find('.adults').hide();
            jQuery(fieldset).find('.childrens').hide();
        } else {
            jQuery(".roomsDetails").slideUp("slow", function(){
                jQuery(this).addClass("off").removeClass("on");
            });
            jQuery(fieldset).find('.adults').show();
            //keep hidden children's combo if no children policy
            if (!fieldset.hasClass('tNoChipol')) {
                jQuery(fieldset).find('.childrens').show();
            }
        }
    },
		
    /* Gestion Enfants depuis les fake select */
    showChildrens : function(e,classform){
        if(jQuery(e).val() > 0){
            jQuery(e).parents(".".classform).find(".tChildrensAges").addClass("on").removeClass("off");
        }
        else{
            jQuery(e).parents(".".classform).find(".tChildrensAges").addClass("off").removeClass("on");
        }
    },
		
    /* Gestion Enfants depuis les rooms criteria */
    showChildrensRooms : function(e){
        if(jQuery(e).val() > 0){
            jQuery(e).parents(".roomDetails").find(".tChildrensAges").addClass("on").removeClass("off");
        }
        else{
            jQuery(e).parents(".roomDetails").find(".tChildrensAges").addClass("off").removeClass("on");
        }
    }
};

/** < /scripts-v2104/booking/common/utils-booking-engine.js **/

/** > /scripts-v2104/booking/common/booking-engine.js **/
/** > /scripts-v2104/erm/erm-configuration.js **/
/** > this file create a variable global namespaced ah to get configuration bookingEngine  => ah.bookingEngineConfiguration **/
/**
 * EXTENDING DES RESERVATIONS MULTIPLE
 * CF DIRECT_S69817
 */

//  nameSpace ah [ERM] #1
// CF brands code  https://gitlab.accor.net/Ecom-Assets/main_sites_src/blob/64dab07b9ff94132e98cccc079d66fde2a931a08/www.site.com/scripts-v2104/utilities/brands.js
window.ah = window.ah || {};
ah.bookingEngineConfiguration = {
    'all.sites.com': { // default values => ah
        'extensibleRoomEnabled': false,
        'brandCode': 'ah',
        'selectorIframeFh': '.booking-engine-container iframe',
        'bookingEngine': {
            'hp': '[name="bookingEngine"]',
            'fh': '[name="bookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },

    'all.accor.com': {
        'extensibleRoomEnabled': true,
        'brandCode': 'ah',
        'selectorIframeFh': '.booking-engine-container iframe',
        'bookingEngine': {
            // 'hp': '[name="bookingEngine"]',
            'fh': '[name="bookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },
    'secure.accorhotels.com': {
        'brandCode': 'ah',
        'selectorIframeFh': '.booking-engine-container iframe',
        'extensibleRoomEnabled': true,
        'bookingEngine': {
            'hp': '[name="bookingEngine"]',
            'fh': '[name="bookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },

    //@TODO rajouetr bigCountry a tous les autres sites si besoin
    'novotel.accor.com': {
        'brandCode': 'nov',
        'selectorIframeFh': '#booking-wrapper iframe',
        'extensibleRoomEnabled': true,
        'bookingEngine': {
            'hp': '[name="bookingEngine"]',
            'fh': '[name="fhBookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },
    

    'mercure.accor.com': {
        'brandCode': 'mer',
        'selectorIframeFh': '.booking-engine-container iframe',
        'extensibleRoomEnabled': true,
        'bookingEngine': {
            'hp': '[name="bookingEngine"]',
            'fh': '[name="bookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },
    
    'hotelf1.accor.com': {
        'brandCode': 'for',
        'selectorIframeFh': '#search iframe',
        'extensibleRoomEnabled': true,
        'bookingEngine': {
            'hp': '[name="bookingEngine"]',
            'fh': '[name="fhBookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },

    'pullman.accor.com': {
        'extensibleRoomEnabled': true,
        'brandCode': 'pul',
        'selectorIframeFh': '.booking-engine-container iframe',
        'bookingEngine': {
            'hp': '[name="bookingEngine"]',
            'fh': '[name="bookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },
    'businesstravel.accor.com': {
        'brandCode': 'bus',
        'selectorIframeFh': '.booking-engine-container iframe',
        'extensibleRoomEnabled': true,
        'bookingEngine': {
            'hp': '[name="promoBookingEngine"]',
            'fh': '[name="bookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },
    's-businesstravel.accorhotels.com': {
        'brandCode': 'bus',
        'selectorIframeFh': '.booking-engine-container iframe',
        'extensibleRoomEnabled': true,
        'bookingEngine': {
            'hp': '[name="promoBookingEngine"]',
            'fh': '[name="bookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },

    'sofitel.accor.com': {
        'brandCode': 'sof',
        'selectorIframeFh': '.booking-engine-container iframe',
        'extensibleRoomEnabled': false,
        'bookingEngine': {
            'hp': '[name="bookingEngine"]',
            'fh': '[name="bookingEngine"]',
            'advancedSearch': '[name="bookingEngine"]',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },

    'ibis.accor.com': {
        'selectorIframeFh': '.booking-engine-container iframe',
        'extensibleRoomEnabled': true,
        'brandCode': 'ibi',
        'bookingEngine': {
            'hp': '[name="bookingEngine"]',
            'fh': '[name="bookingEngine"]',
            'advancedSearch': '#advancedBookingEngine',
            'dashboard': '[name="bookingEngine"]',
            'profil': '[name="bookingEngine"]',
            'hotelList': '#newbookingEngine',
            'bigCountry': '#newbookingEngine'
        }
    },

	

    'typesBookingDisplay': {
        'homepage': 'hp',
        'fh': 'fh',
        'hotelList': 'hotelList',
        'dashboard': 'dashboard',
        'advancedSearch': 'advancedSearch',
        'profil': 'profil',
        'bigCountry': 'bigCountry'
    },

    // GUA configuration -> TagManager
    'tagManager': {
        'hp': {
            'actions': {
                'open': {
                    'event': 'GAvirtual',
                    'virtualpageview': '/homepage/booking-engine'
                }
            }
        },

        'fh': {
            'actions': {
                'open': {
                    'event': 'GAvirtual',
                    'virtualpageview': '/hotelpage/booking-engine'
                }
            }
        },

        'advancedSearch': {
            'actions': {
                'open': {
                    'event': 'GAvirtual',
                    'virtualpageview': '/advanced-search/booking-engine'
                }
            }
        },

        'dashboard': {
            'actions': {
                'open': {
                    'event': 'GAvirtual',
                    'virtualpageview': '/profil/modal-multiple-rooms'
                }
            }
        },

        'profil': {
            'actions': {
                'open': {
                    'event': 'GAvirtual',
                    'virtualpageview': '/profil/modal-multiple-rooms'
                }
            }
        }

    },

    /**
     * [getConfExtensibleReservation description]
     * @param  {string} site              document.location.hostname
     * @param  {string} typeBookingEngine  CF config.bookingEngine{ [hp | fh | advancedSearch | dashboard | hotelList ] }
     * @return {object}                   [description]
     * @exemple console.dir(ah.bookingEngineConfiguration.getConfExtensibleReservation(document.location.hostname,'fh'));
     */
    getConfExtensibleReservation: function(site, typeBookingEngine) {
        var config = this;
        var target = inIframe() ? parent.document : document;
        var infoPageToExecuteErm = this.pageTypeValide(target.location.href);
        var typeBookingDisplay = typeBookingEngine || infoPageToExecuteErm.type; // pardefaut on n'est pas dans l'iframe
        var confSiteErm = this[site];
        // @TODO ajouter une verification si pas de typeBookingDisplay renseigné dans tagManager
        var tagManager = this.tagManager[typeBookingDisplay];
        var confDefault = config['all.sites.com'];
        var outputConf = {};
        outputConf.default = {};
        outputConf.default.extendedMaxRoom = confDefault.extendedMaxRoom;

        // @TODO: revoir ce code car par la suite l'obj est retravaille
        if (infoPageToExecuteErm.isValid === false || typeof confSiteErm == 'undefined') {
            outputConf.extensibleRoomEnabled = confDefault.extensibleRoomEnabled;
            outputConf.bookingEngine = confDefault.bookingEngine[typeBookingDisplay];
            outputConf._typesBookingDisplayStrs = config.typesBookingDisplay;
            outputConf._typeBookingEngine = typeBookingDisplay;
            outputConf._tagManager = tagManager;
            outputConf.selectorIframeFh = confDefault.selectorIframeFh;
            outputConf.brandCode = confDefault.brandCode;
        } else {
            outputConf.extensibleRoomEnabled = confSiteErm.extensibleRoomEnabled;
            outputConf.bookingEngine = confSiteErm.bookingEngine[typeBookingDisplay];
            outputConf._typesBookingDisplayStrs = config.typesBookingDisplay;
            outputConf._typeBookingEngine = typeBookingDisplay;
            outputConf.selectorIframeFh = confSiteErm.selectorIframeFh;
            outputConf._tagManager = tagManager;
            outputConf.brandCode = confSiteErm.brandCode;
        }

        return outputConf;

        // helper =======
        function inIframe() {
            try {
                return window.self !== window.top;
            } catch (e) {
                return true;
            }
        }
    },

    pageTypeValide: function(href) {
        var config = this;
        var urlCurrent = href || document.location.href;
        var info = {};
        var validators = [];

        // par defaut n'est pas valide
        info.isValid = false;

        // === valiadtors isHomePageBusinesstravel ==
        validators.push(isHomePageBusinesstravel(config.typesBookingDisplay.homepage));
        // === valiadtors hotelF1 ==
        validators.push(isHomePageHotelF1(config.typesBookingDisplay.homepage));
        // === valiadtors novotel ==
        validators.push(isHomePageNovotel(config.typesBookingDisplay.homepage));
        // === valiadtors accorhotels ==
        validators.push(isHomePageAccorhotels(config.typesBookingDisplay.homepage));
        // === valiadtors generiques  ==
        validators.push(
            isBookingHotelList(config.typesBookingDisplay.hotelList),
            isFh(config.typesBookingDisplay.fh),
            isAdvancedSearch(config.typesBookingDisplay.advancedSearch),
            isPageBigCountry(config.typesBookingDisplay.bigCountry),
            isProfil(config.typesBookingDisplay.profil));

        for (var i = 0; i < validators.length; i++) {
            if ((validators[i](urlCurrent)).isValid === true) {
                info = validators[i](urlCurrent);
            }

        }

        return info;

        // =========== HELPERS
        // les methods suivantes permettent de definir si on se trouve bien dans une page ou il faut executer ERM

        // =============== generiques  ==========================================
        function isBookingHotelList(typeBookingDisplay) {

            return function(str) {
                var output = {};

                output.isValid = /\/booking\/hotels-list\.shtml/.test(str);
                output.type = typeBookingDisplay;
                return output;
            }

        }

        function isProfil(typeBookingDisplay) {

            return function(str) {
                var output = {};
                // \/profil\/dashboard\.shtml
                // \/profil\/booking\.shtml?anchor=booking
                // \/profil\/booking\.shtml?anchor=history
                // \/profil\/favoritehotels\.shtml
                // \/profil\/personaldetails\.shtml
                // \/profil\/contact-informations\.shtml
                // \/profil\/preferences\.shtml
                // \/profil\/newsletters\.shtml
                // \/profil\/pointshistory\.shtml
                // \/profil\/mycurrentoffers\.shtml
                // \/profil\/rewards\.shtml
                output.isValid = /\/profil\/(dashboard|booking|favoritehotels|personaldetails|contact-informations|preferences|newsletters|pointshistory|mycurrentoffers|rewards)+\.shtml/.test(str);
                output.type = typeBookingDisplay;
                return output;
            }

        }

        //@TODO: creer un type de page specifique bigCountry pour eviter de paser par listHotel
        function isPageBigCountry(typeBookingDisplay) {

            return function(str) {
                var output = {};
                // booking/hotels-paris.shtml
                // booking/hotels-lyon.shtml
                output.isValid = /\/booking\/hotels-(lyon|paris)+\.shtml/.test(str);
                output.type = typeBookingDisplay;
                return output;
            }

        }

        function isAdvancedSearch(typeBookingDisplay) {

            return function(str) {
                var output = {};
                output.isValid = /\/booking\/advanced-search\.shtml/.test(str);
                output.type = typeBookingDisplay;
                return output;
            }

        }

        function isFh(typeBookingDisplay) {

            return function(str) {
                var output = {};
                output.isValid = /\/hotel-[A-Z0-9]{4}-.*$/.test(str);
                output.type = typeBookingDisplay;
                return output;
            }

        }

        // =============== NOV ==========================================
        function isHomePageBusinesstravel(typeBookingDisplay) {

            return function(str) {
                var output = {};
                var hasmetaHome = document.querySelector('meta[content="homepage"]');

                output.isValid = hasmetaHome ? true : false;
                output.type = typeBookingDisplay;

                return output;
            }

        }
        // =============== NOV ==========================================
        function isHomePageNovotel(typeBookingDisplay) {

            return function(str) {
                var output = {};
                var hasmetaHome = document.querySelector('meta[content="homepage"]');

                output.isValid = hasmetaHome ? true : false;
                output.type = typeBookingDisplay;

                return output;
            }

        }

        // =============== AH ==========================================

        function isHomePageAccorhotels(typeBookingDisplay) {

            return function(str) {
                var output = {};
                var hasMetaHomepageAccor = document.querySelector('meta[name="X-Accor-website-page-type"][content="homepage"]');

                output.isValid = hasMetaHomepageAccor ? true : false;
                output.type = typeBookingDisplay;

                /*
                @TODO: dans le cas ou le meta content="homepage"  il faudra reflechir un fallback
                if (hasMetaHomepage) {
                output.isValid = hasMetaHomepage ? true : false;
                } else {
                output.isValid = /\/[a-z]{2}(?:-[a-zA-Z]{2})?\/(?!hotel)[\w-]+\/index.shtml/.test(str);
                }
                */

                return output;
            }

        }


        // =============== HOTEL F1 ==========================================

     function isHomePageHotelF1(typeBookingDisplay) {

          return function(str) {
               var output = {};

               //Enforce validation, erm not only on homepage and Check if on domain hotelf1

               output.isValid = false;

               if(document.location.hostname.indexOf('hotelf1.accor.com') > -1) {
                output.isValid = true;
               }

               output.type = typeBookingDisplay;
               return output;
          }
     }
    }
};

/** < /scripts-v2104/extending-reservation-multiple/extending-reservation-multiple-configuration.js **/


/** > /scripts-v2104/booking/search-history.js **/
var SearchHistory = (function() {
	var labelDateIn = "search.dateIn";
	var labelDateOut = "search.dateOut";
	var labelDesti = "search.destination";
	var labelRoomNumber = "search.roomNumber";
	var labelAdultNb = "search.adultNumber"; // not sent when the form is submitted
	var labelChildrenNb = "search.childrenNumber"; // not sent when the form is submitted
	var labelReserverId = "identification.reserverId";
	var labelReserverContract = "identification.reserverContract";
	var labelNightNb = "search.nightNb";
	var labelDayIn = "search.dayIn";
	var labelMonthIn = "search.monthIn";
	var labelYearIn = "search.yearIn";
	var labelDayOut = "search.dayOut";
	var labelMonthOut = "search.monthOut";
	var labelYearOut = "search.yearOut";
	var labelFilterBrands = "filter.brands";
	var labelHotelTarsCode = "search.hotelTarsCode";
	var maxSearchToHistorize = 60;
	var maxRoomNumber = 2; // Actually the max INDEX for the rooms, since it's up to 3 rooms.

    var create = function create(data) {
    	if (data.hasClass("bookingEngine") || data.hasClass("advancedbookingEngine") || data.hasClass("newbookingEngine")){
	  		var alreadyExists = false;
	  		var isAnHotel = false;
	  		var isERM = false;
	  		var hasDestinationField = false;
			var params = {};
			var searchDestination = data.find("[name='search.destination']").val();
			
			// find input labelSelected value if autocomplete OR text in select option if select list
			var searchDestinationLabel = data.find("[name='search.destination.labelSelected']").val() ||
										data.find("[name='search.destination'] option:selected").text() ||
										searchDestination;

			var timestamp = new Date().toLocaleString();
	  		var user_history = JSON.parse(localStorage.getItem("user_history")) || [];

			data.find("input, select").each(function(){
				var $this = jQuery(this);
				var name = $this.attr('name');
				var type = $this.attr('type');
				var val = $this.val();
				//making sure the tSearchDestination is an input text
				if (name === labelDesti && type === 'text'){
					hasDestinationField = true;
				}

				// Saving the fields under their name ; tCountries and tCities have no name attribute so they're removed
				if (type !== "checkbox" &&
					val  !== "" &&
					val  !== $this.attr('placeholder')){

					if (type === "radio"){
						params[name] = jQuery("input[name='"+name+"']:checked").val();
					}else if ((name === labelReserverContract || name === labelReserverId) && (val.indexOf(" ") === -1 && val === $this.attr("title"))){
						;
					}else{
						// QC86305 Select labelSelected for destination in priority
						if (name == "search.destination" && searchDestinationLabel.length > 0) {
							params["search.destination"] = searchDestinationLabel;
						}
						else {
							params[name] = val;
						}
					}
				// If the search is going without dates, still save today's date
				}else if (name === labelDateIn && val === ""){
					var today = new Date();
					var tomorrow = new Date();
					tomorrow.setDate(today.getDate()+1);

					params[labelDateIn] = jQuery.datepicker.formatDate("dd/mm/yy", today);
					params[labelDayIn] = jQuery.datepicker.formatDate("d", today);
					params[labelMonthIn] = jQuery.datepicker.formatDate("m", today);
					params[labelYearIn] = jQuery.datepicker.formatDate("yy", today);
					params[labelDateOut] = jQuery.datepicker.formatDate("dd/mm/yy", tomorrow);
					params[labelDayOut] = jQuery.datepicker.formatDate("d", tomorrow);
					params[labelMonthOut] = jQuery.datepicker.formatDate("m", tomorrow);
					params[labelYearOut] = jQuery.datepicker.formatDate("yy", tomorrow);
					params[labelNightNb] = "1";
				}
			});

			/* Functional rule : only save the last 60 searches */
			if (user_history.length >= maxSearchToHistorize){
				var createdAt;
				var date = new Date();
				var index = 0;

				for (var i = 0; i < user_history.length; i++){
					createdAt = new Date(user_history[i].createdAt);
					if (date > createdAt){
						date = createdAt;
						index = i;
					}
				}
				user_history.splice(index, 1);
			}

			/* Check if a search has already been historized with those criterias */
			for (var i = 0; i < user_history.length; i++) {
				if (user_history[i].data[labelDesti] === searchDestination || user_history[i].data[labelDesti] === searchDestinationLabel) {
					alreadyExists = true;
					for (var field in params){
						if (params[field] !== user_history[i].data[field]) {
							alreadyExists = false;
						}
					}
				}
			}

			// Input for adult and children numbers on advanced search don't have the same name as on the HP when there's only 1 room.......
			if (params["search.roomCriteria[0].adultNumber"] && params["search.roomCriteria[0].childrenNumber"] && !params[labelAdultNb] && !params[labelChildrenNb]){
				params[labelAdultNb] = params["search.roomCriteria[0].adultNumber"];
				params[labelChildrenNb] = params["search.roomCriteria[0].childrenNumber"];
			}
			
			var isHotelF1 = document.location.hostname == 'hotelf1.accor.com';
			
			if ((hasDestinationField && params[labelDesti].length === 4 && params[labelFilterBrands] !== "ALL" && !isHotelF1) || params[labelHotelTarsCode]){
				isAnHotel = true;
			}

			if (!alreadyExists && !isAnHotel && !isERM){
				user_history.push({"createdAt": timestamp, "data": params});
				try {
					localStorage.setItem("user_history", JSON.stringify(user_history));
				} catch (e) {
					console.log('error on localStorage.setItem for user_history', e);
				}
			}
    	}
    };

    // Actually search inside the JSON-formatted version of the user history from the Local Storage
    // whether you have a query string, or not.
	var searchInUserHistory = function(user_history, queryString){
		if (user_history.length){
			var dateArr = [];
			var dateSort = function (date1, date2) {
				if (date1 > date2)
					return -1;
				if (date1 < date2)
					return 1;
				return 0;
			};
			var hasQueryString = (queryString.length === 0 ? false : true);
			for (var i = 0; i < user_history.length; i++){
				var destination = user_history[i].data[labelDesti];
				if (hasQueryString){
					if (destination.toLowerCase().indexOf(queryString.toLowerCase()) != -1){
						dateArr.push(user_history[i].createdAt);
					}
				}else{
					dateArr.push(user_history[i].createdAt);
				}
			}
			var len = dateArr.length;
			dateArr.sort(dateSort);
			/* If there are more than 5 results, then only get the last 5 */
			return (len >= 5 ? dateArr.splice(0, 5) : dateArr.splice(0, len));
		}
	};

	// Gets the historized searches from the localstorage and display them
    var displayHistory = function displayHistory(queryString){
    	var completionInput = jQuery("#advanced-completion:not(input)").empty();
    	jQuery("#advanced-completion").off('click.searchHistory');
    	var user_history = JSON.parse(localStorage.getItem("user_history")) || {};
    	var searchesToDisplay = searchInUserHistory(user_history, queryString) || [];
    	var indexGTM = 1;

    	if (searchesToDisplay.length){
			for (var i = user_history.length -1; i >= 0; i--){
				var adultNb = 0;
				var childNb = 0;
				var dateIn = user_history[i].data[labelDateIn] ? new Date(formatDate(user_history[i].data[labelDateIn])) : "";
				var dateOut = user_history[i].data[labelDateOut] ? new Date(formatDate(user_history[i].data[labelDateOut])) : "";
				var destination = user_history[i].data[labelDesti];
				var timestamp = user_history[i].createdAt;

				for (var j = maxRoomNumber; j >= 0; j--){
					if (user_history[i].data["search.roomCriteria["+j+"].adultNumber"]){
						adultNb += parseInt(user_history[i].data["search.roomCriteria["+j+"].adultNumber"]);
					}
					if (user_history[i].data["search.roomCriteria["+j+"].childrenNumber"]){
						childNb += parseInt(user_history[i].data["search.roomCriteria["+j+"].childrenNumber"]);
					}
				}

				if (searchesToDisplay.indexOf(timestamp) != -1){
					var historyDate = "";
					var today = new Date();
					dateIn.setHours(0, 0, 0, 0);
					today.setHours(0,0,0,0);
					if (dateIn && (today <= dateIn)){
						historyDate = "<span class='historyDate'>"+(dateIn?jQuery.datepicker.formatDate("dd M", dateIn):'')+" - "+(dateOut?jQuery.datepicker.formatDate("dd M",dateOut):'')+"</span>";
					}else{
						historyDate = "<span class='historyDate'></span>";
					}
					completionInput.append("<li class='historyIcon' data-GTMIndex='"+indexGTM+"' data-timestamp='"+timestamp+"'><p class='historyDestination'>"+destination+"</p>"+historyDate+"<span class='historyAdultNb'>"+adultNb+"</span><span class='historyChildrenNb'>"+childNb+"</span><span class='deleteFromHistory'>×</span></li>");
				}
				indexGTM += 1;
	      	}

	    	/* Filling the form with the saved data when clicking on an option */
	    	jQuery("#advanced-completion").on("click.searchHistory", ".historyIcon", function(){
				var form = completionInput.parents("form");
				var index = 0;
				var user_history = JSON.parse(localStorage.getItem("user_history")) || {};

				var emptyDatesFields = function(form){
					form.find("input[name*='"+labelDateIn+"']").val("").change();
					form.find("input[name*='"+labelDateOut+"']").val("").change();
					form.find("input[name*='"+labelDayIn+"']").val("").change();
					form.find("input[name*='"+labelMonthIn+"']").val("").change();
					form.find("input[name*='"+labelYearIn+"']").val("").change();
					form.find("input[name*='"+labelDayOut+"']").val("").change();
					form.find("input[name*='"+labelMonthOut+"']").val("").change();
					form.find("input[name*='"+labelYearOut+"']").val("").change();
				};

				form.find("input:not(:checkbox), select").val("");
				completionInput.empty();

				for (var i = 0; i < user_history.length; i++){
					if (user_history[i].createdAt === jQuery(this).attr("data-timestamp")){
						index = i;
						break;
					}
				}

				var dateIn = user_history[index].data[labelDateIn] ? new Date(formatDate(user_history[index].data[labelDateIn])) : new Date();
				var today = new Date();
				dateIn.setHours(0,0,0,0);
				today.setHours(0,0,0,0);
				var isDateInAnterior = (today > dateIn);
				for (var key in user_history[index].data){
					var field = completionInput.parents("form").find("[name='"+key+"']");
					var value = user_history[index].data[key];

					field.val(value).change();
				}

				// Since the searches from adv-search don't save adultnumber, I had to add it manually, therefore having it at the end of the object
				// Not happening with every searches, so just re-triggering the change() event on the children selectors, so their ages appear.
				jQuery("[name*='search'][name*='childrenNumber']:visible").change();

				// Functional rule - if dateIn is anterior to today, then don't fill it.
				if (isDateInAnterior){
					emptyDatesFields(form);
				}
			});

	    	jQuery(".historyIcon").click(function(){
				if (typeof TagManager !== 'undefined' && TagManager != null) {
					TagManager.pushDataCustom({
			  			'event': 'GAevent',
						'eventCategory': 'Homepage',
						'eventAction': 'Search - Click on search history',
			  			'eventLabel': 'Previous search - ' + jQuery(this).attr("data-GTMIndex")
		  			});
				}
	    	});

	    	/* Deleting from history when clicking on the delete option */
	    	completionInput.find(".deleteFromHistory").on("click", function(e){
	    		e.stopPropagation();

	    		jQuery("#bookingEngine").find("input:not(:checkbox), select").val("");

	    		var user_history = JSON.parse(localStorage.getItem("user_history")) || {};
	    		var index = 0;

				for (var i = 0; i < user_history.length; i++){
					if (user_history[i].createdAt === jQuery(this).parents(".historyIcon").attr("data-timestamp")){
						index = i;
					}
				}
				user_history.splice(index, 1);
				try {
					localStorage.setItem("user_history", JSON.stringify(user_history));
				} catch (e) {
					console.log('Error on localStorage.setItem for user_history', e);
				}
				completionInput.empty();
	    	});

    	}
    };

	var actionTodisplayFavorite = function actionTodisplayFavorite (favoriteHotels) {
		var completionInput = jQuery("#advanced-completion");
		var indexGTM = 1;

		var len = favoriteHotels.length;
		if (len){
			for (var i = 0; i < favoriteHotels.length; i++){
				completionInput.append("<li class=\"favoriteIcon\" data-GTMIndex='"+indexGTM+"' data-rid=\""+favoriteHotels[i].code+"\">"+ favoriteHotels[i].name +"</li>");
				indexGTM += 1;
			}

			completionInput.on("click", ".favoriteIcon", function(){
				var rid = jQuery(this).attr('data-rid') || '',
					form = completionInput.parents("form");

				form.find("input:not(:checkbox), select").val("");
				completionInput.empty();

				form.find("input[name='search.destination']").val(rid);
			});

			jQuery(".favoriteIcon").on("click", function(){
				if (typeof TagManager !== 'undefined' && TagManager != null) {
					TagManager.pushDataCustom({
							'event': 'GAevent',
						'eventCategory': 'Homepage',
						'eventAction': 'Search - Click on search history',
							'eventLabel': 'Favorite hotel - ' + jQuery(this).attr("data-GTMIndex")
						});
				}
			});
		}
	};

	// Fill input fields with parameters from the history of the element from user hitsory selected in search.destination input
	var fillHistory = function fillHistory(item) {
		var nbRoom = parseInt(item.otherDetails.nbRoom, 10);
		var childrenNumber = 0;
		var adultNumber = 0;
		var childAge = 0;

		var dateToday = new Date();
		var dateTomorrow = new Date();
		dateTomorrow.setDate(dateTomorrow.getDate() + 1);

		var dateIn = item.otherDetails.dateIn;
		var dateInParts = dateIn.split("/");
		var dateInObject = new Date(dateInParts[2], dateInParts[1] - 1, dateInParts[0]);
		// if the dateIn in history is in the past, we set the dateIn to today
		if (dateInObject < dateToday) {
			dateInObject = dateToday;
		}

		var dateOut = item.otherDetails.dateOut;
		var dateOutParts = dateOut.split("/");
		var dateOutObject = new Date(dateOutParts[2], dateOutParts[1] - 1, dateOutParts[0]);
		// if the dateOut in history is before tomorrow, we set the dateOut to tommorow
		if (dateOutObject < dateTomorrow) {
			dateOutObject = dateTomorrow;
		}

		// Fill number of night
		var nightNb = Math.round((dateOutObject-dateInObject)/(1000*60*60*24));
		jQuery("input[name='search.nightNb']").val(nightNb);
		
		var dayOut = String(dateOutObject.getDate());
		var monthOut = String(dateOutObject.getMonth() + 1);
		var yearOut = String(dateOutObject.getFullYear());

		// dateIn conversion to set the minimum date for the dateOut calendar
		var dayIn = String(dateInObject.getDate());
		var monthIn = String(dateInObject.getMonth() + 1);
		var yearIn = String(dateInObject.getFullYear());
		
		// fill hidden date field
		jQuery("input[name='search.dayIn']").val(dayIn);
		jQuery("input[name='search.monthIn']").val(monthIn);
		jQuery("input[name='search.yearIn']").val(yearIn);
		jQuery("input[name='search.dayOut']").val(dayOut);
		jQuery("input[name='search.monthOut']").val(monthOut);
		jQuery("input[name='search.yearOut']").val(yearOut);
		
		// increment dateIn to set the minimum date for the dateOut calendar
		dateInObject.setDate(dateInObject.getDate() + 1);
		dayIn = String(dateInObject.getDate());
		monthIn = String(dateInObject.getMonth() + 1);
		yearIn = String(dateInObject.getFullYear());
		if (dayIn.length < 2) dayIn = '0' + dayIn;
		if (monthIn.length < 2) monthIn = '0' + monthIn;
		var dateOutMin = dayIn + '/' + monthIn + '/' + yearIn;

		// Fill date fields
		jQuery("input[name='search.dateIn']").datepicker('setDate', dateIn).trigger('closeDateIn');
		jQuery("input[name='search.dateOut']").datepicker('option', 'minDate', dateOutMin); // set the minimum date for the dateOut calendar
		jQuery("input[name='search.dateOut']").datepicker('setDate', dateOut).trigger('closeDateOut');
		jQuery("input[name='search.dateOut']").prop('disabled', false);
		
		// Display all fields
		jQuery('.tMaximise').addClass('visible');
		jQuery('.tEngineForm').addClass('maximized');

		// Trigger change number room
		jQuery("select[name='search.roomNumber']").val(nbRoom).change();

		//For ibis booking engine

		jQuery(window).trigger('need.update.rooms-template');

		// Fill room detail
		for (var i = 0; i < nbRoom; i++) {
			adultNumber = item.otherDetails.searchRoomCriteria["search.roomCriteria[" + i + "].adultNumber"];
			jQuery("select[name='search.roomCriteria[" + i + "].adultNumber']").val(adultNumber).change();
			
			childrenNumber = item.otherDetails.searchRoomCriteria["search.roomCriteria[" + i + "].childrenNumber"];
			jQuery("select[name='search.roomCriteria[" + i + "].childrenNumber']").val(childrenNumber).change();

			// for certains cases on AHHP
            if (nbRoom == 1) {
                jQuery("select[name='search.childrenNumber']").val(childrenNumber).change();
            }

			for (var j = 0; j < childrenNumber; j++) {
				childAge = item.otherDetails.searchRoomCriteria["search.roomCriteria[" + i + "].children[" + j + "].age"];
				jQuery("select[name='search.roomCriteria[" + i + "].children[" + j + "].age']").val(childAge);
			}
		}
	};

	var formatDate = function formatDate(date) {
		var tmp = date.split("/");
		if (tmp[tmp.length-1].length === 4) {
			var res = tmp[2] + "-" + tmp[1] + "-" + tmp[0];
			return res;
		}
		else {
			return date;
		}
	};

	return {
	  create: create,
	  displayHistory: displayHistory,
	  fillHistory: fillHistory
	};
}());

/** < /scripts-v2104/booking/search-history.js **/


/*
 *  Booking Engine
 *  @version: 2.0
 *  @date 24/06/2010
 *  /!\ Files to be included to the HTML :
 <script type="text/javascript" src="/scripts-v2104/lib/jquery-1.6.1-min-ah.js"></script>
 <script type="text/javascript" src="/scripts-v2104/lib/ajax-request.js"></script>
 */

var BookingEngine = function (formulaire, givenName, hasAutoCompletion, optionCal, searchType, multiCal) {
    this.initialize(formulaire, givenName, hasAutoCompletion, optionCal, searchType, multiCal);
};

BookingEngine.prototype = {
    // [extensible Reservation Multiple] CF TD 69817
    _initExtensibleReservationMultiple: function() {
      var _self = this;
      this.ERM = {};
      this.ERM.triggerUpdateNbPeoples = function() {};
      this.ERM.triggerBookingEngineCatchAnswer = function() {};

      if (typeof ah === "undefined") {
          // la configuration n'a pas eté chargé on sort tout de suite
          this.ERM.extensibleRoomEnabled = false;
          return;
      }

      this.ERM = ah.bookingEngineConfiguration.getConfExtensibleReservation(document.location.hostname);

      // ============= helpers pour eviter de dupliquer le code dans bookingEngine
      this.ERM.triggerUpdateNbPeoples = function(datasource) {
        // [ERM]
        if(_self.extensibleRoomEnabled) {
          _self.$currentForm.trigger('updateNbPeoples', datasource);
        }
      };

      this.ERM.triggerBookingEngineCatchAnswer = function(errors, data) {
        // [ERM]
        if(_self.ERM.extensibleRoomEnabled) {
          // TRIGGER DATA FOR ERM AFFICHAGE LES ERREURS SUITE AU SOUMISSION DU FORM
          _self.$currentForm.trigger('BookingEngine:answerBooking', {
          "errors": errors,
          "data": data
          });
        }
        /* */
          if(window.location != window.parent.location) {
              // Cas Iframe - FH
              parent.jQuery('body').trigger('BookingEngine:answerBooking', {
                  "errors": errors,
                  "data": data
              });
          }
      };

      // =========== HELPER
      function inIframe() {
        try {
          return window.self !== window.top;
        } catch (e) {
          return true;
        }
      }
    },

    initialize: function (formulaire, givenName, hasAutoCompletion, optionCal, searchType, multiCal) {
        this.$currentForm = jQuery("#" + formulaire);
        this.idEngine = formulaire;
        this.prefEngine = this.idEngine;
        this.tmplRooms = this.$currentForm.find(".roomsWrapper");
        this.tmplFidelity = this.$currentForm.find("#fidelity-block");

        this.tmplBrands = this.$currentForm.find(".containerBrands");
        this.givenName = givenName;
        this.hasAutoCompletion = hasAutoCompletion != undefined ? hasAutoCompletion : null;
        this.autoComplete = null;

        this.btnSubmit = this.$currentForm.find(".tSubmit");
        this.btnCriteria = this.$currentForm.find(".moreCriteria .lnk-moreoptions");
        this.roomsOptions = this.$currentForm.find(".roomsOptions");

        this.destinationListPick = this.$currentForm.find(".destinationListPick");
        this.destinationMode = this.$currentForm.find("input[name='search.destinationMode']");
        this.mainlandMode = true;
        this.mouseOnListPick = false;
        this.siteCode = null;
        this.subSiteCode = null;
        this.geoZoneType = this.$currentForm.find("input[name='search.geoZone.geoZoneType']");
        this.geoZoneCode = this.$currentForm.find("input[name='search.geoZone.geoZoneCode']");
        this.destination = this.$currentForm.find("[name='search.destination']");
        this.destinationUserlang = this.$currentForm.find("[name='search.destination.userlang']");
        this.radiusVal = this.$currentForm.find("select[name='search.radius.value']");
        this.radiusUnit = this.$currentForm.find("select[name='search.radius.unit']");
        this.geoType = this.$currentForm.find("input[name='search.geoZone.type']");
        this.geoCode = this.$currentForm.find("input[name='search.geoZone.code']");

        this.localLink = this.$currentForm.find("a.localHotelsHelper");
        this.country = this.$currentForm.find("select.tCountries");
        this.city = this.$currentForm.find("select.tCities");
        this.onMap = this.$currentForm.find("input[name$='search.displayOnMap']");

        this.arrivalDate = this.$currentForm.find("input[name='search.dateIn']");
        this.arrivalDay = this.$currentForm.find("input[name='search.dayIn']");
        this.arrivalMonth = this.$currentForm.find("input[name='search.monthIn']");
        this.arrivalYear = this.$currentForm.find("input[name='search.yearIn']");
        this.departureDate = this.$currentForm.find("input[name='search.dateOut']");
        this.departureDay = this.$currentForm.find("input[name='search.dayOut']");
        this.departureMonth = this.$currentForm.find("input[name='search.monthOut']");
        this.departureYear = this.$currentForm.find("input[name='search.yearOut']");
        this.showNight = this.$currentForm.find(".tNights");
        this.nbNight = this.$currentForm.find("input[name='search.nightNb']");

        this.fakeRoom = this.$currentForm.find("select[name='search.roomNumber']");
        this.fakeAdult = this.$currentForm.find("select[name='search.adultNumber']");
        this.fakeChild = this.$currentForm.find("select[name='search.childrenNumber']");

        this.hotelRating = this.$currentForm.find("select[name='filter.hotelRatingClass']");

        this.forkPrice = this.$currentForm.find("select[name='filter.forkPrice.bound']");
        this.forkCurrency = this.$currentForm.find("input[name='filter.forkPrice.currency']");
        this.listBrands = this.$currentForm.find("input[name='filter.selectbrands']");
        this.advBrandsOption = this.$currentForm.find('ul.brandsSelect');
        this.advServicesOption = this.$currentForm.find('ul.servicesSelect');
        this.advLeasureOption = this.$currentForm.find('ul.leisureSelect');
        this.servicesOption = this.$currentForm.find('ul.tServicesSelect');

        this.preferedCode = this.$currentForm.find("input[name='identification.preferredCode.code']");
        this.cardCode = this.$currentForm.find("input[name='identification.fidelityCard.number']");
        this.showPro = this.$currentForm.find("input[name='identification.businessTravel']");
        this.showProAcc = this.$currentForm.find("input[name='identification.reserverType']");
        this.proReserverId = this.$currentForm.find("input[name='identification.reserverId']");
        this.proReserverNumber = this.$currentForm.find("input[name='identification.reserverContract']");
        this.proReserverContract = this.$currentForm.find("input[name='identification.reserverContract']");
        this.proReserverType = this.$currentForm.find("input[name='identification.reserverType']");
        this.groupFileName = this.$currentForm.find("input[name='group.fileName']");
        this.groupPaxNumber = this.$currentForm.find("input[name='group.paxNumber']");
        this.groupSingleNumber = this.$currentForm.find("input[name='group.singleNumber']");
        this.groupDoubleNumber = this.$currentForm.find("input[name='group.doubleNumber']");
        this.groupTwinNumber = this.$currentForm.find("input[name='group.twinNumber']");
        this.groupTripleNumber = this.$currentForm.find("input[name='group.tripleNumber']");
        this.groupTotalNumber = this.$currentForm.find("span.tTotalRooms");
        this.proAccountId = this.$currentForm.find("input[name='identification.accountId']");
        this.proAccountContract = this.$currentForm.find("input[name='identification.accountContract']");
        this.optionCal = optionCal;
        this.searchType = searchType;
        this.HP = false;
        this.leadTimeIn = null;
        /* Elements for multi instantiation of calendar */
        this.cal = null;
        this.multiCal = multiCal;


        //parade pour le submit intempestif de Chrome et Safari
        var defaultPostSubmit = false;

        this.$currentForm.bind("submit", {
            _this : this
        }, function (e) {

            if (e.data._this.defaultPostSubmit) {
                return true;
            } else {
                e.data._this.subBooking();
                return false;
            }
        });

        // [ERM]
        this._initExtensibleReservationMultiple();
    },

    success: function (errors, json) {
        window.gViewBeans = json.viewBeans;
        jQuery(document).trigger("viewBeans.loaded", this.givenName);
        if (errors && errors.length > 0) {
            ajaxRequest.showErrors(errors, "errorMessage", this.idEngine);
        } else if ((json.viewBeans && json.viewBeans.SearchCriteriaViewBean && json.viewBeans.OriginViewBean) || (json.viewBeans && json.viewBeans.SearchCriteriaLeisureViewBean && json.viewBeans.OriginViewBean)) {

            //language
            this.lang = jQuery("html").attr("lang");

            this.acpLang = this.lang === "gb" ? "en" : this.lang;

            if (this.lang == "en") {
                this.lang = "gb";
            }

            this.initBookingEngineToggler();

            if(this.destinationMode.length > 0) {
                this.initChinaMainlandToggler();
            }

            //execute room template
            this.tmplRooms.setTemplateURL("/" + this.lang + "/templates-v2104/booking/booking-engine-rooms.tpl");

            //execute brands template : advanced search engine
            if (this.idEngine == "advancedBookingEngine") {
                this.tmplBrands.setTemplateURL("/" + this.lang + "/templates-v2104/booking/booking-engine-brands.tpl");
            }

            this.data = json.viewBeans.SearchCriteriaViewBean;

            //Reborn childrenMaxAge
            //Warning rewrite url
            if(window.parent.jQuery('meta[name="X-Accor-rid"]').attr("content")){
              var ageMaxChild = this.data.bookingEngineRules.maxRoomOccupancy.childrenAge;
              var urlRid = window.parent.jQuery('meta[name="X-Accor-rid"]').attr("content");
              jQuery.ajax({
                url: "https://secure.accorhotels.ws/rest/v2.0/accorhotels.com/hotels/"+urlRid,
                method		: "GET",
                dataType	: 'json',
                contentType	: 'application/json',
                async: false,
                success: function(dataReborn){
                  ageMaxChild = dataReborn.roomOccupancy.maxChildAge;
                },error: function(){}});

              if((ageMaxChild!="0" && urlRid!="") || (ageMaxChild!=0  && urlRid!="") ||ageMaxChild!=""  && urlRid!="") {
                this.data.bookingEngineRules.maxRoomOccupancy.childrenAge = ageMaxChild;
                parent.window.globalchildrenAgeMax = ageMaxChild;
              }

            }

            /* TD 58466 */
            if(this.data.destination === null && json.viewBeans.GeographicResultHotelsViewBean && json.viewBeans.GeographicResultHotelsViewBean.search && json.viewBeans.GeographicResultHotelsViewBean.search.hotelCodes)
            {
                this.data.hotelListfromMap = json.viewBeans.GeographicResultHotelsViewBean.search.hotelCodes;
            }
            /* */
            this.webSiteFunctionnalities = json.viewBeans.WebSiteFunctionnalitiesViewBean;
            //Freenight Sept
            this.loyaltyAccount = json.viewBeans.LoyaltyAccountViewBean || {};

            if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1 && json.viewBeans.SearchCriteriaMeetingsViewBean) {
                this.data.event = [];
                jQuery.extend(this.data.event, json.viewBeans.SearchCriteriaMeetingsViewBean);
            }

            if ((this.idEngine == "bookingEngineGroup" || this.idEngine == "advancedBookingEngine" || this.idEngine == "newbookingEngine") &&
                json.viewBeans.SearchCriteriaLeisureViewBean) {
                if(this.data && this.data.bookingEngineRulesLeisure) {
                    this.data.bookingEngineRules =  this.data.bookingEngineRulesLeisure; //Renames the bookingEngineRules object to avoid extra conditions in LOL context
                    this.leadTimeIn = this.data.bookingEngineRulesLeisure.earlyBookingCondition;
                }
            }
            this.origin = json.viewBeans.OriginViewBean;
            this.siteCode = this.origin.siteCode;
            this.subSiteCode = this.origin.subSiteCode !== null ? this.origin.subSiteCode : "";
            if (json.viewBeans.CurrenciesViewBean) {this.CurrenciesViewBean = json.viewBeans.CurrenciesViewBean;}

            /* Fidelity **************************/

            if(this.data.fidelityCards != null){
                if(this.idEngine == "bookingEngine" && this.origin.siteCode == "IBP" && !this.origin.subSiteCode){

                    if (jQuery("body").attr('id') === "plus") {
                        this.tmplFidelity.setTemplateURL("/templates-v2104/booking/fidelity.tpl");
                    } else {
                        this.tmplFidelity.setTemplateURL("/templates-v2104/booking/fidelity-ibp-home.tpl");
                    }


                }else { this.tmplFidelity.setTemplateURL("/templates-v2104/booking/fidelity.tpl"); }

                this.data.lang = this.lang;
                this.tmplFidelity.processTemplate({
                    'searchEngine'  : this.idEngine,
                    "data"          : this.data
                });

                jQuery(".zone-fidelity").css("display",'none');

                // For Ibis portail home
                if((this.data.fidelityCards == "" || this.data.fidelityCards) && this.origin.siteCode == "IBP" && this.origin.subSiteCode == null){
                    jQuery("#block-lnk-moreinfos").appendTo("#more-criteria");
                    jQuery("#block-lnk-moreinfos > .lnk-moreinfos").html(i18n_FS.fidelity.moreInfoText);
                }

                if(this.idEngine == "bookingEngine" || this.isAdagioLog())
                    this.initFidelityToggler(); // home page or ADAGIO 3 Days

                this.tmplFidelity.css("display", "block");
            } else if(this.tmplFidelity.length) {
                this.tmplFidelity.css("display","none");
            }

            this.initRoomsDatas();
            this.implementBooking();


            //Template : initialisation
            this.tmplRooms.setParam("idForm", this.idEngine);
            this.tmplRooms.setParam("prefForm", this.prefEngine);
            this.tmplRooms.setParam("roomNb", this.fakeRoom.val());
            this.tmplRooms.setParam("ChildNb", null);
            this.tmplRooms.processTemplate(this.data);
            this.setChildrenObservers();

            this.initDataTemplate();
            this.deserializeFormDatas(this.$currentForm);
            if (this.data.bookingEngineRules.adagioLongStay)
            {
                if (!this.optionCal) this.optionCal={};
                this.optionCal.longStay = true;
                this.optionCal.minStay = this.data.bookingEngineRules.minDateResa;
                this.optionCal.maxStay = this.data.bookingEngineRules.maxDateResa;
            }
            // DATE : option calendar
            if (this.optionCal) {//controle sur option
                this.now = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate(), 12, 0, 0);

                if (this.optionCal.firstArrivalDate && this.optionCal.lastArrivalDate) {
                    if (this.optionCal.firstArrivalDate.getTime() > this.optionCal.lastArrivalDate.getTime()) {
                        this.optionCal.firstArrivalDate = null;
                        this.optionCal.lastArrivalDate = null;
                    }
                }
                if (this.optionCal.defaultDate) {
                    if (this.optionCal.defaultDate.getTime() > (this.now.getTime() + 3600 * 24 * 1000 * this.data.bookingEngineRules.maxPeriodResa)) {
                        this.optionCal.defaultDate = null;
                    }
                }
                if (this.optionCal.firstArrivalDate) {
                    if (this.optionCal.firstArrivalDate.getTime() > (this.now.getTime() + 3600 * 24 * 1000 * this.data.bookingEngineRules.maxPeriodResa)) {
                        this.optionCal.firstArrivalDate = null;
                    }
                }

                /* Mis en commentaire car genere un bug sur le calendrier
                 if (this.optionCal.lastArrivalDate) {
                 if (this.optionCal.lastArrivalDate.getTime() < this.now.getTime()) this.optionCal.lastArrivalDate = null;
                 }
                 */

                //if (this.optionCal.minStay && !this.optionCal.maxStay) {this.optionCal.maxStay = this.data.bookingEngineRules.maxDateResa}
                if (this.optionCal.maxStay) {
                    if (this.optionCal.maxStay > this.data.bookingEngineRules.maxDateResa) {
                        if (this.givenName != "longStayBookingEngine" && !this.optionCal.longStay) {
                            this.optionCal.maxStay = this.data.bookingEngineRules.maxDateResa;
                        }
                    }
                    if (this.optionCal.minStay) {
                        if (this.optionCal.minStay > this.optionCal.maxStay) {
                            this.optionCal.minStay = null;
                            this.optionCal.maxStay = null;
                        }
                    }
                }

                if (this.optionCal.maxStay > this.data.bookingEngineRules.maxDateResa) {
                    if (this.givenName != "longStayBookingEngine" && !this.optionCal.longStay) {
                        this.optionCal.maxStay = this.data.bookingEngineRules.maxDateResa;
                    }
                }

            }

            // Check if there multi personalized calendar
            if (this.multiCal && this.multiCal.personalizedCal) {
                this.cal = [];
                var i = 0, key;
                if (!this.optionCal) {
                    this.optionCal = [];
                    this.optionCal.personalizedCal = [];
                } else if (!this.optionCal.personalizedCal) {
                    this.optionCal.personalizedCal = [];
                }
                for (i = 0; this.multiCal.personalizedCal.length > i; i++) {
                    for (key in this.multiCal.personalizedCal[i]) {
                        this.optionCal.personalizedCal[key] = this.multiCal.personalizedCal[i][key];
                    }
                    this.cal[this.multiCal.personalizedCal[i].calendarName] = this.initMeetingsCal(this.optionCal);
                    this.optionCal = [];
                    this.optionCal.personalizedCal = [];
                }
            } else {
                this.cal = new Calendar(this.idEngine, this.data.bookingEngineRules.maxDateResa, this.data.bookingEngineRules.maxPeriodResa, this.optionCal, this.leadTimeIn);
            }


            jQuery(".middleContent").css("visibility", "visible"); //loading state

            //disable APAC & AMLAT inputs if this section is hidden
            if (this.country && this.city && jQuery("#engine-hotel-tab").hasClass("hideListCountryCity")) {
                this.country.attr("disabled", "true");
                this.city.attr("disabled", "true");
            }

            //disable and hide hotel rating's combo if it's currently a brand site (not AH.com)
            var isVisibleConfort = true;
            if (this.origin.siteCode != 'ALL' && this.hotelRating.length && this.hotelRating.parent('.confort').length) {
                this.hotelRating.attr("disabled", "true");
                this.hotelRating.parent('.confort').hide();
                isVisibleConfort = false;
            }

            //disable and hide budget's combo if no budget's list available
            var isVisibleBudget = true;
            if (this.data.bookingEngineRules.forkPrices != null && this.data.bookingEngineRules.forkPrices.length == 0 && this.forkPrice.length && this.forkPrice.parent('.budget').length) {
                this.forkPrice.attr("disabled", "true");
                this.forkPrice.parent('.budget').hide();
                isVisibleBudget = false;
            }

            if ((jQuery(".confortBudget").length) && (!isVisibleConfort || !isVisibleBudget)) {
                jQuery(".confortBudget").removeClass('twoCriterias');
            }

            //disable and hide children's combo if no children policy (max children number = 0)
            if (this.data.bookingEngineRules.maxRoomOccupancy != null && this.data.bookingEngineRules.maxRoomOccupancy.childrenNumber == 0 && this.fakeChild.length && this.fakeChild.parent('.childrens').length && this.fakeChild.parent('.childrens').parent('fieldset.rooms-form').length) {
                this.fakeChild.attr("disabled", "true");
                this.fakeChild.parent('.childrens').hide();
                this.fakeChild.parent('.childrens').parent('fieldset.rooms-form').addClass('tNoChipol'); /* class used for no children policy */
            }
            if (this.idEngine == "newbookingEngine" && this.data != null && this.data.idBox != null) {
                utils.writeIdBox(this.data.idBox, this.lang);
            }
            if (this.showPro.attr('checked')) {
                jQuery("div.engineproDetails").addClass("on").removeClass("off");
            }
            if (this.data.reserverId != null && this.data.reserverType != null && this.data.reserverContract != null) {
                if (this.data.reserverType == "SC" && this.origin.subSiteCode != "TRA" && (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) == -1)) {
                    jQuery('input[name="identification.reserverType"]:first').attr("checked", true);
                    jQuery("div.engineproDetails").addClass("on").removeClass("off");
                    this.rewriteReserverInfos();
                }
                if (this.idEngine == "bookingEngineGroup") {
                    this.rewriteLeisureReserverInfos();
                }
                if (this.givenName == "advancedBookingEngineLeisure") {
                    if (document.location.search.length > 1) {
                        this.rewriteLeisureReserverInfos();
                        this.deserializeFormDatas(this.$currentForm);
                        advBookingEngineLeisure.totalRoomsCalc();
                    } else if (!(document.location.search.length)) {
                        this.rewriteLeisureReserverInfos();
                        advBookingEngineLeisure.totalRoomsCalc();
                    }
                }
            }


            if (this.hasAutoCompletion) {

                // REMOVES AANTIDOT AUTOCOMPLETION FROM TARGETS
                var pathsToExclude = {
                    gb: [
                        'taiwan-hongkong-macao',
                        'china',
                        'asia'
                    ]
                };

                if (pathsToExclude[this.lang]) {
                    for (var i = 0; pathsToExclude[this.lang][i]; i++) {
                        if (location.href.indexOf(pathsToExclude[this.lang][i]) >= 0) {
                            jQuery(".advanced-completion").removeClass('advanced-completion');
                            break;
                        }
                    }
                }

                // TODO H - 24/04/2018 -> New widget autocomplete
                if (
                    (!window.AccorHotels || !window.AccorHotels.components || !window.AccorHotels.components.ahAutocomplete)
                    && (typeof autoCompletion != 'undefined')
                    ) {
                    this.autoComplete = new autoCompletion(this.idEngine, "tSearchDestination", this.origin.siteCode, this.subSiteCode);
                }
            }
        }
        this.initAnalytics();

        /* initialization tooltip */
        if(jQuery("#fidelity-block .tooltip").length) utils.tooltips.init(jQuery("#fidelity-block .tooltip"));

        /* initialization popup & popin  */
        if(jQuery("#fidelity-block .popin").length  && typeof popins !== 'undefined') popins.init(jQuery("#fidelity-block .popin"));

        var tplEvent = jQuery.Event('template_generated.ah');
        this.$currentForm.trigger(tplEvent);
    },

    implementBooking: function () {
        utils.clearInput.init(this.destination);

        // Show map : advanced search engine
        if (this.idEngine == "advancedBookingEngine" && (this.origin.subSiteCode != "BIZ" || this.origin.subSiteCode != "TRA")) {
            if (this.data.showMap == true) {
                this.$currentForm.find(".tDisplayOnMapYes").attr("checked", "true");
            } else {
                this.$currentForm.find(".tDisplayOnMapNo").attr("checked", "true");
            }
        }

        // APAC & Sudamerica : home engine
        if (this.country && this.city && typeof countryCity != 'undefined') {
            this.rewriteCountryCity();

            this.country.bind("change", {
                _this : this
            }, function (e) {
                e.data._this.rewriteCountryCity();
                e.data._this.updateField();
            });

            this.city.bind("change", {
                _this : this
            }, function (e) {
                e.data._this.updateField();
            });

            if (this.localLink) {
                this.localLink.bind("click", {
                    _this : this
                }, function (e) {
                    var _this = e.data._this;
                    _this.localLink.addClass('hidden');
                    _this.country.removeClass('hidden');
                    _this.city.removeClass('hidden');
                });
            }
        }
// initialisation des input pour Adagio
        if (this.isAdagioLog())
        {
            utils.clearInput.init(this.proAccountId);
            utils.clearInput.init(this.proAccountContract );
        }
        // B2B inputs : home engine
        if (this.showPro.length && this.proReserverId.length && this.proReserverContract.length) {
            utils.clearInput.init(this.proReserverId);
            utils.clearInput.init(this.proReserverContract);

            this.showPro.bind("click", {
                _this : this
            }, function (e) {
                var _this = e.data._this;
                if (_this.showPro.attr('checked')) {
                    jQuery("div.engineproDetails").addClass("on").removeClass("off");
                } else {
                    jQuery("div.engineproDetails").addClass("off").removeClass("on");
                }
            });

        }
        if (this.showProAcc.length && this.proReserverId.length && this.proReserverContract.length) {
            utils.clearInput.init(this.proReserverId);
            utils.clearInput.init(this.proReserverContract);

            // For page is not 30days adagio
            if ( !this.isAdagioLog()) {
                this.showProAcc.bind("click", {
                    _this : this
                }, function (e) {
                    var _this = e.data._this;
                    if (_this.showProAcc.attr('checked')) {
                        jQuery("div.engineproDetails").addClass("on").removeClass("off");
                        _this.proReserverId.attr("disabled", false);
                        _this.proReserverContract.attr("disabled", false);
                    } else {
                        _this.proReserverId.val(_this.proReserverId.attr('title'));
                        _this.proReserverContract.val(_this.proReserverContract.attr('title'));
                        //_this.proReserverContract.attr("disabled", true);
                        jQuery("div.engineproDetails").addClass("off").removeClass("on");
                    }
                });
            }
        }

        //Clean disabled
        this.cleanDisabled();

        // Fill form
        if (!this.$currentForm.find("#search-roomNumber-boo option").length) {
          this.implementInput();
        }
        this.implementForkPrices();
        this.implementAmenities();

        //Show roomOptions : home booking engine
        if (this.idEngine == "bookingEngine" && (jQuery("div.roomServices ul.tServicesSelect :checked").length || (this.preferedCode.length && this.preferedCode.val() != "") || (this.forkPrice.length && this.forkPrice.val() != "ALL"))) {
            jQuery("#" + this.idEngine + " div.roomsOptions").addClass("on").removeClass("off");
            jQuery("#" + this.idEngine + " div.moreCriteria .deploy").addClass("undeploy").removeClass("deploy");
        }

        //Form action
        if(!jQuery("input.advanced-completion").length){
            this.enterKeyAction();
        }

        this.btnSubmit.bind("click", {
            _this : this
        }, function (e) {
            e.preventDefault();
            var _this = e.data._this;
            _this.subBooking();
        });

        this.$currentForm.find("#advanced-search a, a.lnk-advancedsearch, .advanced-search a, .knowMore.discoverclub a").bind("click", {
            _this : this
        }, function (e) {
            var _this = e.data._this;
            if (_this.destination.val() == _this.destination.attr('title')) {_this.destination.val("");}
            if (_this.proReserverId.val() == _this.proReserverId.attr('title')) {_this.proReserverId.val("");}
            if (_this.proReserverNumber.val() == _this.proReserverNumber.attr('title')) {_this.proReserverNumber.val("");}
            if (_this.proAccountId.val() == _this.proAccountId.attr('title')) {_this.proAccountId.val("");}
            if (_this.proAccountContract.val() == _this.proAccountContract.attr('title')) {_this.proAccountContract.val("");}
            var urlDatas = this.href + "?" + _this.$currentForm.serialize();
            top.document.location.href = urlDatas;
            return false;
        });

        //If given, override new search link's url
        if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) == -1 && jQuery("a.lnk-advancedsearch").length && this.data.altNewSearchUrl != null) {
            jQuery("a.lnk-advancedsearch").attr("href", this.data.altNewSearchUrl);
        }
    },

    //template data initialisation
    initDataTemplate: function () {

        // Brands template : advanced search engine
        if (this.idEngine == "advancedBookingEngine") {
            if (this.data.brandFilters != null) {
                /**
                 * Reorganisation de brandFilters afin que les marques soient affichees cote front en mode colonne (de haut en bas puis de gauche a droite) et non en mode lineaire (de gauche a  droite)
                 */
                var nbCols = 3; /* nombre de colonnes affichees cote front */

                /* calcul du nombre total de marques */
                var nbBrands = 0, objBrand;
                for (objBrand in this.data.brandFilters) {
                    nbBrands++;
                }

                /* calcul dans notre tableau de marques disposees en mode colonne du nombre de lignes completes (nbRowsGlobal) et du nombre de lignes partielles (nbExtraRows) */
                var nbRowsGlobal = 1;
                var nbExtraRows = 0;
                if (nbBrands > nbCols) {
                    nbRowsGlobal = parseInt(nbBrands / nbCols, 10);
                    nbExtraRows = nbBrands % nbCols;
                }

                /* creation du tableau de marques disposees en mode colonne (tabColsBrands) */
                var tabColsBrands = [];
                var indexCol = 0, indexRow = 0, maxNbRows = 0;
                var nbRowsLocal = false, objBrand;
                for (objBrand in this.data.brandFilters) {
                    if (!nbRowsLocal || indexRow == nbRowsLocal) {
                        if (nbRowsLocal != false) {
                            indexCol++;
                        }
                        indexRow = 0;
                        tabColsBrands[indexCol] = [];
                        nbRowsLocal = nbRowsGlobal;
                        if (indexCol < nbExtraRows) {
                            nbRowsLocal++;
                        }
                    }
                    tabColsBrands[indexCol][indexRow] = this.data.brandFilters[objBrand];
                    indexRow++;
                    if (maxNbRows < indexRow) {
                        maxNbRows = indexRow;
                    }
                }

                /* utilisation du tableau de marques disposees en mode colonne (tabColsBrands) pour parvenir au meme genre d'affichage cote front (tabBrandsForTemplate) */
                var tabBrandsForTemplate = [], indexRow, indexCol;
                for (indexRow = 0; indexRow < maxNbRows; indexRow++) {
                    for (indexCol = 0; indexCol < nbCols; indexCol++) {
                        if (typeof tabColsBrands[indexCol] != "undefined" && typeof tabColsBrands[indexCol][indexRow] != "undefined") {
                            tabBrandsForTemplate.push(tabColsBrands[indexCol][indexRow]);
                        }
                    }
                }
                this.tmplBrands.setParam("dataBrand", tabBrandsForTemplate);
            }
            this.tmplBrands.setParam("prefForm", this.prefEngine);
            this.tmplBrands.processTemplate(this.origin);
            this.implementBrands(this.data.brands);
        }
    },

    //Rooms Data
    initRoomsDatas: function () {
        //nb adult
        this.fakeAdult.bind("change", {
            _this : this
        }, function (e) {
            var _this = e.data._this;
            var $adultNb = _this.fakeAdult.val();
            try {
                // Compatibilite avec les pages migrees en jQuery 1.6.1
                _this.$currentForm.find("div.roomCriteria select:first").find("option:selected").removeProp("selected");
                _this.$currentForm.find("div.roomCriteria select:first").find("option[value=" + $adultNb + "]").prop("selected", "selected");
            } catch (ee) {
                // Compatibilite avec les pages toujours en jQuery 1.3.1
                _this.$currentForm.find("div.roomCriteria select:first").find("option:selected").removeAttr("selected");
                _this.$currentForm.find("div.roomCriteria select:first").find("option[value=" + $adultNb + "]").attr("selected", "selected");
            }
        });

        //nb fake children
        this.fakeChild.bind("change", {
            _this : this
        }, function (e) {
            var _this = e.data._this, i;
            _this.$currentForm.find("div.roomCriteria .tChildren:first").find("option[value=" + _this.fakeChild.val() + "]").attr("selected", "selected");
            _this.$currentForm.find("div.roomCriteria .tChildren:first").change();
            _this.showRoom(this);

            for (i = 0; i < _this.fakeChild.val(); i++) {
                _this.$currentForm.find("select[name$='children[" + [i] + "].age']").parents("div.childrensAge").addClass("on").removeClass("off");
                _this.$currentForm.find("select[name$='children[" + [i + 1] + "].age']").parents("div.childrensAge").addClass("off").removeClass("on");
            }
        });

        this.fakeRoom.bind("change", {
            _this : this
        }, function (e) {
            var _this = e.data._this;
            _this.tmplRooms.setParam("roomNb", _this.fakeRoom.val());
            _this.tmplRooms.processTemplate(_this.data);
            _this.showRoom(this);
            _this.fakeChild.val(_this.fakeChild.data("initValue"));
            _this.setChildrenObservers();
            if(_this.fakeChild.length==0)
            {//masquer les champs children
                jQuery('.tnoChildren .childrenNb').hide();
            }

            // [ERM]
            _this.ERM.triggerUpdateNbPeoples({datasource:'bookingEngine'});

        });

        jQuery(".roomsDetails").find(".lnk-moreoptions").bind("click", {
            _this : this
        }, function (e) {
            var link = this;
            var _this = e.data._this;
            var $roomDetails = _this.$currentForm.find(".roomsDetails");
            if (jQuery(this).parent().hasClass("undeploy")) {
                $roomDetails.find(".roomsWrapper").slideUp("slow", function () {
                    jQuery(".roomsDetails .lnk-moreoptions").attr("aria-expanded", false);
                    jQuery(link).parent().addClass("deploy").removeClass("undeploy");
                    jQuery(".roomsWrapper")
                    .removeAttr("tabindex")
                    .attr("aria-hidden",true);
                });
            } else {
                $roomDetails.find(".roomsWrapper").slideDown("slow", function () {
                	jQuery(".roomsDetails .lnk-moreoptions").attr("aria-expanded", true);
                    jQuery(link).parent().addClass("undeploy").removeClass("deploy");
                    jQuery(".roomsWrapper")
                    .attr("tabindex",-1)
                    .attr("aria-hidden",false)
                    .focus();
                });
            }
            return false;
        });
    },

    setChildrenObservers: function () {
        //nb children
        this.$currentForm.find("select.tChildren").bind("change", {
            _this : this
        }, function (e) {
            var _this = e.data._this;
            if (_this.tmplRooms) {
                _this.tmplRooms.find(".off select").removeAttr("disabled");
            }
            var $childNb = jQuery(this).val();
            var $parentRoom = jQuery(this).parents(".roomDetails");

            if ($childNb == 0) {
                $parentRoom.find(".tChildrensAges").removeClass("on").addClass("off");
                $parentRoom.find("select[name$=age]").parents("div.childrensAge").removeClass("on").addClass("off");
            } else {
                $parentRoom.find(".tChildrensAges").addClass("on").removeClass("off");
                $parentRoom.find("div.childrensAge").addClass("off").removeClass("on");
                var i;
                for (i = 0; i < $childNb; i++) {
                    var $sel = $parentRoom.find("select[name$='children[" + [i] + "].age']");
                    $sel.parents("div.childrensAge").addClass("on").removeClass("off");
                }
            }
        });
    },

    //All input
    implementInput: function () {
        var _this = this;

        //Destination
        if (this.data.destination != null && utils.getUrlParameter("hotel_ou_ville").length == 0 && utils.getUrlParameter("destination").length == 0) {
            this.destination.val(this.data.destination);
            if (this.origin.siteCode === "PUL") {
                jQuery("#more-criteria, .rooms-wrapper #rooms-form, .rooms-wrapper #fidelitycard-form").show();
            }/* TD 58466*/
        }else if(utils.getUrlParameter("hotel_ou_ville").length == 0 && utils.getUrlParameter("destination").length == 0 && this.data.hotelListfromMap != null){
            this.destination.val(this.data.hotelListfromMap);
        }
        //Radius
        if (this.data.radius && this.data.radius.value != '0') {
            this.radiusVal.find("option[value$=" + this.data.radius.value + "]").attr("selected", "selected");
            this.radiusUnit.find("option[value$=" + this.data.radius.unit + "]").attr("selected", "selected");
            //
            jQuery('input[name="search.radius.value"]').val(this.data.radius.value);
            jQuery('input[name="search.radius.unit"]').val(this.data.radius.unit);
        }

        //Rating class
        if (this.data.ratingClass != null) {
            this.hotelRating.find("option[value$=" + this.data.ratingClass + "]").attr("selected", "selected");
        }

        if (this.data.geoZone != null) {
            if (this.data.geoZone.geoCode != null && this.data.geoZone.geoType != null) {
                jQuery('input[name="search.geoZone.geoZoneCode"]').val(this.data.geoZone.geoCode);
                jQuery('input[name="search.geoZone.geoZoneType"]').val(this.data.geoZone.geoType);
            }
            if (this.data.geoZone.location != null) {
                if (this.data.geoZone.location.latitude != null && this.data.geoZone.location.longitude != null) {
                    jQuery('input[name="search.geoZone.location.latitude"]').val(this.data.geoZone.location.latitude);
                    jQuery('input[name="search.geoZone.location.longitude"]').val(this.data.geoZone.location.longitude);
                }
            }
        }

        if (this.data.period != null) {
            var $Date = this.data.period;
            jQuery.each($Date, function () {
                //Date in
                var startDate = new Date($Date.yearIn, $Date.monthIn - 1, $Date.dayIn);
                _this.arrivalDate.val(utils.printDate(startDate, i18n.calendar.displayDateFormat));
                _this.arrivalDay.val($Date.dayIn);
                _this.arrivalMonth.val($Date.monthIn);
                _this.arrivalYear.val($Date.yearIn);
                //Date out
                var endDate = new Date($Date.yearOut, $Date.monthOut - 1, $Date.dayOut);
                _this.departureDate.val(utils.printDate(endDate, i18n.calendar.displayDateFormat));
                _this.departureDay.val($Date.dayOut);
                _this.departureMonth.val($Date.monthOut);
                _this.departureYear.val($Date.yearOut);
                /*Night
                 $bookingTools.showNight.removeClass('off').addClass('on').find("span .tDuree").empty().append($Date.nbDay);
                 $bookingTools.nbNight.val($Date.nbDay);*/
            });
        }

        //Rooms number
        if (this.data.bookingEngineRules.maxRoomOccupancy != null) {
            // [ERM]
            if(this.ERM.extensibleRoomEnabled) {
               this.data.bookingEngineRules.maxRoomOccupancy.quantity = this.data.bookingEngineRules.maxRoomOccupancy.extendedMaxRoom;
            }

            // Room number
            var roomNb = this.data.bookingEngineRules.maxRoomOccupancy.quantity;

            var oOption, i;
            for (i = 0; i < roomNb; i++) {
                oOption = document.createElement('option');
                oOption.value = Number(i + 1);
                oOption.innerHTML = Number(i + 1);
                if (this.data.roomsCriteria != null && this.data.roomsCriteria.length > 0) {
                    if (this.data.roomsCriteria.length == Number(i + 1)) {oOption.selected = true;}
                } else {
                    if (this.data.bookingEngineRules.selectedRoomOccupancy.quantity == Number(i + 1)) {oOption.selected = true;}
                }
                this.fakeRoom.append(oOption);
            }
            this.fakeRoom.hide().show();

            // Adult number
            var fakeAdultNb = this.data.bookingEngineRules.maxRoomOccupancy.adultNumber;
            var i;
            for (i = 0; i < fakeAdultNb; i++) {
                oOption = document.createElement('option');
                oOption.value = Number(i + 1);
                oOption.innerHTML = Number(i + 1);
                if (this.data.roomsCriteria != null && this.data.roomsCriteria.length > 0) {
                    if (this.data.roomsCriteria[0].adultNumber == Number(i + 1)) {
                        oOption.selected = true;
                    }
                } else {
                    if (this.data.bookingEngineRules.selectedRoomOccupancy.adultNumber == Number(i + 1)) {
                        oOption.selected = true;
                    }
                }
                this.fakeAdult.append(oOption);
            }
            this.fakeAdult.hide().show();
            this.fakeAdult.data("initValue", this.fakeAdult.val());

            // Child Number
            var fakeChildNb = this.data.bookingEngineRules.maxRoomOccupancy.childrenNumber;
            var i;
            for (i = 0; i < fakeChildNb + 1; i++) {
                var oOption = document.createElement('option');
                oOption.value = i;
                oOption.innerHTML = i;
                if (this.data.roomsCriteria != null && this.data.roomsCriteria.length > 0) {
                    if (this.data.roomsCriteria[0].childrenNumber == i) {
                        oOption.selected = true;
                    }
                } else {
                    if (this.data.bookingEngineRules.selectedRoomOccupancy.childrenNumber == Number(i + 1)) {
                        oOption.selected = true;
                    }
                }
                this.fakeChild.append(oOption);
            }

            this.fakeChild.data("initValue", this.fakeChild.val());
            this.fakeChild.hide().show().change();

            // [ERM]
            this.ERM.triggerUpdateNbPeoples({datasource:'bookingEngine'});

        }

        //FidelityCard
        if (this.data.fidelityCard != null) {
            this.cardCode.val(this.data.fidelityCard.number);
            jQuery("a.aclubPopin").hide();
            //if checkbox
            if (this.cardCode.parents("fieldset").find("input[name=checkboxAvantage]")) {
                this.cardCode.parents("fieldset").find("input[name=checkboxAvantage]").attr("checked", "checked");
                if (jQuery(this.cardCode).val() != "") jQuery(this.cardCode).parent().removeClass("off");
            }
        }

        //Freenight
        if (this.webSiteFunctionnalities != undefined && this.webSiteFunctionnalities.bookingProcessFreenightEnabled) {
            /*  freenight Sept : uniquement identifie et au moins 1 point
             NEED loyaltyAccountViewBean */
            var freenight = (this.loyaltyAccount.account && this.loyaltyAccount.authenticated &&
            this.loyaltyAccount.account.stayPlus && this.loyaltyAccount.account.stayPlus.nbStayPlus> 0)
            if (freenight) {
                jQuery(".zone-freenight").css("display","block");
                if (this.data.presetFreeNight) {
                    jQuery("input[id='search.freeNight-yes']").prop("checked","checked");
                    jQuery("input[id='search.freeNight-no']").prop("checked","");
                } else {
                    jQuery("input[id='search.freeNight-yes']").prop("checked","");
                    jQuery("input[id='search.freeNight-no']").prop("checked","checked");
                }
            }
        }

        //if cards fidelity exists
        if(this.data.fidelityCards){
            if( jQuery("#fidelity-block").length ) jQuery(this.cardCode).parent().hide();
        }

        //PreferredCode
        if (this.data.preferredCode != null) {
            this.preferedCode.val(this.data.preferredCode.code);
        }
        if (this.showPro.length == 0) {
            if (this.origin.subSiteCode == "BIZ") {
                if (this.data.reserverType == "SC") {
                    this.rewriteReserverInfos();
                }
            } else if (this.origin.subSiteCode == "TRA") {
                if (this.data.reserverType != "SC") {
                    this.rewriteReserverInfos();
                }
            } else if (this.origin.accorhotels == true) {
                if (this.data.reserverType == "SC") {
                    jQuery("input[name='identification.reserverType']").attr("checked", true);
                    jQuery("div.engineproDetails").addClass("on").removeClass("off");
                    this.rewriteReserverInfos();
                }
            }

            if (this.data.accountContract != null) {
                this.proAccountContract.val(this.data.accountContract);
            }
            // SC contract, code star
            this.data.accountId = (this.data.accountId) ? this.data.accountId : this.getUrlParameter('identification.accountId');
            if (this.data.accountId != null) {
                this.proAccountId.val(this.data.accountId);
            }

            if (jQuery('input[name="identification.account"]').length > 0 && (this.proAccountContract.val() != "" || this.proAccountId.val() != "")) {
                jQuery('input[name="identification.account"]').attr("checked", true).parents('.numContrat').find('.off').removeClass('off');
            }
            if (jQuery('input[name="identification.reserver"]').length > 0 && this.proReserverContract.val() != "") {
                jQuery('input[name="identification.reserver"]').attr("checked", true).parents('.numContrat').find('.text').removeClass('off');
            }
        }

        /* Meetings fields */
        if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1 && this.data.event) {
            /* Event details */
            if (this.data.event.eventName) {
                jQuery("input[name='event.eventName']").val(this.data.event.eventName);
                jQuery("p#event-name").text(this.data.event.eventName);
            }
            if (this.data.event.paxNumber && !utils.getUrlParameter("pax").length) {
                jQuery("input[name='event.paxNumber']").val(this.data.event.paxNumber);
            }

            /* MeetingRoom calendar info */
            jQuery.each(this.multiCal.personalizedCal, function () {
                /* MeetingRoom */
                if (this.calendarName === "meetingRoom" && _this.data.event.meetingRoom) {
                    // Date in
                    var startDateIn = new Date(_this.data.event.meetingRoom.yearIn, _this.data.event.meetingRoom.monthIn - 1, _this.data.event.meetingRoom.dayIn);
                    jQuery(this.startDate).val(utils.printDate(startDateIn, i18n.calendar.displayDateFormat));
                    jQuery(this.startDay).val(_this.data.event.meetingRoom.dayIn);
                    jQuery(this.startMonth).val(_this.data.event.meetingRoom.monthIn);
                    jQuery(this.startYear).val(_this.data.event.meetingRoom.yearIn);
                    // Date out
                    var endDateOut = new Date(startDateIn.getTime() + (86400000 * (_this.data.event.meetingRoom.dayNb - 1)));

                    jQuery(this.endDate).val(utils.printDate(endDateOut, i18n.calendar.displayDateFormat));
                    jQuery(this.endDay).val(jQuery.datepicker.formatDate('dd', endDateOut));
                    jQuery(this.endMonth).val(jQuery.datepicker.formatDate('mm', endDateOut));
                    jQuery(this.endYear).val(jQuery.datepicker.formatDate('yy', endDateOut));

                    jQuery(this.durationNb).val(_this.data.event.meetingRoom.dayNb);
                    jQuery(this.durationContent).removeClass('off').addClass('on').find("span .tDuree").empty().append(_this.data.event.meetingRoom.dayNb);
                    jQuery("#DisplayMeetingRoom-Yes").closest('.boxRadio').next('.formBox').slideDown('slow').find("input").prop("disabled", false);
                }
                /* Bedroom */
                if (this.calendarName === "bedroom" && _this.data.event.bedroom) {
                    _this.data.event.bedroom.bedroomNb ? jQuery("input[name='event.bedroom.bedroomNb']").val(_this.data.event.bedroom.bedroomNb) : "";

                    // Date in
                    var startDateIn = new Date(_this.data.event.bedroom.yearIn, _this.data.event.bedroom.monthIn - 1, _this.data.event.bedroom.dayIn);
                    jQuery(this.startDate).val(utils.printDate(startDateIn, i18n.calendar.displayDateFormat));
                    jQuery(this.startDay).val(_this.data.event.bedroom.dayIn);
                    jQuery(this.startMonth).val(_this.data.event.bedroom.monthIn);
                    jQuery(this.startYear).val(_this.data.event.bedroom.yearIn);
                    // Date out
                    var endDateOut = new Date(startDateIn.getTime() + (86400000 * _this.data.event.bedroom.nightNb));

                    jQuery(this.endDate).val(utils.printDate(endDateOut, i18n.calendar.displayDateFormat));
                    jQuery(this.endDay).val(jQuery.datepicker.formatDate('dd', endDateOut));
                    jQuery(this.endMonth).val(jQuery.datepicker.formatDate('mm', endDateOut));
                    jQuery(this.endYear).val(jQuery.datepicker.formatDate('yy', endDateOut));

                    jQuery(this.durationNb).val(_this.data.event.bedroom.nightNb);
                    jQuery(this.durationContent).removeClass('off').addClass('on').find("span .tDuree").empty().append(_this.data.event.bedroom.nightNb);
                    jQuery("#DisplayAdditionalRoom-Yes").closest('.boxRadio').next('.formBox').slideDown('slow').find("input").prop("disabled", false);
                    jQuery("#event-bedroom-dateOut").prop("disabled", false);
                    if (!_this.data.event.meetingRoom) {
                        jQuery("#DisplayMeetingRoom-No").prop("checked", true).closest('.boxRadio').next('.formBox').slideUp('slow').find("input").prop("disabled", true);
                    }
                } else {
                    jQuery("#DisplayAdditionalRoom-No").closest('.boxRadio').next('.formBox').slideUp('slow').find("input").prop("disabled", true);
                }
            });

            /* Pro fields */
            var resType = this.data.reserverType;
            this.proReserverType.each(function () {
                if (this.value == resType) {
                    this.checked = true;
                }
            });
            this.identificationPro(this.data.reserverType);
        }
    },

    getUrlParameter: function(name) {
      name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
      var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
      var results = regex.exec(location.search);
      return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
    },

    identificationPro: function (btRadioValue) {
        jQuery("#customerCode").hide().find("input").prop("disabled", true).parent().hide();
        switch (btRadioValue) {
            case "SC":
                if (this.data.reserverId != null && this.data.reserverId != "") {this.proReserverId.val(this.data.reserverId);}
                if (this.data.reserverContract != null && this.data.reserverContract != "") {this.proReserverContract.val(this.data.reserverContract);}
                jQuery("#customerCode").show().find("input").prop("disabled", false).parent().show();
                break;
            case "IA":
            case "RT":
                if (this.data.reserverId != null && this.data.reserverId != "") {this.proReserverId.val(this.data.reserverId);}
                jQuery("#customerCode").show().find("input[name='identification.reserverId']").prop("disabled", false).parent().show();
                break;
            default:
                jQuery("#customerCode").find("input[title]").val("");
        }
    },

    rewriteReserverInfos: function () {
        // IATA / TIDS / CLIA
        this.data.reserverId = (this.data.reserverId) ? this.data.reserverId : this.getUrlParameter('identification.reserverId');
        this.data.reserverType = (this.data.reserverType) ? this.data.reserverType : this.getUrlParameter('identification.reserverType');
        if (this.data.reserverId != null) {
            this.proReserverId.val(this.data.reserverId);
        }
        if (this.data.reserverContract != null) {
            this.proReserverContract.val(this.data.reserverContract);
        }
        if (this.data.reserverType != null) {
            if (this.proReserverType.attr("type") == "hidden") {
                this.proReserverType.val(this.data.reserverType);
            } else if (this.proReserverType.attr("type") == "radio") {      //TRA
                var resType = this.data.reserverType;
                this.proReserverType.each(function () {
                    if (this.value == resType) {this.checked = true;}
                });
                if (this.data.reserverType == "SC" && this.proReserverId.val() != "") {
                    this.proReserverId.val("");
                }
            }
        }
    },

    rewriteLeisureReserverInfos : function() {
        jQuery('input#agencyType'+this.data.reserverType).attr("checked", "checked");
        if(this.data.reserverType == "SC") {
            jQuery("#bloc_agencyContract").show();
        }
        // IATA / TIDS / CLIA
        this.data.reserverId = (this.data.reserverId) ? this.data.reserverId : this.getUrlParameter('identification.companyId');
        this.data.reserverType = (this.data.reserverType) ? this.data.reserverType : this.getUrlParameter('identification.reserverType');

        if (this.data.reserverId != null) {
            this.proReserverId.val(this.data.reserverId);
        }
        if (this.data.reserverContract != null) {
            this.proReserverContract.val(this.data.reserverContract);
        }
        if (this.data.paxNumber != null) {
            this.groupPaxNumber.val(this.data.paxNumber)
        }
        if (this.data.fileName != null) {
            this.groupFileName.val(this.data.fileName);
        }
        if (this.data.roomsGroupCriteria != null) {
            if (this.data.roomsGroupCriteria.singleNumber) {
                this.groupSingleNumber.val(this.data.roomsGroupCriteria.singleNumber);
            }
            if (this.data.roomsGroupCriteria.doubleNumber) {
                this.groupDoubleNumber.val(this.data.roomsGroupCriteria.doubleNumber);
            }
            if (this.data.roomsGroupCriteria.twinNumber) {
                this.groupTwinNumber.val(this.data.roomsGroupCriteria.twinNumber);
            }
            if (this.data.roomsGroupCriteria.tripleNumber) {
                this.groupTripleNumber.val(this.data.roomsGroupCriteria.tripleNumber);
            }
        }
    },

    //Forkprice
    implementForkPrices: function () {
        var _this = this;

        if (this.forkPrice && this.data.bookingEngineRules.forkPrices != null) {
            jQuery.each(this.data.bookingEngineRules.forkPrices, function (i) {
                var forkBound = this.bound;
                var forkCurrency = this.currency;
                var reg = new RegExp("[ |]+", "g");
                var tabBound = forkBound.split(reg);
                var min = tabBound[0];
                var max = tabBound[1];
                if (_this.CurrenciesViewBean != null) {
                    var userCurrency = _this.CurrenciesViewBean.defaultCurrency;
                    if (userCurrency != forkCurrency) {
                        min = (min / (_this.CurrenciesViewBean.currencies[userCurrency] / _this.CurrenciesViewBean.currencies[forkCurrency])).toFixed(2);
                        min = Math.round(Number(min));
                        min = Math.floor((min + 5) / 10) * 10;
                        max = (max / (_this.CurrenciesViewBean.currencies[userCurrency] / _this.CurrenciesViewBean.currencies[forkCurrency])).toFixed(2);
                        max = Math.round(Number(max));
                        max = Math.floor((max + 5) / 10) * 10;
                        forkCurrency = userCurrency;
                    }
                }
                if (min == 0 && max > 0) {
                    _this.forkPrice.append('<option value="' + min + "|" + max + '">&nbsp;<&nbsp;' + max + '&nbsp;' + forkCurrency + '</option>');
                } else if (min > 0 && max > 0) {
                    _this.forkPrice.append('<option value="' + min + "|" + max + '">&nbsp;' + min + '&nbsp;-&nbsp;' + max + '&nbsp;' + forkCurrency + '</option>');
                } else if (min > 0 && max == 0) {
                    _this.forkPrice.append('<option value="' + min + "|" + max + '">&nbsp;>&nbsp;' + min + '&nbsp;' + forkCurrency + '</option>');
                }
                _this.forkCurrency.val(forkCurrency);
                _this.forkPrice.change(function () {
                    var currentBound = _this.forkPrice.find('option:selected').val();
                });
            });
        }
        if (this.forkPrice && this.data.forkPrice != null) {
            //this.forkPrice.find("option[value$='" + this.data.forkPrice.bound + "']").attr("selected", 'selected'); //=> bug IE6
            var selectedItem = this.forkPrice.find("option[value$='" + this.data.forkPrice.bound + "']").get(0);
            if (selectedItem) {selectedItem.setAttribute('selected', true);}
            this.forkCurrency.val(this.data.forkPrice.currency);
        }
    },

    //Brands
    implementBrands: function (brand) {
        var $iptYes = this.$currentForm.find(".tFilterBrandsYes");
        var $iptNo = this.$currentForm.find(".tFilterBrandsNo");
        var $allBrands = this.$currentForm.find(".allBrands");
        var $brandsSelect = this.$currentForm.find(".brandsSelect");
        this.$currentForm.find('input[name="filter.brands"]').val("");
        if (brand != null) {

            var $BrandsTools = brand,
                Brandlist = $BrandsTools.split("|"),
                i;
            for (i = 0; i < Brandlist.length; i++) {
                if ($brandsSelect.length > 0) {
                    //cas ALL select
                    if (Brandlist[0] == "ALL") {
                        $iptYes.attr("checked", "checked");
                    } else {
                        $allBrands.slideDown("slow");
                        $iptYes.removeAttr("checked");
                        $iptNo.attr("checked", "checked");
                        $iptNo.parent().parent().prev().addClass("on");

                        var currentBrand = Brandlist[i], goodBrandCode = null, masterCode;

                        if (currentBrand != null) {
                            jQuery.each(this.data.brandFilters, function (pincI, princE) {
                                masterCode = princE.code;
                                if (masterCode === currentBrand) {
                                    goodBrandCode = currentBrand;
                                    return false;
                                } else if (princE.subFilters != null) {
                                    jQuery.each(princE.subFilters, function (subI, subE) {
                                        if (subE.code === currentBrand) {
                                            goodBrandCode = masterCode;
                                            return false;
                                        }
                                    });
                                }
                            });
                            if (goodBrandCode != null) {
                                this.$currentForm.find("input[value=" + goodBrandCode + "]").attr("checked", "checked");
                            }
                        }
                    }
                } else {
                    this.$currentForm.find('input[name="filter.brands"]').empty().val(this.data.brands);
                }
            }
        }
        //Brands concatenation
        if ($brandsSelect.length) {
            $iptYes.bind("click", {
                _this : this
            }, function (e) {
                $iptYes.attr("checked", "checked");
                $iptNo.removeAttr("checked");
                $allBrands.slideUp("slow");//listener open brands
                $iptYes.parent().parent().prev().removeClass("on");
                e.data._this.$currentForm.find('input[name="filter.brands"]').val("");
            });

            $iptNo.bind("click", {
                _this : this
            }, function (e) {
                $iptNo.attr("checked", "checked");
                $iptYes.removeAttr("checked");
                $allBrands.slideDown("slow");//listener hide brands
                $iptNo.parent().parent().prev().addClass("on");
                e.data._this.concBrands();
                e.data._this.$currentForm.find(".brandsSelect input").click(function () {
                    e.data._this.concBrands();
                });
            });

            //this.$currentForm.find('.brandsSelect input').click(function () { _this.concBrands(); });
            if (this.$currentForm.find("ul.allBrands input:checked").length == this.$currentForm.find(".allBrands :input").length) {
                this.$currentForm.find('input[name="filter.brands"]').val("");
            }

            //For Leisure, tFilterBrandsNo is checked by default
            if(jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
                jQuery($iptNo).trigger('click');
            }
        }
    },

    //Concatenation brands
    concBrands: function () {
        var inputVal = "";
        this.$currentForm.find(".allBrands input:checked").each(function (i) {
            if (i == 0) {
                inputVal = (this).value;
            } else {
                inputVal += "|" + (this).value;
            }
        });
        if (inputVal != "") {this.$currentForm.find('input[name="filter.brands"]').val(inputVal);}
    },

    //Dynamise amnenities
    dynAmnenities: function (src, list, name) {
        var _this = this;
        jQuery.each(src, function (i) {
            var j = this.code;
            var k = this.label;
            if (this.selected && this.selected == true) {
                var l = "checked";
            } else {var l = "";}
            list.append('<li><input type="checkbox" id="filter-' + name + '-' + j + '-' + _this.prefEngine + '" name="filter.' + name + '[' + i + ']" value="' + j + '" ' + l + '  /><label for="filter-' + name + '-' + j + '-' + _this.prefEngine + '">' + k + '</label></li>');
        });
    },

    //Amenities
    implementAmenities: function () {
        //advanced engine
        if (this.idEngine == "advancedBookingEngine") {
            var $AdvancedSearchAmenities = {
                activities : this.data.advancedSearchActivities,
                services : this.data.advancedSearchServices
            };
            // advanced services
            if (this.advServicesOption) {
                this.dynAmnenities($AdvancedSearchAmenities.services, this.advServicesOption, 'services');
            }
            // advanced leasure
            if (this.advLeasureOption && $AdvancedSearchAmenities.activities[0] != undefined) {
                this.dynAmnenities($AdvancedSearchAmenities.activities, this.advLeasureOption, 'activities');

            } else {
                //disable leisure box if no leisure
                jQuery('.leisure').parent('.containerMoreOptions').hide();
            }
        }
        //other engine
        if (this.servicesOption) {
            var $HomeAmenities = {
                activities : this.data.homeActivities,
                services : this.data.homeServices
            };
            //services
            this.dynAmnenities($HomeAmenities.services, this.servicesOption, 'services');
            //leasure
            this.dynAmnenities($HomeAmenities.activities, this.servicesOption, 'activities');
        }
    },

    //Enter submit
    enterKeyAction: function () {

        this.$currentForm.bind("keyup", {
            _this : this
        }, function (event) {
            var _this = event.data._this;
            if (event.target && event.target.getAttribute('name') != 'search.destination' && event.keyCode == 13) {
                //disable auto submit when key return has been made on the auto complete drop down list
                if (_this.hasAutoCompletion == true) {
                    if (_this.autoComplete.isKeyReturnInResults() == false) {
                        _this.subBooking();
                    } else {
                        _this.hasAutoCompletion = false;
                    }
                } else {
                    _this.subBooking();
                }
            }
        });
    },

    checkFormatDate: function (date) {
        var reg = new RegExp(i18n.calendar.dateFormat, "g");
        if (reg.test(date)) {
            reg = new RegExp("%([dmY])(.)%([dmY]).%([dmY])", "g");
            var tabRes = reg.exec(i18n.calendar.displayDateFormat);
            var typePos1 = tabRes[1];
            var typePos2 = tabRes[3];
            var typePos3 = tabRes[4];
            var dateSeparator = tabRes[2];

            tabRes = date.split(dateSeparator);
            var tabDate = [];
            tabDate[typePos1] = tabRes[0];
            tabDate[typePos2] = tabRes[1];
            tabDate[typePos3] = tabRes[2];

            var today = new Date();
            if (tabDate.d >= 1 && tabDate.d <= 31 && tabDate.m >= 1 && tabDate.m <= 12 && tabDate.Y >= today.getFullYear() && tabDate.Y <= today.getFullYear() + 2) {
                return true;
            }
        }
        return false;
    },
    //Submit Booking
    subBooking: function () {
        // For advanced research only
        var isJQueryUpdated = jQuery.isFunction(jQuery("#pro").prop);

        // 79922 - Need some rework
        var reserverId = jQuery('[data-referenceto="identification.reserverId"]').length;
        var reserverCt = jQuery('[data-referenceto="identification.reserverContract"]').length;

        if (isJQueryUpdated && reserverId && reserverCt) {
          if ((jQuery('[data-referenceto="identification.reserverId"]').val() != "" || jQuery('[data-referenceto="identification.reserverContract"]').val() != "") && !jQuery("#pro").prop("checked")) {
            jQuery("#pro").click();
          } else if (jQuery('[data-referenceto="identification.reserverId"]').val() == ""
              && jQuery('[data-referenceto="identification.reserverContract"]').val() == ""
              && jQuery('input[name="identification.reserverId"]').val() == ""
              && jQuery('input[name="identification.reserverContract"]').val() == ""
              && jQuery("#pro").prop("checked")) {
              jQuery("#pro").click();
          }
        }

        // SME loader
        if ((jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) && i18n_MEE) {
            if (jQuery("ul.last li").length) {meetingsUtils._setLoadingButton(this.btnSubmit, "ul.last li", "modal-btnSubmit", 15, -5, 0, "#FFFFFF");}
            if (jQuery("#footerBlock").length) {meetingsUtils._setLoadingButton(this.btnSubmit, "#footerBlock", "modal-btnSubmit", 10, 0, 0, "#FFFFFF");}
        }

        var _this = this, list, listErrorsArrivalDate = null, listErrorsDepartureDate = null;

        if (this.arrivalDate.length > 0 && this.arrivalDate.val().search("/")!=-1 ) {
            list = jQuery.grep(this.arrivalDate, function (e, i) {
                return (jQuery(e).val() != "");
            });
            listErrorsArrivalDate = jQuery.grep(list, function (e, i) {
                return (!_this.checkFormatDate(jQuery(e).val()));
            });
        } else if (this.departureDate.length > 0 && this.departureDate.val().search("/")!=-1 ) {
            var _this = this, list, listError;

            list = jQuery.grep(this.arrivalDate, function (e, i) {
                return (jQuery(e).val() != "");
            });
            listErrorsDepartureDate = jQuery.grep(list, function (e, i) {
                return (!_this.checkFormatDate(jQuery(e).val()));
            });
        }
        // Clear errors & hide error message
        this.$currentForm.find(".validatorInvalidState").removeClass("validatorInvalidState");
        this.concBrands();
        if (this.showPro.length || this.proReserverId.length || this.proReserverContract.length) {
            this.showPro.parent().removeClass('validatorInvalidState');
            this.proReserverId.parent().removeClass('validatorInvalidState');
            this.proReserverContract.parent().removeClass('validatorInvalidState');
        }
        this.destination.parents('form').find('.errorMessage').hide();

        /***
         * Dirty Fix for travel pro 8407
         * one if() more or less because i can't capture the event who overwrite the label class element
         * so now it'works !
         * */
        if(jQuery('#identification-inputs label')) {
            setTimeout(function(){
                var els = jQuery('#identification-inputs label');
                for (var i = 0; i < els.length; i++) {
                    els[i].classList.remove('validatorInvalidState');
                }
            }, 800);
        }

        var isB2B = false, isMarq = true;
        // Destination check
        if(((window.location.href.indexOf("hotels-services-day/day-use")!=-1))){
            if(this.$currentForm.find("input[name='search.destination.labelSelected']").length > 0 && this.$currentForm.find("input[name='search.destination.labelSelected']").val()=="") {
                this.setFieldError([this.destination], "validatorInvalidState", this.destination, i18n.destination.error);
                return false;
            }
        }
        
        if (window.location.hostname === "travelpros.accor.com" && this.destinationUserlang.val() === "" && this.idEngine == 'aolBookingEngine') {
            this.setFieldError([this.destinationUserlang], "validatorInvalidState", this.destinationUserlang, i18n.b2b.error);
            jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            return false;
        } 
        else if (this.destination.length && (this.destination.val() === '' || this.destination.val() === this.destination[0].title)) {
            this.setFieldError([this.destination], "validatorInvalidState", this.destination, i18n.destination.error);
            if(this.idEngine == 'advancedBookingEngine') {
              if (jQuery("body").prop("id") == "meetings-events") {
                jQuery(".formEvent").scrollTop(0, 1000);
              } else {
                jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
              }
            }
            if (jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
                if (typeof accorhotelsUtils  !== "undefined") {
                    accorhotelsUtils._unSetLoadingButton(".modal-btnSubmit");
                }
            }
            return false;
        }
        // identification check (special availpro)
        else if (window.location.hostname === "travelpros.accor.com" && this.proReserverId.val() === "" && this.idEngine == 'aolBookingEngine') {
            this.setFieldError([this.proReserverId], "validatorInvalidState", this.proReserverId, i18n.b2b.error);
            jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            return false;
        }
        else if (window.location.hostname === "travelpros.accor.com" && this.proReserverNumber.val() === "" && this.idEngine == 'aolBookingEngine') {
            this.setFieldError([this.proReserverNumber], "validatorInvalidState", this.proReserverNumber, i18n.b2b.error);
            jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            return false;
        }

        else if (window.location.hostname === "all.accor.com" && jQuery("#pro").prop("checked") && (this.proReserverId.val() === "" || this.proReserverId.val() === this.proReserverId.attr('title'))) {
             this.setFieldError([this.proReserverId], "validatorInvalidState", this.proReserverId, i18n.b2b.error);
            jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            return false;
        }
        else if (window.location.hostname === "all.accor.com" && jQuery("#pro").prop("checked")&& (this.proReserverNumber.val() === "" || this.proReserverNumber.val() === this.proReserverNumber.attr('title'))) {
             this.setFieldError([this.proReserverNumber], "validatorInvalidState", this.proReserverNumber, i18n.b2b.error);
            jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            return false;
        }
        // Dates check
        else if (this.arrivalDate.val() === "" && ((window.location.href.indexOf("hotels-services-day/day-use")!=-1)||(window.location.href.indexOf("flexible-booking/flexible-booking")!=-1) || (window.location.href.indexOf("travelpros.accor.com") !=-1) || this.givenName.indexOf("fhBookingEngine") != -1)) {
            this.setFieldError([this.arrivalDate], "validatorInvalidState", this.arrivalDate, i18n.calendar.error);
            jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            return false;
        }
        else if ( this.departureDate.val() === "" && ((window.location.href.indexOf("hotels-services-day/day-use")!=-1)||(window.location.href.indexOf("flexible-booking/flexible-booking")!=-1) || (window.location.href.indexOf("travelpros.accor.com") !=-1) || this.givenName.indexOf("fhBookingEngine") != -1)) {
            this.setFieldError([this.departureDate], "validatorInvalidState", this.departureDate, i18n.calendar.error);
            jQuery('html,body').animate({scrollTop: jQuery("#" + this.idEngine).offset().top - 50}, 1000);
            return false;
        }

        else if (this.arrivalDate.val() != "" && this.departureDate.val() === "") {
            this.setFieldError([this.departureDate], "validatorInvalidState", this.arrivalDate, i18n.calendar.error);
            jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            return false;
        } else if (listErrorsArrivalDate != null && listErrorsArrivalDate.length > 0) {
            this.setFieldError([this.arrivalDate], "validatorInvalidState", this.arrivalDate, i18n.calendar.error);
            jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            return false;
        } else if (listErrorsDepartureDate != null && listErrorsDepartureDate.length > 0) {
            this.setFieldError([this.departureDate], "validatorInvalidState", this.departureDate, i18n.calendar.error);
            jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            return false;
        }
        // Check subSiteCode : Business
        else if (this.origin && this.origin.subSiteCode === "BIZ") {
            isMarq = false;
            isB2B = false;
            var proReserverContractTitle = this.proReserverContract.length>0?this.proReserverContract[0].title:'';
            var proReserverIdTitle = this.proReserverId.length>0?this.proReserverId[0].title:'';
            if (this.proReserverId.val() === proReserverIdTitle && this.proReserverContract.val() === proReserverContractTitle) {
                this.proReserverId.val("");
                this.proReserverContract.val("");
                this.proReserverType.val("");
                this.showPro.val("");
            } else {
                if (this.proReserverId.val() === '' || this.proReserverId.val() === proReserverIdTitle) {
                    this.proReserverId.val("");
                    this.showPro.val("");
                }

                if (this.proReserverContract.val() === '' || this.proReserverContract.val() === proReserverContractTitle) {
                    this.proReserverContract.val("");
                    this.showPro.val("");
                }
            }
            if(this.$currentForm.find("input[name='search.destination.userlang']").length > 0) {
                var destinationUserlang = this.$currentForm.find("input[name='search.destination.userlang']")[0];
                destinationUserlang.dataset.send = false;
            }

            if(this.$currentForm.find("input[name='search.destination.labelSelected']").length > 0) {
                var destinationLabelSelected = this.$currentForm.find("input[name='search.destination.labelSelected']")[0];
                destinationLabelSelected.dataset.send = false;
            }

            if(this.$currentForm.find("input[name='search.destination.label_en']").length > 0) {
                var destinationUserlang = this.$currentForm.find("input[name='search.destination.label_en']")[0];
                destinationUserlang.dataset.send = false;
            }

            // Check subSiteCode : TravelAgency
        } else if (this.origin && this.origin.subSiteCode === "TRA" || (jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) || window.location.hostname === "travelpros.accor.com") {
            isMarq = false;
            if (this.proReserverId.val() === this.proReserverId[0].title) {
                this.proReserverId.val("");
            }
            if (this.$currentForm.hasClass("advancedbookingEngineStar") || this.idEngine === "bookingEngineStar") {
                if (this.proAccountId.val() === this.proAccountId[0].title) {
                    this.proAccountId.val("");
                }
                if (this.proAccountContract.val() === this.proAccountContract[0].title) {
                    this.proAccountContract.val("");
                }
            }

            // Check Pro fields
        } else if (this.showProAcc.length && this.proReserverId.length && this.proReserverContract.length && this.showProAcc[0].value != "on") {
            var elementisChecked = false;
            if ( this.isAdagioLog()) {
                var elementChecked = jQuery.grep(this.showProAcc, function (e, i) {
                    return (jQuery(e).prop("checked"));
                });
                if(elementChecked.length) elementisChecked =true;
            }

            // cas moteur avec champs sc / contrat mais sans case à cocher (type nouvelle HP AH.com)
            if (this.proReserverType.length && this.proReserverType.attr("type") === "hidden") {
                if ((this.proReserverId.val() != "" && this.proReserverId.val() != this.proReserverId[0].title) ||  (this.proReserverContract.val() != "" && this.proReserverContract.val() != this.proReserverContract[0].title)) {
                    this.proReserverType.val("SC");
                }
                else {
                    this.proReserverType.val("");
                    this.proReserverId.attr("disabled", "true");
                    this.proReserverContract.attr("disabled", "true");
                }
            }

            else if ( elementisChecked || this.showPro.attr('checked')||this.showProAcc.attr('checked')||this.isAdagioLog()) {
                {
                    proReserverIdTest = this.proReserverId;
                }

                var testElementProReserverId = (proReserverIdTest.val() === '' || proReserverIdTest.val() === proReserverIdTest[0].title);

                if ( this.isAdagioLog())
                {
                    /* cas ADAGIO long séjour */
                    var isValidFormAdglog = true;
                    /* Vérification du champs ReserverID  */
                    if(this.checkErrorInput('identification.reserverId')== false)
                    {
                        isValidFormAdglog=false;
                    }
                    /* Vérification du champs ReserverContrat  */
                    if(this.checkErrorInput('identification.reserverContract')== false)
                    {
                        isValidFormAdglog=false;
                    }
                    /* Vérification du champs acountId  */

                    if(this.checkErrorInput('identification.accountId') == false)
                    {
                        isValidFormAdglog=false;
                    }
                    /* Vérification du champs acountContrat  */

                    if(this.checkErrorInput('identification.accountContract')== false)
                    {
                        isValidFormAdglog=false;
                    }
                    if(!isValidFormAdglog)
                    {
                        return false;
                    }
                } else
                {
                    var testElementProReserverContract = (this.proReserverContract.val() === '' || this.proReserverContract.val() === this.proReserverContract[0].title);
                }


                if ((testElementProReserverId || testElementProReserverContract)&& !this.isAdagioLog())
                {
                    if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
                        this.setFieldError([this.showPro, proReserverIdTest, this.proReserverContract], "validatorInvalidState", this.arrivalDate, i18n_MEE.form_home.error);
                    } else {
                        this.setFieldError([this.showPro, proReserverIdTest, this.proReserverContract], "validatorInvalidState", this.arrivalDate, i18n.b2b.error);
                    }

                    if(isJQueryUpdated) {
                        proReserverError = true;
                    } else {
                      return false;
                    }
                }

                if (this.arrivalDate.val() === "") {
                    if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
                        this.setFieldError([this.arrivalDate], "validatorInvalidState", this.arrivalDate, i18n_MEE.form_home.error);
                    } else {
                        this.setFieldError([this.arrivalDate], "validatorInvalidState", this.arrivalDate, i18n.b2b.error);
                    }
                    return false;
                }else if (this.departureDate.val() === "") {
                    if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
                        this.setFieldError([this.departureDate], "validatorInvalidState", this.arrivalDate, i18n_MEE.form_home.error);
                    } else {
                        this.setFieldError([this.departureDate], "validatorInvalidState", this.arrivalDate, i18n.b2b.error);
                    }
                    return false;
                }
            } else { // disable B2B inputs if B2B checkbox is not activated
                this.proReserverId.attr("disabled", "true");
                this.proReserverContract.attr("disabled", "true");
                this.showProAcc.attr("disabled", "true");
            }
        }
        // Specific PULLMAN
        else if (this.origin.siteCode === "PUL" && this.proReserverId.length && this.proReserverId.val() != "" && this.proReserverContract.length && this.proReserverContract.val() != "") {
            if (this.arrivalDate.val() === "") {
                this.setFieldError([this.arrivalDate], "validatorInvalidState", this.arrivalDate, i18n.b2b.error);
                return false;
            } else if (this.departureDate.val() === "") {
                this.setFieldError([this.departureDate], "validatorInvalidState", this.arrivalDate, i18n.b2b.error);
                return false;
            }
        }

        // Check children age
        var selector = "select[id*='search-roomCriteria']:visible";

        if (jQuery(".tChildrensAges").find(selector).length) {
            var _this = this,
                valid = true;

            jQuery(".tChildrensAges")
                .find(selector)
                .each(function() {
                    var item = jQuery(this),
                        value = item.find('option:selected').val();

                    if (value == "") {
                        _this.setFieldError([item], "validatorInvalidState", item, i18n.childrenage.error);
                        valid = false;
                    }
                });

            if (!valid) return false;
        }


        // carte fid + date
        // disabled fake & off rooms information
        if (this.fakeAdult) {
            this.fakeAdult.attr("disabled", "true");
        }
        if (this.fakeChild) {
            this.fakeChild.attr("disabled", "true");
        }
        if (this.tmplRooms) {
            this.tmplRooms.find(".off select").attr("disabled", "true");
        }
        // disabled brands inputs
        if (this.listBrands) {
            this.listBrands.attr("disabled", "true");
        }

        // For page 30days ADG
        if (this.isAdagioLog()) {
            if(jQuery("input[name='identification.reserverType']:checked").length >= 1) {
                jQuery("input[name='identification.reserverType']:not(:checked)").each(function() {
                    var parentElement = jQuery(this).closest("fieldset");
                    jQuery("input", parentElement).prop("disabled", true);
                });
            }

            var agencesContract     = jQuery("#identification-businessTravel-contrat");
            var agencesTarif        = jQuery("#identification-businessTravel-tarif");

            //vous avez un contrat
            if(!agencesContract.is(':checked')) {
                if(this.proReserverContract.val() === this.proReserverContract[0].title) {
                    this.proReserverContract.val("");
                }
            }

            //Tarif négocié de votre client
            if(!agencesTarif.is(':checked')){
                if(this.proAccountId.val() === this.proAccountId[0].title && this.proAccountContract.val() === this.proReserverContract[0].title){
                    this.proAccountId.val("");
                    this.proAccountContract.val("");
                }
            }
        }

        // update currency value in input field
        if (jQuery("#selectCurrency").length) {
            this.$currentForm.find("#search-currency-code").val(jQuery("#selectCurrency").val());
        } else {
            this.$currentForm.find("#search-currency-code").attr("disabled", true);
        }

        var destType = document.querySelector("input[name='search.destination.type']");
        if (destType && destType.value == "hotel") {
            var ridHotel = document.querySelector("input[name='search.destination.code']").value;
            if (this.destination.length == 0) {
                this.destination = jQuery("[name='search.destination']");
            }
            this.destination.val(ridHotel);
        }

        /* Meetings Control */
        if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
            // Remove from submit uneeded elements
            jQuery.each([this.getCal().meetingRoom, this.getCal().bedroom], function (index, cal) {
                if (cal) {
                    cal.$iptDateIn.prop("disabled", true);

                    cal.$iptDateOut.prop("disabled", true);
                    cal.$iptDayOut.prop("disabled", true);
                    cal.$iptMonthOut.prop("disabled", true);
                    cal.$iptYearOut.prop("disabled", true);
                }
            });

            if (!this.showProAcc.eq(0).prop("checked") && this.showProAcc.eq(0).is(":visible")) {
                isMarq = false;
                if (!this.proReserverId.is(":visible")) {
                    this.proReserverId.prop("disabled", true);
                }
                if (!this.proReserverContract.is(":visible")) {
                    this.proReserverContract.prop("disabled", true);
                }

                if ((this.proReserverId.is(":visible") && (this.proReserverId.val() === '' || this.proReserverId.val() === this.proReserverId[0].title)) || (this.proReserverContract.is(":visible") && (this.proReserverContract.val() === '' || this.proReserverContract.val() === this.proReserverContract[0].title))) {
                    this.setFieldError([this.proReserverId, this.proReserverContract], "validatorInvalidState", this.proReserverId, i18n_MEE.form_home.error);
                    return false;
                }
            } else {
                this.proReserverId.prop("disabled", true);
                this.proReserverContract.prop("disabled", true);
                this.showProAcc.prop("disabled", true);
            }
        }

        // execute ajax request
        if (ajaxRequest.retry != this.$currentForm.attr("action")) {
            this.startSubmitInProgressEffect();
        }

        if (isB2B) {
            this.$currentForm.attr("action", "https://all.accor.com/identification/identify.action?&lang=" + this.lang);
            this.defaultPostSubmit = true;
            this.$currentForm.submit();

        } else {
            
            /* History + Favorites */
            if (!this.$currentForm.hasClass("erm__form")){
                SearchHistory.create(this.$currentForm);
            }
            
            ajaxRequest._executeByForm(this.idEngine,
                "errorMessage",
                "validatorInvalidState",
                this.givenName + ".answerBooking(errors,response)"
            );
        }

        return false;
    },
    answerBooking: function (errors, json) {
        this.stopSubmitInProgressEffect();
        if (errors && errors.length) {

            if (jQuery(".booking-engine-content").length){
              jQuery(".booking-engine-content").scrollTop(0);
            }

            // [ERM]
            this.ERM.triggerBookingEngineCatchAnswer(errors, json);


            ajaxRequest.showErrors(errors, "errorMessage", this.idEngine);
            if ((this.givenName == "advBookingEngine" && this.origin.subSiteCode == 'MEE') ||
                (this.givenName == "BookingEngineInstance" && this.origin.subSiteCode == 'BIZ')) {
                jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top - 50},1000);
            }

            //enabled fake & off rooms information
            if (this.fakeAdult) {
                this.fakeAdult.attr("disabled", false);
            }
            if (this.fakeChild) {
                this.fakeChild.attr("disabled", false);
            }
            if (this.tmplRooms) {
                this.tmplRooms.find(".off select").attr("disabled", false);
            }
            if (this.proReserverId) {
                this.proReserverId.attr("disabled", false);
            }
            if (this.proReserverContract) {
                this.proReserverContract.attr("disabled", false);
            }
            if (this.showProAcc) {
                this.showProAcc.attr("disabled", false);
            }

            if(this.isAdagioLog())
            {
                jQuery(".enginepro input[type='checkbox']").prop("disabled", false);
                jQuery(".enginepro input[type='radio']").prop("disabled", false);
                jQuery(".enginepro input[type='text']").each(function(){
                    if(jQuery(this).parents().hasClass('off'))
                    {
                        jQuery(this).prop("disabled", true);
                    }

                })
            }
            if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
                ajaxRequest.showErrorFields(json.fieldErrors, "validatorInvalidState", this.idEngine);
                if (json.actionErrors.length && jQuery(".modal-btnSubmit")) {meetingsUtils._unSetLoadingButton(".modal-btnSubmit");}
                jQuery("#DisplayMeetingRoom input, #DisplayBedroom input").prop("disabled", false);

                if (jQuery(".tMeetingRoomArrivalDate").val() != "") {
                    jQuery(".tMeetingRoomArrivalDate, .tMeetingRoomDepartureDate").prop("disabled", false);
                } else {
                    jQuery(".tMeetingRoomArrivalDate").prop("disabled", false);
                }

                if (jQuery(".tBedroomArrivalDate").val() != "") {
                    jQuery(".tBedroomArrivalDate, .tBedroomDepartureDate").prop("disabled", false);
                } else {
                    jQuery(".tBedroomArrivalDate").prop("disabled", false);
                }
            }

            if(this.isAdagioLog())
            {
                jQuery(".tDisabledchBox").prop("disabled",true);
            }

            if (this.origin.subSiteCode === "BIZ") {
                if (this.proReserverId.val() === '') {this.proReserverId.val(this.proReserverId[0].title);}
                if (this.proReserverContract.val() === '') {this.proReserverContract.val(this.proReserverContract[0].title);}
                if (this.proReserverType.val() === '') {this.proReserverType.val("SC");}
                ajaxRequest.showErrorFields(json.fieldErrors, "validatorInvalidState", this.idEngine);

            } else if ((this.origin.subSiteCode === "TRA") || ((jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content")) != -1))) {
                if(json.fieldErrors != null || json.actionErrors != null) {
                    jQuery('html,body').animate({scrollTop: jQuery("#"+this.idEngine).offset().top},1000);
                    if (typeof accorhotelsUtils  !== "undefined") {
                        accorhotelsUtils._unSetLoadingButton(".modal-btnSubmit");
                    }
                }
                if (this.proReserverId.val() === '') {this.proReserverId.val(this.proReserverId[0].title);}
                if (this.proAccountId.val() === '') {this.proAccountId.val(this.proAccountId[0].title);}
                if (this.proAccountContract.val() === '') {this.proAccountContract.val(this.proAccountContract[0].title);}
                if (!utils.isEmpty(json.fieldErrors)) {ajaxRequest.showErrorFields(json.fieldErrors, "validatorInvalidState", this.idEngine);}
            }

            if(typeof proReserverError != "undefined"){
              if (jQuery.isFunction(jQuery("#pro").prop) && proReserverError == true) {
                jQuery(".reserverId, .reserverContract").addClass("validatorInvalidState");
              }
            }
        }
    },

    //clean disabled
    cleanDisabled: function () {
        this.$currentForm.find(':disabled').removeAttr('disabled');
    },

    //Demarrage de l'effet "loader" lors de l'appel Ajax
    startSubmitInProgressEffect: function () {
        this.btnSubmit.wrap('<div class="submitInProgress" />');
        var btnSubmitWidth = this.btnSubmit.width();
        var loaderWidth = 16;
        var loaderMarginLeft = (btnSubmitWidth / 2) - (loaderWidth / 2);
        this.btnSubmit.prepend('<div class="loader" style="margin-left:' + loaderMarginLeft + 'px"><div></div><div></div><div></div><div></div></div>');

        if(this.ERM.extensibleRoomEnabled) {
          // TRIGGER LORS DE LA SOUMISSION DU FORM
          this.$currentForm.trigger('BookingEngine:startSubmitInProgressEffect');
        }

    },

    //Arret de l'effet "loader" lors du retour Ajax
    stopSubmitInProgressEffect: function () {
        this.btnSubmit.find('.loader').remove();
        this.btnSubmit.parent().replaceWith(this.btnSubmit);

        if(this.ERM.extensibleRoomEnabled) {
          // TRIGGER LORS DE LA SOUMISSION DU FORM
          this.$currentForm.trigger('BookingEngine:stopSubmitInProgressEffect');
        }
    },

    //APAC & subamerica : rewrite countries
    rewriteCountryCity: function () {
        var countrySelect = this.country;
        var citySelect = this.city;

        var index = 1;
        if (countrySelect.val()) {
            citySelect.html("");
            citySelect.append("<option value=''>" + selectCity + "</option>");
            if (countryCity[countrySelect.val()].cities.length) {
                var j;
                for (j = 0; j < countryCity[countrySelect.val()].cities.length; j++) {
                    var city = countryCity[countrySelect.val()].cities[j];
                    citySelect.append("<option value=\"" + city + "\">" + city + "</option>");
                    index++;
                }

            } else {
                citySelect.append("<option value=''>" + selectNo + "</option>");
            }

        } else {
            citySelect.html("");
            citySelect.append("<option value=''>" + selectCity + "</option>");
            countrySelect.append("<option value=''>" + selectCountry + "</option>");
            jQuery.each(countryCity, function (i) {
                countrySelect.append("<option value=\"" + i + "\">" + i + "</option>");
            });
        }
    },

    //APAC & subamerica : update search destination field
    updateField: function (fieldToUpdate, countriesSelect, citiesSelect) {
        if (this.destination && this.country && this.city) {
            if (this.country.val() != '') {
                this.destination.val(this.country.val());
            }
            if (this.city.val() != '') {
                this.destination.val(this.city.val() + ', ' + this.country.val());
            }
            if (this.geoType) {
                this.geoType.val('');
            }
            if (this.geoCode) {
                this.geoCode.val('');
            }
        }
    },

    deserializeFormDatas: function ($formObj) {
        var formElements = typeof $formObj.attr('id') !== "undefined" ? document.getElementById($formObj.attr('id')).elements : 0;
        if (utils.getUrlParameter("filter.brands") != "ALL" && utils.getUrlParameter("filter.brands") != "") {
            this.implementBrands(utils.getUrlParameter("filter.brands"));
        }
        if (utils.getUrlParameter("identification.accountId") && utils.getUrlParameter("identification.accountContract")) {
            jQuery('input[name="identification.account"]').attr("checked", true);
            jQuery("div.engineproDetails").addClass("on").removeClass("off");
            jQuery('.numContrat').find('.text').removeClass('off');
            var reserver = jQuery('input[name="identification.reserver"]');
            if (this.searchType != 1) {
               // numContrat.hideField(reserver); //fonction de adv-search tra
            }
        }
        if ((utils.getUrlParameter("identification.reserverContract")) && !(jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content") != -1))) {
            jQuery('input[name="identification.reserver"]').attr("checked", true);
            this.proReserverType.attr("checked", true);
            jQuery('.numContrat').find('.text').removeClass('off');
            jQuery("div.engineproDetails").addClass("on").removeClass("off");
            var account = jQuery('input[name="identification.account"]');
            if (this.searchType != 1) {numContrat.hideField(account);}
        }
        if (utils.getUrlParameter("search.dateIn") === "" && utils.getUrlParameter("search.dayIn") != "" && utils.getUrlParameter("search.monthIn") != "" && utils.getUrlParameter("search.yearIn") != "") {

            var dateIn = new Date(utils.getUrlParameter("search.yearIn"), utils.getUrlParameter("search.monthIn") - 1, utils.getUrlParameter("search.dayIn"), 12, 0, 0);
            this.arrivalDate.val(utils.printDate(dateIn, i18n.calendar.displayDateFormat));

            if (utils.getUrlParameter("search.nightNb")) {
                var dateOut = new Date();
                dateOut.setTime(dateIn.getTime() + 3600 * 24 * 1000 * utils.getUrlParameter("search.nightNb"));
                this.departureDay.val(dateOut.getDate());
                this.departureMonth.val(dateOut.getMonth() + 1);
                this.departureYear.val(dateOut.getFullYear());
                this.departureDate.val(utils.printDate(dateOut, i18n.calendar.displayDateFormat));
            }
        }
        if (utils.getUrlParameter("search.dateOut") === "" && utils.getUrlParameter("search.dayOut") != "" && utils.getUrlParameter("search.monthOut") != "" && utils.getUrlParameter("search.yearOut") != "") {

            var dateOut = new Date(utils.getUrlParameter("search.yearOut"), utils.getUrlParameter("search.monthOut") - 1, utils.getUrlParameter("search.dayOut"), 12, 0, 0);
            this.departureDate.val(utils.printDate(dateOut, i18n.calendar.displayDateFormat));
        }

        var i;
        for (i = 0; i < formElements.length; i++) {
            var formElement = formElements[i];

            if (formElement.name && utils.getUrlParameter(formElement.name) != "" && formElement.type != "checkbox") {
                if (formElement.type == "text" || formElement.type == "textarea" || formElement.type == "hidden") {
                    formElement.value = utils.decode(utils.getUrlParameter(formElement.name));
                } else if (formElement.type == "radio" && formElement.value == utils.getUrlParameter(formElement.name)) {
                    formElement.checked = true;
                } else if (formElement.type == "select-one") {

                    if (typeof document.body.style.maxHeight === "undefined" && formElement.name == "filter.forkPrice.bound") {//if IE6
                        saveElem = formElement;
                        saveValue = utils.decode(utils.getUrlParameter(formElement.name));
                        this.HP = true;
                    }

                    formElement.value = utils.decode(utils.getUrlParameter(formElement.name));
                }

            } else {
                if (formElement.type == "checkbox" && formElement.name) {
                    if (jQuery.inArray(formElement.value, utils.getMultipleUrlParameter(formElement.name)) != -1) {
                        formElement.checked = true;
                    }
                }
            }
        }

        /** Traitement dans le cas ou l'on se trouve sur la page de recherche avancee */
        if (jQuery("body#advanced-search, div#advanced-search, body#advanced-searched-tourism, #advanced-booking").length) {
            try {
                var fakeRoomValue = utils.getUrlParameter(this.fakeRoom.attr('name'));
                if (fakeRoomValue == '') {
                    if (this.data.roomsCriteria != null && this.data.roomsCriteria.length > 0) {
                        fakeRoomValue = this.data.roomsCriteria.length;
                    } else {
                        fakeRoomValue = this.data.bookingEngineRules.selectedRoomOccupancy.quantity;
                    }
                }

                this.fakeRoom.val(fakeRoomValue);
                this.fakeRoom.change();
                this.rewriteChildInfoFromDeserialization();

            } catch (e) { // pour IE6
                setTimeout(function () {
                    this.givenName + ".fakeRoom.val(utils.getUrlParameter(" + this.givenName + ".fakeRoom.attr('name')));" + this.givenName + ".fakeRoom.change();" + this.givenName + ".rewriteChildInfoFromDeserialization();";
                }, 100);

                if (this.HP) {setTimeout(function () {"utils.getRateIe6(saveElem, saveValue);";}, 100);}
            }
            // For Meetings
            if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
                var queryBedroom = utils.getUrlParameter("bedroom"), queryMeetingRoom = utils.getUrlParameter("meetingRoom");
                if (queryBedroom || utils.getUrlParameter("event.bedroom.bedroomNb")) {
                    if (queryBedroom) {
                        //this.displayFormCalendar(queryBedroom, "DisplayBedroom", "bedroom");
                    } else {
                        jQuery("#DisplayBedroom input[name='bedroom']").eq(1).click();
                        jQuery("#DisplayBedroom").next().show();
                    }

                    if ((!queryMeetingRoom.length || queryMeetingRoom === "NO") && !utils.getUrlParameter("event.meetingRoom.dayNb").length) {
                        jQuery("#DisplayMeetingRoom input[name=meetingRoom]").eq(1).click();
                        jQuery(".blockMeetingRoom .formBox").hide();
                    }
                } else if (queryMeetingRoom) {
                    //this.displayFormCalendar(queryMeetingRoom, "DisplayMeetingRoom", "meetingRoom");
                }

                if (utils.getUrlParameter("code_chaine").length && utils.getUrlParameter("code_chaine") != "ALL") {
                    this.implementBrands(utils.getUrlParameter("code_chaine"));
                }

                if (utils.getUrlParameter("meetingPromotionCode").length) {
                    jQuery("input[name='event.preferredCode.code']").val(utils.getUrlParameter("meetingPromotionCode"));
                }

                this.initCalendarMeetingsWithQuery("meetingRoom", "nb_nuit", "jour_arrivee", "mois_arrivee", "annee_arrivee", this.data.bookingEngineRules.meetingsRules.maxMeetingRoomStay);
                this.initCalendarMeetingsWithQuery("bedroom", "event.bedroom.nightNb", "event.bedroom.dayIn", "event.bedroom.monthIn", "event.bedroom.yearIn", this.data.bookingEngineRules.maxDateResa);
                this.initCalendarMeetingsWithQuery("meetingRoom", "event.meetingRoom.dayNb", "event.meetingRoom.dayIn", "event.meetingRoom.monthIn", "event.meetingRoom.yearIn", this.data.bookingEngineRules.meetingsRules.maxMeetingRoomStay);

                if (utils.getUrlParameter("identification.reserverType")) {
                    this.identificationPro(utils.getUrlParameter("identification.reserverType"));
                }
            }
            if (jQuery.inArray("LEI", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
                advBookingEngineLeisure.totalRoomsCalc();
            }
        }
    },

    displayFormCalendar: function (queryElement, idBlock, calendarSelected) {
        if (queryElement === "YES" || queryElement === "on") {
            jQuery("#" + idBlock + " input[name=" + calendarSelected + "]").eq(1).click();
            jQuery("#" + idBlock).next().show();
        } else {
            jQuery("#" + idBlock + " input[name=" + calendarSelected + "]").eq(0).click();
            jQuery("#" + idBlock).next().hide();
        }
    },

    initCalendarMeetingsWithQuery: function (elementSelected, nbElement, queryDayIn, queryMonthIn, queryYearIn, maxNbElement) {
        var dayIn = utils.getUrlParameter(queryDayIn), monthIn = utils.getUrlParameter(queryMonthIn), yearIn = utils.getUrlParameter(queryYearIn), nbElement = utils.getUrlParameter(nbElement);

        if (dayIn && monthIn && yearIn) {
            var dateIn = new Date(yearIn, monthIn - 1, dayIn, 12, 0, 0);
            jQuery('[name="event.' + elementSelected + '.dayIn"]').val(dayIn);
            jQuery('[name="event.' + elementSelected + '.monthIn"]').val(monthIn);
            jQuery('[name="event.' + elementSelected + '.yearIn"]').val(yearIn);
            jQuery('[name="event.' + elementSelected + '.dateIn"]').val(utils.printDate(dateIn, i18n.calendar.displayDateFormat));

            var nb = nbElement;

         if ((elementSelected === "meetingRoom" || elementSelected === "bedroom") && nb == "") {
          nb = 1;
         }

            if (nb) {
                if (nb > maxNbElement) {
                    nb = maxNbElement;
                }
                if (elementSelected === "meetingRoom") {

                    nb = nb - 1;

                }

                var dateOut = new Date();
                dateOut.setTime(dateIn.getTime() + 3600 * 24 * 1000 * nb);
                jQuery('[name="event.' + elementSelected + '.dayOut"]').val(dateOut.getDate());
                jQuery('[name="event.' + elementSelected + '.monthOut"]').val(dateOut.getMonth() + 1);
                jQuery('[name="event.' + elementSelected + '.yearOut"]').val(dateOut.getFullYear());
                jQuery('[name="event.' + elementSelected + '.dateOut"]').val(utils.printDate(dateOut, i18n.calendar.displayDateFormat)).prop('disabled', false);
                jQuery('[name="event.' + elementSelected + '.nightNb"]').val(nb);
                jQuery('[name="event.' + elementSelected + '.dayNb"]').val(nb);
            }
        }
    },

    rewriteChildInfoFromDeserialization: function () {
        this.tmplRooms.find(".roomDetails .roomResidentType:not('.tChildrensAges') select").each(function (i, select) {
            var $sel = jQuery(select);
            if (utils.getUrlParameter($sel.attr('name')) != "") {
                $sel.val(utils.decode(utils.getUrlParameter($sel.attr('name'))));
                if ($sel.hasClass('tChildren')) {
                    $sel.change();
                }
            }
        });
        this.tmplRooms.find(".roomDetails .tChildrensAges:not('.off') .childrensAge:not('.off')  select").each(function (i, select) {
            var $sel = jQuery(select);
            if (utils.getUrlParameter($sel.attr('name')) != "") {
                $sel.val(utils.decode(utils.getUrlParameter($sel.attr('name'))));
            }
        });
    },

    initBookingEngineToggler: function () {
        /* Initialisation de l'etat ferme du div */
        var toggler = false;
        var $roomOptions = this.$currentForm.find(".roomsOptions");
        /* Ecouteur du lien plus de critere */
        this.btnCriteria.unbind("click").bind("click", {
            _this : this
        }, function (e) {
            if (jQuery(this).parent().hasClass('undeploy')) {
                toggler = true;
            }
            var _this = e.data._this;
            if (toggler == true) {
                $roomOptions.slideUp("slow", function () {
                    jQuery(this).addClass("off").removeClass("on");
                    /* Put back the good wording in data if not already in there */
                    jQuery("#more-criteria .lnk-moreoptions").text(jQuery("#more-criteria .lnk-moreoptions").data("more-criteria"));
                    jQuery("#more-criteria .lnk-moreoptions").attr("aria-expanded", false);
                    jQuery(".roomsOptions").attr("aria-hidden", true);
                    toggler = false;
                });
                /* Gestion du changement de la puce +/- */
                jQuery(this).parent().addClass("deploy").removeClass("undeploy");
                return false;
            } else {
                $roomOptions.slideDown("slow", function () {
                    jQuery(this).addClass("on").removeClass("off");
                    /* Put the Close Criteria wording when container opened */
                    jQuery("#more-criteria .lnk-moreoptions").data("more-criteria", jQuery("#more-criteria .lnk-moreoptions").text());
                    jQuery("#more-criteria .lnk-moreoptions").attr("aria-expanded", true);
                    jQuery(".roomsOptions").attr("aria-hidden", false);
                    jQuery("#more-criteria .lnk-moreoptions").text(jQuery("#more-criteria .lnk-moreoptions").data("less-criteria"));
                    toggler = true;
                });
                /* Gestion du changement de la puce +/- */
                jQuery(this).parent().addClass("undeploy").removeClass("deploy");
                return false;
            }
        });
    },

    activateListeners: function() {
        var me = this;

        /* Ecouteurs du champs destination */
        me.destination.bind('focus click', function(e) {
            //if(me.mainlandMode == true) {   //decommenter pour desactiver picklist international
            me.destinationListPick.slideDown("slow", function () {
                jQuery(this).addClass("on").removeClass("off");
            });
            return false;
            //}   //decommenter pour desactiver picklist international
        });

        me.destination.bind('keyup', function(e) {
            me.destinationListPick.slideUp("slow", function () {
                jQuery(this).addClass("off").removeClass("on");
            });
        });
        me.destination.bind('blur', function(e) {
            //if(me.mainlandMode == true) {   //decommenter pour desactiver picklist international
            if(!me.mouseOnListPick) {
                me.destinationListPick.slideUp("slow", function () {
                    jQuery(this).addClass("off").removeClass("on");
                });
            }
            return false;
            //}   //decommenter pour desactiver picklist international
        });

        me.destinationListPick.bind('mouseenter', function(e) {
            me.mouseOnListPick = true;
            return false;
        }).bind('mouseleave', function(e) {
            me.mouseOnListPick = false;
            jQuery(this).slideUp("slow", function () {
                jQuery(this).addClass("off").removeClass("on");
            });
            me.destination.blur();
            return false;
        });

        me.destinationMode.bind('change', function(e) {
            var modeValue = jQuery(this).val();

            //decommenter pour desactiver picklist international
            /*
             if(modeValue == 0) {
             me.mainlandMode = true;
             me.hasAutoCompletion = false;
             me.autoComplete.unload();
             me.activateListeners(); //re-activation des listeners a cause de la fonction unautocomplete() qui supprime tout les evenements
             } else {
             me.mainlandMode = false;
             me.hasAutoCompletion = true;
             me.autoComplete = new autoCompletion(me.idEngine, "tSearchDestination", me.siteCode);
             }
             */
            //commenter pour desactiver picklist international
            me.mainlandMode = (modeValue == 0) ? true : false ;
            me.hasAutoCompletion = false;
            me._buildDestinationListPick();
            me.activateListeners(); //re-activation des listeners
        });

        //Ecouteurs de liens
        jQuery(".li-inline-menu").bind('click', function(e) {
            var liInlineMenuIdSelected = jQuery(this).attr('id').replace("menu-", "");
            jQuery(".li-inline-menu").each(function() {
                var liInlineMenuId = jQuery(this).attr('id').replace("menu-", "");
                jQuery("#content-" + liInlineMenuId).addClass("off").removeClass("on");
                jQuery(this).removeClass("selected");
            });
            jQuery("#content-" + liInlineMenuIdSelected).addClass("on").removeClass("off");
            jQuery(this).addClass("selected");
            return false;
        });

        jQuery(".link-city").bind('click', function(e) {
            var geoZone = jQuery(this).attr('id').split('_');
            if(geoZone[1] != "" && geoZone[0] != "") {
                me.destination.val( jQuery(this).text() );
                me.geoZoneType.val( geoZone[0] );
                me.geoZoneCode.val( geoZone[1] );
                me.mouseOnListPick = false;
                me.destinationListPick.slideUp("slow", function () {
                    jQuery(this).addClass("off").removeClass("on");
                });
                me.destination.blur();
            }
            return false;
        });
    },

    _getJsonTab: function() {
        //Recuperation du fichier JSON de destinations
        jQuery.ajaxPrefilter("script", function( options, originalOptions, jqXHR ) {
            options.cache = true;
        });
        jQuery("head").append("<script type='text/javascript' src='/scripts-v2104/booking/home-booking-china-destinations.json'></script>");

        var jsonTab = null;
        jsonTab = (this.mainlandMode) ? jsonTabDestination.Mainland : jsonTabDestination.Internationnal ;    //Recupere du fichier /scripts-v2104/booking/home-booking-china-destinations.json
        jsonTab = (this.lang == "gb") ? jsonTab.English : jsonTab.Chinese ;
        if(!jsonTab)    console.log("Les destinations n'ont pas été chargées correctement");

        return jsonTab;
    },

    _buildDestinationListPick: function() {
        if(this.destinationListPick && this.destinationListPick.length > 0) {
            var jsonTab = this._getJsonTab();
            if(jsonTab) {
                this.destinationListPick.setTemplateURL("/templates-v2104/booking/destination-list-pick.tpl");
                this.destinationListPick.setParam('lang', this.lang);
                //Nb de colonne max dans la pick list de destinations
                var nbMaxCol = 3;
                this.destinationListPick.setParam('nbMaxCol', nbMaxCol);
                this.destinationListPick.processTemplate({'jsonTab' : jsonTab});
                //Modification automatique du style en fonction du nb max de colonnes
                var widthContainer = 288;
                var minWidthCol = Math.floor(widthContainer/nbMaxCol);
                jQuery(".link-city").each(function() {
                    jQuery(this).css("width", minWidthCol+"px");
                });
            }
        }
    },

    initChinaMainlandToggler: function () {
        //Desactivation de l'autocompletion
        /*this.hasAutoCompletion = false;*/
        //Construction de la liste des destinations speciale home china
        this._buildDestinationListPick();
        //Activation des ecouteurs de champs du formulaire de reservation
        this.activateListeners();
    },

    initFidelityToggler: function(){

        var toggler = false;

        //default
        jQuery(".lnk-moreinfos").parent().removeClass("deploy").addClass("undeploy");

        jQuery(".lnk-moreinfos").bind("click",{
            _this : this
        },function(e){
            _this = this;
            e.preventDefault();

            if(toggler == false){
                jQuery(this).toggleClass("active");
                jQuery(this).parent().removeClass("deploy").addClass("undeploy");
                jQuery("#block-content-infos-card-homebooking").slideDown("slow",function(){
                    jQuery(_this).html(i18n_FS.fidelity.moreInfoText);
                    toggler = true;
                });
            }

            if(toggler == true){
                jQuery(this).removeClass("active");
                jQuery(this).parent().removeClass("undeploy").addClass("deploy");
                jQuery("#block-content-infos-card-homebooking").slideUp("slow",function(){
                    jQuery(_this).html(i18n_FS.fidelity.moreInfoText2);
                    toggler = false;
                });
            }
        });
    },

    /* Gestion d'affichage du bloc "Chambres" */
    showRoom: function (e) {
        var $evtSelect = jQuery(e);
        var $fieldset = jQuery(e).parents('fieldset');
        var $roomDetails = this.$currentForm.find(".roomsDetails");

        var isInIframe = (window.location != window.parent.location);

        if (this.fakeRoom.val() > 1 || this.fakeChild.val() > 0) {
            if (isInIframe && jQuery.browser.msie) { // Bug IE ficheHotel. La composition des chambres disparait apres le slideDown
                $roomDetails.show("slow", function () {
                    jQuery(this).addClass("on").removeClass("off");
                    jQuery(".roomsDetails .lnk-moreoptions").attr("aria-expanded", true);
                    jQuery(".roomsWrapper").slideDown();
                    if (jQuery(".roomsWrapper").parent().find("p").hasClass('deploy')) {jQuery(".roomsWrapper").parent().find("p").addClass("undeploy").removeClass("deploy");}
                });

            } else {
                $roomDetails.slideDown("slow", function () {
                	console.log("joke");
                    jQuery(this).addClass("on").removeClass("off");
                    jQuery(".roomsDetails .lnk-moreoptions").attr("aria-expanded", true);
                    if (jQuery(".roomsWrapper").parent().find("p").hasClass('deploy')) {jQuery(".roomsWrapper").parent().find("p").addClass("undeploy").removeClass("deploy");}
                    // Bug IE : La position des filtres n'est pas raffraichie. Problème de moteur de rendu IE.
                    jQuery('.tFilterEngine').removeClass('.tFilterEngine').addClass('.tFilterEngine');
                    jQuery(".roomsWrapper")
                    .attr("tabindex",-1)
                    .attr("aria-hidden",false)
                    .focus();
                });
            }

            this.fakeAdult.val(this.fakeAdult.data("initValue"));
            $fieldset.find('.adults').hide();
            $fieldset.find('.childrens').hide();

        } else {
            $roomDetails.slideUp("slow", function () {
            	jQuery(".roomsDetails .lnk-moreoptions").attr("aria-expanded", false);
                jQuery(this).addClass("off").removeClass("on");
                jQuery(".roomsWrapper")
                .removeAttr("tabindex")
                .attr("aria-hidden",true);
            });
            $fieldset.find('.adults').show();
            //keep hidden children's combo if no children policy
            if (!$fieldset.hasClass('tNoChipol')) {
                $fieldset.find('.childrens').show();
            }
        }
    },

    /* Gestion Enfants depuis les fake select */
    showChildrens: function (e) {
        if (jQuery(e).val() > 0) {
            this.$currentForm.find(".tChildrensAges").addClass("on").removeClass("off");

        } else {
            this.$currentForm.find(".tChildrensAges").addClass("off").removeClass("on");
        }
    },

    /* Gestion Enfants depuis les rooms criteria */
    showChildrensRooms: function (e) {
        if (jQuery(e).val() > 0) {
            this.$currentForm.find(".roomsDetails").find(".tChildrensAges").addClass("on").removeClass("off");

        } else {
            this.$currentForm.find(".roomsDetails").find(".tChildrensAges").addClass("off").removeClass("on");
        }
    },

    initAnalytics: function () {
        if (jQuery('#advancedBookingEngine').length > 0 && (typeof advancedBookingEngineAnalytics !='undefined') ){
            advancedBookingEngineAnalytics._initServicesVirtualClick();
            advancedBookingEngineAnalytics._initBrandsVirtualClick();
            advancedBookingEngineAnalytics._initLeisureVirtualClick();
        }
    },

    /* Return an array with instantiate Calendar */
    getCal: function () {
        return this.cal;
    },

    /* InitCalendar */
    initMeetingsCal: function (optionCal) {
        if (optionCal.maxPeriodResa && this.data.bookingEngineRules && this.data.bookingEngineRules.meetingsRules && this.data.bookingEngineRules.meetingsRules.maxMeetingRoomStay) {
            return new Calendar(this.idEngine, this.data.bookingEngineRules.meetingsRules.maxMeetingRoomStay, optionCal.maxPeriodResa, optionCal);
        } else {
            return new Calendar(this.idEngine, this.data.bookingEngineRules.meetingsRules.maxMeetingRoomStay, this.data.bookingEngineRules.maxPeriodResa, optionCal);
        }
    },


    /* InitCalendar for leisure */
    initLeisureCal: function (optionCal) {
        if (optionCal.maxPeriodResa && optionCal) {
            return new Calendar(this.idEngine, optionCal.maxDateResa, optionCal.maxPeriodResa, optionCal);
        } else {
            return new Calendar(this.idEngine, this.data.bookingEngineRules.maxDateResa, this.data.bookingEngineRules.maxDateResa, optionCal);
        }
    },

    initLeisureFields: function(leisureFields) {
        this.groupSingleNumber.val(leisureFields.defaultRoomOccupancy.singleNumber);
        this.groupDoubleNumber.val(leisureFields.defaultRoomOccupancy.doubleNumber);
        this.groupTwinNumber.val(leisureFields.defaultRoomOccupancy.twinNumber);
        this.groupTripleNumber.val(leisureFields.defaultRoomOccupancy.tripleNumber);
        this.groupTotalNumber.val(leisureFields.defaultRoomOccupancy.totalNumber);
    },

    /* Set error class and add error message */
    setFieldError: function (fields, errorClass, errorContainer, errorMessage) {
        var ancre = '';
        if(this.isAdagioLog())
        {
            jQuery.each(fields, function (index, field){
                if(jQuery(this).prop('disabled')==false)
                {   var id = jQuery(this).attr('id');
                    jQuery("#"+id).parent().addClass(errorClass);
                }
            });
        }else{
            jQuery.each(fields, function (index, field) {
                jQuery(field).parent().addClass(errorClass);
                ancre = field[0].id;
                if( field[0].name === "search.destination"){
                  ancre = "search-destination";
                }
            });
        }
        if (errorContainer.parents("form").find(".errorMessage").length) {
           errorContainer.parents("form").find(".errorMessage").show().html("<button class='ancre_goto' data-goto='"+ancre+"'>"+errorMessage+"</button>");;
        }
        if (jQuery.inArray("MEE", utils.getMetaValue("X-Accor-resaContext", "content")) != -1) {
            meetingsUtils._unSetLoadingButton(".modal-btnSubmit");
        }
        if (errorContainer.selector == "#bookingEngine input[name='search.dateIn']") {
          errorContainer.parents("form").find(".errorMessage").attr('id', 'date-error');
          errorContainer.parents("form").find(".tArrivalDate").attr('aria-describedby', 'date-error');
        } else if (errorContainer.selector == "#bookingEngine input[name='search.dateOut']") {
          errorContainer.parents("form").find(".errorMessage").attr('id', 'date-error');
          errorContainer.parents("form").find(".tDepartureDate").attr('aria-describedby', 'date-error');
        } else if (errorContainer.selector == "#bookingEngine [name='search.destination']") {
          errorContainer.parents("form").find(".errorMessage").attr('id', 'destination-error');
          errorContainer.parents("form").find("#search-destination").attr('aria-describedby', 'destination-error');
        }
        errorContainer.parents("form").find(".errorMessage").attr('tabindex', '-1');
        errorContainer.parents("form").find(".errorMessage").focus();

        jQuery(".ancre_goto").bind('click', function() {
            jQuery('#'+jQuery(this).attr('data-goto')).focus();
        });
    },
    isAdagioLog : function()
    {
        return (this.origin && this.origin.siteCode === "ADG" && this.idEngine === "30daysBookingEngine");
    },
    getactivateItemsId: function(Itemname)
    {
        var HasAttribute = false;
        jQuery("[name='"+Itemname+"']").each(function(){
            if(!jQuery(this).prop("disabled"))
            {
                HasAttribute=jQuery(this).attr('id');
            }
        });
        return HasAttribute;
    },
    isNotValidInput:function(input)
    {
        var isValid = (input.val() === '' || input.val() === input[0].title);

        return isValid;
    },
    checkErrorInput : function(inputname)
    {
        if(this.getactivateItemsId(inputname)!== false)
        {
            var CorrentInput = jQuery("#"+this.getactivateItemsId(inputname));
            if(this.isNotValidInput(CorrentInput))
            {
                this.setFieldError(CorrentInput, "validatorInvalidState", this.arrivalDate, i18n.b2b.error);
                return false;
            }else
            {
                return true;
            }
        }
    }
};

/** < /scripts-v2104/booking/common/booking-engine.js **/
