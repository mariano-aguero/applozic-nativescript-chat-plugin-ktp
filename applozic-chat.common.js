"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var app = require("tns-core-modules/application");
var dialogs = require("tns-core-modules/ui/dialogs");
var Common = (function (_super) {
    __extends(Common, _super);
    function Common() {
        return _super.call(this) || this;
    }
    Common.prototype.login = function (alUser, successCallback, errorCallback) {
    };
    Common.prototype.registerForPushNotification = function (successCallback, errorCallback) {
    };
    Common.prototype.isLoggedIn = function (successCallback, errorCallback) {
    };
    Common.prototype.launchChat = function () {
    };
    Common.prototype.launchChatWithUserId = function (userId) {
    };
    Common.prototype.launchChatWithGroupId = function (groupId, successCallback, errorCallback) {
    };
    Common.prototype.refreshToken = function (token) {
    };
    Common.prototype.proccessNotification = function (data) {
    };
    Common.prototype.logout = function (successCallback, errorCallback) {
    };
    Common.prototype.showAllRegisteredUsers = function (showAll) {
    };
    return Common;
}(observable_1.Observable));
exports.Common = Common;
var Utils = (function () {
    function Utils() {
    }
    Utils.SUCCESS_MSG = function () {
        var msg = "Your plugin is working on " + (app.android ? 'Android' : 'iOS') + ".";
        setTimeout(function () {
            dialogs.alert(msg + " For real. It's really working :)").then(function () { return console.log("Dialog closed."); });
        }, 2000);
        return msg;
    };
    return Utils;
}());
exports.Utils = Utils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbG96aWMtY2hhdC5jb21tb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBsb3ppYy1jaGF0LmNvbW1vbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE4RDtBQUM5RCxrREFBb0Q7QUFDcEQscURBQXVEO0FBRXZEO0lBQTRCLDBCQUFVO0lBR3BDO2VBQ0UsaUJBQU87SUFFVCxDQUFDO0lBRU0sc0JBQUssR0FBWixVQUFhLE1BQVcsRUFBRSxlQUFvQixFQUFFLGFBQWtCO0lBRWxFLENBQUM7SUFFTSw0Q0FBMkIsR0FBbEMsVUFBbUMsZUFBcUIsRUFBRSxhQUFtQjtJQUU3RSxDQUFDO0lBRU0sMkJBQVUsR0FBakIsVUFBa0IsZUFBcUIsRUFBRSxhQUFtQjtJQUU1RCxDQUFDO0lBRU0sMkJBQVUsR0FBakI7SUFFQSxDQUFDO0lBRU0scUNBQW9CLEdBQTNCLFVBQTRCLE1BQVc7SUFFdkMsQ0FBQztJQUVNLHNDQUFxQixHQUE1QixVQUE2QixPQUFlLEVBQUUsZUFBcUIsRUFBRyxhQUFtQjtJQUV6RixDQUFDO0lBRU0sNkJBQVksR0FBbkIsVUFBb0IsS0FBVTtJQUU5QixDQUFDO0lBR00scUNBQW9CLEdBQTNCLFVBQTRCLElBQVM7SUFDckMsQ0FBQztJQUdNLHVCQUFNLEdBQWIsVUFBYyxlQUFvQixFQUFFLGFBQWtCO0lBRXRELENBQUM7SUFFTSx1Q0FBc0IsR0FBN0IsVUFBOEIsT0FBZ0I7SUFFOUMsQ0FBQztJQUdILGFBQUM7QUFBRCxDQUFDLEFBbERELENBQTRCLHVCQUFVLEdBa0RyQztBQWxEWSx3QkFBTTtBQW9EbkI7SUFBQTtJQVVBLENBQUM7SUFUZSxpQkFBVyxHQUF6QjtRQUNFLElBQUksR0FBRyxHQUFHLGdDQUE2QixHQUFHLENBQUMsT0FBTyxHQUFHLFNBQVMsR0FBRyxLQUFLLE9BQUcsQ0FBQztRQUUxRSxVQUFVLENBQUM7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFJLEdBQUcsc0NBQW1DLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBTSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBN0IsQ0FBNkIsQ0FBQyxDQUFDO1FBQ3JHLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUVULE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDYixDQUFDO0lBQ0gsWUFBQztBQUFELENBQUMsQUFWRCxJQVVDO0FBVlksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUnO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuaW1wb3J0ICogYXMgZGlhbG9ncyBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2RpYWxvZ3MnO1xuXG5leHBvcnQgY2xhc3MgQ29tbW9uIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gIHB1YmxpYyBtZXNzYWdlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICAvL3RoaXMubWVzc2FnZSA9IFV0aWxzLlNVQ0NFU1NfTVNHKCk7XG4gIH1cblxuICBwdWJsaWMgbG9naW4oYWxVc2VyOiBhbnksIHN1Y2Nlc3NDYWxsYmFjazogYW55LCBlcnJvckNhbGxiYWNrOiBhbnkpIHtcbiAgICBcbiAgfVxuXG4gIHB1YmxpYyByZWdpc3RlckZvclB1c2hOb3RpZmljYXRpb24oc3VjY2Vzc0NhbGxiYWNrIDogYW55LCBlcnJvckNhbGxiYWNrIDogYW55KXtcblxuICB9XG5cbiAgcHVibGljIGlzTG9nZ2VkSW4oc3VjY2Vzc0NhbGxiYWNrIDogYW55LCBlcnJvckNhbGxiYWNrIDogYW55KXtcblxuICB9XG5cbiAgcHVibGljIGxhdW5jaENoYXQoKSB7XG5cbiAgfVxuXG4gIHB1YmxpYyBsYXVuY2hDaGF0V2l0aFVzZXJJZCh1c2VySWQ6IGFueSkge1xuXG4gIH1cblxuICBwdWJsaWMgbGF1bmNoQ2hhdFdpdGhHcm91cElkKGdyb3VwSWQ6IG51bWJlciwgc3VjY2Vzc0NhbGxiYWNrIDogYW55ICwgZXJyb3JDYWxsYmFjayA6IGFueSkge1xuICAgIFxuICB9XG5cbiAgcHVibGljIHJlZnJlc2hUb2tlbih0b2tlbjogYW55KXtcblxuICB9XG5cblxuICBwdWJsaWMgcHJvY2Nlc3NOb3RpZmljYXRpb24oZGF0YTogYW55KXtcbiAgfVxuXG5cbiAgcHVibGljIGxvZ291dChzdWNjZXNzQ2FsbGJhY2s6IGFueSwgZXJyb3JDYWxsYmFjazogYW55KSB7XG4gICAgXG4gIH1cblxuICBwdWJsaWMgc2hvd0FsbFJlZ2lzdGVyZWRVc2VycyhzaG93QWxsOiBib29sZWFuKSB7XG5cbiAgfSAgXG5cblxufVxuXG5leHBvcnQgY2xhc3MgVXRpbHMge1xuICBwdWJsaWMgc3RhdGljIFNVQ0NFU1NfTVNHKCk6IHN0cmluZyB7XG4gICAgbGV0IG1zZyA9IGBZb3VyIHBsdWdpbiBpcyB3b3JraW5nIG9uICR7YXBwLmFuZHJvaWQgPyAnQW5kcm9pZCcgOiAnaU9TJ30uYDtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZGlhbG9ncy5hbGVydChgJHttc2d9IEZvciByZWFsLiBJdCdzIHJlYWxseSB3b3JraW5nIDopYCkudGhlbigoKSA9PiBjb25zb2xlLmxvZyhgRGlhbG9nIGNsb3NlZC5gKSk7XG4gICAgfSwgMjAwMCk7XG5cbiAgICByZXR1cm4gbXNnO1xuICB9XG59XG4iXX0=