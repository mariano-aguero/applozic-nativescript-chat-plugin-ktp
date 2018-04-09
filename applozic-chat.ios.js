"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var applozic_chat_common_1 = require("./applozic-chat.common");
var ApplozicChat = (function (_super) {
    __extends(ApplozicChat, _super);
    function ApplozicChat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApplozicChat.prototype.login = function (user, successCallback, errorCallback) {
        var alUser = ALUser.alloc().init();
        alUser.userId = user.userId;
        alUser.password = user.password;
        alUser.applicationId = user.applicationId;
        alUser.authenticationTypeId = user.authenticationTypeId;
        var alChatLauncher = ALChatLauncher.alloc().initWithApplicationId(user.applicationId);
        var alRegisterUserClientService = ALRegisterUserClientService.alloc().init();
        var that = this;
        alRegisterUserClientService.initWithCompletionWithCompletion(alUser, function (response, error) {
            that.defaultSettings();
            successCallback(response);
        });
    };
    ApplozicChat.prototype.registerForPushNotification = function (successCallback, errorCallback) {
    };
    ApplozicChat.prototype.refreshToken = function (token) {
        ALUserDefaultsHandler.setApnDeviceToken(token);
    };
    ApplozicChat.prototype.proccessNotification = function (data) {
        var alPushNotificationService = ALPushNotificationService.alloc().init();
        alPushNotificationService.processPushNotificationUpdateUI(data, parseInt(data.foreground));
    };
    ApplozicChat.prototype.launchChat = function () {
        var alChatLauncher = ALChatLauncher.alloc().initWithApplicationId(ALUserDefaultsHandler.getApplicationKey());
        var alPushAssist = ALPushAssist.alloc().init();
        alChatLauncher.launchChatListAndViewControllerObject("Conversations", alPushAssist.topViewController);
    };
    ApplozicChat.prototype.launchChatWithUserId = function (userId) {
        var alChatLauncher = ALChatLauncher.alloc().initWithApplicationId(ALUserDefaultsHandler.getApplicationKey());
        var alPushAssist = ALPushAssist.alloc().init();
        alChatLauncher.launchIndividualChatWithGroupIdWithDisplayNameAndViewControllerObjectAndWithText(userId, null, null, alPushAssist.topViewController, null);
    };
    ApplozicChat.prototype.launchChatWithGroupId = function (groupId, successCallback, errorCallback) {
        var alChatLauncher = ALChatLauncher.alloc().initWithApplicationId(ALUserDefaultsHandler.getApplicationKey());
        var alPushAssist = ALPushAssist.alloc().init();
        alChatLauncher.launchIndividualChatWithGroupIdWithDisplayNameAndViewControllerObjectAndWithText(null, groupId, null, alPushAssist.topViewController, null);
    };
    ApplozicChat.prototype.logout = function (successCallback, errorCallback) {
        var alRegisterUserClientService = ALRegisterUserClientService.alloc().init();
        alRegisterUserClientService.logoutWithCompletionHandler(function (response, error) {
            if (!error && response.status === "success") {
                console.log("Logout successful");
                successCallback(response);
            }
            else {
                console.log("Logout failed: " + response.response);
                successCallback(error);
            }
        });
    };
    ApplozicChat.prototype.showAllRegisteredUsers = function (showAll) {
        ALApplozicSettings.setFilterContactsStatus(showAll);
    };
    ApplozicChat.prototype.defaultSettings = function () {
        ALApplozicSettings.setStatusBarBGColor(UIColor.colorWithRedGreenBlueAlpha(66.0 / 255, 173.0 / 255, 247.0 / 255, 1));
        ALApplozicSettings.setColorForNavigation(UIColor.colorWithRedGreenBlueAlpha(66.0 / 255, 173.0 / 255, 247.0 / 255, 1));
        ALApplozicSettings.setColorForNavigationItem(UIColor.whiteColor);
        ALApplozicSettings.hideRefreshButton(false);
        ALUserDefaultsHandler.setNavigationRightButtonHidden(false);
        ALUserDefaultsHandler.setBottomTabBarHidden(false);
        ALApplozicSettings.setTitleForConversationScreen("Chats");
        ALApplozicSettings.setCustomNavRightButtonMsgVC(false);
        ALApplozicSettings.setTitleForBackButtonMsgVC("Back");
        ALApplozicSettings.setTitleForBackButtonChatVC("Back");
        ALApplozicSettings.setSendMsgTextColor(UIColor.whiteColor);
        ALApplozicSettings.setReceiveMsgTextColor(UIColor.grayColor);
        ALApplozicSettings.setColorForReceiveMessages(UIColor.colorWithRedGreenBlueAlpha(255 / 255, 255 / 255, 255 / 255, 1));
        ALApplozicSettings.setColorForSendMessages(UIColor.colorWithRedGreenBlueAlpha(66.0 / 255, 173.0 / 255, 247.0 / 255, 1));
        ALApplozicSettings.setCustomMessageBackgroundColor(UIColor.lightGrayColor);
        ALApplozicSettings.setCustomMessageFont("Helvetica");
        ALApplozicSettings.setDateColor(UIColor.colorWithRedGreenBlueAlpha(51.0 / 255, 51.0 / 255, 51.0 / 255, 0.5));
        ALApplozicSettings.setMsgDateColor(UIColor.blackColor);
        ALApplozicSettings.setAbuseWarningText("AVOID USE OF ABUSE WORDS");
        ALApplozicSettings.setMessageAbuseMode(true);
        ALApplozicSettings.setReceiverUserProfileOption(false);
        ALApplozicSettings.setMaxCompressionFactor(0.1);
        ALApplozicSettings.setMaxImageSizeForUploadInMB(3);
        ALApplozicSettings.setMultipleAttachmentMaxLimit(5);
        ALApplozicSettings.setGroupOption(true);
        ALApplozicSettings.setGroupInfoDisabled(false);
        ALApplozicSettings.setGroupInfoEditDisabled(true);
        ALApplozicSettings.setGroupExitOption(true);
        ALApplozicSettings.setGroupMemberAddOption(true);
        ALApplozicSettings.setGroupMemberRemoveOption(true);
        ALApplozicSettings.setVisibilityForNoMoreConversationMsgVC(false);
        ALApplozicSettings.setEmptyConversationText("You have no conversations yet");
        ALApplozicSettings.setVisibilityForOnlineIndicator(true);
        ALApplozicSettings.setColorForSendButton(UIColor.colorWithRedGreenBlueAlpha(66.0 / 255, 173.0 / 255, 247.0 / 255, 1));
        ALApplozicSettings.setColorForTypeMsgBackground(UIColor.clearColor);
        ALApplozicSettings.setMsgTextViewBGColor(UIColor.lightGrayColor);
        ALApplozicSettings.setPlaceHolderColor(UIColor.grayColor);
        ALApplozicSettings.setVisibilityNoConversationLabelChatVC(true);
        ALApplozicSettings.setBGColorForTypingLabel(UIColor.colorWithRedGreenBlueAlpha(242 / 255.0, 242 / 255.0, 242 / 255.0, 1));
        ALApplozicSettings.setTextColorForTypingLabel(UIColor.colorWithRedGreenBlueAlpha(51.0 / 255, 51.0 / 255, 51.0 / 255, 0.5));
        ALApplozicSettings.setColorForToastText(UIColor.blackColor);
        ALApplozicSettings.setColorForToastBackground(UIColor.grayColor);
        ALApplozicSettings.setUnreadCountLabelBGColor(UIColor.purpleColor);
        ALApplozicSettings.setCustomClassName("ALChatManager");
        ALUserDefaultsHandler.setFetchConversationPageSize(60);
        ALApplozicSettings.setMaxTextViewLines(4);
        ALUserDefaultsHandler.setDebugLogsRequire(true);
        ALApplozicSettings.setFontFace("Helvetica");
        ALApplozicSettings.replyOptionEnabled(true);
        ALUserDefaultsHandler.setGoogleMapAPIKey("AIzaSyBnWMTGs1uTFuf8fqQtsmLk-vsWM7OrIXk");
        ALApplozicSettings.setUserDeletedText("User has been deleted");
        ALApplozicSettings.setChatListTabIcon("");
        ALApplozicSettings.setChatListTabTitle("");
        ALApplozicSettings.setProfileTabTitle("");
    };
    return ApplozicChat;
}(applozic_chat_common_1.Common));
exports.ApplozicChat = ApplozicChat;
//# sourceMappingURL=applozic-chat.ios.js.map