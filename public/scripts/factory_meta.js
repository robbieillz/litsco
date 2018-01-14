angular.module('app_litsco')
    .factory('factory_meta', [function () {
        // default meta tag content for App
        var content = {
            description: "LITSCO is an independent roofing and waterproofing products supplier, and the original Streamline panel manufacturer.",
            keywords: 'LITSCO, Streamline metal, Streamline panels, roofing distributor, waterproofing distributor, Long Island Tinsmith Supply Corp'
        };

        return {
            content: function () {
                return content;
            },
            productList: function (description, keywords) {
                content = {
                    description: description,
                    keywords: keywords
                };
            },
            product: function (description, keywords) {
                content = {
                    description: description,
                    keywords: keywords
                };
            },
            supplyList: function (description, keywords) {
                content = {
                    description: description,
                    keywords: keywords
                };
            },
            supply: function (description, keywords) {
                content = {
                    description: description,
                    keywords: keywords
                };
            },
            careers: function() {
                content = {
                    description: 'LITSCO offers employment opportunities with benefits.  Come join our team!',
                    keywords: 'construction jobs, roofing jobs, waterproofing jobs, metal panel jobs'
                };
            },
            about: function() {
                content = {
                    description: 'LITSCO serves professional roofing and waterproofing contractors with quality building products throughout New York, New Jersey and Connecticut',
                    keywords: 'LITSCO, Long Island Tinsmith Supply Corp, Streamline Metal Panels, Roofing Distributor, Waterproofing Distributor, Building Products'
                };
            },
            contact: function() {
                content = {
                    description: 'Contact LITSCO via email, phone, or fax if you have questions about roofing, waterproofing, or metal products',
                    keywords: 'LITSCO, Long Island Tinsmith Supply Corp, Streamline Metal Panels, Roofing Distributor, Waterproofing Distributor, Building Products'
                };
            }
        };
    }]);