/// <reference path="../_all.ts" />
var contactManagerApp;
(function (contactManagerApp) {
    var UserService = (function () {
        function UserService($q) {
            this.$q = $q;
            this.selectedUser = null;
            this.users = [
                {
                    name: 'Julia Gillard',
                    avatar: 'svg-1',
                    bio: 'I love cheese, especially airedale queso.Cheese and biscuits halloumi cauliflower cheese cottage cheese swiss boursin fondue caerphilly. Cow port-salut camembert de normandie macaroni cheese feta who moved my cheese babybel boursin. Red leicester roquefort boursin squirty cheese jarlsberg blue castello caerphilly chalk and cheese. Lancashire.',
                    notes: [
                        { title: "Pay back dinner", date: new Date("02-03-2017") },
                        { title: "Buy lily for birthday", date: new Date("03-12-2001") }
                    ]
                },
                {
                    name: 'Barack Obama',
                    avatar: 'svg-2',
                    bio: 'Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.',
                    notes: [
                        { title: "Pay back lunch", date: new Date("02-03-2015") },
                        { title: "Buy rose for birthday", date: new Date("03-12-2011") }
                    ]
                },
                {
                    name: 'David Cameron',
                    avatar: 'svg-3',
                    bio: "Raw denim pour-over readymade Etsy Pitchfork. Four dollar toast pickled locavore bitters McSweeney's blog. Try-hard art party Shoreditch selfies. Odd Future butcher VHS, disrupt pop-up Thundercats chillwave vinyl jean shorts taxidermy master cleanse letterpress Wes Anderson mustache Helvetica. Schlitz bicycle rights chillwave irony lumberhungry Kickstarter next level sriracha typewriter Intelligentsia, migas kogi heirloom tousled. Disrupt 3 wolf moon lomo four loko. Pug mlkshk fanny pack literally hoodie bespoke, put a bird on it Marfa messenger bag kogi VHS.",
                    notes: [
                        { title: "Pay back snacks", date: new Date("02-03-2025") },
                        { title: "Buy rose for birthday", date: new Date("03-12-2011") }
                    ]
                },
                {
                    name: 'Vladimir Putin',
                    avatar: 'svg-4',
                    bio: 'Scratch the furniture spit up on light gray carpet instead of adjacent linoleum so eat a plant, kill a hand pelt around the house and up and down stairs chasing phantoms run in circles, or claw drapes. Always hungry pelt around the house and up and down stairs chasing phantoms.',
                    notes: [
                        { title: "Pay back snacks", date: new Date("02-03-2025") },
                        { title: "Buy rose for birthday", date: new Date("03-12-2011") }
                    ]
                },
                {
                    name: 'Reuven Rivlin',
                    avatar: 'svg-5',
                    bio: 'Webtwo ipsum dolor sit amet, eskobo chumby doostang bebo. Bubbli greplin stypi prezi mzinga heroku wakoopa, shopify airbnb dogster dopplr gooru jumo, reddit plickers edmodo stypi zillow etsy.',
                    notes: [
                        { title: "Pay back snacks", date: new Date("02-03-2025") },
                        { title: "Buy rose for birthday", date: new Date("03-12-2011") }
                    ]
                },
                {
                    name: 'Davis Uglo',
                    avatar: 'svg-6',
                    bio: "Lebowski ipsum yeah? What do you think happens when you get rad? You turn in your library card? Get a new driver's license? Stop being awesome? Dolor sit amet, consectetur adipiscing elit praesent ac magna justo pellentesque ac lectus. You don't go out and make a living dressed like that in the middle of a weekday. Quis elit blandit fringilla a ut turpis praesent felis ligula, malesuada suscipit malesuada.",
                    notes: [
                        { title: "Pay back snacks", date: new Date("02-03-2025") },
                        { title: "Buy rose for birthday", date: new Date("03-12-2011") }
                    ]
                }
            ];
        }
        UserService.prototype.loadAllUsers = function () {
            return this.$q.when(this.users);
        };
        UserService.$inject = ['$q'];
        return UserService;
    }());
    contactManagerApp.UserService = UserService;
})(contactManagerApp || (contactManagerApp = {}));
//# sourceMappingURL=userServices.js.map