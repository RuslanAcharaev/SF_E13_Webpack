import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts}'] },
    {
        ignores: [
            'dist/*',
            'node_modules/*',
            'webpack.config.js',
            'prod.config.js',
        ],
    },
    { files: ['**/*.js'], languageOptions: { sourceType: 'script' } },
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
    },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    eslintConfigPrettier,
];
