export type TrustBadge = {
  id: string;
  label: string;
  iconSrc: string;
  iconAlt: string;
};

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: "rcvs",
    label: "RCVS-Registered Veterinary Nurse",
    iconSrc: "/images/badges/RCVS.png",
    iconAlt: "RCVS-Registered Veterinary Nurse certification badge",
  },
  {
    id: "qualified-nurse",
    label: "Qualified Veterinary Nurse",
    iconSrc: "/images/badges/Qualified.png",
    iconAlt: "Qualified Veterinary Nurse certification badge",
  },
  {
    id: "insured",
    label: "Fully Insured",
    iconSrc: "/images/badges/insured.png",
    iconAlt: "Fully Insured badge",
  },
  {
    id: "dbs",
    label: "DBS Checked",
    iconSrc: "/images/badges/dbs.png",
    iconAlt: "DBS Checked badge",
  },
  {
    id: "medication",
    label: "Medication Trained",
    iconSrc: "/images/badges/medication.png",
    iconAlt: "Medication Trained badge",
  },
  {
    id: "local",
    label: "Local Harpenden Specialist",
    iconSrc: "/images/badges/local.png",
    iconAlt: "Local Harpenden Specialist badge",
  },
];


