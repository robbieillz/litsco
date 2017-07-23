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
			"Substrate": "Streamline Omniwall CR panels are intended to be installed directly onto 18GA (1/2\") or 20GA (7/8\") deep galvanized steel subgirts.  Maximum subgirt spacing is 30\".",
			"Fasteners": "#12 pancake Phillips head, self-drilling stainless steel fastener, painted to match panel.  Fasteners to be installed 12\"o.c.",
			"Panels": "Starting from the bottom, panels are recommended to be installed in a staggered design.  Caulk seams with approved urethane or silicone sealant."
		},
		"materials": {
		  "Aluminum" : [
		    ".040\" / .050\", Kynar Painted",
		  ],
		  "Copper" : [
		    "16oz / 20oz, Cold Rolled",
		    "16oz / 20oz, Lead Coated",
		    "16oz / 20oz, Freedom Gray",
		  ],
		  "Rheinzink Zinc" : [
		    "0.8MM, PrePatina",
		  ],
		  "Galvanized Steel/Galvalume" : [
		    "24GA / 22GA, Kynar Painted",
		  ],
		  "Stainless Steel" : [
		    ".018\" (26GA), Type 304 #2D",
		    "26GA, Type 316 #2B",
		    "24GA, Type 304 #2B",
		  ],
		},
		"colors" : {
			"Almond" : "#e0d6b3",
			"Bone White" : "#f4f4f4",
			"Dark Bronze" : "#211401",
			"Sandstone" : "#c6b999",
			"Silver Metallic" : "#66727a",
			"Slate Gray" : "#2f2e2c",
			"Matte Black" : "#232021",
			"Custom Painted" : "#FFF"
		},
		"illustration": "classic_cr",
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
		"overview": "LITSCO's Streamline OmniWall MD panel is an ideal solution for exterior walls or soffits in need of restoration.  The stackable panel modules install quickly and hides the fasteners, resulting in a clean, consistent appearance. This panel is unique in that it is omni directional, allowing it to be installed side-by-side and bottom-to-top, in vertical or horizontal panel orientation.",
		"features": [
			"Vertical or horizontal panel orientation allows this panel to fit to your design requirements",
			"ASTM E330 tested for structural integrity",
			"Heavier gauge materials result in a stronger panel",
			"Standard panels sizes in both small and large modules",
			"Kynar pained standard 20yr finish warranty",
			"Custom painted panels available",
			"Can be rear insulated."
		],
		"installation":  {
    		"Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
    		"Substrate": "Streamline Omniwall CL panels are intended to be installed directly onto 18GA (1/2\") or 20GA (7/8\") deep galvanized steel subgirts.  Maximum subgirt spacing is 30\".",
    		"Fasteners": "#12 pancake Phillips head, self-drilling stainless steel fastener.  Fasteners to be installed 12\"o.c.",
    		"Panels": "Starting from the bottom, panels are recommended to be installed in a staggered design.  Caulk seams with approved urethane or silicone sealant."
		},
		"materials": {
		  "Aluminum" : [
		    ".040\" / .050\", Kynar Painted",
		  ],
		  "Copper" : [
		    "16oz / 20oz, Cold Rolled",
		    "16oz / 20oz, Lead Coated",
		    "16oz / 20oz, Freedom Gray",
		  ],
		  "Rheinzink Zinc" : [
		    "0.8MM, PrePatina",
		  ],
		  "Galvanized Steel/Galvalume" : [
		    "24GA / 22GA, Kynar Painted",
		  ],
		  "Stainless Steel" : [
		    ".018\" (26GA), Type 304 #2D",
		    "26GA, Type 316 #2B",
		    "24GA, Type 304 #2B",
		  ],
		},
		"colors" : {
			"Almond" : "#e0d6b3",
			"Bone White" : "#f4f4f4",
			"Dark Bronze" : "#211401",
			"Sandstone" : "#c6b999",
			"Silver Metallic" : "#66727a",
			"Slate Gray" : "#2f2e2c",
			"Matte Black" : "#232021",
			"Custom Painted" : "#FFF"
		},
		"illustration": "omniwall_md",
		"jumboImg": "http://litsco.com/images/w60th_litsco_omniwallmd_panels-1-crop-u28651.jpg",
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
		"overview": "LITSCO's Streamline OmniWall CL panel is heavy duty clip mounted panel to offer a cost effective alternate to plate & ACM rainscreen systems.  The pre-installed clips create fast installation to substrate.",
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
		},
		"materials": {
		  "Aluminum" : [
		    ".063\" / .080\", Kynar Painted",
		    ".090\", Custom Kynar Painted"
		  ]
		},
		"colors" : {
			"Bone White" : "#f4f4f4",
			"Dark Bronze" : "#211401",
			"Matte Black" : "#232021",
			"Sandstone" : "#c6b999",
			"Silver Metallic" : "#66727a",
			"Custom Painted" : "#FFF"
		},
		"illustration": "omniwall_cl",
		"jumboImg": "http://litsco.com/images/kutz_cl_22.jpg",
		"detailImg": "http://www.litsco.com/images/streamline_omniwall_cl_alt.gif",
		"dataSheetLink" : "http://www.litsco.com/assets/streamline_omniwall_cl.pdf",
		"specPageLink" : "http://www.litsco.com/assets/section-074113-streamline-omniwall-cl.docx",
		"quoteSheetLink" : "http://www.litsco.com/assets/print_approval_omniwall_cl.pdf"
        },
        {
		"id": "flushwall_tg",
		"cat" : 1,
		"productName": "Streamline Flushwall TG",
		"subHeader": "Concealed Fastener, Lap Seam Metal Panel",
		"overview": "LITSCO's Streamline Flush TG panel is an ideal solution for exterior, parapet walls or soffits in need of restoration.  The interlocking Tongue-n-Groove installation is fast and hides the fasteners making the 11\" wide profile a clean, consistent appearance.",
		"features": [
			"Vertical or horizontal panel orientation allows this panel to fit to your design requirements",
			"Horizontal panel allows for reveal option, standard 1\"",
			"Vertical panel allows for easy installation side-by-side",
			"Standard 8ft or 10ft lengths",
			"Economical Baked Enamel Paint option",
			"Kynar pained standard 20yr finish warranty",
		],
		"installation": {
			"Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
			"Substrate": "Streamline Flushwall TG panels are intended to be installed directly onto 18GA (1/2\") or 20GA (7/8\") deep galvanized steel subgirts.  Maximum subgirt spacing is 30\".",
			"Fasteners": "#12 pancake Phillips head, self-drilling stainless steel fastener.  Fasteners to be installed 12\"o.c.",
			"Panels": "For horizontal installation, start from bottom and work upward.  If open ends, ensure proper side flashings are installed.  For vertical applications, start from one side, and work across.  With closed ends, panels to be stacked as designed (with or without reveal) and apply silicone sealant."
		},
		"materials": {
		  "Aluminum" : [
		    ".040\" / .050\", Kynar Painted",
		  ],
		  "Copper" : [
		    "16oz / 20oz, Cold Rolled",
		    "16oz / 20oz, Lead Coated",
		    "16oz / 20oz, Freedom Gray",
		  ],
		  "Rheinzink Zinc" : [
		    "0.8MM, PrePatina",
		  ],
		  "Galvanized Steel/Galvalume" : [
		    "24GA / 22GA, Kynar Painted",
		  ],
		  "Stainless Steel" : [
		    ".018\" (26GA), Type 304 #2D",
		    "26GA, Type 316 #2B",
		    "24GA, Type 304 #2B",
		  ],
		},
		"colors" : {
			"Almond" : "#e0d6b3",
			"Bone White" : "#f4f4f4",
			"Dark Bronze" : "#211401",
			"Sandstone" : "#c6b999",
			"Silver Metallic" : "#66727a",
			"Slate Gray" : "#2f2e2c",
			"Matte Black" : "#232021",
			"Custom Painted" : "#FFF"
		},
		"illustration": "flushwall_tg",
		"jumboImg": "http://litsco.com/images/laightst_litsco_zinc_metal_panels-15.jpg",
		"detailImg": "http://litsco.com/images/streamline_flush_tg_alt.gif",
		"dataSheetLink" : "http://litsco.com/assets/streamline_flush_tg.pdf"
    	},
        {
		"id": "flatwall_sm",
		"cat" : 1,
		"productName": "Streamline Flatwall SM",
		"subHeader": "Flat Seam, Concealed Fastener, Overlapping Metal Panel.  ASTM E-330",
		"overview": "LITSCO's Streamline FlatWall SM panel is an overlapping metal panel which is installed to provide a shingle effect which is also an excellent design for shedding water.  Due to it's compatibility with almost any jobsite condition, and the many standard sizes, this makes an excellent panel for design purposes.",
		"features": [
			"Integrated clip provides solid fastening to a variety of substrates",
			"ASTM E-330 tested for structural integrity",
			"Square, Rectangle, or Diamond shape allows for wide variety of designs and applications",
			"Ideal for wall and low-slope roofing projects",
			"Natural metals patina over time providing a unique finish for each project",
			"Kynar pained standard 20yr finish warranty",
		],
		"installation": {
    		"Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
    		"Substrate": "FlatWall SM panels can be installed directly to a variety of substrates, however, custom cleats may be required to provide adequate pull out resistance.",
    		"Fasteners": "#12 pancake self-drilling stainless steel for metal substrate.",
    		"Panels": "Start from corner location and install sideways first, then work upward.  For roofing applications, additional soldering may be required."
		},
		"materials": {
		  "Aluminum" : [
		    ".032\" / .040\", Kynar Painted",
		  ],
		  "Copper" : [
		    "16oz / 20oz, Cold Rolled",
		    "16oz / 20oz, Lead Coated",
		    "16oz / 20oz, Freedom Gray",
		  ],
		  "Rheinzink Zinc" : [
		    "0.8MM, PrePatina",
		    "1.0MM, PrePatina",
		  ],
		  "Stainless Steel" : [
		    ".018\" (26GA), Type 304 #2D",
		    "26GA, Type 316 #2B",
		    "24GA, Type 304 #2B",
		  ],
		},
		"colors" : {
			"Copper" : "#af6818",
			"Pre Patina Zinc" : "#646566",
			"Almond" : "#e0d6b3",
			"Bone White" : "#f4f4f4",
			"Dark Bronze" : "#211401",
			"Sandstone" : "#c6b999",
			"Silver Metallic" : "#66727a",
			"Slate Gray" : "#2f2e2c",
			"Matte Black" : "#232021",
			"Custom Painted" : "#FFF"
		},
		"illustration": "flatwall_sm",
		"jumboImg": "http://litsco.com/images/camba2.jpg",
		"detailImg": "http://litsco.com/images/streamline_flatwall_sm_alt.gif",
		"quoteSheetLink" : "http://litsco.com/assets/print_approval_flatwallsm.pdf",
		"dataSheetLink" : "http://litsco.com/assets/streamline_flatwall_sm.pdf",
		"specPageLink" : "http://litsco.com/assets/section-074113-streamline-flatwall-sm.docx"
    	},
        {
		"id": "standing_sm",
		"cat" : 1,
		"productName": "Streamline Standing Seam",
		"subHeader": "Concealed Fastener, Vertical / Standing Seam Metal Panel",
		"overview": "LITSCO's Standing Seam panel is an ideal solution for both vertical & low slope roof applications.  The standard 1\" high seam blends architectural design with superior craftsmanship.  This is a non-structural panel with a double lock seam which still provides superior weathertighness on greater than 2:12 slopes.",
		"features": [
			"Standard 8ft or 10ft lengths",
			"The 1\" high seam conceals both the one-piece clip and fastener.",
			"Can be installed on roofs or walls",
			"Kynar pained standard 20yr finish warranty",
			"Widths available to optimize pricing based on material selection"
		],
		"installation": {
    		"Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
    		"Substrate": "Standing SM panels can be installed over both metal framing & solid substrate.",
    		"Fasteners": "#12 pancake Phillips head, choice of wood or metal tip.",
    		"Panels": "Set panel from bottom/eave location and install clips as recommended.  Minimum 24\" o.c.  The double lock seam is mechanically closed after panels are installed.  Optional in-seam sealant available for ultimate in watertightness."
		},
		"materials": {
		  "Aluminum" : [
		    ".032\" / .040\", Kynar Painted",
		  ],
		  "Copper" : [
		    "16oz / 20oz, Cold Rolled",
		    "16oz / 20oz, Lead Coated",
		    "16oz / 20oz, Freedom Gray",
		  ],
		  "Rheinzink Zinc" : [
		    "0.8MM, PrePatina",
		    "1.0MM, PrePatina",
		  ],
		  "Stainless Steel" : [
		    ".018\" (26GA), Type 304 #2D",
		    "26GA, Type 316 #2B",
		    "24GA, Type 304 #2B",
		  ],
		},
		"colors" : {
			"Copper" : "#af6818",
			"Pre Patina Zinc" : "#646566",
			"Almond" : "#e0d6b3",
			"Bone White" : "#f4f4f4",
			"Dark Bronze" : "#211401",
			"Sandstone" : "#c6b999",
			"Silver Metallic" : "#66727a",
			"Slate Gray" : "#2f2e2c",
			"Matte Black" : "#232021",
			"Custom Painted" : "#FFF"
		},
		"illustration": "standing_sm",
		"jumboImg": "http://litsco.com/images/laightst_litsco_zinc_metal_panels-55-crop-u28692.jpg",
		"detailImg": "http://litsco.com/images/standingseam_alt.gif",
		"quoteSheetLink" : "http://litsco.com/assets/print_approval_standingsm.pdf",
		"dataSheetLink" : "http://litsco.com/assets/streamline_flatwall_sm.pdf"
    	}, {
		"id": "locktight_coping",
		"cat" : 2,
		"productName": "LockTight Coping",
		"subHeader": "Concealed Fastener Snap-On Coping System.  ANSI/SPRI/FM 4435/ES-1 Certified",
		"overview": "LITSCO's LockTight coping system is a snap-on metal system with anchor plates and a spring clip.  It provides faster installation times than traditional \"continuous cleat\" copings due to the anchor plate providing consistent substrate as opposed to measuring with a cleat. LockTight coping is an ideal solution to weatherproof any of the Streamline wall panel systems.  <br>LockTight coping is ANSI/SPRI/FM 4435/ES-1 Certified.",
		"features": [
			"Standard 10ft lengths",
			"Standard exterior leg 4.5\" length, Standard interior leg 4\" length.",
			"Easy snap-on installation with all concealed fastening",
			"Coping covers are manufactured for positive drainage",
			"Aluminum / Galvanized Steel anchor plates can accommodate inconsistencies in wall width",
			"Kynar pained standard 20yr finish warranty",
			"Face extenders, custom miters and profiles available."
		],
		"installation": {
    		"Anchor Plates": "Typical system requires two 18GA anchor plates for each length of coping.  Additional pieces may be required to achieve higher wind ratings or for special jobsite conditions.",
    		"Splice Plates": "Typical system requires 1 splice plate for each length of coping.  Set beads of silicone on each side to create a waterdam.",
    		"Coping Cover": "Once Anchor Plates and Splice Plates have been set, set cover and press down at anchor plate locations to engage legs.",
    		"Fasteners": "Appropriate fasteners for substrate.  Fasteners to be installed as indicated with pre-punched locations.",
    		"Miters": "Standard corner units pre-fabricated with a \"Cut-n-Tab\" miter.  Caulk and rivet in field.  Welded covers available upon request."
		},
		"materials": {
		  "Aluminum" : [
		    ".040\", .050\", .063\", Kynar Painted",
		  ],
		  "Copper" : [
		    "16oz / 20oz, Cold Rolled",
		    "16oz / 20oz, Lead Coated",
		    "16oz / 20oz, Freedom Gray",
		  ],
		  "Rheinzink Zinc" : [
		    "0.8MM, PrePatina",
		    "1.0MM, PrePatina",
		  ],
		  "Stainless Steel" : [
		    ".018\" (26GA), Type 304 #2D",
		    "26GA, Type 316 #2B",
		    "24GA, Type 304 #2B",
		  ],
		},
		"colors" : {
			"Copper" : "#af6818",
			"Pre Patina Zinc" : "#646566",
			"Almond" : "#e0d6b3",
			"Bone White" : "#f4f4f4",
			"Dark Bronze" : "#211401",
			"Sandstone" : "#c6b999",
			"Silver Metallic" : "#66727a",
			"Slate Gray" : "#2f2e2c",
			"Matte Black" : "#232021",
			"Custom Painted" : "#FFF"
		},
		"illustration": "standing_sm",
		"jumboImg": "http://litsco.com/images/laightst_litsco_zinc_metal_panels-55-crop-u28692.jpg",
		"detailImg": "http://litsco.com/images/locktite_alt_pdf_image.gif",
		"quoteSheetLink" : "http://litsco.com/assets/print_approval_locktight.pdf",
		"dataSheetLink" : "http://litsco.com/assets/streamline_flatwall_sm.pdf",
		"specPageLink" : "http://litsco.com/assets/section-077100-streamline-locktight-coping.docx",
    	}
		]

		return allData
		// {
	        // get:  function(id){
	        // 	var prodIndex = allData.map(function(obj) {
	        // 		return obj.id;
	        // 	}).indexOf(id);
	        // 	return allData[prodIndex]
        	// }
        // }
	}]);
