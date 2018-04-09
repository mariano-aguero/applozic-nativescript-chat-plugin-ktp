import { Common } from './applozic-chat.common';
export declare class ApplozicChat extends Common {
    login(user: any, successCallback: any, errorCallback: any): void;
    registerForPushNotification(successCallback: any, errorCallback: any): void;
    refreshToken(token: any): void;
    proccessNotification(data: any): void;
    launchChat(): void;
    launchChatWithUserId(userId: any): void;
    launchChatWithGroupId(groupId: number, successCallback: any, errorCallback: any): void;
    logout(successCallback: any, errorCallback: any): void;
    showAllRegisteredUsers(showAll: boolean): void;
    defaultSettings(): void;
}
