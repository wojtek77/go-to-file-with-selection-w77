import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	function basename(filePath: string): string {
        const match = filePath.match(/[^/\\]+$/);
        return match ? match[0] : '';
    }

	context.subscriptions.push(vscode.commands.registerCommand('goToFileWithSelectionW77.fileBasename', () => {
		vscode.commands.executeCommand(
            'workbench.action.quickOpen',
            vscode.window.activeTextEditor ? basename(vscode.window.activeTextEditor.document.fileName) : ''
        );
        vscode.commands.executeCommand('editor.action.selectAll');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('goToFileWithSelectionW77.selectedText', () => {
		vscode.commands.executeCommand(
            'workbench.action.quickOpen',
            vscode.window.activeTextEditor?.document.getText(vscode.window.activeTextEditor.selection)
        );
        vscode.commands.executeCommand('editor.action.selectAll');
	}));
}
export function deactivate() { }
