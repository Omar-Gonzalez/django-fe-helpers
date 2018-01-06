/**
 * Omar Gonzalez - 17-10-2017 - Copyright MIT
 * ES6 Sidebar-Bootsrap Source 
 */

let UI = window.UI || {};

UI.Sidebar = class {
    /**
     * SideBar Component - props:
     * - this.updating : weather the sidebar is updating state
     * - this.state : weather the sidebar is open or close
     * - this.mobileBreakPoint : grid break point for mobile devices
     * SideBar - methods:
     * - update() - close or open the side bar
     * - screenSizeEvent() - attach event listener screen width change
     * - setDesktopMode() - set destkop mode if necesary
     */
    constructor() {
        //Props
        this.updating = false;
        this.state = "close";
        this.mobileBreakPoint = 768;
        //Init methods
        this.screenSizeEvent();
    }

    update() {
        if (!this.updating) {
            if (this.state === "close") { //Open the SB
                this.updating = true;
                $("#sidebar").animate({
                    width: '85%'
                }, 350, () => {
                    //animation complete
                    $('.sb-close').fadeIn("fast");
                    $('.sidebar-content').fadeIn("fast");
                    this.updating = false;
                    this.state = "open";
                });
            }
            if (this.state === "open") { //Close the SB
                this.updating = true;
                $('.sb-close').css('display', 'none');
                $('.sidebar-content').fadeOut("fast");
                $('#sidebar').animate({
                    width: '44px'
                }, 350, () => {
                    //animation complete
                    this.updating = false;
                    this.state = "close";
                });
            }
        }
    }

    screenSizeEvent() {
        this.resize();
        $(window).on('resize', () => {
            this.resize();
        });
    }

    resize() {
        if ($(window).width() >= this.mobileBreakPoint) {
            $('.sidebar-nav').hide();
            $('#sidebar').css('width', '240px');
            $('.sb-close').css('display', 'none');
            $('.sidebar-content').css('display', 'block');
        } else {
            $('.sidebar-nav').show();
            $('#sidebar').css('width', '44px');
            $('.sb-close').css('display', 'none');
            $('.sidebar-content').css('display', 'none');
        }
    }
};

UI.sb = new UI.Sidebar();

UI.VerticalSlide = class {
    /**
     * Auth Area Component - props:
     * - this.updating : weather the auth area is updating state
     * - this.state : weather the auth area is open or close
     * Auth Area - methods:
     * - update() - close or open the side bar
     */
    constructor() {
        //Props
        this.updating = false;
        this.state = "close";
        this.mobileBreakPoint = 768;
        //Init methods
    }

    update() {
        if (!this.updating) {
            if (this.state === 'close') {
                this.updating = true;
                $('.vertical-close').fadeIn('fast');
                $('#vertical-slide').animate({
                    height: window.innerHeight + 'px'
                }, 350, () => {
                    this.updating = false;
                    this.state = 'open';
                    $('.vertical-content').fadeIn('fast');
                });
            }
            if (this.state === 'open') {
                this.updating = true;
                $('.vertical-content').fadeOut('fast');
                $('#vertical-slide').animate({
                    height: '52px'
                }, 350, () => {
                    this.updating = false;
                    this.state = 'close';
                    $('.vertical-close').fadeOut('fast');
                });
            }
        }
    }
};

UI.verticalSlide = new UI.VerticalSlide();

module.exports = UI;