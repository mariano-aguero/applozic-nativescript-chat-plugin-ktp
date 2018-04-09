import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class Common extends Observable {
  public message: string;

  constructor() {
    super();
    //this.message = Utils.SUCCESS_MSG();
  }

  public login(alUser: any, successCallback: any, errorCallback: any) {
    
  }

  public registerForPushNotification(successCallback : any, errorCallback : any){

  }

  public isLoggedIn(successCallback : any, errorCallback : any){

  }

  public launchChat() {

  }

  public launchChatWithUserId(userId: any) {

  }

  public launchChatWithGroupId(groupId: number, successCallback : any , errorCallback : any) {
    
  }

  public refreshToken(token: any){

  }


  public proccessNotification(data: any){
  }


  public logout(successCallback: any, errorCallback: any) {
    
  }

  public showAllRegisteredUsers(showAll: boolean) {

  }  


}

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `Your plugin is working on ${app.android ? 'Android' : 'iOS'}.`;

    setTimeout(() => {
      dialogs.alert(`${msg} For real. It's really working :)`).then(() => console.log(`Dialog closed.`));
    }, 2000);

    return msg;
  }
}
