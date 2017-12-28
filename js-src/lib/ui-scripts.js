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

UI.AuthArea = class {
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
                $('.auth-close').fadeIn('fast');
                $('#auth-area').animate({
                    height: window.innerHeight + 'px'
                }, 350, () => {
                    this.updating = false;
                    this.state = 'open';
                    $('.auth-content').fadeIn('fast');
                });
            }
            if (this.state === 'open') {
                this.updating = true;
                $('.auth-content').fadeOut('fast');
                $('#auth-area').animate({
                    height: '52px'
                }, 350, () => {
                    this.updating = false;
                    this.state = 'close';
                    $('.auth-close').fadeOut('fast');
                });
            }
        }
    }
};

UI.authArea = new UI.AuthArea();

$(document).ready(function() {
    /**
     * Update Sidebar 
     */
    $('.sb-toggle, .sb-close').click(function() {
        UI.sb.update();
    });
    /**
     * Update Auth Area
     */
    $('#auth-header').click(function() {
        UI.authArea.update();
    });
});