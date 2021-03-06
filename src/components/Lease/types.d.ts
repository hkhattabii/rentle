import { IMeter } from "../../types";

export default interface ILeaseForm {
  image: string | File | undefined;
  beginDate: string;
  endDate: string;
  index: number;
  signatureDate: string;
  waterMeter: IMeter;
  gasMeter: IMeter;
  electricityMeter: IMeter;
  alarmDate: string | undefined;
  deposit: number;
  isFirstMonthPaid: boolean;
  visitBeginDate: string;
  visitEndDate: string;
}
