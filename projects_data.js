// Project data for ShowDeck — Project Presenter
const PROJECTS = [
  {
    id: 1,
    title: "Automated Conveyor System Design",
    description: "Complete conveyor system layout for high-volume production line. Includes motor selection, belt specification, roller alignment, and frame structure designed for continuous 24/7 operation. The system handles up to 500 kg per meter with variable speed control.",
    category: "2023",
    slide_image: "slides/conveyor-system.svg"
  },
  {
    id: 2,
    title: "Robotic Welding Cell Layout",
    description: "Six-axis robotic welding cell with integrated safety fencing, wire feed system, and gas delivery. Cell layout optimized for part loading from one side and finished product removal from the opposite side, minimizing operator travel distance.",
    category: "2023",
    slide_image: "slides/robotic-welding-cell.svg"
  },
  {
    id: 3,
    title: "Modular Assembly Station",
    description: "Reconfigurable assembly workstation with adjustable work surface height, integrated torque-controlled screwdrivers, and component feeders. Modular design allows quick reconfiguration for different product variants.",
    category: "2023",
    slide_image: "slides/assembly-station.svg"
,
    additional_images: ["images/assembly-station-overview.svg","images/assembly-station-detail.svg"]
  },
  {
    id: 4,
    title: "Overhead Gantry Crane Structure",
    description: "Bridge-type overhead crane with 5-ton capacity, 8-meter span, and 2-meter lift height. Built with welded box girder construction, featuring variable frequency drive for smooth positioning and precision load placement.",
    category: "2023",
    slide_image: "slides/gantry-crane.svg"
  },
  {
    id: 5,
    title: "CNC Pipe Bending Machine Frame",
    description: "Heavy-duty frame for CNC pipe bending machine supporting tubes up to 100mm diameter. Includes clamping mechanism, bend die support, and material feed roller system for accurate forming of stainless steel and aluminum pipes.",
    category: "2023",
    slide_image: "slides/pipe-bending-machine.svg"
  },
  {
    id: 6,
    title: "Automated Pallet Transfer System",
    description: "Multi-zone pallet transfer system with index table, pusher mechanisms, and conveyor integration. Designed for automated production lines requiring precise pallet positioning and sequential process staging.",
    category: "2024",
    slide_image: "slides/pallet-system.svg"
  },
  {
    id: 7,
    title: "Precision Drilling Jig Table",
    description: "Multi-hole drilling jig with adjustable template plate, spring-loaded locators, and clamping system. Capable of producing consistent hole patterns with ±0.05mm accuracy across batch production runs.",
    category: "2024",
    slide_image: "slides/drilling-jig-table.svg"
  },
  {
    id: 8,
    title: "Hydraulic Lifting Table Design",
    description: "Double-scissor hydraulic lift table with 500 kg capacity, 1200mm stroke, and dual cylinder synchronization. Features overload protection, manual descent valve, and powder-coated steel construction.",
    category: "2024",
    slide_image: "slides/lifting-table.svg"
  },
  {
    id: 9,
    title: "CNC Machine Safety Guard",
    description: "Transparent polycarbonate safety enclosure with interlocked access doors, emergency stop integration, and chip collection system. Designed for CNC milling centers with full operator visibility during operation.",
    category: "2024",
    slide_image: "slides/cnc-guard.svg"
,
    additional_images: ["images/cnc-guard-open.svg","images/cnc-guard-detail.svg"]
  },
  {
    id: 10,
    title: "Automated Inspection Workstation",
    description: "Coordinate measuring workstation with illuminated inspection table, parts positioning fixture, and data collection terminal. Ergonomic design supports extended operator use with adjustable height and viewing angles.",
    category: "2024",
    slide_image: "slides/inspection-station.svg"
  },
  {
    id: 11,
    title: "Laser Safety Enclosure Panel",
    description: "Class 1 laser safety enclosure for material processing equipment. Features interlocked access panels, light-tight construction, key-operated control, and status indicator lighting per ISO 11553 standards.",
    category: "2024",
    slide_image: "slides/safety-enclosure.svg"
  },
  {
    id: 12,
    title: "Heavy-Duty Storage Rack System",
    description: "Pallet racking system with 2000 kg per level capacity, adjustable beam positioning at 75mm increments, and anti-tip bracing. Designed for warehouse storage of manufactured components and raw materials.",
    category: "2024",
    slide_image: "slides/storage-rack.svg"
  },
  {
    id: 13,
    title: "Ergonomic Mobile Workstation",
    description: "Height-adjustable mobile workstation with lockable casters, integrated power distribution, and adjustable monitor arm. Features powder-coated steel frame with ESD-safe work surface for electronics assembly.",
    category: "2025",
    slide_image: "slides/mobile-workstation.svg"
  },
  {
    id: 14,
    title: "Barrel Drum Handling Fixture",
    description: "Rotating drum handling fixture with hydraulic tilt mechanism and secure clamping jaws. Designed for 200-liter drum capacity, enabling safe emptying, mixing, and transfer of liquid and granular materials.",
    category: "2025",
    slide_image: "slides/drum-handler.svg"
  },
  {
    id: 15,
    title: "Vertical Lift Module Frame",
    description: "Vertical carousel storage system frame with dual tray lift mechanism, 800 kg total capacity, and programmable positioning. Optimizes floor space utilization for tool and component storage in production environments.",
    category: "2025",
    slide_image: "slides/vertical-lift.svg"
  },
  {
    id: 16,
    title: "Robotic Painting Cell Setup",
    description: "Multirobot painting cell with booth integration, paint supply manifold, and solvent recovery system. Cell layout accommodates part rotation for complete surface coverage with minimal paint waste.",
    category: "2025",
    slide_image: "slides/robotic-painting-cell.svg"
  },
  {
    id: 17,
    title: "Rotating Turntable Welding Fixture",
    description: "Indexing turntable fixture with 4-station rotary table, pneumatic clamping, and welded seam access. Enables continuous welding operation while operators load and unload parts at stationary positions.",
    category: "2025",
    slide_image: "slides/turntable-fixture.svg"
  },
  {
    id: 18,
    title: "Counterbalanced Torque Arm System",
    description: "Articulated counterbalance arm for suspended tool handling with infinite position stopping. Supports tools up to 50 kg with ergonomic floatation, reducing operator fatigue during repeated pick-and-place operations.",
    category: "2025",
    slide_image: "slides/torque-arm.svg"
  },
  {
    id: 19,
    title: "Modular Safety Fence System",
    description: "Interlocking safety fence panels with gate interlock switches and adjustable base plates. Quick-install design requires no welding, enabling rapid production cell reconfiguration while maintaining OSHA compliance.",
    category: "2025",
    slide_image: "slides/modular-fence.svg"
  },
  {
    id: 20,
    title: "Electric Chain Hoist Mount",
    description: "Ceiling-mounted chain hoist support bracket with swivel hook and load indicator. Designed for 2-ton lifting capacity with forged steel construction and certified safety factor of 4:1.",
    category: "2025",
    slide_image: "slides/chain-hoist.svg"
,
    additional_images: ["images/chain-hist-lifting.svg","images/chain-hoist-detail.svg"]
  },
  {
    id: 21,
    title: "CNC Machining Center Enclosure",
    description: "Full safety enclosure for CNC machining center with chip containment, coolant management, and observation windows. Features sound-dampening panels and integrated exhaust for operator comfort.",
    category: "2025",
    slide_image: "slides/cnc-machining-center.svg"
  },
  {
    id: 22,
    title: "Machine Vision Inspection Rig",
    description: "Fixed-mount machine vision inspection fixture with controlled lighting enclosure, parts positioning pallet, and reject mechanism. Supports automated dimensional inspection with ±0.02mm repeatability.",
    category: "2026",
    slide_image: "slides/vision-inspection.svg"
  },
  {
    id: 23,
    title: "Laser Cutter Safety Enclosure",
    description: "Interlocked safety enclosure for fiber laser cutting machine with fume extraction ports, emergency access windows, and laser-class filtering. Protects operators while maintaining full machine accessibility.",
    category: "2026",
    slide_image: "slides/laser-cutting-guard.svg"
  },
  {
    id: 24,
    title: "Sheet Metal Brake Tooling",
    description: "Custom bending tool set for sheet metal brake with progressive bend sequence fixture. Designed for producing consistent angles on enclosures and brackets up to 2.4m bend length.",
    category: "2026",
    slide_image: "slides/sheet-metal-brake.svg"
  },
  {
    id: 25,
    title: "Hydraulic Press Frame Design",
    description: "C-frame hydraulic press with 100-ton capacity, precision-ground platens, and digital force gauge integration. Designed for assembly, pressing, and forming operations in toolroom and production environments.",
    category: "2026",
    slide_image: "slides/hydraulic-press.svg"
  },
  {
    id: 26,
    title: "Gravity Roller Conveyor System",
    description: "Free-wheeling roller conveyor for product accumulation and manual push transport. Adjustable width rollers with side guides, designed for cart and pallet movement between production stages.",
    category: "2026",
    slide_image: "slides/roller-conveyor.svg"
  },
  {
    id: 27,
    title: "Robotic Welding Positioner Base",
    description: "Rotary welding positioner with 500 kg capacity table, tilting mechanism, and programmable rotation speed. synchronizes with robotic welding head for continuous seam welding on cylindrical and conical parts.",
    category: "2026",
    slide_image: "slides/welding-positioner.svg"
  },
  {
    id: 28,
    title: "Filter Cartridge Handling Jig",
    description: "Specialized handling fixture for cylindrical filter cartridge assembly with soft-jaw clamping and alignment pins. Protects delicate filter media while enabling precise component insertion during assembly.",
    category: "2026",
    slide_image: "slides/cartridge-filter.svg"
,
    additional_images: ["images/cartridge-filter-flow.svg","images/cartridge-filter-detail.svg"]
  },
  {
    id: 29,
    title: "Engine Test Stand Framework",
    description: "Heavy-duty test stand with dynamometer mounting interface, exhaust extraction connection, and fluid supply manifold. Rated for 500 HP engine testing with vibration isolation and safety roll cage.",
    category: "2026",
    slide_image: "slides/test-stand.svg"
  },
  {
    id: 30,
    title: "Seal Installation Tooling",
    description: "Pneumatic seal installation press with interchangeable mandrels and depth control stop. Ensures consistent seal deployment without damage for hydraulic and pneumatic cylinder assembly operations.",
    category: "2026",
    slide_image: "slides/seal-installation.svg"
  },
  {
    id: 31,
    title: "Precision Bearing Press Fixture",
    description: "Hydraulic bearing press with alignment guide, force gauge, and interchangeable sleeve set. Enables controlled press-fit installation of bearings up to 200mm diameter with measurable insertion force.",
    category: "2026",
    slide_image: "slides/bearing-press.svg"
,
    additional_images: ["images/bearing-press-action.svg","images/bearing-press-detail.svg"]
  },
  {
    id: 32,
    title: "Heat Exchanger Assembly Jig",
    description: "Plate-type heat exchanger assembly fixture with plate alignment guides, compression strap system, and tie-rod positioning. Ensures correct plate stacking sequence and uniform gasket compression.",
    category: "2026",
    slide_image: "slides/heat-exchanger.svg"
  },
  {
    id: 33,
    title: "Gasket Die Cutting Tool",
    description: "Manual die cutting press with custom die set for precision gasket production. Features adjustable depth stop, parallel blade clearance, and safety guard for consistent gasket quality across material types.",
    category: "2026",
    slide_image: "slides/gasket-cutting.svg"
  },
  {
    id: 34,
    title: "Compression Spring Tester Frame",
    description: "Spring testing fixture with digital load cell, deflection gauge, and programmable compression stop. Capable of testing springs from 10N to 50kN with data output for quality certification.",
    category: "2026",
    slide_image: "slides/spring-tester.svg"
  },
  {
    id: 35,
    title: "Linear Guide Rail Mounting Plate",
    description: "Precision-ground mounting plate for linear guide rail installation with adjustable shim pockets and calibration holes. Ensures parallel alignment within 0.02mm over 1000mm length for CNC axis construction.",
    category: "2026",
    slide_image: "slides/linear-guide.svg"
  },
  {
    id: 36,
    title: "Quick-Release Clamp System",
    description: "Cam-action quick clamp fixture set for rapid workpiece positioning. Features 100mm reach, 5kN clamping force, and interchangeable jaws for various workpiece geometries and material types.",
    category: "2026",
    slide_image: "slides/quick-clamp.svg"
  },
  {
    id: 37,
    title: "Precision V-Block Work Holding",
    description: "Hardened steel V-block set with ground V-groove and clamping slots. Designed for shaft and cylinder workholding during machining, grinding, and inspection operations with repeatable centerline height.",
    category: "2026",
    slide_image: "slides/v-block.svg"
  },
  {
    id: 38,
    title: "Magnetic Angle Plate Fixture",
    description: "Precision-ground magnetic angle plate with 90-degree and 45-degree faces, T-slot mounting, and swarf clearance. Provides rigid workholding for milling, grinding, and inspection setups.",
    category: "2026",
    slide_image: "slides/angle-plate.svg"
,
    additional_images: ["images/angle-plate-assembled.svg","images/angle-plate-detail.svg"]
  },
  {
    id: 39,
    title: "Universal Dividing Head Mount",
    description: "Indexing fixture base for universal dividing head with rotary table integration. Enables precise angular positioning for milling operations including gear cutting, spiral fluting, and bolt circle drilling.",
    category: "2026",
    slide_image: "slides/dividing-head.svg"
  },
  {
    id: 40,
    title: "CNC Tombstone Fixture Design",
    description: "Multi-sided tombstone fixture with T-slot grid, precision-ground mounting faces, and V-block inserts. Enables complete part machining in single setup across multiple faces for complex geometries.",
    category: "2026",
    slide_image: "slides/tombstone.svg"
  },
  {
    id: 41,
    title: "Vacuum Chuck Workholding",
    description: "Perforated vacuum chuck plate with adjustable flow control valves and edge sealing skirt. Provides uniform holding force for thin-sheet and lightweight workpieces during CNC routing and drilling.",
    category: "2026",
    slide_image: "slides/vacuum-chuck.svg"
  },
  {
    id: 42,
    title: "Multi-Collet Tool Holder Plate",
    description: "Organized tool storage plate with indexed collet pockets, size labeling, and protective caps. Designed for quick tool changeover in CNC machining centers with full visibility of tool inventory.",
    category: "2026",
    slide_image: "slides/collet-holder.svg"
  },
  {
    id: 43,
    title: "CMM Probe Mounting Adapter",
    description: "Calibrated probe mounting adapter for coordinate measuring machine with traceable length measurement. Ensures repeatable probe positioning for touch-trigger and scanning probe configurations.",
    category: "2026",
    slide_image: "slides/probe-mount.svg"
  },
  {
    id: 44,
    title: "Dial Indicator Stand Assembly",
    description: "Magnetic base dial indicator stand with adjustable arm extension and fine-position lock. Provides rigid support for alignment verification, runout checking, and positional measurement tasks.",
    category: "2026",
    slide_image: "slides/dial-indicator.svg"
  },
  {
    id: 45,
    title: "Adjustable Leveling Foot Design",
    description: "Threaded leveling foot with locknut and anti-vibration insert for machine mounting. Available in M16 through M30 sizes with 20mm adjustment range for precise equipment leveling on uneven surfaces.",
    category: "2026",
    slide_image: "slides/leveling-foot.svg"
  },
  {
    id: 46,
    title: "Dust Collection Shield Panel",
    description: "Adjustable dust shield with flexible skirt and vacuum connection port for CNC machining operations. Directs chips and coolant toward collection system while maintaining operator visibility of cutting zone.",
    category: "2026",
    slide_image: "slides/dust-shield.svg"
  },
  {
    id: 47,
    title: "Machine Chip Guard Enclosure",
    description: "Heavy-duty chip guard assembly with reinforced mesh panel, hinged access door, and chip deflector plate. Contains cutting fluid splash and ejected chips during high-speed machining operations.",
    category: "2026",
    slide_image: "slides/chip-shield.svg"
,
    additional_images: ["images/chip-shield-installed.svg","images/chip-shield-detail.svg"]
  },
  {
    id: 48,
    title: "Coolant Collection Tray System",
    description: "Modular coolant tray system with sloped drainage, filter basket integration, and chemical-resistant coating. Captures and directs cutting fluid from machining operations back to central reservoir.",
    category: "2026",
    slide_image: "slides/coolant-tray.svg"
  },
  {
    id: 49,
    title: "Oil Filtration Unit Frame",
    description: "Mobile oil filtration cart with multi-stage filtration system, flow meter, and pressure gauge. Designed for hydraulic fluid purification and coolant maintenance in industrial machining environments.",
    category: "2026",
    slide_image: "slides/oil-filtration.svg"
  },
  {
    id: 50,
    title: "Pneumatic Air Rail Distribution",
    description: "Manifold air rail system with integrated pressure regulator, quick-connect fittings, and flow control valves. Distributes compressed air to multiple pneumatic tools and actuators with individual circuit control.",
    category: "2026",
    slide_image: "slides/air-rail.svg"
,
    additional_images: ["images/air-rail-side.svg","images/air-rail-detail.svg","images/air-rail-install.svg"]
  },
  {
    id: 51,
    title: "Cable Carrier Chain Support",
    description: "Energy chain mounting bracket and support rail system for cable carrier routing. Protects power and signal cables during repetitive machine axis movement with adjustable bend radius control.",
    category: "2026",
    slide_image: "slides/cable-carrier.svg"
,
    additional_images: ["images/cable-carrier-routed.svg","images/cable-carrier-detail.svg"]
  },
  {
    id: 52,
    title: "Modular Tool Storage Rack",
    description: "Wall-mounted tool storage system with configurable bins, shadow board outlines, and weight-rated shelves. Optimizes tool organization for assembly cells with visual inventory management.",
    category: "2026",
    slide_image: "slides/tool-holder.svg"
,
    additional_images: ["images/tool-holder-shanked.svg","images/tool-holder-detail.svg"]
  },
  {
    id: 53,
    title: "Sorting Part Bin Assembly",
    description: "Gravity-fed sorting bin system with adjustable dividers and label holders. Organizes small parts by size, specification, or assembly stage with ergonomic pick height and clear visual identification.",
    category: "2026",
    slide_image: "slides/part-bin.svg"
  },
  {
    id: 54,
    title: "Label Printer Mounting Bracket",
    description: "Adjustable label printer mount with quick-release mechanism and cable management loop. Positions printer at ergonomic height on workstations with full access to media loading and operation controls.",
    category: "2026",
    slide_image: "slides/label-printer.svg"
  },
  {
    id: 55,
    title: "HMI Panel Operator Stand",
    description: "Articulating HMI panel stand with tilt, swivel, and height adjustment. Supports human-machine interface terminals with secure mounting, cable routing, and vibration isolation for industrial environments.",
    category: "2026",
    slide_image: "slides/hmi-stand.svg"
  },
  {
    id: 56,
    title: "Emergency Stop Station Panel",
    description: "Wall-mounted emergency stop station with IP65-rated enclosure, mushroom-head E-stop button, and reset key. Includes pilot lamp status indication and provision for additional signal contacts.",
    category: "2026",
    slide_image: "slides/e-station.svg"
  },
];
