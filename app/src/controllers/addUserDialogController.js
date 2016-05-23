var contactManagerApp;
(function (contactManagerApp) {
    var AddUserDialogController = (function () {
        function AddUserDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
        }
        AddUserDialogController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddUserDialogController.prototype.save = function () {
            this.$mdDialog.hide(new User("placeholder", "", "", []));
        };
        AddUserDialogController.$inject = ['$mdDialog'];
        return AddUserDialogController;
    })();
    contactManagerApp.AddUserDialogController = AddUserDialogController;
})(contactManagerApp || (contactManagerApp = {}));
//# sourceMappingURL=addUserDialogController.js.map