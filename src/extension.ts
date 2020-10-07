import {
  ExtensionContext,
  IndentAction,
  languages,
  LanguageConfiguration,
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

export async function activate(context: ExtensionContext) {
  languages.setLanguageConfiguration('jsx', jsxConfiguration);
  languages.setLanguageConfiguration('jsx-attr', jsxAttrConfiguration);
}
