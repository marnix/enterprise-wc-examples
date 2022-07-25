const eventsJSON = [
  {
    "id": "1",
    "subject": "Discretionary Time Off",
    "shortSubject": "DTO",
    "comments": "Short getaway",
    "location": "Us Office",
    "status": "Draft",
    "starts": "2018-08-22T00:00:00.000",
    "ends": "2018-08-22T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "2",
    "subject": "Dentist",
    "comments": "Quick check-up",
    "location": "Us Office",
    "status": "Draft",
    "starts": "2018-08-22T14:00:00.999",
    "ends": "2018-08-22T18:00:00.999",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "3",
    "subject": "Team Meeting",
    "comments": "Discuss fiscal year goals",
    "location": "Us Office",
    "starts": "2018-08-22T16:00:00.999",
    "ends": "2018-08-22T17:00:00.999",
    "type": "admin",
    "isAllDay": "false"
  },
  {
    "id": "4",
    "subject": "Moving Offices",
    "comments": "Moving from floor 6 to 7",
    "location": "Us Office",
    "starts": "2018-08-22T16:00:00.999",
    "ends": "2018-08-22T17:00:00.999",
    "type": "admin",
    "isAllDay": "false"
  },
  {
    "id": "5",
    "subject": "Scrum",
    "comments": "What are you working on? Any blockers?",
    "location": "Us Office",
    "starts": "2018-08-22T18:00:00.999",
    "ends": "2018-08-22T19:00:00.999",
    "type": "admin",
    "isAllDay": "false"
  },
  {
    "id": "6",
    "subject": "Discretionary Time Off",
    "shortSubject": "DTO",
    "comments": "Personal time",
    "location": "Canada Office",
    "status": "Approved",
    "starts": "2018-08-24T10:00:00.999",
    "ends": "2018-08-24T14:00:00.999",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "7",
    "subject": "Team Event",
    "comments": "Bowling and BBQ",
    "location": "Manilla Office",
    "status": "Approved",
    "starts": "2018-10-01T16:00:00.999",
    "ends": "2018-10-01T18:00:00.999",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "8",
    "subject": "Labor Day",
    "comments": "US Holiday",
    "location": "USA",
    "status": "Approved",
    "starts": "2018-09-03T00:00:00.000",
    "ends": "2018-09-03T23:59:59.999",
    "type": "holiday",
    "isAllDay": "true"
  },
  {
    "id": "9",
    "subject": "Autumn Foliage Trip",
    "comments": "Annual Autumn Foliage Trip",
    "status": "Pending",
    "icon": "clock",
    "starts": "2018-10-22T00:00:00.000",
    "ends": "2018-10-24T23:59:59.999",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "10",
    "subject": "Birthday Off",
    "comments": "Taking my birthday off",
    "starts": "2018-10-12T00:00:00.000",
    "ends": "2018-10-12T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "11",
    "subject": "Mexico Trip",
    "status": "Approved",
    "comments": "I week vacation in mexico",
    "starts": "2018-11-01T00:00:00.000",
    "ends": "2018-11-14T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "12",
    "subject": "Staying Home with Flu",
    "status": "Approved",
    "comments": "I dont feel well. Taking the day off.",
    "starts": "2018-11-16T00:00:00.000",
    "ends": "2018-11-16T23:59:59.999",
    "type": "sick",
    "isAllDay": "true"
  },
  {
    "id": "13",
    "subject": "Long Weekend",
    "status": "Submitted",
    "comments": "Going to DC",
    "starts": "2018-11-30T00:00:00.000",
    "ends": "2018-11-30T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "14",
    "subject": "Scrum",
    "comments": "What are you working on? Any blockers?",
    "location": "Us Office",
    "starts": "2018-11-09T18:00:00.999",
    "ends": "2018-11-09T19:00:00.999",
    "type": "admin",
    "isAllDay": "false"
  },
  {
    "id": "15",
    "subject": "One on One",
    "comments": "What are you working on? Any blockers?",
    "location": "Us Office",
    "starts": "2018-11-14T18:00:00.999",
    "ends": "2018-11-14T21:00:00.999",
    "type": "admin",
    "isAllDay": "false"
  },
  {
    "id": "16",
    "subject": "Christmas",
    "comments": "Santa and Presents",
    "starts": "2018-12-25T00:00:00.000",
    "ends": "2018-12-25T23:59:59.999",
    "type": "holiday",
    "isAllDay": "true"
  },
  {
    "id": "17",
    "subject": "Aruba Trip",
    "comments": "Family Trip",
    "starts": "2018-12-26T00:00:00.000",
    "ends": "2019-01-05T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "18",
    "subject": "Errands",
    "comments": "Run a few errands, bring giant card.",
    "starts": "2019-01-30T09:00:00.000",
    "ends": "2019-01-30T10:00:00.000",
    "type": "admin",
    "isAllDay": "false"
  },
  {
    "id": "19",
    "subject": "Spa Appt",
    "comments": "Quick Spa Appt.",
    "starts": "2019-01-30T11:00:00.000",
    "ends": "2019-01-30T12:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "20",
    "subject": "Doctors Appt",
    "comments": "See a Dr Smith",
    "starts": "2019-01-30T15:00:00.000",
    "ends": "2019-01-30T16:00:00.000",
    "type": "admin",
    "isAllDay": "false"
  },
  {
    "id": "21",
    "subject": "Quick bite",
    "comments": "Chick-fil-a Lancaster",
    "starts": "2019-01-30T16:00:00.000",
    "ends": "2019-01-30T17:00:00.000",
    "type": "admin",
    "isAllDay": "false"
  },
  {
    "id": "22",
    "subject": "Sick Day",
    "comments": "Not feeling well",
    "starts": "2019-02-01T00:00:00.000",
    "ends": "2019-02-02T23:59:59.999",
    "type": "sick",
    "isAllDay": "true"
  },
  {
    "id": "23",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Approved",
    "icon": "success-alert",
    "starts": "2019-02-10T12:00:00.000",
    "ends": "2019-02-10T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "24",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Not Approved",
    "icon": "error-alert",
    "starts": "2019-02-11T12:00:00.000",
    "ends": "2019-02-11T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "25",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Information Needed",
    "icon": "info-alert",
    "starts": "2019-02-12T12:00:00.000",
    "ends": "2019-02-12T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "26",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Rejected",
    "icon": "alert-alert",
    "starts": "2019-02-13T12:00:00.000",
    "ends": "2019-02-13T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "27",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Pending",
    "icon": "pending-alert",
    "starts": "2019-02-14T12:00:00.000",
    "ends": "2019-02-14T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "28",
    "subject": "Out of Office",
    "comments": "Going to Aruba",
    "status": "Pending",
    "icon": "pending-alert",
    "starts": "2019-03-28T00:00:00.000",
    "ends": "2019-03-30T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "29",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Rejected",
    "icon": "alert-alert",
    "starts": "2019-05-14T12:00:00.000",
    "ends": "2019-05-14T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "30",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Rejected",
    "icon": "alert-alert",
    "starts": "2019-05-27T12:00:00.000",
    "ends": "2019-05-27T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "31",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Rejected",
    "icon": "alert-alert",
    "starts": "2019-06-27T12:00:00.000",
    "ends": "2019-06-27T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "32",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Rejected",
    "icon": "alert-alert",
    "starts": "2019-06-30T12:00:00.000",
    "ends": "2019-06-30T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "33",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Rejected",
    "icon": "alert-alert",
    "starts": "2019-09-13T12:00:00.000",
    "ends": "2019-09-13T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "34",
    "subject": "Standup Meeting",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-09-22T08:00:00.000",
    "ends": "2019-09-22T08:30:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "34",
    "subject": "IDS Component Updates",
    "comments": "IDS Team Call",
    "starts": "2019-09-22T10:00:00.000",
    "ends": "2019-09-22T11:00:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "35",
    "subject": "Out of Office",
    "comments": "Out of office in the afternoon",
    "status": "Approved",
    "icon": "success-alert",
    "starts": "2019-09-25T12:00:00.000",
    "ends": "2019-09-25T18:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "36",
    "subject": "Out of Office",
    "comments": "Long Weekend",
    "starts": "2019-09-27T00:00:00.000",
    "ends": "2019-09-29T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "37",
    "subject": "Test Event A",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-21T07:00:00.000",
    "ends": "2019-10-21T07:15:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "38",
    "subject": "Test Event B",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-21T07:00:00.000",
    "ends": "2019-10-21T07:15:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "39",
    "subject": "Test Event C",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-21T07:00:00.000",
    "ends": "2019-10-21T07:15:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "40",
    "subject": "Test Event D",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-21T07:00:00.000",
    "ends": "2019-10-21T07:15:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "41",
    "subject": "Test Event E",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-21T07:00:00.000",
    "ends": "2019-10-21T07:15:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "42",
    "subject": "Test Event F",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-22T07:00:00.000",
    "ends": "2019-10-22T07:30:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "43",
    "subject": "Test Event G",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-22T08:30:00.000",
    "ends": "2019-10-22T09:00:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "44",
    "subject": "Test Event H",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-22T10:00:00.000",
    "ends": "2019-10-22T11:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "45",
    "subject": "Test Event I",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-22T11:30:00.000",
    "ends": "2019-10-22T12:30:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "46",
    "subject": "Test Event J",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-22T13:30:00.000",
    "ends": "2019-10-22T16:30:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "47",
    "subject": "Test Event K",
    "comments": "Weekly standup call",
    "status": "Recurring",
    "icon": "load",
    "starts": "2019-10-22T17:00:00.000",
    "ends": "2019-10-22T20:30:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "48",
    "subject": "IDS Component Updates",
    "comments": "Weekly call",
    "status": "Recurring",
    "starts": "2019-10-23T10:30:00.000",
    "ends": "2019-10-23T11:00:00.000",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "49",
    "subject": "QA Updates and Further Information",
    "comments": "Weekly call",
    "status": "Recurring",
    "starts": "2019-10-24T13:00:00.000",
    "ends": "2019-10-24T13:10:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "50",
    "subject": "Out of office in the afternoon",
    "icon": "success-alert",
    "comments": "Weekly call",
    "status": "Recurring",
    "starts": "2019-10-25T12:00:00.000",
    "ends": "2019-10-25T17:00:00.000",
    "type": "team",
    "isAllDay": "false"
  },
  {
    "id": "51",
    "subject": "Day Trip",
    "icon": "success-alert",
    "comments": "Weekly call",
    "starts": "2019-10-26T00:00:00.000",
    "ends": "2019-10-26T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "52",
    "subject": "Sample Event",
    "icon": "success-alert",
    "comments": "Weekly call",
    "starts": "2019-10-25T15:00:00.000",
    "ends": "2019-10-25T15:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "53",
    "subject": "Conference",
    "starts": "2019-10-21T00:00:00.000",
    "ends": "2019-10-23T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "54",
    "subject": "Day Trip",
    "icon": "success-alert",
    "comments": "Weekly call",
    "starts": "2019-10-31T00:00:00.000",
    "ends": "2019-10-31T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "55",
    "subject": "Conference",
    "starts": "2019-10-28T00:00:00.000",
    "ends": "2019-10-30T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "56",
    "subject": "All Day Event A",
    "starts": "2019-10-30T00:00:00.000",
    "ends": "2019-10-30T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "57",
    "subject": "All Day Event B",
    "starts": "2019-10-30T00:00:00.000",
    "ends": "2019-10-30T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "58",
    "subject": "All Day Event C",
    "starts": "2019-10-30T00:00:00.000",
    "ends": "2019-10-30T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "59",
    "subject": "Sample Event",
    "icon": "success-alert",
    "comments": "Weekly call",
    "starts": "2019-10-31T15:00:00.000",
    "ends": "2019-10-31T15:59:59.999",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "60",
    "subject": "Dentist",
    "icon": "pending",
    "comments": "Dentist Appt",
    "starts": "2019-11-03T15:00:00.000",
    "ends": "2019-11-03T15:59:59.999",
    "type": "sick",
    "isAllDay": "false"
  },
  {
    "id": "61",
    "subject": "Doctor",
    "comments": "Doctor Appt",
    "starts": "2019-11-06T15:00:00.000",
    "ends": "2019-11-06T15:59:59.999",
    "type": "sick",
    "isAllDay": "false"
  },
  {
    "id": "62",
    "subject": "Personal",
    "comments": "Personal Appt",
    "starts": "2019-11-30T15:00:00.000",
    "ends": "2019-11-30T15:59:59.999",
    "type": "sick",
    "isAllDay": "false"
  },
  {
    "id": "63",
    "subject": "Chiropractor",
    "comments": "Chiropractor Appt",
    "starts": "2019-12-02T15:00:00.000",
    "ends": "2019-12-02T15:59:59.999",
    "type": "sick",
    "isAllDay": "false"
  },
  {
    "id": "64",
    "subject": "Day Off",
    "starts": "2019-12-03T15:00:00.000",
    "ends": "2019-12-03T15:59:59.999",
    "type": "dto",
    "isAllDay": "false"
  },
  {
    "id": "65",
    "subject": "Personal",
    "icon": "clock",
    "comments": "Personal Appt",
    "starts": "2019-12-04T15:00:00.000",
    "ends": "2019-12-04T15:59:59.999",
    "type": "sick",
    "isAllDay": "false"
  },
  {
    "id": "66",
    "subject": "Mom in Town",
    "starts": "2019-12-04T00:00:00.000",
    "ends": "2019-12-05T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },{
    "id": "67",
    "subject": "Quick trip",
    "comments": "Short getaway",
    "status": "Draft",
    "starts": "2019-11-20T00:00:00.000",
    "ends": "2019-11-22T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "68",
    "subject": "Friends in Town",
    "starts": "2019-11-04T00:00:00.000",
    "ends": "2019-11-05T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "69",
    "subject": "Quick trip",
    "starts": "2020-06-08T00:00:00.000",
    "ends": "2020-06-10T23:59:59.999",
    "type": "dto",
    "isAllDay": "true"
  },
  {
    "id": "70",
    "subject": "Meetings",
    "starts": "2020-06-10T00:00:00.000",
    "ends": "2020-06-12T23:59:59.999",
    "type": "team",
    "isAllDay": "true"
  },
  {
    "id": "71",
    "subject": "More Meetings",
    "starts": "2020-06-12T00:00:00.000",
    "ends": "2020-06-15T23:59:59.999",
    "type": "admin",
    "isAllDay": "true"
  },
  {
    "id": "72",
    "subject": "Sick",
    "starts": "2020-06-16T00:00:00.000",
    "ends": "2020-06-16T23:59:59.999",
    "type": "dto",
    "isAllDay": "sick"
  },
  {
    "id": "73",
    "subject": "Sick",
    "starts": "2020-06-17T00:00:00.000",
    "ends": "2020-06-17T23:59:59.999",
    "type": "dto",
    "isAllDay": "sick"
  },
  {
    "id": "74",
    "subject": "Super Fun Party Day",
    "starts": "2020-07-29T00:00:00.000",
    "ends": "2020-07-29T23:59:59.999",
    "icon": "success-alert",
    "type": "dto",
    "color": "#D5F6C0",
    "borderColor": "#80ce4d"
  },
  {
    "id": "75",
    "subject": "Emergency Meeting",
    "starts": "2020-07-30T00:00:00.000",
    "ends": "2020-07-30T23:59:59.999",
    "type": "admin",
    "icon": "error-alert",
    "color": "#F6CACA",
    "borderColor": "#e84f4f"
  },
  {
    "id": "76",
    "subject": "Meeting",
    "starts": "2020-09-23T08:00:00.000",
    "ends": "2020-09-23T09:00:00.000",
    "type": "dto"
  }
];

export default eventsJSON;