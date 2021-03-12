import { Changes } from '@src/mesh/types/generated';

export type ChangelogDBRow = {
  memberUuid: string;
  advertiserId: number;
  fieldNamespace: string;
  fieldId: string;
  fieldName: string;
  oldValueRaw: string;
  oldValue: string;
  newValueRaw: string;
  newValue: string;
  comment: string;
};

export type ChangelogDBRows = ChangelogDBRow[];

export type FailedChangeReport = {
  fieldName: string;
  path: string;
};

export type FailedChangeReports = FailedChangeReport[];

export type LogData = Omit<Changes, '__typename'>;
