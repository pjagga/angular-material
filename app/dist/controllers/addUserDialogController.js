/// <reference path="../_all.ts" />
var contactManagerApp;
(function (contactManagerApp) {
    var AddUserDialogController = (function () {
        function AddUserDialogController($mdDialog) {
            this.$mdDialog = $mdDialog;
            this.avatars = [
                'svg-3', 'svg-4', 'svg-5',
                'svg-6', 'svg-7', 'svg-8', 'svg-9', 'svg-10'
            ];
        }
        AddUserDialogController.prototype.cancel = function () {
            this.$mdDialog.cancel();
        };
        AddUserDialogController.prototype.save = function () {
            this.$mdDialog.hide(this.user);
        };
        AddUserDialogController.$inject = ['$mdDialog'];
        return AddUserDialogController;
    }());
    contactManagerApp.AddUserDialogController = AddUserDialogController;
})(contactManagerApp || (contactManagerApp = {}));
//# sourceMappingURL=addUserDialogController.js.map