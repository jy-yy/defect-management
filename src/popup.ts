import * as vscode from 'vscode';
import * as moment from 'moment-timezone';

// set time
const showPopupTime = ["12:00", "20:00"];
let process = ' ';
let content1 = 'It\'s 12:00, remember to have a rest!';
let content2 = 'It\'s 20:00, time to finish the work!';
let doneDefects = 32;
let allDefects = 100; 
let donePercent = 100 * doneDefects / allDefects;


module.exports = function (context: vscode.ExtensionContext) {
    const timer = setInterval(() => {
        const now = moment().tz("Asia/Hongkong");
        const targetTime1 = moment(showPopupTime[0], "HH:mm");
        const targetTime2 = moment(showPopupTime[1], "HH:mm");
        //获取真正的doneDefects和allDefects
        donePercent = 100 * doneDefects / allDefects;
        process = 'Process : ' + donePercent + '%';
      
        // check time every minute
        if (now.hour() === targetTime1.hour() && now.minute() === targetTime1.minute()) {
          vscode.window.showInformationMessage(process, content1);
        }
      
        if (now.hour() === targetTime2.hour() && now.minute() === targetTime2.minute()) {
          vscode.window.showInformationMessage(process, content2);
        }
      }, 30000);

};
