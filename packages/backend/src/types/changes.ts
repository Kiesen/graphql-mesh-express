import { LogDbChanges } from '@internalTypes/schema';
import { ChangelogRowTypes } from '@db/config/changelog';

export type ChangelogDBRows = Omit<ChangelogRowTypes, 'id'>[];

export type FailedChangeReport = {
  fieldId: string;
  path: string;
};

export type FailedChangeReports = FailedChangeReport[];

export type LogData = Omit<LogDbChanges, '__typename'>;
