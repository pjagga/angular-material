var contactManagerApp;
(function (contactManagerApp) {
    var ContactPanelController = (function () {
        function ContactPanelController(userService, $mdBottomSheet) {
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.user = userService.selectedUser;
        }
        ContactPanelController.$inject = ['userService', '$mdBottomSheet'];
        return ContactPanelController;
    })();
    contactManagerApp.ContactPanelController = ContactPanelController;
})(contactManagerApp || (contactManagerApp = {}));
//# sourceMappingURL=contactPanelController.js.map