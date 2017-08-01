angular.module('app_litsco')
    .factory('factory_litsco', [function() {

        var allData = [{
                "id": "classic_cr",
                "cat": 1,
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
                    "Aluminum": [
                        ".040\" / .050\", Kynar Painted",
                    ],
                    "Copper": [
                        "16oz / 20oz, Cold Rolled",
                        "16oz / 20oz, Lead Coated",
                        "16oz / 20oz, Freedom Gray",
                    ],
                    "Rheinzink Zinc": [
                        "0.8MM, PrePatina",
                    ],
                    "Galvanized Steel/Galvalume": [
                        "24GA / 22GA, Kynar Painted",
                    ],
                    "Stainless Steel": [
                        ".018\" (26GA), Type 304 #2D",
                        "26GA, Type 316 #2B",
                        "24GA, Type 304 #2B",
                    ],
                },
                "colors": {
                    "Almond": "#e0d6b3",
                    "Bone White": "#f4f4f4",
                    "Dark Bronze": "#211401",
                    "Sandstone": "#c6b999",
                    "Silver Metallic": "#66727a",
                    "Slate Gray": "#2f2e2c",
                    "Matte Black": "#232021",
                    "Custom Painted": "#FFF"
                },
                "illustration": "classic_cr",
                "jumboImg": "img/jumbo_cr_full.jpg",
                "detailImg": "http://www.litsco.com/images/streamline_alt.gif",
                "dataSheetLink": "http://www.litsco.com/assets/streamline_classic_cr.pdf",
                "quoteSheetLink": "http://www.litsco.com/assets/print_approval_streamline.pdf",
                "portfolio": ['classic_cr_0', 'classic_cr_1', 'classic_cr_2', 'classic_cr_4', 'classic_cr_5'
                ]
            },
            {
                "id": "omniwall_md",
                "cat": 1,
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
                "installation": {
                    "Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
                    "Substrate": "Streamline Omniwall CL panels are intended to be installed directly onto 18GA (1/2\") or 20GA (7/8\") deep galvanized steel subgirts.  Maximum subgirt spacing is 30\".",
                    "Fasteners": "#12 pancake Phillips head, self-drilling stainless steel fastener.  Fasteners to be installed 12\"o.c.",
                    "Panels": "Starting from the bottom, panels are recommended to be installed in a staggered design.  Caulk seams with approved urethane or silicone sealant."
                },
                "materials": {
                    "Aluminum": [
                        ".040\" / .050\", Kynar Painted",
                    ],
                    "Copper": [
                        "16oz / 20oz, Cold Rolled",
                        "16oz / 20oz, Lead Coated",
                        "16oz / 20oz, Freedom Gray",
                    ],
                    "Rheinzink Zinc": [
                        "0.8MM, PrePatina",
                    ],
                    "Galvanized Steel/Galvalume": [
                        "24GA / 22GA, Kynar Painted",
                    ],
                    "Stainless Steel": [
                        ".018\" (26GA), Type 304 #2D",
                        "26GA, Type 316 #2B",
                        "24GA, Type 304 #2B",
                    ],
                },
                "colors": {
                    "Almond": "#e0d6b3",
                    "Bone White": "#f4f4f4",
                    "Dark Bronze": "#211401",
                    "Sandstone": "#c6b999",
                    "Silver Metallic": "#66727a",
                    "Slate Gray": "#2f2e2c",
                    "Matte Black": "#232021",
                    "Custom Painted": "#FFF"
                },
                "illustration": "omniwall_md",
                "jumboImg": "http://litsco.com/images/w60th_litsco_omniwallmd_panels-1-crop-u28651.jpg",
                "detailImg": "http://www.litsco.com/images/streamline_omniwall_md_alt.gif",
                "dataSheetLink": "http://www.litsco.com/assets/streamline_omniwall_md.pdf",
                "specPageLink": "http://www.litsco.com/assets/section-074113-streamline-omniwall-md.docx",
                "quoteSheetLink": "http://www.litsco.com/assets/print_approval_omniwall_md.pdf"
            },
            {
                "id": "omniwall_cl",
                "cat": 1,
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
                "installation": {
                    "Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel.",
                    "Substrate": "Streamline Omniwall CL panels are intended to be installed directly onto 18GA (1/2\") or 20GA (7/8\") deep galvanized steel subgirts.  Maximum subgirt spacing is 30\".",
                    "Fasteners": "#12 hex head, self-drilling stainless steel fastener with neoprene washer.",
                    "Panels": "Set panel direct to subgirt,  set joint to 5/8\" wide, set backer rod and caulk joint with high performance Pecora silicone sealant."
                },
                "materials": {
                    "Aluminum": [
                        ".063\" / .080\", Kynar Painted",
                        ".090\", Custom Kynar Painted"
                    ]
                },
                "colors": {
                    "Bone White": "#f4f4f4",
                    "Dark Bronze": "#211401",
                    "Matte Black": "#232021",
                    "Sandstone": "#c6b999",
                    "Silver Metallic": "#66727a",
                    "Custom Painted": "#FFF"
                },
                "illustration": "omniwall_cl",
                "jumboImg": "http://litsco.com/images/kutz_cl_22.jpg",
                "detailImg": "http://www.litsco.com/images/streamline_omniwall_cl_alt.gif",
                "dataSheetLink": "http://www.litsco.com/assets/streamline_omniwall_cl.pdf",
                "specPageLink": "http://www.litsco.com/assets/section-074113-streamline-omniwall-cl.docx",
                "quoteSheetLink": "http://www.litsco.com/assets/print_approval_omniwall_cl.pdf"
            },
            {
                "id": "flushwall_tg",
                "cat": 1,
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
                    "Aluminum": [
                        ".040\" / .050\", Kynar Painted",
                    ],
                    "Copper": [
                        "16oz / 20oz, Cold Rolled",
                        "16oz / 20oz, Lead Coated",
                        "16oz / 20oz, Freedom Gray",
                    ],
                    "Rheinzink Zinc": [
                        "0.8MM, PrePatina",
                    ],
                    "Galvanized Steel/Galvalume": [
                        "24GA / 22GA, Kynar Painted",
                    ],
                    "Stainless Steel": [
                        ".018\" (26GA), Type 304 #2D",
                        "26GA, Type 316 #2B",
                        "24GA, Type 304 #2B",
                    ],
                },
                "colors": {
                    "Almond": "#e0d6b3",
                    "Bone White": "#f4f4f4",
                    "Dark Bronze": "#211401",
                    "Sandstone": "#c6b999",
                    "Silver Metallic": "#66727a",
                    "Slate Gray": "#2f2e2c",
                    "Matte Black": "#232021",
                    "Custom Painted": "#FFF"
                },
                "illustration": "flushwall_tg",
                "jumboImg": "http://litsco.com/images/laightst_litsco_zinc_metal_panels-15.jpg",
                "detailImg": "http://litsco.com/images/streamline_flush_tg_alt.gif",
                "dataSheetLink": "http://litsco.com/assets/streamline_flush_tg.pdf"
            },
            {
                "id": "flatwall_sm",
                "cat": 1,
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
                    "Aluminum": [
                        ".032\" / .040\", Kynar Painted",
                    ],
                    "Copper": [
                        "16oz / 20oz, Cold Rolled",
                        "16oz / 20oz, Lead Coated",
                        "16oz / 20oz, Freedom Gray",
                    ],
                    "Rheinzink Zinc": [
                        "0.8MM, PrePatina",
                        "1.0MM, PrePatina",
                    ],
                    "Stainless Steel": [
                        ".018\" (26GA), Type 304 #2D",
                        "26GA, Type 316 #2B",
                        "24GA, Type 304 #2B",
                    ],
                },
                "colors": {
                    "Copper": "#af6818",
                    "Pre Patina Zinc": "#646566",
                    "Almond": "#e0d6b3",
                    "Bone White": "#f4f4f4",
                    "Dark Bronze": "#211401",
                    "Sandstone": "#c6b999",
                    "Silver Metallic": "#66727a",
                    "Slate Gray": "#2f2e2c",
                    "Matte Black": "#232021",
                    "Custom Painted": "#FFF"
                },
                "illustration": "flatwall_sm",
                "jumboImg": "http://litsco.com/images/camba2.jpg",
                "detailImg": "http://litsco.com/images/streamline_flatwall_sm_alt.gif",
                "quoteSheetLink": "http://litsco.com/assets/print_approval_flatwallsm.pdf",
                "dataSheetLink": "http://litsco.com/assets/streamline_flatwall_sm.pdf",
                "specPageLink": "http://litsco.com/assets/section-074113-streamline-flatwall-sm.docx"
            },
            {
                "id": "standing_sm",
                "cat": 1,
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
                    "Aluminum": [
                        ".032\" / .040\", Kynar Painted",
                    ],
                    "Copper": [
                        "16oz / 20oz, Cold Rolled",
                        "16oz / 20oz, Lead Coated",
                        "16oz / 20oz, Freedom Gray",
                    ],
                    "Rheinzink Zinc": [
                        "0.8MM, PrePatina",
                        "1.0MM, PrePatina",
                    ],
                    "Stainless Steel": [
                        ".018\" (26GA), Type 304 #2D",
                        "26GA, Type 316 #2B",
                        "24GA, Type 304 #2B",
                    ],
                },
                "colors": {
                    "Copper": "#af6818",
                    "Pre Patina Zinc": "#646566",
                    "Almond": "#e0d6b3",
                    "Bone White": "#f4f4f4",
                    "Dark Bronze": "#211401",
                    "Sandstone": "#c6b999",
                    "Silver Metallic": "#66727a",
                    "Slate Gray": "#2f2e2c",
                    "Matte Black": "#232021",
                    "Custom Painted": "#FFF"
                },
                "illustration": "standing_sm",
                "jumboImg": "http://litsco.com/images/laightst_litsco_zinc_metal_panels-55-crop-u28692.jpg",
                "detailImg": "http://litsco.com/images/standingseam_alt.gif",
                "quoteSheetLink": "http://litsco.com/assets/print_approval_standingsm.pdf",
                "dataSheetLink": "http://litsco.com/assets/streamline_flatwall_sm.pdf"
            }, {
                "id": "locktight_coping",
                "cat": 2,
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
                    "Miters": "Standard corner units pre-fabricated with a \"Cut-n-Tab\" miter.  Caulk and rivet in field.  Welded covers available upon request.",
                    "Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel."
                },
                "materials": {
                    "Aluminum": [
                        ".040\", .050\", .063\", Baked Enamel",
                        ".040\", .050\", .063\", Kynar Painted",
                    ],
                    "Galvanized Steel": [
                        "24GA, 22GA, Kynar Painted"
                    ],
                },
                "colors": {
                    "Pre Patina Zinc": "#646566",
                    "Almond": "#e0d6b3",
                    "Bone White": "#f4f4f4",
                    "Dark Bronze": "#211401",
                    "Sandstone": "#c6b999",
                    "Silver Metallic": "#66727a",
                    "Slate Gray": "#2f2e2c",
                    "Matte Black": "#232021",
                    "Custom Painted": "#FFF"
                },
                "illustration": "locktight",
                "jumboImg": "http://litsco.com/images/brh5.jpg",
                "detailImg": "http://litsco.com/images/locktite_alt_pdf_image.gif",
                "quoteSheetLink": "http://litsco.com/assets/print_approval_locktight.pdf",
                "dataSheetLink": "http://litsco.com/assets/locktight_coping.pdf",
                "specPageLink": "http://litsco.com/assets/section-077100-streamline-locktight-coping.docx",
                "installVideo": "uvqErM1BzQw"
            }, {
                "id": "flashdown_fascia",
                "cat": 2,
                "productName": "Flashdown Fascia",
                "subHeader": "Non-Penetrating, Concealed Fastener, Snap-On Fascia System.  ANSI/SPRI/FM 4435/ES-1 Certified",
                "overview": "LITSCO's Flashdown Fascia system is a snap-on edge metal system with spring cleat.  It provides faster installation times than traditional \"continuous cleat\" gravel stops.  Due to its non-penetrating design, this system is compatible with all roof systems: EPDM, TPO, PVC, SBS, and liquid membranes. <br>Flashdown Fascia is ANSI/SPRI/FM 4435/ES-1 Certified.",
                "features": [
                    "Standard 10ft lengths",
                    "Standard Face Sizes: 4-3/4\", 6-3/4\", or 9\"",
                    "Easy snap-on installation with all concealed fastening",
                    "Face-only fastening ties down roof system edge without stripping in flashing",
                    "Stainless steel anchor cleat can be installed first to stage roof construction",
                    "Kynar pained standard 20yr finish warranty",
                    "Face extenders, custom miters and profiles available."
                ],
                "installation": {
                    "Anchor Cleat": "Typical system requires 1 piece per length of cover.",
                    "Fascia Cover": "Snap on cover, install 1 splice plate per length of cover.",
                    "Fasteners": "Appropriate fasteners for substrate.  Fasteners to be installed as indicated with pre-punched locations.",
                    "Miters": "Standard folded corner unit miter.  Caulk and rivet in field.  Welded covers available upon request.",
                    "Trim": "All flashing and trim will be fabricated by LITSCO or a qualified fabricator. Flashing shall be .032\" - .040\" aluminum or 24ga steel."
                },
                "materials": {
                    "Aluminum": [
                        ".040\", .050\", Baked Enamel",
                        ".040\", .050\", Kynar Painted",
                    ],
                    "Galvanized Steel": [
                        "24GA, 22GA, Kynar Painted"
                    ],
                },
                "colors": {
                    "Pre Patina Zinc": "#646566",
                    "Almond": "#e0d6b3",
                    "Bone White": "#f4f4f4",
                    "Dark Bronze": "#211401",
                    "Sandstone": "#c6b999",
                    "Silver Metallic": "#66727a",
                    "Slate Gray": "#2f2e2c",
                    "Matte Black": "#232021",
                    "Custom Painted": "#FFF"
                },
                "illustration": "flashdown",
                "jumboImg": "http://litsco.com/images/brh5.jpg",
                "detailImg": "http://litsco.com/images/flashdown_alt.gif",
                "quoteSheetLink": "http://litsco.com/assets/print_approval_flashdown.pdf",
                "dataSheetLink": "http://litsco.com/assets/flashdown_fascia.pdf",
                "specPageLink": "http://litsco.com/assets/section-077120-streamline-flashdown-fascia2.docx",
                "installVideo": "1GMUaw2bUZ0"
            }, {
                "id": "mortartight_thruwall",
                "cat": 2,
                "productName": "Mortartight Thruwall",
                "subHeader": "3-Way Keyed/Sawtooth, Masonry Thru-Wall and Cap Flashing",
                "overview": "LITSCO'S  Mortartight is a metal counterflashing with optional 2-piece receiver and base flashing insert.  This style is very useful when masonry wall construction and roof installation occur at different times.  Saw-tooth patterned metal with interlocking side laps cuts off moisture that can seep into masonry construction.  For smooth thru-wall receiver, please visit our Lit-Lok page.",
                "features": [
                    "Provides 3-way mechanical bond in all directions in the mortar setting bed and weep-hole drainage.",
                    "Commonly found under coping stones, thru-wall flashing in masonry walls and elsewhere.",
                    "Notched insert and receiver allows for smooth sidelap between pieces",
                    "Caps are machine fabricated in 54\" lengths",
                    "Longer 8\'-0\" (96\") lengths for the optional insert",
                    "Automated manufacturing increases productivity"
                ],
                "installation": {
                    "MortarTight": "Set in masonry mortar.  If 2 piece design, see insert below.",
                    "Side Laps": "3” as 2-piece receiver or 1.5” for typical profile.",
                    "Insert": "Offset joints from receiver, insert to maximum depth as metal allows.",
                    "Miters": "Standard corner units are pre-fabricated welded units."
                },
                "materials": {
                    "Copper": [
                        "16oz / 20oz, Cold Rolled",
                        "16oz / 20oz, Lead Coated",
                        "16oz / 20oz, Freedom Gray",
                    ],
                    "Stainless Steel": [
                        ".018\" (26GA), Type 304 #2D",
                        "26GA, Type 316 #2B",
                    ]
                },
                "colors": {
                    "Copper": "#af6818",
                    "Freedom Gray": "#646566",
                    "Lead Coated": "#66727a",
                    "Stainless Steel": "#c5c4c4"
                },
                "illustration": "mortartight",
                "jumboImg": "",
                "detailImg": "http://litsco.com/images/mortar_tight_allt.gif",
                "quoteSheetLink": "http://litsco.com/assets/print_approval_mortartight.pdf",
                "dataSheetLink": "http://litsco.com/assets/mortartight_flashing.pdf",
            }, {
                "id": "2-piece_litlok",
                "cat": 2,
                "productName": "Lit-Lok Flashing",
                "subHeader": "2 Piece, Smooth, Thru-Wall Masonry Flashing",
                "overview": "LITSCO'S  LIT-LOK is a Metal counterflashing with separate masonry flashing receiver and base flashing insert.  This style is very useful when masonry wall construction and roof installation occur at different times.  For 3 way keyed/sawtooth mortar receiver, please visit our MortarTight page.",
                "features": [
                    "Insert locks in without additional fasteners installed after roof flashing to allow proper construction staging.",
                    "Notched insert and receiver allows for smooth sidelap between pieces.",
                    "Button punched insert locks in to receiver for strong bond.",
                    "Insert can be removed for roof base flashing maintenance or repair.",
                    "Standard 8\'-0\" (96\") lengths for the optional insert",
                    "Receiver available in standard profiles: Thru-wall, Surface Mount, Panel Closure, Under-coping types."
                ],
                "installation": {
                    "Receiver": "Set in masonry mortar.",
                    "Insert": "Offset joints from receiver, insert to maximum depth as metal allows.",
                    "Miters": "Standard corner units are pre-fabricated welded units."
                },
                "materials": {
                    "Aluminum": [
                        ".032\" / .040\", Mill Finish",
                        ".032\" / .040\", Kynar Painted",
                    ],
                    "Copper": [
                        "16oz / 20oz, Cold Rolled",
                        "16oz / 20oz, Lead Coated",
                        "16oz / 20oz, Freedom Gray",
                    ],
                    "Stainless Steel": [
                        ".018\" (26GA), Type 304 #2D",
                        "26GA, Type 316 #2B",
                    ]
                },
                "colors": {
                    "Copper": "#af6818",
                    "Freedom Gray": "#646566",
                    "Lead Coated": "#66727a",
                    "Stainless Steel": "#c5c4c4"
                },
                "illustration": "litlok",
                "jumboImg": "",
                "detailImg": "http://litsco.com/images/litlok_alt.jpg",
                "quoteSheetLink": "http://litsco.com/assets/print_approval_litlok.pdf",
                "dataSheetLink": "http://litsco.com/assets/litlok_flashing.pdf",
            }, {
                "id": "lead_tees",
                "cat": 2,
                "productName": "Lead Tees",
                "subHeader": "Extruded Joint Closure for Coping Stones",
                "overview": "Closes joints between parapet cap stones permanently and maintains old-world landmark or any coping stone replacement projects.  The Lead Tee can be used in all coping stone joints.",
                "features": [
                    "Available in two sizes: 1-1/2\" & 7/8\" wide profiles.",
                    "6'-0\" (72\") lengths."
                ],
                "installation": {
                    "Sealant": "Ensure clean joint, then set in high performance Silicone sealant.",
                    "Lead Tee": "Wrap around coping stone, cut to required length in field.",
                },
                "materials": {
                    "Lead": [
                        "High purity grade lead meets Federal Specification QQ-L-171 grade B"
                    ]
                },
                "illustration": "lead_tee",
                "jumboImg": "http://litsco.com/images/lead_tee_alt.gif",
                "detailImg": "http://litsco.com/images/lead_tee.gif",
                "quoteSheetLink": "http://litsco.com/estore/#!/Sheetmetal-Flashings/c/9007032/offset=0&sort=nameAsc",
                "dataSheetLink": "http://litsco.com/assets/joint_lead_tee.pdf",
            }, {
                "id": "roofing_supplies",
                "cat": 3,
                "vendorName": "Johns Manville",
                "vendorLogo": "jm.png"
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