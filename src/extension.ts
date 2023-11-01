// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


let sidebarPanel: vscode.WebviewPanel | undefined = undefined;
const moment = require('moment-timezone');


export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "defect-management" is now active!');
	// require('./sidebar')(context);
	require('./popup')(context);


	context.subscriptions.push(
        vscode.commands.registerCommand('defect-management.showSidebar', () => {	
        })
    );
}
  
exports.activate = activate;

// This method is called when your extension is deactivated
export function deactivate() {
    
}


