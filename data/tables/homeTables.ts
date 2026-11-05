import { TableProduct } from "./types";
import { FAQItem } from "../faqs";

// Helper to format currency
function formatLKR(amount: number): string {
  return `LKR ${amount.toLocaleString("en-US")}`;
}

// 1. Dining Tables (12 models)
export const diningTables: TableProduct[] = [
  {
    id: "1",
    title: "8-SEATER SPACIOUS DINING TABLE",
    code: "JDS-DT-001",
    price: formatLKR(95000),
    numericPrice: 95000,
    image: "/assets/dt/dt01.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Masterfully crafted 8-seater dining table featuring angled architectural matte black steel trestle legs and chamfered melamine edges.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-001-mat",
        question: "What materials and structural framework are used in the 8-seater Spacious Dining Table (JDS-DT-001)?",
        answer:
          "The 8-seater Spacious Dining Table (JDS-DT-001) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-001-feat",
        question: "How many guests does the 8-seater Spacious Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The 8-seater Spacious Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the 8-seater Spacious Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-001-maint",
        question: "How do I clean and maintain the 8-seater Spacious Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-001-del",
        question: "How is the 8-seater Spacious Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The 8-seater Spacious Dining Table (JDS-DT-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "2",
    title: "CONTEMPORARY SLAB DINING TABLE",
    code: "JDS-DT-002",
    price: formatLKR(125000),
    numericPrice: 125000,
    image: "/assets/dt/dt02.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Contemporary rectangular dining table pairing a rich woodgrain melamine top with heavy-duty slab legs and protective PVC edging.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-002-mat",
        question: "What materials and structural framework are used in the Contemporary Slab Dining Table (JDS-DT-002)?",
        answer:
          "The Contemporary Slab Dining Table (JDS-DT-002) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-duty reinforced slab support legs.",
      },
      {
        id: "jds-dt-002-feat",
        question: "How many guests does the Contemporary Slab Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Contemporary Slab Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary Slab Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-002-maint",
        question: "How do I clean and maintain the Contemporary Slab Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-002-del",
        question: "How is the Contemporary Slab Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary Slab Dining Table (JDS-DT-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "3",
    title: "RECESSED PEDESTAL DINING TABLE",
    code: "JDS-DT-003",
    price: formatLKR(115000),
    numericPrice: 115000,
    image: "/assets/dt/dt03.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Executive penthouse dining table crafted with premium melamine woodgrain, warm metallic inlay perimeter, and solid pedestal base.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-003-mat",
        question: "What materials and structural framework are used in the Recessed Pedestal Dining Table (JDS-DT-003)?",
        answer:
          "The Recessed Pedestal Dining Table (JDS-DT-003) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-003-feat",
        question: "How many guests does the Recessed Pedestal Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Recessed Pedestal Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Recessed Pedestal Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-003-maint",
        question: "How do I clean and maintain the Recessed Pedestal Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-003-del",
        question: "How is the Recessed Pedestal Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Recessed Pedestal Dining Table (JDS-DT-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "4",
    title: "CONTEMPORARY 6-SEATER DINING TABLE",
    code: "JDS-DT-004",
    price: formatLKR(78000),
    numericPrice: 78000,
    image: "/assets/dt/dt04.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Classic 6-seater dining table with natural satin finish, sturdy steel framework, and easy-to-clean stain-resistant top.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-004-mat",
        question: "What materials and structural framework are used in the Contemporary 6-seater Dining Table (JDS-DT-004)?",
        answer:
          "The Contemporary 6-seater Dining Table (JDS-DT-004) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-004-feat",
        question: "How many guests does the Contemporary 6-seater Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Contemporary 6-seater Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary 6-seater Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-004-maint",
        question: "How do I clean and maintain the Contemporary 6-seater Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-004-del",
        question: "How is the Contemporary 6-seater Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary 6-seater Dining Table (JDS-DT-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "5",
    title: "WHITE EXTENDABLE DINING TABLE",
    code: "JDS-DT-005",
    price: formatLKR(84000),
    numericPrice: 84000,
    image: "/assets/dt/dt05.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Clean modern dining table in arctic white matte finish with internal smooth butterfly extension mechanism to seat up to 8 people.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-005-mat",
        question: "What materials and structural framework are used in the White Extendable Dining Table (JDS-DT-005)?",
        answer:
          "The White Extendable Dining Table (JDS-DT-005) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-005-feat",
        question: "How many guests does the White Extendable Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The White Extendable Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the White Extendable Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-005-maint",
        question: "How do I clean and maintain the White Extendable Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-005-del",
        question: "How is the White Extendable Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The White Extendable Dining Table (JDS-DT-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "6",
    title: "BLACK & NATURAL DINING TABLE",
    code: "JDS-DT-006",
    price: formatLKR(88000),
    numericPrice: 88000,
    image: "/assets/dt/dt06.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Industrial contemporary dining table pairing a rich melamine slab top with geometric heavy-gauge steel trapezoid support legs.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-006-mat",
        question: "What materials and structural framework are used in the Black & Natural Dining Table (JDS-DT-006)?",
        answer:
          "The Black & Natural Dining Table (JDS-DT-006) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-006-feat",
        question: "How many guests does the Black & Natural Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Black & Natural Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Black & Natural Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-006-maint",
        question: "How do I clean and maintain the Black & Natural Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-006-del",
        question: "How is the Black & Natural Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Black & Natural Dining Table (JDS-DT-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "7",
    title: "CONTEMPORARY RECTANGULAR DINING TABLE",
    code: "JDS-DT-007",
    price: formatLKR(88000),
    numericPrice: 88000,
    image: "/assets/dt/dt07.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Industrial contemporary dining table pairing a rich melamine slab top with geometric heavy-gauge steel trapezoid support legs.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-007-mat",
        question: "What materials and structural framework are used in the Contemporary Rectangular Dining Table (JDS-DT-007)?",
        answer:
          "The Contemporary Rectangular Dining Table (JDS-DT-007) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-007-feat",
        question: "How many guests does the Contemporary Rectangular Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Contemporary Rectangular Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary Rectangular Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-007-maint",
        question: "How do I clean and maintain the Contemporary Rectangular Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-007-del",
        question: "How is the Contemporary Rectangular Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary Rectangular Dining Table (JDS-DT-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "8",
    title: "SLIMLINE STEEL BASE DINING TABLE",
    code: "JDS-DT-008",
    price: formatLKR(88000),
    numericPrice: 88000,
    image: "/assets/dt/dt08.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Industrial contemporary dining table pairing a rich melamine slab top with geometric heavy-gauge steel trapezoid support legs.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-008-mat",
        question: "What materials and structural framework are used in the Slimline Steel Base Dining Table (JDS-DT-008)?",
        answer:
          "The Slimline Steel Base Dining Table (JDS-DT-008) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-008-feat",
        question: "How many guests does the Slimline Steel Base Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Slimline Steel Base Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Slimline Steel Base Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-008-maint",
        question: "How do I clean and maintain the Slimline Steel Base Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-008-del",
        question: "How is the Slimline Steel Base Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Slimline Steel Base Dining Table (JDS-DT-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "9",
    title: "ELEGANT FAMILY DINING TABLE",
    code: "JDS-DT-009",
    price: formatLKR(88000),
    numericPrice: 88000,
    image: "/assets/dt/dt09.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Industrial contemporary dining table pairing a rich honey woodgrain melamine slab top with geometric heavy-gauge steel trapezoid support legs.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-009-mat",
        question: "What materials and structural framework are used in the Elegant Family Dining Table (JDS-DT-009)?",
        answer:
          "The Elegant Family Dining Table (JDS-DT-009) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-009-feat",
        question: "How many guests does the Elegant Family Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Elegant Family Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-009-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Elegant Family Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-009-maint",
        question: "How do I clean and maintain the Elegant Family Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-009-del",
        question: "How is the Elegant Family Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Elegant Family Dining Table (JDS-DT-009) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "10",
    title: "RUSTIC RECTANGULAR DINING TABLE",
    code: "JDS-DT-010",
    price: formatLKR(88000),
    numericPrice: 88000,
    image: "/assets/dt/dt10.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Industrial contemporary dining table pairing a rich honey woodgrain melamine slab top with geometric heavy-gauge steel trapezoid support legs.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-010-mat",
        question: "What materials and structural framework are used in the Rustic Rectangular Dining Table (JDS-DT-010)?",
        answer:
          "The Rustic Rectangular Dining Table (JDS-DT-010) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-010-feat",
        question: "How many guests does the Rustic Rectangular Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Rustic Rectangular Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-010-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Rustic Rectangular Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-010-maint",
        question: "How do I clean and maintain the Rustic Rectangular Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-010-del",
        question: "How is the Rustic Rectangular Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Rustic Rectangular Dining Table (JDS-DT-010) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "11",
    title: "CONTEMPORARY DINING TABLE",
    code: "JDS-DT-011",
    price: formatLKR(88000),
    numericPrice: 88000,
    image: "/assets/dt/dt11.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Industrial contemporary dining table pairing a rich honey woodgrain melamine slab top with geometric heavy-gauge steel trapezoid support legs.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-011-mat",
        question: "What materials and structural framework are used in the Contemporary Dining Table (JDS-DT-011)?",
        answer:
          "The Contemporary Dining Table (JDS-DT-011) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-011-feat",
        question: "How many guests does the Contemporary Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Contemporary Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-011-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-011-maint",
        question: "How do I clean and maintain the Contemporary Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-011-del",
        question: "How is the Contemporary Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary Dining Table (JDS-DT-011) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "12",
    title: "MINIMALIST DINING TABLE",
    code: "JDS-DT-012",
    price: formatLKR(88000),
    numericPrice: 88000,
    image: "/assets/dt/dt12.jpg",
    category: "Home",
    subcategory: "Dining Tables",
    description:
      "Industrial contemporary dining table pairing a rich honey woodgrain melamine slab top with geometric heavy-gauge steel trapezoid support legs.",
    inStock: true,
    faqs: [
      {
        id: "jds-dt-012-mat",
        question: "What materials and structural framework are used in the Minimalist Dining Table (JDS-DT-012)?",
        answer:
          "The Minimalist Dining Table (JDS-DT-012) is built with high-density commercial melamine with a non-porous finish, 2mm PVC protective edging, and heavy-gauge architectural powder-coated steel legs.",
      },
      {
        id: "jds-dt-012-feat",
        question: "How many guests does the Minimalist Dining Table seat, and is the surface resistant to hot food and spills?",
        answer:
          "The Minimalist Dining Table provides comfortable dining space with generous legroom. The non-porous melamine surface is heat-resistant against hot dishware and completely resistant to water rings and food stains.",
      },
      {
        id: "jds-dt-012-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Minimalist Dining Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-dt-012-maint",
        question: "How do I clean and maintain the Minimalist Dining Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-dt-012-del",
        question: "How is the Minimalist Dining Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Minimalist Dining Table (JDS-DT-012) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 2. Study Tables (10 models)
export const studyTables: TableProduct[] = [
  {
    id: "13",
    title: "NORDIC STUDY DESK",
    code: "JDS-ST-001",
    price: formatLKR(38000),
    numericPrice: 38000,
    image: "/assets/st/st01.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "Ergonomic home study desk featuring dual smooth-glide stationery drawers, cable routing channel, and natural woodgrain melamine finish.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-001-mat",
        question: "What materials and structural framework are used in the Nordic Study Desk (JDS-ST-001)?",
        answer:
          "The Nordic Study Desk (JDS-ST-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-001-feat",
        question: "What ergonomic features and wire management are built into the Nordic Study Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Nordic Study Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-001-maint",
        question: "How do I clean and maintain the Nordic Study Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-001-del",
        question: "How is the Nordic Study Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Nordic Study Desk (JDS-ST-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "14",
    title: "MINIMALIST LAPTOP DESK",
    code: "JDS-ST-002",
    price: formatLKR(42000),
    numericPrice: 42000,
    image: "/assets/st/st02.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "Space-saving study desk with integrated power strip bay, lockable drawer, and sturdy powder-coated white metal tubular frame.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-002-mat",
        question: "What materials and structural framework are used in the Minimalist Laptop Desk (JDS-ST-002)?",
        answer:
          "The Minimalist Laptop Desk (JDS-ST-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-002-feat",
        question: "What ergonomic features and wire management are built into the Minimalist Laptop Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Minimalist Laptop Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-002-maint",
        question: "How do I clean and maintain the Minimalist Laptop Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-002-del",
        question: "How is the Minimalist Laptop Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Minimalist Laptop Desk (JDS-ST-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "15",
    title: "STUDENT BOOKSHELF DESK",
    code: "JDS-ST-003",
    price: formatLKR(35000),
    numericPrice: 35000,
    image: "/assets/st/st10.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "Multi-tier student desk with built-in upper hutch shelving for textbooks, stationery organiser, and scratch-resistant study worktop.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-003-mat",
        question: "What materials and structural framework are used in the Student Bookshelf Desk (JDS-ST-003)?",
        answer:
          "The Student Bookshelf Desk (JDS-ST-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-003-feat",
        question: "What ergonomic features and wire management are built into the Student Bookshelf Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Student Bookshelf Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-003-maint",
        question: "How do I clean and maintain the Student Bookshelf Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-003-del",
        question: "How is the Student Bookshelf Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Student Bookshelf Desk (JDS-ST-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "16",
    title: "CORNER STUDY WORKSTATION",
    code: "JDS-ST-004",
    price: formatLKR(48000),
    numericPrice: 48000,
    image: "/assets/st/st03.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "L-shaped corner home office study table optimizing corner floor space with file cabinet pedestal and monitor riser shelf.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-004-mat",
        question: "What materials and structural framework are used in the Corner Study Workstation (JDS-ST-004)?",
        answer:
          "The Corner Study Workstation (JDS-ST-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-004-feat",
        question: "What ergonomic features and wire management are built into the Corner Study Workstation?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Corner Study Workstation?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-004-maint",
        question: "How do I clean and maintain the Corner Study Workstation, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-004-del",
        question: "How is the Corner Study Workstation delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Corner Study Workstation (JDS-ST-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
   {
    id: "17",
    title: "COMPACT WRITING TABLE",
    code: "JDS-ST-005",
    price: formatLKR(48000),
    numericPrice: 48000,
    image: "/assets/st/st04.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "L-shaped corner home office study table optimizing corner floor space with file cabinet pedestal and monitor riser shelf.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-005-mat",
        question: "What materials and structural framework are used in the Compact Writing Table (JDS-ST-005)?",
        answer:
          "The Compact Writing Table (JDS-ST-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-005-feat",
        question: "What ergonomic features and wire management are built into the Compact Writing Table?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Compact Writing Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-005-maint",
        question: "How do I clean and maintain the Compact Writing Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-005-del",
        question: "How is the Compact Writing Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Compact Writing Table (JDS-ST-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
   {
    id: "18",
    title: "DUAL-DRAWER STUDY TABLE",
    code: "JDS-ST-006",
    price: formatLKR(48000),
    numericPrice: 48000,
    image: "/assets/st/st05.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "L-shaped corner home office study table optimizing corner floor space with file cabinet pedestal and monitor riser shelf.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-006-mat",
        question: "What materials and structural framework are used in the Dual-drawer Study Table (JDS-ST-006)?",
        answer:
          "The Dual-drawer Study Table (JDS-ST-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-006-feat",
        question: "What ergonomic features and wire management are built into the Dual-drawer Study Table?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Dual-drawer Study Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-006-maint",
        question: "How do I clean and maintain the Dual-drawer Study Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-006-del",
        question: "How is the Dual-drawer Study Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Dual-drawer Study Table (JDS-ST-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
   {
    id: "19",
    title: "MODERN STUDY DESK",
    code: "JDS-ST-007",
    price: formatLKR(48000),
    numericPrice: 48000,
    image: "/assets/st/st06.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "L-shaped corner home office study table optimizing corner floor space with file cabinet pedestal and monitor riser shelf.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-007-mat",
        question: "What materials and structural framework are used in the Modern Study Desk (JDS-ST-007)?",
        answer:
          "The Modern Study Desk (JDS-ST-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-007-feat",
        question: "What ergonomic features and wire management are built into the Modern Study Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modern Study Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-007-maint",
        question: "How do I clean and maintain the Modern Study Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-007-del",
        question: "How is the Modern Study Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modern Study Desk (JDS-ST-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
   {
    id: "20",
    title: "STUDY & WORK HOME OFFICE DESK",
    code: "JDS-ST-008",
    price: formatLKR(48000),
    numericPrice: 48000,
    image: "/assets/st/st07.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "L-shaped corner home office study table optimizing corner floor space with file cabinet pedestal and monitor riser shelf.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-008-mat",
        question: "What materials and structural framework are used in the Study & Work Home Office Desk (JDS-ST-008)?",
        answer:
          "The Study & Work Home Office Desk (JDS-ST-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-008-feat",
        question: "What ergonomic features and wire management are built into the Study & Work Home Office Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Study & Work Home Office Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-008-maint",
        question: "How do I clean and maintain the Study & Work Home Office Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-008-del",
        question: "How is the Study & Work Home Office Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Study & Work Home Office Desk (JDS-ST-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
   {
    id: "21",
    title: "STUDENT STUDY DESK",
    code: "JDS-ST-009",
    price: formatLKR(48000),
    numericPrice: 48000,
    image: "/assets/st/st08.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "L-shaped corner home office study table optimizing corner floor space with file cabinet pedestal and monitor riser shelf.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-009-mat",
        question: "What materials and structural framework are used in the Student Study Desk (JDS-ST-009)?",
        answer:
          "The Student Study Desk (JDS-ST-009) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-009-feat",
        question: "What ergonomic features and wire management are built into the Student Study Desk?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-009-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Student Study Desk?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-009-maint",
        question: "How do I clean and maintain the Student Study Desk, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-009-del",
        question: "How is the Student Study Desk delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Student Study Desk (JDS-ST-009) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
   {
    id: "22",
    title: "EXECUTIVE STUDY TABLE",
    code: "JDS-ST-010",
    price: formatLKR(48000),
    numericPrice: 48000,
    image: "/assets/st/st09.jpg",
    category: "Home",
    subcategory: "Study Tables",
    description:
      "L-shaped corner home office study table optimizing corner floor space with file cabinet pedestal and monitor riser shelf.",
    inStock: true,
    faqs: [
      {
        id: "jds-st-010-mat",
        question: "What materials and structural framework are used in the Executive Study Table (JDS-ST-010)?",
        answer:
          "The Executive Study Table (JDS-ST-010) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-st-010-feat",
        question: "What ergonomic features and wire management are built into the Executive Study Table?",
        answer:
          "Designed at the standard ergonomic desk height of 750mm with pre-drilled cable ports, ample leg clearance, and optional CPU / bookshelf storage attachments.",
      },
      {
        id: "jds-st-010-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Executive Study Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-st-010-maint",
        question: "How do I clean and maintain the Executive Study Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-st-010-del",
        question: "How is the Executive Study Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Executive Study Table (JDS-ST-010) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },

];

// 3. Coffee Tables (12 models)
export const coffeeTables: TableProduct[] = [
  {
    id: "23",
    title: "CURVED CORNER COFFEE TABLE",
    code: "JDS-CT-001",
    price: formatLKR(32000),
    numericPrice: 32000,
    image: "/assets/cf/cf01.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Organic minimalist coffee table in natural woodgrain melamine with rounded soft pill contours, solid slab pedestal legs, and low-sheen satin wax coating.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-001-mat",
        question: "What materials and structural framework are used in the Curved Corner Coffee Table (JDS-CT-001)?",
        answer:
          "The Curved Corner Coffee Table (JDS-CT-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-001-feat",
        question: "What functionality and storage features does the Curved Corner Coffee Table offer?",
        answer:
          "The Curved Corner Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Curved Corner Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-001-maint",
        question: "How do I clean and maintain the Curved Corner Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-001-del",
        question: "How is the Curved Corner Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Curved Corner Coffee Table (JDS-CT-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "24",
    title: "LOW PROFILE COFFEE TABLE",
    code: "JDS-CT-002",
    price: formatLKR(35000),
    numericPrice: 35000,
    image: "/assets/cf/cf02.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Contemporary living room coffee table with generous low-profile surface, solid joinery, and moisture-sealed melamine protection.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-002-mat",
        question: "What materials and structural framework are used in the Low Profile Coffee Table (JDS-CT-002)?",
        answer:
          "The Low Profile Coffee Table (JDS-CT-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-002-feat",
        question: "What functionality and storage features does the Low Profile Coffee Table offer?",
        answer:
          "The Low Profile Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Low Profile Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-002-maint",
        question: "How do I clean and maintain the Low Profile Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-002-del",
        question: "How is the Low Profile Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Low Profile Coffee Table (JDS-CT-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "25",
    title: "DUAL-TIER COFFEE TABLE",
    code: "JDS-CT-003",
    price: formatLKR(38000),
    numericPrice: 38000,
    image: "/assets/cf/cf03.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Two-tier coffee table with lower shelf for magazines and remotes, framed with durable dual-tone melamine accents.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-003-mat",
        question: "What materials and structural framework are used in the Dual-tier Coffee Table (JDS-CT-003)?",
        answer:
          "The Dual-tier Coffee Table (JDS-CT-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-003-feat",
        question: "What functionality and storage features does the Dual-tier Coffee Table offer?",
        answer:
          "The Dual-tier Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Dual-tier Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-003-maint",
        question: "How do I clean and maintain the Dual-tier Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-003-del",
        question: "How is the Dual-tier Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Dual-tier Coffee Table (JDS-CT-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "26",
    title: "SCANDINAVIAN COFFEE TABLE",
    code: "JDS-CT-004",
    price: formatLKR(29000),
    numericPrice: 29000,
    image: "/assets/cf/cf04.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Nordic inspired coffee table with smooth curved bullnose edges, tapered round dowel legs, and natural woodgrain display surface.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-004-mat",
        question: "What materials and structural framework are used in the Scandinavian Coffee Table (JDS-CT-004)?",
        answer:
          "The Scandinavian Coffee Table (JDS-CT-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-004-feat",
        question: "What functionality and storage features does the Scandinavian Coffee Table offer?",
        answer:
          "The Scandinavian Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Scandinavian Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-004-maint",
        question: "How do I clean and maintain the Scandinavian Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-004-del",
        question: "How is the Scandinavian Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Scandinavian Coffee Table (JDS-CT-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "27",
    title: "OVAL MODERN COFFEE TABLE",
    code: "JDS-CT-005",
    price: formatLKR(29000),
    numericPrice: 29000,
    image: "/assets/cf/cf05.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Nordic inspired coffee table with smooth curved bullnose edges, tapered round dowel legs, and natural woodgrain display surface.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-005-mat",
        question: "What materials and structural framework are used in the Oval Modern Coffee Table (JDS-CT-005)?",
        answer:
          "The Oval Modern Coffee Table (JDS-CT-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-005-feat",
        question: "What functionality and storage features does the Oval Modern Coffee Table offer?",
        answer:
          "The Oval Modern Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Oval Modern Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-005-maint",
        question: "How do I clean and maintain the Oval Modern Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-005-del",
        question: "How is the Oval Modern Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Oval Modern Coffee Table (JDS-CT-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "28",
    title: "ROUND ACCENT COFFEE TABLE",
    code: "JDS-CT-006",
    price: formatLKR(29000),
    numericPrice: 29000,
    image: "/assets/cf/cf06.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Nordic inspired coffee table with smooth curved bullnose edges, tapered round dowel legs, and natural woodgrain display surface.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-006-mat",
        question: "What materials and structural framework are used in the Round Accent Coffee Table (JDS-CT-006)?",
        answer:
          "The Round Accent Coffee Table (JDS-CT-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-006-feat",
        question: "What functionality and storage features does the Round Accent Coffee Table offer?",
        answer:
          "The Round Accent Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Round Accent Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-006-maint",
        question: "How do I clean and maintain the Round Accent Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-006-del",
        question: "How is the Round Accent Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Round Accent Coffee Table (JDS-CT-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "29",
    title: "GLASS TOP COFFEE TABLE",
    code: "JDS-CT-007",
    price: formatLKR(29000),
    numericPrice: 29000,
    image: "/assets/cf/cf07.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Nordic inspired coffee table with smooth curved bullnose edges, tapered round dowel legs, and natural woodgrain display surface.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-007-mat",
        question: "What materials and structural framework are used in the Glass Top Coffee Table (JDS-CT-007)?",
        answer:
          "The Glass Top Coffee Table (JDS-CT-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-007-feat",
        question: "What functionality and storage features does the Glass Top Coffee Table offer?",
        answer:
          "The Glass Top Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Glass Top Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-007-maint",
        question: "How do I clean and maintain the Glass Top Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-007-del",
        question: "How is the Glass Top Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Glass Top Coffee Table (JDS-CT-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "30",
    title: "INDUSTRIAL MATTE COFFEE TABLE",
    code: "JDS-CT-008",
    price: formatLKR(29000),
    numericPrice: 29000,
    image: "/assets/cf/cf08.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Nordic inspired coffee table with smooth curved bullnose edges, tapered round dowel legs, and natural woodgrain display surface.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-008-mat",
        question: "What materials and structural framework are used in the Industrial Matte Coffee Table (JDS-CT-008)?",
        answer:
          "The Industrial Matte Coffee Table (JDS-CT-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-008-feat",
        question: "What functionality and storage features does the Industrial Matte Coffee Table offer?",
        answer:
          "The Industrial Matte Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Industrial Matte Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-008-maint",
        question: "How do I clean and maintain the Industrial Matte Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-008-del",
        question: "How is the Industrial Matte Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Industrial Matte Coffee Table (JDS-CT-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "31",
    title: "MODERN SLATE COFFEE TABLE",
    code: "JDS-CT-009",
    price: formatLKR(29000),
    numericPrice: 29000,
    image: "/assets/cf/cf09.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Nordic inspired coffee table with smooth curved bullnose edges, tapered round dowel legs, and natural woodgrain display surface.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-009-mat",
        question: "What materials and structural framework are used in the Modern Slate Coffee Table (JDS-CT-009)?",
        answer:
          "The Modern Slate Coffee Table (JDS-CT-009) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-009-feat",
        question: "What functionality and storage features does the Modern Slate Coffee Table offer?",
        answer:
          "The Modern Slate Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-009-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modern Slate Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-009-maint",
        question: "How do I clean and maintain the Modern Slate Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-009-del",
        question: "How is the Modern Slate Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modern Slate Coffee Table (JDS-CT-009) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "32",
    title: "COMPACT GEOMETRIC COFFEE TABLE",
    code: "JDS-CT-010",
    price: formatLKR(29000),
    numericPrice: 29000,
    image: "/assets/cf/cf10.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Nordic inspired coffee table with smooth curved bullnose edges, tapered round dowel legs, and natural woodgrain display surface.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-010-mat",
        question: "What materials and structural framework are used in the Compact Geometric Coffee Table (JDS-CT-010)?",
        answer:
          "The Compact Geometric Coffee Table (JDS-CT-010) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-010-feat",
        question: "What functionality and storage features does the Compact Geometric Coffee Table offer?",
        answer:
          "The Compact Geometric Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-010-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Compact Geometric Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-010-maint",
        question: "How do I clean and maintain the Compact Geometric Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-010-del",
        question: "How is the Compact Geometric Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Compact Geometric Coffee Table (JDS-CT-010) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "33",
    title: "MARBLE LOOK COFFEE TABLE",
    code: "JDS-CT-011",
    price: formatLKR(29000),
    numericPrice: 29000,
    image: "/assets/cf/cf11.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Nordic inspired coffee table with smooth curved bullnose edges, tapered round dowel legs, and natural woodgrain display surface.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-011-mat",
        question: "What materials and structural framework are used in the Marble Look Coffee Table (JDS-CT-011)?",
        answer:
          "The Marble Look Coffee Table (JDS-CT-011) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-011-feat",
        question: "What functionality and storage features does the Marble Look Coffee Table offer?",
        answer:
          "The Marble Look Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-011-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Marble Look Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-011-maint",
        question: "How do I clean and maintain the Marble Look Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-011-del",
        question: "How is the Marble Look Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Marble Look Coffee Table (JDS-CT-011) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      {
    id: "34",
    title: "MINIMALIST COFFEE TABLE",
    code: "JDS-CT-012",
    price: formatLKR(29000),
    numericPrice: 29000,
    image: "/assets/cf/cf12.jpg",
    category: "Home",
    subcategory: "Coffee Tables",
    description:
      "Nordic inspired coffee table with smooth curved bullnose edges, tapered round dowel legs, and natural woodgrain display surface.",
    inStock: true,
    faqs: [
      {
        id: "jds-ct-012-mat",
        question: "What materials and structural framework are used in the Minimalist Coffee Table (JDS-CT-012)?",
        answer:
          "The Minimalist Coffee Table (JDS-CT-012) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-ct-012-feat",
        question: "What functionality and storage features does the Minimalist Coffee Table offer?",
        answer:
          "The Minimalist Coffee Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-ct-012-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Minimalist Coffee Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-ct-012-maint",
        question: "How do I clean and maintain the Minimalist Coffee Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-ct-012-del",
        question: "How is the Minimalist Coffee Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Minimalist Coffee Table (JDS-CT-012) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 4. Center Tables (16 models)
export const centerTables: TableProduct[] = [
  {
    id: "35",
    title: "MARBLE LOOK CENTER TABLE",
    code: "JDS-CNT-001",
    price: formatLKR(36000),
    numericPrice: 36000,
    image: "/assets/cnt/cnt01.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Sophisticated living room center table with marble-look scratch-proof composite top and brushed gold architectural steel frame.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-001-mat",
        question: "What materials and structural framework are used in the Marble Look Center Table (JDS-CNT-001)?",
        answer:
          "The Marble Look Center Table (JDS-CNT-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-001-feat",
        question: "What functionality and storage features does the Marble Look Center Table offer?",
        answer:
          "The Marble Look Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Marble Look Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-001-maint",
        question: "How do I clean and maintain the Marble Look Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-001-del",
        question: "How is the Marble Look Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Marble Look Center Table (JDS-CNT-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "36",
    title: "FLUTED ROUND CENTER TABLE",
    code: "JDS-CNT-002",
    price: formatLKR(39000),
    numericPrice: 39000,
    image: "/assets/cnt/cnt02.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Round focal center table with vertical tambour fluted cylindrical base and recessed circular top.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-002-mat",
        question: "What materials and structural framework are used in the Fluted Round Center Table (JDS-CNT-002)?",
        answer:
          "The Fluted Round Center Table (JDS-CNT-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-002-feat",
        question: "What functionality and storage features does the Fluted Round Center Table offer?",
        answer:
          "The Fluted Round Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Fluted Round Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-002-maint",
        question: "How do I clean and maintain the Fluted Round Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-002-del",
        question: "How is the Fluted Round Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Fluted Round Center Table (JDS-CNT-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "37",
    title: "CHARCOAL TWO-TONE CENTER TABLE",
    code: "JDS-CNT-003",
    price: formatLKR(34000),
    numericPrice: 34000,
    image: "/assets/cnt/cnt03.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Modern dual-tone center table combining dark charcoal matte body with melamine presentation ledge and concealed storage drawer.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-003-mat",
        question: "What materials and structural framework are used in the Charcoal Two-tone Center Table (JDS-CNT-003)?",
        answer:
          "The Charcoal Two-tone Center Table (JDS-CNT-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-003-feat",
        question: "What functionality and storage features does the Charcoal Two-tone Center Table offer?",
        answer:
          "The Charcoal Two-tone Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Charcoal Two-tone Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-003-maint",
        question: "How do I clean and maintain the Charcoal Two-tone Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-003-del",
        question: "How is the Charcoal Two-tone Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Charcoal Two-tone Center Table (JDS-CNT-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "38",
    title: "LOW LOUNGE CENTER TABLE",
    code: "JDS-CNT-004",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt04.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-004-mat",
        question: "What materials and structural framework are used in the Low Lounge Center Table (JDS-CNT-004)?",
        answer:
          "The Low Lounge Center Table (JDS-CNT-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-004-feat",
        question: "What functionality and storage features does the Low Lounge Center Table offer?",
        answer:
          "The Low Lounge Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Low Lounge Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-004-maint",
        question: "How do I clean and maintain the Low Lounge Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-004-del",
        question: "How is the Low Lounge Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Low Lounge Center Table (JDS-CNT-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "39",
    title: "GLASS ACCENT CENTER TABLE",
    code: "JDS-CNT-005",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt05.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-005-mat",
        question: "What materials and structural framework are used in the Glass Accent Center Table (JDS-CNT-005)?",
        answer:
          "The Glass Accent Center Table (JDS-CNT-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-005-feat",
        question: "What functionality and storage features does the Glass Accent Center Table offer?",
        answer:
          "The Glass Accent Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Glass Accent Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-005-maint",
        question: "How do I clean and maintain the Glass Accent Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-005-del",
        question: "How is the Glass Accent Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Glass Accent Center Table (JDS-CNT-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "40",
    title: "OVAL TWO-TIER CENTER TABLE",
    code: "JDS-CNT-006",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt06.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-006-mat",
        question: "What materials and structural framework are used in the Oval Two-tier Center Table (JDS-CNT-006)?",
        answer:
          "The Oval Two-tier Center Table (JDS-CNT-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-006-feat",
        question: "What functionality and storage features does the Oval Two-tier Center Table offer?",
        answer:
          "The Oval Two-tier Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Oval Two-tier Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-006-maint",
        question: "How do I clean and maintain the Oval Two-tier Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-006-del",
        question: "How is the Oval Two-tier Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Oval Two-tier Center Table (JDS-CNT-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "41",
    title: "CONTEMPORARY CENTER TABLE",
    code: "JDS-CNT-007",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt07.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-007-mat",
        question: "What materials and structural framework are used in the Contemporary Center Table (JDS-CNT-007)?",
        answer:
          "The Contemporary Center Table (JDS-CNT-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-007-feat",
        question: "What functionality and storage features does the Contemporary Center Table offer?",
        answer:
          "The Contemporary Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-007-maint",
        question: "How do I clean and maintain the Contemporary Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-007-del",
        question: "How is the Contemporary Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary Center Table (JDS-CNT-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "42",
    title: "STEEL FRAME CENTER TABLE",
    code: "JDS-CNT-008",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt08.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-008-mat",
        question: "What materials and structural framework are used in the Steel Frame Center Table (JDS-CNT-008)?",
        answer:
          "The Steel Frame Center Table (JDS-CNT-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-008-feat",
        question: "What functionality and storage features does the Steel Frame Center Table offer?",
        answer:
          "The Steel Frame Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Steel Frame Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-008-maint",
        question: "How do I clean and maintain the Steel Frame Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-008-del",
        question: "How is the Steel Frame Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Steel Frame Center Table (JDS-CNT-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "43",
    title: "MODERN ROUND CENTER TABLE",
    code: "JDS-CNT-009",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt09.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-009-mat",
        question: "What materials and structural framework are used in the Modern Round Center Table (JDS-CNT-009)?",
        answer:
          "The Modern Round Center Table (JDS-CNT-009) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-009-feat",
        question: "What functionality and storage features does the Modern Round Center Table offer?",
        answer:
          "The Modern Round Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-009-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Modern Round Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-009-maint",
        question: "How do I clean and maintain the Modern Round Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-009-del",
        question: "How is the Modern Round Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Modern Round Center Table (JDS-CNT-009) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "44",
    title: "SQUARE MINIMALIST CENTER TABLE",
    code: "JDS-CNT-010",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt10.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-010-mat",
        question: "What materials and structural framework are used in the Square Minimalist Center Table (JDS-CNT-010)?",
        answer:
          "The Square Minimalist Center Table (JDS-CNT-010) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-010-feat",
        question: "What functionality and storage features does the Square Minimalist Center Table offer?",
        answer:
          "The Square Minimalist Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-010-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Square Minimalist Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-010-maint",
        question: "How do I clean and maintain the Square Minimalist Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-010-del",
        question: "How is the Square Minimalist Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Square Minimalist Center Table (JDS-CNT-010) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "45",
    title: "LUXURY MARBLE CENTER TABLE",
    code: "JDS-CNT-011",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt11.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-011-mat",
        question: "What materials and structural framework are used in the Luxury Marble Center Table (JDS-CNT-011)?",
        answer:
          "The Luxury Marble Center Table (JDS-CNT-011) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-011-feat",
        question: "What functionality and storage features does the Luxury Marble Center Table offer?",
        answer:
          "The Luxury Marble Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-011-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Luxury Marble Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-011-maint",
        question: "How do I clean and maintain the Luxury Marble Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-011-del",
        question: "How is the Luxury Marble Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Luxury Marble Center Table (JDS-CNT-011) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "46",
    title: "MINIMALIST CENTER TABLE",
    code: "JDS-CNT-012",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt12.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-012-mat",
        question: "What materials and structural framework are used in the Minimalist Center Table (JDS-CNT-012)?",
        answer:
          "The Minimalist Center Table (JDS-CNT-012) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-012-feat",
        question: "What functionality and storage features does the Minimalist Center Table offer?",
        answer:
          "The Minimalist Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-012-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Minimalist Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-012-maint",
        question: "How do I clean and maintain the Minimalist Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-012-del",
        question: "How is the Minimalist Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Minimalist Center Table (JDS-CNT-012) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "47",
    title: "DUAL-SHELF CENTER TABLE",
    code: "JDS-CNT-013",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt13.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-013-mat",
        question: "What materials and structural framework are used in the Dual-shelf Center Table (JDS-CNT-013)?",
        answer:
          "The Dual-shelf Center Table (JDS-CNT-013) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-013-feat",
        question: "What functionality and storage features does the Dual-shelf Center Table offer?",
        answer:
          "The Dual-shelf Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-013-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Dual-shelf Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-013-maint",
        question: "How do I clean and maintain the Dual-shelf Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-013-del",
        question: "How is the Dual-shelf Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Dual-shelf Center Table (JDS-CNT-013) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "48",
    title: "GEO FRAME CENTER TABLE",
    code: "JDS-CNT-014",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt14.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-014-mat",
        question: "What materials and structural framework are used in the Geo Frame Center Table (JDS-CNT-014)?",
        answer:
          "The Geo Frame Center Table (JDS-CNT-014) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-014-feat",
        question: "What functionality and storage features does the Geo Frame Center Table offer?",
        answer:
          "The Geo Frame Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-014-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Geo Frame Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-014-maint",
        question: "How do I clean and maintain the Geo Frame Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-014-del",
        question: "How is the Geo Frame Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Geo Frame Center Table (JDS-CNT-014) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "49",
    title: "BLACK METAL CENTER TABLE",
    code: "JDS-CNT-015",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt15.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-015-mat",
        question: "What materials and structural framework are used in the Black Metal Center Table (JDS-CNT-015)?",
        answer:
          "The Black Metal Center Table (JDS-CNT-015) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-015-feat",
        question: "What functionality and storage features does the Black Metal Center Table offer?",
        answer:
          "The Black Metal Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-015-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Black Metal Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-015-maint",
        question: "How do I clean and maintain the Black Metal Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-015-del",
        question: "How is the Black Metal Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Black Metal Center Table (JDS-CNT-015) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "50",
    title: "COMPACT LIVING CENTER TABLE",
    code: "JDS-CNT-016",
    price: formatLKR(31000),
    numericPrice: 31000,
    image: "/assets/cnt/cnt16.jpg",
    category: "Home",
    subcategory: "Center Tables",
    description:
      "Architectural low-height center table designed for sectional sofa sets, built with water-resistant commercial melamine.",
    inStock: true,
    faqs: [
      {
        id: "jds-cnt-016-mat",
        question: "What materials and structural framework are used in the Compact Living Center Table (JDS-CNT-016)?",
        answer:
          "The Compact Living Center Table (JDS-CNT-016) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cnt-016-feat",
        question: "What functionality and storage features does the Compact Living Center Table offer?",
        answer:
          "The Compact Living Center Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cnt-016-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Compact Living Center Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cnt-016-maint",
        question: "How do I clean and maintain the Compact Living Center Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cnt-016-del",
        question: "How is the Compact Living Center Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Compact Living Center Table (JDS-CNT-016) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 5. Nesting Tables (4 models)
export const nestingTables: TableProduct[] = [
  {
    id: "51",
    title: "ROUND NESTING TABLES",
    code: "JDS-NST-001",
    price: formatLKR(32000),
    numericPrice: 32000,
    image: "/assets/ns/ns01.jpg",
    category: "Home",
    subcategory: "Nesting Tables",
    description:
      "Set of 3 round graduated nesting tables that slide seamlessly beneath one another to save space, featuring durable woodgrain melamine tops.",
    inStock: true,
    faqs: [
      {
        id: "jds-nst-001-mat",
        question: "What materials and structural framework are used in the Round Nesting Tables (JDS-NST-001)?",
        answer:
          "The Round Nesting Tables (JDS-NST-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-nst-001-feat",
        question: "What functionality and storage features does the Round Nesting Tables offer?",
        answer:
          "The Round Nesting Tables offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-nst-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Round Nesting Tables?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-nst-001-maint",
        question: "How do I clean and maintain the Round Nesting Tables, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-nst-001-del",
        question: "How is the Round Nesting Tables delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Round Nesting Tables (JDS-NST-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "52",
    title: "BRASS ACCENT NESTING TABLES",
    code: "JDS-NST-002",
    price: formatLKR(36000),
    numericPrice: 36000,
    image: "/assets/ns/ns02.jpg",
    category: "Home",
    subcategory: "Nesting Tables",
    description:
      "Set of 2 luxury nesting accent tables with warm brass-finished tubular steel bases and melamine tops.",
    inStock: true,
    faqs: [
      {
        id: "jds-nst-002-mat",
        question: "What materials and structural framework are used in the Brass Accent Nesting Tables (JDS-NST-002)?",
        answer:
          "The Brass Accent Nesting Tables (JDS-NST-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-nst-002-feat",
        question: "What functionality and storage features does the Brass Accent Nesting Tables offer?",
        answer:
          "The Brass Accent Nesting Tables offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-nst-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Brass Accent Nesting Tables?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-nst-002-maint",
        question: "How do I clean and maintain the Brass Accent Nesting Tables, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-nst-002-del",
        question: "How is the Brass Accent Nesting Tables delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Brass Accent Nesting Tables (JDS-NST-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "53",
    title: "BLACK GEOMETRIC NESTING TRIO",
    code: "JDS-NST-003",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/ns/ns03.jpg",
    category: "Home",
    subcategory: "Nesting Tables",
    description:
      "Modern industrial trio nesting tables with square matte black steel frames and dark woodgrain melamine inserts.",
    inStock: true,
    faqs: [
      {
        id: "jds-nst-003-mat",
        question: "What materials and structural framework are used in the Black Geometric Nesting Trio (JDS-NST-003)?",
        answer:
          "The Black Geometric Nesting Trio (JDS-NST-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-nst-003-feat",
        question: "What functionality and storage features does the Black Geometric Nesting Trio offer?",
        answer:
          "The Black Geometric Nesting Trio offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-nst-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Black Geometric Nesting Trio?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-nst-003-maint",
        question: "How do I clean and maintain the Black Geometric Nesting Trio, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-nst-003-del",
        question: "How is the Black Geometric Nesting Trio delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Black Geometric Nesting Trio (JDS-NST-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "54",
    title: "COMPACT NESTING TABLES",
    code: "JDS-NST-004",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/ns/ns04.jpg",
    category: "Home",
    subcategory: "Nesting Tables",
    description:
      "Modern industrial trio nesting tables with square matte black steel frames and dark woodgrain melamine inserts.",
    inStock: true,
    faqs: [
      {
        id: "jds-nst-004-mat",
        question: "What materials and structural framework are used in the Compact Nesting Tables (JDS-NST-004)?",
        answer:
          "The Compact Nesting Tables (JDS-NST-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-nst-004-feat",
        question: "What functionality and storage features does the Compact Nesting Tables offer?",
        answer:
          "The Compact Nesting Tables offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-nst-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Compact Nesting Tables?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-nst-004-maint",
        question: "How do I clean and maintain the Compact Nesting Tables, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-nst-004-del",
        question: "How is the Compact Nesting Tables delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Compact Nesting Tables (JDS-NST-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 6. Console Tables (9 models)
export const consoleTables: TableProduct[] = [
  {
    id: "55",
    title: "FLUTED SLAT CONSOLE TABLE",
    code: "JDS-CST-001",
    price: formatLKR(44000),
    numericPrice: 44000,
    image: "/assets/cst/cst01.jpg",
    category: "Home",
    subcategory: "Console Tables",
    description:
      "Narrow entryway and hallway console table with fluted front details, soft-close drawer, and key dish ledge.",
    inStock: true,
    faqs: [
      {
        id: "jds-cst-001-mat",
        question: "What materials and structural framework are used in the Fluted Slat Console Table (JDS-CST-001)?",
        answer:
          "The Fluted Slat Console Table (JDS-CST-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cst-001-feat",
        question: "What functionality and storage features does the Fluted Slat Console Table offer?",
        answer:
          "The Fluted Slat Console Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cst-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Fluted Slat Console Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cst-001-maint",
        question: "How do I clean and maintain the Fluted Slat Console Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cst-001-del",
        question: "How is the Fluted Slat Console Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Fluted Slat Console Table (JDS-CST-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "56",
    title: "MARBLE TOP CONSOLE TABLE",
    code: "JDS-CST-002",
    price: formatLKR(49000),
    numericPrice: 49000,
    image: "/assets/cst/cst02.jpg",
    category: "Home",
    subcategory: "Console Tables",
    description:
      "Architectural slimline corridor console table with heavy sintered marble-look top and slender black iron framework.",
    inStock: true,
    faqs: [
      {
        id: "jds-cst-002-mat",
        question: "What materials and structural framework are used in the Marble Top Console Table (JDS-CST-002)?",
        answer:
          "The Marble Top Console Table (JDS-CST-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cst-002-feat",
        question: "What functionality and storage features does the Marble Top Console Table offer?",
        answer:
          "The Marble Top Console Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cst-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Marble Top Console Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cst-002-maint",
        question: "How do I clean and maintain the Marble Top Console Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cst-002-del",
        question: "How is the Marble Top Console Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Marble Top Console Table (JDS-CST-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "57",
    title: "FOYER ACCENT CONSOLE TABLE",
    code: "JDS-CST-003",
    price: formatLKR(46000),
    numericPrice: 46000,
    image: "/assets/cst/cst03.jpg",
    category: "Home",
    subcategory: "Console Tables",
    description:
      "Warm woodgrain melamine foyer console table with dual flush storage drawers and lower display shelf for decorative vases.",
    inStock: true,
    faqs: [
      {
        id: "jds-cst-003-mat",
        question: "What materials and structural framework are used in the Foyer Accent Console Table (JDS-CST-003)?",
        answer:
          "The Foyer Accent Console Table (JDS-CST-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cst-003-feat",
        question: "What functionality and storage features does the Foyer Accent Console Table offer?",
        answer:
          "The Foyer Accent Console Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cst-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Foyer Accent Console Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cst-003-maint",
        question: "How do I clean and maintain the Foyer Accent Console Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cst-003-del",
        question: "How is the Foyer Accent Console Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Foyer Accent Console Table (JDS-CST-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "58",
    title: "SLIM ENTRYWAY CONSOLE TABLE",
    code: "JDS-CST-004",
    price: formatLKR(46000),
    numericPrice: 46000,
    image: "/assets/cst/cst04.jpg",
    category: "Home",
    subcategory: "Console Tables",
    description:
      "Warm woodgrain melamine foyer console table with dual flush storage drawers and lower display shelf for decorative vases.",
    inStock: true,
    faqs: [
      {
        id: "jds-cst-004-mat",
        question: "What materials and structural framework are used in the Slim Entryway Console Table (JDS-CST-004)?",
        answer:
          "The Slim Entryway Console Table (JDS-CST-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cst-004-feat",
        question: "What functionality and storage features does the Slim Entryway Console Table offer?",
        answer:
          "The Slim Entryway Console Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cst-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Slim Entryway Console Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cst-004-maint",
        question: "How do I clean and maintain the Slim Entryway Console Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cst-004-del",
        question: "How is the Slim Entryway Console Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Slim Entryway Console Table (JDS-CST-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "59",
    title: "SLIMLINE FOYER CONSOLE TABLE",
    code: "JDS-CST-005",
    price: formatLKR(46000),
    numericPrice: 46000,
    image: "/assets/cst/cst05.jpg",
    category: "Home",
    subcategory: "Console Tables",
    description:
      "Warm finish foyer console table with dual flush storage drawers and lower display shelf for decorative vases.",
    inStock: true,
    faqs: [
      {
        id: "jds-cst-005-mat",
        question: "What materials and structural framework are used in the Slimline Foyer Console Table (JDS-CST-005)?",
        answer:
          "The Slimline Foyer Console Table (JDS-CST-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cst-005-feat",
        question: "What functionality and storage features does the Slimline Foyer Console Table offer?",
        answer:
          "The Slimline Foyer Console Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cst-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Slimline Foyer Console Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cst-005-maint",
        question: "How do I clean and maintain the Slimline Foyer Console Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cst-005-del",
        question: "How is the Slimline Foyer Console Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Slimline Foyer Console Table (JDS-CST-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "60",
    title: "BLACK FRAME CONSOLE TABLE",
    code: "JDS-CST-006",
    price: formatLKR(46000),
    numericPrice: 46000,
    image: "/assets/cst/cst06.jpg",
    category: "Home",
    subcategory: "Console Tables",
    description:
      "Warm woodgrain melamine foyer console table with dual flush storage drawers and lower display shelf for decorative vases.",
    inStock: true,
    faqs: [
      {
        id: "jds-cst-006-mat",
        question: "What materials and structural framework are used in the Black Frame Console Table (JDS-CST-006)?",
        answer:
          "The Black Frame Console Table (JDS-CST-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cst-006-feat",
        question: "What functionality and storage features does the Black Frame Console Table offer?",
        answer:
          "The Black Frame Console Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cst-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Black Frame Console Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cst-006-maint",
        question: "How do I clean and maintain the Black Frame Console Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cst-006-del",
        question: "How is the Black Frame Console Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Black Frame Console Table (JDS-CST-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "61",
    title: "DUAL-TIER CONSOLE TABLE",
    code: "JDS-CST-007",
    price: formatLKR(46000),
    numericPrice: 46000,
    image: "/assets/cst/cst07.jpg",
    category: "Home",
    subcategory: "Console Tables",
    description:
      "Warm woodgrain melamine foyer console table with dual flush storage drawers and lower display shelf for decorative vases.",
    inStock: true,
    faqs: [
      {
        id: "jds-cst-007-mat",
        question: "What materials and structural framework are used in the Dual-tier Console Table (JDS-CST-007)?",
        answer:
          "The Dual-tier Console Table (JDS-CST-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cst-007-feat",
        question: "What functionality and storage features does the Dual-tier Console Table offer?",
        answer:
          "The Dual-tier Console Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cst-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Dual-tier Console Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cst-007-maint",
        question: "How do I clean and maintain the Dual-tier Console Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cst-007-del",
        question: "How is the Dual-tier Console Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Dual-tier Console Table (JDS-CST-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "62",
    title: "CONTEMPORARY CONSOLE TABLE",
    code: "JDS-CST-008",
    price: formatLKR(46000),
    numericPrice: 46000,
    image: "/assets/cst/cst08.jpg",
    category: "Home",
    subcategory: "Console Tables",
    description:
      "Warm woodgrain melamine foyer console table with dual flush storage drawers and lower display shelf for decorative vases.",
    inStock: true,
    faqs: [
      {
        id: "jds-cst-008-mat",
        question: "What materials and structural framework are used in the Contemporary Console Table (JDS-CST-008)?",
        answer:
          "The Contemporary Console Table (JDS-CST-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cst-008-feat",
        question: "What functionality and storage features does the Contemporary Console Table offer?",
        answer:
          "The Contemporary Console Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cst-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary Console Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cst-008-maint",
        question: "How do I clean and maintain the Contemporary Console Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cst-008-del",
        question: "How is the Contemporary Console Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary Console Table (JDS-CST-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "63",
    title: "MINIMALIST CONSOLE TABLE",
    code: "JDS-CST-009",
    price: formatLKR(46000),
    numericPrice: 46000,
    image: "/assets/cst/cst09.jpg",
    category: "Home",
    subcategory: "Console Tables",
    description:
      "Warm woodgrain melamine foyer console table with dual flush storage drawers and lower display shelf for decorative vases.",
    inStock: true,
    faqs: [
      {
        id: "jds-cst-009-mat",
        question: "What materials and structural framework are used in the Minimalist Console Table (JDS-CST-009)?",
        answer:
          "The Minimalist Console Table (JDS-CST-009) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-cst-009-feat",
        question: "What functionality and storage features does the Minimalist Console Table offer?",
        answer:
          "The Minimalist Console Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-cst-009-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Minimalist Console Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-cst-009-maint",
        question: "How do I clean and maintain the Minimalist Console Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-cst-009-del",
        question: "How is the Minimalist Console Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Minimalist Console Table (JDS-CST-009) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
];

// 7. Bedside Tables (16 models)
export const bedsideTables: TableProduct[] = [
  {
    id: "64",
    title: "NORDIC NIGHTSTAND",
    code: "JDS-BST-001",
    price: formatLKR(24000),
    numericPrice: 24000,
    image: "/assets/bt/bt01.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Bedroom nightstand in natural light woodgrain melamine with two deep soft-glide drawers, lamp surface, and recessed cable notch.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-001-mat",
        question: "What materials and structural framework are used in the Nordic Nightstand (JDS-BST-001)?",
        answer:
          "The Nordic Nightstand (JDS-BST-001) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-001-feat",
        question: "What functionality and storage features does the Nordic Nightstand offer?",
        answer:
          "The Nordic Nightstand offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-001-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Nordic Nightstand?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-001-maint",
        question: "How do I clean and maintain the Nordic Nightstand, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-001-del",
        question: "How is the Nordic Nightstand delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Nordic Nightstand (JDS-BST-001) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "65",
    title: "FLOATING BEDSIDE TABLE",
    code: "JDS-BST-002",
    price: formatLKR(21000),
    numericPrice: 21000,
    image: "/assets/bt/bt02.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Minimalist wall-hung floating bedside table with drawer storage and open book niche to maximize bedroom floor clearance.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-002-mat",
        question: "What materials and structural framework are used in the Floating Bedside Table (JDS-BST-002)?",
        answer:
          "The Floating Bedside Table (JDS-BST-002) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-002-feat",
        question: "What functionality and storage features does the Floating Bedside Table offer?",
        answer:
          "The Floating Bedside Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-002-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Floating Bedside Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-002-maint",
        question: "How do I clean and maintain the Floating Bedside Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-002-del",
        question: "How is the Floating Bedside Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Floating Bedside Table (JDS-BST-002) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
  {
    id: "66",
    title: "CONTEMPORARY DRAWER NIGHTSTAND",
    code: "JDS-BST-003",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt03.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in melamine finish with brushed gold brass drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-003-mat",
        question: "What materials and structural framework are used in the Contemporary Drawer Nightstand (JDS-BST-003)?",
        answer:
          "The Contemporary Drawer Nightstand (JDS-BST-003) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-003-feat",
        question: "What functionality and storage features does the Contemporary Drawer Nightstand offer?",
        answer:
          "The Contemporary Drawer Nightstand offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-003-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary Drawer Nightstand?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-003-maint",
        question: "How do I clean and maintain the Contemporary Drawer Nightstand, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-003-del",
        question: "How is the Contemporary Drawer Nightstand delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary Drawer Nightstand (JDS-BST-003) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
   {
    id: "67",
    title: "MINIMALIST FLOATING BEDSIDE TABLE",
    code: "JDS-BST-004",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt04.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in melamine finish with brushed gold brass drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-004-mat",
        question: "What materials and structural framework are used in the Minimalist Floating Bedside Table (JDS-BST-004)?",
        answer:
          "The Minimalist Floating Bedside Table (JDS-BST-004) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-004-feat",
        question: "What functionality and storage features does the Minimalist Floating Bedside Table offer?",
        answer:
          "The Minimalist Floating Bedside Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-004-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Minimalist Floating Bedside Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-004-maint",
        question: "How do I clean and maintain the Minimalist Floating Bedside Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-004-del",
        question: "How is the Minimalist Floating Bedside Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Minimalist Floating Bedside Table (JDS-BST-004) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "68",
    title: "SINGLE-DRAWER NIGHTSTAND",
    code: "JDS-BST-005",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt05.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in dark woodgrain melamine with brushed gold drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-005-mat",
        question: "What materials and structural framework are used in the Single-drawer Nightstand (JDS-BST-005)?",
        answer:
          "The Single-drawer Nightstand (JDS-BST-005) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-005-feat",
        question: "What functionality and storage features does the Single-drawer Nightstand offer?",
        answer:
          "The Single-drawer Nightstand offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-005-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Single-drawer Nightstand?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-005-maint",
        question: "How do I clean and maintain the Single-drawer Nightstand, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-005-del",
        question: "How is the Single-drawer Nightstand delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Single-drawer Nightstand (JDS-BST-005) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "69",
    title: "SLIM BEDSIDE TABLE",
    code: "JDS-BST-006",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt06.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in dark woodgrain melamine with brushed gold drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-006-mat",
        question: "What materials and structural framework are used in the Slim Bedside Table (JDS-BST-006)?",
        answer:
          "The Slim Bedside Table (JDS-BST-006) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-006-feat",
        question: "What functionality and storage features does the Slim Bedside Table offer?",
        answer:
          "The Slim Bedside Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-006-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Slim Bedside Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-006-maint",
        question: "How do I clean and maintain the Slim Bedside Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-006-del",
        question: "How is the Slim Bedside Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Slim Bedside Table (JDS-BST-006) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "70",
    title: "FLUTED SLAT NIGHTSTAND",
    code: "JDS-BST-007",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt07.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet with brushed gold brass drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-007-mat",
        question: "What materials and structural framework are used in the Fluted Slat Nightstand (JDS-BST-007)?",
        answer:
          "The Fluted Slat Nightstand (JDS-BST-007) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-007-feat",
        question: "What functionality and storage features does the Fluted Slat Nightstand offer?",
        answer:
          "The Fluted Slat Nightstand offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-007-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Fluted Slat Nightstand?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-007-maint",
        question: "How do I clean and maintain the Fluted Slat Nightstand, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-007-del",
        question: "How is the Fluted Slat Nightstand delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Fluted Slat Nightstand (JDS-BST-007) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "71",
    title: "OPEN-SHELF BEDSIDE TABLE",
    code: "JDS-BST-008",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt08.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet with brushed gold brass drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-008-mat",
        question: "What materials and structural framework are used in the Open-shelf Bedside Table (JDS-BST-008)?",
        answer:
          "The Open-shelf Bedside Table (JDS-BST-008) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-008-feat",
        question: "What functionality and storage features does the Open-shelf Bedside Table offer?",
        answer:
          "The Open-shelf Bedside Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-008-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Open-shelf Bedside Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-008-maint",
        question: "How do I clean and maintain the Open-shelf Bedside Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-008-del",
        question: "How is the Open-shelf Bedside Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Open-shelf Bedside Table (JDS-BST-008) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "72",
    title: "ROUND MODERN NIGHTSTAND",
    code: "JDS-BST-009",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt09.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet with brushed gold brass drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-009-mat",
        question: "What materials and structural framework are used in the Round Modern Nightstand (JDS-BST-009)?",
        answer:
          "The Round Modern Nightstand (JDS-BST-009) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-009-feat",
        question: "What functionality and storage features does the Round Modern Nightstand offer?",
        answer:
          "The Round Modern Nightstand offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-009-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Round Modern Nightstand?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-009-maint",
        question: "How do I clean and maintain the Round Modern Nightstand, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-009-del",
        question: "How is the Round Modern Nightstand delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Round Modern Nightstand (JDS-BST-009) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "73",
    title: "MINIMALIST BEDROOM NIGHTSTAND",
    code: "JDS-BST-010",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt10.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in dark woodgrain melamine with brushed gold drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-010-mat",
        question: "What materials and structural framework are used in the Minimalist Bedroom Nightstand (JDS-BST-010)?",
        answer:
          "The Minimalist Bedroom Nightstand (JDS-BST-010) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-010-feat",
        question: "What functionality and storage features does the Minimalist Bedroom Nightstand offer?",
        answer:
          "The Minimalist Bedroom Nightstand offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-010-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Minimalist Bedroom Nightstand?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-010-maint",
        question: "How do I clean and maintain the Minimalist Bedroom Nightstand, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-010-del",
        question: "How is the Minimalist Bedroom Nightstand delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Minimalist Bedroom Nightstand (JDS-BST-010) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "74",
    title: "LUXURY MARBLE BEDSIDE TABLE",
    code: "JDS-BST-011",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt11.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in dark woodgrain melamine with brushed gold drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-011-mat",
        question: "What materials and structural framework are used in the Luxury Marble Bedside Table (JDS-BST-011)?",
        answer:
          "The Luxury Marble Bedside Table (JDS-BST-011) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-011-feat",
        question: "What functionality and storage features does the Luxury Marble Bedside Table offer?",
        answer:
          "The Luxury Marble Bedside Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-011-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Luxury Marble Bedside Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-011-maint",
        question: "How do I clean and maintain the Luxury Marble Bedside Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-011-del",
        question: "How is the Luxury Marble Bedside Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Luxury Marble Bedside Table (JDS-BST-011) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "75",
    title: "DUAL-TIER NIGHTSTAND",
    code: "JDS-BST-012",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt12.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in dark woodgrain melamine with brushed gold drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-012-mat",
        question: "What materials and structural framework are used in the Dual-tier Nightstand (JDS-BST-012)?",
        answer:
          "The Dual-tier Nightstand (JDS-BST-012) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-012-feat",
        question: "What functionality and storage features does the Dual-tier Nightstand offer?",
        answer:
          "The Dual-tier Nightstand offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-012-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Dual-tier Nightstand?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-012-maint",
        question: "How do I clean and maintain the Dual-tier Nightstand, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-012-del",
        question: "How is the Dual-tier Nightstand delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Dual-tier Nightstand (JDS-BST-012) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "76",
    title: "CONTEMPORARY BEDSIDE TABLE",
    code: "JDS-BST-013",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt13.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in dark woodgrain melamine with brushed gold drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-013-mat",
        question: "What materials and structural framework are used in the Contemporary Bedside Table (JDS-BST-013)?",
        answer:
          "The Contemporary Bedside Table (JDS-BST-013) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-013-feat",
        question: "What functionality and storage features does the Contemporary Bedside Table offer?",
        answer:
          "The Contemporary Bedside Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-013-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Contemporary Bedside Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-013-maint",
        question: "How do I clean and maintain the Contemporary Bedside Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-013-del",
        question: "How is the Contemporary Bedside Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Contemporary Bedside Table (JDS-BST-013) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "77",
    title: "BLACK ACCENT NIGHTSTAND",
    code: "JDS-BST-014",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt14.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in dark woodgrain melamine with brushed gold drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-014-mat",
        question: "What materials and structural framework are used in the Black Accent Nightstand (JDS-BST-014)?",
        answer:
          "The Black Accent Nightstand (JDS-BST-014) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-014-feat",
        question: "What functionality and storage features does the Black Accent Nightstand offer?",
        answer:
          "The Black Accent Nightstand offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-014-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Black Accent Nightstand?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-014-maint",
        question: "How do I clean and maintain the Black Accent Nightstand, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-014-del",
        question: "How is the Black Accent Nightstand delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Black Accent Nightstand (JDS-BST-014) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "78",
    title: "SOFT-CLOSE BEDSIDE TABLE",
    code: "JDS-BST-015",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt15.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in dark woodgrain melamine with brushed gold drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-015-mat",
        question: "What materials and structural framework are used in the Soft-close Bedside Table (JDS-BST-015)?",
        answer:
          "The Soft-close Bedside Table (JDS-BST-015) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-015-feat",
        question: "What functionality and storage features does the Soft-close Bedside Table offer?",
        answer:
          "The Soft-close Bedside Table offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-015-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Soft-close Bedside Table?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-015-maint",
        question: "How do I clean and maintain the Soft-close Bedside Table, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-015-del",
        question: "How is the Soft-close Bedside Table delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Soft-close Bedside Table (JDS-BST-015) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
    {
    id: "79",
    title: "CLASSIC 2-DRAWER NIGHTSTAND",
    code: "JDS-BST-016",
    price: formatLKR(28000),
    numericPrice: 28000,
    image: "/assets/bt/bt16.jpg",
    category: "Home",
    subcategory: "Bedside Tables",
    description:
      "Prestige bedside cabinet in melamine finish with brushed gold brass drawer handles and velvet interior drawer lining.",
    inStock: true,
    faqs: [
      {
        id: "jds-bst-016-mat",
        question: "What materials and structural framework are used in the Classic 2-drawer Nightstand (JDS-BST-016)?",
        answer:
          "The Classic 2-drawer Nightstand (JDS-BST-016) is crafted from heavy-duty commercial melamine boards with 2mm PVC impact-absorbing edges and industrial powder-coated architectural steel framework.",
      },
      {
        id: "jds-bst-016-feat",
        question: "What functionality and storage features does the Classic 2-drawer Nightstand offer?",
        answer:
          "The Classic 2-drawer Nightstand offers a balanced modern silhouette with smooth-gliding storage drawers or open lower shelves to keep daily essentials neatly organized and accessible.",
      },
      {
        id: "jds-bst-016-custom",
        question: "Can I customize the dimensions, color finish, or configuration of the Classic 2-drawer Nightstand?",
        answer:
          "Yes! JDS Furniture specializes in bespoke custom manufacturing. You can customize the dimensions (length, depth, height), select from diverse melamine finishes (warm woodgrain, matte black, clean white, graphite grey), and choose left/right orientation to fit your space.",
      },
      {
        id: "jds-bst-016-maint",
        question: "How do I clean and maintain the Classic 2-drawer Nightstand, and what is its scratch resistance?",
        answer:
          "The commercial-grade melamine surface and powder-coated steel parts are stain, scratch, and moisture resistant under normal usage. Simply wipe clean with a soft, damp microfiber cloth and mild soap. No polishing oils or special chemicals are needed.",
      },
      {
        id: "jds-bst-016-del",
        question: "How is the Classic 2-drawer Nightstand delivered and assembled, and does it come with a warranty?",
        answer:
          "We provide reliable islandwide delivery across Sri Lanka with complimentary professional on-site assembly and precision leveling. The Classic 2-drawer Nightstand (JDS-BST-016) is backed by our standard JDS Furniture craftsmanship warranty covering hardware and materials.",
      },
    ],
  },
      

];

// Master list of all Home Tables
export const homeTables: TableProduct[] = [
  ...diningTables,
  ...studyTables,
  ...coffeeTables,
  ...centerTables,
  ...nestingTables,
  ...consoleTables,
  ...bedsideTables,
];
