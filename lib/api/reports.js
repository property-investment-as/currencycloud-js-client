/**
 * @module report
 */

'use strict';

var client = require('../client');

module.exports ={
    /**
     * Creates conversion report
     * @param {Object} params                Object, which contains parameters of the report
     */

    createConversionReport: function (params){
        params = params || {};
        var url = '/v2/reports/conversions/create';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    },

    createPaymentReport: function (params){
        params = params || {};
        var url = '/v2/reports/payments/create';

        var promise = client.request({
            url: url,
            method: 'POST',
            qs: params
        });

        return promise;
    },

    findReportRequest: function (params) {
        params = params || {};
        var url = '/v2/reports/report_requests/find';

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: params
        });

        return promise;
    },

    findReportViaId: function (params) {
        params = params || {};
        if (!params.hasOwnProperty('id')) {
            throw new Error('id is required');
        }

        var url = '/v2/reports/report_requests/' + params.id;

        var qs = Object.assign({}, params);
        delete qs.id;

        var promise = client.request({
            url: url,
            method: 'GET',
            qs: qs
        });

        return promise;
    }
};
