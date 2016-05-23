var contactManagerApp;
(function (contactManagerApp) {
    var User = (function () {
        function User(name, avatar, bio, notes) {
            this.name = name;
            this.avatar = avatar;
            this.bio = bio;
            this.notes = notes;
        }
        return User;
    }());
    contactManagerApp.User = User;
    var Note = (function () {
        function Note(title, date) {
            this.title = title;
            this.date = date;
        }
        return Note;
    }());
    contactManagerApp.Note = Note;
})(contactManagerApp || (contactManagerApp = {}));
//# sourceMappingURL=models.js.map