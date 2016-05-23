/// <reference path="../_all.ts" />

module contactManagerApp{
 export class AddUserDialogController{
     static $inject = ['$mdDialog'];

     constructor(private $mdDialog){}

        user: CreateUser;

            avatars=[
               'svg-3', 'svg-4', 'svg-5',
                'svg-6', 'svg-7', 'svg-8', 'svg-9', 'svg-10'
            ];
         cancel(): void{
             this.$mdDialog.cancel();
         }
         save(): void{
             this.$mdDialog.hide(this.user);
         }
     }

}