"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applozic_chat_common_1 = require("./applozic-chat.common");
var app = require("tns-core-modules/application/application");
var ApplozicChat = (function (_super) {
    __extends(ApplozicChat, _super);
    function ApplozicChat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplozicChat.prototype.login = function (alUser, successCallback, errorCallback) {
        console.log("Yay, plugin updated recently 10: ");
        var user = new com.applozic.mobicomkit.api.account.user.User();
        user.setUserId(alUser.userId);
        user.setPassword(alUser.password);
        user.setApplicationId(alUser.applicationId);
        user.setDisplayName(alUser.displayName);
        user.setContactNumber(alUser.contactNumber);
        user.setAuthenticationTypeId(new java.lang.Short(alUser.authenticationTypeId));
        var User = com.applozic.mobicomkit.api.account.user.User;
        var GsonUtils = com.applozic.mobicommons.json.GsonUtils;
        var RegistrationResponse = com.applozic.mobicomkit.api.account.register.RegistrationResponse;
        var context = app.android.foregroundActivity;
        var arg;
        arg = null;
        com.applozic.mobicomkit.Applozic.init(context, alUser.applicationId);
        var listener = new com.applozic.mobicomkit.api.account.user.UserLoginTask.TaskListener({
            onSuccess: function (registrationResponse, context) {
                successCallback(registrationResponse);
                return true;
            },
            onFailure: function (response, exception) {
                if (response === 'undefined') {
                    errorCallback(exception);
                }
                else {
                    errorCallback(response);
                }
                return true;
            }
        });
        var task = new com.applozic.mobicomkit.api.account.user.UserLoginTask(user, listener, context);
        task.execute(arg);
    };
    ApplozicChat.prototype.registerForPushNotification = function (successCallback, errorCallback) {
        var context = app.android.foregroundActivity;
        var args = java.lang.Void = null;
        var listener = new com.applozic.mobicomkit.api.account.user.PushNotificationTask.TaskListener({
            onSuccess: function (response) {
                successCallback(response);
            },
            onFailure: function (response, exception) {
                if (exception === 'undefined') {
                    errorCallback(response);
                }
                else {
                    errorCallback(exception);
                }
            }
        });
        var task = new com.applozic.mobicomkit.api.account.user.PushNotificationTask(com.applozic.mobicomkit.Applozic.getInstance(context).getDeviceRegistrationId(), listener, context);
        task.execute(args);
    };
    ApplozicChat.prototype.launchChat = function () {
        var intent = new android.content.Intent(app.android.foregroundActivity, com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity.class);
        if (com.applozic.mobicomkit.ApplozicClient.getInstance(app.android.foregroundActivity).isContextBasedChat()) {
            intent.putExtra(com.applozic.mobicomkit.uiwidgets.conversation.ConversationUIService.CONTEXT_BASED_CHAT, true);
        }
        app.android.foregroundActivity.startActivity(intent);
        console.log("Yay, Called launchChat");
    };
    ApplozicChat.prototype.isLoggedIn = function (successCallback, errorCallback) {
        if (com.applozic.mobicomkit.api.account.user.MobiComUserPreference.getInstance(app.android.foregroundActivity).isLoggedIn()) {
            successCallback('true');
        }
        else {
            successCallback('false');
        }
    };
    ApplozicChat.prototype.launchChatWithUserId = function (userId) {
        var intent = new android.content.Intent(app.android.foregroundActivity, com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity.class);
        intent.putExtra("userId", userId);
        intent.putExtra("takeOrder", true);
        app.android.foregroundActivity.startActivity(intent);
    };
    ApplozicChat.prototype.launchChatWithGroupId = function (groupId, successCallback, errorCallback) {
        var args = java.lang.Void = null;
        var listener = new com.applozic.mobicomkit.uiwidgets.async.AlGroupInformationAsyncTask.GroupMemberListener({
            onSuccess: function (response, context) {
                var intent = new android.content.Intent(app.android.foregroundActivity, com.applozic.mobicomkit.uiwidgets.conversation.activity.ConversationActivity.class);
                intent.putExtra("groupId", response.getKey().intValue());
                intent.putExtra("takeOrder", true);
                app.android.foregroundActivity.startActivity(intent);
                successCallback(response);
            },
            onFailure: function (response, exception, context) {
                if (response === 'undefined' || response === null) {
                    errorCallback("Error in launching group");
                }
                else {
                    errorCallback("Error in launching group");
                }
            }
        });
        var task = new com.applozic.mobicomkit.uiwidgets.async.AlGroupInformationAsyncTask(app.android.foregroundActivity, new java.lang.Integer(groupId), listener);
        task.execute(args);
    };
    ApplozicChat.prototype.logout = function (successCallback, errorCallback) {
        var args = java.lang.Void = null;
        var listener = new com.applozic.mobicomkit.api.account.user.UserLogoutTask.TaskListener({
            onSuccess: function (context) {
                successCallback("Successfully logged out");
            },
            onFailure: function (exception) {
                errorCallback("Failed to logout");
            }
        });
        var task = new com.applozic.mobicomkit.api.account.user.UserLogoutTask(listener, app.android.foregroundActivity);
        task.execute(args);
    };
    ApplozicChat.prototype.showAllRegisteredUsers = function (showAll) {
        if (showAll) {
            com.applozic.mobicomkit.uiwidgets.ApplozicSetting.getInstance(app.android.foregroundActivity).enableRegisteredUsersContactCall();
        }
    };
    return ApplozicChat;
}(applozic_chat_common_1.Common));
exports.ApplozicChat = ApplozicChat;
//# sourceMappingURL=applozic-chat.android.js.map