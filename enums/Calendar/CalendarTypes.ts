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

export interface CreateEventFuncPayload {
  "start": string,
  "end": string,
  "summary"?: string,
  "location"?: string,
  "description"?: string,
}

export interface CreateEventPayload {
  "start": {
    "dateTime": string,
    "timeZone"?: string,
  },
  "end": {
    "dateTime": string,
    "timeZone"?: string,
  },
  "summary"?: string,
  "location"?: string,
  "description"?: string,
}

export interface EventListPayload {
  "kind": "calendar#events",
  "etag": string,
  "summary": string,
  "description": string,
  "updated": string,
  "timeZone": string,
  "accessRole": string,
  "defaultReminders": [
    {
      "method": string,
      "minutes": number
    }
  ],
  "nextPageToken": string,
  "nextSyncToken": string,
  "items": EventPayload[]
}

export interface EventPayload {
  "kind": string,
  "etag": string,
  "id": string,
  "status": string,
  "htmlLink": string,
  "created": string,
  "updated": string,
  "summary": string,
  "description": string,
  "location": string,
  "colorId": string,
  "creator": {
    "id": string,
    "email": string,
    "displayName": string,
    "self": boolean
  },
  "organizer": {
    "id": string,
    "email": string,
    "displayName": string,
    "self": boolean
  },
  "start": {
    "date": string,
    "dateTime": string,
    "timeZone": string
  },
  "end": {
    "date": string,
    "dateTime": string,
    "timeZone": string
  },
  "endTimeUnspecified": boolean,
  "recurrence": [
    string
  ],
  "recurringEventId": string,
  "originalStartTime": {
    "date": string,
    "dateTime": string,
    "timeZone": string
  },
  "transparency": string,
  "visibility": string,
  "iCalUID": string,
  "sequence": number,
  "attendees": [
    {
      "id": string,
      "email": string,
      "displayName": string,
      "organizer": boolean,
      "self": boolean,
      "resource": boolean,
      "optional": boolean,
      "responseStatus": string,
      "comment": string,
      "additionalGuests": number
    }
  ],
  "attendeesOmitted": boolean,
  "extendedProperties": {
    "private": {
      [key: string]: string
    },
    "shared": {
      [key: string]: string
    }
  },
  "hangoutLink": string,
  "conferenceData": {
    "createRequest": {
      "requestId": string,
      "conferenceSolutionKey": {
        "type": string
      },
      "status": {
        "statusCode": string
      }
    },
    "entryPoints": [
      {
        "entryPointType": string,
        "uri": string,
        "label": string,
        "pin": string,
        "accessCode": string,
        "meetingCode": string,
        "passcode": string,
        "password": string
      }
    ],
    "conferenceSolution": {
      "key": {
        "type": string
      },
      "name": string,
      "iconUri": string
    },
    "conferenceId": string,
    "signature": string,
    "notes": string,
  },
  "gadget": {
    "type": string,
    "title": string,
    "link": string,
    "iconLink": string,
    "width": number,
    "height": number,
    "display": string,
    "preferences": {
      [key: string]: string
    }
  },
  "anyoneCanAddSelf": boolean,
  "guestsCanInviteOthers": boolean,
  "guestsCanModify": boolean,
  "guestsCanSeeOtherGuests": boolean,
  "privateCopy": boolean,
  "locked": boolean,
  "reminders": {
    "useDefault": boolean,
    "overrides": [
      {
        "method": string,
        "minutes": number
      }
    ]
  },
  "source": {
    "url": string,
    "title": string
  },
  "workingLocationProperties": {
    "type": string,
    "homeOffice": (number),
    "customLocation": {
      "label": string
    },
    "officeLocation": {
      "buildingId": string,
      "floorId": string,
      "floorSectionId": string,
      "deskId": string,
      "label": string
    }
  },
  "outOfOfficeProperties": {
    "autoDeclineMode": string,
    "declineMessage": string
  },
  "focusTimeProperties": {
    "autoDeclineMode": string,
    "declineMessage": string,
    "chatStatus": string
  },
  "attachments": [
    {
      "fileUrl": string,
      "title": string,
      "mimeType": string,
      "iconLink": string,
      "fileId": string
    }
  ],
  "birthdayProperties": {
    "contact": string,
    "type": string,
    "customTypeName": string
  },
  "eventType": string
}