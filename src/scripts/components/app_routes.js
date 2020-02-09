angular.module("app_litsco").config([
  "$stateProvider",
  "$urlRouterProvider",
  "$locationProvider",
  "$urlMatcherFactoryProvider",
  function(
    $stateProvider,
    $urlRouterProvider,
    $locationProvider,
    $urlMatcherFactoryProvider
  ) {
    $urlRouterProvider.rule(function($injector, $location) {
      if ($location.path() === "/terms") {
        return "/terms/";
      }
    });
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state("home", {
        url: "/",
        templateUrl: "/html/home.html",
        controller: "controller_home",
        resolve: {
          $title: function() {
            return "LITSCO, since 1918";
          }
        }
      })
      .state("product_streamline", {
        url: "/streamline_metal_panels/:id",
        templateUrl: "/html/template_product.html",
        controller: "controller_prods",
        resolve: {
          product: [
            "factory_litsco",
            "$stateParams",
            function(factory_litsco, $stateParams) {
              var productIdObj = factory_litsco.filter(function(obj) {
                if (obj.id === $stateParams.id) {
                  return obj;
                }
              })[0];
              return productIdObj;
            }
          ],
          $title: [
            "product",
            function(product) {
              return product.productName.replace(
                "<sup class='registered'>®</sup>",
                "®"
              );
            }
          ]
        }
      })
      .state("product_flashing", {
        url: "/metal_flashing/:id",
        templateUrl: "/html/template_product.html",
        controller: "controller_prods",
        resolve: {
          product: [
            "factory_litsco",
            "$stateParams",
            function(factory_litsco, $stateParams) {
              var productIdObj = factory_litsco.filter(function(obj) {
                if (obj.id === $stateParams.id) {
                  return obj;
                }
              })[0];
              return productIdObj;
            }
          ],
          $title: [
            "product",
            function(product) {
              return product.productName;
            }
          ]
        }
      })
      .state("streamline_panels", {
        url: "/:cat",
        templateUrl: "/html/template_productlist.html",
        controller: "controller_productlist",
        resolve: {
          productlist: [
            "factory_litsco",
            "$stateParams",
            function(factory_litsco, $stateParams) {
              var catTitle;
              var cat = $stateParams.cat;
              if (cat === "streamline_metal_panels") {
                catTitle = "Streamline Metal Panels";
              } else if (cat === "metal_flashing") {
                catTitle = "Metal Flashing";
              }
              return catTitle;
            }
          ],
          $title: [
            "productlist",
            function(productlist) {
              return productlist;
            }
          ]
        }
      })
      .state("metal_flashing", {
        url: "/:cat",
        templateUrl: "/html/template_productlist.html",
        controller: "controller_productlist",
        resolve: {
          productlist: [
            "factory_litsco",
            "$stateParams",
            function(factory_litsco, $stateParams) {
              var catTitle;
              var cat = $stateParams.cat;
              if (cat === "streamline_metal_panels") {
                catTitle = "Streamline Metal Panels";
              } else if (cat === "metal_flashing") {
                catTitle = "Metal Flashing";
              }
              return catTitle;
            }
          ],
          $title: [
            "productlist",
            function(productlist) {
              return productlist;
            }
          ]
        }
      })
      .state("contact", {
        url: "/contact/",
        templateUrl: "/html/contact.html",
        controller: "controller_contact",
        resolve: {
          $title: function() {
            return "Contact Us";
          }
        }
      })
      .state("supply_item", {
        url: "/division_7_supplies/:vendorType/",
        templateUrl: "/html/template_supplies.html",
        controller: "controller_supplies",
        resolve: {
          vendorList: [
            "factory_litsco",
            "$stateParams",
            function(factory_litsco, $stateParams) {
              var vendorTitle;
              var vendorType = $stateParams.vendorType;
              if (vendorType === "roofing") {
                vendorTitle = "Roofing Supplies";
              } else if (vendorType === "waterproofing") {
                vendorTitle = "Waterproofing Supplies";
              } else if (vendorType === "commercial_metal") {
                vendorTitle = "Commercial Metal Panels";
              } else if (vendorType === "envelope") {
                vendorTitle = "Building Envelope";
              } else if (vendorType === "division_7_specialties") {
                vendorTitle = "Division 7 Specialties";
              } else if (vendorType === "flatsheets") {
                vendorTitle = "Flatsheet Metal";
              } else if (vendorType === 99) {
                vendorTitle = "Division 7 Building Products";
              }
              return vendorTitle;
            }
          ],
          $title: [
            "vendorList",
            function(vendorList) {
              return vendorList;
            }
          ]
        }
      })
      .state("supplies", {
        url: "/division_7_supplies/",
        params: {
          type: "division_7_supplies"
        },
        templateUrl: "/html/template_supplylist.html",
        controller: "controller_supplylist",
        resolve: {
          $title: function() {
            return "Division 7 Products & Supplies";
          }
        }
      })
      .state("about", {
        url: "/about/",
        templateUrl: "/html/about.html",
        controller: "controller_about",
        resolve: {
          $title: function() {
            return "About Us";
          }
        }
      })
      .state("careers", {
        url: "/careers/",
        templateUrl: "/html/careers.html",
        controller: "controller_careers",
        resolve: {
          $title: function() {
            return "Careers and Employment";
          }
        }
      })
      .state("privacy", {
        url: "/privacy_policy/",
        templateUrl: "/html/privacy_policy.html",
        controller: "controller_privacy",
        resolve: {
          $title: function() {
            return "Privacy Policy";
          }
        }
      })
      .state("copyright", {
        url: "/copyright/",
        templateUrl: "/html/copyright.html",
        controller: "controller_copyright",
        resolve: {
          $title: function() {
            return "Privacy Policy";
          }
        }
      })
      .state("terms", {
        url: "/terms/{nan}",
        templateUrl: "/html/terms.html",
        controller: "controller_terms",
        resolve: {
          $title: function() {
            return "Terms & Conditions";
          }
        }
      })
      .state("terms2", {
        url: "/terms",
        templateUrl: "/html/terms.html",
        controller: "controller_terms",
        resolve: {
          $title: function() {
            return "Terms & Conditions";
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
