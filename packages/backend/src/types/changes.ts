import { LogDbChanges } from '@src/mesh/types/generated';

export type ChangelogDBRow = {
  memberUuid: string;
  fieldId: string;
  oldValue: string;
  newValue: string;
  comment: string;
};

export type ChangelogDBRows = ChangelogDBRow[];

export type FailedChangeReport = {
  fieldId: string;
  path: string;
};

export type FailedChangeReports = FailedChangeReport[];

export type LogData = Omit<LogDbChanges, '__typename'>;
