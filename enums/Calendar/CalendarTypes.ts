export interface GetFreeBusyPayload {
  "timeMin": Date,
  "timeMax": Date,
  "timeZone": string,
  "groupExpansionMax"?: number,
  "calendarExpansionMax"?: number,
  "items": { "id": string }[]
}

export interface GetFreeBusyResponse {
  "kind": "calendar#freeBusy",
  "timeMin": Date,
  "timeMax": Date,
  "groups"?: {
    [key: string]: {
      "errors": {
        "domain": string,
        "reason": string
      }[],
      "calendars": string[]
    }
  },
  "calendars"?: {
    [key: string]: {
      "errors": {
        "domain": string,
        "reason": string
      }[],
      "busy": {
        "start": Date,
        "end": Date
      }[]
    }
  }
}

export interface TimeInterval {
  start: Date,
  end: Date,
}

export interface TimeIntervals {
  intervals: TimeInterval[]
}

export interface CalendarList {
  "kind": string,
  "etag": string,
  "nextSyncToken": string,
  "items": CalendarListEntry[]
}

export interface CalendarListEntry {
  "kind": string,
  "etag": string,
  "id": string,
  "summary": string,
  "description": string,
  "location": string,
  "timeZone": string,
  "summaryOverride": string,
  "colorId": string,
  "backgroundColor": string,
  "foregroundColor": string,
  "hidden": boolean,
  "selected": boolean,
  "accessRole": string,
  "defaultReminders": [
    {
      "method": string,
      "minutes": number
    }
  ],
  "notificationSettings": {
    "notifications": [
      {
        "type": string,
        "method": string
      }
    ]
  },
  "primary": boolean,
  "deleted": boolean,
  "conferenceProperties": {
    "allowedConferenceSolutionTypes": [
      string
    ]
  }
}