angular.module('app_litsco')
	.factory('factory_litsco', [function(){

		var allData = [
		{
		"id": "classic_cr",
		"cat" : 1,
		"productName": "Streamline Classic CR",
		"subHeader": "Corrugated, Exposed Fastener, Lap Seam Metal Wall Panel",
		"overview": "LITSCO's Streamline CR wall panel is an economical solution for exterior or parapet walls in need of restoration.  The narrow rib profile provides a clean, consistent appearance.  The panels be used in conjunction with Streamline Edge metal systems for a waterproof encapsulation of the structure while still allowing the structure to breath.",
		"features": [
		"Standard 8ft or 10ft lengths",
		"Stocked in Baked Enamel Painted Dark Bronze",
		"12\"o.c. spacing improves load spans",
		"Can be applied to multiple substrates",
		"Kynar pained standard 20yr finish warranty",
		"Custom painted panels available",
		"Integrates with our LockTight Coping or Flashdown Fascia"
		],
		"installation": {
		"Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
		"Substrate": "Streamline Classic CR panels are intended to be installed directly onto 18GA (1/2\") or 20GA (7/8\") deep galvanized steel subgirts.  Maximum subgirt spacing is 30\".   Refer to the Load Span Table in data sheet for additional information.",
		"Fasteners": "#12 hex head self-drilling stainless steel with neoprene washer.  Painted colors available to match panel.  Fasteners to be installed 12\"o.c.",
		"Panels": "Set bottom closure, such as LITSCO's Lit-Lok, then set panels on top of bottom closure.  Side-laps to be 1 rib (1.5\")." 
		},
		"materials": [
		{
		  "Aluminum" : [
		    ".032\" / .040\", Baked Enamel Painted",
		    ".032\" / .040\", Kynar Painted"
		    ],
		  "Copper" : [
		    "16oz / 20oz, Cold Rolled",
		    "16oz / 20oz, Lead Coated",
		    "16oz / 20oz, PrePatina",
		    "16oz / 20oz, Freedom Gray"
		    ],
		  "Rheinzink Zinc" : [
		    "0.8MM, Finish per specification"],
		  "Galvanized Steel / Galvalume" : [
		    "24GA., Kynar Painted"
		  ],
		  "Stainless Steel" : [
		    "0.18\" (26GA), #2D finish"
		  ]
		}
		],
		"jumboImg": "img/jumbo_cr_full.jpg",
		"detailImg": "http://www.litsco.com/images/streamline_alt.gif",
		"dataSheetLink" : "http://www.litsco.com/assets/streamline_classic_cr.pdf",
		"quoteSheetLink" : "http://www.litsco.com/assets/print_approval_streamline.pdf"
		}, 
    	{
    		"id": "omniwall_md",
    		"cat" : 1,
    		"productName": "Streamline Omniwall MD",
    		"subHeader": "Multi-Directional, Concealed Fastener, Lap Seam Metal Wall Panel.  ASTM E-330",
    		"overview": "LITSCO's OmniWall MD panel is an ideal solution for exterior walls or soffits in need of restoration.  The stackable panel modules install quickly and hides the fasteners, resulting in a clean, consistent appearance. This panel is unique in that it is omni directional, allowing it to be installed side-by-side and bottom-to-top, in vertical or horizontal panel orientation.",
    		"features": [
    		"Vertical or horizontal panel orientation allows this panel to fit to your design requirements",
    		"ASTM E330 tested for structural integrity",
    		"Heavier gauge materials result in a stronger panel",
    		"Standard panels sizes in both small and large modules",
    		"Kynar pained standard 20yr finish warranty",
    		"Custom painted panels available",
    		"Can be rear insulated."
    		],
    		"installation": {
    		"Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
    		"Substrate": "Streamline Omniwall MD panels are intended to be installed directly onto 18GA (1/2\") or 20GA (7/8\") deep galvanized steel subgirts.  Maximum subgirt spacing is 30\".",
    		"Fasteners": "#12 pancake Phillips head, self-drilling stainless steel fastener.  Fasteners to be installed 12\"o.c.",
    		"Panels": "Starting from the bottom, panels are recommended to be installed in a staggered design.  Caulk seams with approved urethane or silicone sealant." 
    		},
    		"materials": [
    		{
    		  "Aluminum" : [
    		    ".040\" / .050\", Baked Enamel Painted",
    		    ".040\" / .050\", Kynar Painted"
    		    ],
    		  "Copper" : [
    		    "16oz / 20oz, Cold Rolled",
    		    "16oz / 20oz, Lead Coated",
    		    "16oz / 20oz, PrePatina",
    		    "16oz / 20oz, Freedom Gray"
    		    ],
    		  "Rheinzink Zinc" : [
    		    "0.8MM, Finish per specification"],
    		  "Galvanized Steel / Galvalume" : [
    		    "24GA. / 22GA., Kynar Painted"
    		  ]
    		}
    		],
    		"jumboImg": "img/jumbo_cr_full.jpg",
    		"detailImg": "http://www.litsco.com/images/streamline_omniwall_md_alt.gif",
    		"dataSheetLink" : "http://www.litsco.com/assets/streamline_omniwall_md.pdf",
    		"specPageLink" : "http://www.litsco.com/assets/section-074113-streamline-omniwall-md.docx",
    		"quoteSheetLink" : "http://www.litsco.com/assets/print_approval_omniwall_md.pdf"
        },
        	{
        		"id": "omniwall_cl",
        		"cat" : 1,
        		"productName": "Streamline Omniwall CL",
        		"subHeader": "Clip & Concealed Fastener, Heavy Duty Rainscreen Panel. ASTM E330, 331 & ASTM 283",
        		"overview": "LITSCO's OmniWall CL panel is heavy duty clip mounted panel to offer a cost effective alternate to plate & ACM rainscreen systems.  The pre-installed clips create fast installation to substrate.",
        		"features": [
        		"Vertical or horizontal panel orientation allows this panel to fit to your design requirements",
        		"Economical alternate for ACM/Plate",
        		"ASTM E330, E331 tested for structural integrity",
        		"ASTM E283 tested for water infiltration resistance",
        		"Heavier gauge materials result in a stronger panel",
        		"Standard panels sizes in both small and large modules",
        		"Kynar pained standard 20yr finish warranty",
        		"Custom painted panels available",
        		"Can be rear insulated"
        		],
        		"installation": 
	        		{
	        		"Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
	        		"Substrate": "Streamline Omniwall CL panels are intended to be installed directly onto 18GA (1/2\") or 20GA (7/8\") deep galvanized steel subgirts.  Maximum subgirt spacing is 30\".",
	        		"Fasteners": "#12 hex head, self-drilling stainless steel fastener with neoprene washer.",
	        		"Panels": "Set panel direct to subgirt,  set joint to 5/8\" wide, set backer rod and caulk joint with high performance Pecora silicone sealant."
	        		}
        		,
        		"materials":
        		{
        		  "Aluminum" : [
        		    ".063\" / .080\", Kynar Painted",
        		    ".090\", Custom Kynar Painted"
        		  ]
        		},
        		"jumboImg": "img/jumbo_cr_full.jpg",
        		"detailImg": "http://www.litsco.com/images/streamline_omniwall_cl_alt.gif",
        		"dataSheetLink" : "http://www.litsco.com/assets/streamline_omniwall_cl.pdf",
        		"specPageLink" : "http://www.litsco.com/assets/section-074113-streamline-omniwall-cl.docx",
        		"quoteSheetLink" : "http://www.litsco.com/assets/print_approval_omniwall_cl.pdf"
            },
        {
		"id": "locktight_coping",
		"cat" : 2,
		"productName": "Streamline Locktight Coping",
		"subHeader": "Corrugated, Exposed Fastener, Lap Seam Metal Wall Panel",
		"overview": "LITSCO's Streamline CR wall panel is an economical solution for exterior or parapet walls in need of restoration.  The narrow rib profile provides a clean, consistent appearance.  The panels be used in conjunction with Streamline Edge metal systems for a waterproof encapsulation of the structure while still allowing the structure to breath.",
		"features": [
		"Standard 8ft or 10ft lengths",
		"Stocked in Baked Enamel Painted Dark Bronze",
		"12\"o.c. spacing improves load spans",
		"Can be applied to multiple substrates",
		"Kynar pained standard 20yr finish warranty",
		"Custom painted panels available",
		"Integrates with our LockTight Coping or Flashdown Fascia"
		],
		"installation": {
		"Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
		"Substrate": "Streamline Classic CR panels are intended to be installed directly onto 18GA (1/2\") or 20GA (7/8\") deep galvanized steel subgirts.  Maximum subgirt spacing is 30\".   Refer to the Load Span Table in data sheet for additional information.",
		"Fasteners": "#12 hex head self-drilling stainless steel with neoprene washer.  Painted colors available to match panel.  Fasteners to be installed 12\"o.c.",
		"Panels": "Set bottom closure, such as LITSCO's Lit-Lok, then set panels on top of bottom closure.  Side-laps to be 1 rib (1.5\")." 
		},
		"materials": [
		{
		  "Aluminum" : [
		    ".032\" / .040\", Baked Enamel Painted",
		    ".032\" / .040\", Kynar Painted"
		    ],
		  "Copper" : [
		    "16oz / 20oz, Cold Rolled",
		    "16oz / 20oz, Lead Coated",
		    "16oz / 20oz, PrePatina",
		    "16oz / 20oz, Freedom Gray"
		    ],
		  "Rheinzink Zinc" : [
		    "0.8MM, Finish per specification"],
		  "Galvanized Steel / Galvalume" : [
		    "24GA., Kynar Painted"
		  ],
		  "Stainless Steel" : [
		    "0.18\" (26GA), #2D finish"
		  ]
		}
		],
		"jumboImg": "img/jumbo_cr_full.jpg",
		"detailImg": "http://www.litsco.com/images/streamline_alt.gif",
		"dataSheetLink" : "http://www.litsco.com/assets/streamline_classic_cr.pdf",
		"quoteSheetLink" : "http://www.litsco.com/assets/print_approval_streamline.pdf"
	    }
		]

		return {
	        get:  function(id){
	        	// var returnArray = [];
	        	// var subArray = [];
	        	// angular.forEach(allData.catItems, function(item, i) {
	        	// 	subArray = item.catItems;

	        		
	        	// })
	        	// return returnArray;
	        	var prodIndex = allData.map(function(obj) {
	        		return obj.id;
	        	}).indexOf(id);
	        	return allData[prodIndex]
        	}
        }
	}]);
