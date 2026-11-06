// HITEX PLUS Master Products Database
// Comprehensive technical, application, and media data for all 12 products

const A = '/assets/';
const P = '/assets/product_details/';

export const productsData = [
  {
    id: 'house-wires',
    numericId: 1,
    name: 'Premium Copper House Wire',
    shortName: 'House Wires',
    category: 'HOUSE WIRE',
    bannerTitle: {
      prefix: 'Premium Copper ',
      highlight: 'House Wire'
    },
    bannerSubtitle: 'Flame-retardant PVC insulated copper wiring engineered for homes, shops and light commercial loads.',
    breadcrumbCategory: 'House Wire',
    tagline: 'High quality copper conductor with reliable insulation for safe and long-lasting performance.',
    appTag: 'Residential',
    certTag: 'ISI Certified',
    cardDesc: 'Safe & Reliable for Homes',
    mainCardImg: `${A}household_wires_clean.jpg`,
    badges: [
      {
        line1: 'High',
        line2: 'Conductivity',
        icon: 'zap'
      },
      {
        line1: 'Durable',
        line2: 'Insulation',
        icon: 'shield'
      },
      {
        line1: 'Safe',
        line2: 'Performance',
        icon: 'check'
      },
      {
        line1: 'Multi',
        line2: 'Purpose',
        icon: 'grid'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${P}thumb1_red.png`,
        full: `${P}main_red_coil.webp`,
        alt: 'HITEX PLUS Premium Copper House Wire - Red 90m Coil'
      },
      {
        id: 1,
        thumb: `${P}thumb2_blue.png`,
        full: `${P}main_blue_coil.webp`,
        alt: 'HITEX PLUS Premium Copper House Wire - Blue 90m Coil'
      },
      {
        id: 2,
        thumb: `${P}thumb3_stripped.png`,
        full: `${P}main_stripped.webp`,
        alt: 'HITEX PLUS Stripped Copper Wire Strands'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS High Grade Packaging Box'
      }
    ],
    valueCards: [
      {
        title: 'Reliable Quality',
        desc: 'Consistent performance you can trust.',
        icon: 'award'
      },
      {
        title: 'Easy Installation',
        desc: 'Flexible design for hassle-free use.',
        icon: 'wrench'
      },
      {
        title: 'Long Life',
        desc: 'Built for durability and extended service.',
        icon: 'clock'
      },
      {
        title: 'Trusted Manufacturer',
        desc: 'An Indian brand with a strong legacy.',
        icon: 'users'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Engineered for Uncompromising Safety & Performance',
      desc: 'HITEX PLUS Premium Copper House Wire is designed to deliver safe, reliable and efficient electrical performance for residential, commercial and industrial applications. Manufactured with high purity copper and high-grade insulation, it ensures long-lasting durability and peace of mind in every connection.',
      bannerImg: `${P}overview_banner.png`
    },
    applications: [
      {
        title: 'Residential Housing & Apartments',
        desc: 'Internal conduit wiring for lighting, power sockets, air conditioning, and household appliances.'
      },
      {
        title: 'Commercial Buildings & Offices',
        desc: 'High-reliability circuits for modern office towers, retail complexes, shopping malls, and hospitals.'
      },
      {
        title: 'Industrial Control & Machinery',
        desc: 'Low voltage control panels, motor starters, distribution boards, and manufacturing plants.'
      },
      {
        title: 'Concealed & Surface Conduit Systems',
        desc: 'Highly flexible stranded conductors enable effortless pulling through PVC conduits without insulation tear.'
      }
    ],
    keyFeatures: [
      {
        title: '99.99% Pure Electrolytic Copper',
        desc: 'Ensures maximum electrical conductivity, minimal resistance, and lower power consumption over decades of use.'
      },
      {
        title: 'Flame Retardant (FR) Grade PVC',
        desc: 'Specially formulated PVC insulation self-extinguishes fire and prevents flame propagation during short-circuit faults.'
      },
      {
        title: 'High Thermal & Overload Stability',
        desc: 'Withstands high continuous operating temperatures up to 70°C and transient short-circuit heat without degradation.'
      },
      {
        title: '100% Spark Tested at 6000 Volts',
        desc: 'Every meter of wire undergoes rigorous high-voltage on-line spark testing to guarantee zero pinholes or breakdown.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'IS 694 : 2010 (License No. CM/L-7576290)' },
      { label: 'Available Sizes Range', value: '0.5 sq. mm to 95.0 sq. mm' },
      { label: 'Voltage Rating (Uo/U)', value: 'Up to and including 1100 Volts' },
      { label: 'Conductor Class', value: 'Class 2 / Class 5 Electrolytic Annealed Plain Copper as per IS 8130' },
      { label: 'Maximum Continuous Conductor Temp.', value: '70°C for General Purpose / 85°C for Heat Resistant Grade' },
      { label: 'Insulation Resistance Constant', value: 'Minimum 0.036 Mega Ohm-km at 70°C' },
      { label: 'Standard Packing', value: '90 meters coils packed in protective shrink wrap and master cartons' }
    ],
    specifications: [
      { label: 'Product Name', value: 'Premium Copper House Wire' },
      { label: 'Conductor Material', value: 'High Purity Copper' },
      { label: 'Insulation Material', value: 'PVC (FR Grade)' },
      { label: 'Voltage Grade', value: 'Up to 1100 V (General Purpose)' },
      { label: 'Available Sizes', value: '0.5 sq. mm to 95.0 sq. mm' },
      { label: 'Available Colours', value: 'Red, Blue, Yellow, Black, Green (and more)' },
      { label: 'Standard', value: 'As per IS specifications (Typical)' },
      { label: 'Application', value: 'Residential, Commercial & Industrial Use' }
    ]
  },
  {
    id: 'industrial-cables',
    numericId: 2,
    name: 'Multi-Core Industrial Cables',
    shortName: 'Industrial Cables',
    category: 'INDUSTRIAL CABLE',
    bannerTitle: {
      prefix: 'Heavy Duty ',
      highlight: 'Industrial Cables'
    },
    bannerSubtitle: 'Tough PVC and XLPE insulated multi-core cables engineered for severe mechanical, thermal and chemical environments.',
    breadcrumbCategory: 'Industrial Cables',
    tagline: 'Built to withstand demanding manufacturing environments and heavy industrial power distribution.',
    appTag: 'Industrial',
    certTag: 'RoHS Compliant',
    cardDesc: 'Built for Performance',
    mainCardImg: `${A}unarmoured_cables.jpg`,
    badges: [
      {
        line1: 'Heavy',
        line2: 'Duty',
        icon: 'shield'
      },
      {
        line1: 'High Load',
        line2: 'Capacity',
        icon: 'zap'
      },
      {
        line1: 'Abrasion',
        line2: 'Resistant',
        icon: 'wrench'
      },
      {
        line1: 'Multi',
        line2: 'Core',
        icon: 'grid'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}unarmoured_cables.jpg`,
        full: `${A}unarmoured_cables.jpg`,
        alt: 'HITEX PLUS Multi-Core Industrial Cables'
      },
      {
        id: 1,
        thumb: `${A}pvc_insulated_cable.jpg`,
        full: `${A}pvc_insulated_cable.jpg`,
        alt: 'HITEX PLUS Heavy Duty PVC Industrial Cable'
      },
      {
        id: 2,
        thumb: `${A}copper_armoured_cable.jpg`,
        full: `${A}copper_armoured_cable.jpg`,
        alt: 'HITEX PLUS Armoured Industrial Cable Cutaway'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Certified Industrial Cable Packaging'
      }
    ],
    valueCards: [
      {
        title: 'Rugged Build',
        desc: 'Engineered for harsh factory shopfloors and chemical plants.',
        icon: 'shield'
      },
      {
        title: 'High Tensile Strength',
        desc: 'Armoured and unarmoured sheaths resist mechanical crushing.',
        icon: 'wrench'
      },
      {
        title: 'Continuous Uptime',
        desc: 'Designed for 24/7 non-stop industrial operations.',
        icon: 'clock'
      },
      {
        title: 'Certified Standards',
        desc: 'Manufactured and certified to IS 1554 and IEC 60502.',
        icon: 'award'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Uncompromising Power for Heavy Industry & Manufacturing',
      desc: 'HITEX PLUS Industrial Cables are specifically engineered to provide continuous power transmission in heavy manufacturing units, cement factories, steel plants, and automated processing lines. With robust outer jacketing and heat-resistant insulation, they withstand extreme vibrational and thermal stresses.',
      bannerImg: `${A}hitex_factory_building.png`
    },
    applications: [
      {
        title: 'Manufacturing Plants & Factories',
        desc: 'Primary power supply to heavy motors, compressors, stamping presses, and electric furnaces.'
      },
      {
        title: 'Control Rooms & Distribution',
        desc: 'Interconnection between power distribution switchgear, transformer bays, and sub-panels.'
      },
      {
        title: 'Chemical & Processing Units',
        desc: 'Tough outer sheath formulation resists oil, grease, mild acids, and industrial solvents.'
      },
      {
        title: 'Overhead Trays & Ducts',
        desc: 'High mechanical flexural strength facilitates easy laying in cable ladders and perforated trays.'
      }
    ],
    keyFeatures: [
      {
        title: 'High Electrolytic Grade Copper / Aluminium',
        desc: 'Optimal conductivity with minimal resistive I²R heat losses during continuous high-amp loads.'
      },
      {
        title: 'Extruded PVC/XLPE Core Insulation',
        desc: 'Superior dielectric strength prevents insulation breakdown even under cyclical thermal overloads.'
      },
      {
        title: 'Tough Protective Outer Jacket',
        desc: 'Flame retardant, UV stabilized, and moisture resistant compound prevents environmental ingress.'
      },
      {
        title: 'Rigorous Mechanical & Spark Testing',
        desc: 'Batch tested for tensile elongation, tear resistance, and high-voltage dielectric integrity.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'IS 1554 (Part 1) / IS 7098 (Part 1) / IEC 60502' },
      { label: 'Available Sizes Range', value: '1.5 sq. mm to 630 sq. mm (2 to 61 Cores)' },
      { label: 'Voltage Rating (Uo/U)', value: '650/1100 Volts (1.1 kV Grade)' },
      { label: 'Conductor Material', value: 'High Conductivity Electrolytic Copper / EC Grade Aluminium' },
      { label: 'Continuous Operating Temp', value: '70°C for PVC / 90°C for XLPE Insulation' },
      { label: 'Short Circuit Temperature', value: '160°C for PVC / 250°C for XLPE (1 sec duration)' },
      { label: 'Standard Packing', value: '500m / 1000m on heavy duty wooden or steel drums' }
    ],
    specifications: [
      { label: 'Product Name', value: 'Multi-Core Industrial Cables' },
      { label: 'Conductor Material', value: 'Electrolytic Copper / EC Grade Aluminium' },
      { label: 'Insulation Material', value: 'Heavy Duty PVC / XLPE Grade' },
      { label: 'Voltage Grade', value: 'Up to 1100 V (1.1 kV Grade)' },
      { label: 'Available Sizes', value: '1.5 sq. mm to 630 sq. mm' },
      { label: 'Available Colours', value: 'Red, Yellow, Blue, Black (Sheath: Black/Grey)' },
      { label: 'Standard', value: 'IS 1554 / IS 7098 / IEC 60502' },
      { label: 'Application', value: 'Heavy Industrial Plants & Manufacturing Units' }
    ]
  },
  {
    id: 'control-cables',
    numericId: 3,
    name: 'High Shielding Control Cables',
    shortName: 'Control Cables',
    category: 'CONTROL CABLE',
    bannerTitle: {
      prefix: 'Precision Signal & ',
      highlight: 'Control Cables'
    },
    bannerSubtitle: 'Multi-core shielded control cables engineered for automated industrial processes, PLCs and instrumentation.',
    breadcrumbCategory: 'Control Cables',
    tagline: 'Clean, interference-free signal transmission and precise equipment control.',
    appTag: 'Industrial',
    certTag: 'REACH Compliant',
    cardDesc: 'Precision & Stability',
    mainCardImg: `${A}pvc_insulated_cable.jpg`,
    badges: [
      {
        line1: 'EMI',
        line2: 'Shielded',
        icon: 'shield'
      },
      {
        line1: 'High',
        line2: 'Precision',
        icon: 'check'
      },
      {
        line1: 'Flame',
        line2: 'Retardant',
        icon: 'flame'
      },
      {
        line1: 'Multi',
        line2: 'Core',
        icon: 'grid'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}pvc_insulated_cable.jpg`,
        full: `${A}pvc_insulated_cable.jpg`,
        alt: 'HITEX PLUS High Shielding Control Cables'
      },
      {
        id: 1,
        thumb: `${A}multicore_flexible_cable.jpg`,
        full: `${A}multicore_flexible_cable.jpg`,
        alt: 'HITEX PLUS Multi-Core Flexible Control Wire'
      },
      {
        id: 2,
        thumb: `${A}unarmoured_cables.jpg`,
        full: `${A}unarmoured_cables.jpg`,
        alt: 'HITEX PLUS Control Cable Strands & Screen'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Cable Package & Certification'
      }
    ],
    valueCards: [
      {
        title: 'Zero EMI Noise',
        desc: 'Advanced shielding blocks interference from nearby heavy motors.',
        icon: 'shield'
      },
      {
        title: 'Pinpoint Accuracy',
        desc: 'Maintains signal integrity for sensitive digital and analog inputs.',
        icon: 'check'
      },
      {
        title: 'Extended Flex Life',
        desc: 'Resists repeated bending in dynamic cable drag chains.',
        icon: 'clock'
      },
      {
        title: 'Numbered Cores',
        desc: 'Sequentially numbered cores ensure fast, error-free panel wiring.',
        icon: 'wrench'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Precision Automation & Reliable Equipment Interlocking',
      desc: 'HITEX PLUS Control Cables are built for the modern smart factory. Whether linking sensors, PLCs, motor control centers (MCC), or relay racks, they provide robust noise immunity against electromagnetic interference, preventing erroneous switching and expensive system downtime.',
      bannerImg: `${A}cinematic_hero_banner.png`
    },
    applications: [
      {
        title: 'PLC & SCADA Control Systems',
        desc: 'Critical signal transfer between central programmable controllers and remote I/O racks.'
      },
      {
        title: 'Switchgear & Sub-station Automation',
        desc: 'Interconnection of protection relays, circuit breakers, and auxiliary control panels.'
      },
      {
        title: 'Robotics & CNC Machinery',
        desc: 'Flexible multi-core cabling in machine tool control panels and automated assembly lines.'
      },
      {
        title: 'Process Instrumentation',
        desc: 'Connecting pressure transmitters, temperature sensors, and proportional control valves.'
      }
    ],
    keyFeatures: [
      {
        title: '100% Aluminium Mylar / Copper Braid Shielding',
        desc: 'Provides maximum protection against electromagnetic and radio frequency interference.'
      },
      {
        title: 'Annealed Plain Copper Conductors',
        desc: 'High conductivity plain annealed copper conforms to IS 8130 Class 2 or Class 5 standards.'
      },
      {
        title: 'Core Numbering for Rapid Assembly',
        desc: 'Each core features distinct black numbering on white insulation or standard color coding.'
      },
      {
        title: 'Oil & Moisture Resistant Sheath',
        desc: 'Tough outer jacket prevents swelling, softening, and premature deterioration in oily plant environments.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'IS 1554 (Part 1) / BS 5308 / IEC 60227' },
      { label: 'Available Sizes Range', value: '0.5 sq. mm to 2.5 sq. mm (2 to 61 Cores)' },
      { label: 'Voltage Rating (Uo/U)', value: 'Up to and including 1100 Volts' },
      { label: 'Conductor Material', value: 'High Purity Annealed Plain Copper (Class 2 / Class 5)' },
      { label: 'Shielding / Screening', value: 'Aluminium-Mylar Tape with Tinned Copper Drain Wire / Copper Braid' },
      { label: 'Operating Temperature', value: '-15°C to +70°C (+85°C for HR grade)' },
      { label: 'Standard Packing', value: '500m / 1000m on wooden drums or 100m spools' }
    ],
    specifications: [
      { label: 'Product Name', value: 'High Shielding Control Cables' },
      { label: 'Conductor Material', value: 'High Purity Annealed Plain Copper' },
      { label: 'Insulation Material', value: 'PVC Type A / HR PVC / XLPE' },
      { label: 'Voltage Grade', value: 'Up to 1100 V' },
      { label: 'Available Sizes', value: '0.5 sq. mm to 2.5 sq. mm (2 to 61 Cores)' },
      { label: 'Available Colours', value: 'Core numbered / Colour coded with Black Sheath' },
      { label: 'Standard', value: 'IS 1554 (Part 1) / BS 5308' },
      { label: 'Application', value: 'PLC Automation, SCADA, Switchgear & Control Panels' }
    ]
  },
  {
    id: 'xlpe-armoured-cable',
    numericId: 4,
    name: 'XLPE Aluminium/Copper Armoured Cable',
    shortName: 'Armoured Cables',
    category: 'POWER CABLE',
    bannerTitle: {
      prefix: 'Heavy Duty ',
      highlight: 'Armoured Power Cable'
    },
    bannerSubtitle: 'Steel tape & round wire armoured cables built for underground direct burial and high-load utility grids.',
    breadcrumbCategory: 'Power Cables',
    tagline: 'Extra protection beneath the surface with maximum mechanical impact resistance.',
    appTag: 'Infrastructure',
    certTag: 'CE Certified',
    cardDesc: 'Strength for Growth',
    mainCardImg: `${A}copper_armoured_cable.jpg`,
    badges: [
      {
        line1: 'Steel',
        line2: 'Armoured',
        icon: 'shield'
      },
      {
        line1: 'Direct',
        line2: 'Burial',
        icon: 'wrench'
      },
      {
        line1: '90°C',
        line2: 'XLPE',
        icon: 'zap'
      },
      {
        line1: '30+ Yr',
        line2: 'Life',
        icon: 'clock'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}copper_armoured_cable.jpg`,
        full: `${A}copper_armoured_cable.jpg`,
        alt: 'HITEX PLUS Copper Armoured Heavy Power Cable'
      },
      {
        id: 1,
        thumb: `${A}xlpe_cop_allu_unarm_arm_cable.jpg`,
        full: `${A}xlpe_cop_allu_unarm_arm_cable.jpg`,
        alt: 'HITEX PLUS XLPE Armoured / Unarmoured Cable Line'
      },
      {
        id: 2,
        thumb: `${A}1000_sqmm_single_core_aluminium_cable.jpeg`,
        full: `${A}1000_sqmm_single_core_aluminium_cable.jpeg`,
        alt: 'HITEX PLUS Heavy Conductor Cross Section'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Power Cable Package Box'
      }
    ],
    valueCards: [
      {
        title: 'Crush Resistant',
        desc: 'Galvanized steel wire or strip armour protects against rock and soil pressure.',
        icon: 'shield'
      },
      {
        title: 'Direct Trench Burial',
        desc: 'No dedicated concrete duct required; safely buries in standard underground trenches.',
        icon: 'wrench'
      },
      {
        title: 'Higher Current Rating',
        desc: 'XLPE insulation operates at 90°C, providing higher current ampacity than PVC.',
        icon: 'zap'
      },
      {
        title: 'Long Life Warranty',
        desc: 'Designed for 30+ years of maintenance-free underground grid distribution.',
        icon: 'clock'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Underground Strength for Utility Grids & Heavy Infrastructure',
      desc: 'HITEX PLUS XLPE Armoured Power Cables provide robust, uninterrupted energy distribution under the most challenging soil and installation conditions. Featuring galvanized steel armour, moisture barrier inner bedding, and high-purity conductor cores, they prevent costly underground line faults.',
      bannerImg: `${A}image section.png`
    },
    applications: [
      {
        title: 'Underground Utility Distribution',
        desc: 'Primary power cabling between main electrical substations and municipal distribution grids.'
      },
      {
        title: 'Heavy Industrial Complex Intake',
        desc: 'Incoming power mains for steel mills, cement plants, chemical complexes, and ports.'
      },
      {
        title: 'Commercial Infrastructure Projects',
        desc: 'Underground power feeds for airports, metro stations, railway yards, and highway lighting.'
      },
      {
        title: 'Direct Burial Outdoor Trenches',
        desc: 'Direct soil burial without conduit, saving substantial civil installation and pipe costs.'
      }
    ],
    keyFeatures: [
      {
        title: 'Galvanized Steel Strip / Wire Armour (GSWA / GSSA)',
        desc: 'Provides supreme mechanical strength against external mechanical impact and rodent attack.'
      },
      {
        title: 'Cross-Linked Polyethylene (XLPE) Insulation',
        desc: 'Thermal rating up to 90°C continuous and 250°C short-circuit withstand for 5 seconds.'
      },
      {
        title: 'Extruded Moisture-Proof Inner Sheath',
        desc: 'Serves as an impermeable bed between cores and steel armour to prevent water ingress.'
      },
      {
        title: 'UV & Chemical Resistant Outer Sheath',
        desc: 'Specially compounded ST-2 PVC or LSZH compound formulated for high chemical resistance.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'IS 7098 (Part 1 & 2) / IEC 60502-1 & 2' },
      { label: 'Available Sizes Range', value: '25 sq. mm to 1000 sq. mm (1 to 4 Cores)' },
      { label: 'Voltage Rating (Uo/U)', value: '1.1 kV, 3.3 kV, 6.6 kV, 11 kV and 33 kV Grade' },
      { label: 'Conductor Material', value: 'EC Grade Aluminium / Electrolytic Copper (Class 2 Stranded)' },
      { label: 'Armour Type', value: 'Galvanised Steel Round Wire (WA) / Galvanised Steel Flat Strip (FA)' },
      { label: 'Max Continuous Temp', value: '90°C continuous / 250°C short-circuit' },
      { label: 'Standard Packing', value: 'Continuous lengths on treated heavy wooden or steel drums' }
    ],
    specifications: [
      { label: 'Product Name', value: 'XLPE Aluminium/Copper Armoured Cable' },
      { label: 'Conductor Material', value: 'EC Grade Aluminium / Electrolytic Copper' },
      { label: 'Insulation Material', value: 'Cross-Linked Polyethylene (XLPE)' },
      { label: 'Voltage Grade', value: '1.1 kV up to 33 kV' },
      { label: 'Available Sizes', value: '25 sq. mm to 1000 sq. mm' },
      { label: 'Available Colours', value: 'Red, Yellow, Blue, Black (Outer Sheath: Black)' },
      { label: 'Standard', value: 'IS 7098 (Part 1 & 2) / IEC 60502-2' },
      { label: 'Application', value: 'Underground Power Transmission, Utility Grids & Sub-Stations' }
    ]
  },
  {
    id: 'specialty-cables',
    numericId: 5,
    name: '1000 Sq.mm Single Core Aluminum Cables',
    shortName: 'Specialty Cables',
    category: 'SPECIALTY CABLE',
    bannerTitle: {
      prefix: 'Ultra High Capacity ',
      highlight: 'Single Core Cable'
    },
    bannerSubtitle: '1000 Sq.mm extra high capacity aluminum conductor cable designed for massive industrial power intake.',
    breadcrumbCategory: 'Specialty Cables',
    tagline: 'Massive current carrying capacity engineered for national power infrastructure and heavy mega-projects.',
    appTag: 'Commercial',
    certTag: 'ISI Certified',
    cardDesc: 'For Advanced Needs',
    mainCardImg: `${A}1000_sqmm_single_core_aluminium_cable.jpeg`,
    badges: [
      {
        line1: '1000',
        line2: 'Sq.mm',
        icon: 'zap'
      },
      {
        line1: 'Compacted',
        line2: 'Conductor',
        icon: 'shield'
      },
      {
        line1: 'Cost',
        line2: 'Effective',
        icon: 'check'
      },
      {
        line1: 'Heavy',
        line2: 'Duty',
        icon: 'wrench'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}1000_sqmm_single_core_aluminium_cable.jpeg`,
        full: `${A}1000_sqmm_single_core_aluminium_cable.jpeg`,
        alt: 'HITEX PLUS 1000 Sq.mm Single Core Aluminum Cable'
      },
      {
        id: 1,
        thumb: `${A}1000 Sq.mm single core aluminium cable.jpeg`,
        full: `${A}1000 Sq.mm single core aluminium cable.jpeg`,
        alt: 'HITEX PLUS Aluminum Conductor Close-up'
      },
      {
        id: 2,
        thumb: `${A}aluminium_unarmoured_cable.jpg`,
        full: `${A}aluminium_unarmoured_cable.jpg`,
        alt: 'HITEX PLUS High Amp Aluminum Power Cable'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Quality Inspected Cable Drum'
      }
    ],
    valueCards: [
      {
        title: 'Massive Amp Capacity',
        desc: 'Transmits thousands of amperes with minimum voltage drop over long line runs.',
        icon: 'zap'
      },
      {
        title: 'Compacted Circular Design',
        desc: 'Advanced compacting technology reduces overall cable diameter and improves cooling.',
        icon: 'shield'
      },
      {
        title: 'High Weight Savings',
        desc: 'EC Grade aluminum conductor provides tremendous cost and structural weight savings.',
        icon: 'check'
      },
      {
        title: 'Certified Testing',
        desc: '100% routine tested for resistance, partial discharge, and insulation resistance.',
        icon: 'award'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Powering Mega Industrial Plants & Transmission Corridors',
      desc: 'HITEX PLUS 1000 Sq.mm Single Core Aluminum Cables represent the pinnacle of high-current power delivery. Specifically engineered for main incoming feeds from power generating plants, massive transformer vaults, and electrical substations to heavy industrial busbars.',
      bannerImg: `${A}Infrastructure.png`
    },
    applications: [
      {
        title: 'Main Grid Transmission & Substations',
        desc: 'High-amperage feeder circuits connecting power transformer secondaries to main switchboards.'
      },
      {
        title: 'Heavy Smelting & Steel Plants',
        desc: 'Dedicated heavy current lines for arc furnaces, induction melters, and rolling mills.'
      },
      {
        title: 'Data Center Main Incomers',
        desc: 'Ultra-reliable uninterruptible power intake cables for hyper-scale cloud server facilities.'
      },
      {
        title: 'Renewable Power Evacuation',
        desc: 'High capacity power evacuation lines from large wind turbine yards and 100MW solar fields.'
      }
    ],
    keyFeatures: [
      {
        title: 'Compacted Stranded EC Grade Aluminum (H2/H4)',
        desc: 'Exceeds 61% IACS conductivity while optimizing conductor density and skin-effect distribution.'
      },
      {
        title: 'Cross-Linked Dry Cured XLPE Insulation',
        desc: 'Nitrogen cured dry vulcanization guarantees void-free insulation with superior partial discharge performance.'
      },
      {
        title: 'Semi-Conducting Conductor & Core Screens',
        desc: 'Triple co-extruded screens smooth out electrical field stress, preventing dielectric hot-spots.'
      },
      {
        title: 'Heavy Duty UV Resistant Outer Sheath',
        desc: 'Specially stabilized anti-termite and anti-rodent PVC compound engineered for tough field conditions.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'IS 7098 (Part 1 & 2) / IEC 60502-2' },
      { label: 'Available Sizes Range', value: '630 sq. mm, 800 sq. mm, 1000 sq. mm' },
      { label: 'Voltage Rating (Uo/U)', value: '1.1 kV up to 33 kV Heavy Duty' },
      { label: 'Conductor Construction', value: 'Compacted Circular Stranded EC Grade Aluminum' },
      { label: 'Maximum Continuous Conductor Temp.', value: '90°C (Normal) / 130°C (Emergency) / 250°C (Short Circuit)' },
      { label: 'Current Rating in Ground', value: 'Approx. 1020 - 1180 Amps (depending on laying conditions)' },
      { label: 'Standard Packing', value: 'Cut to customer lengths on heavy duty industrial steel drums' }
    ],
    specifications: [
      { label: 'Product Name', value: '1000 Sq.mm Single Core Aluminum Cables' },
      { label: 'Conductor Material', value: 'High Purity EC Grade Compacted Aluminum' },
      { label: 'Insulation Material', value: 'High Dielectric Strength XLPE / Heat Resistant PVC' },
      { label: 'Voltage Grade', value: '1.1 kV to 33 kV Transmission Grade' },
      { label: 'Available Sizes', value: '630, 800, 1000 sq. mm' },
      { label: 'Available Colours', value: 'Black with Core Identification Stripes' },
      { label: 'Standard', value: 'IS 7098 / IEC 60502' },
      { label: 'Application', value: 'Power Plants, Sub-Stations, Steel Mills & Heavy Infrastructure' }
    ]
  },
  {
    id: 'solar-dc-cable',
    numericId: 6,
    name: 'Solar DC Photovoltaic Cable (1.5 kV)',
    shortName: 'Solar DC Cable',
    category: 'SOLAR CABLE',
    bannerTitle: {
      prefix: 'Renewable Energy ',
      highlight: 'Solar DC Cable'
    },
    bannerSubtitle: 'Electron-beam cross-linked halogen-free solar cable rated for 1500V DC rooftop and utility-scale solar farms.',
    breadcrumbCategory: 'Solar Cables',
    tagline: 'UV & weather resistant photovoltaic wiring engineered for 25+ years of trouble-free green energy generation.',
    appTag: 'Renewable Energy',
    certTag: 'RoHS Compliant',
    cardDesc: 'UV & Weather Resistant',
    mainCardImg: `${A}solar_cables_dc.jpg`,
    badges: [
      {
        line1: '1.5 kV',
        line2: 'DC Rating',
        icon: 'zap'
      },
      {
        line1: 'UV & Ozone',
        line2: 'Proof',
        icon: 'sun'
      },
      {
        line1: 'Tinned',
        line2: 'Copper',
        icon: 'shield'
      },
      {
        line1: '25+ Yr',
        line2: 'Lifespan',
        icon: 'clock'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}solar_cables_dc.jpg`,
        full: `${A}solar_cables_dc.jpg`,
        alt: 'HITEX PLUS 1.5 kV Solar DC Cable'
      },
      {
        id: 1,
        thumb: `${A}solar_cables_1.5kv_dc_–_cable_grid.jpg`,
        full: `${A}solar_cables_1.5kv_dc_–_cable_grid.jpg`,
        alt: 'HITEX PLUS Solar Photovoltaic Grid Wire'
      },
      {
        id: 2,
        thumb: `${A}dc_solar_cables.jpg`,
        full: `${A}dc_solar_cables.jpg`,
        alt: 'HITEX PLUS Solar Inverter & Module Cable'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Solar Wire Master Packaging'
      }
    ],
    valueCards: [
      {
        title: 'UV & Ozone Immune',
        desc: 'Certified to withstand direct harsh sunlight and open atmospheric weathering for decades.',
        icon: 'sun'
      },
      {
        title: 'Zero Halogen LSZH',
        desc: 'Non-toxic, halogen-free compound emits zero acid gases and minimal smoke if ignited.',
        icon: 'shield'
      },
      {
        title: 'Tinned Conductor',
        desc: 'Protects against galvanic corrosion and oxidation even in humid tropical solar plants.',
        icon: 'zap'
      },
      {
        title: '25 Year Design Life',
        desc: 'Thermal endurance tested to match the long design life of solar PV panels.',
        icon: 'clock'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Maximizing Solar Yield with Ultra-Low Transmission Loss',
      desc: 'HITEX PLUS Solar DC Cables are purpose-built for harsh photovoltaic installations. Engineered with electron-beam cross-linked polyolefin (XLPO) materials, they endure constant UV radiation, ozone, salt mist, and extreme ambient temperature swings without insulation embrittlement.',
      bannerImg: `${A}sustainable.png`
    },
    applications: [
      {
        title: 'Solar PV String Cabling',
        desc: 'Interconnection of series and parallel photovoltaic modules on solar arrays.'
      },
      {
        title: 'Solar Inverter & Combiner Boxes',
        desc: 'DC power collection feeds between array junction boxes and central or string inverters.'
      },
      {
        title: 'Commercial & Residential Rooftops',
        desc: 'High-safety wiring for rooftop solar installations meeting all national building fire codes.'
      },
      {
        title: 'Utility Scale Ground Mount Solar',
        desc: 'Long-run DC distribution for multi-megawatt desert and agricultural solar fields.'
      }
    ],
    keyFeatures: [
      {
        title: 'Class 5 Flexible Tinned Copper Conductors',
        desc: 'Fine multi-strand tinned copper ensures effortless bending and superior corrosion resistance.'
      },
      {
        title: 'Electron-Beam Cross-Linked XLPO',
        desc: 'E-beam cross-linking molecularly locks the polymer chains, delivering unmatched heat resistance.'
      },
      {
        title: 'Rated for -40°C to +120°C Working Conditions',
        desc: 'Endures sub-zero winter temperatures as well as extreme rooftop heat up to 120°C.'
      },
      {
        title: 'Direct Burial & Water Immersion Certified',
        desc: 'Suitable for laying directly underground or in wet outdoor trenches without degradation.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'EN 50618 (H1Z2Z2-K) / TÜV 2 Pfg 1169 / IS 17293' },
      { label: 'Available Sizes Range', value: '2.5 sq. mm to 300 sq. mm' },
      { label: 'Voltage Rating (Uo/U)', value: '1.5 kV DC (1500 V DC) / 1.0 kV AC' },
      { label: 'Conductor Material', value: 'Class 5 Fine Stranded Tinned Electrolytic Copper' },
      { label: 'Insulation & Sheath Material', value: 'Halogen Free Cross-Linked Polyolefin (XLPO)' },
      { label: 'Max Conductor Temperature', value: '+120°C (20,000 hours) / +90°C (continuous)' },
      { label: 'Standard Packing', value: '100m spools / 500m / 1000m on wooden drums' }
    ],
    specifications: [
      { label: 'Product Name', value: 'Solar DC Photovoltaic Cable (1.5 kV)' },
      { label: 'Conductor Material', value: 'Class 5 Tinned Electrolytic Copper (Anti-Corrosion)' },
      { label: 'Insulation Material', value: 'Cross-Linked Polyolefin (XLPO) Halogen Free' },
      { label: 'Voltage Grade', value: '1.5 kV DC (1800 V DC max)' },
      { label: 'Available Sizes', value: '2.5 sq. mm to 300 sq. mm' },
      { label: 'Available Colours', value: 'Red, Black (UV Stabilized)' },
      { label: 'Standard', value: 'EN 50618 / TÜV 2 Pfg 1169 / IS 17293' },
      { label: 'Application', value: 'Solar Rooftops, Inverters, Combiner Boxes & Solar Farms' }
    ]
  },
  {
    id: 'submersible-cables',
    numericId: 7,
    name: '3-Core Submersible Flat Pump Cable',
    shortName: 'Submersible Cables',
    category: 'SUBMERSIBLE CABLE',
    bannerTitle: {
      prefix: 'Deep Water ',
      highlight: 'Submersible Flat Cable'
    },
    bannerSubtitle: 'High water-resistance 3-core flat cable engineered for deep borewells, agricultural pumps and irrigation systems.',
    breadcrumbCategory: 'Submersible Cables',
    tagline: '100% waterproof construction designed to operate continuously under high hydrostatic water pressures.',
    appTag: 'Industrial',
    certTag: 'ISI Certified',
    cardDesc: 'High Water Resistance',
    mainCardImg: `${A}submersible_pvc_flat_cable.jpg`,
    badges: [
      {
        line1: 'Water',
        line2: 'Proof',
        icon: 'shield'
      },
      {
        line1: 'Flexible',
        line2: 'Copper',
        icon: 'zap'
      },
      {
        line1: 'Tear',
        line2: 'Resistant',
        icon: 'wrench'
      },
      {
        line1: 'Heavy',
        line2: 'Duty',
        icon: 'check'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}submersible_pvc_flat_cable.jpg`,
        full: `${A}submersible_pvc_flat_cable.jpg`,
        alt: 'HITEX PLUS 3-Core Submersible Flat Cable'
      },
      {
        id: 1,
        thumb: `${A}Submersible PVC Flat cable.jpg`,
        full: `${A}Submersible PVC Flat cable.jpg`,
        alt: 'HITEX PLUS Submersible Cable Section'
      },
      {
        id: 2,
        thumb: `${A}unarmoured_cables.jpg`,
        full: `${A}unarmoured_cables.jpg`,
        alt: 'HITEX PLUS Heavy Duty Core Insulation'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Submersible Cable Package'
      }
    ],
    valueCards: [
      {
        title: 'Deep Water Impermeable',
        desc: 'Special outer sheath prevents water ingress even at depths exceeding 500 meters.',
        icon: 'shield'
      },
      {
        title: 'High Tensile Flex',
        desc: 'Resists longitudinal stretching during deep pump suspension and recovery.',
        icon: 'wrench'
      },
      {
        title: 'Abrasion & Slit Proof',
        desc: 'Protects against sharp casing edges inside deep tubewell boreholes.',
        icon: 'check'
      },
      {
        title: 'Energy Efficient',
        desc: 'Low resistance copper cores deliver maximum power to submersible pump motors.',
        icon: 'zap'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Powering India’s Agriculture & Deep Tubewell Irrigation',
      desc: 'HITEX PLUS 3-Core Flat Submersible Cables are uniquely compounded to deliver reliable power in submerged environments. Whether powering multi-stage agricultural borewell pumps, industrial dewatering rigs, or municipal freshwater wells, they ensure uninterrupted water supply.',
      bannerImg: `${A}app_agriculture_irrigation.jpg`
    },
    applications: [
      {
        title: 'Deep Tube Wells & Boreholes',
        desc: 'Connecting underground submersible pump motors to above-ground starters.'
      },
      {
        title: 'Agricultural Irrigation Systems',
        desc: 'Continuous duty watering systems for farms, plantations, and drip irrigation networks.'
      },
      {
        title: 'Mine & Foundation Dewatering',
        desc: 'Pumping water out of flooded open-cast mines, construction pits, and tunnels.'
      },
      {
        title: 'Sewage & Effluent Treatment Plants',
        desc: 'Submerged pumps handling wastewater, sludge, and industrial chemical effluents.'
      }
    ],
    keyFeatures: [
      {
        title: 'Bright Annealed High Purity Flexible Copper',
        desc: 'Class 5 bunched copper strands provide high fatigue resistance and minimal electrical resistance.'
      },
      {
        title: 'Special Impermeable Water-Resistant PVC Compound',
        desc: 'Compound formulated with high molecular weight resin prevents water absorption and swelling.'
      },
      {
        title: 'Compact Flat Extrusion Profile',
        desc: 'Flat layout fits snugly between the pump delivery pipe and the bore casing without pinching.'
      },
      {
        title: 'High Dielectric Withstand Under Wet Conditions',
        desc: '100% immersion tested at elevated voltages to guarantee zero micro-leakages.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'IS 694 : 2010 (License CM/L-7576290) / IS 8130' },
      { label: 'Available Sizes Range', value: '1.5 sq. mm to 35.0 sq. mm (Flat 3-Core)' },
      { label: 'Voltage Rating (Uo/U)', value: 'Up to and including 1100 Volts' },
      { label: 'Conductor Material', value: 'Electrolytic Grade Bright Annealed Flexible Copper' },
      { label: 'Insulation / Sheath', value: 'Water Resistant Type A PVC / Tough Black or Blue Outer Sheath' },
      { label: 'Continuous Conductor Temp.', value: '70°C for Normal / 85°C for High Temp Grade' },
      { label: 'Standard Packing', value: '100m, 300m, 500m coils and wooden drums' }
    ],
    specifications: [
      { label: 'Product Name', value: '3-Core Submersible Flat Pump Cable' },
      { label: 'Conductor Material', value: 'Bright Annealed High Purity Flexible Copper' },
      { label: 'Insulation Material', value: 'Specially Formulated Waterproof Grade PVC' },
      { label: 'Voltage Grade', value: 'Up to 1100 V' },
      { label: 'Available Sizes', value: '1.5 sq. mm to 35.0 sq. mm (Flat 3-Core)' },
      { label: 'Available Colours', value: 'Red, Yellow, Blue cores in Black / Blue Outer Sheath' },
      { label: 'Standard', value: 'IS 694 : 2010 / IS 8130' },
      { label: 'Application', value: 'Deep Well Submersible Pumps, Agriculture & Irrigation' }
    ]
  },
  {
    id: 'aerial-bunched-cables',
    numericId: 8,
    name: 'Aerial Bunched Cables (ABC)',
    shortName: 'Aerial Bunched Cables',
    category: 'POWER CABLE',
    bannerTitle: {
      prefix: 'Overhead Power ',
      highlight: 'Aerial Bunched Cables'
    },
    bannerSubtitle: 'Insulated overhead distribution cables engineered to eliminate power theft, short-circuits and transformer overload.',
    breadcrumbCategory: 'Power Cables',
    tagline: 'Safe, reliable and aesthetic overhead rural and urban electrical power distribution.',
    appTag: 'Infrastructure',
    certTag: 'CE Certified',
    cardDesc: 'Reliable Distribution',
    mainCardImg: `${A}aluminium_unarmoured_cable.jpg`,
    badges: [
      {
        line1: 'Zero',
        line2: 'Theft',
        icon: 'shield'
      },
      {
        line1: 'Weather',
        line2: 'Proof',
        icon: 'sun'
      },
      {
        line1: 'High',
        line2: 'Tension',
        icon: 'wrench'
      },
      {
        line1: 'Rural &',
        line2: 'Urban',
        icon: 'zap'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}aluminium_unarmoured_cable.jpg`,
        full: `${A}aluminium_unarmoured_cable.jpg`,
        alt: 'HITEX PLUS Aerial Bunched Cable (ABC)'
      },
      {
        id: 1,
        thumb: `${A}single_core_aluminium_cable.jpg`,
        full: `${A}single_core_aluminium_cable.jpg`,
        alt: 'HITEX PLUS Aluminum Phase Conductor'
      },
      {
        id: 2,
        thumb: `${A}unarmoured_cables.jpg`,
        full: `${A}unarmoured_cables.jpg`,
        alt: 'HITEX PLUS Multi-Core Aerial Cable'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Certified Drum Package'
      }
    ],
    valueCards: [
      {
        title: 'Prevents Power Theft',
        desc: 'Insulated bundle design prevents illegal tapping and hooking on overhead power lines.',
        icon: 'shield'
      },
      {
        title: 'Tree Contact Safe',
        desc: 'Eliminates short-circuits and bushfires caused by falling tree branches during storms.',
        icon: 'sun'
      },
      {
        title: 'High Mechanical Tension',
        desc: 'Heavy-duty aluminium alloy messenger wire withstands high wind loads and ice accumulation.',
        icon: 'wrench'
      },
      {
        title: 'Low Maintenance',
        desc: 'Reduces power distribution outage frequency by over 80% compared to bare conductors.',
        icon: 'check'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Revolutionizing Overhead Grid Reliability & Public Safety',
      desc: 'HITEX PLUS Aerial Bunched Cables (ABC) replace risky bare overhead conductors with fully insulated, bundled power systems. Designed for both Low Tension (LT) and High Tension (HT) overhead networks, they safeguard rural villages, forested corridors, and densely populated city streets.',
      bannerImg: `${A}app_metro_rail_transit.jpg`
    },
    applications: [
      {
        title: 'Rural Electrification Networks',
        desc: 'Overhead power lines traversing dense forests, hills, and rural agricultural belts.'
      },
      {
        title: 'High-Density Urban Localities',
        desc: 'Congested city streets where narrow building clearances pose electrocution hazards.'
      },
      {
        title: 'Coastal & High Wind Belts',
        desc: 'Wind-resistant bundle profile prevents phase clashing during coastal monsoons.'
      },
      {
        title: 'Temporary Construction Sites',
        desc: 'Quick overhead stringing for temporary power at industrial project sites.'
      }
    ],
    keyFeatures: [
      {
        title: 'Hard Drawn Stranded EC Aluminium Conductors',
        desc: 'High mechanical strength and optimal current transmission efficiency.'
      },
      {
        title: 'UV Resistant Carbon-Black XLPE Insulation',
        desc: 'Withstands decades of intense tropical sunlight without cracking or UV degradation.'
      },
      {
        title: 'High-Tensile Aluminium Alloy Messenger Conductor',
        desc: 'Acts as neutral and earth while bearing the full mechanical suspension weight of the cable.'
      },
      {
        title: 'Longitudinal Ribs for Phase Identification',
        desc: 'Phase cores feature continuous extruded ribs (1, 2, 3 ribs) for foolproof lineman identification.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'IS 14255 : 1995 / REC Specifications / IEC 60502' },
      { label: 'Available Sizes Range', value: '16 sq. mm to 150 sq. mm + Messenger Core' },
      { label: 'Voltage Rating (Uo/U)', value: '1.1 kV (LT) and 11 kV / 33 kV (HT)' },
      { label: 'Phase Conductor Material', value: 'Hard Drawn Stranded EC Grade Aluminium' },
      { label: 'Messenger Conductor', value: 'High Tensile Heat-Treated Aluminium-Magnesium-Silicon Alloy' },
      { label: 'Insulation Material', value: 'Carbon Black Compounded XLPE (Cross-linked Polyethylene)' },
      { label: 'Standard Packing', value: '500m / 1000m on heavy wooden drums' }
    ],
    specifications: [
      { label: 'Product Name', value: 'Aerial Bunched Cables (ABC)' },
      { label: 'Conductor Material', value: 'EC Grade Hard Drawn Stranded Aluminium Conductor' },
      { label: 'Insulation Material', value: 'Carbon Black XLPE Compound (UV Weather Resistant)' },
      { label: 'Voltage Grade', value: '1.1 kV (LT) and 11 kV / 33 kV (HT)' },
      { label: 'Available Sizes', value: '16 sq. mm to 150 sq. mm + Messenger Core' },
      { label: 'Available Colours', value: 'Black with Longitudinal Ribs for Phase Identification' },
      { label: 'Standard', value: 'IS 14255 : 1995 / REC Specifications' },
      { label: 'Application', value: 'Rural Electrification, Forest Areas & High-Density Urban Power' }
    ]
  },
  {
    id: 'fire-survival-cables',
    numericId: 9,
    name: 'Fire Survival & Circuit Integrity Cables',
    shortName: 'Fire Survival Cables',
    category: 'SPECIALTY CABLE',
    bannerTitle: {
      prefix: 'Life Safety ',
      highlight: 'Fire Survival Cables'
    },
    bannerSubtitle: 'Flame-proof circuit integrity cables that continue delivering critical electrical power during active fires up to 950°C.',
    breadcrumbCategory: 'Specialty Cables',
    tagline: 'Maintains emergency circuit operation for fire alarms, smoke dampers and emergency lighting during emergencies.',
    appTag: 'Commercial',
    certTag: 'REACH Compliant',
    cardDesc: 'Safety in Critical Conditions',
    mainCardImg: `${A}xlpe_cop_allu_unarm_arm_cable.jpg`,
    badges: [
      {
        line1: '950°C',
        line2: '3 Hours',
        icon: 'flame'
      },
      {
        line1: 'Zero',
        line2: 'Halogen',
        icon: 'shield'
      },
      {
        line1: 'Low',
        line2: 'Smoke',
        icon: 'check'
      },
      {
        line1: 'Critical',
        line2: 'Power',
        icon: 'zap'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}xlpe_cop_allu_unarm_arm_cable.jpg`,
        full: `${A}xlpe_cop_allu_unarm_arm_cable.jpg`,
        alt: 'HITEX PLUS Fire Survival Circuit Integrity Cable'
      },
      {
        id: 1,
        thumb: `${A}copper_armoured_cable.jpg`,
        full: `${A}copper_armoured_cable.jpg`,
        alt: 'HITEX PLUS Armoured Fire Resistant Cable'
      },
      {
        id: 2,
        thumb: `${A}pvc_insulated_cable.jpg`,
        full: `${A}pvc_insulated_cable.jpg`,
        alt: 'HITEX PLUS Flame Barrier Insulation'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Fire Rated Master Packaging'
      }
    ],
    valueCards: [
      {
        title: '3-Hour Fire Integrity',
        desc: 'Survives open flame up to 950°C with water spray and mechanical shock.',
        icon: 'flame'
      },
      {
        title: 'Zero Acid Gas Emission',
        desc: 'Emits zero corrosive acid fumes, protecting human lungs and sensitive electronics.',
        icon: 'shield'
      },
      {
        title: 'Ultra Low Smoke (LSZH)',
        desc: 'Ensures clear emergency egress paths and visibility for fire evacuation teams.',
        icon: 'check'
      },
      {
        title: 'Certified Survival',
        desc: 'Certified to BS 6387 Categories C, W, and Z standards.',
        icon: 'award'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Preserving Human Life & Critical Emergency Infrastructure',
      desc: 'In an active building fire, standard cables melt within minutes, disabling emergency systems. HITEX PLUS Fire Survival Cables utilize inorganic mica glass tape technology to maintain continuous electrical circuits for emergency lighting, sprinkler pumps, and smoke pressurization fans.',
      bannerImg: `${A}Hospitals.png`
    },
    applications: [
      {
        title: 'High-Rise Commercial & Residential Towers',
        desc: 'Powering fire sprinkler booster pumps, emergency evacuation elevators, and stairway lights.'
      },
      {
        title: 'Hospitals & Healthcare Facilities',
        desc: 'Life support equipment feeds, ICU backup power, and central fire alarm networks.'
      },
      {
        title: 'Metro Rail & Underground Tunnels',
        desc: 'Subway tunnel exhaust fans, emergency communications, and trackside safety systems.'
      },
      {
        title: 'Airports & Public Arenas',
        desc: 'Mass evacuation public address systems and primary fire suppression circuits.'
      }
    ],
    keyFeatures: [
      {
        title: 'High Purity Glass Mica Tape Flame Barrier',
        desc: 'Forms a vitrified ceramic barrier around copper conductors that cannot burn or melt under 1000°C.'
      },
      {
        title: 'Low Smoke Zero Halogen (LSZH) Polymers',
        desc: 'Polyolefin compounds eliminate toxic hydrogen chloride gas and corrosive acidic condensates.'
      },
      {
        title: 'Meets BS 6387 Protocol CWZ',
        desc: 'Tested under Fire (950°C for 3 hrs), Fire with Water Spray (650°C), and Fire with Mechanical Shock (950°C).'
      },
      {
        title: 'High Current Carrying Capacity',
        desc: 'Cross-linked insulation enables higher operating temperature margins during emergency loads.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'BS 6387 (Cat. C, W, Z) / BS 7846 / IEC 60331 / IS 17505' },
      { label: 'Available Sizes Range', value: '1.5 sq. mm to 400 sq. mm (1 to 4 Cores)' },
      { label: 'Voltage Rating (Uo/U)', value: '600 / 1000 Volts' },
      { label: 'Conductor Material', value: 'High Purity Plain Annealed Electrolytic Copper' },
      { label: 'Fire Barrier Layer', value: 'Helically Lapped High-Temperature Mica Glass Tape' },
      { label: 'Outer Sheath', value: 'Low Smoke Zero Halogen (LSZH) Flame Retardant Compound' },
      { label: 'Standard Packing', value: 'Continuous lengths on treated wooden drums' }
    ],
    specifications: [
      { label: 'Product Name', value: 'Fire Survival & Circuit Integrity Cables' },
      { label: 'Conductor Material', value: 'High Purity Electrolytic Plain Copper' },
      { label: 'Insulation Material', value: 'Mica Glass Tape + Zero Halogen Flame Retardant (LSZH)' },
      { label: 'Voltage Grade', value: '600 / 1000 V' },
      { label: 'Available Sizes', value: '1.5 sq. mm to 400 sq. mm' },
      { label: 'Available Colours', value: 'Red Outer Sheath for High-Visibility Safety Identification' },
      { label: 'Standard', value: 'BS 6387 (CWZ) / BS 7846 / IEC 60331' },
      { label: 'Application', value: 'Hospitals, Metros, High-Rise Towers & Emergency Smoke Evacuation' }
    ]
  },
  {
    id: 'flexible-cables',
    numericId: 10,
    name: 'Multicore Flexible Copper Cables',
    shortName: 'Flexible Cables',
    category: 'FLEXIBLE CABLE',
    bannerTitle: {
      prefix: 'High Flexibility ',
      highlight: 'Multicore Cables'
    },
    bannerSubtitle: 'Ultra-flexible multi-strand copper cables engineered for dynamic machinery, electrical appliances and control panels.',
    breadcrumbCategory: 'Flexible Cables',
    tagline: 'Maximum bending flexibility with superior conductivity and oil-resistant insulation.',
    appTag: 'Residential',
    certTag: 'ISI Certified',
    cardDesc: 'For Dynamic Applications',
    mainCardImg: `${A}multicore_flexible_cable.jpg`,
    badges: [
      {
        line1: 'Ultra',
        line2: 'Flexible',
        icon: 'zap'
      },
      {
        line1: 'Class 5',
        line2: 'Copper',
        icon: 'shield'
      },
      {
        line1: 'Oil',
        line2: 'Resistant',
        icon: 'check'
      },
      {
        line1: 'Multi',
        line2: 'Core',
        icon: 'grid'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}multicore_flexible_cable.jpg`,
        full: `${A}multicore_flexible_cable.jpg`,
        alt: 'HITEX PLUS Multicore Flexible Copper Cable'
      },
      {
        id: 1,
        thumb: `${A}household_wires_clean.jpg`,
        full: `${A}household_wires_clean.jpg`,
        alt: 'HITEX PLUS Flexible Copper Cores'
      },
      {
        id: 2,
        thumb: `${A}pvc_insulated_cable.jpg`,
        full: `${A}pvc_insulated_cable.jpg`,
        alt: 'HITEX PLUS Insulated Flexible Cable'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Packaging Box'
      }
    ],
    valueCards: [
      {
        title: 'Tight Bending Radius',
        desc: 'Bends effortlessly in compact distribution boxes without stress cracking.',
        icon: 'zap'
      },
      {
        title: 'Class 5 Multi-Strand',
        desc: 'Scores of micro-strands of electrolytic copper deliver unmatched flex endurance.',
        icon: 'shield'
      },
      {
        title: 'Oil & Grease Proof',
        desc: 'Resists industrial lubricants, machine coolant, and environmental chemicals.',
        icon: 'check'
      },
      {
        title: 'Smooth Stripping',
        desc: 'Clean core stripping speeds up panel builder and electrician termination time.',
        icon: 'wrench'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Engineered for Dynamic Movement & Effortless Enclosure Wiring',
      desc: 'HITEX PLUS Multicore Flexible Cables are crafted for applications requiring tight bends and continuous vibration resistance. From heavy CNC machinery and material handling conveyors to building power panels, they combine superior conductivity with exceptional ease of handling.',
      bannerImg: `${A}Commercial.png`
    },
    applications: [
      {
        title: 'Industrial Automation & CNC Panels',
        desc: 'Interconnecting drives, servo motors, and push-button control panels.'
      },
      {
        title: 'Home Appliances & Commercial Equipment',
        desc: 'Power cords for air conditioners, commercial kitchen equipment, and refrigeration units.'
      },
      {
        title: 'Material Handling & Overhead Cranes',
        desc: 'Festoon systems and trailing cables for gantry hoists and automated picking cranes.'
      },
      {
        title: 'Electrical Distribution Enclosures',
        desc: 'Jumper wiring and inter-panel bus feeds inside modular distribution boards.'
      }
    ],
    keyFeatures: [
      {
        title: 'Bright Annealed High Purity Class 5 Copper',
        desc: 'Highest conductivity copper wire drawn and annealed to ensure long fatigue life.'
      },
      {
        title: 'Specially Compounded Flexible PVC Sheath',
        desc: 'Flexible plasticizers provide smooth tactile flex and cold-bend endurance down to -15°C.'
      },
      {
        title: 'Vibrant Core Color Identification',
        desc: 'Distinct internationally harmonized core coloring prevents wiring and polarity mistakes.'
      },
      {
        title: 'Tested to Over 30,000 Flexing Cycles',
        desc: 'Reverse bending and flex testing ensures reliability in dynamic industrial cable tracks.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'IS 694 : 2010 (License No. CM/L-7576290) / IEC 60227' },
      { label: 'Available Sizes Range', value: '0.5 sq. mm to 50.0 sq. mm (2, 3, 4, 5, up to 24 Cores)' },
      { label: 'Voltage Rating (Uo/U)', value: '300/500 V, 450/750 V and up to 1100 Volts' },
      { label: 'Conductor Material', value: 'Class 5 Plain Annealed Electrolytic Copper Multi-Strand' },
      { label: 'Operating Temperature', value: '-15°C to +70°C (up to +85°C for HR grade)' },
      { label: 'Bending Radius', value: '6 x Cable Overall Diameter (Flexible application)' },
      { label: 'Standard Packing', value: '100m spools in master cartons, 500m on wooden drums' }
    ],
    specifications: [
      { label: 'Product Name', value: 'Multicore Flexible Copper Cables' },
      { label: 'Conductor Material', value: 'Class 5 Bright Annealed Electrolytic Multi-Strand Copper' },
      { label: 'Insulation Material', value: 'Special Flexible PVC Compound (Heat & Oil Resistant)' },
      { label: 'Voltage Grade', value: 'Up to 1100 V' },
      { label: 'Available Sizes', value: '0.5 sq. mm to 50.0 sq. mm (2, 3, 4, 5 up to 24 cores)' },
      { label: 'Available Colours', value: 'Colour coded cores in White / Grey / Black Outer Sheath' },
      { label: 'Standard', value: 'IS 694 : 2010 / IEC 60227' },
      { label: 'Application', value: 'Internal Appliance Wiring, CNC Machines, Motors & Panels' }
    ]
  },
  {
    id: 'instrumentation-cables',
    numericId: 11,
    name: 'Screened Instrumentation & Signal Cables',
    shortName: 'Instrumentation Cables',
    category: 'CONTROL CABLE',
    bannerTitle: {
      prefix: 'Interference Free ',
      highlight: 'Instrumentation Cables'
    },
    bannerSubtitle: 'Individual & overall shielded pair/triad cables engineered for process telemetry, flow meters and DCS systems.',
    breadcrumbCategory: 'Control Cables',
    tagline: 'Zero signal distortion for critical digital and analog industrial process measurement.',
    appTag: 'Industrial',
    certTag: 'RoHS Compliant',
    cardDesc: 'Accurate & Secure',
    mainCardImg: `${A}pvc_insulated_cable.jpg`,
    badges: [
      {
        line1: '100%',
        line2: 'Shielded',
        icon: 'shield'
      },
      {
        line1: 'Low',
        line2: 'Capacitance',
        icon: 'zap'
      },
      {
        line1: 'Noise',
        line2: 'Free',
        icon: 'check'
      },
      {
        line1: 'Pair /',
        line2: 'Triad',
        icon: 'grid'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}pvc_insulated_cable.jpg`,
        full: `${A}pvc_insulated_cable.jpg`,
        alt: 'HITEX PLUS Screened Instrumentation Cable'
      },
      {
        id: 1,
        thumb: `${A}multicore_flexible_cable.jpg`,
        full: `${A}multicore_flexible_cable.jpg`,
        alt: 'HITEX PLUS Twisted Pair Signal Cable'
      },
      {
        id: 2,
        thumb: `${A}copper_armoured_cable.jpg`,
        full: `${A}copper_armoured_cable.jpg`,
        alt: 'HITEX PLUS Armoured Instrumentation Cable'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS Packaging Box'
      }
    ],
    valueCards: [
      {
        title: 'Zero Crosstalk',
        desc: 'Twisted pair construction with short lay ratios eliminates electromagnetic interference.',
        icon: 'shield'
      },
      {
        title: 'Individual & Overall Screen',
        desc: 'Aluminium-Mylar foil screening provides 100% physical coverage against stray noise.',
        icon: 'check'
      },
      {
        title: 'Low Capacitance',
        desc: 'Prevents signal attenuation and pulse rounding in high-speed digital 4-20mA loops.',
        icon: 'zap'
      },
      {
        title: 'Intrinsically Safe Blue',
        desc: 'Available in high-visibility intrinsically safe blue sheath for hazardous plant zones.',
        icon: 'award'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Precision Data Telemetry for Refineries & Automated Plants',
      desc: 'HITEX PLUS Instrumentation Cables are engineered for modern automated refineries, petrochemical complexes, and power plants. When microvolt sensor readings and mission-critical 4-20mA signals must travel through electrically noisy plants, they ensure perfect signal fidelity.',
      bannerImg: `${A}data centre.png`
    },
    applications: [
      {
        title: 'Oil Refineries & Petrochemical Units',
        desc: 'Connecting pressure, flow, and temperature sensors to Distributed Control Systems (DCS).'
      },
      {
        title: 'Hazardous Intrinsically Safe Loops',
        desc: 'Certified intrinsically safe wiring in explosive Zone 0 and Zone 1 plant locations.'
      },
      {
        title: 'Thermal & Hydro Power Stations',
        desc: 'Turbine monitoring, vibration sensors, and boiler pressure transmitter networks.'
      },
      {
        title: 'Water Treatment & Desalination',
        desc: 'Remote telemetry and chemical dosing control across widespread processing basins.'
      }
    ],
    keyFeatures: [
      {
        title: 'Twisted Pairs / Triads with Low Lay Length',
        desc: 'Carefully calculated pitch lay balances capacitive coupling, canceling out inductive noise.'
      },
      {
        title: 'Aluminium-Mylar Foil with Tinned Drain Wire',
        desc: 'Provides 100% electrostatic shielding with simple, solderless earth grounding.'
      },
      {
        title: 'Low Dielectric Loss Insulation',
        desc: 'High-density polyethylene (HDPE) or XLPE core insulation ensures minimal signal loss.'
      },
      {
        title: 'Armoured and Unarmoured Options',
        desc: 'Steel wire armoured versions provide mechanical protection against heavy trench compaction.'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'BS 5308 (Part 1 & 2) / EN 50288-7 / IEC 60092' },
      { label: 'Available Sizes Range', value: '0.5 sq. mm to 2.5 sq. mm (1 Pair to 50 Pairs / Triads)' },
      { label: 'Voltage Rating (Uo/U)', value: '300 / 500 Volts (Up to 1100 V)' },
      { label: 'Conductor Material', value: 'Solid / Stranded Annealed Bare or Tinned Copper' },
      { label: 'Screening / Shielding', value: 'Individual Pair & Overall Aluminium Mylar Tape + Drain Wire' },
      { label: 'Mutual Capacitance', value: 'Less than 100 pF/meter' },
      { label: 'Standard Packing', value: '500m / 1000m on continuous wooden drums' }
    ],
    specifications: [
      { label: 'Product Name', value: 'Screened Instrumentation & Signal Cables' },
      { label: 'Conductor Material', value: 'Solid / Stranded Annealed Bare or Tinned Copper' },
      { label: 'Insulation Material', value: 'PE / PVC / XLPE with Aluminium Mylar Screen + Drain Wire' },
      { label: 'Voltage Grade', value: '300 / 500 V and up to 1100 V' },
      { label: 'Available Sizes', value: '0.5 sq. mm to 2.5 sq. mm (1 Pair to 50 Pairs / Triads)' },
      { label: 'Available Colours', value: 'Black / White numbered pairs, Blue or Grey outer sheath' },
      { label: 'Standard', value: 'BS 5308 (Part 1 & 2) / EN 50288-7' },
      { label: 'Application', value: 'Refineries, Petrochemical, DCS/SCADA & Transducer Wiring' }
    ]
  },
  {
    id: 'ev-charging-cables',
    numericId: 12,
    name: 'Heavy Duty EV Charging Station Cables',
    shortName: 'EV Charging Cables',
    category: 'POWER CABLE',
    bannerTitle: {
      prefix: 'Next-Gen Mobility ',
      highlight: 'EV Charging Cables'
    },
    bannerSubtitle: 'High-amperage flexible charging cables engineered for commercial DC fast chargers and residential EV wallboxes.',
    breadcrumbCategory: 'Power Cables',
    tagline: 'Engineered for safe rapid charging with extreme abrasion, heat and vehicle drive-over endurance.',
    appTag: 'Renewable Energy',
    certTag: 'CE Certified',
    cardDesc: 'Powering a Cleaner Future',
    mainCardImg: `${A}copper_armoured_cable.jpg`,
    badges: [
      {
        line1: 'Fast',
        line2: 'Charging',
        icon: 'zap'
      },
      {
        line1: 'Drive-Over',
        line2: 'Safe',
        icon: 'shield'
      },
      {
        line1: 'Weather',
        line2: 'Tough',
        icon: 'sun'
      },
      {
        line1: 'Smart',
        line2: 'Signal',
        icon: 'check'
      }
    ],
    gallery: [
      {
        id: 0,
        thumb: `${A}copper_armoured_cable.jpg`,
        full: `${A}copper_armoured_cable.jpg`,
        alt: 'HITEX PLUS High Current EV Charging Cable'
      },
      {
        id: 1,
        thumb: `${A}solar_cables_dc.jpg`,
        full: `${A}solar_cables_dc.jpg`,
        alt: 'HITEX PLUS EV Power & Control Core Layout'
      },
      {
        id: 2,
        thumb: `${A}xlpe_cop_allu_unarm_arm_cable.jpg`,
        full: `${A}xlpe_cop_allu_unarm_arm_cable.jpg`,
        alt: 'HITEX PLUS Flexible EV Outer Sheath'
      },
      {
        id: 3,
        thumb: `${A}image 2.jpeg`,
        full: `${A}image 2.jpeg`,
        alt: 'HITEX PLUS EV Cable Package'
      }
    ],
    valueCards: [
      {
        title: 'Vehicle Drive-Over Proof',
        desc: 'Special polyurethane jacket withstands accidental passenger vehicle drive-overs without crushing.',
        icon: 'shield'
      },
      {
        title: 'Ultra High Amp Fast Charge',
        desc: 'Supports DC high-speed rapid charging currents up to 400A with liquid or air cooling margins.',
        icon: 'zap'
      },
      {
        title: 'Extreme Weather Tough',
        desc: 'Maintains silky flexibility in severe cold (-40°C) and scorching summer parking lot heat (+90°C).',
        icon: 'sun'
      },
      {
        title: 'Built-In Pilot Cores',
        desc: 'Integrated digital pilot and communication signal cores monitor charging handshake and battery BMS.',
        icon: 'check'
      }
    ],
    overview: {
      eyebrow: 'PRODUCT OVERVIEW',
      title: 'Powering the Future of Green Electric Mobility',
      desc: 'As India and the world transition to electric transport, HITEX PLUS EV Charging Cables deliver the high-current power transfer required by modern EV battery packs. Built to handle heavy public station cycling, vehicle drive-overs, dragging on concrete, and extreme weather.',
      bannerImg: `${A}app_metro_rail_transit.jpg`
    },
    applications: [
      {
        title: 'Commercial DC Fast Charging Stations',
        desc: 'Heavy-current charging dispensers along national highways, fuel pumps, and rest stops.'
      },
      {
        title: 'Electric Bus & Commercial Fleet Depots',
        desc: 'Overnight and opportunity high-kilowatt charging for city bus transit fleets and delivery vans.'
      },
      {
        title: 'Residential & Workplace Wallboxes',
        desc: 'Daily AC charging cables for home garages, residential societies, and office parking lots.'
      },
      {
        title: 'Portable Emergency EV Chargers',
        desc: 'Flexible, lightweight cables for portable roadside EV rescue units and mobile service vans.'
      }
    ],
    keyFeatures: [
      {
        title: 'Extra Flexible Class 6 Tinned Copper Conductors',
        desc: 'Hundreds of micro-drawn copper strands make heavy charging cables surprisingly light and supple to handle.'
      },
      {
        title: 'Thermoplastic Polyurethane (TPU) / TPE Sheath',
        desc: 'Unmatched abrasion, tear, and oil resistance prevents outer skin damage when dragged across tarmac.'
      },
      {
        title: 'Flame Retardant & Halogen Free',
        desc: 'Conforms to strict IEC safety standards, emitting zero toxic halogens in public charging hubs.'
      },
      {
        title: 'Integrated Communication & Earth Cores',
        desc: 'Houses power conductors (L1, L2, L3, N), protective earth (PE), and pilot control cores (CP, PP).'
      }
    ],
    technical: [
      { label: 'Governing Standard', value: 'IEC 62893 / EN 50620 / UL 62 / IS 17017' },
      { label: 'Available Sizes Range', value: '2.5 sq. mm to 95.0 sq. mm + 2 to 4 Pilot Signal Cores' },
      { label: 'Voltage Rating (Uo/U)', value: '450/750 V AC & Up to 1000 V DC Fast Charging' },
      { label: 'Conductor Material', value: 'Class 6 Extra-Flexible Tinned Electrolytic Copper' },
      { label: 'Sheath Material', value: 'High Performance TPE / TPU (Flame, UV & Oil Resistant)' },
      { label: 'Operating Temperature', value: '-40°C to +90°C (Surface ambient)' },
      { label: 'Standard Packing', value: 'Cut to standard 5m / 7.5m / 10m harness lengths or reels' }
    ],
    specifications: [
      { label: 'Product Name', value: 'Heavy Duty EV Charging Station Cables' },
      { label: 'Conductor Material', value: 'Fine Stranded High Purity Tinned Electrolytic Copper' },
      { label: 'Insulation Material', value: 'High Performance TPE / PUR (Flame & Oil Resistant)' },
      { label: 'Voltage Grade', value: '450/750 V AC & Up to 1000 V DC Fast Charging' },
      { label: 'Available Sizes', value: '2.5 sq. mm to 95.0 sq. mm + Pilot Signal Cores' },
      { label: 'Available Colours', value: 'Orange / Black High-Visibility Safety Sheath' },
      { label: 'Standard', value: 'IEC 62893 / EN 50620 / UL 62' },
      { label: 'Application', value: 'Public EV Fast Charging Stations, Fleet Depots & Home Wallboxes' }
    ]
  }
];

// Helper to look up a product by ID or numeric ID or name slug
export function getProductById(id) {
  if (!id) return productsData[0];
  const s = String(id).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-');
  return (
    productsData.find((p) => p.id === s) ||
    productsData.find((p) => String(p.numericId) === String(id)) ||
    productsData.find((p) => p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').includes(s)) ||
    productsData[0]
  );
}
