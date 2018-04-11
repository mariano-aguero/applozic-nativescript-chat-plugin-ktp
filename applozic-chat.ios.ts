import { Common } from './applozic-chat.common';

declare var ALUser: any;
declare var ALChatLauncher: any;
declare var ALRegisterUserClientService: any;
declare var ALPushAssist: any;
declare var ALUserDefaultsHandler: any;
declare var ALApplozicSettings: any;
declare var ALPushNotificationService: any;



export class ApplozicChat extends Common {

    public login(user: any, successCallback: any, errorCallback: any) {
        var alUser = ALUser.alloc().init();
        alUser.userId = user.userId;
        alUser.password = user.password;
        alUser.email = user.email;
        alUser.applicationId = user.applicationId;
        alUser.authenticationTypeId = user.authenticationTypeId;

        var alChatLauncher = ALChatLauncher.alloc().initWithApplicationId(user.applicationId);
        var alRegisterUserClientService = ALRegisterUserClientService.alloc().init();
        var that = this;
        
        alRegisterUserClientService.initWithCompletionWithCompletion(alUser, function(response, error) {
            //Todo: add check for error and call errorCallback in case of error
            that.defaultSettings();
            successCallback(response);
        });
    }

    public registerForPushNotification(successCallback: any, errorCallback: any){
    
    }


  public refreshToken(token: any){
        ALUserDefaultsHandler.setApnDeviceToken(token);              
    }




  public proccessNotification(data: any){
      var alPushNotificationService  = ALPushNotificationService.alloc().init();
        alPushNotificationService.processPushNotificationUpdateUI(data,parseInt(data.foreground));      
  }


    public launchChat() {
        var alChatLauncher = ALChatLauncher.alloc().initWithApplicationId(ALUserDefaultsHandler.getApplicationKey());        
        var alPushAssist = ALPushAssist.alloc().init();
        alChatLauncher.launchChatListAndViewControllerObject("Conversations", alPushAssist.topViewController);
    }

    public launchChatWithUserId(userId: any) {        
        var alChatLauncher = ALChatLauncher.alloc().initWithApplicationId(ALUserDefaultsHandler.getApplicationKey());        
        var alPushAssist = ALPushAssist.alloc().init();
        alChatLauncher.launchIndividualChatWithGroupIdWithDisplayNameAndViewControllerObjectAndWithText(userId, null, null, alPushAssist.topViewController, null);       
    }
        
    public launchChatWithGroupId(groupId: number, successCallback: any, errorCallback: any) {
        var alChatLauncher = ALChatLauncher.alloc().initWithApplicationId(ALUserDefaultsHandler.getApplicationKey());        
        var alPushAssist = ALPushAssist.alloc().init();
        alChatLauncher.launchIndividualChatWithGroupIdWithDisplayNameAndViewControllerObjectAndWithText(null, groupId, null, alPushAssist.topViewController, null);               
    }

    public logout(successCallback: any, errorCallback: any) {
        var alRegisterUserClientService = ALRegisterUserClientService.alloc().init();
        alRegisterUserClientService.logoutWithCompletionHandler(function(response, error) {
            if (!error && response.status === "success") {
                console.log("Logout successful");
                successCallback(response);
            } else {
                console.log("Logout failed: " + response.response);
                successCallback(error);
            }
        });
    }

    public showAllRegisteredUsers(showAll: boolean) {
        ALApplozicSettings.setFilterContactsStatus(showAll);
    }  
    
    public defaultSettings() {
 ALApplozicSettings.setStatusBarBGColor(UIColor.colorWithRedGreenBlueAlpha(66.0/255, 173.0/255,247.0/255,1));
        /* BY DEFAULT Black:UIStatusBarStyleDefault IF REQ. White: UIStatusBarStyleLightContent  */
        /* ADD property in info.plist "View controller-based status bar appearance" type: BOOLEAN value: NO */
        
        ALApplozicSettings.setColorForNavigation(UIColor.colorWithRedGreenBlueAlpha(66.0/255,173.0/255,247.0/255 ,1));

          ALApplozicSettings.setColorForNavigationItem(UIColor.whiteColor);
        ALApplozicSettings.hideRefreshButton(false);
        ALUserDefaultsHandler.setNavigationRightButtonHidden(false);
        ALUserDefaultsHandler.setBottomTabBarHidden(false);
        ALApplozicSettings.setTitleForConversationScreen("Chats");
        ALApplozicSettings.setCustomNavRightButtonMsgVC(false);                   /*  SET VISIBILITY FOR REFRESH BUTTON (COMES FROM TOP IN MSG VC)   */
        ALApplozicSettings.setTitleForBackButtonMsgVC("Back");                /*  SET BACK BUTTON FOR MSG VC  */
        ALApplozicSettings.setTitleForBackButtonChatVC("Back");   
                    /*  SET BACK BUTTON FOR CHAT VC */

        
        /****************************************************************************************************************/
        
        
        /***************************************  SEND RECEIVE MESSAGES SETTINGS  ***************************************/
        
        ALApplozicSettings.setSendMsgTextColor(UIColor.whiteColor);
        ALApplozicSettings.setReceiveMsgTextColor(UIColor.grayColor);
        ALApplozicSettings.setColorForReceiveMessages(UIColor.colorWithRedGreenBlueAlpha(255/255, 255/255, 255/255, 1));
        ALApplozicSettings.setColorForSendMessages(UIColor.colorWithRedGreenBlueAlpha(66.0/255, 173.0/255, 247.0/255, 1));
        
        ALApplozicSettings.setCustomMessageBackgroundColor(UIColor.lightGrayColor);              /*  SET CUSTOM MESSAGE COLOR */
        //[ALApplozicSettings setCustomMessageFontSize:14];                                     /*  SET CUSTOM MESSAGE FONT SIZE */
        ALApplozicSettings.setCustomMessageFont("Helvetica");
        
        //****************** DATE COLOUR : AT THE BOTTOM OF MESSAGE BUBBLE ******************/
        ALApplozicSettings.setDateColor(UIColor.colorWithRedGreenBlueAlpha(51.0/255, 51.0/255, 51.0/255, 0.5));
        
        //****************** MESSAGE SEPERATE DATE COLOUR : DATE MESSAGE ******************/
        ALApplozicSettings.setMsgDateColor(UIColor.blackColor);
         
        /***************  SEND MESSAGE ABUSE CHECK  ******************/
    
        ALApplozicSettings.setAbuseWarningText("AVOID USE OF ABUSE WORDS");
        ALApplozicSettings.setMessageAbuseMode(true);
    
        //****************** SHOW/HIDE RECEIVER USER PROFILE ******************/
        ALApplozicSettings.setReceiverUserProfileOption(false);
        
        /****************************************************************************************************************/
        
        
        /**********************************************  IMAGE SETTINGS  ************************************************/
        
        ALApplozicSettings.setMaxCompressionFactor(0.1);
        ALApplozicSettings.setMaxImageSizeForUploadInMB(3);
        ALApplozicSettings.setMultipleAttachmentMaxLimit(5);
        /****************************************************************************************************************/
        
        
        /**********************************************  GROUP SETTINGS  ************************************************/
        
         ALApplozicSettings.setGroupOption(true);
         ALApplozicSettings.setGroupInfoDisabled(false);
         ALApplozicSettings.setGroupInfoEditDisabled(true);
    
        
          ALApplozicSettings.setGroupExitOption(true);
          ALApplozicSettings.setGroupMemberAddOption(true);
          ALApplozicSettings.setGroupMemberRemoveOption(true);
    
    
        /****************************************************************************************************************/
        
        
        /******************************************** NOTIIFCATION SETTINGS  ********************************************/
        
    
        /*if([ALUtilityClass isThisDebugBuild]){
            [ALUserDefaultsHandler setDeviceApnsType:(short)DEVELOPMENT];
        }else{
            [ALUserDefaultsHandler setDeviceApnsType:(short)DISTRIBUTION];
        }*/
        
        //NSString * appName = [[[NSBundle mainBundle] infoDictionary] objectForKey:@"CFBundleName"];
        //[ALApplozicSettings setNotificationTitle:appName];
        
//          ALApplozicSettings.enableNotification; //0
        //    [ALApplozicSettings disableNotification]; //2
        //    [ALApplozicSettings disableNotificationSound]; //1                /*  IF NOTIFICATION SOUND NOT NEEDED  */
        //    [ALApplozicSettings enableNotificationSound];//0                   /*  IF NOTIFICATION SOUND NEEDED    */
        /****************************************************************************************************************/
        
        
        /********************************************* CHAT VIEW SETTINGS  **********************************************/
        
        ALApplozicSettings.setVisibilityForNoMoreConversationMsgVC(false);        /*  SET VISIBILITY NO MORE CONVERSATION (COMES FROM TOP IN MSG VC)  */
        ALApplozicSettings.setEmptyConversationText("You have no conversations yet"); /*  SET TEXT FOR EMPTY CONVERSATION    */
        ALApplozicSettings.setVisibilityForOnlineIndicator(true);               /*  SET VISIBILITY FOR ONLINE INDICATOR */

        ALApplozicSettings.setColorForSendButton(UIColor.colorWithRedGreenBlueAlpha(66.0/255,173.0/255,247.0/255,1));

        ALApplozicSettings.setColorForTypeMsgBackground(UIColor.clearColor);
             /*  SET COLOR FOR TYPE MESSAGE OUTER VIEW */
        ALApplozicSettings.setMsgTextViewBGColor(UIColor.lightGrayColor);        /*  SET BG COLOR FOR MESSAGE TEXT VIEW */
        ALApplozicSettings.setPlaceHolderColor(UIColor.grayColor);               /*  SET COLOR FOR PLACEHOLDER TEXT */
        ALApplozicSettings.setVisibilityNoConversationLabelChatVC(true);            /*  SET NO CONVERSATION LABEL IN CHAT VC    */

        ALApplozicSettings.setBGColorForTypingLabel(UIColor.colorWithRedGreenBlueAlpha(242/255.0,242/255.0,242/255.0,1)); /*  SET COLOR FOR TYPING LABEL  */
        ALApplozicSettings.setTextColorForTypingLabel(UIColor.colorWithRedGreenBlueAlpha(51.0/255,51.0/255,51.0/255,0.5)); /*  SET COLOR FOR TEXT TYPING LABEL  */
        /****************************************************************************************************************/
        
        
        /********************************************** CHAT TYPE SETTINGS  *********************************************/
        
        //[ALApplozicSettings setContextualChat:YES];                                 /*  IF CONTEXTUAL NEEDED    */
        /*  Note: Please uncomment below setter to use app_module_name */
        //   [ALUserDefaultsHandler setAppModuleName:@"<APP_MODULE_NAME>"];
        //   [ALUserDefaultsHandler setAppModuleName:@"SELLER"];
        /****************************************************************************************************************/
        
        
        /*********************************************** CONTACT SETTINGS  **********************************************/
        
        //[ALApplozicSettings setFilterContactsStatus:YES];                           /*  IF NEEDED ALL REGISTERED CONTACTS   */
        //[ALApplozicSettings setOnlineContactLimit:0];                               /*  IF NEEDED ONLINE USERS WITH LIMIT   */
        
        //[ALApplozicSettings setSubGroupLaunchFlag:NO];                             /*  IF NEEDED ONLINE USERS WITH LIMIT   */
        /****************************************************************************************************************/
        
        
        /***************************************** TOAST + CALL OPTION SETTINGS  ****************************************/
        
        ALApplozicSettings.setColorForToastText(UIColor.blackColor);         /*  SET COLOR FOR TOAST TEXT    */
        ALApplozicSettings.setColorForToastBackground(UIColor.grayColor);    /*  SET COLOR FOR TOAST BG      */
        //[ALApplozicSettings setCallOption:YES];                                 /*  IF CALL OPTION NEEDED   */
        /****************************************************************************************************************/
        
        
        /********************************************* DEMAND/MISC SETTINGS  ********************************************/
        
        ALApplozicSettings.setUnreadCountLabelBGColor(UIColor.purpleColor);
        ALApplozicSettings.setCustomClassName("ALChatManager");                   /*  SET 3rd Party Class Name OR ALChatManager */
         ALUserDefaultsHandler.setFetchConversationPageSize(60);                    /*  SET MESSAGE LIST PAGE SIZE  */ // DEFAULT VALUE 20
        //ALUserDefaultsHandler.setUnreadCountType(1);                               /*  SET UNRAED COUNT TYPE   */ // DEFAULT VALUE 0
         ALApplozicSettings.setMaxTextViewLines(4);
        ALUserDefaultsHandler.setDebugLogsRequire(true);                            /*   ENABLE / DISABLE LOGS   */
        //[ALUserDefaultsHandler setLoginUserConatactVisibility:NO];
        //[ALApplozicSettings setUserProfileHidden:NO];
        ALApplozicSettings.setFontFace("Helvetica");
        //[ALApplozicSettings setChatWallpaperImageName:@"<WALLPAPER NAME>"];
         ALApplozicSettings.replyOptionEnabled(true);

        /****************************************************************************************************************/
        
        
        /***************************************** APPLICATION URL CONFIGURATION + ENCRYPTION  ***************************************/
        
        //    [self getApplicationBaseURL];                                         /* Note: PLEASE DO NOT COMMENT THIS IF ARCHIVING/RELEASING  */
        
        //[ALUserDefaultsHandler setEnableEncryption:NO];                            /* Note: PLEASE DO YES (IF NEEDED)  */
        /****************************************************************************************************************/
        
        ALUserDefaultsHandler.setGoogleMapAPIKey("AIzaSyBnWMTGs1uTFuf8fqQtsmLk-vsWM7OrIXk"); //REPLACE WITH YOUR GOOGLE MAPKEY
       
    //    NSMutableArray * array = [NSMutableArray new];
    //    [array addObject:[NSNumber numberWithInt:1]];
    //    [array addObject:[NSNumber numberWithInt:2]];
    //
    //    [ALApplozicSettings setContactTypeToFilter: array];         // SET ARRAY TO PREFERENCE
        
        /************************************** 3rd PARTY VIEWS + MSg CONTAINER SETTINGS  *************************************/
        
    //    NSArray * viewArray = @[@"VC1", @"VC2"];    // VC : ViewController's Class Name
    //    [self.permissableVCList arrayByAddingObject:@""];
        
    //    [ALApplozicSettings setMsgContainerVC:@""];  // ADD CLASS NAME
        /**********************************************************************************************************************/
       
        ALApplozicSettings.setUserDeletedText("User has been deleted");            /*  SET DELETED USER NOTIFICATION TITLE   */
        
       
        /******************************************** CUSTOM TAB BAR ITEM : ICON && TEXT ************************************************/
        ALApplozicSettings.setChatListTabIcon("");
        //[ALApplozicSettings setProfileTabIcon:@""];
        
        ALApplozicSettings.setChatListTabTitle("");
        ALApplozicSettings.setProfileTabTitle("");
    
        // Hide attachment options in chat screen
    //    NSArray * attachmentOptionToHide = @[@":audio", @":video", @":location",@":shareContact"];
    //
    //    [ALApplozicSettings setHideAttachmentsOption:attachmentOptionToHide];
    }

}
