export const company = {
  name: "Downtown Realtyj",
  legalName: "Downtown Realtyj Private Limited",
  city: "Patna, Bihar",
  url: "https://downtownrealtyj.com",
  rera: {
    agentNumber: "BRERAA44503/A-735/2026",
    portalUrl: "https://rera.bihar.gov.in/Certificate/Agent081020260829220hh5hh1hh0hh2026050432.pdf",
  },
  phones: [
    { 
        tel: "+919031845001", 
        display: "+91 90318 45001" 
    }, 
    { 
        tel: "+919031845010", 
        display: "+91 90318 45010" 
    }],
  email: "info@downtownrealtyj.com",
  address: "3rd Floor, Leeds Tower, Rupaspur, Patna, Bihar-801503",
  officeHours: "10 AM - 7 PM, Open on Sunday",
} as const;

export const isPlaceholder = (value: string) => value.startsWith("TODO");