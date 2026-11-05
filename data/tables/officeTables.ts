import { TableProduct } from "./types";
import { FAQItem } from "../faqs";

// Helper to format currency
function formatLKR(amount: number): string {
  return `LKR ${amount.toLocaleString("en-US")}`;
}

// 1. Executive Tables (8 models)
export const executiveTables: TableProduct[] = [
  {
    id: "80",
    title: "PRESIDENTIAL EXECUTIVE DESK",
    code: "JDS-ET-001",
    price: formatLKR(135000),
    numericPrice: 135000,
    image: "/assets/ex/ex01.jpg",
    category: "Office",
    subcategory: "Executive Tables",
    description:
      "Flagship executive desk with hand-stitched leatherette writing pad, modesty privacy panel, integrated wire conduits, and matching mobile side credenza.",
    inStock: true,
    faqs: [
      {
        id: "jds-et-001-mat",
        question: "What materials and structural framework are used in the Presidential Executive Desk (JDS-ET-001)?",
        answer:
          "The Presidential Executive Desk (JDS-ET-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-et-001-feat",
        question: "How does the Presidential Executive Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-et-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Presidential Executive Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-et-001-maint",
        question: "How do I clean and maintain the Presidential Executive Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-et-001-del",
        question: "How is the Presidential Executive Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Presidential Executive Desk (JDS-ET-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "81",
    title: "L-SHAPED EXECUTIVE DESK",
    code: "JDS-ET-002",
    price: formatLKR(118000),
    numericPrice: 118000,
    image: "/assets/ex/ex02.jpg",
    category: "Office",
    subcategory: "Executive Tables",
    description:
      "Spacious L-shaped executive desk with deep executive worktop, return credenza with lockable drawers, and brushed aluminum accents.",
    inStock: true,
    faqs: [
      {
        id: "jds-et-002-mat",
        question: "What materials and structural framework are used in the L-shaped Executive Desk (JDS-ET-002)?",
        answer:
          "The L-shaped Executive Desk (JDS-ET-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-et-002-feat",
        question: "How does the L-shaped Executive Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-et-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the L-shaped Executive Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-et-002-maint",
        question: "How do I clean and maintain the L-shaped Executive Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-et-002-del",
        question: "How is the L-shaped Executive Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The L-shaped Executive Desk (JDS-ET-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "82",
    title: "MINIMALIST CEO DESK",
    code: "JDS-ET-003",
    price: formatLKR(105000),
    numericPrice: 105000,
    image: "/assets/ex/ex04.jpg",
    category: "Office",
    subcategory: "Executive Tables",
    description:
      "Architectural director desk combining warm woodgrain melamine tops with heavy-gauge matte black steel loop legs and cable management ports.",
    inStock: true,
    faqs: [
      {
        id: "jds-et-003-mat",
        question: "What materials and structural framework are used in the Minimalist Ceo Desk (JDS-ET-003)?",
        answer:
          "The Minimalist Ceo Desk (JDS-ET-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-et-003-feat",
        question: "How does the Minimalist Ceo Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-et-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Minimalist Ceo Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-et-003-maint",
        question: "How do I clean and maintain the Minimalist Ceo Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-et-003-del",
        question: "How is the Minimalist Ceo Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Minimalist Ceo Desk (JDS-ET-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "83",
    title: "CHARCOAL DIRECTOR DESK",
    code: "JDS-ET-004",
    price: formatLKR(122000),
    numericPrice: 122000,
    image: "/assets/ex/ex05.jpg",
    category: "Office",
    subcategory: "Executive Tables",
    description:
      "Contemporary matte dark charcoal executive desk with built-in wireless charging pad, lockable file drawers, and wire organizer tray.",
    inStock: true,
    faqs: [
      {
        id: "jds-et-004-mat",
        question: "What materials and structural framework are used in the Charcoal Director Desk (JDS-ET-004)?",
        answer:
          "The Charcoal Director Desk (JDS-ET-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-et-004-feat",
        question: "How does the Charcoal Director Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-et-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Charcoal Director Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-et-004-maint",
        question: "How do I clean and maintain the Charcoal Director Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-et-004-del",
        question: "How is the Charcoal Director Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Charcoal Director Desk (JDS-ET-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "84",
    title: "MODERN EXECUTIVE DESK",
    code: "JDS-ET-005",
    price: formatLKR(122000),
    numericPrice: 122000,
    image: "/assets/ex/ex06.jpg",
    category: "Office",
    subcategory: "Executive Tables",
    description:
      "Contemporary matte dark charcoal executive desk with built-in wireless charging pad, lockable file drawers, and wire organizer tray.",
    inStock: true,
    faqs: [
      {
        id: "jds-et-005-mat",
        question: "What materials and structural framework are used in the Modern Executive Desk (JDS-ET-005)?",
        answer:
          "The Modern Executive Desk (JDS-ET-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-et-005-feat",
        question: "How does the Modern Executive Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-et-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modern Executive Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-et-005-maint",
        question: "How do I clean and maintain the Modern Executive Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-et-005-del",
        question: "How is the Modern Executive Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modern Executive Desk (JDS-ET-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "85",
    title: "PREMIUM DIRECTOR TABLE",
    code: "JDS-ET-006",
    price: formatLKR(122000),
    numericPrice: 122000,
    image: "/assets/ex/ex07.jpg",
    category: "Office",
    subcategory: "Executive Tables",
    description:
      "Contemporary matte dark charcoal executive desk with built-in wireless charging pad, lockable file drawers, and wire organizer tray.",
    inStock: true,
    faqs: [
      {
        id: "jds-et-006-mat",
        question: "What materials and structural framework are used in the Premium Director Table (JDS-ET-006)?",
        answer:
          "The Premium Director Table (JDS-ET-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-et-006-feat",
        question: "How does the Premium Director Table accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-et-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Premium Director Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-et-006-maint",
        question: "How do I clean and maintain the Premium Director Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-et-006-del",
        question: "How is the Premium Director Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Premium Director Table (JDS-ET-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "86",
    title: "LUXURY EXECUTIVE DESK",
    code: "JDS-ET-007",
    price: formatLKR(122000),
    numericPrice: 122000,
    image: "/assets/ex/ex08.jpg",
    category: "Office",
    subcategory: "Executive Tables",
    description:
      "Contemporary matte dark charcoal executive desk with built-in wireless charging pad, lockable file drawers, and wire organizer tray.",
    inStock: true,
    faqs: [
      {
        id: "jds-et-007-mat",
        question: "What materials and structural framework are used in the Luxury Executive Desk (JDS-ET-007)?",
        answer:
          "The Luxury Executive Desk (JDS-ET-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-et-007-feat",
        question: "How does the Luxury Executive Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-et-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Luxury Executive Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-et-007-maint",
        question: "How do I clean and maintain the Luxury Executive Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-et-007-del",
        question: "How is the Luxury Executive Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Luxury Executive Desk (JDS-ET-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "87",
    title: "CONTEMPORARY CEO TABLE",
    code: "JDS-ET-008",
    price: formatLKR(122000),
    numericPrice: 122000,
    image: "/assets/ex/ex09.jpg",
    category: "Office",
    subcategory: "Executive Tables",
    description:
      "Contemporary matte dark charcoal executive desk with built-in wireless charging pad, lockable file drawers, and wire organizer tray.",
    inStock: true,
    faqs: [
      {
        id: "jds-et-008-mat",
        question: "What materials and structural framework are used in the Contemporary Ceo Table (JDS-ET-008)?",
        answer:
          "The Contemporary Ceo Table (JDS-ET-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-et-008-feat",
        question: "How does the Contemporary Ceo Table accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-et-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary Ceo Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-et-008-maint",
        question: "How do I clean and maintain the Contemporary Ceo Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-et-008-del",
        question: "How is the Contemporary Ceo Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary Ceo Table (JDS-ET-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
   
];

// 2. Manager Tables (10 models)
export const managerTables: TableProduct[] = [
  {
    id: "88",
    title: "CREDENZA MANAGER DESK",
    code: "JDS-MT-001",
    price: formatLKR(72000),
    numericPrice: 72000,
    image: "/assets/Manager/m01.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "Ergonomic managerial desk with attached side storage credenza, modesty front panel, and dual brushed desktop cable grommets.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-001-mat",
        question: "What materials and structural framework are used in the Credenza Manager Desk (JDS-MT-001)?",
        answer:
          "The Credenza Manager Desk (JDS-MT-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-001-feat",
        question: "How does the Credenza Manager Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Credenza Manager Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-001-maint",
        question: "How do I clean and maintain the Credenza Manager Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-001-del",
        question: "How is the Credenza Manager Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Credenza Manager Desk (JDS-MT-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "89",
    title: "SENIOR MANAGER EXECUTIVE DESK",
    code: "JDS-MT-002",
    price: formatLKR(68000),
    numericPrice: 68000,
    image: "/assets/Manager/m02.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "Natural warm melamine managerial desk with 3-drawer lockable pedestal, client consultation overhang, and durable edge protection.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-002-mat",
        question: "What materials and structural framework are used in the Senior Manager Executive Desk (JDS-MT-002)?",
        answer:
          "The Senior Manager Executive Desk (JDS-MT-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-002-feat",
        question: "How does the Senior Manager Executive Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Senior Manager Executive Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-002-maint",
        question: "How do I clean and maintain the Senior Manager Executive Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-002-del",
        question: "How is the Senior Manager Executive Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Senior Manager Executive Desk (JDS-MT-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "90",
    title: "LOCKABLE MANAGER SUITE",
    code: "JDS-MT-003",
    price: formatLKR(79000),
    numericPrice: 79000,
    image: "/assets/Manager/m03.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "High-capacity managerial desk featuring twin side pedestal drawer units, central keyboard tray, and heavy-duty melamine finish.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-003-mat",
        question: "What materials and structural framework are used in the Lockable Manager Suite (JDS-MT-003)?",
        answer:
          "The Lockable Manager Suite (JDS-MT-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-003-feat",
        question: "How does the Lockable Manager Suite accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Lockable Manager Suite?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-003-maint",
        question: "How do I clean and maintain the Lockable Manager Suite, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-003-del",
        question: "How is the Lockable Manager Suite delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Lockable Manager Suite (JDS-MT-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "91",
    title: "BRANCH MANAGER DESK",
    code: "JDS-MT-004",
    price: formatLKR(64000),
    numericPrice: 64000,
    image: "/assets/Manager/m04.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "Space-efficient manager desk designed for branch offices and consultation rooms, with powder-coated steel legs and document drawer.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-004-mat",
        question: "What materials and structural framework are used in the Branch Manager Desk (JDS-MT-004)?",
        answer:
          "The Branch Manager Desk (JDS-MT-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-004-feat",
        question: "How does the Branch Manager Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Branch Manager Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-004-maint",
        question: "How do I clean and maintain the Branch Manager Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-004-del",
        question: "How is the Branch Manager Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Branch Manager Desk (JDS-MT-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "92",
    title: "COMPACT MANAGER TABLE",
    code: "JDS-MT-005",
    price: formatLKR(64000),
    numericPrice: 64000,
    image: "/assets/Manager/m05.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "Space-efficient manager desk designed for branch offices and consultation rooms, with powder-coated steel legs and document drawer.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-005-mat",
        question: "What materials and structural framework are used in the Compact Manager Table (JDS-MT-005)?",
        answer:
          "The Compact Manager Table (JDS-MT-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-005-feat",
        question: "How does the Compact Manager Table accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Compact Manager Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-005-maint",
        question: "How do I clean and maintain the Compact Manager Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-005-del",
        question: "How is the Compact Manager Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Compact Manager Table (JDS-MT-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "93",
    title: "MODERN MANAGER DESK",
    code: "JDS-MT-006",
    price: formatLKR(64000),
    numericPrice: 64000,
    image: "/assets/Manager/m06.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "Space-efficient manager desk designed for branch offices and consultation rooms, with powder-coated steel legs and document drawer.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-006-mat",
        question: "What materials and structural framework are used in the Modern Manager Desk (JDS-MT-006)?",
        answer:
          "The Modern Manager Desk (JDS-MT-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-006-feat",
        question: "How does the Modern Manager Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modern Manager Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-006-maint",
        question: "How do I clean and maintain the Modern Manager Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-006-del",
        question: "How is the Modern Manager Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modern Manager Desk (JDS-MT-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "94",
    title: "CONTEMPORARY MANAGER DESK",
    code: "JDS-MT-007",
    price: formatLKR(64000),
    numericPrice: 64000,
    image: "/assets/Manager/m07.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "Space-efficient manager desk designed for branch offices and consultation rooms, with powder-coated steel legs and document drawer.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-007-mat",
        question: "What materials and structural framework are used in the Contemporary Manager Desk (JDS-MT-007)?",
        answer:
          "The Contemporary Manager Desk (JDS-MT-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-007-feat",
        question: "How does the Contemporary Manager Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary Manager Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-007-maint",
        question: "How do I clean and maintain the Contemporary Manager Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-007-del",
        question: "How is the Contemporary Manager Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary Manager Desk (JDS-MT-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "95",
    title: "EXECUTIVE MANAGER TABLE",
    code: "JDS-MT-008",
    price: formatLKR(64000),
    numericPrice: 64000,
    image: "/assets/Manager/m08.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "Space-efficient manager desk designed for branch offices and consultation rooms, with powder-coated steel legs and document drawer.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-008-mat",
        question: "What materials and structural framework are used in the Executive Manager Table (JDS-MT-008)?",
        answer:
          "The Executive Manager Table (JDS-MT-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-008-feat",
        question: "How does the Executive Manager Table accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Executive Manager Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-008-maint",
        question: "How do I clean and maintain the Executive Manager Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-008-del",
        question: "How is the Executive Manager Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Executive Manager Table (JDS-MT-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "96",
    title: "SLEEK MANAGER DESK",
    code: "JDS-MT-009",
    price: formatLKR(64000),
    numericPrice: 64000,
    image: "/assets/Manager/m09.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "Space-efficient manager desk designed for branch offices and consultation rooms, with powder-coated steel legs and document drawer.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-009-mat",
        question: "What materials and structural framework are used in the Sleek Manager Desk (JDS-MT-009)?",
        answer:
          "The Sleek Manager Desk (JDS-MT-009) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-009-feat",
        question: "How does the Sleek Manager Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-009-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Sleek Manager Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-009-maint",
        question: "How do I clean and maintain the Sleek Manager Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-009-del",
        question: "How is the Sleek Manager Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Sleek Manager Desk (JDS-MT-009) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "97",
    title: "PREMIUM MANAGER WORKSTATION",
    code: "JDS-MT-010",
    price: formatLKR(64000),
    numericPrice: 64000,
    image: "/assets/Manager/m10.jpg",
    category: "Office",
    subcategory: "Manager Tables",
    description:
      "Space-efficient manager desk designed for branch offices and consultation rooms, with powder-coated steel legs and document drawer.",
    inStock: true,
    faqs: [
      {
        id: "jds-mt-010-mat",
        question: "What materials and structural framework are used in the Premium Manager Workstation (JDS-MT-010)?",
        answer:
          "The Premium Manager Workstation (JDS-MT-010) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-mt-010-feat",
        question: "How does the Premium Manager Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-mt-010-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Premium Manager Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-mt-010-maint",
        question: "How do I clean and maintain the Premium Manager Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-mt-010-del",
        question: "How is the Premium Manager Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Premium Manager Workstation (JDS-MT-010) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 3. Officer Tables (8 models)
export const officerTables: TableProduct[] = [
  {
    id: "98",
    title: "STEEL FRAME OFFICER DESK",
    code: "JDS-OFC-001",
    price: formatLKR(48000),
    numericPrice: 48000,
    image: "/assets/Officer/of01.jpg",
    category: "Office",
    subcategory: "Officer Tables",
    description:
      "Robust commercial officer desk with square tubular steel frame, modesty panel, and scratch-resistant 25mm melamine top.",
    inStock: true,
    faqs: [
      {
        id: "jds-ofc-001-mat",
        question: "What materials and structural framework are used in the Steel Frame Officer Desk (JDS-OFC-001)?",
        answer:
          "The Steel Frame Officer Desk (JDS-OFC-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ofc-001-feat",
        question: "How does the Steel Frame Officer Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ofc-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Steel Frame Officer Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ofc-001-maint",
        question: "How do I clean and maintain the Steel Frame Officer Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ofc-001-del",
        question: "How is the Steel Frame Officer Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Steel Frame Officer Desk (JDS-OFC-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "99",
    title: "COMMERCIAL OFFICER WORKDESK",
    code: "JDS-OFC-002",
    price: formatLKR(52000),
    numericPrice: 52000,
    image: "/assets/Officer/of02.jpg",
    category: "Office",
    subcategory: "Officer Tables",
    description:
      "Standard corporate officer desk equipped with a mobile 3-drawer central locking pedestal and integrated laptop cable ports.",
    inStock: true,
    faqs: [
      {
        id: "jds-ofc-002-mat",
        question: "What materials and structural framework are used in the Commercial Officer Workdesk (JDS-OFC-002)?",
        answer:
          "The Commercial Officer Workdesk (JDS-OFC-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ofc-002-feat",
        question: "How does the Commercial Officer Workdesk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ofc-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Commercial Officer Workdesk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ofc-002-maint",
        question: "How do I clean and maintain the Commercial Officer Workdesk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ofc-002-del",
        question: "How is the Commercial Officer Workdesk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Commercial Officer Workdesk (JDS-OFC-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "100",
    title: "DOUBLE-DRAWER OFFICER DESK",
    code: "JDS-OFC-003",
    price: formatLKR(46000),
    numericPrice: 46000,
    image: "/assets/Officer/of03.jpg",
    category: "Office",
    subcategory: "Officer Tables",
    description:
      "Clean administrative desk with twin right-hand storage drawers, non-scratch leveling foot glides, and modern woodgrain finish.",
    inStock: true,
    faqs: [
      {
        id: "jds-ofc-003-mat",
        question: "What materials and structural framework are used in the Double-drawer Officer Desk (JDS-OFC-003)?",
        answer:
          "The Double-drawer Officer Desk (JDS-OFC-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ofc-003-feat",
        question: "How does the Double-drawer Officer Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ofc-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Double-drawer Officer Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ofc-003-maint",
        question: "How do I clean and maintain the Double-drawer Officer Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ofc-003-del",
        question: "How is the Double-drawer Officer Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Double-drawer Officer Desk (JDS-OFC-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "101",
    title: "MODULAR OPERATIONS DESK",
    code: "JDS-OFC-004",
    price: formatLKR(54000),
    numericPrice: 54000,
    image: "/assets/Officer/of04.jpg",
    category: "Office",
    subcategory: "Officer Tables",
    description:
      "Modular officer table designed for operational teams with integrated vertical wire snake riser and optional desk divider screen mounts.",
    inStock: true,
    faqs: [
      {
        id: "jds-ofc-004-mat",
        question: "What materials and structural framework are used in the Modular Operations Desk (JDS-OFC-004)?",
        answer:
          "The Modular Operations Desk (JDS-OFC-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ofc-004-feat",
        question: "How does the Modular Operations Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ofc-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modular Operations Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ofc-004-maint",
        question: "How do I clean and maintain the Modular Operations Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ofc-004-del",
        question: "How is the Modular Operations Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modular Operations Desk (JDS-OFC-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "102",
    title: "COMPACT OFFICER TABLE",
    code: "JDS-OFC-005",
    price: formatLKR(54000),
    numericPrice: 54000,
    image: "/assets/Officer/of05.jpg",
    category: "Office",
    subcategory: "Officer Tables",
    description:
      "Modular officer table designed for operational teams with integrated vertical wire snake riser and optional desk divider screen mounts.",
    inStock: true,
    faqs: [
      {
        id: "jds-ofc-005-mat",
        question: "What materials and structural framework are used in the Compact Officer Table (JDS-OFC-005)?",
        answer:
          "The Compact Officer Table (JDS-OFC-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ofc-005-feat",
        question: "How does the Compact Officer Table accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ofc-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Compact Officer Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ofc-005-maint",
        question: "How do I clean and maintain the Compact Officer Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ofc-005-del",
        question: "How is the Compact Officer Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Compact Officer Table (JDS-OFC-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  
 
  {
    id: "103",
    title: "MODERN OFFICER WORKSTATION",
    code: "JDS-OFC-006",
    price: formatLKR(54000),
    numericPrice: 54000,
    image: "/assets/Officer/of08.jpg",
    category: "Office",
    subcategory: "Officer Tables",
    description:
      "Modular officer table designed for operational teams with integrated vertical wire snake riser and optional desk divider screen mounts.",
    inStock: true,
    faqs: [
      {
        id: "jds-ofc-006-mat",
        question: "What materials and structural framework are used in the Modern Officer Workstation (JDS-OFC-006)?",
        answer:
          "The Modern Officer Workstation (JDS-OFC-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ofc-006-feat",
        question: "How does the Modern Officer Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ofc-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modern Officer Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ofc-006-maint",
        question: "How do I clean and maintain the Modern Officer Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ofc-006-del",
        question: "How is the Modern Officer Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modern Officer Workstation (JDS-OFC-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "104",
    title: "CLERK OFFICER TABLE",
    code: "JDS-OFC-007",
    price: formatLKR(54000),
    numericPrice: 54000,
    image: "/assets/Officer/of09.jpg",
    category: "Office",
    subcategory: "Officer Tables",
    description:
      "Modular officer table designed for operational teams with integrated vertical wire snake riser and optional desk divider screen mounts.",
    inStock: true,
    faqs: [
      {
        id: "jds-ofc-007-mat",
        question: "What materials and structural framework are used in the Clerk Officer Table (JDS-OFC-007)?",
        answer:
          "The Clerk Officer Table (JDS-OFC-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ofc-007-feat",
        question: "How does the Clerk Officer Table accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ofc-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Clerk Officer Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ofc-007-maint",
        question: "How do I clean and maintain the Clerk Officer Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ofc-007-del",
        question: "How is the Clerk Officer Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Clerk Officer Table (JDS-OFC-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "105",
    title: "STANDARD OFFICER DESK",
    code: "JDS-OFC-008",
    price: formatLKR(54000),
    numericPrice: 54000,
    image: "/assets/Officer/of10.jpg",
    category: "Office",
    subcategory: "Officer Tables",
    description:
      "Modular officer table designed for operational teams with integrated vertical wire snake riser and optional desk divider screen mounts.",
    inStock: true,
    faqs: [
      {
        id: "jds-ofc-008-mat",
        question: "What materials and structural framework are used in the Standard Officer Desk (JDS-OFC-008)?",
        answer:
          "The Standard Officer Desk (JDS-OFC-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ofc-008-feat",
        question: "How does the Standard Officer Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ofc-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Standard Officer Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ofc-008-maint",
        question: "How do I clean and maintain the Standard Officer Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ofc-008-del",
        question: "How is the Standard Officer Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Standard Officer Desk (JDS-OFC-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 4. Staff Tables (8 models)
export const staffTables: TableProduct[] = [
  {
    id: "106",
    title: "LINEAR STAFF WORKBENCH",
    code: "JDS-STF-001",
    price: formatLKR(42000),
    numericPrice: 42000,
    image: "/assets/sf/sf01.jpg",
    category: "Office",
    subcategory: "Staff Tables",
    description:
      "Open-plan commercial staff desk with continuous under-desk power/network wire basket and impact-resistant edge banding.",
    inStock: true,
    faqs: [
      {
        id: "jds-stf-001-mat",
        question: "What materials and structural framework are used in the Linear Staff Workbench (JDS-STF-001)?",
        answer:
          "The Linear Staff Workbench (JDS-STF-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-stf-001-feat",
        question: "What storage compartments and functional hardware are included in the Linear Staff Workbench?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-stf-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Linear Staff Workbench?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-stf-001-maint",
        question: "How do I clean and maintain the Linear Staff Workbench, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-stf-001-del",
        question: "How is the Linear Staff Workbench delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Linear Staff Workbench (JDS-STF-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "107",
    title: "SINGLE CLERK WORKTABLE",
    code: "JDS-STF-002",
    price: formatLKR(38000),
    numericPrice: 38000,
    image: "/assets/sf/sf02.jpg",
    category: "Office",
    subcategory: "Staff Tables",
    description:
      "Durable office clerk desk featuring a full-length metal modesty screen, heavy-duty melamine worktop, and lockable stationery drawer.",
    inStock: true,
    faqs: [
      {
        id: "jds-stf-002-mat",
        question: "What materials and structural framework are used in the Single Clerk Worktable (JDS-STF-002)?",
        answer:
          "The Single Clerk Worktable (JDS-STF-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-stf-002-feat",
        question: "What storage compartments and functional hardware are included in the Single Clerk Worktable?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-stf-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Single Clerk Worktable?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-stf-002-maint",
        question: "How do I clean and maintain the Single Clerk Worktable, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-stf-002-del",
        question: "How is the Single Clerk Worktable delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Single Clerk Worktable (JDS-STF-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "108",
    title: "DUAL STAFF DESK UNIT",
    code: "JDS-STF-003",
    price: formatLKR(56000),
    numericPrice: 56000,
    image: "/assets/sf/sf03.jpg",
    category: "Office",
    subcategory: "Staff Tables",
    description:
      "Back-to-back 2-person staff desk unit sharing a centralized cable spine and frosted acrylic privacy screen bracket.",
    inStock: true,
    faqs: [
      {
        id: "jds-stf-003-mat",
        question: "What materials and structural framework are used in the Dual Staff Desk Unit (JDS-STF-003)?",
        answer:
          "The Dual Staff Desk Unit (JDS-STF-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-stf-003-feat",
        question: "What storage compartments and functional hardware are included in the Dual Staff Desk Unit?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-stf-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Dual Staff Desk Unit?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-stf-003-maint",
        question: "How do I clean and maintain the Dual Staff Desk Unit, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-stf-003-del",
        question: "How is the Dual Staff Desk Unit delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Dual Staff Desk Unit (JDS-STF-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "109",
    title: "UTILITY STAFF WORKTABLE",
    code: "JDS-STF-004",
    price: formatLKR(44000),
    numericPrice: 44000,
    image: "/assets/sf/sf04.jpg",
    category: "Office",
    subcategory: "Staff Tables",
    description:
      "Multipurpose office worktable engineered for back-office sorting, document dispatching, and everyday staff administrative tasks.",
    inStock: true,
    faqs: [
      {
        id: "jds-stf-004-mat",
        question: "What materials and structural framework are used in the Utility Staff Worktable (JDS-STF-004)?",
        answer:
          "The Utility Staff Worktable (JDS-STF-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-stf-004-feat",
        question: "What storage compartments and functional hardware are included in the Utility Staff Worktable?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-stf-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Utility Staff Worktable?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-stf-004-maint",
        question: "How do I clean and maintain the Utility Staff Worktable, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-stf-004-del",
        question: "How is the Utility Staff Worktable delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Utility Staff Worktable (JDS-STF-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "110",
    title: "HEAVY-DUTY STAFF DESK",
    code: "JDS-STF-005",
    price: formatLKR(44000),
    numericPrice: 44000,
    image: "/assets/sf/sf05.jpg",
    category: "Office",
    subcategory: "Staff Tables",
    description:
      "Multipurpose office worktable engineered for back-office sorting, document dispatching, and everyday staff administrative tasks.",
    inStock: true,
    faqs: [
      {
        id: "jds-stf-005-mat",
        question: "What materials and structural framework are used in the Heavy-duty Staff Desk (JDS-STF-005)?",
        answer:
          "The Heavy-duty Staff Desk (JDS-STF-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-stf-005-feat",
        question: "What storage compartments and functional hardware are included in the Heavy-duty Staff Desk?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-stf-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Heavy-duty Staff Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-stf-005-maint",
        question: "How do I clean and maintain the Heavy-duty Staff Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-stf-005-del",
        question: "How is the Heavy-duty Staff Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Heavy-duty Staff Desk (JDS-STF-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "111",
    title: "MODULAR STAFF TABLE",
    code: "JDS-STF-006",
    price: formatLKR(44000),
    numericPrice: 44000,
    image: "/assets/sf/sf06.jpg",
    category: "Office",
    subcategory: "Staff Tables",
    description:
      "Multipurpose office worktable engineered for back-office sorting, document dispatching, and everyday staff administrative tasks.",
    inStock: true,
    faqs: [
      {
        id: "jds-stf-006-mat",
        question: "What materials and structural framework are used in the Modular Staff Table (JDS-STF-006)?",
        answer:
          "The Modular Staff Table (JDS-STF-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-stf-006-feat",
        question: "What storage compartments and functional hardware are included in the Modular Staff Table?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-stf-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modular Staff Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-stf-006-maint",
        question: "How do I clean and maintain the Modular Staff Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-stf-006-del",
        question: "How is the Modular Staff Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modular Staff Table (JDS-STF-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "112",
    title: "OPEN PLAN STAFF DESK",
    code: "JDS-STF-007",
    price: formatLKR(44000),
    numericPrice: 44000,
    image: "/assets/sf/sf07.jpg",
    category: "Office",
    subcategory: "Staff Tables",
    description:
      "Multipurpose office worktable engineered for back-office sorting, document dispatching, and everyday staff administrative tasks.",
    inStock: true,
    faqs: [
      {
        id: "jds-stf-007-mat",
        question: "What materials and structural framework are used in the Open Plan Staff Desk (JDS-STF-007)?",
        answer:
          "The Open Plan Staff Desk (JDS-STF-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-stf-007-feat",
        question: "What storage compartments and functional hardware are included in the Open Plan Staff Desk?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-stf-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Open Plan Staff Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-stf-007-maint",
        question: "How do I clean and maintain the Open Plan Staff Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-stf-007-del",
        question: "How is the Open Plan Staff Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Open Plan Staff Desk (JDS-STF-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "113",
    title: "COMPACT STAFF WORKSTATION",
    code: "JDS-STF-008",
    price: formatLKR(44000),
    numericPrice: 44000,
    image: "/assets/sf/sf08.jpg",
    category: "Office",
    subcategory: "Staff Tables",
    description:
      "Multipurpose office worktable engineered for back-office sorting, document dispatching, and everyday staff administrative tasks.",
    inStock: true,
    faqs: [
      {
        id: "jds-stf-008-mat",
        question: "What materials and structural framework are used in the Compact Staff Workstation (JDS-STF-008)?",
        answer:
          "The Compact Staff Workstation (JDS-STF-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-stf-008-feat",
        question: "What storage compartments and functional hardware are included in the Compact Staff Workstation?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-stf-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Compact Staff Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-stf-008-maint",
        question: "How do I clean and maintain the Compact Staff Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-stf-008-del",
        question: "How is the Compact Staff Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Compact Staff Workstation (JDS-STF-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 5. Meeting Tables (9 models)
export const meetingTables: TableProduct[] = [
  {
    id: "114",
    title: "X-FRAME STEEL BOARDROOM TABLE",
    code: "JDS-MEET-001",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-01.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Expansive boardroom conference table with architectural steel X-trestle legs and integrated flip-top cable management channels.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-001-mat",
        question: "What materials and structural framework are used in the X-frame Steel Boardroom Table (JDS-MEET-001)?",
        answer:
          "The X-frame Steel Boardroom Table (JDS-MEET-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-001-feat",
        question: "Does the X-frame Steel Boardroom Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the X-frame Steel Boardroom Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-001-maint",
        question: "How do I clean and maintain the X-frame Steel Boardroom Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-001-del",
        question: "How is the X-frame Steel Boardroom Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The X-frame Steel Boardroom Table (JDS-MEET-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "115",
    title: "MATTE BLACK BOARDROOM TABLE",
    code: "JDS-MEET-002",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-02.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Modern monolithic black conference table with angled slab legs and streamlined executive finish.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-002-mat",
        question: "What materials and structural framework are used in the Matte Black Boardroom Table (JDS-MEET-002)?",
        answer:
          "The Matte Black Boardroom Table (JDS-MEET-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-002-feat",
        question: "Does the Matte Black Boardroom Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Matte Black Boardroom Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-002-maint",
        question: "How do I clean and maintain the Matte Black Boardroom Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-002-del",
        question: "How is the Matte Black Boardroom Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Matte Black Boardroom Table (JDS-MEET-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "116",
    title: "TRAPEZOID SLED MEETING TABLE",
    code: "JDS-MEET-003",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-03.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Melamine woodgrain surface paired with black trapezoid sled legs and dual integrated cable boxes.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-003-mat",
        question: "What materials and structural framework are used in the Trapezoid Sled Meeting Table (JDS-MEET-003)?",
        answer:
          "The Trapezoid Sled Meeting Table (JDS-MEET-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-003-feat",
        question: "Does the Trapezoid Sled Meeting Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Trapezoid Sled Meeting Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-003-maint",
        question: "How do I clean and maintain the Trapezoid Sled Meeting Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-003-del",
        question: "How is the Trapezoid Sled Meeting Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Trapezoid Sled Meeting Table (JDS-MEET-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
        {
    id: "117",
    title: "TRESTLE BASE BOARDROOM TABLE",
    code: "JDS-MEET-004",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-04.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Substantial conference table supported by heavy-duty trestle pillar bases.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-004-mat",
        question: "What materials and structural framework are used in the Trestle Base Boardroom Table (JDS-MEET-004)?",
        answer:
          "The Trestle Base Boardroom Table (JDS-MEET-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-004-feat",
        question: "Does the Trestle Base Boardroom Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Trestle Base Boardroom Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-004-maint",
        question: "How do I clean and maintain the Trestle Base Boardroom Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-004-del",
        question: "How is the Trestle Base Boardroom Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Trestle Base Boardroom Table (JDS-MEET-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "118",
    title: "CONCRETE V-LEG BOARDROOM TABLE",
    code: "JDS-MEET-005",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-05.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Industrial cast concrete textured top resting on bold sculptural V-angled support legs.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-005-mat",
        question: "What materials and structural framework are used in the Concrete V-leg Boardroom Table (JDS-MEET-005)?",
        answer:
          "The Concrete V-leg Boardroom Table (JDS-MEET-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-005-feat",
        question: "Does the Concrete V-leg Boardroom Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Concrete V-leg Boardroom Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-005-maint",
        question: "How do I clean and maintain the Concrete V-leg Boardroom Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-005-del",
        question: "How is the Concrete V-leg Boardroom Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Concrete V-leg Boardroom Table (JDS-MEET-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
        {
    id: "119",
    title: "CURVED EDGE CONFERENCE TABLE",
    code: "JDS-MEET-006",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-06.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Warm woodgrain conference table featuring rounded safety corners and solid panel pedestal supports.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-006-mat",
        question: "What materials and structural framework are used in the Curved Edge Conference Table (JDS-MEET-006)?",
        answer:
          "The Curved Edge Conference Table (JDS-MEET-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-006-feat",
        question: "Does the Curved Edge Conference Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Curved Edge Conference Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-006-maint",
        question: "How do I clean and maintain the Curved Edge Conference Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-006-del",
        question: "How is the Curved Edge Conference Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Curved Edge Conference Table (JDS-MEET-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
        {
    id: "120",
    title: "ROUND PEDESTAL MEETING TABLE",
    code: "JDS-MEET-007",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-07.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Circular melamine meeting table with dark inlay border and heavy-gauge four-star steel pedestal.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-007-mat",
        question: "What materials and structural framework are used in the Round Pedestal Meeting Table (JDS-MEET-007)?",
        answer:
          "The Round Pedestal Meeting Table (JDS-MEET-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-007-feat",
        question: "Does the Round Pedestal Meeting Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Round Pedestal Meeting Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-007-maint",
        question: "How do I clean and maintain the Round Pedestal Meeting Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-007-del",
        question: "How is the Round Pedestal Meeting Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Round Pedestal Meeting Table (JDS-MEET-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
        {
    id: "121",
    title: "ROUND CROSS-BASE MEETING TABLE",
    code: "JDS-MEET-008",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-08.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Round collaborative discussion table crafted with natural melamine and interlocking cross-panel base.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-008-mat",
        question: "What materials and structural framework are used in the Round Cross-base Meeting Table (JDS-MEET-008)?",
        answer:
          "The Round Cross-base Meeting Table (JDS-MEET-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-008-feat",
        question: "Does the Round Cross-base Meeting Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Round Cross-base Meeting Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-008-maint",
        question: "How do I clean and maintain the Round Cross-base Meeting Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-008-del",
        question: "How is the Round Cross-base Meeting Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Round Cross-base Meeting Table (JDS-MEET-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
        {
    id: "122",
    title: "MODULAR TWO-TONE BOARDROOM TABLE",
    code: "JDS-MEET-009",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-09.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Multi-section modular boardroom table with natural timber worktop and deep charcoal privacy leg panels.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-009-mat",
        question: "What materials and structural framework are used in the Modular Two-tone Boardroom Table (JDS-MEET-009)?",
        answer:
          "The Modular Two-tone Boardroom Table (JDS-MEET-009) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-009-feat",
        question: "Does the Modular Two-tone Boardroom Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-009-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modular Two-tone Boardroom Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-009-maint",
        question: "How do I clean and maintain the Modular Two-tone Boardroom Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-009-del",
        question: "How is the Modular Two-tone Boardroom Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modular Two-tone Boardroom Table (JDS-MEET-009) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
        {
    id: "123",
    title: "MINIMALIST WHITE BOARDROOM TABLE",
    code: "JDS-MEET-010",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/mt/mt-10.jpg",
    category: "Office",
    subcategory: "Meeting Tables",
    description:
      "Ultra-clean seamless all-white boardroom conference table with clean architectural block leg supports.",
    inStock: true,
    faqs: [
      {
        id: "jds-meet-010-mat",
        question: "What materials and structural framework are used in the Minimalist White Boardroom Table (JDS-MEET-010)?",
        answer:
          "The Minimalist White Boardroom Table (JDS-MEET-010) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-meet-010-feat",
        question: "Does the Minimalist White Boardroom Table support conference presentation cabling and modular expansion?",
        answer:
          "Yes! It includes central flip-up aluminum cable boxes for HDMI and power connectivity, and its modular frame allows additional middle leaf extensions as your meeting requirements grow.",
      },
      {
        id: "jds-meet-010-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Minimalist White Boardroom Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-meet-010-maint",
        question: "How do I clean and maintain the Minimalist White Boardroom Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-meet-010-del",
        question: "How is the Minimalist White Boardroom Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Minimalist White Boardroom Table (JDS-MEET-010) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
 

];

// 6. Computer Tables (8 models)
export const computerTables: TableProduct[] = [
  {
    id: "124",
    title: "WORKSTATION COMPUTER DESK",
    code: "JDS-CPT-001",
    price: formatLKR(38000),
    numericPrice: 38000,
    image: "/assets/ct/ct01.jpg",
    category: "Office",
    subcategory: "Computer Tables",
    description:
      "Heavy-duty IT workstation computer desk with ventilated CPU floor cradle, keyboard slider, and desktop cable channel.",
    inStock: true,
    faqs: [
      {
        id: "jds-cpt-001-mat",
        question: "What materials and structural framework are used in the Workstation Computer Desk (JDS-CPT-001)?",
        answer:
          "The Workstation Computer Desk (JDS-CPT-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cpt-001-feat",
        question: "What ergonomic features and wire management are built into the Workstation Computer Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-cpt-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Workstation Computer Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cpt-001-maint",
        question: "How do I clean and maintain the Workstation Computer Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cpt-001-del",
        question: "How is the Workstation Computer Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Workstation Computer Desk (JDS-CPT-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "125",
    title: "DUAL-MONITOR COMPUTER TABLE",
    code: "JDS-CPT-002",
    price: formatLKR(44000),
    numericPrice: 44000,
    image: "/assets/ct/ct02.jpg",
    category: "Office",
    subcategory: "Computer Tables",
    description:
      "Reinforced computer table with dual monitor arm mounting lip, headphone hook, and cable grommet array for developers and designers.",
    inStock: true,
    faqs: [
      {
        id: "jds-cpt-002-mat",
        question: "What materials and structural framework are used in the Dual-monitor Computer Table (JDS-CPT-002)?",
        answer:
          "The Dual-monitor Computer Table (JDS-CPT-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cpt-002-feat",
        question: "What ergonomic features and wire management are built into the Dual-monitor Computer Table?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-cpt-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Dual-monitor Computer Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cpt-002-maint",
        question: "How do I clean and maintain the Dual-monitor Computer Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cpt-002-del",
        question: "How is the Dual-monitor Computer Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Dual-monitor Computer Table (JDS-CPT-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "126",
    title: "CALL CENTER IT DESK",
    code: "JDS-CPT-003",
    price: formatLKR(41000),
    numericPrice: 41000,
    image: "/assets/ct/ct03.jpg",
    category: "Office",
    subcategory: "Computer Tables",
    description:
      "High-density computer desk built for customer care call centers, featuring discrete acoustic divider mounts and under-counter wiring.",
    inStock: true,
    faqs: [
      {
        id: "jds-cpt-003-mat",
        question: "What materials and structural framework are used in the Call Center It Desk (JDS-CPT-003)?",
        answer:
          "The Call Center It Desk (JDS-CPT-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cpt-003-feat",
        question: "What ergonomic features and wire management are built into the Call Center It Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-cpt-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Call Center It Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cpt-003-maint",
        question: "How do I clean and maintain the Call Center It Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cpt-003-del",
        question: "How is the Call Center It Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Call Center It Desk (JDS-CPT-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "127",
    title: "LAB COMPUTER DESK",
    code: "JDS-CPT-004",
    price: formatLKR(34000),
    numericPrice: 34000,
    image: "/assets/ct/ct04.jpg",
    category: "Office",
    subcategory: "Computer Tables",
    description:
      "Space-efficient data entry desk with lockable storage drawer, keyboard shelf, and non-marking industrial caster wheels.",
    inStock: true,
    faqs: [
      {
        id: "jds-cpt-004-mat",
        question: "What materials and structural framework are used in the Lab Computer Desk (JDS-CPT-004)?",
        answer:
          "The Lab Computer Desk (JDS-CPT-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cpt-004-feat",
        question: "What ergonomic features and wire management are built into the Lab Computer Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-cpt-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Lab Computer Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cpt-004-maint",
        question: "How do I clean and maintain the Lab Computer Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cpt-004-del",
        question: "How is the Lab Computer Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Lab Computer Desk (JDS-CPT-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "128",
    title: "COMPACT PC WORKTABLE",
    code: "JDS-CPT-005",
    price: formatLKR(34000),
    numericPrice: 34000,
    image: "/assets/ct/ct05.jpg",
    category: "Office",
    subcategory: "Computer Tables",
    description:
      "Space-efficient data entry desk with lockable storage drawer, keyboard shelf, and non-marking industrial caster wheels.",
    inStock: true,
    faqs: [
      {
        id: "jds-cpt-005-mat",
        question: "What materials and structural framework are used in the Compact Pc Worktable (JDS-CPT-005)?",
        answer:
          "The Compact Pc Worktable (JDS-CPT-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cpt-005-feat",
        question: "What ergonomic features and wire management are built into the Compact Pc Worktable?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-cpt-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Compact Pc Worktable?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cpt-005-maint",
        question: "How do I clean and maintain the Compact Pc Worktable, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cpt-005-del",
        question: "How is the Compact Pc Worktable delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Compact Pc Worktable (JDS-CPT-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "129",
    title: "MODERN DESKTOP PC TABLE",
    code: "JDS-CPT-006",
    price: formatLKR(34000),
    numericPrice: 34000,
    image: "/assets/ct/ct06.jpg",
    category: "Office",
    subcategory: "Computer Tables",
    description:
      "Space-efficient data entry desk with lockable storage drawer, keyboard shelf, and non-marking industrial caster wheels.",
    inStock: true,
    faqs: [
      {
        id: "jds-cpt-006-mat",
        question: "What materials and structural framework are used in the Modern Desktop Pc Table (JDS-CPT-006)?",
        answer:
          "The Modern Desktop Pc Table (JDS-CPT-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cpt-006-feat",
        question: "What ergonomic features and wire management are built into the Modern Desktop Pc Table?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-cpt-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modern Desktop Pc Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cpt-006-maint",
        question: "How do I clean and maintain the Modern Desktop Pc Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cpt-006-del",
        question: "How is the Modern Desktop Pc Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modern Desktop Pc Table (JDS-CPT-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "130",
    title: "KEYBOARD TRAY COMPUTER DESK",
    code: "JDS-CPT-007",
    price: formatLKR(34000),
    numericPrice: 34000,
    image: "/assets/ct/ct07.jpg",
    category: "Office",
    subcategory: "Computer Tables",
    description:
      "Space-efficient data entry desk with lockable storage drawer, keyboard shelf, and non-marking industrial caster wheels.",
    inStock: true,
    faqs: [
      {
        id: "jds-cpt-007-mat",
        question: "What materials and structural framework are used in the Keyboard Tray Computer Desk (JDS-CPT-007)?",
        answer:
          "The Keyboard Tray Computer Desk (JDS-CPT-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cpt-007-feat",
        question: "What ergonomic features and wire management are built into the Keyboard Tray Computer Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-cpt-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Keyboard Tray Computer Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cpt-007-maint",
        question: "How do I clean and maintain the Keyboard Tray Computer Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cpt-007-del",
        question: "How is the Keyboard Tray Computer Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Keyboard Tray Computer Desk (JDS-CPT-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "131",
    title: "DATA ENTRY COMPUTER DESK",
    code: "JDS-CPT-008",
    price: formatLKR(34000),
    numericPrice: 34000,
    image: "/assets/ct/ct08.jpg",
    category: "Office",
    subcategory: "Computer Tables",
    description:
      "Space-efficient data entry desk with lockable storage drawer, keyboard shelf, and non-marking industrial caster wheels.",
    inStock: true,
    faqs: [
      {
        id: "jds-cpt-008-mat",
        question: "What materials and structural framework are used in the Data Entry Computer Desk (JDS-CPT-008)?",
        answer:
          "The Data Entry Computer Desk (JDS-CPT-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cpt-008-feat",
        question: "What ergonomic features and wire management are built into the Data Entry Computer Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-cpt-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Data Entry Computer Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cpt-008-maint",
        question: "How do I clean and maintain the Data Entry Computer Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cpt-008-del",
        question: "How is the Data Entry Computer Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Data Entry Computer Desk (JDS-CPT-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 7. Workstations (12 models)
export const workstationTables: TableProduct[] = [
  {
    id: "132",
    title: "4-PERSON CLUSTER WORKSTATION",
    code: "JDS-WS-001",
    price: formatLKR(115000),
    numericPrice: 115000,
    image: "/assets/wk/wk01.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Modular 4-person workstation pod with pin-able acoustic fabric divider screens, central cable raceway spine, and individual mobile pedestals.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-001-mat",
        question: "What materials and structural framework are used in the 4-person Cluster Workstation (JDS-WS-001)?",
        answer:
          "The 4-person Cluster Workstation (JDS-WS-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-001-feat",
        question: "How does the 4-person Cluster Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the 4-person Cluster Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-001-maint",
        question: "How do I clean and maintain the 4-person Cluster Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-001-del",
        question: "How is the 4-person Cluster Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The 4-person Cluster Workstation (JDS-WS-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "133",
    title: "6-PERSON OPEN PLAN WORKSTATION",
    code: "JDS-WS-002",
    price: formatLKR(165000),
    numericPrice: 165000,
    image: "/assets/wk/wk02.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "High-efficiency 6-seat collaborative workstation cluster with integrated electrical wire ducting and frosted privacy glass partitions.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-002-mat",
        question: "What materials and structural framework are used in the 6-person Open Plan Workstation (JDS-WS-002)?",
        answer:
          "The 6-person Open Plan Workstation (JDS-WS-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-002-feat",
        question: "How does the 6-person Open Plan Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the 6-person Open Plan Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-002-maint",
        question: "How do I clean and maintain the 6-person Open Plan Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-002-del",
        question: "How is the 6-person Open Plan Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The 6-person Open Plan Workstation (JDS-WS-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "134",
    title: "2-PERSON COLLABORATIVE DESK",
    code: "JDS-WS-003",
    price: formatLKR(68000),
    numericPrice: 68000,
    image: "/assets/wk/wk03.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Compact 2-person workstation desk setup with acoustic divider partition and shared cable management trunking.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-003-mat",
        question: "What materials and structural framework are used in the 2-person Collaborative Desk (JDS-WS-003)?",
        answer:
          "The 2-person Collaborative Desk (JDS-WS-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-003-feat",
        question: "How does the 2-person Collaborative Desk accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the 2-person Collaborative Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-003-maint",
        question: "How do I clean and maintain the 2-person Collaborative Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-003-del",
        question: "How is the 2-person Collaborative Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The 2-person Collaborative Desk (JDS-WS-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "135",
    title: "PRIVACY SCREEN WORKSTATION",
    code: "JDS-WS-004",
    price: formatLKR(89000),
    numericPrice: 89000,
    image: "/assets/wk/wk04.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Premium workstation cluster with tempered glass privacy screens, warm woodgrain melamine desktops, and lockable credenza side returns.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-004-mat",
        question: "What materials and structural framework are used in the Privacy Screen Workstation (JDS-WS-004)?",
        answer:
          "The Privacy Screen Workstation (JDS-WS-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-004-feat",
        question: "How does the Privacy Screen Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Privacy Screen Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-004-maint",
        question: "How do I clean and maintain the Privacy Screen Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-004-del",
        question: "How is the Privacy Screen Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Privacy Screen Workstation (JDS-WS-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "136",
    title: "MODULAR POD WORKSTATION",
    code: "JDS-WS-005",
    price: formatLKR(89000),
    numericPrice: 89000,
    image: "/assets/wk/wk05.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Premium workstation cluster with tempered glass privacy screens, warm woodgrain melamine desktops, and lockable credenza side returns.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-005-mat",
        question: "What materials and structural framework are used in the Modular Pod Workstation (JDS-WS-005)?",
        answer:
          "The Modular Pod Workstation (JDS-WS-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-005-feat",
        question: "How does the Modular Pod Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modular Pod Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-005-maint",
        question: "How do I clean and maintain the Modular Pod Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-005-del",
        question: "How is the Modular Pod Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modular Pod Workstation (JDS-WS-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "137",
    title: "BACK-TO-BACK WORKSTATION",
    code: "JDS-WS-006",
    price: formatLKR(89000),
    numericPrice: 89000,
    image: "/assets/wk/wk06.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Premium workstation cluster with tempered glass privacy screens, warm woodgrain melamine desktops, and lockable credenza side returns.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-006-mat",
        question: "What materials and structural framework are used in the Back-to-back Workstation (JDS-WS-006)?",
        answer:
          "The Back-to-back Workstation (JDS-WS-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-006-feat",
        question: "How does the Back-to-back Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Back-to-back Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-006-maint",
        question: "How do I clean and maintain the Back-to-back Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-006-del",
        question: "How is the Back-to-back Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Back-to-back Workstation (JDS-WS-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "138",
    title: "DUAL BENCH WORKSTATION",
    code: "JDS-WS-007",
    price: formatLKR(89000),
    numericPrice: 89000,
    image: "/assets/wk/wk07.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Premium workstation cluster with tempered glass privacy screens, warm woodgrain melamine desktops, and lockable credenza side returns.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-007-mat",
        question: "What materials and structural framework are used in the Dual Bench Workstation (JDS-WS-007)?",
        answer:
          "The Dual Bench Workstation (JDS-WS-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-007-feat",
        question: "How does the Dual Bench Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Dual Bench Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-007-maint",
        question: "How do I clean and maintain the Dual Bench Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-007-del",
        question: "How is the Dual Bench Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Dual Bench Workstation (JDS-WS-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "139",
    title: "EXECUTIVE SUITE WORKSTATION",
    code: "JDS-WS-008",
    price: formatLKR(89000),
    numericPrice: 89000,
    image: "/assets/wk/wk08.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Premium workstation cluster with tempered glass privacy screens, warm woodgrain melamine desktops, and lockable credenza side returns.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-008-mat",
        question: "What materials and structural framework are used in the Executive Suite Workstation (JDS-WS-008)?",
        answer:
          "The Executive Suite Workstation (JDS-WS-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-008-feat",
        question: "How does the Executive Suite Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Executive Suite Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-008-maint",
        question: "How do I clean and maintain the Executive Suite Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-008-del",
        question: "How is the Executive Suite Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Executive Suite Workstation (JDS-WS-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "140",
    title: "OPEN CLUSTER WORKSTATION",
    code: "JDS-WS-009",
    price: formatLKR(89000),
    numericPrice: 89000,
    image: "/assets/wk/wk09.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Premium workstation cluster with tempered glass privacy screens, warm woodgrain melamine desktops, and lockable credenza side returns.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-009-mat",
        question: "What materials and structural framework are used in the Open Cluster Workstation (JDS-WS-009)?",
        answer:
          "The Open Cluster Workstation (JDS-WS-009) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-009-feat",
        question: "How does the Open Cluster Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-009-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Open Cluster Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-009-maint",
        question: "How do I clean and maintain the Open Cluster Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-009-del",
        question: "How is the Open Cluster Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Open Cluster Workstation (JDS-WS-009) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "141",
    title: "CABLE-MANAGED WORKSTATION",
    code: "JDS-WS-010",
    price: formatLKR(89000),
    numericPrice: 89000,
    image: "/assets/wk/wk10.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Premium workstation cluster with tempered glass privacy screens, warm woodgrain melamine desktops, and lockable credenza side returns.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-010-mat",
        question: "What materials and structural framework are used in the Cable-managed Workstation (JDS-WS-010)?",
        answer:
          "The Cable-managed Workstation (JDS-WS-010) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-010-feat",
        question: "How does the Cable-managed Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-010-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Cable-managed Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-010-maint",
        question: "How do I clean and maintain the Cable-managed Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-010-del",
        question: "How is the Cable-managed Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Cable-managed Workstation (JDS-WS-010) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "142",
    title: "OFFICE CUBICLE WORKSTATION",
    code: "JDS-WS-011",
    price: formatLKR(89000),
    numericPrice: 89000,
    image: "/assets/wk/wk11.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Premium workstation cluster with tempered glass privacy screens, warm woodgrain melamine desktops, and lockable credenza side returns.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-011-mat",
        question: "What materials and structural framework are used in the Office Cubicle Workstation (JDS-WS-011)?",
        answer:
          "The Office Cubicle Workstation (JDS-WS-011) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-011-feat",
        question: "How does the Office Cubicle Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-011-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Office Cubicle Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-011-maint",
        question: "How do I clean and maintain the Office Cubicle Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-011-del",
        question: "How is the Office Cubicle Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Office Cubicle Workstation (JDS-WS-011) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "143",
    title: "DIVIDER SCREEN WORKSTATION",
    code: "JDS-WS-012",
    price: formatLKR(89000),
    numericPrice: 89000,
    image: "/assets/wk/wk12.jpg",
    category: "Office",
    subcategory: "Workstations",
    description:
      "Premium workstation cluster with tempered glass privacy screens, warm woodgrain melamine desktops, and lockable credenza side returns.",
    inStock: true,
    faqs: [
      {
        id: "jds-ws-012-mat",
        question: "What materials and structural framework are used in the Divider Screen Workstation (JDS-WS-012)?",
        answer:
          "The Divider Screen Workstation (JDS-WS-012) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ws-012-feat",
        question: "How does the Divider Screen Workstation accommodate computer cables and confidential document storage?",
        answer:
          "The desk includes desktop cable grommets, under-desk wire routing raceways, and a central-locking 3-drawer pedestal with master keys for secure document filing.",
      },
      {
        id: "jds-ws-012-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Divider Screen Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ws-012-maint",
        question: "How do I clean and maintain the Divider Screen Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ws-012-del",
        question: "How is the Divider Screen Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Divider Screen Workstation (JDS-WS-012) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 8. Security Tables (4 models)
export const securityTables: TableProduct[] = [
  {
    id: "144",
    title: "SECURITY CHECKPOINT DESK",
    code: "JDS-SEC-001",
    price: formatLKR(42000),
    numericPrice: 42000,
    image: "/assets/sc/sc01.jpg",
    category: "Office",
    subcategory: "Security Tables",
    description:
      "Heavy-duty front entrance security post desk with visitor logbook shelf, security radio bracket, and lockable security key box.",
    inStock: true,
    faqs: [
      {
        id: "jds-sec-001-mat",
        question: "What materials and structural framework are used in the Security Checkpoint Desk (JDS-SEC-001)?",
        answer:
          "The Security Checkpoint Desk (JDS-SEC-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-sec-001-feat",
        question: "What storage compartments and functional hardware are included in the Security Checkpoint Desk?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-sec-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Security Checkpoint Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-sec-001-maint",
        question: "How do I clean and maintain the Security Checkpoint Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-sec-001-del",
        question: "How is the Security Checkpoint Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Security Checkpoint Desk (JDS-SEC-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "145",
    title: "CCTV MONITOR WORKSTATION",
    code: "JDS-SEC-002",
    price: formatLKR(48000),
    numericPrice: 48000,
    image: "/assets/sc/sc02.jpg",
    category: "Office",
    subcategory: "Security Tables",
    description:
      "Surveillance control room desk with reinforced multi-monitor platform, cable grommet passes, and CPU storage compartment.",
    inStock: true,
    faqs: [
      {
        id: "jds-sec-002-mat",
        question: "What materials and structural framework are used in the Cctv Monitor Workstation (JDS-SEC-002)?",
        answer:
          "The Cctv Monitor Workstation (JDS-SEC-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-sec-002-feat",
        question: "What storage compartments and functional hardware are included in the Cctv Monitor Workstation?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-sec-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Cctv Monitor Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-sec-002-maint",
        question: "How do I clean and maintain the Cctv Monitor Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-sec-002-del",
        question: "How is the Cctv Monitor Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Cctv Monitor Workstation (JDS-SEC-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "146",
    title: "GATEHOUSE INSPECTION DESK",
    code: "JDS-SEC-003",
    price: formatLKR(39000),
    numericPrice: 39000,
    image: "/assets/sc/sc03.jpg",
    category: "Office",
    subcategory: "Security Tables",
    description:
      "Compact gatehouse security desk designed for barrier checkpoints with weather-sealed scratch-resistant commercial laminate.",
    inStock: true,
    faqs: [
      {
        id: "jds-sec-003-mat",
        question: "What materials and structural framework are used in the Gatehouse Inspection Desk (JDS-SEC-003)?",
        answer:
          "The Gatehouse Inspection Desk (JDS-SEC-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-sec-003-feat",
        question: "What storage compartments and functional hardware are included in the Gatehouse Inspection Desk?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-sec-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Gatehouse Inspection Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-sec-003-maint",
        question: "How do I clean and maintain the Gatehouse Inspection Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-sec-003-del",
        question: "How is the Gatehouse Inspection Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Gatehouse Inspection Desk (JDS-SEC-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "147",
    title: "GUARD POST WRITING TABLE",
    code: "JDS-SEC-004",
    price: formatLKR(35000),
    numericPrice: 35000,
    image: "/assets/sc/sc04.jpg",
    category: "Office",
    subcategory: "Security Tables",
    description:
      "Industrial guard post writing table with steel welded legs, lockable drawer, and high-impact PVC edges for 24/7 security duty.",
    inStock: true,
    faqs: [
      {
        id: "jds-sec-004-mat",
        question: "What materials and structural framework are used in the Guard Post Writing Table (JDS-SEC-004)?",
        answer:
          "The Guard Post Writing Table (JDS-SEC-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-sec-004-feat",
        question: "What storage compartments and functional hardware are included in the Guard Post Writing Table?",
        answer:
          "Equipped with adjustable heavy-duty shelving, smooth-gliding drawer runners, and soft-close hinges tested for long-lasting commercial and residential durability.",
      },
      {
        id: "jds-sec-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Guard Post Writing Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-sec-004-maint",
        question: "How do I clean and maintain the Guard Post Writing Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-sec-004-del",
        question: "How is the Guard Post Writing Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Guard Post Writing Table (JDS-SEC-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// Master list of all Office Tables
export const officeTables: TableProduct[] = [
  ...executiveTables,
  ...managerTables,
  ...officerTables,
  ...staffTables,
  ...meetingTables,
  ...computerTables,
  ...workstationTables,
  ...securityTables,
];
