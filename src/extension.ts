import {
  ExtensionContext,
  IndentAction,
  languages,
  LanguageConfiguration,
  window,
  Uri,
  env,
} from 'vscode';

const wordPattern = /(-?\d*\.\d\w*)|([^\`\~\!\@\$\^\&\*\(\)\=\+\[\{\]\}\\\|\;\:\'\"\,\.\<\>\/\s]+)/g;

export const jsxConfiguration: LanguageConfiguration = {
  wordPattern,
  onEnterRules: [
    {
      beforeText: /.*/,
      afterText: /\/>/,
      action: { indentAction: IndentAction.IndentOutdent },
    },
  ],
};

export const jsxAttrConfiguration: LanguageConfiguration = {
  wordPattern,
  onEnterRules: [
    {
      beforeText: />/,
      afterText: /<\//,
      action: { indentAction: IndentAction.IndentOutdent },
    },
  ],
};

const welcomeMessageShown = 'WELCOME_MESSAGE_SHOWN';

export async function activate(context: ExtensionContext) {
  languages.setLanguageConfiguration('jsx', jsxConfiguration);
  languages.setLanguageConfiguration('jsx-attr', jsxAttrConfiguration);

  if (!context.globalState.get<boolean>(welcomeMessageShown)) {
    const response = await window.showInformationMessage(
      'Thanks for downloading Babel JavaScript! Make sure to follow me on Twitter @michaelgmcd.',
      'Follow',
    );
    if (response) {
      env.openExternal(
        Uri.parse('https://twitter.com/intent/user?screen_name=michaelgmcd'),
      );
    }
    await context.globalState.update(welcomeMessageShown, true);
  }
}
