var bookingEngine = {

  jsonSC: null,

  paramsBookingEngine: {
    pgeCal: null,
    defaultDate: null,
    firstArrivalDate: null,
    lastArrivalDate: null,
    minStay: 1,
    maxStay: 23,
    lastDepartureDate: null,
    earlyBookingCondition: 0,
    controls: {
      carte_fid: 0
    }
  },

  windowWidth: 0,
  idForm: null,

  init: function(id) {
    var citiesSelect = jQuery('select.tSearchDestination.tCities'),
      countriesSelect = jQuery('select.tCountries'),
      hotelsSelect = jQuery('select.tHotels');
    this.citiesOptions = citiesSelect.children().detach();
    citiesSelect.append(this.citiesOptions[0]);
    this.hotelsOptions = hotelsSelect.children().detach();
    hotelsSelect.append(this.hotelsOptions[0]);
    this.idForm = id;

    this.setWindowWidth();
    if (jQuery(this).is(':checked')) {
      jQuery(this).val('YES');
      jQuery('#dates-sejour-meeting').removeClass('hidden').addClass('on checked');
      jQuery('#DisplayMeetingRoom').addClass('checked');
      if (jQuery('input[name$=bedroom]').filter(':checked').val() == 'YES')
        jQuery('#DisplayMeetingRoom').css('display', 'inline-block');
    }
    //BookingEngineInstance = new BookingEngine(id, "BookingEngineInstance", true, this.paramsBookingEngine);

    //Ajax request
    if (typeof ajaxRequest !== "undefined") {
      ajaxRequest._executeByUrl(
        "/bean/getViewBeans.action?beans=SearchCriteriaViewBean||SearchCriteriaMeetingsViewBean|OriginViewBean|CurrenciesViewBean",
        "validatorInvalidState",
        "bookingEngine.success(errors, response)"
      );
    }

    // Recovery of error codes
    jQuery(document).ajaxComplete(function(event, xhr, settings) {
      if (xhr.responseJSON) {
        jQuery.each(xhr.responseJSON.fieldErrors, function(key, el) {
          jQuery('#' + bookingEngine.idForm + ' input[name="' + key + '"]').parent().addClass('validatorInvalidState');
        });
        jQuery('body,html').animate({
          scrollTop: jQuery('#' + bookingEngine.idForm).find('.errorMessage').offset().top - 50
        }, 'slow');
      }
    });

    jQuery('#' + id + ' .tSubmit').click(function(e) {
      jQuery('body,html').animate({
        scrollTop: jQuery('#' + bookingEngine.idForm).find('.errorMessage').offset().top - 50
      }, 'slow');

    });
    bookingEngine.init_checked_fields();
  },

  /**

      this method displays the fields that have hidden, if they contain values
	 **/
  init_checked_fields: function() {
    var isTestMeetingRoom = false;
    var isTestRoom = false;
    if (jQuery("#DisplayMeetingRoom input").prop('checked') == true) {
      isTestMeetingRoom = true;
      jQuery("#DisplayMeetingRoom input").val('YES');
      jQuery('#dates-sejour-meeting').removeClass('hidden').addClass('on checked');
      jQuery('#DisplayMeetingRoom').addClass('checked');
      jQuery('#DisplayMeetingRoom').css('display', 'inline-block');
    }
    
		 if(jQuery("#DisplayRooms input").prop('checked') == true){
				jQuery(this).val('YES');
				jQuery("#DisplayRooms input").val('YES');
				jQuery('#dates-sejour').removeClass('hidden').addClass('on checked');
				jQuery('#nbrMaxRoom').removeClass('hidden').addClass('checked');
				jQuery('#DisplayRooms').addClass('checked');
				if(jQuery(' input[name$=meetingRoom]').filter(':checked').val() !='YES')
				jQuery('#DisplayRooms').css('display','block');
			  isTestRoom = true;
		 }

    if (isTestMeetingRoom || isTestRoom) {
      bookingEngine.showMoreEngine('down');
    }
  },
  validate: function(e) {

    jQuery('#' + bookingEngine.idForm + ' .validatorInvalidState').removeClass('validatorInvalidState');
    jQuery('#' + bookingEngine.idForm + ' .errorMessage').empty();


    var requiredInputs = jQuery('#' + bookingEngine.idForm + ' .required');
    var errorInputs = [];


    jQuery.each(requiredInputs, function(index, el) {
      if (!(jQuery(el).parents().hasClass('hidden')) && (jQuery(el).val() == '' || jQuery(el).val() == jQuery(el).attr('title')))
        errorInputs.push(el);
    });

    if (errorInputs.length > 0) {
      e.stopImmediatePropagation();
      jQuery('#' + bookingEngine.idForm).find('.errorMessage').show().append(i18n.b2b.error);
      jQuery('body,html').animate({
        scrollTop: jQuery('#' + bookingEngine.idForm).find('.errorMessage').offset().top - 35
      }, 'slow');
      jQuery.each(errorInputs, function(index, el) {
        console.log(jQuery(el));
        jQuery(el).parent().addClass('validatorInvalidState');
      });
    }


    jQuery('#' + bookingEngine.idForm).keyup(function(e) {
      if (e.keyCode == 13) {
        e.stopImmediatePropagation();
        jQuery('#' + id + ' .tSubmit').click();
      }
    });
  },

  success: function(errors, json) {
    if (json.viewBeans.SearchCriteriaViewBean.destination) {
      bookingEngine.showMoreEngine('down');
    }

    var self = this;

    if (errors && errors.length > 0) {
      ajaxRequest.showErrors(errors, "errorMessage", this.idEngine);

    } else {
      var watchedInputs = jQuery('#' + bookingEngine.idForm + ' input, .tSubmit span');

      watchedInputs.on('click', function() {
        self.showMoreEngine('down');

      });

      //--------------------- room number

      jQuery('.number').bind('keyup', function() {

        if (this.value != this.value.replace(/[^1-9]/g, '')) {
          this.value = this.value.replace(/[^0-9]/g, '');
        }

      });



      //Meeting rooms & Bedroom calendars
      jQuery('#BookingEngine input[name$=meetingRoom]').on('click', function() {
        if (jQuery(this).is(':checked')) {
          jQuery(this).val('YES');
          jQuery('#dates-sejour-meeting').removeClass('hidden').addClass('on checked');
          jQuery('#DisplayMeetingRoom').addClass('checked');
          if (jQuery('input[name$=bedroom]').filter(':checked').val() == 'YES')
            jQuery('#DisplayMeetingRoom').css('display', 'inline-block');
        } else {
          jQuery(this).val('NO');
          jQuery('#dates-sejour-meeting').removeClass('on checked').addClass('hidden');

          if (!jQuery('#DisplayRooms').hasClass('checked'))
            jQuery('#DisplayMeetingRoom').removeClass('checked');
          if (jQuery('input[name$=bedroom]').filter(':checked').val() == 'YES')
            jQuery('#DisplayMeetingRoom').css('display', 'block');

          CalendarMeetingsConfiguration.destroyMeetingCal(BookingEngineInstance, "meetingRoom");
          CalendarMeetingsConfiguration.destroyMeetingCal(BookingEngineInstance, "bedroom");

          var defaultMultiCalsConf = CalendarMeetingsConfiguration.buildMultiCalObj(self.jsonSC.bookingEngineRules, ["meetingRoom", "bedroom"], calsContribConfig);
          jQuery.extend(BookingEngineInstance.getCal().meetingRoom.option.personalizedCal, defaultMultiCalsConf.personalizedCal[0]);
          jQuery.extend(BookingEngineInstance.getCal().bedroom.option.personalizedCal, defaultMultiCalsConf.personalizedCal[1]);
          BookingEngineInstance.initMeetingsCal(BookingEngineInstance.getCal().meetingRoom.option);
          BookingEngineInstance.initMeetingsCal(BookingEngineInstance.getCal().bedroom.option);

        }

      });

      jQuery('#BookingEngine input[name$=bedroom]').on('click', function() {
        if (jQuery(this).is(':checked')) {
          jQuery(this).val('YES');
          jQuery('#dates-sejour').removeClass('hidden').addClass('on checked');
          jQuery('#nbrMaxRoom').removeClass('hidden').addClass('checked');
          jQuery('#DisplayRooms').addClass('checked');
          if (jQuery(' input[name$=meetingRoom]').filter(':checked').val() != 'YES')
            jQuery('#DisplayMeetingRoom').css('display', 'block');

          CalendarMeetingsConfiguration.destroyMeetingCal(BookingEngineInstance, "bedroom");
          var defaultMultiCalsConf = CalendarMeetingsConfiguration.buildMultiCalObj(self.jsonSC.bookingEngineRules, ["meetingRoom", "bedroom"], calsContribConfig);
          jQuery.extend(BookingEngineInstance.getCal().meetingRoom.option.personalizedCal, defaultMultiCalsConf.personalizedCal[1]);
          BookingEngineInstance.initMeetingsCal(BookingEngineInstance.getCal().bedroom.option);
        } else {
          jQuery(this).val('NO');
          jQuery('#BookingEngine input[name$="bedroom.bedroomNb"]').val('');
          jQuery('#dates-sejour').removeClass('on checked').addClass('hidden');
          jQuery('#nbrMaxRoom').removeClass('checked').addClass('hidden');
          jQuery('#DisplayRooms').removeClass('checked');
          if (jQuery(' input[name$=meetingRoom]').filter(':checked').val() != 'YES')
            jQuery('#DisplayMeetingRoom').css('display', 'inline-block');

          CalendarMeetingsConfiguration.destroyMeetingCal(BookingEngineInstance, "bedroom");
          var defaultMultiCalsConf = CalendarMeetingsConfiguration.buildMultiCalObj(self.jsonSC.bookingEngineRules, ["meetingRoom", "bedroom"], calsContribConfig);
          jQuery.extend(BookingEngineInstance.getCal().meetingRoom.option.personalizedCal, defaultMultiCalsConf.personalizedCal[1]);
          BookingEngineInstance.initMeetingsCal(BookingEngineInstance.getCal().bedroom.option);
        }

      });



      var meetingCal = jQuery("#dates-sejour-meeting").length == 1;
      var bedroomCal = jQuery("#dates-sejour").length == 1;




      var multiCal;

      multiCal = CalendarMeetingsConfiguration.buildMultiCalObj(json.viewBeans.SearchCriteriaViewBean.bookingEngineRules, ["meetingRoom", "bedroom"], calsContribConfig);
      /* Create booking-engine object */
      BookingEngineInstance = new BookingEngine(this.idForm, "BookingEngineInstance", true, null, 1, multiCal);




      self.jsonSC = json.viewBeans.SearchCriteriaViewBean;
      BookingEngineInstance.success(errors, json);

      //placeholder
      jQuery('#BookingEngine input').each(function() {
        if (jQuery(this).attr('title'))
          utils.clearInput.init(jQuery(this));
      });

      this.filterCityCountry('#BookingEngine .search-destination.modCity');
      this.filterCityCountry('#BookingEngine .search-destination.modCountryCity');


      jQuery("#BookingEngine .tMeetingRoomArrivalDate,#BookingEngine .tMeetingRoomDepartureDate").change(function() {
        CalendarMeetingsConfiguration.updateCal(self.jsonSC.bookingEngineRules, BookingEngineInstance, "bedroom", "meetingRoom");
      });

      jQuery("#DisplayRooms-Yes").click(function() {
        CalendarMeetingsConfiguration.updateCal(self.jsonSC.bookingEngineRules, BookingEngineInstance, "bedroom", "meetingRoom");
      });

    }
  },

  setWindowWidth: function() {
    this.windowWidth = jQuery(window).width();
  },

  showMoreEngine: function(direction) {
    var self = this;
    //show room form and fidelity form
    var defaultHeight = 80;
    var customHeight = (self.windowWidth <= 768) ? 180 : defaultHeight;

    if (direction == 'up') {
      defaultHeight = 0;
      customHeight = 0;
    }


    jQuery('.fidelity-code,#content-event,#DisplayRooms,#DisplayMeetingRoom').animate(400, function() {
      jQuery(this).removeClass('hidden').addClass('on');
      jQuery('.knowMore.off').removeClass('off').addClass('on');
      jQuery('.promoBookingEngine .wrapEngine').addClass('open');
      if (window.innerWidth < 600) {
        jQuery('.fidelity-code,#content-event,#DisplayRooms,#DisplayMeetingRoom').height('auto');
      }
    });
  },


  /**
   *  Filter country, city and hotel select dropdown
   *  @filterWrapper (string): jquery selector of selects wrapper
   */
  filterCityCountry: function(filterWrapper) {
    var filterWrapper = jQuery(filterWrapper),
      _this = this;

    if (filterWrapper.length > 0) {
      var selectCountry = filterWrapper.find('select.tCountries'),
        selectCity = filterWrapper.find('select.tCities'),
        selectHotel = filterWrapper.find('select.tHotels'),
        currentCountry = '',
        currentCity = '';

      if (selectCity.length && selectCountry.val() == "") {
        // disabled by default
        selectCity.prop('disabled', 'disabled');
      }

      if (selectCountry.val() != "") {
        currentCountry = selectCountry.val();

        selectCity.children().remove();
        selectCity.append(_this.citiesOptions);

        selectCity.find('option[data-country]:not([data-country="' + currentCountry + '"])').addClass('off').remove();
        selectCity.prop('disabled', false);
      }

      selectCountry.on('change', function() {
        currentCountry = jQuery(this).val();

        selectCity.children().remove();
        selectCity.append(_this.citiesOptions);

        selectCity.find('option.off').removeClass('off');

        if (currentCountry !== '') {
          selectCity.find('option[data-country]:not([data-country="' + currentCountry + '"])').addClass('off').remove();
          selectCity.prop('disabled', false);
        } else {
          selectCity.prop('disabled', 'disabled');
        }

        currentCity = '';
        selectCity.val('');

        if (selectHotel.length > 0) {
          selectHotel.find('option.off').removeClass('off');

          if (currentCountry !== '') {
            selectHotel.find('option[data-country]:not([data-country="' + currentCountry + '"])').addClass('off');
          } else {
            selectHotel.prop('disabled', 'disabled');
          }

          selectHotel.val('');
        }
      });

      if (selectHotel.length > 0) {

        // disabled by default
        selectHotel.prop('disabled', 'disabled');

        selectCity.on('change', function() {
          currentCity = jQuery(this).val();

          selectHotel.children().remove();
          selectHotel.append(_this.hotelsOptions);

          selectHotel.find('option.off').removeClass('off');

          if (currentCountry !== '') {
            selectHotel.find('option[data-country]:not([data-country="' + currentCountry + '"])').addClass('off').remove();
          }

          if (currentCity !== '') {
            selectHotel.find('option[data-city]:not([data-city="' + currentCity + '"])').addClass('off').remove();
            selectHotel.prop('disabled', false);
          } else {
            selectHotel.prop('disabled', 'disabled');
          }

          selectHotel.val('');

        });
      }
    }
  },

  updateDestinationWrapper: function(destinationClass) {
    var destinationWrapper = jQuery('.wrapPromoBookingEngine');

    if (destinationClass && destinationWrapper.length) {
      destinationWrapper.addClass(destinationClass);
    }

  }
};

var CalendarMeetings = {
  /**

   * Build the Calendar object and initialize the calendars of the Room and Bedroom pages
   * @param formID: Id of the form containing the schedule (s) to initialize
   * @param dayIn
   * @param monthIn
   * @param yearIn
   * @param daysNb: Clickable max number of days
   * @param classElement: Name of the container class where the calendar is located
   * @param callback: function to execute when a person selects a date (put null if there is nothing)
   * @return nothing
  **/
  _init: function(formID, dayIn, monthIn, yearIn, daysNb, classElement, callback) {
    this.formSelect = jQuery('#' + formID);
    this.daysNb = daysNb;
    this.errorMessage = this.formSelect.find('.tErrorMessage');
    this.dateIn = new Date(yearIn, monthIn, dayIn, 12, 0, 0);
    this.dayIn = dayIn;
    this.monthIn = monthIn;
    this.yearIn = yearIn;
    this.maxDateOut = (new Date);
    this.maxDateOut.setTime(this.dateIn.getTime() + (3600 * 24 * 1000 * (this.daysNb - 1)));
    this.currentDateIn = null;
    var _this = this;

    jQuery.each(this.formSelect.find(".tArrivalDate"), function(key, element) {
      var currentElementDate = jQuery(element);

      currentElementDate.datepicker({
        duration: "fast",
        showOn: 'both',
        buttonImage: '/imagerie/booking/booking-engine/picto-calendrier.gif',
        buttonImageOnly: true,
        altField: _this,
        numberOfMonths: 1,
        buttonText: i18n.calendar.arrivalAlt,
        minDate: _this.dateIn,
        maxDate: _this.maxDateOut,
        defaultDate: _this.defaultDate,
        // launch all control after datepicker close
        onClose: function(stringDate, inst) {
          jQuery(element).trigger('closeDateIn');
          _this.checkFieldStatus(inst, stringDate, currentElementDate, classElement);
        }
      });

      //bind trigger "closeDateIn"
      currentElementDate.bind('closeDateIn', function() {
        var date = currentElementDate.datepicker('getDate');

        if (date != null) {
          var inst = {
            selectedYear: date.getFullYear(),
            selectedMonth: date.getMonth(),
            selectedDay: date.getDate()
          };
          _this.dateSelected = _this.setArrivalDate(currentElementDate.val(), inst, currentElementDate, classElement);

          if (callback != null) {
            _this.currentElementDate = currentElementDate;
            eval(callback);
          }
        } else {
          _this.resetDateIn(currentElementDate, classElement);
        }
      });

      //wrapping pour le css de datepicker
      jQuery('#ui-datepicker-div').wrap('<div class="ui-datepicker-wrapper"></div>');
    });
  },

  checkFormatDate: function(date) {
    var reg = new RegExp(i18n.calendar.dateFormat, "g");
    if (reg.test(date)) {
      reg = new RegExp("%([dmY])(.)%([dmY]).%([dmY])", "g"), tabRes = reg.exec(i18n.calendar.displayDateFormat);
      var typePos1 = tabRes[1],
        typePos2 = tabRes[3],
        typePos3 = tabRes[4],
        dateSeparator = tabRes[2];

      var tabRes = date.split(dateSeparator),
        tabDate = [];
      tabDate[typePos1] = tabRes[0];
      tabDate[typePos2] = tabRes[1];
      tabDate[typePos3] = tabRes[2];

      var today = (new Date);
      if (tabDate.d >= 1 && tabDate.d <= 31 && tabDate.m >= 1 && tabDate.m <= 12 && tabDate.Y >= today.getFullYear() && tabDate.Y <= today.getFullYear() + 2) {
        return true;
      }
    }
    return false;
  },

  /**
   * Check if there are no errors when entering the date
   * @param instance: Date Object
   * @param stringDate: Date formatted
   * @param currentElementDate: Part of the DOM containing the calendar on which you are processing
   * @param classElement: Name of the container class where the calendar is located
   **/
  checkFieldStatus: function(instance, stringDate, currentElementDate, classElement) {
    if (stringDate == "") {
      this.resetDateIn(currentElementDate, classElement);
      currentElementDate.parent().removeClass('validatorInvalidState');
    } else {
      if (this.checkFormatDate(stringDate)) {
        currentElementDate.parent().removeClass('validatorInvalidState');
        this.errorMessage.hide();
      } else {
        currentElementDate.parent().addClass('validatorInvalidState');
        this.errorMessage.show().text(i18n.calendar.error);
      }
    }
  },

  /**
   * Empty hidden fields that are attached to a calendar
   * @param currentElementDate: Part of the DOM containing the calendar on which you are processing
   * @param classElement: Name of the container class where the calendar is located
   **/
  resetDateIn: function(currentElementDate, classElement) {
    currentElementDate.val("");

    var parentCurrentElement = currentElementDate.closest(classElement);
    jQuery((".tDayIn"), parentCurrentElement).val("");
    jQuery((".tMonthIn"), parentCurrentElement).val("");
    jQuery((".tYearIn"), parentCurrentElement).val("");
    this.currentDateIn = null;
  },

  /**
   * Fill in the hidden fields corresponding to the day, month and year of the date selected in the form
   * @param stringDate: Date formatted
   * @param instance: Date Object
   * @param currentElementDate: Part of the DOM containing the calendar on which you are processing
   * @param classElement: Name of the container class where the calendar is located
   * @return dateSelected: a date object corresponding to the date selected
   **/
  setArrivalDate: function(stringDate, instance, currentElementDate, classElement) {
    if (instance != null) {
      var parentCurrentElement = currentElementDate.closest(classElement);
      var dateSelected = new Date(instance.selectedYear, instance.selectedMonth, instance.selectedDay, 12, 0, 0);

      jQuery((".tDayIn"), parentCurrentElement).val(instance.selectedDay);
      jQuery((".tMonthIn"), parentCurrentElement).val(instance.selectedMonth + 1);
      jQuery((".tYearIn"), parentCurrentElement).val(instance.selectedYear);

      return dateSelected;
    } else {
      return null;
    }
  }
};

var CalendarMeetingsConfiguration = {
  optionCal: null,
  optionCalDefaultValue: null,
  masterCal: null,

  /**
   * Create a optionCal with dynamics datas
   * @param bkEngineRules         : json.viewBeans.SearchCriteriaViewBean.bkEngineRules
   * @param calsArray             : array with the input[name] of cals in the page
   * @return this.optionCal       : object with calendar(s) params
   **/
  buildMultiCalObj: function(bkEngineRules, calsArray, calsViewBeanConfig) {
    this.optionCal = {
      personalizedCal: []
    };

    jQuery(calsArray).each(function(index, cal) {
      CalendarMeetingsConfiguration.createOptionCal(bkEngineRules, cal, index, calsViewBeanConfig);
    });
    this.optionCalDefaultValue = this.optionCal;

    return this.optionCal;
  },


  /**
   * Create a optionCal with dynamics datas
   * @param bkEngineRules         : json.viewBeans.SearchCriteriaViewBean.bkEngineRules
   * @param calName               : cal name to create
   * @param index                 : index of cal to create
   * @return this.optionCal       : object with calendar(s) params
   **/
  createOptionCal: function(bkEngineRules, calName, index, calsViewBeanConfig) {
    var optionCalSpecific = {},
      calNameFormated = calName.charAt(0).toUpperCase() + calName.slice(1);

    // specific case for duration;
    if (calName === "meetingRoom") {
      optionCalSpecific.durationNb = "input[name='event.meetingRoom.dayNb']";
    } else if (calName === "bedroom") {
      optionCalSpecific.durationNb = "input[name='event.bedroom.nightNb']";
    }
    // auto complete infos;
    if (typeof calsViewBeanConfig !== "undefined") {
      if (calsViewBeanConfig.meetingRoom && calName === "meetingRoom") {
        optionCalSpecific.firstArrivalDate = new Date(calsViewBeanConfig.meetingRoom.yearIn, calsViewBeanConfig.meetingRoom.monthIn, calsViewBeanConfig.meetingRoom.dayIn);
        optionCalSpecific.lastArrivalDate = new Date(new Date(calsViewBeanConfig.meetingRoom.yearIn, calsViewBeanConfig.meetingRoom.monthIn, calsViewBeanConfig.meetingRoom.dayIn).getTime() + (calsViewBeanConfig.meetingRoom.dayNb - 1) * 3600 * 24 * 1000);
        optionCalSpecific.lastDepartureDate = new Date(new Date(calsViewBeanConfig.meetingRoom.yearIn, calsViewBeanConfig.meetingRoom.monthIn, calsViewBeanConfig.meetingRoom.dayIn).getTime() + (calsViewBeanConfig.meetingRoom.dayNb - 1) * 3600 * 24 * 1000);
      } else if (calsViewBeanConfig.bedRoom && calName == "bedroom") {
        var bedroomDateIn = new Date(calsViewBeanConfig.bedRoom.yearIn, calsViewBeanConfig.bedRoom.monthIn, calsViewBeanConfig.bedRoom.dayIn);
        optionCalSpecific.firstArrivalDate = new Date(bedroomDateIn.getTime()); // format 12:00
        optionCalSpecific.lastArrivalDate = new Date(bedroomDateIn.getTime() + ((calsViewBeanConfig.bedRoom.dayNb - 1) * 3600 * 24 * 1000) - (3600 * 1000)); // format 23:00 pour l'arrivée'
        optionCalSpecific.lastDepartureDate = new Date(new Date(calsViewBeanConfig.bedRoom.yearIn, calsViewBeanConfig.bedRoom.monthIn, calsViewBeanConfig.bedRoom.dayIn).getTime() + (calsViewBeanConfig.bedRoom.dayNb - 1) * 3600 * 24 * 1000);
        optionCalSpecific.maxPeriodResa = paramsPromoBookingEngine.maxStay <= 7 ? paramsPromoBookingEngine.maxStay : 7;
      } else if (calName === "meetingRoom") {
        optionCalSpecific.firstArrivalDate = new Date(new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), 12, 0, 0).getTime() + bkEngineRules.meetingsRules.leadTimeResaMeetings * 3600 * 24 * 1000);
        optionCalSpecific.lastDepartureDate = new Date(new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), 12, 0, 0).getTime() + (bkEngineRules.maxPeriodResa) * 3600 * 24 * 1000);
      } else if (calName === "bedroom") {
        optionCalSpecific.firstArrivalDate = new Date(new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), 12, 0, 0).getTime() + bkEngineRules.meetingsRules.leadTimeResaMeetings * 3600 * 24 * 1000);
        optionCalSpecific.lastDepartureDate = new Date(new Date((new Date).getFullYear(), (new Date).getMonth(), (new Date).getDate(), 12, 0, 0).getTime() + (bkEngineRules.maxPeriodResa) * 3600 * 24 * 1000);
      }
    }

    // common simple inputs;
    this.optionCal.personalizedCal[index] = {
      calendarName: calName,

      startDate: ".t" + calNameFormated + "ArrivalDate",
      startDay: "input[name='event." + calName + ".dayIn']",
      startMonth: "input[name='event." + calName + ".monthIn']",
      startYear: "input[name='event." + calName + ".yearIn']",

      endDate: ".t" + calNameFormated + "DepartureDate",
      endDay: "input[name='event." + calName + ".dayOut']",
      endMonth: "input[name='event." + calName + ".monthOut']",
      endYear: "input[name='event." + calName + ".yearOut']",

      minStay: bkEngineRules.meetingsRules.minStay,
      durationContent: ".block" + calNameFormated + " .tNights",
      durationTxt: ".block" + calNameFormated + " span.tDuree"
    };

    // fuse both objects
    jQuery.extend(this.optionCal.personalizedCal[index], optionCalSpecific);

    return this.optionCal;
  },

  /**
   * Update calendar interval
   * @param bkEngineRules         : json.viewBeans.SearchCriteriaViewBean.bkEngineRules
   * @param bkEngineObject        : booking engine object
   * @param calNameToUpdate       : cal name to update
   * @param calNameSetted         : cal name setted
   * @return this.optionCal       : object with calendar(s) params
   **/
  updateCal: function(bkEngineRules, bkEngineObject, calNameToUpdate, calNameSetted) {
    // Get name of the first setted cal
    if (this.masterCal == null) {
      this.masterCal = calNameSetted;
    }

    // If we have the wanted personalized cal LET's GO !!!
    if (bkEngineObject.getCal() && bkEngineObject.getCal()[calNameToUpdate] && bkEngineObject.getCal()[calNameSetted]) {
      var calToUpdate = bkEngineObject.getCal()[calNameToUpdate],
        calSetted = bkEngineObject.getCal()[calNameSetted];

      // check if cal to update dateIn is setted
      calToUpdate.$iptDateIn.val().length ? calToUpdateOldDateIn = calToUpdate.$iptDateIn.val() : calToUpdateOldDateIn = "";

      var calIndexToUpdate = null;
      /* Get index of cal to update */
      jQuery(this.optionCalDefaultValue.personalizedCal).each(function(index, cal) {
        if (cal.calendarName === calNameToUpdate) {
          calIndexToUpdate = index;
        }
      });

      if (calIndexToUpdate != null) {

        /** TOOLS IN MILLISEC ****************************************/
        var J = 3600 * 24 * 1000,
          today = (new Date);
        today = new Date(today.getFullYear(), today.getMonth(), today.getDate()).getTime();


        /** VARS *****************************************************/
        var calToUpdateDateIn,
          calToUpdateDateOut;


        var optionCalUpdate = jQuery.extend({}, this.optionCal, {
          personalizedCal: this.optionCalDefaultValue.personalizedCal[calIndexToUpdate]
        });

        if (calNameToUpdate === "bedroom") {
          // Si pas de date de salle s�lectionn�e
          if (calSetted.$iptDateIn.datepicker('getDate')) {
            var dateInSalle = calSetted.$iptDateIn.datepicker('getDate').getTime();
            // Check is the previous value of date field change
            if (calSetted.$iptDateOut.val().length && calSetted.dateIn && new Date(calSetted.dateIn.getFullYear(), calSetted.dateIn.getMonth(), calSetted.dateIn.getDate()).getTime() == dateInSalle) {
              var dateOutSalle = calSetted.$iptDateOut.datepicker('getDate').getTime();
            }

            /** Declaration dateInChambre + calToUpdateDateIn ********/
            // Interval Min
            if (((dateInSalle + bkEngineRules.meetingsRules.leadTimeDateInBedroomMinSeminDateIn * J) >= (today + bkEngineRules.meetingsRules.leadTimeResaMeetings * J))) {
              calToUpdateDateIn = dateInSalle + bkEngineRules.meetingsRules.leadTimeDateInBedroomMinSeminDateIn * J;

            } else if (((dateInSalle + bkEngineRules.meetingsRules.leadTimeDateInBedroomMinSeminDateIn * J) < (today + bkEngineRules.meetingsRules.leadTimeResaMeetings * J))) {
              calToUpdateDateIn = dateInSalle - (dateInSalle - (today + bkEngineRules.meetingsRules.leadTimeResaMeetings * J));


              // Interval Max
            } else {
              calToUpdateDateIn = dateInSalle;
            }
          }

          /** Declaration dateOutChambre + calToUpdateDateOut ********/
          // Interval Max
          if (calSetted.$iptDateOut.val().length && dateOutSalle) {
            calToUpdateDateOut = dateOutSalle;

            // Interval Min
          } else {
            calToUpdateDateOut = dateInSalle;
          }
          if (calToUpdateDateIn != undefined) {
            optionCalUpdate.personalizedCal.firstArrivalDate = new Date(new Date(calToUpdateDateIn).getFullYear(), new Date(calToUpdateDateIn).getMonth(), new Date(calToUpdateDateIn).getDate(), 12, 0, 0);
            optionCalUpdate.personalizedCal.lastArrivalDate = new Date(calToUpdateDateOut + (J / 2));
            optionCalUpdate.personalizedCal.lastDepartureDate = new Date(calToUpdateDateOut + bkEngineRules.meetingsRules.leadTimeDateOutBedroomSeminDateOut * J + (J / 2));
            optionCalUpdate.personalizedCal.maxPeriodResa = (calToUpdateDateOut - calToUpdateDateIn) + bkEngineRules.meetingsRules.leadTimeDateOutBedroomSeminDateOut;
          }
        }

        if (this.masterCal != null && this.masterCal != calNameToUpdate) {
          this.destroyMeetingCal(bkEngineObject, calNameToUpdate);
        }

        if ((jQuery("#DisplayRooms-Yes").prop("checked")) || (jQuery("#DisplayRoomsOffer-Yes").prop("checked")) || (jQuery("#DisplayAdditionalRoom-Yes").prop("checked"))) {
          bkEngineObject.initMeetingsCal(optionCalUpdate);
        }
      }
    }
  },

  /**
   * Destroy cal with a method from bkEngineObject
   * @param bkEngineObject        : booking engine object
   * @param calName               : calendar name
   **/
  destroyMeetingCal: function(bkEngineObject, calName) {


    if (bkEngineObject.getCal() && bkEngineObject.getCal()[calName]) {
      bkEngineObject.getCal()[calName].resetDateIn();
      bkEngineObject.getCal()[calName].resetDateOut();
      bkEngineObject.getCal()[calName].eraseNumberNight();
    }
    var calNameFormated = calName.charAt(0).toUpperCase() + calName.slice(1);
    if (jQuery("#" + bkEngineObject.idEngine + " .t" + calNameFormated + "ArrivalDate").hasClass("hasDatepicker")) {
      jQuery("#" + bkEngineObject.idEngine + " .t" + calNameFormated + "ArrivalDate").datepicker("destroy");
    }

    if (jQuery("#" + bkEngineObject.idEngine + " .t" + calNameFormated + "DepartureDate").hasClass("hasDatepicker")) {
      jQuery("#" + bkEngineObject.idEngine + " .t" + calNameFormated + "DepartureDate").datepicker("destroy");
    }
  },


  /**
   * Catch calendar change to update interval of other one
   * @param bkEngineRules          : booking engine object
   * @param bkEngineObject         : booking engine object
   **/
  catchCalChange: function (bkEngineRules, bkEngineObject) { }

};
jQuery(document).ready(function() {
  //Booking engine
  bookingEngine.init('BookingEngine');

});
