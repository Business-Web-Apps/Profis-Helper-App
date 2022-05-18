export type JobUpdateInput = {
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
  description?: string;
  endDate?: Date | null;
  estimatedDuration?: number;
  jobType?: "move" | "gardening" | "furnitureAssembly";
  numberOfHelper?: number;
  paidAmount?: number | null;
  pricePerHour?: number;
  startDate?: Date;
  title?: string;
};
