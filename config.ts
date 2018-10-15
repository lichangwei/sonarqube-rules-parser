export default {
    sonarqube: 'https://sonarcloud.io/',
    qprofile: 'AWM-7aN5iprWWeJOistG',
    exclude: [
        // https://sonarcloud.io/organizations/lichangwei-github/rules?open=javascript%3AS1854
        'javascript:S1854',
        // https://sonarcloud.io/organizations/lichangwei-github/rules?open=javascript%3AUnusedVariable
        'javascript:UnusedVariable',
        // https://sonarcloud.io/organizations/lichangwei-github/rules?open=javascript%3AS3317
        'javascript:S3317',
        // https://sonarcloud.io/organizations/lichangwei-github/rules?open=javascript%3AMissingNewlineAtEndOfFile
        'javascript:MissingNewlineAtEndOfFile',
        // https://sonarcloud.io/organizations/lichangwei-github/rules?open=javascript%3AS2138
        'javascript:S2138',
    ],
};
