# Go to File with Selection W77

## Description

It is an extension for VS code, which can go to file with file basename or selected text. Just like it is in Netbeans.

## Extension Settings

Open your [keybindings.json](https://code.visualstudio.com/docs/getstarted/keybindings#_advanced-customization) and add this keybinding after command "workbench.action.quickOpen":

```json
{
    "key": "ctrl+p",
    "command": "goToFileWithSelectionW77.fileBasename",
    "when": "editorIsOpen"
},
{
    "key": "ctrl+p",
    "command": "goToFileWithSelectionW77.selectedText",
    "when": "editorTextFocus && editorHasSelection && !editorHasMultipleSelections"
},
```

## Commands
| name | description |
| - | - |
goToFileWithSelectionW77.fileBasename | Go to File with File Basename
goToFileWithSelectionW77.selectedText | Go to File with Selected Text
