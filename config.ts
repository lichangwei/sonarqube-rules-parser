export default {
    sonarqube: 'https://sonarcloud.io/',
    qprofile: 'AWM-7aN5iprWWeJOistG',
    exclude: [
        // http://sonar.gaiaworks.cn:9000/coding_rules#rule_key=javascript%3AS1854
        'javascript:S1854',
        // http://sonar.gaiaworks.cn:9000/coding_rules#rule_key=javascript%3AUnusedVariable
        'javascript:UnusedVariable',
        // http://sonar.gaiaworks.cn:9000/coding_rules#rule_key=javascript%3AS3317
        'javascript:S3317',
        // http://sonar.gaiaworks.cn:9000/coding_rules#rule_key=javascript%3AMissingNewlineAtEndOfFile
        'javascript:MissingNewlineAtEndOfFile',
        // http://sonar.gaiaworks.cn:9000/coding_rules#rule_key=javascript%3AS2138
        'javascript:S2138',
    ],
};
