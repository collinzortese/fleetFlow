export type ShipmentStatus =
  | "PENDING"
  | "DISPATCHED"
  | "IN_TRANSIT"
  | "DELIVERED"
  | "EXCEPTION";

export type AssignmentStatus = "ACCEPTED" | "PENDING" | "REJECTED";

export type DeliveryProof = {
  id: string;
  originalName: string;
  contentType: string;
  sizeBytes: number;
  uploadedAt: string;
};

export type Shipment = {
  id: string;
  trackingCode: string;
  origin: string;
  destination: string;
  status: ShipmentStatus;
  assignmentStatus: AssignmentStatus;
  deliveryProofs: DeliveryProof[];
  driverId: string | null;
  driverName: string | null;
  customerName: string;
  updatedAt: string;
  eta: string;
  notes?: string;
};

export type ShipmentEvent = {
  status: ShipmentStatus;
  description: string;
  createdAt: string;
};

export type TrackedShipment = Pick<
  Shipment,
  "trackingCode" | "origin" | "destination" | "status" | "eta"
> & {
  events: ShipmentEvent[];
};

export const statusLabels: Record<ShipmentStatus, string> = {
  PENDING: "Pending",
  DISPATCHED: "Dispatched",
  IN_TRANSIT: "In transit",
  DELIVERED: "Delivered",
  EXCEPTION: "Exception",
};

export const statusOrder: ShipmentStatus[] = [
  "PENDING",
  "DISPATCHED",
  "IN_TRANSIT",
  "DELIVERED",
];
