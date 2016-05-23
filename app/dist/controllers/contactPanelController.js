/// <reference path="../_all.ts" />
var contactManagerApp;
(function (contactManagerApp) {
    var ContactPanelController = (function () {
        function ContactPanelController(userService, $mdBottomSheet) {
            this.userService = userService;
            this.$mdBottomSheet = $mdBottomSheet;
            this.actions = [
                { name: 'Phone', icon: 'phone' },
                { name: 'Twitter', icon: 'twitter' },
                { name: 'Google+', icon: 'google_plus' },
                { name: 'Hangout', icon: 'hangouts' }
            ];
            this.user = userService.selectedUser;
        }
        ContactPanelController.prototype.submitContact = function (action) {
            this.$mdBottomSheet.hide(action);
        };
        ContactPanelController.$inject = ['userService', '$mdBottomSheet'];
        return ContactPanelController;
    }());
    contactManagerApp.ContactPanelController = ContactPanelController;
})(contactManagerApp || (contactManagerApp = {}));
//# sourceMappingURL=contactPanelController.js.map