export type Job = {
  createdAt: Date;
  currentStatus?:
    | "submitted"
    | "accepted"
    | "applyable"
    | "ready"
    | "inProgress"
    | "aborted"
    | "interrupted"
    | "done"
    | "cancelled";
  description: string;
  endDate: Date | null;
  estimatedDuration: number;
  id: string;
  jobType?: "move" | "gardening" | "furnitureAssembly";
  numberOfHelper: number;
  paidAmount: number | null;
  pricePerHour: number;
  startDate: Date;
  title: string;
  updatedAt: Date;
};
