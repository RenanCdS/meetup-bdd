export interface MedicineRegisterRequest {
  medicineName: string;
  medicineDescription: string;
  medicineCategory: string;
  trackingCode: number;
  dueDate: Date;
}
