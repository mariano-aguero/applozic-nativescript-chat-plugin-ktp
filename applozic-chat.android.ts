import { Common } from './applozic-chat.common';
import * as app from 'tns-core-modules/application/application';

declare const com : any;
declare const android : any;

export class ApplozicChat extends Common {

    public login(alUser: any, successCallback: any, errorCallback: any) {
        console.log("Yay, plugin updated recently 10: ");
        let user = new com.applozic.mobicomkit.api.account.user.User();
        user.setUserId(alUser.userId);
        user.setPassword(alUser.password);
        user.setApplicationId(alUser.applicationId);
        user.setDisplayName(alUser.displayName);
        user.setContactNumber(alUser.contactNumber);
        user.setAuthenticationTypeId(new java.lang.Short(alUser.authenticationTypeId));
    
        let User = com.applozic.mobicomkit.api.account.user.User;
        let GsonUtils = com.applozic.mobicommons.json.GsonUtils;
        let RegistrationResponse = com.applozic.mobicomkit.api.account.register.RegistrationResponse;
        let context = app.android.foregroundActivity;
        let arg : java.lang.Void;
        arg = null;

        com.applozic.mobicomkit.Applozic.init(context, alUser.applicationId);

        let listener = new com.applozic.mobicomkit.api.account.user.UserLoginTask.TaskListener({
            onSuccess : function(registrationResponse : any , context : any){
                successCallback(registrationResponse);
                return true;
            },

            onFailure : function(response : any, exception : any){
                if(response === 'undefined'){
                    errorCallback(exception);
                }else{
                    errorCallback(response);
                }
                return true;
            }
        });  

        let task = new com.applozic.mobicomkit.api.account.user.UserLoginTask(user,listener,context);
        task.execute(arg);
    }

    public registerForPushNotification(successCallback, errorCallback){
        let context = app.android.foregroundActivity;
        let args = java.lang.Void = null;

        let listener = new com.applozic.mobicomkit.api.account.user.PushNotificationTask.TaskListener({
            onSuccess : function(response : any){
                successCallback(response);
            },

            onFailure : function(response : any, exception : any){
                if(exception === 'undefined'){
                errorCallback(response);
            }else{
                errorCallback(exception);
                }
            }
        });

        let task = new com.applozic.mobicomkit.api.account.user.PushNotificationTask(com.applozic.mobicomkit.Applozic.getInstance(context).getDeviceRegistrationId(),listener,context);
        task.execute(args);
    }

    public launchChat() {
        let intent = new android.content.Intent(app.android.foregroundActivity,com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity.class);
        if (com.applozic.mobicomkit.ApplozicClient.getInstance(app.android.foregroundActivity).isContextBasedChat()) {
            intent.putExtra(com.applozic.mobicomkit.uiwidgets.conversation.ConversationUIService.CONTEXT_BASED_CHAT,true);
        }
        app.android.foregroundActivity.startActivity(intent);
        console.log("Yay, Called launchChat");
    }

    public isLoggedIn(successCallback: any, errorCallback: any){
        if(com.applozic.mobicomkit.api.account.user.MobiComUserPreference.getInstance(app.android.foregroundActivity).isLoggedIn()){
            successCallback('true');
        }else{
            successCallback('false');
        }
    }

    public launchChatWithUserId(userId: any) {
        let intent = new android.content.Intent(app.android.foregroundActivity,com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity.class);
        intent.putExtra("userId", userId);
        intent.putExtra("takeOrder",true);
        app.android.foregroundActivity.startActivity(intent);
    }

    public launchChatWithGroupId(groupId: number, successCallback, errorCallback) {
       let args = java.lang.Void = null;
       let listener = new com.applozic.mobicomkit.uiwidgets.async.AlGroupInformationAsyncTask.GroupMemberListener({  
        onSuccess : function(response : any , context : any){
            let intent = new android.content.Intent(app.android.foregroundActivity,com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity.class);
            intent.putExtra("groupId", response.getKey().intValue());
            intent.putExtra("takeOrder",true);
            app.android.foregroundActivity.startActivity(intent);
            successCallback(response);
           },

           onFailure : function(response : any , exception : any, context : any){
                  if(response === 'undefined' || response === null){
                      errorCallback("Error in launching group");
                  }else{
                      errorCallback("Error in launching group");
                  }
           }
        });
       
     let task = new com.applozic.mobicomkit.uiwidgets.async.AlGroupInformationAsyncTask(app.android.foregroundActivity,new java.lang.Integer(groupId),listener);
     task.execute(args);
    }

    public logout(successCallback: any, errorCallback: any) {
        let args = java.lang.Void = null;

        let listener = new com.applozic.mobicomkit.api.account.user.UserLogoutTask.TaskListener({
            onSuccess : function(context : any){
                successCallback("Successfully logged out");
            },

            onFailure : function(exception : any){
                errorCallback("Failed to logout");
            }
        });

        let task = new com.applozic.mobicomkit.api.account.user.UserLogoutTask(listener, app.android.foregroundActivity);
        task.execute(args);
    }

    public showAllRegisteredUsers(showAll: boolean) {
        if(showAll){
            com.applozic.mobicomkit.uiwidgets.ApplozicSetting.getInstance( app.android.foregroundActivity).enableRegisteredUsersContactCall();
        }
    }

}
