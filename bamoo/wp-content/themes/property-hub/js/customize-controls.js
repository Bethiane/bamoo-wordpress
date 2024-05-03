
(function() {
    wp.customize.bind('ready', function() {

        const customize = this;
        
        const headerBtn = customize.control('phb_header_widget').container.find('button');
        const headerSidebar = customize.section('sidebar-widgets-header');

        if (headerBtn.length !== 0) {
            headerBtn[0].addEventListener('click', () => {
                headerSidebar.focus();
            });
        } 
    });
})();
